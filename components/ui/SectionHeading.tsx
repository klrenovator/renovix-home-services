type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
  className?: string;
  /**
   * Heading level for the title. Content sections default to `<h2>` (below the
   * page H1); pages whose heading IS the page title (legal pages, 404) pass
   * `1` so every indexable page has exactly one H1.
   */
  headingLevel?: 1 | 2 | 3;
};

const HEADING_CLASS: Record<1 | 2 | 3, string> = {
  1: "h1-page",
  2: "h2-section",
  3: "h3-card",
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
  className = "",
  headingLevel = 2,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  if (headingLevel === 1) {
    return (
      <div
        className={`max-w-2xl ${isCentered ? "mx-auto text-center" : ""} ${className}`}
      >
        {eyebrow ? (
          <p className={inverse ? "eyebrow-light" : "eyebrow"}>{eyebrow}</p>
        ) : null}
        <h1
          className={`h1-page mt-3 ${inverse ? "text-white" : "text-navy"}`}
        >
          {title}
        </h1>
        {description ? (
          <p
            className={`mt-4 text-base leading-7 ${inverse ? "text-white/75" : "lead"}`}
          >
            {description}
          </p>
        ) : null}
      </div>
    );
  }

  const Heading = headingLevel === 3 ? "h3" : "h2";

  return (
    <div
      className={`max-w-2xl ${isCentered ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow ? (
        <p className={inverse ? "eyebrow-light" : "eyebrow"}>{eyebrow}</p>
      ) : null}
      <Heading
        className={`${HEADING_CLASS[headingLevel]} mt-3 ${inverse ? "text-white" : "text-navy"}`}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={`mt-4 text-base leading-7 ${inverse ? "text-white/75" : "lead"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
