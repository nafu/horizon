# Lighthouse CI Configuration

## URLs to Test

Replace the example URLs in `lighthouserc.js` with your actual Shopify store URLs:

```javascript
url: [
  'https://your-store.myshopify.com',                    // Homepage
  'https://your-store.myshopify.com/collections/all',    // Collection page
  'https://your-store.myshopify.com/products/example'    // Product page
]
```

## Common Shopify Store URLs to Test

- **Homepage**: `https://your-store.myshopify.com`
- **Product page**: `https://your-store.myshopify.com/products/[product-handle]`
- **Collection page**: `https://your-store.myshopify.com/collections/[collection-handle]`
- **Cart page**: `https://your-store.myshopify.com/cart`
- **Search page**: `https://your-store.myshopify.com/search`

## Performance Targets for Shopify Themes

### Recommended Lighthouse Scores:
- **Performance**: 70+ (mobile), 90+ (desktop)
- **Accessibility**: 90+ (required for compliance)
- **Best Practices**: 80+
- **SEO**: 80+

### Core Web Vitals Targets:
- **First Contentful Paint (FCP)**: < 2 seconds
- **Largest Contentful Paint (LCP)**: < 4 seconds  
- **Cumulative Layout Shift (CLS)**: < 0.1

## GitHub Secrets Required

For the GitHub Action to work with advanced features, you may need:

- `LHCI_GITHUB_APP_TOKEN`: For GitHub status checks (optional)

## Local Development

```bash
# Install dependencies
npm install

# Run Lighthouse tests
npm run lighthouse

# Run only collection (no assertions)
npm run lighthouse:collect

# Run only assertions (requires existing reports)
npm run lighthouse:assert
```