import Layout from "@/src/layout";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout>
      <main className="min-h-screen bg-[#f8f8f8] flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">

        {/* 404 */}
        <h1 className="text-7xl font-semibold text-primary-500">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-6 text-3xl font-semibold text-black">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-black/60 leading-7">
          The page you are looking for might have been moved, removed,
          or the link may be incorrect. Please use the navigation below
          to continue browsing the Hi-Light Media website.
        </p>

        {/* Navigation Links */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition"
          >
            Go to Homepage
          </Link>
        </div>

      </div>
    </main>
    </Layout>
  );
}