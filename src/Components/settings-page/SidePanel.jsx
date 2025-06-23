import React from "react";
import Avatar from "../ui/Avatar";
import { Link } from "react-router-dom";
import { Button } from "../ui/button/Button";

// Sidebar links
const LINKS = [
  { label: "My Orders", link: "orders" },
  { label: "Account Settings", link: "account-settings" },
  { label: "Manage Addresses", link: "manage-addresses" },
  { label: "My Wishlist", link: "wishlist" },
];

export const SidePanel = ({
  user = { name: "Admin" },
  activeTab = "account-settings",
  setActiveTab = () => {},
  onLogout = () => {},
  className = "",
}) => {
  return (
    <div
      className={`fixed h-[calc(100%-9%)] hidden md:block lg:w-[240px] min-w-[200px] space-y-4 pb-3 ${className}`}
    >
      {/* Avatar */}
      <div className="flex flex-col gap-3.5 p-4 bg-white rounded-2xl">
        <div className="flex items-center gap-4">
          <Avatar
            imgUrl={user.avatar}
            loading={false}
            className="size-14 cursor-pointer hover:scale-105 transition-all duration-300"
          />
          <div>
            <p className="text-sm text-gray-500">Hello,</p>
            <h3 className="text-md font-semibold">{user.name || "Admin"}</h3>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-col gap-3.5 p-4 bg-white rounded-2xl">
        <div className="flex flex-col gap-1">
          {LINKS.map(({ label, link }) => (
            <Link
              key={link}
              to={`/home/${link}`}
              onClick={() => setActiveTab(link)}
              className={`text-sm px-4 py-2 rounded-lg transition-all duration-300
                ${
                  activeTab === link
                    ? "bg-gray-100 text-gray-900 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Logout */}
        <Button
          variant="secondary"
          size="sm"
          onClick={onLogout}
          className="mt-2 text-red-600 w-fit px-4 border-none shadow-none"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};
