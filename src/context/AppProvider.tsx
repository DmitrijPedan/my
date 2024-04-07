import React, { createContext, useEffect, useRef, useState } from "react";
import FullScreenLoader from "src/components/FullScreenLoader";
import type { ThemeValue } from "src/lib/helpers/theme";
import useTheme from "src/lib/hooks/useTheme";

type AppContextType = {
  currentTheme: ThemeValue;
  loading: boolean;
  selectTheme: (theme: ThemeValue) => void;
};

const AppContext = createContext<AppContextType | null>(null);

function AppProvider({ children }: { children: React.ReactNode }) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const { currentTheme, selectTheme } = useTheme();
  const [loading, setLoading] = useState<AppContextType["loading"]>(true);

  useEffect(() => {
    setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.classList.add("animate-fade-out-md");
        loaderRef.current.classList.add("opacity-0");
        loaderRef.current.addEventListener("animationend", () => setLoading(false));
      } else {
        setLoading(false);
      }
    }, 1000);
  }, []);

  return (
    <AppContext.Provider
      value={{
        currentTheme,
        loading,
        selectTheme,
      }}>
      {loading ? (
        <div ref={loaderRef} className="h-screen w-screen">
          <FullScreenLoader />
        </div>
      ) : (
        children
      )}
    </AppContext.Provider>
  );
}

export { AppContext };
export default AppProvider;
