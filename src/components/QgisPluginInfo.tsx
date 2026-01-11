import React from "react";
import { customIcons } from "@/lib/custom_icons";
import { ArrowBigDownDash } from "lucide-react";

interface QgisPluginInfoProps {
  plugin_id: string;
}

export async function QgisPluginInfo(
  { plugin_id }: QgisPluginInfoProps,
): Promise<React.JSX.Element> {
  const info = await fetch(
    `https://service.liuxs.pro/qgis-plugin?id=${plugin_id}`,
  );
  const data = await info.json();
  const url = data.plugin_page_url;
  return (
    <a
      className="flex flex-col lg:flex-row lg:items-center gap-1.5 text-sm rounded-xl border shadow-md p-3 hover:text-fd-accent-foreground hover:bg-fd-accent not-prose my-1"
      href={url}
      target="_blank"
    >
      <p className="flex items-center gap-2 truncate">
        <span className="w-4">
          {customIcons.QGISLogo()}
        </span>
        <span>{data.name}</span>
        <span className="text-xs">{`v${data.version}`}</span>
      </p>
      <p className="flex text-xs items-center gap-1 text-fd-muted-foreground">
        <span>
          <ArrowBigDownDash className="w-4 h-4" />
        </span>
        <span>{data.downloads}</span>
      </p>
    </a>
  );
}
