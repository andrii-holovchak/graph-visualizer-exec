import type { VulnerabilityNodeType } from "@/components/vulnerability/vulnerability-node/vulnerability-node";
import { type Edge, Position } from "@xyflow/react";

export const initialNodes: VulnerabilityNodeType[] = [
  {
    id: "1",
    type: "vulnerability",
    position: { x: 100, y: 200 },
    data: { entity: "attacker", name: "Loremipsumm", id: "1" },
    targetPosition: Position.Right,
    sourcePosition: Position.Right,
  },
  {
    id: "2",
    type: "vulnerability",
    position: { x: 250, y: 200 },
    data: { entity: "server", name: "Loremipsu", id: "2" },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "3",
    type: "vulnerability",
    position: { x: 400, y: 200 },
    data: { entity: "server", name: "Loremipsu", id: "3" },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "4",
    type: "vulnerability",
    position: { x: 700, y: 130 },
    data: {
      id: "4",
      entity: "server",
      name: "Loremipsumdolorsit",
      address: "192.168.1.1",
      severity: "critical",
    },
    targetPosition: Position.Left,
  },
  {
    id: "5",
    type: "vulnerability",
    position: { x: 700, y: 270 },
    data: {
      id: "5",
      entity: "server",
      name: "Loremipsumdolorsit002",
      address: "192.168.1.2",
      severity: "critical",
    },
    targetPosition: Position.Left,
  },
];

export const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e3-4", source: "3", target: "4" },
  { id: "e3-5", source: "3", target: "5" },
];
