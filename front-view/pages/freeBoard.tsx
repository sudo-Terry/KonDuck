import Link from "next/link";
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

const FreeBoardPage: React.FC = () => {
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
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      4개의 댓글
                    </p>
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
                  </p>
                  <p>...</p>
                </div>
                <div className="mt-4">
                  <Link
                    className="text-indigo-600 hover:text-indigo-900"
                    href="/freeBoard/1"
                  >
                    더보기
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Avatar className="h-10 w-10 mr-4">
                <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Jane Smith</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Content Writer
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">
                      New Blog Post: The Future of Renewable Energy
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Read our latest blog post on the exciting advancements in
                      renewable energy technology.
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p>
                    In our latest blog post, we explore the exciting
                    advancements in renewable energy technology and what the
                    future holds. From cutting-edge solar panels to innovative
                    wind turbines, the renewable energy landscape is rapidly
                    evolving. Read our in-depth analysis to learn more about the
                    latest trends and how they will shape the energy industry in
                    the years to come.
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    className="text-indigo-600 hover:text-indigo-900"
                    href="#"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Avatar className="h-10 w-10 mr-4">
                <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Sarah Lee</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Product Manager
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">
                      New Product Update: Acme Smart Thermostat
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Our latest product, the Acme Smart Thermostat, is now
                      available for purchase.
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p>
                    We are excited to announce the launch of our latest product,
                    the Acme Smart Thermostat. This cutting-edge device allows
                    you to control your home's temperature with ease, saving you
                    money on your energy bills and reducing your carbon
                    footprint. With its intuitive app and voice control
                    integration, the Acme Smart Thermostat is the perfect
                    addition to any smart home.
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    className="text-indigo-600 hover:text-indigo-900"
                    href="#"
                  >
                    Buy now
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Avatar className="h-10 w-10 mr-4">
                <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Michael Johnson</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      CEO
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">
                      Announcement: Acme Wins Sustainability Award
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      We are proud to announce that Acme has been recognized for
                      its commitment to sustainability.
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p>
                    We are thrilled to announce that Acme has been awarded the
                    prestigious Sustainability Award for our commitment to
                    environmental responsibility. This recognition is a
                    testament to the hard work and dedication of our entire
                    team, who have prioritized sustainable practices in all
                    aspects of our operations. We are proud to be leading the
                    way in the industry and will continue to invest in
                    innovative solutions that reduce our carbon footprint and
                    protect the planet.
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    className="text-indigo-600 hover:text-indigo-900"
                    href="#"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Avatar className="h-10 w-10 mr-4">
                <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Emily Davis</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Content Writer
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">
                      New Blog Post: The Rise of Smart Home Technology
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Explore the latest trends in smart home technology and how
                      it's transforming the way we live.
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p>
                    In our latest blog post, we delve into the exciting world of
                    smart home technology and explore how it's transforming the
                    way we live. From voice-controlled assistants to automated
                    lighting and security systems, the smart home of the future
                    is here. Learn about the latest innovations, the benefits of
                    smart home technology, and how you can start incorporating
                    it into your own home.
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    className="text-indigo-600 hover:text-indigo-900"
                    href="#"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Avatar className="h-10 w-10 mr-4">
                <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">David Brown</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Product Manager
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">
                      New Product Launch: Acme Solar Panels
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Our latest product, the Acme Solar Panels, are now
                      available for purchase.
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p>
                    We are excited to announce the launch of our latest product,
                    the Acme Solar Panels. These high-efficiency solar panels
                    are designed to help you harness the power of the sun and
                    reduce your carbon footprint. With their sleek design and
                    easy installation, the Acme Solar Panels are the perfect
                    solution for homeowners and businesses looking to go green.
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    className="text-indigo-600 hover:text-indigo-900"
                    href="#"
                  >
                    Buy now
                  </Link>
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

export default FreeBoardPage;
