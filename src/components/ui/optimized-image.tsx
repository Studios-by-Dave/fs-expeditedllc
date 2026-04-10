import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes,
  quality = 85,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate responsive srcset for different screen sizes
  const generateSrcSet = (baseSrc: string) => {
    const extensions = ['.jpg', '.png', '.jpeg'];
    const hasValidExtension = extensions.some(ext => baseSrc.includes(ext));
    
    if (!hasValidExtension) return baseSrc;

    const baseWithoutExt = baseSrc.replace(/\.[^/.]+$/, '');
    
    return [
      `${baseWithoutExt}.webp ${Math.round((width || 800) * 0.5)}w`,
      `${baseWithoutExt}.webp ${Math.round((width || 800) * 0.75)}w`,
      `${baseWithoutExt}.webp ${width || 800}w`,
      `${baseWithoutExt}.webp ${Math.round((width || 800) * 1.5)}w`,
    ].join(', ');
  };

  const handleError = () => {
    setHasError(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  if (hasError) {
    return (
      <div 
        className={`bg-muted flex items-center justify-center text-muted-foreground ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={alt}
      >
        <span className="text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <img
      ref={imgRef}
      src={src}
      srcSet={generateSrcSet(src)}
      sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'}
      alt={alt}
      width={width}
      height={height}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onError={handleError}
      onLoad={handleLoad}
      style={{
        objectFit: 'cover',
        objectPosition: 'center',
      }}
    />
  );
};
