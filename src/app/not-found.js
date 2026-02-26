import Link from "next/link";
import Container from "@/components/container";

export const metadata = {
  title: "404 - Page Not Found | Shah Mohammad Rumman Prince",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#000000] px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-32">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h1 className="font-Bebas text-[80px] sm:text-[120px] md:text-[160px] lg:text-[180px] 2xl:text-[200px] text-yellow-400 leading-none drop-shadow-lg">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="font-Bebas text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] 2xl:text-[64px] text-white mb-3 sm:mb-4">
            Page Not Found
          </h2>
          <p className="font-Supreme text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] 2xl:text-[18px] text-gray-300 leading-relaxed">
            Sorry, the page you are looking for does not exist or has been
            moved. It might be that you entered the URL incorrectly, or the page
            has been removed.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12">
          <Link
            href="/"
            className="font-Bebas text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] 2xl:text-[20px] text-black bg-yellow-400 hover:bg-yellow-500 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded transition-all duration-300 transform hover:scale-105"
          >
            Go to Home
          </Link>
          <Link
            href="/about"
            className="font-Bebas text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] 2xl:text-[20px] text-yellow-400 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 rounded transition-all duration-300"
          >
            View CV
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 sm:mt-14 md:mt-16 lg:mt-20 pt-8 sm:pt-10 md:pt-12 border-t border-gray-700">
          <p className="font-Supreme text-[12px] sm:text-[13px] md:text-[14px] text-gray-400 mb-4 sm:mb-5 md:mb-6">
            Other pages you might find useful:
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Research", href: "/research" },
              { name: "Projects", href: "/projects" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-Supreme text-[12px] sm:text-[13px] md:text-[14px] text-yellow-400 hover:text-yellow-300 underline transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="mt-12 sm:mt-14 md:mt-16 absolute top-10 sm:top-20 right-10 opacity-10">
        <div className="text-[120px] sm:text-[160px] md:text-[200px] font-Bebas text-yellow-400">
          ?
        </div>
      </div>
    </div>
  );
}
