import { NodeToolbar, useReactFlow } from "@xyflow/react";
import { type PropsWithChildren, useEffect, useRef } from "react";

interface Props extends PropsWithChildren {
  nodeId: string;
}

function CenteredContent({ nodeId, children }: Props) {
  const { setCenter, getNode, getZoom } = useReactFlow();
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tooltipNode = getNode(nodeId);

    if (tooltipNode && contentRef.current) {
      const tooltipHeight = contentRef.current.getBoundingClientRect().height;

      void setCenter(
        tooltipNode.position.x,
        tooltipNode.position.y - tooltipHeight * 0.5,
        {
          duration: 800,
          zoom: Math.min(0.7, getZoom()),
        },
      );
    }
  }, [getNode, getZoom, nodeId, setCenter]);

  return <div ref={contentRef}>{children}</div>;
}

export function Tooltip({ nodeId, children }: Props) {
  return (
    <NodeToolbar nodeId={nodeId}>
      <CenteredContent nodeId={nodeId}>{children}</CenteredContent>
    </NodeToolbar>
  );
}
