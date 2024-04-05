import { useEffect, useRef, useState } from "react";
import FullScreenLoader from "src/components/FullScreenLoader";

function AppContent() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const [waiting, setWaiting] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.classList.add("animate-fade-out-md");
        loaderRef.current.classList.add("opacity-0");
        loaderRef.current.addEventListener("animationend", () => setWaiting(false));
      } else {
        setWaiting(false);
      }
    }, 1000);
  }, []);

  return (
    <div className="flex min-h-screen flex-col border bg-brand-bg-main">
      {waiting ? (
        <div ref={loaderRef} className="h-full w-full">
          <FullScreenLoader />
        </div>
      ) : (
        <main className="flex h-full animate-fade-in-md">
          <div className="flex h-full w-full items-center justify-center">
            <h1 className="text-5xl">dp</h1>
          </div>
        </main>
      )}
    </div>
  );
}
export default AppContent;
