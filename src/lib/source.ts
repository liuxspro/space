import { docs } from "fumadocs-mdx:collections/server";
import { type InferPageType, loader, update } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";
import { customIcons } from "./custom_icons";
import { icons } from "lucide-react";
import { createElement } from "react";
import { i18n } from "@/lib/i18n";

// 筛选掉 draft 文章
const filtered_source = update(docs.toFumadocsSource())
  .files((files) =>
    files.filter((file) => {
      // keep meta files (e.g. `meta.json`)
      if (file.type === "meta") return true;
      // set default icon if not set
      // if (!file.data.icon) {
      //   if (file.path.endsWith(".mdx")) {
      //     file.data.icon = "MDX";
      //   } else {
      //     file.data.icon = "FileText";
      //   }
      // }
      // filter out draft documents
      return file.data.draft === false;
    })
  )
  .build();

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: "/docs",
  source: filtered_source,
  plugins: [lucideIconsPlugin()],
  icon(icon) {
    if (icon && icon in customIcons) {
      return createElement(customIcons[icon as keyof typeof customIcons]);
    }
    if (icon && icon in icons) {
      return createElement(icons[icon as keyof typeof icons]);
    }
  },
  i18n,
});

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, "image.png"];

  return {
    segments,
    url: `/og/docs/${segments.join("/")}`,
  };
}

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText("processed");

  return `# ${page.data.title}

${processed}`;
}
