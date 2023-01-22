import clsx from "clsx";
import * as React from "react";

type PageProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function Page({ children, className }: PageProps) {
  return <div className={clsx("p-6", className)}>{children}</div>;
}
