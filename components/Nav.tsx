import React, { FunctionComponent } from 'react';
import Link from 'next/link';

interface NavProps {
  title: string;
  description: string;
}

export const Nav: FunctionComponent<NavProps> = ({ title, description }) => (
  <>
    <div className="absolute bg-rose-700 w-full h-80 top-0 left-0"></div>
    <nav className="relative container mx-auto h-20 text-white flex items-center px-4 md:px-36 text-left md:text-center">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl cursor-pointer">
          <Link href={`/`} passHref>
            {title}
          </Link>
        </h1>
        <p className="mt-4 text-sm">{description}</p>
      </div>
      <div className="grow">
        <ul className="flex justify-end gap-8 uppercase font-extrabold">
          <li>
            <Link href={`/`} passHref>
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </>
);
