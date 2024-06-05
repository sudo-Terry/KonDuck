import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { fetchData } from "@/utils/api";
import { formatDate } from "@/utils/formDate";
import { ThumbsUpIcon, ThumbsDownIcon } from "@/components/icons";

interface Comment {
  id: number;
  user_name: string;
  created_at: string;
  content: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

const FreeBoardDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [commentContent, setCommentContent] = useState("");

  useEffect(() => {
    if (id) {
      fetchPost(id.toString());
      fetchComments(id.toString());
    }
  }, [id]);

  const fetchPost = async (postId: string) => {
    try {
      const postData = await fetchData(`/board/${postId}`);
      setPost(postData);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  const fetchComments = async (postId: string) => {
    try {
      const data = await fetchData(`/board/${postId}/post_comments`);
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleCommentSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/board/${id}/post_comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: commentContent,
          user_name: userName,
          user_password: userPassword,
        }),
      });
      if (response.ok) {
        const newComment = await response.json();
        setComments([...comments, newComment]);
        setCommentContent("");
      } else {
        throw new Error("Failed to post comment");
      }
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <>
      <Header />
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {post && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {formatDate(post.created_at)}
                </p>
                <div className="mt-4">
                  <p>{post.content}</p>
                </div>
              </div>
            )}

            <div className="mt-8">
              <h3 className="text-lg font-bold">Comments</h3>
              <div className="mt-4 space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex items-start space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        alt={`@${comment.user_name}`}
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>
                        {comment.user_name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{comment.user_name}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {formatDate(comment.created_at)}
                          </div>
                        </div>
                        <div>
                          <Button size="icon" variant="ghost">
                            <ThumbsUpIcon className="h-5 w-5" />
                            <span className="sr-only">Like</span>
                          </Button>
                          <Button size="icon" variant="ghost">
                            <ThumbsDownIcon className="h-5 w-5" />
                            <span className="sr-only">Dislike</span>
                          </Button>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p>{comment.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mt-10">
              <h3 className="text-lg font-medium mb-2">댓글 작성하기</h3>
              <div>
                <form onSubmit={handleCommentSubmit}>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">닉네임</Label>
                        <Input
                          id="name"
                          placeholder="닉네임"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">비밀번호</Label>
                        <Input
                          id="password"
                          placeholder="비밀번호"
                          type="password"
                          value={userPassword}
                          onChange={(e) => setUserPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="comment">댓글</Label>
                      <Textarea
                        className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 p-3 text-gray-900 dark:text-gray-100 focus:border-indigo-500 focus:ring-indigo-500"
                        id="comment"
                        placeholder="댓글을 남겨주세요"
                        rows={3}
                        value={commentContent}
                        onChange={(e) => setCommentContent(e.target.value)}
                      />
                    </div>
                    <div className="mt-2 flex justify-end">
                      <Button type="submit">저장</Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FreeBoardDetailPage;
