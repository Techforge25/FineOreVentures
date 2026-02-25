#!/usr/bin/env bash
set -euo pipefail

mkdir -p public/assets

urls=(
  "https://kbmining.com/wp-content/uploads/2025/07/IMG-20250616-WA0019.jpg"
  "https://kbmining.com/wp-content/uploads/2025/07/IMG-20250628-WA0073.jpg"
  "https://kbmining.com/wp-content/uploads/2025/07/IMG-20250628-WA0097.jpg"
  "https://kbmining.com/wp-content/uploads/2025/07/IMG-20250628-WA0112.jpg"
  "https://kbmining.com/wp-content/uploads/2025/08/IMG-20241228-WA0005-1.jpg"
  "https://kbmining.com/wp-content/uploads/2025/08/IMG-20250616-WA00381.jpg"
  "https://kbmining.com/wp-content/uploads/2025/08/IMG-20250617-WA00131.jpg"
  "https://kbmining.com/wp-content/uploads/2025/08/IMG-20250617-WA00161.jpg"
  "https://kbmining.com/wp-content/uploads/2025/08/IMG-20250628-WA0036.jpg"
  "https://kbmining.com/wp-content/uploads/2025/08/IMG-20250628-WA0082-1.jpg"
  "https://kbmining.com/wp-content/uploads/2025/08/IMG-20250628-WA0086-1.jpg"
  "https://kbmining.com/wp-content/uploads/2025/08/IMG-20250628-WA0088.jpg"
  "https://kbmining.com/wp-content/uploads/2025/08/IMG-20250628-WA0109.jpg"
)

for url in "${urls[@]}"; do
  file="public/assets/$(basename "$url")"
  echo "Downloading $(basename "$url")..."
  curl -L --fail --show-error --silent "$url" -o "$file"
done

echo "Done. Assets downloaded to public/assets"
