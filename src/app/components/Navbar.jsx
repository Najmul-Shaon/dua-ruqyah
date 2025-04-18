import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="navbar flex w-full">
      <div className="navbar-start flex-grow-0">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <RxHamburgerMenu className="size-5" />
        </div>
        <a className="text-2xl font-bold poppins-font">Dua Page</a>
      </div>

      <div className="hidden navbar-center flex-grow lg:flex justify-end min-w-1/2">
        <div>
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
        </div>
      </div>

      <div className="navbar-end flex-grow-0">
        <div className="hidden lg:flex items-center gap-1.5">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full border">
                <img alt="user profile" src="/assets/profile1.png" />
              </div>
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
          <FaCaretDown className="text-xl text-gray-500" />
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <div className="bg-[#76a38b] p-1.5 rounded-full">
            <CiSearch className="text-xl" />
          </div>
          <div className="bg-[#76a38b] p-1.5 rounded-full">
            <FaGear className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
