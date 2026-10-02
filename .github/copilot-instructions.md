# Copilot Instructions for Horizon Shopify Theme

## Overview
This is a Shopify Liquid theme called "Horizon" that follows modern web component patterns and uses advanced CSS custom properties. The theme is built with performance, accessibility, and maintainability in mind.

## Theme Architecture

### File Structure
- **layout/**: Contains theme templates (`theme.liquid`, `password.liquid`)
- **sections/**: Shopify sections with JSON schema definitions
- **snippets/**: Reusable Liquid components and utilities
- **assets/**: CSS, JavaScript, and image files
- **templates/**: Page templates for different content types
- **config/**: Theme settings and configuration
- **locales/**: Translation files
- **blocks/**: Custom block definitions

### Naming Conventions

#### Liquid Files
- **Sections**: Use kebab-case (e.g., `featured-product.liquid`)
- **Snippets**: Use kebab-case (e.g., `product-card.liquid`)
- **Private/utility snippets**: Prefix with underscore (e.g., `_blocks.liquid`)

#### CSS Classes
- Use kebab-case for component classes
- Use BEM-like methodology for variants
- Custom properties follow `--property-name` pattern
- Color schemes use `scheme-1`, `scheme-2`, etc.

#### JavaScript
- Use PascalCase for classes (e.g., `Component`, `LocalizationFormComponent`)
- Use camelCase for functions and variables
- Use kebab-case for custom element names

## Code Patterns

### Liquid Templates

#### Section Structure
```liquid
{% capture children %}
  {% content_for 'blocks' %}
{% endcapture %}

{% render 'section', section: section, children: children %}

{% schema %}
{
  "name": "t:names.section_name",
  "settings": [...]
}
{% endschema %}
```

#### Snippet Documentation
Use `{% doc %}` blocks at the top of snippets to document parameters:
```liquid
{% doc %}
  Renders a component description
  
  @param {object} param_name - Description of parameter
  @param {string} optional_param - Optional parameter description
{% enddoc %}
```

#### Conditional Rendering
- Use `{%- liquid -%}` for complex logic blocks
- Prefer `{%- if condition -%}` with proper whitespace control
- Use `blank` check for empty values: `{% if value != blank %}`

### JavaScript Components

#### Component Structure
- Extend from base `Component` class located in `component.js`
- Use TypeScript-style JSDoc comments with strict type definitions
- Implement refs system for DOM element references
- Use declarative event handling
- Follow ES2020 standards with strict null checks enabled

#### TypeScript Configuration
- Uses `jsconfig.json` with strict type checking enabled
- Global types defined in `global.d.ts`
- Path mapping with `@theme/*` for imports
- Shopify and Theme global interfaces available

#### Example Component Pattern
```javascript
import { Component } from '@theme/component';

/**
 * Component description
 * 
 * @typedef {object} ComponentRefs
 * @property {HTMLElement} elementName - Description
 * 
 * @extends {Component<ComponentRefs>}
 */
class CustomComponent extends Component {
  // Implementation
}
```

#### Global Objects
- `Shopify`: Global Shopify object with store/locale data
- `Theme`: Theme-specific utilities, routes, and translations
- Access via `window.Shopify` and `window.Theme`

#### Utilities Import Pattern
```javascript
import { requestIdleCallback, supportsViewTransitions } from '@theme/utilities';
```

#### Component Lifecycle
- Use `connectedCallback()` for initialization
- Implement proper cleanup in `disconnectedCallback()`
- Use `refs` object for DOM element references
- Handle mutation observers for dynamic content

### CSS Architecture

#### Custom Properties
- Use semantic naming: `--color-text`, `--spacing-large`
- Component-specific properties: `--component-property`
- Media query specific: `--property-mobile`, `--property-desktop`

#### Layout System
- Use CSS Grid and Flexbox
- Leverage `layout-panel-flex` for consistent layouts
- Use `gap-style` and `spacing-style` utilities
- Responsive design with mobile-first approach

#### Color Schemes
- Define color schemes as `scheme-1`, `scheme-2`, etc.
- Use `color_scheme` setting in section schemas
- Apply via `color-scheme` CSS custom property

## Schema Definitions

### Section Settings Structure
```json
{
  "name": "t:names.section_name",
  "class": "section-wrapper",
  "settings": [
    {
      "type": "header",
      "content": "t:content.category"
    },
    {
      "type": "select|text|checkbox|color_scheme|image|etc",
      "id": "setting_id",
      "label": "t:settings.setting_label",
      "default": "default_value"
    }
  ],
  "blocks": [
    {
      "type": "@theme",
      "limit": 1
    }
  ],
  "presets": [
    {
      "name": "t:names.preset_name"
    }
  ]
}
```

### Internationalization
- Use translation keys: `"t:names.key"` for names
- Use `"t:settings.key"` for setting labels
- Use `"t:content.key"` for content headers

## Best Practices

### Performance
- Use `{% liquid %}` blocks for complex logic
- Minimize Liquid object access in loops
- Preload critical images with `preloadImage()` utility
- Use lazy loading for non-critical images
- Implement View Transitions API for smooth page transitions
- Use `content-visibility: hidden` for performance optimization

### View Transitions
- Theme supports View Transitions API for smooth navigation
- Use `view-transition-name` CSS property for element transitions
- Check support with `supportsViewTransitions()` utility
- Implement transition types for different page contexts
- Use `viewTransition.current` to track ongoing transitions

### Accessibility
- Include proper ARIA labels and roles
- Use semantic HTML elements
- Implement keyboard navigation
- Include skip-to-content links
- Use focus-visible for focus styles

### Theme Editor
- Use `request.design_mode` for editor-specific code
- Implement proper visual previews for sections
- Use `shopify-section-group-header` for header groups

### JavaScript Utilities
- Use `@theme/utilities` for common functions
- Implement proper event cleanup in components
- Use `requestIdleCallback` for non-critical operations
- Follow the component lifecycle pattern

### Asset Organization
- Keep CSS modular and component-based
- Use CSS custom properties for theming
- Minimize JavaScript bundle size
- Use SVG icons with proper accessibility

## Common Patterns

### Product Cards
- Use `product-card.liquid` snippet
- Include product media, title, price, and variants
- Implement quick-add functionality
- Support different layout options

### Media Handling
- Use `media.liquid` for responsive images/videos
- Implement proper aspect ratios
- Support background media options
- Include loading states and error handling

### Form Components
- Use proper field validation
- Implement loading states
- Include error handling
- Support keyboard navigation

### Section Groups
- Use JSON configuration for header/footer groups
- Implement proper section ordering
- Support theme editor functionality

When working on this theme, prioritize maintainability, performance, and accessibility. Follow the established patterns and conventions to ensure consistency across the codebase.