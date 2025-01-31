import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center space-x-4 py-2 text-sm text-gray-500">
      {/* Previous Button */}
      <Button
        variant="ghost"
        size="icon"
        className="p-2"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {/* Page Info */}
      <span className="text-[#667085]">
        Showing {currentPage}-{Math.min(currentPage * 2, totalPages)} of{" "}
        {totalPages}
      </span>

      {/* Next Button */}
      <Button
        variant="ghost"
        size="icon"
        className="p-2"
        disabled={currentPage * 2 >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
