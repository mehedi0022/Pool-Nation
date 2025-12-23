import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between container mx-auto mt-6 bg-white/90 px-4 py-4 backdrop-blur-lg dark:bg-gray-900/90 shadow-md rounded-full sticky top-0 z-50">
      <div>
        <Image src="/logo.png" alt="Logo" width={180} height={90} />
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className="text-base">
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className="text-base">
              <Link href="/company">Company</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className="text-base">
              <Link href="/individual">Individual</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className="text-base">
              <Link href="/pricing">Pricing</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className="text-base">
              <Link href="/about-us">About Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className="text-base">
              <Link href="/faq">FAQ</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div>
        <ThemeToggle />
        <Button className="ml-4 rounded-full" size="lg">
          <Link href="/signup">Sign In</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
