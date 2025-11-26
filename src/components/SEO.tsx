import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonicalUrl?: string;
}

/**
 * SEO component for managing meta tags and document head
 * Implements best practices for search engine optimization
 */
export const SEO: React.FC<SEOProps> = ({
  title = "Pomoboy - Game Boy Pomodoro Timer",
  description = "A retro Game Boy-styled Pomodoro timer built with React. Boost your productivity with 25-minute focus sessions, breaks, and authentic Game Boy aesthetics.",
  keywords = "pomodoro timer, productivity, game boy, focus timer, time management, pomodoro technique, retro timer, work timer, study timer",
  author = "Frontera",
  ogImage = "/og-image.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  canonicalUrl = "https://frontera.my.id",
}) => {
  const siteUrl = "https://frontera.my.id";
  const fullTitle = title.includes("Pomoboy") ? title : `${title} | Pomoboy`;

  return (
    <Helmet prioritizeSeoTags>
      {/* Primary Meta Tags */}
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl || siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl || siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Pomoboy" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={canonicalUrl || siteUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      <meta name="twitter:creator" content="@frontera" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#9bbc0f" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Pomoboy" />
      <meta name="application-name" content="Pomoboy" />
      <meta name="msapplication-TileColor" content="#9bbc0f" />
      <meta name="format-detection" content="telephone=no" />

      {/* Structured Data - JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Pomoboy",
          description: description,
          url: siteUrl,
          applicationCategory: "ProductivityApplication",
          operatingSystem: "Web Browser",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          author: {
            "@type": "Organization",
            name: author,
            url: siteUrl,
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            ratingCount: "1",
          },
        })}
      </script>
    </Helmet>
  );
};

