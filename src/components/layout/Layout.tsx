import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactFloat from "../shared/ContactFloat";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
      <ContactFloat />
    </div>
  );
}
