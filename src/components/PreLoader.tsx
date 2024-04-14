import React, { useEffect, useRef } from "react";

type PreLoaderProps = React.HTMLAttributes<HTMLDivElement> & {
  delay: number;
  onLoadingComplete: () => void;
};

function PreLoader({ delay, onLoadingComplete, ...rest }: PreLoaderProps) {
  const progressBarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const timeout = setTimeout(() => onLoadingComplete(), delay);
    if (progressBarRef.current) {
      progressBarRef.current.classList.add("!w-full");
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);

  return (
    <div {...rest} className="flex h-full w-full flex-col items-center justify-center">
      <div>
        <h1 className="mb-4 animate-pulse text-center text-xl font-thin md:mb-6 md:text-2xl lg:mb-8 lg:text-3xl">
          Dmitriy Pedan
        </h1>
        <div className="w-60 rounded-full bg-gray-200 p-1 sm:w-72 md:w-80 lg:w-96 dark:bg-slate-700">
          <div
            ref={progressBarRef}
            style={{ transitionDuration: delay + "ms" }}
            className="h-1 w-0 rounded-full bg-emerald-500 transition-all sm:h-1.5"
          />
        </div>
      </div>
    </div>
  );
}

export default PreLoader;
