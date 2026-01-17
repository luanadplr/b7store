import { Header } from "@/components/layout/header";
import { ReactNode } from "react";

export default function SiteLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
