import "../app/globals.css";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/api";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { CompanyTypes, CompanyTypesLabel } from "../enums/CompanyTypes";

export default function Component() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData("/home");
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  console.log(data);

  return (
    <>
      <Header />
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data &&
              data.map((article, index) => (
                <ArticleCard
                  key={index}
                  title={article.title}
                  subtitle={article.created_at}
                  description={article.text}
                  author={CompanyTypesLabel[article.company_id]}
                  avatarSrc={article.avatarSrc}
                  href={article.url}
                />
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
