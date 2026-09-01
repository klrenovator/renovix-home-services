/**
 * Emits a JSON-LD `<script>` block.
 *
 * `<` is escaped to `\u003c` so a stray `</script>` inside a string can never
 * terminate the block early (per Next.js guidance).
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
