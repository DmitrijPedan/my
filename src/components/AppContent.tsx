import { useEffect, useRef, useState } from "react";
import BorderAnimatedContainer from "src/components/BorderAnimatedContainer";
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
    <div className="flex min-h-screen flex-col bg-brand-bg-main">
      {waiting ? (
        <div ref={loaderRef} className="h-full w-full">
          <FullScreenLoader />
        </div>
      ) : (
        <main className="flex h-full animate-fade-in-md">
          <div className="flex h-full w-full flex-col items-center justify-center">
            <BorderAnimatedContainer className="p-4">
              <h1 className="text-5xl">dp</h1>
            </BorderAnimatedContainer>
          </div>
        </main>
      )}
    </div>
  );
}
export default AppContent;
