module.exports = {
  ci: {
    collect: {
      // Number of times to run Lighthouse for each URL
      numberOfRuns: 3,
      // URLs to test - replace with actual Shopify store URLs
      url: [
        'https://your-store.myshopify.com',
        'https://your-store.myshopify.com/collections/all',
        'https://your-store.myshopify.com/products/example-product'
      ],
      // Lighthouse settings
      settings: {
        chromeFlags: '--no-sandbox --disable-dev-shm-usage'
      }
    },
    assert: {
      // Performance thresholds
      assertions: {
        'categories:performance': ['warn', { minScore: 0.7 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.8 }],
        'categories:seo': ['error', { minScore: 0.8 }],
        // Core Web Vitals
        'first-contentful-paint': ['warn', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 4000 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }]
      }
    },
    upload: {
      // Upload results to Lighthouse CI server or GitHub
      target: 'temporary-public-storage'
    }
  }
};