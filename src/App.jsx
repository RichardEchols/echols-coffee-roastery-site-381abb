import React from "react";

// --- Stock media helpers (real, on-topic photos & video) -------------------
const PHOTO = (i, q = "coffee") =>
  `https://echols.ai/api/stock?type=photo&q=${q}&i=${i}`;
const VIDEO = (q = "coffee") => `https://echols.ai/api/stock?type=video&q=${q}`;

// --- Small presentational components -----------------------------------------
const Eyebrow = ({ children, className = "" }) => (
  <div
    className={`uppercase tracking-[0.32em] text-[0.7rem] font-semibold text-[#c9w]/80 ${className}`}
  >
    {children}
  </div>
);

const Cta = ({ children, variant = "solid" }) => (
  <button
    className={
      "inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-all duration-200 " +
      (variant === "solid"
        ? "bg-[#b91k] text-[#f8f3] hover:bg-[#a8e5] hover:translate-y-px shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)]"
        : "border border-[#c4w]/40 text-[#c4w] hover:bg-[#c4w]/10 hover:border-[#c4w]")
    }
  >
    {children}
  </button>
);

// --- Main App ----------------------------------------------------------------
export default function App() {
  return (
    <div
      id="coffee-root"
      className="min-h-screen w-full bg-[#070705] text-[#f8f3] font-[Inter] selection:bg-[#b91k]/40"
    >
      {/* STICKY NAV --------------------------------------------------------- */}
      <div className="sticky top-0 z-30 backdrop-blur-md bg-[#070705]/70 border-b border-[#f8f3]/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-[Fraunces] text-[1.4rem] tracking-tight">
            <span className="text-[#c4w]">Roastery</span
            <span className="text-[#f8f3]/60"> · Est. 2019</span>
          </div>
          <nav className="flex gap-6 text-[0.9rem] uppercase tracking-[0.2em] text-[#f8f3]/70">
            <span>Story</span>
            <span Beans</span>
            <span Visit</span>
          </nav>
        </div>
      </div>

      {/* HERO VIDEO --------------------------------------------------------- */}
      <section className="relative overflow-hidden h-[88vh] min-h-[640px]">
        <video
          autoplay
          muted
          loop
          playsinline
          poster={PHOTO(0)}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src={VIDEO("coffee")} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#070705]/42 to-[#070705]/72"
          style={{ backdrop: "linear-gradient(rgba(0,0,0,.42), rgba(0,0,0,.72))" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <div className="uppercase tracking-[0.4em] text-[0.7rem] text-[#c4w]/80">
            Single-origin · Hand-roasted · Delivered fresh
          </div>
          <h1
            className="font-[Fraunces] text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] max-w-4xl mt-4"
          >
            Coffee roasted at the peak of its&nbsp
            <span className="text-[#c4w]">flavor</span>.
          </h1>
          <p className="max-w-2xl mt-6 text-[#f8f3]/75 text-[1.1rem] leading-relaxed">
            We roast in small batches, by hand, with the kind of attention most
            shops reserve for fine wine. Beans are rested, cupped, and logged —
            every bag ships within 72 hours of the roast.
          </p>
          <div className="mt-8 flex gap-3">
            <Cta>Book a tasting</Cta>
            <Cta variant="outline">Our story</Cta>
          </div>
        </div>
      </section>

      {/* OUR STORY ----------------------------------------------------------*/}
      <section className="bg-[#080806] py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#040402]">
            <img
              src={PHOTO(1)}
              alt="Barista pouring cup at the roastery"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-2xl">
            <Eyebrow>Our story</Eyebrow>
            <h2 className="font-[Fraunces] text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] mt-4">
              From bean to bag in&nbsp <span className="text-[#c4w]">72 hours</span>.
            </h2>
            <p className="mt-6 text-[#f8f3]/80 leading-relaxed">
              The roastery started in a converted garage with a single Colombian
              drum and a heat gun. Six years later we run four origins, a cupping
              lab, and a roast log that reads like a tasting menu. We don't
              believe in "good enough" — we believe in&nbsp
              <span className="text-[#c4w]">peak flavor</span>, which only happens
              when the bean is respected.
            </p>
            <p className="mt-4 text-[#f8f3]/80 leading-relaxed">
              Every roast is hand-timed. Every bag is labeled with the origin, the
              roast date, and the nose that cupped it. You taste the difference.
            </p>
            <div className="mt-8 flex gap-3">
              <Cta>Read the roast log</Cta>
              <Cta variant="outline">Meet the team</Cta>
            </div>
          </div>
        </div>
      </section>

      {/* THE BEANS GRID -----------------------------------------------------*/}
      <section className="bg-[#070705] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Eyebrow>The beans</Eyebrow>
            <h2 className="font-[Fraunces] text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] mt-4">
              Four origins. One&nbsp <span className="text-[#c4w]">house blend</span>.
            </h2>
            <p className="mt-4 text-[#f8f3]/75">
              We carry four single-origins and one seasonal house blend. Each
              roast is profiled, logged, and cupped before it ships.
            </p>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { i: 2, name: "Ethiopian · Arabica", note: "Bright, floral, high-chirp" },
              { i: 3, name: "Colombian · Supreme", note: "Deep body, low-acidity" },
              { i: 4, name: "Sumatran · Robusta", note: "Earthy, full-bodied" },
              { i: 5, name: "House Blend · v7", note: "Balanced, seasonal roast" },
            ].map((b) => (
              <figure
                key={b.i}
                className="group rounded-2xl overflow-hidden bg-[#040402] transition-transform duration-200 hover:-translate-z-px hover:translate-y-px"
              >
                <img
                  src={PHOTO(b.i)}
                  alt={b.name}
                  className="aspect-[4/5] w-full object-cover"
                />
                <figcaption className="mt-3 flex justify-between text-[0.9rem]">
                  <span className="font-[Fraunces]">{b.name}</span>
                  <span className="text-[#c4w]">{b.note}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT-US CTA --------------------------------------------------------*/}
      <section className="bg-[#080806] py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Eyebrow>Visit us</Eyebrow>
          <h2 className="font-[Fraunces] text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] mt-4">
            Come cup with us. The kettle's&nbsp <span className="text-[#c4w]">already warm</span>.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[#f8f3]/75">
            Tastings run Saturday 10am–2pm. Bring a notebook — you'll want to
            remember what "peak" tastes like.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Cta>Book a tasting</Cta>
            <Cta variant="outline">Walk-ins welcome</Cta>
          </div>
        </div>
      </section>

      {/* FOOTER -------------------------------------------------------------*/}
      <footer className="bg-[#070705] py-16 border-t border-[#f8f3]/10">
        <div className="max-w-6xl mx-auto px-6 flex justify-between text-[#f8f3]/60 text-[0.9rem]">
          <span className="font-[Fraunces]">Roastery · 2025</span>
          <span>Single-origin · Hand-roasted · Delivered fresh</span>
        </div>
      </footer>
    </div>
  );
}
