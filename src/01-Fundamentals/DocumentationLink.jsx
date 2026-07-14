const DocumentationLink = ({ docPath, label = "View documentation" }) => {
  // For local development, we'll use http://localhost:3000 (default Docusaurus port)
  // Later you can update this to your deployed docs URL
  const docsBaseUrl = "http://localhost:3000/docs";
  
  if (!docPath) {
    return null;
  }

  return (
    <div className="docs-link-container">
      <span className="docs-link-text">For more details, </span>
      <a
        href={`${docsBaseUrl}/${docPath}`}
        target="_blank"
        rel="noopener noreferrer"
        className="docs-link"
      >
        {label}
        <svg
          className="docs-link-icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 3H14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 3V10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 14L21 3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
};

export default DocumentationLink;
