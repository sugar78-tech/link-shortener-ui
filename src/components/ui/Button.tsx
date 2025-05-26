import cslx from "clsx";
import type { ButtonHTMLAttributes, ComponentType, SVGProps } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

const buttonVariants = (variant: ButtonProps["variant"] = "primary") =>
  cslx(
    "flex items-center rounded px-4 py-2 shadow transition-colors duration-150",
    variant === "primary" && "bg-teal-600 hover:bg-teal-700",
    variant === "secondary" && "bg-gray-600 hover:bg-gray-700"
  );

export const Button = ({
  children,
  variant = "primary",
  Icon,
  ...props
}: ButtonProps) => {
  return (
    <button className={buttonVariants(variant)} {...props}>
      {Icon && <Icon />}
      {children}
    </button>
  );
};
