import Hero from "@/components/Hero/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Figma Design Platform - Home | Crypto Tracking</title>
        <meta
          name="description"
          content="Discover the best Figma Design tools and track cryptocurrency in one platform. Explore now!"
        />
        <meta
          name="keywords"
          content="Figma design, crypto tracking, design platform, Figma tools, cryptocurrency"
        />

        <meta
          property="og:title"
          content="Figma Design Platform - Home | Crypto Tracking"
        />
        <meta
          property="og:description"
          content="Discover the best Figma Design tools and track cryptocurrency in one platform. Explore now!"
        />
        <meta
          property="og:image"
          content="https://figma-design001.vercel.app/images/home-preview.jpg"
        />
        <meta property="og:url" content="https://figma-design001.vercel.app" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Figma Design Platform - Home | Crypto Tracking"
        />
        <meta
          name="twitter:description"
          content="Discover the best Figma Design tools and track cryptocurrency in one platform. Explore now!"
        />
        <meta
          name="twitter:image"
          content="https://figma-design001.vercel.app/images/home-preview.jpg"
        />

<link rel="canonical" href="https://figma-design001.vercel.app" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Figma Design Platform",
              "url": "https://figma-design001.vercel.app",
              "description": "Explore Figma Design tools and track cryptocurrency in one platform.",
              "publisher": {
                "@type": "Organization",
                "name": "Figma Design Platform",
              },
            }),
          }}
        />
      </Head>
      <div>
        <Hero />
      </div>
    </>
  );
}
