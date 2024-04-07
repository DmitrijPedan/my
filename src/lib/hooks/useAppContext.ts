import { useContext } from "react";
import { AppContext } from "src/context/AppProvider";

function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
}

export default useAppContext;
