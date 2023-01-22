import clsx from "clsx";
import * as React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

type NavLinkProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  to: string;
};

export default function NavLink({
  children,
  className,
  onClick,
  to
}: NavLinkProps) {
  return (
    <RouterNavLink
      activeClassName="bg-gray-50 text-gray-900"
      className={clsx(
        "flex items-center font-medium rounded-xl px-4 py-4 text-gray-500",
        className
      )}
      onClick={onClick}
      to={to}
    >
      {children}
    </RouterNavLink>
  );
}
