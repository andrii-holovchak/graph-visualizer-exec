import { Handle, type Node, type NodeProps, Position } from "@xyflow/react";
import { type RoundedNodeData } from "@/components/ui/graph/rounded-node/types";

export type RoundedNodeType = Node<RoundedNodeData, "rounded">;

export function RoundedNode({
  data,
}: Omit<NodeProps<RoundedNodeType>, "type">) {
  return (
    <>
      <div className="relative flex h-fit w-[81px] flex-col items-center rounded-full">
        <div className="bg-red relative size-[53px] rounded-full">
          {data.content}
          <div className="absolute -right-[6px] -top-[7px]">{data.badge}</div>
        </div>
        <div className="mt-1 flex flex-col items-center gap-0.5">
          <span className="text-xs font-semibold text-[#525D73]">
            {data.title}
          </span>
          <span className="text[#667085] lead text-[9px] font-medium leading-[10px]">
            {data.description}
          </span>
        </div>

        {/* Handles for connections */}
        <Handle
          type="target"
          position={Position.Left}
          className="h-2 w-2 bg-gray-500 opacity-0"
        />
        <Handle
          type="source"
          position={Position.Right}
          className="h-2 w-2 bg-gray-500 opacity-0"
        />
      </div>
    </>
  );
}
