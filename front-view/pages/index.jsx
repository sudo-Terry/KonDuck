import "../app/globals.css";
import { useEffect, useState } from "react";
import { fetchData } from "@/utils/api";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { CompanyTypesLabel } from "@/enums/CompanyTypes";
import { formatDate } from "@/utils/formDate";

export default function Component() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData(`/home?page=${page}`);
        setData(result.articles);
        setTotalPages(result.meta.total_pages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [page]);

  return (
    <>
      <Header />
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.length > 0 ? (
              data.map((article, index) => (
                <ArticleCard
                  key={index}
                  title={article.title}
                  subtitle={formatDate(article.created_at)}
                  description={article.text}
                  author={CompanyTypesLabel[article.company_id]}
                  company_type={article.company_id}
                  href={article.url}
                />
              ))
            ) : (
              <p>No articles found.</p>
            )}
          </div>
          <div className="flex justify-between mt-4">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="btn"
            >
              Previous
            </button>
            <span>
              Page {page} of {totalPages}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="btn"
            >
              Next
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

