import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="relative hidden lg:block">
      <Search className="absolute top-2 left-4 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search..." className="pl-10 bg-primary/10" />
    </div>
  );
}
