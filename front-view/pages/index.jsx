import "../app/globals.css";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/ArticleCard";
import { SearchIcon, MountainIcon } from "@/components/icons";

export default function Component() {
  return (
    <>
      <header className="flex items-center justify-between bg-gray-900 px-4 py-3 text-white sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="ml-6 hidden sm:block">
            <div className="flex space-x-4">
              <Link
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
                href="#"
              >
                News
              </Link>
              <Link
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
                href="#"
              >
                Blog
              </Link>
              <Link
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
                href="#"
              >
                Products
              </Link>
              <Link
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
                href="#"
              >
                About
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="relative mx-auto w-full max-w-lg sm:mx-0">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              className="block w-full rounded-md border-0 bg-gray-800 py-2 pl-10 pr-3 text-white focus:bg-gray-700 focus:ring-0"
              placeholder="Search..."
              type="text"
            />
          </div>
          <div className="ml-4">
            <Button variant="primary">Login</Button>
          </div>
        </div>
      </header>
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
      <footer className="bg-gray-900 py-6 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h4 className="text-sm font-bold">Company</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link className="text-gray-400 hover:text-white" href="#">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white" href="#">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white" href="#">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold">Products</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link className="text-gray-400 hover:text-white" href="#">
                    Features
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white" href="#">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white" href="#">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold">Resources</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link className="text-gray-400 hover:text-white" href="#">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white" href="#">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white" href="#">
                    Tutorials
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold">Legal</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link className="text-gray-400 hover:text-white" href="#">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white" href="#">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white" href="#">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            © 2023 Acme Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
