import React from "react";
import Header from "src/components/Header";

function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto px-2 md:px-4">{children}</main>
    </div>
  );
}

export default Page;
