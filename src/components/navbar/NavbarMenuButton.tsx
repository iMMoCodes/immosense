"use client";

import { Menu, X } from "lucide-react";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";

interface NavbarMenuButtonProps {
  readonly mobileOpen: boolean;
  readonly setMobileOpen: (open: boolean) => void;
}

const NavbarMenuButton = ({
  mobileOpen,
  setMobileOpen,
}: NavbarMenuButtonProps) => {
  return (
    <div className="md:hidden flex items-center gap-2">
      <ModeToggle />
      <Button
        variant="ghost"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>
    </div>
  );
};

export default NavbarMenuButton;
