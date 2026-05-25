import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Truck, Bomb, Target, Trophy, RotateCcw, Phone } from "lucide-react";
import { Link } from "react-router-dom";

// Truck definitions with sizes and rewards
const TRUCKS = [
  {
    name: "Mini Hauler",
    size: 2,
    icon: "🚚",
    color: "bg-yellow-500",
    brandColor: "text-yellow-600",
    reward: {
      title: "10% Off First Haul",
      description: "Mention code MINI10 when you call",
      code: "MINI10",
    },
  },
  {
    name: "Dump Runner",
    size: 3,
    icon: "🚛",
    color: "bg-orange-500",
    brandColor: "text-orange-600",
    reward: {
      title: "Free Expedited Delivery",
      description: "Skip the line — same-day dispatch",
      code: "RUNNERFREE",
    },
  },
  {
    name: "F&S Big Rig",
    size: 4,
    icon: "🏗️",
    color: "bg-red-600",
    brandColor: "text-red-600",
    reward: {
      title: "$100 Off Large Project",
      description: "Valid for orders over $1,000",
      code: "BIGRIG100",
    },
  },
];

// Cell types
interface Cell {
  row: number;
  col: number;
  isHit: boolean;
  isMiss: boolean;
  truckIndex: number | null;
  isRevealed: boolean;
}

// Generate empty board
const createBoard = (): Cell[][] => {
  const board: Cell[][] = [];
  for (let row = 0; row < 6; row++) {
    board[row] = [];
    for (let col = 0; col < 6; col++) {
      board[row][col] = {
        row,
        col,
        isHit: false,
        isMiss: false,
        truckIndex: null,
        isRevealed: false,
      };
    }
  }
  return board;
};

// Randomly place trucks on the board
const placeTrucks = (board: Cell[][]): Cell[][] => {
  const newBoard = board.map((row) => row.map((cell) => ({ ...cell })));
  const occupied = new Set<string>();

  TRUCKS.forEach((truck, truckIndex) => {
    let placed = false;
    let attempts = 0;

    while (!placed && attempts < 100) {
      attempts++;
      const isHorizontal = Math.random() > 0.5;
      const maxRow = isHorizontal ? 5 : 5 - truck.size + 1;
      const maxCol = isHorizontal ? 5 - truck.size + 1 : 5;

      const startRow = Math.floor(Math.random() * (maxRow + 1));
      const startCol = Math.floor(Math.random() * (maxCol + 1));

      // Check if placement is valid
      const cells: { row: number; col: number }[] = [];
      let valid = true;

      for (let i = 0; i < truck.size; i++) {
        const row = isHorizontal ? startRow : startRow + i;
        const col = isHorizontal ? startCol + i : startCol;
        const key = `${row}-${col}`;

        if (occupied.has(key)) {
          valid = false;
          break;
        }
        cells.push({ row, col });
      }

      if (valid) {
        cells.forEach(({ row, col }) => {
          occupied.add(`${row}-${col}`);
          newBoard[row][col].truckIndex = truckIndex;
        });
        placed = true;
      }
    }
  });

  return newBoard;
};

