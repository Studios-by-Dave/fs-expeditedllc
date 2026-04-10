import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import sharp from 'sharp';

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
    quality: 85,
    formats: ['webp', 'avif']
  },
  {
    name: 'hero-painter',
    original: './src/assets/hero-painter.jpg',
    sizes: [800, 1200, 1600],
    quality: 85,
    formats: ['webp', 'avif']
  },
  {
    name: 'fs-logo',
    original: './src/assets/fs-logo.png',
    sizes: [200, 400],
    quality: 90,
    formats: ['webp', 'png']
  },
  {
    name: 'flag-overlay',
    original: './src/assets/flag-overlay.png',
    sizes: [400, 800],
    quality: 90,
    formats: ['webp', 'png']
  },
  {
    name: 'texture-faux',
    original: './src/assets/texture-faux.jpg',
    sizes: [400, 800, 1200],
    quality: 75,
    formats: ['webp', 'avif']
  },
  {
    name: 'texture-stucco',
    original: './src/assets/texture-stucco.jpg',
    sizes: [400, 800, 1200],
    quality: 75,
    formats: ['webp', 'avif']
  },
  {
    name: 'texture-smooth',
    original: './src/assets/texture-smooth.jpg',
    sizes: [400, 800, 1200],
    quality: 75,
    formats: ['webp', 'avif']
  },
  {
    name: 'texture-knockdown',
    original: './src/assets/texture-knockdown.jpg',
    sizes: [400, 800, 1200],
    quality: 75,
    formats: ['webp', 'avif']
  }
];

console.log('🖼️  Starting image optimization with Sharp...');

async function optimizeImages() {
  for (const image of images) {
    console.log(`\n📸 Processing ${image.name}...`);
    
    for (const size of image.sizes) {
      const baseName = `${image.name}-${size}`;
      
      for (const format of image.formats) {
        try {
          const outputPath = join(optimizedDir, `${baseName}.${format}`);
          
          await sharp(image.original)
            .resize(size, null, {
              fit: 'cover',
              position: 'center'
            })
            .toFormat(format, {
              quality: image.quality,
              progressive: true
            })
            .toFile(outputPath);
            
          console.log(`  ✅ Generated ${baseName}.${format} (${size}w)`);
        } catch (error) {
          console.log(`  ❌ Failed to generate ${baseName}.${format}: ${error.message}`);
        }
      }
    }
  }
}

optimizeImages().then(() => {
  console.log('\n🎉 Image optimization complete!');
  console.log('\n📊 Optimized images saved to: ./src/assets/optimized/');
  console.log('\n💡 Next steps:');
  console.log('   1. Update components to use optimized images');
  console.log('   2. Implement responsive srcsets');
  console.log('   3. Add lazy loading');
}).catch(error => {
  console.error('❌ Optimization failed:', error);
});
