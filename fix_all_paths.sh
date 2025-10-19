#!/bin/bash
set -euo pipefail

echo "Fixing paths in all HTML files..."

# List of HTML files to fix (excluding index.html which is already fixed)
HTML_FILES="about.html contact.html faqs.html privacy.html terms.html"

for file in $HTML_FILES; do
    echo "Fixing $file..."
    
    # Fix CSS paths
    sed -i '' 's|href="/font-awesome.min.css"|href="/css/font-awesome.min.css"|g' "$file"
    sed -i '' 's|href="/themify-icons.css[^"]*"|href="/css/themify-icons.css"|g' "$file"
    sed -i '' 's|href="/bootstrap.min.css"|href="/css/bootstrap.min.css"|g' "$file"
    sed -i '' 's|href="/theme.css[^"]*"|href="/css/theme.css"|g' "$file"
    sed -i '' 's|href="/lightbox.min.css"|href="/css/lightbox.min.css"|g' "$file"
    sed -i '' 's|href="/custom.css[^"]*"|href="/css/custom.css"|g' "$file"
    
    # Fix icon paths
    sed -i '' 's|href="/apple-icon-|href="/img/apple-icon-|g' "$file"
    sed -i '' 's|href="/android-icon-|href="/img/android-icon-|g' "$file"
    sed -i '' 's|href="/favicon-|href="/img/favicon-|g' "$file"
    sed -i '' 's|content="/ms-icon-|content="/img/ms-icon-|g' "$file"
    
    # Fix image paths
    sed -i '' 's|src="/globall.png"|src="/img/globall.png"|g' "$file"
    sed -i '' 's|src="/logo-light.png"|src="/img/logo-light.png"|g' "$file"
    sed -i '' 's|src="/index.png"|src="/img/index.png"|g' "$file"
    sed -i '' 's|src="/insta.png"|src="/img/insta.png"|g' "$file"
    
    # Fix background image paths and remove version parameters
    sed -i '' 's|src="/\([^"]*\)\.jpg[^"]*"|src="/img/\1.jpg"|g' "$file"
    sed -i '' 's|src="/\([^"]*\)\.png[^"]*"|src="/img/\1.png"|g' "$file"
    
    # Fix JavaScript paths
    sed -i '' 's|src="/jquery|src="/js/jquery|g' "$file"
    sed -i '' 's|src="/bootstrap.min.js"|src="/js/bootstrap.min.js"|g' "$file"
    sed -i '' 's|src="/flexslider.min.js"|src="/js/flexslider.min.js"|g' "$file"
    sed -i '' 's|src="/lightbox.min.js"|src="/js/lightbox.min.js"|g' "$file"
    sed -i '' 's|src="/masonry.min.js"|src="/js/masonry.min.js"|g' "$file"
    sed -i '' 's|src="/smooth-scroll.min.js[^"]*"|src="/js/smooth-scroll.min.js"|g' "$file"
    sed -i '' 's|src="/parallax.js[^"]*"|src="/js/parallax.js"|g' "$file"
    sed -i '' 's|src="/scripts.js[^"]*"|src="/js/scripts.js"|g' "$file"
    
    # Fix navigation links to be relative
    sed -i '' 's|href="/index.html"|href="index.html"|g' "$file"
    sed -i '' 's|href="/about.html"|href="about.html"|g' "$file"
    sed -i '' 's|href="/contact.html"|href="contact.html"|g' "$file"
    sed -i '' 's|href="/faqs.html"|href="faqs.html"|g' "$file"
    sed -i '' 's|href="/privacy.html"|href="privacy.html"|g' "$file"
    sed -i '' 's|href="/terms.html"|href="terms.html"|g' "$file"
done

echo "All HTML files have been fixed!"