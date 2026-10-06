import { TrackedLink } from "@/components/analytics/TrackedLink";
import { localCitationDirectoryIds, siteConfig } from "@/data/site";
import { getDictionary } from "@/i18n";
import type { LanguageCode } from "@/data/languages";

const ANALYTICS_DIRECTORY_IDS = {
  yellowPagesMalaysia: "yellow_pages_malaysia",
  hotfrog: "hotfrog",
  businessList: "businesslist",
  facebookLocal: "facebook_local",
} as const;

/**
 * Optional contact-page links for the local listings in Lead-generation Task
 * 3.3. A link is rendered only after the owner marks its public profile as
 * published; pending/submission URLs are deliberately not exposed.
 */
export function LocalCitationLinks({ lang }: { lang: LanguageCode }) {
  const copy = getDictionary(lang).contact.directoryProfiles;
  const profiles = localCitationDirectoryIds.flatMap((id) => {
    const profile = siteConfig.localCitationProfiles[id];
    if (profile.status !== "published" || !profile.url.trim()) return [];

    return [
      {
        id,
        analyticsId: ANALYTICS_DIRECTORY_IDS[id],
        href: profile.url.trim(),
        label: copy.directories[id],
      },
    ];
  });

  if (profiles.length === 0) return null;

  return (
    <section className="section bg-white" aria-labelledby="contact-local-directories-title">
      <div className="container-app">
        <div className="max-w-2xl">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="contact-local-directories-title" className="h2-section mt-3 text-navy">
            {copy.title}
          </h2>
          <p className="lead mt-4">{copy.description}</p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((profile) => (
            <li key={profile.id}>
              <TrackedLink
                href={profile.href}
                event="directory_profile_click"
                context={{
                  surface: "contact_local_citations",
                  directory: profile.analyticsId,
                  lang,
                }}
                external
                ariaLabel={copy.openProfile.replace("{directory}", profile.label)}
                className="block h-full rounded-xl border border-slate-200 bg-white p-5 text-sm font-semibold text-brand transition-colors hover:border-brand/30 hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {profile.label}
              </TrackedLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
