import Link from "next/link";

export function Footer() {
  return (
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
  );
}