// Confetti component
const Confetti = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; delay: number; color: string }>>([]);

  useEffect(() => {
    const colors = ["#EAB308", "#F97316", "#22C55E", "#EF4444", "#3B82F6"];
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute w-2 h-2 rounded-full animate-confetti"
          style={{
            left: `${p.x}%`,
            top: "-10px",
            backgroundColor: p.color,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export const DumpTruckGame = () => {
  const [board, setBoard] = useState<Cell[][]>([]);
  const [shots, setShots] = useState(5);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [message, setMessage] = useState("💣 Find all 3 F&S dump trucks!");
  const [sunkTrucks, setSunkTrucks] = useState<number[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [rewards, setRewards] = useState<typeof TRUCKS[0]["reward"][]>([]);
  const [lastHit, setLastHit] = useState<{ row: number; col: number } | null>(null);

  // Initialize game
  const initGame = useCallback(() => {
    const newBoard = placeTrucks(createBoard());
    setBoard(newBoard);
    setShots(5);
    setGameOver(false);
    setGameWon(false);
    setMessage("💣 Find all 3 dump trucks!");
    setSunkTrucks([]);
    setShowConfetti(false);
    setShaking(false);
    setRewards([]);
    setLastHit(null);
  }, []);

  useEffect(() => {
    initGame();
  }, [initGame]);

  const handleCellClick = (row: number, col: number) => {
    if (gameOver || shots <= 0) return;
    if (board[row][col].isHit || board[row][col].isMiss) return;

    const cell = board[row][col];
    const newBoard = board.map((r) => r.map((c) => ({ ...c })));

    if (cell.truckIndex !== null) {
      // HIT!
      newBoard[row][col].isHit = true;
      setLastHit({ row, col });
      setShots((prev) => prev - 1);

      // Check if truck is fully sunk
      const truckIndex = cell.truckIndex;
      const truckCells: { row: number; col: number }[] = [];

      for (let r = 0; r < 6; r++) {
        for (let c = 0; c < 6; c++) {
          if (newBoard[r][c].truckIndex === truckIndex) {
            truckCells.push({ row: r, col: c });
          }
        }
      }

      const allHit = truckCells.every(({ row: r, col: c }) => newBoard[r][c].isHit);

      if (allHit && !sunkTrucks.includes(truckIndex)) {
        // Truck sunk!
        const newSunk = [...sunkTrucks, truckIndex];
        setSunkTrucks(newSunk);
        setRewards((prev) => [...prev, TRUCKS[truckIndex].reward]);
        setMessage(`🎉 You sank the ${TRUCKS[truckIndex].name}!`);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000);

        // Check if all trucks are sunk
        if (newSunk.length === TRUCKS.length) {
          setGameWon(true);
          setGameOver(true);
          setMessage("🏆 VICTORY! You found all the dump trucks!");
        }
      } else {
        setMessage(`💥 HIT! Keep firing!`);
        setShaking(true);
        setTimeout(() => setShaking(false), 300);
      }
    } else {
      // MISS
      newBoard[row][col].isMiss = true;
      setShots((prev) => prev - 1);
      setMessage("💨 Miss! Try again!");
    }

    setBoard(newBoard);

    // Check if out of shots
    if (shots - 1 <= 0 && !gameWon) {
      setTimeout(() => {
        setGameOver(true);
        // Reveal all trucks
        const revealedBoard = newBoard.map((row) =>
          row.map((cell) => ({ ...cell, isRevealed: true }))
        );
        setBoard(revealedBoard);
        setMessage("Game Over! The trucks were hiding here:");
      }, 500);
    }
  };

  const getCellContent = (cell: Cell) => {
    if (cell.isHit) {
      const truck = cell.truckIndex !== null ? TRUCKS[cell.truckIndex] : null;
      return (
        <div className="flex items-center justify-center w-full h-full">
          {truck ? (
            <div className="relative">
              <Truck className={`w-6 h-6 md:w-8 md:h-8 ${truck.brandColor}`} />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </div>
          ) : (
            <div className="text-xl md:text-2xl">💥</div>
          )}
        </div>
      );
    }
    if (cell.isMiss) {
      return (
        <div className="flex items-center justify-center w-full h-full">
          <span className="text-lg md:text-xl text-muted-foreground">💨</span>
        </div>
      );
    }
    if (cell.isRevealed && cell.truckIndex !== null) {
      const truck = TRUCKS[cell.truckIndex];
      return (
        <div className="flex items-center justify-center w-full h-full">
          <Truck className={`w-6 h-6 md:w-8 md:h-8 ${truck.brandColor} opacity-60`} />
        </div>
      );
    }
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Target className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground/30" />
      </div>
    );
  };

  const getCellClass = (cell: Cell) => {
    const base = "w-12 h-12 md:w-16 md:h-16 border-2 border-border cursor-pointer transition-all duration-200 hover:bg-primary/10 flex items-center justify-center";

    if (cell.isHit) {
      const truck = cell.truckIndex !== null ? TRUCKS[cell.truckIndex] : null;
      return `${base} ${truck?.color || "bg-red-500"} text-white animate-pulse shadow-lg`;
    }
    if (cell.isMiss) {
      return `${base} bg-muted/50 border-muted`;
    }
    if (cell.isRevealed && cell.truckIndex !== null) {
      return `${base} bg-primary/20 border-primary/50`;
    }
    return `${base} bg-card hover:scale-105 hover:border-primary/50 shadow-sm`;
  };

  if (board.length === 0) return null;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="p-3 bg-primary/10 rounded-full">
            <Truck className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-3xl md:text-4xl font-heading font-bold tracking-wider text-foreground">
            DUMP TRUCK
          </h3>
          <div className="p-3 bg-primary/10 rounded-full">
            <Truck className="w-10 h-10 text-primary" />
          </div>
        </div>
        <p className="text-muted-foreground text-base md:text-lg font-sans">
          You Sank My Dump Truck! — Find all 3 F&S trucks to unlock exclusive rewards
        </p>
      </div>

      {/* Stats Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 px-4 bg-card rounded-lg border border-border p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-500/10 rounded-full">
            <Bomb className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <span className="font-bold text-xl text-foreground">{shots}</span>
            <span className="text-sm text-muted-foreground ml-1">Shots Left</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {TRUCKS.map((truck, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-semibold transition-all ${
                sunkTrucks.includes(i)
                  ? "bg-green-500/20 text-green-600 border border-green-500/30"
                  : "bg-muted text-muted-foreground border border-border"
              }`}
            >
              <span className="text-base">{sunkTrucks.includes(i) ? "✅" : "🚫"}</span>
              <span className="hidden sm:inline">{truck.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Message */}
      <div className="text-center mb-4">
        <p className="text-lg font-semibold animate-bounce">{message}</p>
      </div>

      {/* Game Board */}
      <div className={`relative flex justify-center ${shaking ? "animate-shake" : ""}`}>
        {showConfetti && <Confetti />}
        <div className="inline-block border-3 border-border rounded-xl overflow-hidden bg-card shadow-xl">
          {/* Column Labels */}
          <div className="flex">
            <div className="w-12 md:w-16 flex items-center justify-center border-b border-r border-border bg-muted/50 text-sm font-bold text-muted-foreground">
              
            </div>
            {["A", "B", "C", "D", "E", "F"].map((col) => (
              <div
                key={col}
                className="w-12 h-10 md:w-16 md:h-12 flex items-center justify-center border-b border-r border-border bg-muted/50 text-sm font-bold text-muted-foreground"
              >
                {col}
              </div>
            ))}
          </div>

          {/* Grid */}
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="flex">
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-b border-r border-border bg-muted/50 text-sm font-bold text-muted-foreground">
                {rowIndex + 1}
              </div>
              {row.map((cell) => (
                <button
                  key={`${cell.row}-${cell.col}`}
                  className={getCellClass(cell)}
                  onClick={() => handleCellClick(cell.row, cell.col)}
                  disabled={gameOver || cell.isHit || cell.isMiss}
                >
                  {getCellContent(cell)}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Rewards Section */}
      {rewards.length > 0 && (
        <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-500 rounded-full">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-green-800 text-lg">🎉 Unlocked F&S Rewards!</h4>
          </div>
          <div className="space-y-3">
            {rewards.map((reward, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 bg-white rounded-lg border border-green-200 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-base">{reward.title}</p>
                    <p className="text-sm text-muted-foreground">{reward.description}</p>
                  </div>
                </div>
                <span className="px-3 py-2 bg-green-100 text-green-700 text-sm font-mono font-bold rounded-lg border border-green-300">
                  {reward.code}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Game Over Actions */}
      {gameOver && (
        <div className="mt-8 text-center space-y-6">
          {gameWon && (
            <div className="p-6 bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-300 rounded-xl shadow-lg">
              <h4 className="font-bold text-yellow-800 text-xl mb-3">
                🎉 Congratulations! Victory! 🏆
              </h4>
              <p className="text-base text-yellow-700 mb-4">
                You found all 3 F&S dump trucks! Call now to claim your exclusive rewards.
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild className="text-lg px-8 py-4">
              <Link to="/contact">
                <Phone className="w-6 h-6 mr-3" />
                Claim My Offers
              </Link>
            </Button>
            <Button variant="outline" size="xl" onClick={initGame} className="text-lg px-8 py-4">
              <RotateCcw className="w-6 h-6 mr-3" />
              Play Again
            </Button>
          </div>
        </div>
      )}

      {/* Play Again for non-game-over */}
      {!gameOver && shots < 5 && (
        <div className="mt-6 text-center">
          <Button variant="ghost" size="lg" onClick={initGame} className="text-base">
            <RotateCcw className="w-5 h-5 mr-2" />
            Restart Game
          </Button>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-8 text-center text-sm text-muted-foreground bg-muted/30 rounded-lg p-4">
        <p className="font-medium">How to Play: Click grid cells to find hidden F&S trucks • Sink all 3 to win exclusive rewards</p>
      </div>
    </div>
  );
};

export default DumpTruckGame;
