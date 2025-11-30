import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";

export default function Notifications() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="relative">
        <div className="absolute h-5 w-5 rounded-full bg-rose-400 text-white text-xs flex items-center justify-center bottom-3 left-2">
          <span>5</span>
        </div>
        <Bell size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="bottom"
        className="w-full max-w-[400px]"
      >
        <div className="flex gap-5 justify-between mb-2">
          <h3 className="font-bold text-lg">Notifications</h3>
          <Button variant="link">Mark all as read</Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
