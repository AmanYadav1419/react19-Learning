# Documentation Link Guide

## How to add a new section with documentation link

1. Create your new section's component(s)
2. Add documentation files in `docs/docs/your-new-section/` folder
3. Update `src/docsMap.js` to add a new entry for your section
4. Import your component(s) and `DocumentationLink` in `App.jsx`
5. Add your section JSX to App.jsx and include `<DocumentationLink docPath={docsMap["your-section-key"]} />` at the end of the section
6. Done!

## Example: Adding a new section "17. Advanced Hooks"

### 1. Update `src/docsMap.js`
```javascript
export const docsMap = {
  // existing entries here
  "17.advanced-hooks": "17.advanced-hooks/advanced"
};
```

### 2. Update `src/App.jsx`
```jsx
import YourNewComponent from "./components/17.advanced-hooks/YourNewComponent";

// ... then in JSX
<section className="section-wrapper">
  <h2 className="section-title">17. Advanced Hooks</h2>
  <div className="component-wrapper">
    <p className="component-label">Your Component Label</p>
    <YourNewComponent />
  </div>
  <DocumentationLink docPath={docsMap["17.advanced-hooks"]} />
</section>
```

## Updating documentation base URL
To change from localhost to deployed docs URL, edit `src/components/DocumentationLink.jsx`:

Current:
```javascript
const docsBaseUrl = "http://localhost:3000/docs";
```

After deployment:
```javascript
const docsBaseUrl = "https://your-docs-domain.com/docs";
```
