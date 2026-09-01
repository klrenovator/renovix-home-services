type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
  className = "",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={`max-w-2xl ${isCentered ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow ? (
        <p className={inverse ? "eyebrow-light" : "eyebrow"}>{eyebrow}</p>
      ) : null}
      <h2 className={`h2-section mt-3 ${inverse ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 ${inverse ? "text-white/75" : "lead"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
