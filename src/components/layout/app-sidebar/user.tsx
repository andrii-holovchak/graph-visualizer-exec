import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function User() {
  return (
    <div className="flex items-center gap-3">
      <Image src="/user.png" width={48} height={48} alt="Picture of the user" />
      <div className="flex flex-col">
        <span>Lorem</span>
        <span>Lorem</span>
      </div>
      <Button variant="ghost" size="icon" className="ml-auto">
        <LogOut />
      </Button>
    </div>
  );
}
