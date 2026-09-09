import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pawtreon — mobile wireframe workbench",
  robots: { index: false, follow: false },
};

export default function DesignWorkbench() {
  return (
    <main className="h-dvh w-full">
      <h1 className="sr-only">Pawtreon mobile wireframe workbench</h1>
      <iframe src="/design/wireframes.html" title="Pawtreon interactive wireframes — illustrative prototype" className="h-full w-full border-0" />
    </main>
  );
}
