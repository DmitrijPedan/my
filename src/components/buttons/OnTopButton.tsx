import { ArrowUpIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import { Ripple, initTWE } from "tw-elements";

export function OnTopButton({ className, ...rest }: React.HTMLAttributes<HTMLButtonElement>) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    initTWE({ Ripple });

    const scrollFunction = () => {
      if (!buttonRef.current) return;
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        buttonRef.current.classList.remove("hidden");
      } else {
        buttonRef.current.classList.add("hidden");
      }
    };

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, [buttonRef]);

  const backToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      ref={buttonRef}
      aria-label="Scroll to top"
      onClick={backToTop}
      type="button"
      data-twe-ripple-init
      data-twe-ripple-color="light"
      className={classNames(
        "z-100 !fixed bottom-16 left-5 hidden cursor-pointer rounded-full p-3 text-white shadow-md transition duration-150 ease-in-out focus:ring-0 md:bottom-5 md:left-[initial] md:right-5",
        "bg-slate-700 hover:bg-sky-500 focus:bg-sky-500 active:bg-sky-500",
        "dark:bg-slate-800 dark:text-sky-500 dark:hover:bg-sky-600 dark:hover:text-white dark:focus:bg-sky-600 dark:focus:text-white dark:active:bg-sky-600 dark:active:text-white",
        className
      )}
      {...rest}>
      <span className="sr-only">Scroll to top</span>
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  );
}
