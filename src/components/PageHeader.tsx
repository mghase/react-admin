import clsx from "clsx";
import * as React from "react";

type PageHeaderProps = {
  children?: React.ReactNode;
  className?: string;
  extra?: React.ReactNode;
};

export default function PageHeader({
  children,
  className,
  extra
}: PageHeaderProps) {
  return (
    <div className={clsx("flex items-center justify-between", className)}>
      {children}
      {extra}
    </div>
  );
}
