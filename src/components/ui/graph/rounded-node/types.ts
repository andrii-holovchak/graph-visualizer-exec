import { type ReactNode } from "react";

export type RoundedNodeData = {
  title: string;
  description?: string;
  badge?: ReactNode;
  content: ReactNode;
};
