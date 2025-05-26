import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import AddIcon from "@/assets/icons/addIcon.svg";
import SearchIcon from "@/assets/icons/searchIcon.svg";
import { LinkCard } from "@/components/LinkCard";
import { NewLinkModal } from "@/components/NewLinkModal";
import { Button } from "@/components/ui/Button";
import type { GetLinkDto } from "@/models/Link";
import { useLinkService } from "@/services/linkService";

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getAllLinks } = useLinkService();
  const [links, setLinks] = useState<GetLinkDto[]>([]);

  const fetchLinks = async () => {
    const fetchedLinks = await getAllLinks();
    setLinks(fetchedLinks);
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLinkCreated = () => {
    closeModal();
    fetchLinks();
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-5 bg-gradient-to-b from-gray-900 to-teal-700 to-80% p-8 text-gray-100">
      <ToastContainer />
      <h1 className="mb-8 text-4xl font-bold text-teal-400">
        AppCortador de URLs
      </h1>

      <section className="flex w-full max-w-full flex-col gap-5 rounded-lg bg-gray-800 p-6 shadow-md">
        <div className="flex justify-between">
          <div className="flex gap-2 rounded-md border-2 border-teal-800 px-4 py-2">
            <SearchIcon />
            <input
              type="text"
              placeholder="Buscar"
              className="bg-transparent outline-none"
            />
          </div>
          <Button variant="primary" onClick={openModal} Icon={AddIcon}>
            Nuevo Link
          </Button>
        </div>
        {links && links.length > 0 ? (
          <ul className="mt-6 grid grid-cols-2 gap-4 overflow-y-auto">
            {links.map((link) => (
              <LinkCard key={link.id} link={link} />
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-400">
            No has creado ningún link todavía. ¡Crea uno!
          </p>
        )}
      </section>

      <NewLinkModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onLinkCreated={handleLinkCreated}
      />
    </main>
  );
};
