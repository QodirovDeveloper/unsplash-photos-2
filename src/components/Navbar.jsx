import { Link, NavLink } from "react-router-dom";
import ThemeMode from "./ThemeMode";
import { FaAngleDown, FaRegFileAlt, FaRegUserCircle } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { SlMenu } from "react-icons/sl";
import { MdGroups, MdOutlineHomeWork, MdTranslate } from "react-icons/md";
import { LuTabletSmartphone } from "react-icons/lu";
import { SiUnsplash } from "react-icons/si";
import Search from "./Search";

function Navbar() {
  const user = !!false;
  return (
    <div className="fixed top-0 min-[973px]:left-[62px]  z-99999 left-0 right-0 back drop-blur">
      <div className="min-[973px]:hidden pt-4 px-7 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="text-2xl">
            <SiUnsplash />
          </span>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center p-2 gap-1 cursor-pointer"
            >
              <div>Photos</div>
              <FaAngleDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 shadow-2xl border border-black/30 rounded-box z-1 w-52 p-2"
            >
              <li>
                <a>Photos</a>
              </li>
              <li>
                <a>Illustrations</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-center gap-7">
          <div className="dropdown dropdown-end pb-1">
            <div tabIndex={0} role="button">
              <div
                className="tooltip tooltip-bottom hover:tooltip-open"
                data-tip="Notifications"
              >
                <button className="text-2xl">
                  <GoBell />
                </button>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-62 h-50 p-2 shadow-2xl border border-black/30"
            >
              <div role="tablist" className="tabs *:p-1 tabs-border">
                <a role="tab">Highlights</a>
                <a role="tab">Activity</a>
                <p className="p-10">
                  Activity associated with your account will appear here.
                </p>
              </div>
            </ul>
          </div>

          <div className="dropdown dropdown-end pb-1">
            <div tabIndex={0} role="button">
              <div
                className="tooltip tooltip-bottom hover:tooltip-open"
                data-tip="Profile"
              >
                <button className="text-2xl">
                  <FaRegUserCircle />
                </button>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-62 h-[340px] shadow-2xl border border-black/30"
            >
              <li>
                <div className="card-body items-center border-b text-center">
                  <p className="text-2xl">
                    <FaRegUserCircle />
                  </p>
                  <h1>Hasanboy Qodirov</h1>
                  <p>View profile</p>
                </div>
                <a>Stats</a>
                <a>Download history</a>
                <a>Account settings</a>
              </li>
              <li>
                <button className="btn btn-outline p-1">Submit an image</button>
                <button className="btn btn-ghost">Logout @hasanboydevvv</button>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-end pb-1">
            <div tabIndex={0} role="button">
              <div
                className="tooltip tooltip-bottom hover:tooltip-open"
                data-tip="Menu"
              >
                <SlMenu />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content text-lg menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-2xl border border-black/30"
            >
              <li>
                <a>
                  <MdOutlineHomeWork /> Company
                </a>
              </li>
              <li>
                <a>
                  <LuTabletSmartphone /> Product
                </a>
              </li>
              <li>
                <a>
                  <MdGroups /> Community
                </a>
              </li>
              <li>
                <a>
                  <FaRegFileAlt /> Legal
                </a>
              </li>
              <li>
                <a>
                  <MdTranslate /> English
                </a>
              </li>
            </ul>
          </div>

          <ThemeMode />
        </div>
      </div>

      <div className="py-3 px-6 flex items-center gap-6">
        <div className="w-full">
          <Search />
        </div>
        {/* ========== */}
        {user && (
          <div className="flex items-center gap-3">
            <p>Hasanboy</p>
            <div className="avatar ">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
              </div>
            </div>
            <button className="btn">
              <NavLink to="/signup">Signup</NavLink>
            </button>
          </div>
        )}

        {!user && (
          <nav className="flex items-center gap-2">
            <button className="btn">
              <NavLink to="/login">Login</NavLink>
            </button>
            <button className="btn">
              <NavLink to="/signup">Signup</NavLink>
            </button>
          </nav>
        )}

        {/* ========= */}
      </div>

      <div className="w-full overflow-x-auto whitespace-nowrap py-2 px-4 bg-base-100 shadow-md">
        <div className="inline-flex sm:gap-4 h-[1px]">
          <button className="btn btn-sm btn-ghost">Featured</button>
          <button className="btn btn-sm btn-ghost">Wallpapers</button>
          <button className="btn btn-sm btn-ghost">Nature</button>
          <button className="btn btn-sm btn-ghost">3D Renders</button>
          <button className="btn btn-sm btn-ghost">Textures</button>
          <button className="btn btn-sm btn-ghost">Travel</button>
          <button className="btn btn-sm btn-ghost">Film</button>
          <button className="btn btn-sm btn-ghost">People</button>
          <button className="btn btn-sm btn-ghost">
            Architecture & Interiors
          </button>
          <button className="btn btn-sm btn-ghost">Street Photography</button>
          <button className="btn btn-sm btn-ghost">Experimental</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
