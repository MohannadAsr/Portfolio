'use client';
import Link from 'next/link';
import React from 'react';
import Logo from './Logo';

function NavBar() {
  const [fixedNav, setFixedNav] = React.useState<
    'relative' | 'sticky top-0 nav_animation'
  >('relative');

  React.useEffect(() => {
    addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setFixedNav('sticky top-0 nav_animation');
      } else {
        setFixedNav('relative');
      }
    });
  }, []);

  return (
    <nav
      className={` shadow-lg z-[1000] w-full   bg-transparent py-2 ${fixedNav} main-background  `}
    >
      <div className=" container flex items-center justify-between">
        <Link href={'/'}>
          <Logo />
        </Link>
        <div className="  items-center justify-evenly gap-10  hidden md:flex">
          {['Home', 'Tech Stack', 'Projects', 'Contact'].map((item) => {
            if (item === 'Home') {
              return (
                <Link key={item} href="/" className="nav-link">
                  {item}
                </Link>
              );
            } else {
              return (
                <Link
                  key={item}
                  href={`/#${item.split(' ')[0].toLowerCase()}`}
                  className="nav-link"
                >
                  {item}
                </Link>
              );
            }
          })}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
