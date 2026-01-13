import Image from "next/image";
import logo from "../../assets/images/logo.png";
import {
  BagIcon,
  ClockIcon,
  HeadphoneIcon,
  HeartIcon,
  ListIcon,
  SearchIcon,
  UpArrIcon,
  UserIcon,
} from "@/app/assets/images/icons";

function Nav() {
  const navlinks = [
    { id: 1, name: "Home", link: "", dropdown: false },
    { id: 2, name: "Shop", link: "", dropdown: true },
    { id: 3, name: "About us", link: "", dropdown: false },
    { id: 4, name: "Blog", link: "", dropdown: false },
    { id: 5, name: "Contact", link: "", dropdown: false },
  ];
  const navbuttons = [
    { id: 1, icon: <ListIcon width="1.5rem" />, name: "list" },
    { id: 2, icon: <HeartIcon width="1.4rem" />, name: "heart" },
    { id: 3, icon: <BagIcon width="1.5rem" />, name: "bag" },
    { id: 4, icon: <UserIcon width="1.4rem" />, name: "user" },
  ];
  return (
    <nav className="w-full">
      {/* top nav */}
      <div className="w-full bg-(--main-color) flex items-center justify-between py-2 px-4 text-white text-sm  *:items-center ">
        <div className=" items-center lg:flex gap-8  *:items-center *:gap-2">
          <div className="hidden lg:flex">
            <ClockIcon width="1rem" fill="white" strokeWidth={2} />
            <p>Open Hours: Mon - Fri 8am - 6pm</p>
          </div>
          <div className="hidden lg:flex">
            <HeadphoneIcon width="1rem" fill="white" />
            <p>Live Chat</p>
          </div>
        </div>

        <p className="hidden lg:flex ">Super Value Deals - Save more with coupons</p>
        <button className="hidden lg:flex gap-2">
          <p>EN</p>
          <UpArrIcon className="rotate-180" width="1rem" fill="white" />
        </button>
        {/* Sm screen Button List */}
        <ul className="flex lg:hidden items-center gap-4 *:hover:text-(--sec-color) self-right">
          {navbuttons.map((navbtn) => (
            <button key={navbtn.id} className="relative text-white">
              {navbtn.icon}
              {navbtn.name === "bag" && (
                <span className="absolute -top-2 text-xs -right-2  bg-(--sec-color) text-(--main-color) rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              )}
            </button>
          ))}
        </ul>
      </div>

      {/* bottom nav */}
      <div className="w-full flex p-4  items-center justify-between gap-4">
        {/* Logo */}
        <Image src={logo} alt="logo" className="w-20 md:w-35" />
        {/* Hotline */}
        <div className="hidden xl:flex gap-2 items-center">
          <HeadphoneIcon
            width="2.5rem"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="5"
            className="text-(--main-color)"
          />
          <div>
            <p className="text-2xl font-extrabold">91 2345 6788</p>
            <p className="text-sm text-(--text-muted)">Call out Hotline 24/7</p>
          </div>
        </div>
        {/* Links */}
        <ul className="hidden lg:flex gap-4 lg:gap-8 items-center">
          {navlinks.map((link) => (
            <button
              key={link.id}
              className="flex items-center gap-2 font-medium text-black hover:text-(--main-color)"
            >
              <p>{link.name}</p>
              {link.dropdown && (
                <UpArrIcon
                  className="rotate-180"
                  width="1rem"
                  fill="currentColor"
                />
              )}
            </button>
          ))}
        </ul>
        {/* Search */}
        <div>
          <div className="p-1 md:p-3 rounded-full md:w-xs border border-dashed border-(--main-color) bg-(--sec-color) relative flex items-center">
            <input className="pl-3 outline-0  " placeholder="Search Products" />
            <button
              className="absolute right-1 bg-(--main-color) rounded-full p-1 md:p-3 text-white "
              type="button"
            >
              <SearchIcon width="1rem" stroke="white" />
            </button>
          </div>
        </div>

        {/* Buttons */}
        <ul className="hidden lg:flex items-center gap-4 *:hover:text-(--main-color)">
          {navbuttons.map((navbtn) => (
            <button key={navbtn.id} className="relative text-(--text-muted)">
              {navbtn.icon}
              {navbtn.name === "bag" && (
                <span className="absolute -top-2 text-xs -right-2  bg-(--main-color) text-white rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              )}
            </button>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
