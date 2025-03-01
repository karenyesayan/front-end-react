import { useState, useRef, useEffect } from "react";
import Drawer from "../../ui/Drawer/Drawer";
import Logo from "../../common/Logo/Logo";
import MenuToggle from "../../common/MenuToggle/MenuToggle";
import Navbar from "../../ui/NavBar/NavBar";
import Search from "../../ui/SearchBar/Search";
import logoSVG from "../../../assets/logo.svg";
import ChevronDownIcon from "../../../assets/icons/chevron-down.svg?react";
import ChevronRightIcon from "../../../assets/icons/chevron-right.svg?react";
import styles from "./Header.module.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const menu = menuRef.current;
      const windowHeight = window.scrollY;

      if (windowHeight > 200) {
        menu.classList.remove(styles.fadeInUp);
      } else {
        menu.classList.add(styles.fadeInUp);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={styles.header}>
        <Drawer isOpen={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Logo logoSVG={logoSVG} baseUrl={baseUrl} />
          <MenuToggle variant="close" onToggle={setMobileMenuOpen} />
          <nav className={styles.wrapper}>
            <Navbar navigation={navigation} />
          </nav>
        </Drawer>
        <MenuToggle variant="open" onToggle={setMobileMenuOpen} />
        <Logo logoSVG={logoSVG} baseUrl={baseUrl} />
        <Search />
      </header>
      <nav ref={menuRef} className={styles.container}>
        <Navbar navigation={navigation} />
      </nav>
    </>
  );
}

const baseUrl = "http://localhost:5173/";

const navigation = [
  {
    id: 0,
    title: "Demos",
    segment: "demos",
    icon: <ChevronDownIcon />,
    children: [
      {
        id: 1,
        title: "Demos Header",
        segment: "#",
        icon: <ChevronRightIcon />,
      },
      {
        id: 2,
        title: "Demos Layout",
        segment: "#",
        icon: <ChevronRightIcon />,
      },
      {
        id: 3,
        title: "Share Buttons",
        segment: "#",
        icon: <ChevronRightIcon />,
      },
      {
        id: 4,
        title: "Gallery Post",
        segment: "#",
        icon: <ChevronRightIcon />,
      },
      {
        id: 5,
        title: "Video Post",
        segment: "#",
        icon: <ChevronRightIcon />,
      },
    ],
  },
  {
    id: 6,
    title: "Post",
    segment: "post",
    icon: <ChevronDownIcon />,
    children: [
      {
        id: 7,
        title: "Post Header",
        segment: "#",
        icon: <ChevronRightIcon />,
      },
      {
        id: 8,
        title: "Post Layout",
        segment: "#",
        icon: <ChevronRightIcon />,
      },
      {
        id: 9,
        title: "Share Buttons",
        segment: "#",
        icon: <ChevronRightIcon />,
      },
      {
        id: 10,
        title: "Gallery Post",
        segment: "#",
        icon: <ChevronRightIcon />,
      },
      {
        id: 11,
        title: "Video Post",
        segment: "#",
        icon: <ChevronRightIcon />,
      },
    ],
  },
  {
    id: 12,
    title: "Features",
    segment: "features",
    icon: <ChevronDownIcon />,
    children: [
      {
        id: 13,
        title: "Features Header",
        segment: "#",
        icon: <ChevronRightIcon />,
      },
      {
        id: 14,
        title: "Features Layout",
        segment: "#",
        icon: <ChevronRightIcon />,
      },
      {
        id: 15,
        title: "Share Buttons",
        segment: "#",
        icon: <ChevronRightIcon />,
      },
      {
        id: 16,
        title: "Gallery Post",
        segment: "#",
        icon: <ChevronRightIcon />,
      },
      {
        id: 17,
        title: "Video Post",
        segment: "#",
        icon: <ChevronRightIcon />,
      },
    ],
  },
  {
    id: 18,
    title: "Categories",
    segment: "categories",
    icon: <ChevronDownIcon />,
    children: [
      {
        id: 19,
        title: "Categories Header",
        segment: "#",
        icon: <ChevronRightIcon />,
      },
      {
        id: 20,
        title: "Categories Layout",
        segment: "#",
        icon: <ChevronRightIcon />,
      },
      {
        id: 21,
        title: "Share Buttons",
        segment: "#",
        icon: <ChevronRightIcon />,
      },
      {
        id: 22,
        title: "Gallery Post",
        segment: "#",
        icon: <ChevronRightIcon />,
      },
      {
        id: 23,
        title: "Video Post",
        segment: "#",
        icon: <ChevronRightIcon />,
      },
    ],
  },
  {
    id: 24,
    title: "Shop",
    segment: "shop",
    icon: <ChevronDownIcon />,
    children: [
      {
        id: 25,
        title: "Shop Header",
        segment: "#",
        icon: <ChevronRightIcon />,
      },
      {
        id: 26,
        title: "Shop Layout",
        segment: "#",
        icon: <ChevronRightIcon />,
      },
      {
        id: 27,
        title: "Share Buttons",
        segment: "#",
        icon: <ChevronRightIcon />,
      },
      {
        id: 28,
        title: "Gallery Post",
        segment: "#",
        icon: <ChevronRightIcon />,
      },
      {
        id: 29,
        title: "Video Post",
        segment: "#",
        icon: <ChevronRightIcon />,
      },
    ],
  },
  {
    id: 30,
    title: "Buy Now",
    segment: "buy",
  },
];
