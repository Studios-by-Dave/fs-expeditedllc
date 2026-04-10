import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';

// Create optimized directory
const optimizedDir = './src/assets/optimized';
if (!existsSync(optimizedDir)) {
  mkdirSync(optimizedDir, { recursive: true });
}

const images = [
  {
    name: 'hero-truck',
    original: './src/assets/hero-truck.jpg',
    sizes: [800, 1200, 1600],
    quality: 85
  },
  {
    name: 'hero-painter',
    original: './src/assets/hero-painter.jpg',
    sizes: [800, 1200, 1600],
    quality: 85
  },
  {
    name: 'fs-logo',
    original: './src/assets/fs-logo.png',
    sizes: [200, 400],
    quality: 90
  },
  {
    name: 'flag-overlay',
    original: './src/assets/flag-overlay.png',
    sizes: [400, 800],
    quality: 90
  },
  {
    name: 'texture-faux',
    original: './src/assets/texture-faux.jpg',
    sizes: [400, 800, 1200],
    quality: 75
  },
  {
    name: 'texture-stucco',
    original: './src/assets/texture-stucco.jpg',
    sizes: [400, 800, 1200],
    quality: 75
  },
  {
    name: 'texture-smooth',
    original: './src/assets/texture-smooth.jpg',
    sizes: [400, 800, 1200],
    quality: 75
  },
  {
    name: 'texture-knockdown',
    original: './src/assets/texture-knockdown.jpg',
    sizes: [400, 800, 1200],
    quality: 75
  }
];

console.log('🖼️  Starting image optimization...');

images.forEach(image => {
  console.log(`\n📸 Processing ${image.name}...`);
  
  image.sizes.forEach(size => {
    const baseName = `${image.name}-${size}`;
    
    // Generate WebP
    try {
      const webpCmd = `cwebp -q ${image.quality} -resize ${size} ${image.original} -o ${join(optimizedDir, `${baseName}.webp`)}`;
      execSync(webpCmd, { stdio: 'pipe' });
      console.log(`  ✅ Generated ${baseName}.webp (${size}w)`);
    } catch (error) {
      console.log(`  ❌ Failed to generate ${baseName}.webp: ${error.message}`);
      
      // Fallback: use ImageMagick
      try {
        const magickCmd = `convert ${image.original} -resize ${size} -quality ${image.quality} ${join(optimizedDir, `${baseName}.webp`)}`;
        execSync(magickCmd, { stdio: 'pipe' });
        console.log(`  ✅ Generated ${baseName}.webp (${size}w) with ImageMagick`);
      } catch (magickError) {
        console.log(`  ❌ ImageMagick fallback failed: ${magickError.message}`);
      }
    }
    
    // Generate AVIF (smaller sizes only)
    if (size <= 1200) {
      try {
        const avifCmd = `cavif -q ${image.quality} -resize ${size} ${image.original} -o ${join(optimizedDir, `${baseName}.avif`)}`;
        execSync(avifCmd, { stdio: 'pipe' });
        console.log(`  ✅ Generated ${baseName}.avif (${size}w)`);
      } catch (error) {
        console.log(`  ❌ Failed to generate ${baseName}.avif: ${error.message}`);
      }
    }
  });
});

console.log('\n🎉 Image optimization complete!');
console.log('\n📊 Optimized images saved to: ./src/assets/optimized/');
console.log('\n💡 Next steps:');
console.log('   1. Update components to use optimized images');
console.log('   2. Implement responsive srcsets');
console.log('   3. Add lazy loading');
