import React from "react";

import "@xyflow/react/dist/style.css";
import { Details } from "@/app/(dashboard)/_components/details";
import { Vulnerabilities } from "@/app/(dashboard)/_components/vulnerabilities/vulnerabilities";

export default function HomePage() {
  return (
    <main className="flex h-full gap-5">
      <Details />
      <Vulnerabilities />
    </main>
  );
}
