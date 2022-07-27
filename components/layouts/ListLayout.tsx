import React, { FunctionComponent, ReactNode } from 'react';
import { Nav } from '../Nav';
import { siteMetadata } from '../../variables/siteMetadata';
import { Seo } from '../Seo';
import { Footer } from '../Footer';

interface ListLayoutProps {
  children: ReactNode;
}

export const ListLayout: FunctionComponent<ListLayoutProps> = ({ children }) => {
  const { title, description } = siteMetadata;
  return (
    <>
      <Seo />
      <div className="relative w-full min-h-full bg-gray-200">
        <Nav title={title} description={description} />
        <div className="relative container md:px-32 mx-auto mt-20">
          <div className="w-full bg-white p-6 drop-shadow-xl">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};
