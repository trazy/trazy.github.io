import React, { FunctionComponent, ReactNode } from 'react';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
import { Seo } from '../Seo';
import { siteMetadata } from '../../variables/siteMetadata';
import { PostItem } from '../../utils/mdx.util';
import { Maybe } from 'purify-ts';

interface PostLayout {
  children: ReactNode;
  frontMatter?: PostItem;
}

export const PostLayout: FunctionComponent<PostLayout> = ({ children, frontMatter }) => {
  const { siteUrl, title, description } = siteMetadata;
  return (
    <>
      {Maybe.fromNullable(frontMatter)
        .map((frontMatter) => (
          <Seo
            key={`seo-in-post-layout`}
            currentUrl={`${siteUrl}/posts/${frontMatter.slug}`}
            title={frontMatter.title}
            description={frontMatter.description}
            keywords={frontMatter.tags}
          />
        ))
        .orDefault(<Seo />)}

      <div className="relative w-full min-h-full bg-gray-200">
        <Nav title={title} description={description} />
        <div className="relative container px-32 mx-auto mt-20">{children}</div>
        <Footer />
      </div>
    </>
  );
};
