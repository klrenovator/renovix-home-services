import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function NotFound() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-app">
        <SectionHeading
          eyebrow="404"
          title="Page not found"
          description="The page you are looking for is not available on this site yet."
          align="center"
        />
        <div className="mt-8 text-center">
          <Link
            href="/en"
            className="btn btn-primary"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
