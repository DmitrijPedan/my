import BreadCrumbs from "src/components/BreadCrumbs";
import ThemeSelector from "src/components/ThemeSelector";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-300 px-4 py-1 backdrop-blur dark:border-slate-800">
      <nav className="container mx-auto flex max-w-7xl items-start justify-between">
        <div className="flex h-10 items-center">
          <BreadCrumbs />
        </div>
        <div className="ml-auto">
          <ThemeSelector />
        </div>
      </nav>
    </header>
  );
}

export default Header;
