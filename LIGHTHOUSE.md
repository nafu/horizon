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

### For Private/Password-Protected Stores

If your Shopify store is private or password-protected, you'll need to configure authentication:

#### Option 1: Basic Authentication (Most Common)
Set these GitHub repository secrets:
- `SHOPIFY_STORE_PASSWORD`: The password for your private store
- `SHOPIFY_STORE_USERNAME`: Username (leave empty if not required)

#### Option 2: Access Token Authentication
For stores using custom access tokens:
- `SHOPIFY_ACCESS_TOKEN`: Your Shopify access token

### Setting Up GitHub Secrets

1. Go to your repository settings
2. Navigate to "Secrets and variables" → "Actions"
3. Click "New repository secret"
4. Add the required secrets listed above

**Important**: Never commit passwords or tokens directly to your code. Always use GitHub Secrets or environment variables.

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

### Testing Private Stores Locally

For private or password-protected stores, set environment variables before running tests:

```bash
# Basic authentication
export SHOPIFY_STORE_PASSWORD="your-store-password"
export SHOPIFY_STORE_USERNAME=""  # Usually empty for Shopify

# OR access token authentication
export SHOPIFY_ACCESS_TOKEN="your-access-token"

# Then run tests
npm run lighthouse
```

You can also create a `.env` file (add it to `.gitignore`):
```bash
SHOPIFY_STORE_PASSWORD=your-store-password
SHOPIFY_STORE_USERNAME=
```