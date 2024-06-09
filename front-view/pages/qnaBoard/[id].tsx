import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchData } from "@/utils/api";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ThumbsUpIcon, ThumbsDownIcon } from "@/components/icons";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { formatDate } from "@/utils/formDate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface QnA {
  id: string;
  title: string;
  content: string;
  user_name: string;
  created_at: string;
}

interface Answer {
  id: string;
  user_name: string;
  answer: string;
  selected: boolean;
  created_at: string;
}

const QnADetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [qna, setQna] = useState<QnA | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    comment: "",
    created_at: "",
  });

  useEffect(() => {
    if (id) {
      const fetchQnA = async () => {
        try {
          const qnaData = await fetchData(`/qna/${id}`);
          setQna(qnaData);

          const answersData = await fetchData(`/qna/${id}/qna_answers`);
          setAnswers(answersData);
        } catch (err: any) {
          console.log(err.message);
        }
      };

      fetchQnA();
    }
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/qna/${id}/qna_answers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          qna_answer: {
            user_name: formData.name,
            user_password: formData.password,
            answer: formData.comment,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the answer");
      }

      const newAnswer = await response.json();
      setAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
      setFormData({ name: "", password: "", comment: "", created_at: "" });
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <>
      <Header />
      <main className="py-10">
        <div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-6">
              {qna && (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">{qna.title}</h2>
                    <div>
                      <Button className="mr-2" size="sm" variant="outline">
                        수정
                      </Button>
                      <Button size="sm">삭제</Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-10 h-10">
                        <AvatarImage
                          alt={qna.user_name}
                          src="/placeholder-user.jpg"
                        />
                        <AvatarFallback>
                          {qna.user_name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{qna.user_name}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {formatDate(qna.created_at)}
                        </p>
                      </div>
                    </div>
                    <div className="prose prose-stone">
                      <p>{qna.content}</p>
                    </div>
                  </div>
                </>
              )}
              <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                <h3 className="text-lg font-medium mb-2">댓글</h3>
                <div className="space-y-4">
                  {answers.map((answer) => (
                    <div
                      key={answer.id}
                      className={`flex items-start gap-4 ${
                        answer.selected ? "bg-gray-100" : ""
                      } dark:bg-gray-800 p-4 rounded-lg`}
                    >
                      <Avatar className="w-10 h-10">
                        <AvatarImage
                          alt={answer.user_name}
                          src="/placeholder-user.jpg"
                        />
                        <AvatarFallback>
                          {answer.user_name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        {answer.selected && (
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            질문자 채택
                          </p>
                        )}
                        <h4 className="font-medium">{answer.user_name}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {formatDate(answer.created_at)}
                        </p>
                        <div className="prose prose-stone mt-2">
                          <p>{answer.answer}</p>
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
                  ))}
                </div>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                <h3 className="text-lg font-medium mb-2">댓글 작성하기</h3>
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">닉네임</Label>
                          <Input
                            id="name"
                            placeholder="닉네임"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password">비밀번호</Label>
                          <Input
                            id="password"
                            placeholder="비밀번호"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
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
                          value={formData.comment}
                          onChange={handleChange}
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
      </main>
      <Footer />
    </>
  );
};

export default QnADetailPage;
