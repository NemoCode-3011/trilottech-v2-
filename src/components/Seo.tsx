import { Head } from "vite-react-ssg";
import { site } from "../data/site";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>;
};

export function Seo({
  title,
  description,
  path = "/",
  image = "/og/home.png",
  noindex = false,
  jsonLd,
}: SeoProps) {
  const url = `${site.url}${path === "/" ? "" : path}`;
  const imageUrl = `${site.url}${image}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {noindex ? <meta name="robots" content="noindex" /> : null}

      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Head>
  );
}