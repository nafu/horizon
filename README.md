# horizon

A Shopify theme with integrated Lighthouse CI for performance monitoring.

## Lighthouse CI

This repository includes automated Lighthouse CI testing to monitor web performance, accessibility, SEO, and best practices.

### Setup

1. **Configure URLs**: Update the URLs in `lighthouserc.js` to point to your Shopify store:
   ```javascript
   url: [
     'https://your-store.myshopify.com',
     'https://your-store.myshopify.com/collections/all',
     'https://your-store.myshopify.com/products/example-product'
   ]
   ```

2. **GitHub Actions**: The Lighthouse CI workflow runs automatically on:
   - Push to main branch
   - Pull requests to main branch

### Running Lighthouse Locally

To run Lighthouse tests locally:

```bash
# Install Lighthouse CI
npm install -g @lhci/cli

# Run the tests
lhci autorun
```

### Customizing Thresholds

Modify the performance thresholds in `lighthouserc.js`:

- **Performance**: Minimum score of 70%
- **Accessibility**: Minimum score of 90% (required)
- **Best Practices**: Minimum score of 80%
- **SEO**: Minimum score of 80% (required)
- **Core Web Vitals**: Configured for optimal user experience

### Viewing Reports

Reports are automatically uploaded to temporary public storage and links are provided in the GitHub Actions output. For persistent storage, consider setting up a Lighthouse CI server.
