"use client";

import React from "react";

import "@xyflow/react/dist/style.css";
import { Details } from "@/app/_components/details";
import { Vulnerabilities } from "@/app/_components/vulnerabilities/vulnerabilities";

const initialNodes = [
  { id: "1", position: { x: 100, y: 100 }, data: { label: "1" } },
  { id: "2", position: { x: 200, y: 200 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function HomePage() {
  return (
    <main className="flex min-h-full gap-5">
      <Details />
      <Vulnerabilities />
    </main>
  );
}
