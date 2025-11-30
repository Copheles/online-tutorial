import Container from "@/components/layout/Container";
import Notifications from "@/components/layout/Notifications";
import SearchInput from "@/components/layout/SearchInput";
import UserButton from "@/components/layout/UserButton";
import ModeToggle from "@/components/mode-toggle";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 border-b z-50">
      <Container>
        <div className="flex justify-between items-center gap-8">
          <div className="flex py-5 items-center gap-1 cursor-pointer">
            <h3>Online Tutorial</h3>
          </div>
          <SearchInput />

          <div className="flex gap-5 lg:gap-8 items-center">
            <ModeToggle />
            <Notifications />
            <UserButton />
          </div>
        </div>
      </Container>
    </nav>
  );
}
