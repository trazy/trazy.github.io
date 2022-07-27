import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import { siteMetadata } from '../variables/siteMetadata';

export interface SeoProps {
  currentUrl?: string;
  title?: string;
  description?: string;
  keywords?: Array<string>;
}

const { siteUrl, title: defaultTitle, description: defaultDescription, keywords: defaultKeywords, author } = siteMetadata;

export const Seo: FunctionComponent<SeoProps> = ({
  currentUrl = siteUrl,
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
}) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="author" content={author.name} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:locale" content="ko_KR" />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
