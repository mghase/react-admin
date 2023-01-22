import { Menu as HeadlessMenu, Transition } from "@headlessui/react";
import clsx from "clsx";
import * as React from "react";

type MenuProps = {
  children: React.ReactNode;
  className?: string;
  trigger: React.ReactNode;
};

export default function Menu({ children, className, trigger }: MenuProps) {
  return (
    <HeadlessMenu
      as="div"
      className={clsx("relative inline-blocks", className)}
    >
      <div>
        <HeadlessMenu.Button className="w-full">{trigger}</HeadlessMenu.Button>
      </div>
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <HeadlessMenu.Items className="absolute left-0 top-auto bottom-full w-full mt-2 origin-bottom-left bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">{children}</div>
        </HeadlessMenu.Items>
      </Transition>
    </HeadlessMenu>
  );
}
