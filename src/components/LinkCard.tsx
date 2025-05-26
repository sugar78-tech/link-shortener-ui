import type { GetLinkDto } from "@/models/Link";

export const LinkCard = ({ link }: { link: GetLinkDto }) => {
  return (
    <li
      key={link.id}
      className="group flex flex-col justify-between rounded-md border border-gray-700 bg-gray-700/50 p-4 hover:bg-gray-700"
    >
      <a href={link.url} target="_blank" rel="noreferrer">
        <p className="line-clamp-1 text-teal-400 group-hover:underline">
          {link.shortedUrl}
        </p>
        <p className="line-clamp-1 text-ellipsis">{link.url}</p>
      </a>
    </li>
  );
};
