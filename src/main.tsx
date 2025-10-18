import { createRoot } from "react-dom/client";

// Redirect to static HTML site
window.location.href = "/public/index.html";

// Minimal React root to prevent errors
createRoot(document.getElementById("root")!).render(<div>Redirecting...</div>);
