import React from "react";
import Header from "src/components/Header";

function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto max-w-6xl px-4 md:px-6">{children}</main>
    </div>
  );
}

export default Page;
