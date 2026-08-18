const sharp = require('sharp')
const path = require('path')

async function processImage() {
  const inputPath = path.join(__dirname, '../public/images/cascade_heating_clean_v2.jpg')
  const outputPath = path.join(__dirname, '../public/images/cascade_before_leaking_v3.jpg')
  const artifactPath = 'C:/Users/enesy/.gemini/antigravity/brain/838702fe-d8e8-46c7-94ab-85c759c8ccd7/cascade_before_leaking_v3.jpg'

  const metadata = await sharp(inputPath).metadata()
  const width = metadata.width || 1200
  const height = metadata.height || 675

  // SVG overlay adding rust stains, grime, corrosion and water droplets dripping from pipes
  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}">
      <!-- Dark grime & age tint -->
      <rect width="100%" height="100%" fill="#2a1b10" opacity="0.35" />
      
      <!-- Rust corrosion patches on lower steel pipes -->
      <ellipse cx="${width * 0.48}" cy="${height * 0.58}" rx="90" ry="40" fill="#7a2e0a" opacity="0.75" />
      <ellipse cx="${width * 0.54}" cy="${height * 0.64}" rx="110" ry="45" fill="#5e1c05" opacity="0.8" />
      <ellipse cx="${width * 0.38}" cy="${height * 0.72}" rx="130" ry="55" fill="#4d1603" opacity="0.75" />
      <ellipse cx="${width * 0.65}" cy="${height * 0.68}" rx="100" ry="40" fill="#6b2708" opacity="0.75" />

      <!-- Water leak dripping drops from joint -->
      <path d="M ${width * 0.54} ${height * 0.64} Q ${width * 0.54 + 6} ${height * 0.74} ${width * 0.54} ${height * 0.85}" stroke="#90caf9" stroke-width="5" fill="none" opacity="0.9" />
      <ellipse cx="${width * 0.54}" cy="${height * 0.87}" rx="7" ry="10" fill="#2979ff" opacity="0.95" />
      <ellipse cx="${width * 0.54}" cy="${height * 0.90}" rx="16" ry="5" fill="#1565c0" opacity="0.7" />

      <!-- Water puddle stain at bottom -->
      <ellipse cx="${width * 0.54}" cy="${height * 0.94}" rx="160" ry="28" fill="#0d47a1" opacity="0.6" />
    </svg>
  `)

  await sharp(inputPath)
    .modulate({
      brightness: 0.68,
      saturation: 0.4,
      hue: 15,
    })
    .composite([{ input: svgOverlay }])
    .jpeg({ quality: 92 })
    .toFile(outputPath)

  // Copy to artifacts as well
  const fs = require('fs')
  fs.copyFileSync(outputPath, artifactPath)

  console.log('Successfully created matching leaking rusty before image at:', outputPath)
}

processImage().catch(console.error)
