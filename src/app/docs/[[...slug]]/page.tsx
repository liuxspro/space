import type { Metadata } from "next";
import { getPageImage, source } from "@/lib/source";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/layouts/docs/page";
import { notFound } from "next/navigation";
import { getMDXComponents } from "@/mdx-components";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { CalendarDays  } from "lucide-react";
import dayjs from 'dayjs';

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const lastModified = dayjs(page.data.lastModified).format('YYYY-MM-DD HH:mm:ss');

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <div className="flex flex-row items-center gap-2 text-fd-muted-foreground">
        <div><CalendarDays width={16}/></div>
        <p className="text-sm font-mono content-center">{lastModified}</p>
      </div>
      <DocsDescription className="mb-2 text-base">{page.data.description}</DocsDescription>
      <hr />
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
        <hr className="not-prose" />
        <p className="text-sm text-fd-muted-foreground font-mono mt-4">Last updated on {lastModified}</p>
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: PageProps<"/docs/[[...slug]]">): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
