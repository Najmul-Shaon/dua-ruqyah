import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <RxHamburgerMenu className="size-5" />
          </div>
          {/* <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul> */}
        </div>
        <a className="text-xl font-semibold">Dua Page</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <label className="input pe-1">
          <input
            type="search"
            className="grow border-gray-100"
            placeholder="Search by Dua Name"
          />

          <kbd className="kbd justify-end py-3.5">
            <CiSearch className="size-6" />
          </kbd>
        </label>
        {/* <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul> */}
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-1.5">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              {/* <div className="flex gap-8"> */}
              <div className="w-10 rounded-full border">
                <img alt="user profile" src="/assets/profile1.png" />
              </div>

              {/* </div> */}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>

              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <div>
            <FaCaretDown className="text-xl text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
