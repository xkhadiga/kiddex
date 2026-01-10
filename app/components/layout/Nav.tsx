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
    {id: 1,
      icon: <ListIcon width="1.5rem"  /> ,
    },
    {id: 2,
      icon: <HeartIcon width="1.4rem"   /> ,
    },
    {id: 3,
      icon: <BagIcon width="1.5rem"   /> ,
    },
    {id: 4,
      icon: <UserIcon width="1.4rem"   /> ,
    },
  ]
  return (
    <nav className="w-full">
      {/* top nav */}
      <div className="bg-(--main-color) flex items-center justify-between py-2 px-4 w-full text-white text-sm *:flex *:items-center ">
        <div className="flex items-center gap-8 *:flex *:items-center *:gap-2">
          <div className="">
            <ClockIcon width="1rem" fill="white" strokeWidth={2} />
            <p>Open Hours: Mon - Fri 8am - 6pm</p>
          </div>
          <div className="">
            <HeadphoneIcon width="1rem" fill="white" />
            <p>Live Chat</p>
          </div>
        </div>

        <p>Super Value Deals - Save more with coupons</p>
        <button className="gap-2">
          <p>EN</p>
          <UpArrIcon className="rotate-180" width="1rem" fill="white" />
        </button>
      </div>

      {/* bottom nav */}
      <div className="flex p-4 w-full items-center justify-between">
        {/* Logo */}
        <Image src={logo} alt="logo" />
        {/* Hotline */}
        <div className="flex gap-2 items-center">
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
        <ul className="flex gap-8">
          {navlinks.map((link) => (
            <button key={link.id} className="flex items-center gap-2 font-medium text-black hover:text-(--main-color)">
              <p>{link.name}</p>
              {link.dropdown && <UpArrIcon className="rotate-180" width="1rem" fill="currentColor" />}
            </button>
          ))}
        </ul>
        {/* Search */}
        <div className="w-sm">
          <div className="p-3 rounded-full border border-dashed border-(--main-color) bg-(--sec-color) relative flex items-center">
            <input className="pl-3 outline-0  " placeholder="Search Products" />
            <button
              className="absolute right-1 bg-(--main-color) rounded-full p-3 text-white "
              type="button"
            >
              <SearchIcon width="1rem" stroke="white" />
            </button>
          </div>
        </div>

        {/* Buttons */}
        <ul className="flex items-center gap-4 *:hover:text-(--main-color)">
          {navbuttons.map((navbtn) => 
          <button key={navbtn.id} className="text-(--text-muted)">
            {navbtn.icon}
          </button>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
