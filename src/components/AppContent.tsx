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
    <div className="flex h-full w-full flex-col overflow-hidden bg-brand-bg-main">
      {waiting ? (
        <div ref={loaderRef} className="h-full w-full">
          <FullScreenLoader />
        </div>
      ) : (
        <div className="animate-fade-in-md">
          <header className="border p-2"></header>
          <main className="overflow-y-scroll">
            <h2>Hello</h2>
            <h2>Hello</h2>
            <h2>Hello</h2>
            <h2>Hello</h2>
            <h2>Hello</h2>
          </main>
        </div>
      )}
    </div>
  );
}
export default AppContent;
