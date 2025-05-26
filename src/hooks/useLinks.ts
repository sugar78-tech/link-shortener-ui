import type { GetLinkDto } from "../models/Link";

import { useConfig } from "./useConfig";

export const useLinks = () => {
  const { apiUrl } = useConfig();

  const getAllLinks = async (): Promise<GetLinkDto[]> => {
    try {
      const response = await fetch(`${apiUrl}/links`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  return {
    getAllLinks
  };
};
