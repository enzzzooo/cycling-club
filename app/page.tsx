export default function Home() {
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
              SLU Madrid Cycling Club
            </a>
            <nav className="flex gap-6">
              <a
                href="/"
                className="text-sm font-medium text-blue-600 dark:text-blue-500"
              >
                Home
              </a>
              <a
                href="/photos"
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                Photos
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/10 dark:from-blue-600/20 dark:to-emerald-600/20" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              Now Recruiting Members
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-7xl">
              SLU Madrid
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                {" "}
                Cycling{" "}
              </span>
              Club
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Join our vibrant community of cycling enthusiasts. Whether
              you&apos;re a beginner or a seasoned rider, discover new routes,
              build fitness, and make lifelong friends.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#join"
                className="group w-full rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl hover:scale-105 sm:w-auto"
              >
                Join Us
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-zinc-200 bg-white/50 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-500">
                Every Saturday
              </div>
              <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Weekly Ride
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-500">
            Who We Are
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            More Than Just a Cycling Club
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            We&apos;re a diverse community of students united by our passion for
            cycling. From casual coffee rides to competitive racing, we offer
            something for everyone.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-950">
              <svg
                className="h-6 w-6 text-blue-600 dark:text-blue-500"
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
              Join us every Saturday for group rides exploring scenic routes and
              building fitness together.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-950">
              <svg
                className="h-6 w-6 text-purple-600 dark:text-purple-500"
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
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-blue-600 to-emerald-600 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                title: "Bike Storage",
                desc: "Secure on-campus storage for your bicycle",
              },
              {
                title: "Community",
                desc: "Meet like-minded students and build friendships",
              },
              {
                title: "Group Rides",
                desc: "Enjoy safer and more fun riding experiences together",
              },
              {
                title: "Route Discovery",
                desc: "Explore new cycling routes with experienced members",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <h3 className="font-semibold text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm text-blue-100">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-zinc-900 px-6 py-20 shadow-2xl sm:px-16">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-600/20" />
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
                className="text-4xl font-bold text-white hover:text-blue-300 transition-colors sm:text-5xl"
              >
                cycling@slu.edu
              </a>
              <p className="mt-6 text-lg text-zinc-300">
                Or check the posters on campus for more information
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="text-center text-sm text-zinc-600 dark:text-zinc-400">
            <p>&copy; 2024 SLU Madrid Cycling Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
