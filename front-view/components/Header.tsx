import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "@/components/icons";
import LogoSVG from "@/assets/Dev-AC.svg";

export function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-900 px-4 py-3 text-white sm:px-6 lg:px-8">
      <div className="flex items-center">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <LogoSVG className="h-20 w-20" />
            <span className="sr-only">DevAC</span>
          </div>
        </Link>
        <div className="ml-6 hidden sm:block">
          <div className="flex space-x-4">
            <Link href="/" passHref>
              <span className="rounded-md px-3 py-2 text-lg font-medium hover:bg-gray-800 cursor-pointer">
                메인
              </span>
            </Link>
            <Link href="#" passHref>
              <span className="rounded-md px-3 py-2 text-lg font-medium hover:bg-gray-800 cursor-pointer">
                Blog
              </span>
            </Link>
            <Link href="/freeBoard" passHref>
              <span className="rounded-md px-3 py-2 text-lg font-medium hover:bg-gray-800 cursor-pointer">
                자유게시판
              </span>
            </Link>
            <Link href="#" passHref>
              <span className="rounded-md px-3 py-2 text-lg font-medium hover:bg-gray-800 cursor-pointer">
                About
              </span>
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
          <Button variant="default">Login</Button>
        </div>
      </div>
    </header>
  );
}
