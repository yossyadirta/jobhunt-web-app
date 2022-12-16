export default function Navbar() {
  return (
    <nav
      className="fixed z-50 w-full flex-shrink-0 border-b p-3 bg-white"
      id="navbar"
    >
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center space-x-3">
          <span className="text-md font-semibold" id="username">
            Hello, {localStorage.username}!
          </span>
        </div>
      </div>
    </nav>
  );
}
