import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import type { GetLinkDto } from "@/models/Link";
import { useLinkService } from "@/services/linkService";

export const Home = () => {
  const [url, setUrl] = useState("");
  const [shortedUrl, setShortedUrl] = useState("");
  const { createLink, getAllLinks } = useLinkService();
  const [links, setLinks] = useState<GetLinkDto[]>([]);

  const fetchLinks = async () => {
    const links = await getAllLinks();
    setLinks(links);
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <main className="flex h-screen flex-col items-center bg-gradient-to-b from-purple-400 to-gray-900 to-20%">
      <ToastContainer />
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
        onClick={() => {
          createLink(url, shortedUrl);
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
};
