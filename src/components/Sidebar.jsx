import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex-container">
      <div className="flex flex-col bg-gradient-to-b from-blue-500 to-blue-700 text-white h-screen w-64 p-4">
        <div className="mb-8 p-4">
          <img src="./src/assets/logo SP.png" />
        </div>
        <nav className="flex flex-col gap-4 text-base font-normal">
          <NavLink
            to="/beranda"
            className={({ isActive }) =>
              isActive
                ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all bg-blue-50 bg-opacity-80 text-blue-900 outline-none"
                : "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            }
          >
            <div className="grid place-items-center mr-4">
              <img src="./src/assets/Beranda1.png" />
            </div>
            Beranda
          </NavLink>
          <NavLink
            to="/catatan"
            className={({ isActive }) =>
              isActive
                ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all bg-blue-50 bg-opacity-80 text-blue-900 outline-none"
                : "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            }
          >
            <div className="grid place-items-center mr-4">
              <img src="./src/assets/pencil.png" />
            </div>
            Catatan
          </NavLink>
          <NavLink
            to="/example-pages"
            className={({ isActive }) =>
              isActive
                ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all bg-blue-50 bg-opacity-80 text-blue-900 outline-none"
                : "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            }
          >
            <div className="grid place-items-center mr-4">
              <img src="./src/assets/calender.png" />
            </div>
            Calender{" "}
            <div className="grid place-items-center ml-auto justify-self-end">
              <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-blue-500/20 text-blue-900 py-1 px-2 text-xs rounded-full" style={{ opacity: 1 }}>
                <span>14</span>
              </div>
            </div>
          </NavLink>

          <div className="mt-auto">
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all bg-blue-50 bg-opacity-80 text-blue-900 outline-none"
                  : "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
              }
            >
              <div className="grid place-items-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              Log Out
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
