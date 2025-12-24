'use client';

interface PaginationProps {
  total: number;
  page: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  total,
  page,
  pageSize,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(total / pageSize);

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center gap-2 mt-4">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="
          px-3 py-1 rounded
          bg-zinc-800 text-white
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        Prev
      </button>

      {Array.from({ length: totalPages }).map((_, index) => {
        const pageNumber = index + 1;

        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`
              px-3 py-1 rounded
              ${page === pageNumber
                ? "bg-purple-600 text-white"
                : "bg-zinc-800 text-white hover:bg-zinc-700"}
            `}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="
          px-3 py-1 rounded
          bg-zinc-800 text-white
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        Next
      </button>
    </div>
  );
}
