function AppHeader() {
  return (
    <header className="flex items-center justify-between p-1 backdrop-blur-xl">
      <nav className="mr-4">
        <a className="" href="#">
          Home
        </a>
      </nav>
      <div className="flex items-center justify-center">
        <div>
          <label htmlFor="theme">Theme</label>
          <input type="checkbox" id="theme" />
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
