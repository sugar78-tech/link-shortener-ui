import { useState } from "react";

import "./App.css";
import { useConfig } from "./hooks/useConfig";
function App() {
  const { apiUrl } = useConfig();
  const [url, setUrl] = useState("");
  const [shortedUrl, setShortedUrl] = useState("");

  return (
    <main className="flex h-screen flex-col items-center bg-amber-50">
      <h1>AppCortador de URLs</h1>
      <input
        type="text"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="shortedURL"
        value={shortedUrl}
        onChange={(e) => setShortedUrl(e.target.value)}
      />
      <button
        onClick={async () => {
          const response = await fetch(`${apiUrl}/links`, {
            method: "POST",
            body: JSON.stringify({ url, shortedUrl }),
            headers: {
              "Content-Type": "application/json"
            }
          });
          const data = await response.text();
          console.log(data);
        }}
      >
        Cortar
      </button>
    </main>
  );
}

export default App;
