import AppContent from "src/components/AppContent";
import AppProvider from "src/context/AppProvider";

function App() {
  return (
    <div className="bg-white text-slate-500 dark:bg-slate-900 dark:text-slate-400">
      <AppProvider>
        <AppContent />
      </AppProvider>
    </div>
  );
}

export default App;
