import { Header } from "@/components/layout/header";
import { ReactNode } from "react";

export default function SiteLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="overflow-x-hidden">
      <Header />
      {children}
    </div>
  );
}
