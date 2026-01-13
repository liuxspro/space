import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import "./global.css";
import "katex/dist/katex.css";
import { Inter } from "next/font/google";
import type { Translations } from "fumadocs-ui/i18n";

const inter = Inter({
  subsets: ["latin"],
});

const cnTranslations: Partial<Translations> = {
  search: "搜索",
  toc: "目录",
  searchNoResult: "无搜索结果",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://space.liuxs.pro"),
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          i18n={{
            locale: "cn",
            translations: { cn: cnTranslations }["cn"],
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
