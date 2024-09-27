import { Helmet } from "react-helmet-async";

function SEO({
  title,
  companyName,
  description,
  type,
  imageCoverUrl,
  pageUrl,
  canLink,
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Facebook meta */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageCoverUrl} />
      <meta property="og:url" content={pageUrl} />
      {/* Twitter meta */}
      <meta name="twitter:creator" content={companyName} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageCoverUrl} />
      <link rel="canonical" href={canLink} />
    </Helmet>
  );
}

export default SEO;
