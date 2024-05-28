import "../app/globals.css";
import {
  PaginationPrevious,
  PaginationItem,
  PaginationNext,
  PaginationContent,
  Pagination,
} from "@/components/ui/pagination";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { fetchData } from "@/utils/api";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "@/components/icons";
import { ArticleCard } from "@/components/ArticleCard";
import { CompanyTypes, CompanyTypesLabel } from "@/enums/CompanyTypes";
import { formatDate } from "@/utils/formDate";

export default function Component() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const companyQuery = selectedCompanies.length
          ? `&company_id=${selectedCompanies.join(",")}`
          : "";
        const result = await fetchData(
          `/home?page=${currentPage}${companyQuery}`
        );
        setData(result.articles);
        setTotalPages(result.meta.total_pages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [currentPage, selectedCompanies]);

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

  const handleCompanySelect = (companyId) => {
    setSelectedCompanies((prevSelected) => {
      if (prevSelected.includes(companyId)) {
        return prevSelected.filter((id) => id !== companyId);
      } else {
        return [...prevSelected, companyId];
      }
    });
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
          <div className="mt-10">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="w-full" variant="outline">
                  <FilterIcon className="mr-2 h-4 w-4" />
                  Filter by Company
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>회사 목록</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {Object.entries(CompanyTypesLabel).map(([id, label]) => (
                  <DropdownMenuItem
                    key={id}
                    onClick={() => handleCompanySelect(parseInt(id))}
                    className={
                      selectedCompanies.includes(parseInt(id))
                        ? "bg-blue-200"
                        : ""
                    }
                  >
                    {label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
