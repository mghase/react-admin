import clsx from "clsx";
import React from "react";

type ProgressBarProps = {
  className?: string;
  value?: number;
};

function ProgressBar({ className, value = 0 }: ProgressBarProps) {
  return (
    <div
      className={clsx(
        "overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-100",
        className
      )}
    >
      <div
        style={{ width: `${value}%` }}
        className="flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
      ></div>
    </div>
  );
}

export default ProgressBar;
