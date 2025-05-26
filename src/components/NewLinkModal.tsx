import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { useLinkService } from "@/services/linkService";

interface NewLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLinkCreated: () => void;
}

export const NewLinkModal = ({
  isOpen,
  onClose,
  onLinkCreated
}: NewLinkModalProps) => {
  const [url, setUrl] = useState("");
  const [shortedUrl, setShortedUrl] = useState("");
  const { createLink } = useLinkService();

  const handleSubmit = async () => {
    await createLink(url, shortedUrl);
    setUrl("");
    setShortedUrl("");
    onLinkCreated();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="flex min-w-[400px] flex-col gap-4 rounded-lg bg-gray-800 p-8 text-gray-100 shadow-xl">
        <h2 className="mb-6 text-xl font-semibold text-gray-200">
          Crear Nuevo Link
        </h2>
        <input
          type="text"
          placeholder="URL Original"
          className="mb-4 w-full rounded border border-gray-600 bg-gray-700 p-3 text-gray-100 placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL Acortada (opcional)"
          className="mb-6 w-full rounded border border-gray-600 bg-gray-700 p-3 text-gray-100 placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500"
          value={shortedUrl}
          onChange={(e) => setShortedUrl(e.target.value)}
        />
        <div className="flex justify-end gap-4">
          <Button onClick={onClose} variant="secondary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit}>Crear Link</Button>
        </div>
      </div>
    </div>
  );
};
