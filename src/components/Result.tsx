import clsx from "clsx";
import * as React from "react";
import Typography from "./Typography";

type ResultProps = {
  className?: string;
  extra?: React.ReactNode;
  image?: React.ReactNode;
  message?: string;
  title: string;
};

export default function Result({
  className,
  extra,
  image,
  message,
  title
}: ResultProps) {
  return (
    <div className={clsx("", className)}>
      <div className="text-center px-4 py-8">
        {image && <div className="flex justify-center mb-4">{image}</div>}
        <Typography bold>{title}</Typography>
        {message && (
          <Typography className="mt-2" muted small>
            {message}
          </Typography>
        )}
        {extra && <div className="text-center mt-6">{extra}</div>}
      </div>
    </div>
  );
}
