export default function Home() {
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
              <img
                src="/slu-logo.svg"
                alt="SLU Logo"
                className="h-8 w-8 sm:h-10 sm:w-10"
              />
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0 sm:gap-2">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                  SLU Madrid
                </span>
                <span className="text-sm sm:text-2xl leading-tight">Cycling Club</span>
              </div>
            </a>
            <div className="flex items-center gap-3 sm:gap-6">
              <nav className="flex gap-4 sm:gap-6">
                <a
                  href="/"
                  className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-500 transition-all hover:scale-105"
                >
                  Home
                </a>
                <a
                  href="/photos"
                  className="text-xs sm:text-sm font-medium text-zinc-600 transition-all hover:text-zinc-900 hover:scale-105 dark:text-zinc-400 dark:hover:text-white"
                >
                  Photos
                </a>
              </nav>
              <a
                href="#join"
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://coliving.joivy.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fynnxiqcetcwf%2F6rX5EwF1QcoOY974ik449Q%2F95253ad64cacfc5bb9863331a737eca2%2FMicrosoftTeams-image-dall-alto.png&w=3840&q=75"
            alt="Madrid Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-emerald-500/20 dark:from-blue-600/30 dark:via-purple-600/20 dark:to-emerald-600/30 animate-gradient z-10" />

        {/* Animated circles */}
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl animate-pulse z-10" />
        <div
          className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl animate-pulse z-10"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 z-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-300" />
              </span>
              Now Recruiting Members
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl animate-fade-in drop-shadow-2xl">
              SLU Madrid
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-text">
                {" "}
                Cycling{" "}
              </span>
              Club
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90 animate-fade-in-delay drop-shadow-lg">
              Join our vibrant community of cycling enthusiasts. Whether
              you&apos;re a beginner or a seasoned rider, discover new routes,
              build fitness, and make new friends.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#join"
                className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-2xl hover:scale-105 sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative flex items-center">
                  Join Us
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-zinc-200 bg-white/50 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex justify-center overflow-hidden">
            <div className="group relative text-center px-4 w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 blur-2xl transition-all group-hover:blur-3xl" />
              <div className="relative">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent transition-transform group-hover:scale-110 break-words">
                  Every Saturday
                </div>
                <div className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Weekly Ride 🚴‍♂️
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Who We Are
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            More Than Just a Cycling Club
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            We&apos;re a diverse community of students united by our passion for
            cycling. From casual coffee rides to long distance treks, there&apos;s
            something for everyone.
          </p>
        </div>

        {/* Campus Image Section */}
        <div className="mb-16 overflow-hidden rounded-3xl shadow-2xl">
          <div className="relative h-[400px] lg:h-[500px]">
            <img
              src="https://www.commonapp.org/static/1ab34ecbf1578d644b4b601f77c80bf4/saint-louis-university-madrid_795.jpg"
              alt="Saint Louis University Madrid Campus"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl font-bold drop-shadow-lg">
                Ride Through Madrid
              </h3>
              <p className="mt-2 text-lg text-white/90 drop-shadow-md">
                Explore the beauty of our campus and the city on two wheels
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-blue-50/30 p-8 shadow-lg transition-all hover:shadow-2xl hover:scale-105 dark:border-zinc-800 dark:from-zinc-900 dark:to-blue-950/30">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                Weekly Rides
              </h3>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Join us every Saturday for group rides exploring scenic routes
                and building fitness together.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-purple-50/30 p-8 shadow-lg transition-all hover:shadow-2xl hover:scale-105 dark:border-zinc-800 dark:from-zinc-900 dark:to-purple-950/30">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                Community
              </h3>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Connect with fellow cycling enthusiasts and build lasting
                friendships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMjBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why Join Us?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Membership comes with exclusive benefits and opportunities
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Community",
                desc: "Meet like-minded students and build friendships",
                icon: "👥",
              },
              {
                title: "Group Rides",
                desc: "Enjoy safer and more fun riding experiences together",
                icon: "🚴",
              },
              {
                title: "Route Discovery",
                desc: "Explore new cycling routes with experienced members",
                icon: "🗺️",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="group relative rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/0 to-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-3 text-3xl">{benefit.icon}</div>
                  <h3 className="font-semibold text-white text-lg">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-blue-100">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 px-6 py-20 shadow-2xl sm:px-16">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-emerald-600/20" />
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start?
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Join us today and become part of a thriving cycling community. New
              members are always welcome, regardless of experience level.
            </p>
            <div className="mt-10">
              <a
                href="mailto:cycling@slu.edu"
                className="group inline-block text-4xl font-bold transition-all hover:scale-110 sm:text-5xl"
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-300 hover:to-emerald-300">
                  cycling@slu.edu
                </span>
              </a>
              <p className="mt-6 text-lg text-zinc-300">
                📍 Or check the posters on campus for more information
              </p>
            </div>
          </div>
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
