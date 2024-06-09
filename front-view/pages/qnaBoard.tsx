import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  PaginationPrevious,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  PaginationContent,
  Pagination,
} from "@/components/ui/pagination";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { fetchData } from "@/utils/api";

interface Qna {
  id: number;
  title: string;
  user_name: string;
}

const QnABoardPage: React.FC = () => {
  const [qnas, setQnas] = useState<Qna[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const perPage = 5;

  useEffect(() => {
    async function fetchQnas() {
      try {
        const data = await fetchData(
          `/qna?page=${currentPage}&per_page=${perPage}`
        );
        setQnas(data.qnas);
        setTotalPages(data.meta.total_pages);
      } catch (error) {
        console.error("Error fetching QnAs:", error);
      }
    }
    fetchQnas();
  }, [currentPage]);

  return (
    <>
      <Header />
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Q&A</h2>
              <Link
                className="text-indigo-600 hover:text-indigo-900"
                href={`/qnaBoard/writePost`}
              >
                잘문 등록하기
              </Link>
            </div>
            <div className="space-y-4">
              {qnas.map((qna) => (
                <div key={qna.id} className="bg-white rounded-lg shadow-sm p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">{qna.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Asked by {qna.user_name}
                      </p>
                    </div>
                    <div>
                      <Link href={`/qnaBoard/${qna.id}`} passHref>
                        <Button size="sm">View</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Pagination>
                <PaginationContent className="flex">
                  {currentPage > 1 && (
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={() =>
                          setCurrentPage((prevPage) => prevPage - 1)
                        }
                      />
                    </PaginationItem>
                  )}
                  {currentPage > 3 && <PaginationEllipsis />}
                  {currentPage > 2 && (
                    <PaginationItem>
                      <PaginationLink
                        href="#"
                        onClick={() => setCurrentPage(currentPage - 2)}
                      >
                        {currentPage - 2}
                      </PaginationLink>
                    </PaginationItem>
                  )}
                  {currentPage > 1 && (
                    <PaginationItem>
                      <PaginationLink
                        href="#"
                        onClick={() => setCurrentPage(currentPage - 1)}
                      >
                        {currentPage - 1}
                      </PaginationLink>
                    </PaginationItem>
                  )}
                  <PaginationItem>
                    <PaginationLink className="bg-blue-500 text-white" href="#">
                      {currentPage}
                    </PaginationLink>
                  </PaginationItem>
                  {currentPage < totalPages && (
                    <PaginationItem>
                      <PaginationLink
                        href="#"
                        onClick={() => setCurrentPage(currentPage + 1)}
                      >
                        {currentPage + 1}
                      </PaginationLink>
                    </PaginationItem>
                  )}
                  {currentPage < totalPages - 1 && (
                    <PaginationItem>
                      <PaginationLink
                        href="#"
                        onClick={() => setCurrentPage(currentPage + 2)}
                      >
                        {currentPage + 2}
                      </PaginationLink>
                    </PaginationItem>
                  )}
                  {currentPage < totalPages - 2 && <PaginationEllipsis />}
                  {currentPage < totalPages && (
                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={() =>
                          setCurrentPage((prevPage) => prevPage + 1)
                        }
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default QnABoardPage;
