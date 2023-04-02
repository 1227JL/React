function Toggle() {

  return (
    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
        <a href="#" className="block px-4 py-3 text-sm text-gray-700 rounded-t-md hover:bg-slate-300" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
        <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-slate-300" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
        <a href="#" className="block px-4 py-3 text-sm text-gray-700 rounded-b-md hover:bg-slate-300" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
    </div>
  );
}

export default Toggle;