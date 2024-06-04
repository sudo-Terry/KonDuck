import { useEffect, useState } from "react";
import Link from "next/link";
import { formatDate } from "@/utils/formDate";
import { fetchData } from "@/utils/api";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  PaginationPrevious,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  PaginationContent,
  Pagination,
} from "@/components/ui/pagination";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

interface Post {
  id: number;
  user_name: string;
  created_at: string;
  title: string;
  content: string;
  comment_count: number;
}

const FreeBoardPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const perPage = 5;

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await fetchData(
          `/board?page=${currentPage}&per_page=${perPage}`
        );
        setPosts(data.posts);
        setTotalPages(data.meta.total_pages);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, [currentPage]);

  return (
    <>
      <Header />
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="flex items-start space-x-4">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarImage
                    alt={`@${post.user_name}`}
                    src="/placeholder-avatar.jpg"
                  />
                  <AvatarFallback>
                    {post.user_name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{post.user_name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(post.created_at)}
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold">{post.title}</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {`${post.comment_count}개의 댓글`}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p>{post.content}</p>
                    <p>...</p>
                  </div>
                  <div className="mt-4">
                    <Link href={`/freeBoard/${post.id}`} passHref>
                      <span className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                        더보기
                      </span>
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
                      onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
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
                      onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FreeBoardPage;
