import React from "react";
import Footer from "src/components/Footer";
import Header from "src/components/Header";

function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header />
      <main className="flex grow items-center">
        <div className="container mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Page;
