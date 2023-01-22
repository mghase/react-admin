import clsx from "clsx";
import * as React from "react";

type ListProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function List({ children, className }: ListProps) {
  return <div className={clsx("flex flex-col", className)}>{children}</div>;
}
