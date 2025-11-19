import Image from "next/image";
import Link from "next/link";

type SiteHeaderProps = {
  active?: "home" | "photos";
};

export function SiteHeader({ active = "home" }: SiteHeaderProps) {
  const contactHref = active === "home" ? "#contact" : "/#contact";
  const navItems: Array<{
    href: string;
    label: string;
    id: "home" | "photos";
  }> = [
    { href: "/", label: "Home", id: "home" },
    { href: "/photos", label: "Photos", id: "photos" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur-2xl dark:border-zinc-800/60 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 text-left transition-transform hover:scale-[1.02]"
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/70 bg-white/70 shadow-sm backdrop-blur">
            <Image
              src="/slu-logo.png"
              alt="SLU Madrid mark"
              width={36}
              height={36}
              className="h-8 w-8 object-cover"
            />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              SLU Madrid
            </p>
            <p className="text-base font-semibold text-zinc-900 dark:text-white">
              Cycling Club
            </p>
          </div>
        </Link>
        <nav className="flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={contactHref}
            className="rounded-full border border-blue-600 px-4 py-1.5 text-sm font-semibold text-blue-600 transition-all hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-400/20"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
