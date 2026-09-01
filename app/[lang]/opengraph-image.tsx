import { ImageResponse } from "next/og";
import { languages } from "@/data/languages";

export const alt = "Renovix Home Services";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

/**
 * Without this the route is the site's only on-demand render: every social
 * crawler request would re-rasterize the card. Enumerating the languages
 * prerenders the three PNGs at build time, so the whole site is static.
 */
export function generateStaticParams() {
  return languages.map((language) => ({ lang: language.code }));
}

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          backgroundColor: "#0B1F33",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "26px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            color: "#F4B942",
          }}
        >
          RENOVIX HOME SERVICES
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            maxWidth: "900px",
            fontSize: "56px",
            lineHeight: 1.15,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
          }}
        >
          Professional Home Renovation &amp; Improvement Services in Kuala Lumpur &amp;
          Selangor
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "28px",
            fontSize: "28px",
            color: "#B8C7D6",
          }}
        >
          Tiling · Welding · Electrical · Painting · Ceiling &amp; Partition · Plumbing ·
          Waterproofing · Flooring · Renovation · Handyman
        </div>
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            marginTop: "34px",
            padding: "12px 24px",
            borderRadius: "12px",
            backgroundColor: "#F4B942",
            fontSize: "24px",
            fontWeight: 700,
            color: "#0B1F33",
          }}
        >
          Serving KL &amp; Selangor · Klang Valley
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
