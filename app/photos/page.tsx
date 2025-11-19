export default function Photos() {
  // Placeholder for past photos - can be replaced with actual images
  const photos = [
    { id: 1, title: "Saturday Morning Ride", date: "October 2024" },
    { id: 2, title: "Scenic Route Adventure", date: "September 2024" },
    { id: 3, title: "Group Photo at Summit", date: "August 2024" },
    { id: 4, title: "Weekly Ride Start", date: "July 2024" },
    { id: 5, title: "Sunset Ride", date: "June 2024" },
    { id: 6, title: "Spring Training", date: "May 2024" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-black">
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="text-2xl font-bold text-zinc-900 dark:text-white"
            >
              University Cycling Club
            </a>
            <nav className="flex gap-6">
              <a
                href="/"
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                Home
              </a>
              <a
                href="/photos"
                className="text-sm font-medium text-blue-600 dark:text-blue-500"
              >
                Photos
              </a>
              <a
                href="/contact"
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Photos Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            Past Photos
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Memories from our weekly rides and club activities
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              {/* Placeholder for image - replace with actual images */}
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-emerald-500/20 dark:from-blue-600/30 dark:to-emerald-600/30">
                <div className="flex h-full items-center justify-center">
                  <svg
                    className="h-20 w-20 text-zinc-400 dark:text-zinc-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {photo.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {photo.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-zinc-600 dark:text-zinc-400">
            Want to share your photos?{" "}
            <a
              href="/contact"
              className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
            >
              Contact us
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="text-center text-sm text-zinc-600 dark:text-zinc-400">
            <p>&copy; 2024 University Cycling Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
