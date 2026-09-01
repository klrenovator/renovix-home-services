import { JsonLd } from "./JsonLd";
import { organizationNode, schemaGraph, websiteNode } from "./schema";

type SiteSchemaProps = {
  lang: string;
};

/**
 * Site-level structured data, rendered once in the root layout so every page
 * carries the same business entity (Organization/LocalBusiness) and WebSite
 * context. This is what lets search engines and LLMs resolve "Renovix Home
 * Services" to one entity no matter which page they land on.
 */
export function SiteSchema({ lang }: SiteSchemaProps) {
  return (
    <JsonLd
      data={schemaGraph([organizationNode(lang), websiteNode(lang)])}
    />
  );
}
