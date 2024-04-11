import classNames from "classnames";
import React from "react";
import Footer from "src/components/Footer";
import Header from "src/components/Header";

export function Page({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="fixed left-0 top-0 h-[200vh] w-[15vw] -translate-y-1/2 translate-x-1/3 rotate-45 bg-gradient-to-r opacity-60 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      <div className="fixed bottom-0 right-0 h-[200vh] w-[20vw] -translate-x-3/4 translate-y-1/2 rotate-45 bg-gradient-to-r opacity-60 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      <Header />
      <main
        className={classNames("container relative z-10 mx-auto max-w-6xl flex-auto px-4 md:px-6", className)}>
        {children}
      </main>
      <Footer className="relative z-10" />
    </div>
  );
}
