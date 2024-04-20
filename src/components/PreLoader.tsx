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
  }, [delay, progressBarRef.current]);

  return (
    <div {...rest} className="flex h-full w-full flex-col items-center justify-center backdrop-blur">
      <div>
        <div className="w-60 rounded-full bg-gray-200 p-1 sm:w-72 md:w-80 lg:w-96 dark:bg-slate-700">
          <div
            ref={progressBarRef}
            style={{ transitionDuration: delay + "ms" }}
            className="primary-bg-color h-1 w-0 rounded-full transition-all sm:h-1.5"
          />
        </div>
      </div>
    </div>
  );
}

export default PreLoader;
