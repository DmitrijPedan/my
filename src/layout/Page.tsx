import React from "react";
import Footer from "src/components/Footer";
import Header from "src/components/Header";

function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto">{children}</main>
      <Footer />
    </div>
  );
}

export default Page;
