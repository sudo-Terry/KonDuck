import "../../app/globals.css";
import { useRouter } from "next/router";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ThumbsUpIcon, ThumbsDownIcon } from "@/components/icons";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const QnADetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Header />
      <main className="py-10">
        <div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Q&A 상세</h2>
                <div>
                  <Button className="mr-2" size="sm" variant="outline">
                    수정
                  </Button>
                  <Button size="sm">삭제</Button>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-medium">댓글 달아줘</h2>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage alt="홍길동" src="/placeholder-user.jpg" />
                    <AvatarFallback>홍</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">홍길동</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      2일 전
                    </p>
                  </div>
                </div>
                <div className="prose prose-stone">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                  <h3 className="text-lg font-medium mb-2">댓글</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-10 h-10">
                        <AvatarImage alt="김길동" src="/placeholder-user.jpg" />
                        <AvatarFallback>김</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">김길동</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          3시간 전
                        </p>
                        <div className="prose prose-stone mt-2">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Button
                            className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                            size="icon"
                            variant="ghost"
                          >
                            <ThumbsUpIcon className="w-4 h-4" />
                            <span className="sr-only">좋아요</span>
                          </Button>
                          <Button
                            className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                            size="icon"
                            variant="ghost"
                          >
                            <ThumbsDownIcon className="w-4 h-4" />
                            <span className="sr-only">싫어요</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                  <h3 className="text-lg font-medium mb-2">댓글 작성하기</h3>
                  <div>
                    <form>
                      <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">닉네임</Label>
                            <Input id="name" placeholder="닉네임" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="password">비밀번호</Label>
                            <Input
                              id="password"
                              placeholder="비밀번호"
                              type="password"
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default QnADetailPage;
