import React, { createContext, useRef, useState } from "react";
import PreLoader from "src/components/PreLoader";
import type { ThemeValue } from "src/lib/helpers/theme";
import useTheme from "src/lib/hooks/useTheme";

type AppContextType = {
  currentTheme: ThemeValue;
  systemTheme: "dark" | "light" | null;
  loading: boolean;
  selectTheme: (theme: ThemeValue) => void;
};

const AppContext = createContext<AppContextType | null>(null);

function AppProvider({ children }: { children: React.ReactNode }) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const { currentTheme, systemTheme, selectTheme } = useTheme();
  const [loading, setLoading] = useState<AppContextType["loading"]>(true);

  const onLoadingComplete = () => {
    if (loaderRef.current) {
      loaderRef.current.classList.add("animate-fade-out-md");
      loaderRef.current.classList.add("opacity-0");
      loaderRef.current.addEventListener("animationend", () => setLoading(false));
    } else {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentTheme,
        systemTheme,
        loading,
        selectTheme,
      }}>
      {loading ? (
        <div ref={loaderRef} className="h-screen w-screen">
          <PreLoader delay={1000} onLoadingComplete={onLoadingComplete} />
        </div>
      ) : (
        children
      )}
    </AppContext.Provider>
  );
}

export { AppContext };
export default AppProvider;
