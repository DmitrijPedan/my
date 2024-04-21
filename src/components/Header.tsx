import BreadCrumbs from "src/components/BreadCrumbs";
import Preferences from "src/components/Preferences";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-300 px-4 py-1 backdrop-blur dark:border-slate-800">
      <nav className="container mx-auto flex max-w-7xl items-start justify-between">
        <div className="flex h-10 items-center">
          <BreadCrumbs />
        </div>
        <div className="ml-auto flex space-x-2">
          <Preferences />
        </div>
      </nav>
    </header>
  );
}

export default Header;
