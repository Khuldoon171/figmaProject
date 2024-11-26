import { Inter } from "next/font/google";
import Link from "next/link";
//for google font
const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  //nav bar items here
  const navItems = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Works",
      link: "#",
    },
    {
      name: "Blog",
      link: "#",
    },
    {
      name: "Content",
      link: "#",
    },
  ];
  return (
    <ul
      className={`${inter.className} m-[66px] flex items-center justify-end h-[24px] font-medium text-[20px] space-x-6`}
    >
      {navItems.map((item, i) => (
        <li key={i}>
          <Link href={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
