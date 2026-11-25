import React, { useEffect, useState } from "react";
import { LegalDoc } from "./legalContent";

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/** Where am I? Three pages, one row. */
export const PageTabs: React.FC<{ current: "privacy-policy" | "terms-of-service" | "contact" | "partnerships" }> = ({ current }) => {
  const tabs = [
    ["privacy-policy", "Privacy Policy"],
    ["terms-of-service", "Terms of Service"],
    ["contact", "Contact"],
    ["partnerships", "Partnerships"],
  ] as const;
  return (
    <nav aria-label="Company pages" className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[15px]">
      <a href="/" className="text-ink/45 hover:text-ink transition-colors">
        ← Home
      </a>
      {tabs.map(([id, label]) => (
        <a
          key={id}
          href={`/${id}`}
          aria-current={id === current ? "page" : undefined}
          className={`py-1 border-b-2 transition-colors ${
            id === current ? "border-ink text-ink font-semibold" : "border-transparent text-ink/55 hover:text-ink"
          }`}
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

export const LegalPage: React.FC<{ doc: LegalDoc }> = ({ doc }) => {
  const ids = doc.sections.map((s) => slug(s.nav));
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doc.slug]);

  const jump = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  const index = (
    <ol className="space-y-0.5">
      {doc.sections.map((s, i) => {
        const id = ids[i];
        const on = id === active;
        return (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={jump(id)}
              className={`flex gap-3 py-1.5 text-[14.5px] leading-snug transition-colors ${
                on ? "text-ink font-semibold" : "text-ink/50 hover:text-ink"
              }`}
            >
              <span className={`font-mono text-[12px] pt-[2px] ${on ? "text-[#14a50f]" : "text-ink/30"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {s.nav}
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <section className="bg-paper text-ink pt-28 sm:pt-36 pb-24 sm:pb-36">
      <div className="max-w-[80rem] mx-auto px-5 sm:px-10">
        <PageTabs current={doc.slug} />

        <header className="mt-14 sm:mt-20 max-w-[46rem]">
          <h1 className="text-[44px] sm:text-[68px] font-extrabold tracking-[-0.035em] leading-[1.02]">{doc.title}</h1>
          <p className="mt-4 font-mono text-[13px] text-ink/50">Updated {doc.updated}</p>
          <p className="mt-8 text-[19px] leading-[1.55] text-ink/75">{doc.intro}</p>
          <ul className="mt-8 border-l-2 border-ink pl-5 space-y-1.5 text-[17px] font-semibold">
            {doc.summary.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </header>

        <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* index */}
          <aside className="lg:col-span-3">
            <details className="lg:hidden border-y border-ink/15 py-4 group">
              <summary className="cursor-pointer list-none flex items-center justify-between text-[15px] font-semibold">
                On this page
                <span className="text-ink/40 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="mt-4">{index}</div>
            </details>
            <div className="hidden lg:block sticky top-28">
              <p className="eyebrow text-ink/40 mb-4">On this page</p>
              {index}
            </div>
          </aside>

          {/* body */}
          <div className="lg:col-span-9 max-w-[46rem]">
            {doc.sections.map((s, i) => (
              <section
                key={s.nav}
                id={ids[i]}
                className="scroll-mt-28 py-10 sm:py-12 border-t border-ink/15 first:border-t-0 first:pt-0"
              >
                <p className="font-mono text-[12px] text-ink/40">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 text-[24px] sm:text-[28px] font-bold tracking-[-0.02em] leading-[1.2] text-balance">
                  {s.title}
                </h2>
                <div className="mt-5 space-y-4 text-[17px] leading-[1.7] text-ink/70">
                  {s.body.map((b, k) =>
                    typeof b === "string" ? (
                      <p key={k}>{b}</p>
                    ) : (
                      <ul key={k} className="border-t border-ink/10">
                        {b.map((it) => {
                          const m = it.match(/^([^:]{2,40}):\s(.*)$/);
                          return (
                            <li key={it} className="py-3 border-b border-ink/10 leading-[1.55]">
                              {m ? (
                                <>
                                  <span className="font-semibold text-ink">{m[1]}:</span> {m[2]}
                                </>
                              ) : (
                                it
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )
                  )}
                </div>
              </section>
            ))}

            <div className="mt-6 pt-10 border-t-2 border-ink">
              <h2 className="text-[24px] sm:text-[28px] font-bold tracking-[-0.02em]">{doc.contactHeading}</h2>
              <p className="mt-4 text-[17px] leading-[1.7] text-ink/70">
                Produce AI POS Inc.
                <br />
                3508 White Plains Rd, Bronx, NY
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="mailto:support@producepos.app" className="btn btn-ink h-12 px-6 text-[15px]">
                  support@producepos.app
                </a>
                <a href="tel:+13472130687" className="btn h-12 px-6 text-[15px] border border-ink/25 hover:bg-ink/5 tabular-nums">
                  +1 (347) 213-0687
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
