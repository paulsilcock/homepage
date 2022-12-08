import { useEffect, useState } from "react";
import { Button, Menu, Navbar } from "react-daisyui"
import Link from "next/link";

const MobileMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const onMenuClick = () => setShowMenu(s => !s);

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  return (
    <div className="visible md:hidden">
      <Button aria-expanded={showMenu} aria-label="Toggle menu" aria-controls="mobile-menu" className="text-base-content bg-base-200 border-none" onClick={onMenuClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {
            showMenu ?
              <>
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </>
              :
              <path d="M4 6h16M4 12h8m-8 6h16" />
          }
        </svg>
      </Button>
      {
        <ul id="mobile-menu" className="z-10 bg-base-200 flex flex-col m-0 left-0 top-24 h-[calc(100vh_-_96px)] w-full" style={{
          position: "fixed",
          display: showMenu ? "block" : "none"
        }}>
          <li className="font-semibold list-item pl-10 pb-6" onClick={onMenuClick}>
            <Link href="/">Home</Link>
          </li>
          <li className="font-semibold list-item pl-10 pb-6" onClick={onMenuClick}>
            <Link href="/#about">About</Link>
          </li>
          <li className="font-semibold list-item pl-10 pb-6" onClick={onMenuClick}>
            <Link href="/">Blog</Link>
          </li>
          <li className="font-semibold list-item pl-10 pb-6" onClick={onMenuClick}>
            <Link href="https://github.com/paulsilcock" target="_blank">GitHub</Link>
          </li>
        </ul>
      }
    </div>
  );
}

export const Appbar: React.FC = () => {
  return (
    <Navbar role="navigation" className="h-24 md:h-32 ml-[-16px]">
      <Navbar.Start>
        <Menu horizontal={true} className="p-0 hidden md:visible md:flex">
          <Menu.Item role="none">
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="#about">About</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/">Blog</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="https://github.com/paulsilcock" target="_blank">GitHub</Link>
          </Menu.Item>
        </Menu>
        <MobileMenu />
      </Navbar.Start>
      <Navbar.Center />
      <Navbar.End />
    </Navbar>
  )
}