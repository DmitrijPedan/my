import React from "react";

function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <main className="container mx-auto">{children}</main>
    </div>
  );
}

export default Page;
