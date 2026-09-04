import Link from "next/link";

/**
 * Root fallback for URLs that do not enter the localized `[lang]` segment.
 * Localized `app/[lang]/not-found.tsx` handles missing pages inside a valid
 * language; this keeps unknown paths useful instead of showing Next's default
 * unbranded 404 document.
 */
export default function RootNotFound() {
  return (
    <main
      aria-labelledby="not-found-title"
      style={{
        minHeight: "100vh",
        padding: "4rem 1.5rem",
        background: "#f7f9fc",
        color: "#17212b",
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <p style={{ color: "#1769aa", fontWeight: 700, letterSpacing: "0.12em" }}>
          404
        </p>
        <h1 id="not-found-title" style={{ color: "#0b1f33", fontSize: "2rem" }}>
          Page not found
        </h1>
        <p style={{ lineHeight: 1.7 }}>
          The page you are looking for is not available on this site.
        </p>
        <nav aria-label="Language homepages" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/en/" style={{ color: "#1769aa", fontWeight: 700 }}>
            English home
          </Link>
          <Link href="/ms/" style={{ color: "#1769aa", fontWeight: 700 }}>
            Laman utama BM
          </Link>
          <Link href="/zh/" style={{ color: "#1769aa", fontWeight: 700 }}>
            中文首页
          </Link>
        </nav>
      </div>
    </main>
  );
}
