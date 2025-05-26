import { useState, useEffect } from "react";

import { useConfig } from "./hooks/useConfig";
import { useLinks } from "./hooks/useLinks";
import type { GetLinkDto } from "./models/Link";

import "./App.css";
function App() {
  const { apiUrl } = useConfig();
  const [url, setUrl] = useState("");
  const [shortedUrl, setShortedUrl] = useState("");
  const { getAllLinks } = useLinks();
  const [links, setLinks] = useState<GetLinkDto[]>([]);

  const fetchLinks = async () => {
    const links = await getAllLinks();
    setLinks(links);
  };

  useEffect(() => {
    fetchLinks();
  }, []);

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
      <section>
        <h2>Links</h2>
        <ul>
          {links &&
            links.map((link) => (
              <li key={link.id}>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.url}
                </a>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
