import "../app/globals.css";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/api";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";

export default function Component() {
  /*
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData("/home");
      setData(result);
    };

    getData();
  }, []);

  console.log(result);
  */
  return (
    <>
      <Header />
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ArticleCard
              title="Article Title 1"
              description="A brief description of the article content."
              author="John Doe"
              avatarSrc="/placeholder-avatar.jpg"
              href="#"
            />
            <ArticleCard
              title="Article Title 2"
              description="A brief description of the article content."
              author="Jane Smith"
              avatarSrc="/placeholder-avatar.jpg"
              href="#"
            />
            <ArticleCard
              title="Article Title 3"
              description="A brief description of the article content."
              author="Sarah Lee"
              avatarSrc="/placeholder-avatar.jpg"
              href="#"
            />
            <ArticleCard
              title="Article Title 4"
              description="A brief description of the article content."
              author="Michael Johnson"
              avatarSrc="/placeholder-avatar.jpg"
              href="#"
            />
            <ArticleCard
              title="Article Title 5"
              description="A brief description of the article content."
              author="Emily Davis"
              avatarSrc="/placeholder-avatar.jpg"
              href="#"
            />
            <ArticleCard
              title="Article Title 6"
              description="A brief description of the article content."
              author="David Brown"
              avatarSrc="/placeholder-avatar.jpg"
              href="#"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
