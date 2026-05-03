import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-myblack text-white flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white border-8 border-accentColor p-8 md:p-12 text-myblack shadow-[8px_8px_0px_0px_rgba(162,242,62,1)]">
        <p className="text-sm md:text-base font-inter font-semibold mb-2">ERROR 404</p>
        <h1 className="text-4xl md:text-6xl font-guzan font-bold mb-4">Page Not Found</h1>
        <p className="font-inter text-base md:text-lg mb-8">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-accentColor border-4 border-myblack px-5 py-3 font-inter font-bold hover:shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] transition-all"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  )
}
