import "../app/globals.css";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

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
            <Card>
              <CardHeader>
                <CardTitle>Article Title 1</CardTitle>
                <CardDescription>
                  A brief description of the article content.
                </CardDescription>
              </CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="h-10 w-10 ml-4">
                  <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Author
                  </div>
                </div>
              </div>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nisl eget ultricies tincidunt, nisl nisl aliquam
                  nisl, eget aliquam nisl nisl eget nisl.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  className="text-indigo-600 hover:text-indigo-900"
                  href="#"
                >
                  Read more
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Article Title 2</CardTitle>
                <CardDescription>
                  A brief description of the article content.
                </CardDescription>
              </CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="h-10 w-10 ml-4">
                  <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Jane Smith</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Author
                  </div>
                </div>
              </div>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nisl eget ultricies tincidunt, nisl nisl aliquam
                  nisl, eget aliquam nisl nisl eget nisl.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  className="text-indigo-600 hover:text-indigo-900"
                  href="#"
                >
                  Read more
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Article Title 3</CardTitle>
                <CardDescription>
                  A brief description of the article content.
                </CardDescription>
              </CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="h-10 w-10 ml-4">
                  <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Sarah Lee</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Author
                  </div>
                </div>
              </div>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nisl eget ultricies tincidunt, nisl nisl aliquam
                  nisl, eget aliquam nisl nisl eget nisl.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  className="text-indigo-600 hover:text-indigo-900"
                  href="#"
                >
                  Read more
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Article Title 4</CardTitle>
                <CardDescription>
                  A brief description of the article content.
                </CardDescription>
              </CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="h-10 w-10 ml-4">
                  <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Michael Johnson</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Author
                  </div>
                </div>
              </div>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nisl eget ultricies tincidunt, nisl nisl aliquam
                  nisl, eget aliquam nisl nisl eget nisl.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  className="text-indigo-600 hover:text-indigo-900"
                  href="#"
                >
                  Read more
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Article Title 5</CardTitle>
                <CardDescription>
                  A brief description of the article content.
                </CardDescription>
              </CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="h-10 w-10 ml-4">
                  <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Emily Davis</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Author
                  </div>
                </div>
              </div>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nisl eget ultricies tincidunt, nisl nisl aliquam
                  nisl, eget aliquam nisl nisl eget nisl.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  className="text-indigo-600 hover:text-indigo-900"
                  href="#"
                >
                  Read more
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Article Title 6</CardTitle>
                <CardDescription>
                  A brief description of the article content.
                </CardDescription>
              </CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="h-10 w-10 ml-4">
                  <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">David Brown</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Author
                  </div>
                </div>
              </div>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nisl eget ultricies tincidunt, nisl nisl aliquam
                  nisl, eget aliquam nisl nisl eget nisl.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  className="text-indigo-600 hover:text-indigo-900"
                  href="#"
                >
                  Read more
                </Link>
              </CardFooter>
            </Card>
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

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
