import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useRouter } from "next/router";

const QnABoardWritePage: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    user_name: "",
    user_password: "",
  });
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/qna", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ qna: formData }), // Updated key to match Rails controller
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      const qna = await response.json();
      router.push("/qnaBoard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">질문하기</h1>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label
                htmlFor="user_name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                닉네임
              </Label>
              <Input
                type="text"
                id="user_name"
                name="user_name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="닉네임을 입력해 주세요"
                value={formData.user_name}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label
                htmlFor="user_password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                비밀번호
              </Label>
              <Input
                type="password"
                id="user_password"
                name="user_password"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="질문글 비밀번호를 입력해 주세요"
                value={formData.user_password}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                제목
              </Label>
              <Input
                type="text"
                id="title"
                name="title"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="질문글 제목을 입력해 주세요"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                질문 내용
              </Label>
              <Textarea
                id="content"
                name="content"
                rows={8}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="내용을 입력해 주세요"
                value={formData.content}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit">작성하기</Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QnABoardWritePage;
