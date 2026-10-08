import Image from "next/image";
import Link from "next/link";
import { contactData } from "@/data/contact";
import { experienceData } from "@/data/experience";

export const HeroSection = () => {
  const currentRoles = experienceData.filter(
    (item) => item.category === "Work" && item.date.endsWith("Present")
  );

  return (
    <section id="hero" className="wrap pt-12 pb-10 md:pt-20 md:pb-14">
      <h1 className="display-xl">
        Bryan Carlie
        <br />
        Lukito Setiawan
      </h1>

      <div className="mt-10 grid gap-y-12 md:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,25rem)] lg:gap-x-16">
        <div>
          <p className="max-w-[30ch] text-2xl font-medium leading-snug text-depth md:text-[1.75rem]">
            Software developer building native iOS, Android, and web applications.
          </p>
          <p className="mt-5 max-w-[56ch] text-lg">
            I study Informatics at Universitas Ciputra Surabaya and work across the stack, from
            database design to the interface: Swift and Kotlin on mobile, Laravel and Next.js on
            the web. Right now I&apos;m most interested in iOS and Android apps and in building
            websites, and I&apos;m happy to hear about interesting opportunities.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/work" className="btn btn-primary">
              See my work
            </Link>
            <a href={`mailto:${contactData.email}`} className="btn btn-quiet">
              Email me
            </a>
            <a href="/Bryan-Carlie-Lukito-Setiawan-CV.pdf" download className="btn btn-quiet">
              Download CV
            </a>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <Image
            src="/images/profile.png"
            alt="Portrait of Bryan Carlie Lukito Setiawan"
            width={144}
            height={144}
            className="size-28 shrink-0 rounded-[1.25rem] object-cover sm:size-36"
            priority
          />
          <dl className="space-y-4 text-[0.9375rem] leading-snug">
            <div>
              <dt className="text-muted">Currently</dt>
              {currentRoles.map((item) => (
                <dd key={item.id} className="mt-1 text-depth">
                  {item.role}, {item.title}
                </dd>
              ))}
            </div>
            <div>
              <dt className="text-muted">Based in</dt>
              <dd className="mt-1 text-depth">Surabaya, Indonesia</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};
