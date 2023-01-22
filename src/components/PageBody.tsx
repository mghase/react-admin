import clsx from "clsx";
import * as React from "react";

type PageBodyProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function PageBody({ children, className }: PageBodyProps) {
  return <div className={clsx("py-6", className)}>{children}</div>;
}
