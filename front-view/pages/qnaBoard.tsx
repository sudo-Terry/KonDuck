import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  PaginationPrevious,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  PaginationContent,
  Pagination,
} from "@/components/ui/pagination";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const QnABoardPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Q&A</h2>
              <Link className="text-indigo-600 hover:text-indigo-900" href="#">
                Ask a Question
              </Link>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">
                      How do I set up the Acme Supercharger?
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Asked by John Doe
                    </p>
                  </div>
                  <div>
                    <Button size="sm">View</Button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">
                      What are the best practices for using the Acme Smart
                      Thermostat?
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Asked by Jane Smith
                    </p>
                  </div>
                  <div>
                    <Button size="sm">View</Button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">
                      How do I troubleshoot the Acme Solar Panels?
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Asked by Sarah Lee
                    </p>
                  </div>
                  <div>
                    <Button size="sm">View</Button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">
                      Can I integrate the Acme Smart Thermostat with my existing
                      home automation system?
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Asked by Michael Johnson
                    </p>
                  </div>
                  <div>
                    <Button size="sm">View</Button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">
                      What are the energy efficiency benefits of the Acme Solar
                      Panels?
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Asked by Emily Davis
                    </p>
                  </div>
                  <div>
                    <Button size="sm">View</Button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">
                      How long do the Acme Solar Panels last?
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Asked by David Brown
                    </p>
                  </div>
                  <div>
                    <Button size="sm">View</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    {/* Will be deprecated
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    */}
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default QnABoardPage;
