import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SOTE Hatóanyag Mester — Gyógyszerhatástan kártyák" },
      { name: "description", content: "Interaktív gyógyszerhatástan kártyák SOTE hallgatóknak: hatóanyagok, mechanizmusok és mellékhatások." },
      { property: "og:title", content: "SOTE Hatóanyag Mester" },
      { property: "og:description", content: "Interaktív gyógyszerhatástan tanulókártyák." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2 font-semibold tracking-tight text-slate-900">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#0b2545] text-white">💊</span>
            <span>SOTE Hatóanyag Mester</span>
          </a>
          <a
            href="/study.html"
            className="rounded-full bg-[#0b2545] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#13315c]"
          >
            Tanulás
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(11,37,69,0.10), transparent 70%), linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
          }}
        />
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-24 text-center sm:pt-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            SOTE orvostanhallgatóknak
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#0b2545] sm:text-6xl">
            Tanuld meg az 1070 hatóanyagot{" "}
            <span className="block text-[#13315c] sm:inline">– hatékonyan</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Interaktív tanulókártyák a teljes gyógyszerhatástan tananyaghoz. Csoportonkénti
            szűrés, önértékelés és automatikus haladásmentés – egy helyen.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/study.html"
              className="inline-flex items-center gap-2 rounded-full bg-[#0b2545] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#0b2545]/20 transition hover:bg-[#13315c]"
            >
              Tanulás megkezdése →
            </a>
            <a
              href="#arazas"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-base font-medium text-slate-700 transition hover:border-slate-300"
            >
              Árak megnézése
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "📚",
              title: "1070 hatóanyag",
              text: "A SOTE gyógyszerhatástan teljes hatóanyaglistája egy átlátható, kereshető rendszerben.",
            },
            {
              icon: "🧪",
              title: "14 gyógyszercsoport szűrő",
              text: "Tanulj fókuszáltan – csoportonként szűrve gyakorolhatod a vizsgára releváns anyagokat.",
            },
            {
              icon: "💾",
              title: "Haladás mentve automatikusan",
              text: "A böngésződ megjegyzi, hol tartasz – bármikor folytathatod ott, ahol abbahagytad.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#0b2545]/5 text-2xl">
                {f.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#0b2545]">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0b2545] sm:text-4xl">
              Hogyan működik?
            </h2>
            <p className="mt-3 text-slate-600">
              Három egyszerű lépés a hatékony tanuláshoz.
            </p>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "1", title: "Válassz csoportot", text: "Szűrd a 14 gyógyszercsoport közül azt, amit tanulni szeretnél." },
              { n: "2", title: "Nézd meg a hatóanyagot", text: "Mechanizmus, indikációk, mellékhatások – minden egy kártyán." },
              { n: "3", title: "Értékeld magad", text: "Jelöld, hogy tudtad-e – a rendszer a gyengébb pontokra fókuszál." },
            ].map((s) => (
              <li key={s.n} className="relative rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0b2545] text-sm font-bold text-white">
                  {s.n}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#0b2545]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pricing */}
      <section id="arazas" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0b2545] sm:text-4xl">
            Egyszeri fizetés, örökre a tiéd
          </h2>
          <p className="mt-3 text-slate-600">
            Nincs előfizetés, nincs rejtett költség. Egyszer fizetsz, és bármikor használhatod.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-md">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-[#0b2545]/5">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-1"
              style={{ background: "linear-gradient(90deg,#0b2545,#13315c,#0b2545)" }}
            />
            <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
              Teljes hozzáférés
            </p>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-5xl font-bold text-[#0b2545]">2990 Ft</span>
              <span className="text-sm text-slate-500">/ örökre</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {[
                "Mind az 1070 hatóanyag elérhető",
                "14 gyógyszercsoport szerinti szűrés",
                "Automatikus haladásmentés",
                "Jövőbeli frissítések ingyen",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-0.5 text-emerald-600">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-8 w-full rounded-full bg-[#0b2545] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#0b2545]/20 transition hover:bg-[#13315c]"
              onClick={() => alert("A fizetési rendszer hamarosan elérhető.")}
            >
              Teljes hozzáférés megvásárlása
            </button>
            <p className="mt-3 text-center text-xs text-slate-500">
              Egyszeri fizetés · Örök hozzáférés
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row">
          <span>SOTE Hatóanyag Mester · 2025</span>
          <a href="/study.html" className="hover:text-[#0b2545]">Tanulás megkezdése →</a>
        </div>
      </footer>
    </div>
  );
}
