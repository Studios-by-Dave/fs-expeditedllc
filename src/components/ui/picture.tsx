import React, { useState } from 'react';

interface PictureProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

export const Picture: React.FC<PictureProps> = ({
  src,
  alt,
  width = 800,
  height,
  className = '',
  priority = false,
  sizes,
  quality = 85,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate image paths for different formats
  const baseName = src.replace(/\.[^/.]+$/, '');
  const extension = src.match(/\.[^/.]+$/)?.[0] || '.jpg';
  
  const generateSrcSet = (format: string) => {
    const sizes = [0.5, 0.75, 1, 1.5];
    return sizes.map(scale => {
      const scaledWidth = Math.round(width * scale);
      return `${baseName}-${scaledWidth}.${format} ${scaledWidth}w`;
    }).join(', ');
  };

  const webpSrcSet = generateSrcSet('webp');
  const avifSrcSet = generateSrcSet('avif');
  const jpgSrcSet = generateSrcSet('jpg');

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
    <picture className={className}>
      {/* AVIF for modern browsers */}
      <source
        srcSet={avifSrcSet}
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'}
        type="image/avif"
      />
      
      {/* WebP for good browsers */}
      <source
        srcSet={webpSrcSet}
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'}
        type="image/webp"
      />
      
      {/* Fallback to original format */}
      <img
        src={src}
        srcSet={jpgSrcSet}
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onError={handleError}
        onLoad={handleLoad}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </picture>
  );
};
