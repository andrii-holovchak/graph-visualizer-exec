import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { type ReactNode, useState } from "react";
import { Card } from "@/components/ui/card";
import { Pagination } from "@/components/ui/pagination";

export interface CardTableColumn<Data> {
  key: keyof Data;
  label: string;
  className?: string;
  render?: (value: Data) => ReactNode;
}

interface CardTableProps<Data> {
  columns: CardTableColumn<Data>[];
  data: Data[];
}

export function CardTable<Data>({ columns, data }: CardTableProps<Data>) {
  const [page, setPage] = useState(1);

  return (
    <Card className="w-full overflow-hidden p-0">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead
                key={col.key.toString()}
                className={cn("p-3 pl-6 pr-5 text-left", col.className)}
              >
                {col.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <TableRow key={rowIndex} className="hover:bg-gray-50">
                {columns.map((col) => (
                  <TableCell
                    key={col.key.toString()}
                    className={cn("px-6 py-3", col.className)}
                  >
                    {col.render ? col.render(row) : (row[col.key] as string)}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="p-4 text-center">
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-center border-t py-3">
        <Pagination currentPage={page} totalPages={1} onPageChange={setPage} />
      </div>
    </Card>
  );
}
