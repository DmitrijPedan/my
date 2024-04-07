import AppContent from "src/components/AppContent";
import AppProvider from "src/context/AppProvider";

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
