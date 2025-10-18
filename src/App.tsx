import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Redirect to your static HTML files
    // Since you have index.html, about.html, etc. at the root,
    // you can access them directly by changing the URL
    window.location.href = "/index.html";
  }, []);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <p>Redirecting to your website...</p>
      <p>
        <a href="/index.html">Click here if not redirected</a>
      </p>
    </div>
  );
}

export default App;
