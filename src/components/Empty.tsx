import * as React from "react";
import { HiInbox } from "react-icons/hi";
import Result from "./Result";

type EmptyProps = {
  className?: string;
  message: string;
};

export default function Empty({ className, message }: EmptyProps) {
  return (
    <Result
      className={className}
      image={<HiInbox className="text-gray-200" size={64} />}
      message={message}
      title="Empty!"
    />
  );
}
