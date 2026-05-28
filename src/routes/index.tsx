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
    <iframe
      src="/study.html"
      title="SOTE Hatóanyag Mester"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
      }}
    />
  );
}
