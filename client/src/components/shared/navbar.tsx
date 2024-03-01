import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { Button } from "../ui/button.tsx";
import { navbarLink } from "@/constants/index.ts";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar
      className="py-5 space-x-3"
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-extrabold text-inherit text-[42px]">XYZ </p>
          <p className="text-inherit px-2 text-[40px]"> Industris</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="max-md:hidden flex gap-4 relative rounded-full boder bg-[#071A45] border-white/[0.2] shadow-input justify-center space-x-4 px-8 py-6 text-white"
        justify="center"
      >
        {navbarLink.map((link) => {
          return (
            <NavbarItem>
              <Link href="#" className="text-white">
                {link.label}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button className="bg-transparent text-black border-2 border-[#071A45] hover:text-white rounded-full">
            Sign in
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button className="ui_button">Sign Up</Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="pt-5">
        {navbarLink.map((link) => (
          <NavbarMenuItem>
            <Link className="w-full pt-5" href="#" size="lg">
              {link.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
