import AppContent from "src/components/AppContent";
import AppProvider from "src/context/AppProvider";

function App() {
  return (
    <div className="bg-white font-nunito text-slate-700 antialiased dark:bg-slate-900 dark:text-slate-300">
      <AppProvider>
        <AppContent />
      </AppProvider>
    </div>
  );
}

export default App;
