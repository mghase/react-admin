import * as React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import Typography from "./Typography";
import { useUserInfo } from "../hooks/useAuth";
import { HiLogout, HiSelector, HiUser } from "react-icons/hi";
import Button from "./Button";

type ProfileMenuProps = {
  className?: string;
};

export default function ProfileMenu({ className }: ProfileMenuProps) {
  const { data } = useUserInfo("AUTHKEY123");

  return (
    <Menu
      className="my-6"
      trigger={
        <Button
          className="items-center text-left w-full p-2"
          color="ghost-primary"
        >
          <Avatar className="mr-4"></Avatar>
          <div className="flex-grow">
            <Typography
              bold
            >{`${data?.firstName} ${data?.lastName}`}</Typography>
            <Typography muted small>
              {data?.role}
            </Typography>
          </div>
          <HiSelector />
        </Button>
      }
    >
      <MenuItem as={Link} to="/admin/profile">
        <HiUser className="w-5 h-5 mr-2" aria-hidden="true" />
        My Profile
      </MenuItem>
      <MenuItem>
        <HiLogout className="w-5 h-5 mr-2" aria-hidden="true" />
        Logout
      </MenuItem>
    </Menu>
  );
}
