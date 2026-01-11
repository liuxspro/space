import React from "react";
import { GithubInfo } from "fumadocs-ui/components/github-info";

interface CustomGithubInfoProps {
  owner: string;
  repo: string;
  className?: string;
}

/**
 * A simplified GitHub info component with custom styling
 *
 * @param props - Component props containing owner and repo
 * @returns A styled GitHub repository info component
 */
export async function CustomGithubInfo({
  owner,
  repo,
  className = "",
}: CustomGithubInfoProps): Promise<React.JSX.Element> {
  const combinedClassName =
    `rounded-xl border shadow-md p-3 not-prose ${className}`.trim();

  return (
    <GithubInfo
      owner={owner}
      repo={repo}
      className={combinedClassName}
    />
  );
}
