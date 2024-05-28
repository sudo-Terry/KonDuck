import "../app/globals.css";
import {
  PaginationPrevious,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  PaginationContent,
  Pagination,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
import { fetchData } from "@/utils/api";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { CompanyTypesLabel } from "@/enums/CompanyTypes";
import { formatDate } from "@/utils/formDate";

export default function Component() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData(`/home?page=${currentPage}`);
        setData(result.articles);
        setTotalPages(result.meta.total_pages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Header />
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data && data.length > 0 ? (
              data.map((article, index) => (
                <ArticleCard
                  key={index}
                  title={article.title}
                  subtitle={CompanyTypesLabel[article.company_id]}
                  // description={article.text}
                  author={article.author}
                  date={formatDate(article.date)}
                  href={article.url}
                  thumbnail={article.thumbnail}
                  blog_name={article.blog_name}
                  company_type={article.company_id}
                />
              ))
            ) : (
              <p>No articles found.</p>
            )}
          </div>
          <div className="pagination w-full mt-10">
            <Pagination>
              <PaginationContent className="flex justify-between items-center">
                <PaginationItem>
                  <PaginationPrevious
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                  />
                </PaginationItem>
                <PaginationItem>
                  <span>
                    Page {currentPage} of {totalPages}
                  </span>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
