import ThemeSelector from "src/components/ThemeSelector";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-bg-main px-2 py-2 sm:px-4 md:px-6">
      <div className="mx-auto flex max-w-[1920px] items-center justify-between">
        <div className="mr-2 ">
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
      </div>
    </header>
  );
}

export default Header;
