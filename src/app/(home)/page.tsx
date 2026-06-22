import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border flex-1 flex items-center justify-center">
        <div className="mx-auto max-w-5xl px-6 pt-24 pb-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Liuxs<span className="text-[#bd00ff]">.</span>pro
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            个人空间
            <br />
            记录所学、所践、所思
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground text-background px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:opacity-90"
            >
              开始阅读
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards - 暂时隐藏 */}

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Liuxs.pro. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
