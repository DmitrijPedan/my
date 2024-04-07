import ThemeSelector from "src/components/ThemeSelector";

function Header() {
  return (
    <header className="sticky top-0 flex justify-between p-2">
      <div className="mr-2">
        <a
          href="\"
          className="flex cursor-pointer flex-col items-end font-raleway text-xl font-extralight leading-none hover:text-brand-color-1">
          <span>DMITRIY</span>
          <span>PEDAN</span>
        </a>
      </div>
      <div>
        <ThemeSelector />
      </div>
    </header>
  );
}

export default Header;
