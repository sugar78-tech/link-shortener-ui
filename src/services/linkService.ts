import { toast } from "react-toastify";

import { useConfig } from "@/hooks/useConfig";
import type { GetLinkDto } from "@/models/Link";

export const useLinkService = () => {
  const { apiUrl } = useConfig();

  const getAllLinks = async (): Promise<GetLinkDto[]> => {
    try {
      const response = await fetch(`${apiUrl}/links`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        const error = await response.json();
        toast.error(`Error al obtener los links: ${error.message}`);
        return [];
      }
    } catch (error) {
      console.error(error);
      toast.error("Error en la conexión con el servidor");
      return [];
    }
  };

  const createLink = async (url: string, shortedUrl: string) => {
    try {
      const response = await fetch(`${apiUrl}/links`, {
        method: "POST",
        body: JSON.stringify({ url, shortedUrl }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        toast.success("Link cortado con éxito");
      } else {
        const error = await response.json();
        toast.error(`Error al cortar link:
					${error.message}`);
      }
    } catch (error) {
      console.error(error);
      toast.error("Error al conectar con el servidor");
    }
  };

  return { createLink, getAllLinks };
};
