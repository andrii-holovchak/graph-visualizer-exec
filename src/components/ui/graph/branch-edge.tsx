import { type EdgeProps, getBezierPath } from "@xyflow/react";

export function BranchEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
}: EdgeProps) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      {/* Define the arrow marker */}
      <svg width="0" height="0">
        <defs>
          <marker
            id="arrowhead"
            viewBox="0 0 10 10"
            refX="0"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill={style.stroke ?? "#939393"} />
          </marker>
        </defs>
      </svg>
      <path
        id={id}
        d={edgePath}
        stroke={style.stroke ?? "#939393"} // Default color
        strokeWidth={style.strokeWidth ?? 1}
        fill="none"
        markerEnd="url(#arrowhead)" // Add arrow
      />
    </>
  );
}
