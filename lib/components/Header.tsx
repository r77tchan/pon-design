"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
  {
    name: "NEWS",
    href: "/news",
  },
  {
    name: "SERVICE",
    href: "/service",
  },
  {
    name: "WORKS",
    href: "/works",
  },
  {
    name: "COMPANY",
    href: "/company",
  },
  {
    name: "RECRUIT",
    href: "/recruit",
  },
  {
    name: "CONTACT",
    href: "/contact",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <header
        className={`fixed top-0 left-0 z-3 flex w-full items-center justify-between px-7 font-bold text-white transition-all duration-700 ${
          isOpen
            ? "pointer-events-none bg-transparent"
            : isScrolled
              ? "bg-purple-1 md:py-4"
              : "bg-transparent md:py-7"
        }`}
      >
        <h1
          className={`text-2xl transition-opacity duration-200 md:opacity-100 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        >
          <Link href="/">PON DESIGN</Link>
        </h1>
        <nav
          className={`hidden transition-opacity duration-200 md:block md:opacity-100 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        >
          <ul className="flex gap-x-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="pointer-events-auto z-4 flex h-15 w-15 cursor-pointer items-center justify-center md:hidden"
          aria-label="メニュー"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="relative block h-5 w-7">
            <span
              className={`absolute top-0 left-0 h-0.5 w-7 bg-white transition-all duration-200 ${isOpen ? "translate-y-2 rotate-45" : ""}`}
            ></span>
            <span
              className={`absolute top-2 left-0 h-0.5 w-7 bg-white transition-all duration-200 ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`absolute top-4 left-0 h-0.5 w-7 bg-white transition-all duration-200 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
            ></span>
          </span>
        </button>
      </header>
      <nav
        className={`inset-0 z-2 h-screen w-full bg-[linear-gradient(135deg,#7633a4,#250d65)] pt-15 transition-all duration-200 md:hidden ${isOpen ? "fixed" : "hidden"}`}
      >
        <ul className="flex flex-col gap-6.25 pt-7.5 pl-12.5 leading-none font-bold text-white">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
