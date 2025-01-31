import React from "react";

interface DetailItem {
  label: string;
  value: React.ReactNode;
}

interface DetailListProps {
  items: DetailItem[];
}

export function DetailList({ items }: DetailListProps) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-5">
          <span className="font-semibold text-[#334155]">{item.label}</span>
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
}
