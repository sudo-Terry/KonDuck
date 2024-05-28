import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ThumbsUpIcon, ThumbsDownIcon } from "@/components/icons";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const FreeBoardDetailPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Avatar className="h-10 w-10 mr-4">
                <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                <AvatarFallback>홍</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">홍길동</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      한달 전
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">
                      과제가 너무 많아서 죽을 것 같습니다ㅠㅠ
                    </h2>
                  </div>
                </div>
                <div className="mt-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                    <br />
                    <br />
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
                <div className="mt-8">
                  <h3 className="text-lg font-bold">Comments</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          alt="@shadcn"
                          src="/placeholder-avatar.jpg"
                        />
                        <AvatarFallback>이</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">이길동</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              2일 전
                            </div>
                          </div>
                          <div>
                            <Button size="icon" variant="ghost">
                              <ThumbsUpIcon className="h-5 w-5" />
                              <span className="sr-only">좋아요</span>
                            </Button>
                            <Button size="icon" variant="ghost">
                              <ThumbsDownIcon className="h-5 w-5" />
                              <span className="sr-only">싫어요</span>
                            </Button>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p>ㅋㅋㅋㅋㅋㅋㅋ</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          alt="@shadcn"
                          src="/placeholder-avatar.jpg"
                        />
                        <AvatarFallback>이</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">이길동</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              2일 전
                            </div>
                          </div>
                          <div>
                            <Button size="icon" variant="ghost">
                              <ThumbsUpIcon className="h-5 w-5" />
                              <span className="sr-only">좋아요</span>
                            </Button>
                            <Button size="icon" variant="ghost">
                              <ThumbsDownIcon className="h-5 w-5" />
                              <span className="sr-only">싫어요</span>
                            </Button>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p>ㅋㅋㅋㅋㅋㅋㅋ</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          alt="@shadcn"
                          src="/placeholder-avatar.jpg"
                        />
                        <AvatarFallback>이</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">이길동</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              2일 전
                            </div>
                          </div>
                          <div>
                            <Button size="icon" variant="ghost">
                              <ThumbsUpIcon className="h-5 w-5" />
                              <span className="sr-only">좋아요</span>
                            </Button>
                            <Button size="icon" variant="ghost">
                              <ThumbsDownIcon className="h-5 w-5" />
                              <span className="sr-only">싫어요</span>
                            </Button>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p>ㅋㅋㅋㅋㅋㅋㅋ</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          alt="@shadcn"
                          src="/placeholder-avatar.jpg"
                        />
                        <AvatarFallback>이</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">이길동</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              2일 전
                            </div>
                          </div>
                          <div>
                            <Button size="icon" variant="ghost">
                              <ThumbsUpIcon className="h-5 w-5" />
                              <span className="sr-only">좋아요</span>
                            </Button>
                            <Button size="icon" variant="ghost">
                              <ThumbsDownIcon className="h-5 w-5" />
                              <span className="sr-only">싫어요</span>
                            </Button>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p>ㅋㅋㅋㅋㅋㅋㅋ</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mt-10">
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

export default FreeBoardDetailPage;
