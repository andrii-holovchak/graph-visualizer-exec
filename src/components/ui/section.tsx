import { type PropsWithChildren, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  title: ReactNode;
  className?: string;
}

export function Section({
  title,
  children,
  className,
}: PropsWithChildren<Props>) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <h3 className="text-xl font-bold text-[#02983E]">{title}</h3>
      <div className="line- text-xs leading-5">{children}</div>
    </div>
  );
}
