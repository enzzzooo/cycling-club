export default function Photos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-black">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/50 bg-white/80 backdrop-blur-xl dark:border-zinc-800/50 dark:bg-zinc-900/80">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            <a
              href="/"
              className="group flex items-center gap-2 sm:gap-3 text-lg sm:text-2xl font-bold text-zinc-900 dark:text-white transition-all hover:scale-105"
            >
              <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center">
                <img
                  src="/slu-logo.svg"
                  alt="SLU Logo"
                  className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0 sm:gap-2">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                  SLU Madrid
                </span>
                <span className="text-sm sm:text-2xl leading-tight">Cycling Club</span>
              </div>
            </a>
            <div className="flex items-center gap-4 sm:gap-6">
              <nav className="flex gap-4 sm:gap-6">
                <a
                  href="/"
                  className="text-xs sm:text-sm font-medium text-zinc-600 transition-all hover:text-zinc-900 hover:scale-105 dark:text-zinc-400 dark:hover:text-white"
                >
                  Home
                </a>
                <a
                  href="/photos"
                  className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-500 transition-all hover:scale-105"
                >
                  Photos
                </a>
              </nav>
              <a
                href="/#join"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Photos Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl" />
            <h1 className="relative text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Photos Coming Soon
              </span>
            </h1>
          </div>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            📸 Check back later for photos from our rides and events
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="text-center text-sm text-zinc-600 dark:text-zinc-400">
            <p>&copy; 2026 SLU Madrid Cycling Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
