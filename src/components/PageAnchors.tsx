import classNames from "classnames";
import React, { useEffect, useState } from "react";

export type Anchor = {
  title: string;
  isActive: boolean;
  elementId: string;
};

function PageAnchors({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [anchors, setAnchors] = useState<Anchor[]>([]);

  useEffect(() => {
    const observedElements = [...document.querySelectorAll("[data-observed]")];
    if (observedElements.length) {
      const newAnchors: Anchor[] = observedElements.map((el) => {
        return {
          title: el.getAttribute("data-label") || "",
          isActive: false,
          elementId: el.id,
        };
      });
      setAnchors(newAnchors);
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const label = entry.target.getAttribute("data-label");
            if (entry.isIntersecting) {
              setAnchors((prev) => {
                return prev.map((anchor) => {
                  if (anchor.title === label) {
                    return { ...anchor, isActive: true };
                  } else {
                    return { ...anchor, isActive: false };
                  }
                });
              });
            }
          });
        },
        { threshold: 0, rootMargin: "-15% 0px -70% 0px" }
      );
      observedElements.forEach((element) => observer.observe(element));
    }
  }, []);

  const currentIndex = anchors.findIndex((anchor) => anchor.isActive);
  return (
    <div className={classNames("flex flex-row items-stretch", className)}>
      <div className="relative mr-3 w-[1px] bg-gray-200 dark:bg-gray-700">
        <div
          className="absolute left-0 w-full origin-bottom bg-sky-500"
          style={{
            height: 100 / anchors.length + "%",
            top: `${(100 / anchors.length) * currentIndex}%`,
          }}
        />
      </div>
      <ul className="space-y-2 sm:mt-12 lg:mt-auto">
        {anchors.length &&
          anchors.map((anchor, i) => (
            <li key={i} className="">
              <a
                aria-label={`Scroll to ${anchor.title} section`}
                href={`#${anchor.elementId}`}
                className={classNames(
                  "text-sm",
                  anchor.isActive ? "font-semibold text-sky-500" : "text-slate-500 dark:text-slate-400"
                )}>
                {anchor.title}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PageAnchors;
