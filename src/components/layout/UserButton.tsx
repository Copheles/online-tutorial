import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Bookmark,
  BookMarked,
  LogOut,
  Pencil,
  Shield,
  User,
  UserRound,
} from "lucide-react";
import React from "react";

export default function UserButton() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback className="border-2 border-accent ">
            <UserRound />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end" className="w-[250px]">
        <DropdownMenuItem>
          <Button
            variant="ghost"
            className="flex items- justify-start gap-3 w-full"
          >
            <User size={18} /> Profile
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button
            variant="ghost"
            className="flex items- justify-start gap-3 w-full"
          >
            <Pencil size={18} /> Create Post
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button
            variant="ghost"
            className="flex items- justify-start gap-3 w-full"
          >
            <Bookmark size={18} /> Bookmark
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button
            variant="ghost"
            className="flex items- justify-start gap-3 w-full"
          >
            <Shield size={18} /> Admin
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button
            variant="ghost"
            className="flex items- justify-start gap-3 hover:text-destructive w-full text-destructive"
          >
            <LogOut size={18} className="text-destructive" />
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
