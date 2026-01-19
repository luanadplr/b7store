import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ReactNode } from "react";

export default function SiteLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main className="mx-auto w-full max-w-6xl p-6">{children}</main>
      <Footer />
    </div>
  );
}
