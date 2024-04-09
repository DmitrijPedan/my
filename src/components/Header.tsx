import ThemeSelector from "src/components/ThemeSelector";

function Header() {
  return (
    <header className="container sticky top-0 z-50 mx-auto flex justify-end">
      <div className="rounded-b-lg border bg-gray-100 px-4 py-1 shadow-md dark:border-none dark:bg-slate-700 dark:shadow-none">
        <ThemeSelector />
      </div>
    </header>
  );
}

export default Header;
