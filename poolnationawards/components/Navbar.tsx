import Image from "next/image";
import { Button } from "./ui/button";
import ThemeToggle from "./theme-toggle";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between px-5 bg-white/90 backdrop-blur-lg dark:bg-gray-900/90 py-6 border-b border shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div>
          <Image
            src="/logo.png"
            alt="logo"
            width={244}
            height={57}
            className="hidden md:block cursor-pointer"
          />
          <Image
            src="/mobile-logo.png"
            alt="logo"
            width={70}
            height={70}
            className="md:hidden cursor-pointer"
          />
        </div>

        <div className="hidden md:block">
          <ul className="flex space-x-6">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="flex justify-end items-center gap-4">
          <ThemeToggle />
          <Menu className="md:hidden cursor-pointer" />
          <Button className="hidden md:block" size="lg">
            Sign In
          </Button>
          <Button className="hidden md:block" variant="outline" size="lg">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
