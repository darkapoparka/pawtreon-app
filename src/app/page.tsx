import Link from "next/link";
import { ArrowRight, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center gap-6 px-6 py-16">
      <PawPrint className="size-9" aria-hidden="true" />
      <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Pawtreon · design foundation</p>
      <h1 className="text-4xl font-semibold tracking-tight">A kinder future for animals, designed one journey at a time.</h1>
      <p className="text-base leading-7 text-muted-foreground">Explore 53 mobile screen and overlay wireframes for discovery, cases, campaigns, giving, accounts and organizer tools.</p>
      <p className="rounded-xl border p-4 text-sm leading-6">This is a design prototype. All example amounts, profiles and cases are illustrative. Login, payments, verification and publishing are not connected.</p>
      <Button asChild className="min-h-11 w-fit"><Link href="/design">Open the design workbench <ArrowRight aria-hidden="true" /></Link></Button>
    </main>
  );
}
