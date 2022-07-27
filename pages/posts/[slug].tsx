import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import React, { FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import { NormalComponents } from 'react-markdown/lib/complex-types';
import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';

import { PostLayout } from '../../components/layouts/PostLayout';
import { PostListItem } from '../../components/PostListItem';
import { getAllPosts, getPost, PostItem } from '../../utils/mdx.util';
import { create as createPost, Post } from '../../entities/Post.entity';
import { isAfter, isBefore, parseJSON } from 'date-fns';
import { Maybe } from 'purify-ts';
import { take } from 'ramda';
import Fuse from 'fuse.js';

const reactMarkdownComponents: Partial<Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents> = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter {...props} style={vscDarkPlus} language={match[1]} PreTag="div" showLineNumbers>
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code {...props} className={className}>
        {children}
      </code>
    );
  },
};

interface PostPageProps {
  content: string;
  slug: string;
  frontMatter: PostItem;
  relatedByTags: Array<PostItem>;
  associatedPosts: Array<PostItem>;
}

const PostPage: FunctionComponent<PostPageProps> = ({ content, frontMatter, associatedPosts, relatedByTags, slug }) => {
  return (
    <PostLayout frontMatter={{ ...frontMatter, slug }}>
      <div className="w-full bg-white p-6 drop-shadow-xl">
        <main className="mt-12 px-12">
          <article className="max-w-full prose prose-gray">
            <header>
              <h1 className="text-3xl font-bold">{frontMatter.title}</h1>
              {frontMatter.description && <p>{frontMatter.description}</p>}
            </header>
            <hr />
            <div className="">
              <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]} components={reactMarkdownComponents}>
                {content}
              </ReactMarkdown>
            </div>
          </article>
        </main>
      </div>
      {((Array.isArray(associatedPosts) && associatedPosts.length > 0) || (Array.isArray(relatedByTags) && relatedByTags.length > 0)) && (
        <div className="w-full bg-white p-6 py-32 drop-shadow-xl mt-32 flex flex-col gap-32">
          {Maybe.fromPredicate((associatedPosts) => Array.isArray(associatedPosts) && associatedPosts.length > 0, associatedPosts)
            .map((associatedPosts) => (
              <div className="flex flex-col gap-12 items-center" key="associated-posts">
                <h4 className="text-xl font-bold text-center uppercase underline underline-offset-8 decoration-gray-400">
                  Associated Posts
                </h4>
                {associatedPosts.map((post) => (
                  <PostListItem key={`associated-posts-${post.slug}`} post={createPost({ ...post, datetime: parseJSON(post.datetime) })} />
                ))}
              </div>
            ))
            .orDefault(<></>)}
          {Maybe.fromPredicate((relatedByTags) => Array.isArray(relatedByTags) && relatedByTags.length > 0, relatedByTags)
            .map((relatedByTags) => (
              <div className="flex flex-col gap-12 items-center" key="related-posts">
                <h4 className="text-xl font-bold text-center uppercase underline underline-offset-8 decoration-gray-400">Related Posts</h4>
                {relatedByTags.map((post) => (
                  <PostListItem key={`related-posts-${post.slug}`} post={createPost({ ...post, datetime: parseJSON(post.datetime) })} />
                ))}
              </div>
            ))
            .orDefault(<></>)}
        </div>
      )}
    </PostLayout>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps = async ({ params }) =>
  Maybe.fromNullable(params)
    .chain(({ slug }) => Maybe.fromFalsy(slug))
    .map((slug) => {
      const postItems = getAllPosts(['slug', 'datetime', 'thumbnail', 'title', 'description', 'tags', 'content']);
      const { content, data: frontMatter } = getPost(slug as string);
      const found = postItems.find((post) => post.slug === slug) as PostItem;

      const options = {
        // isCaseSensitive: false,
        // includeScore: false,
        // shouldSort: true,
        // includeMatches: false,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
        threshold: 0.25,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        // fieldNormWeight: 1,
        keys: ['title'],
      };

      const fuse = new Fuse(
        postItems.filter((v) => v !== found),
        options
      );

      const associatedPosts = take(3)(
        fuse
          .search(found.title)
          .map(({ item }) => item)
          .sort((a, b) => {
            const x = parseJSON(a.datetime),
              y = parseJSON(b.datetime);
            return isAfter(x, y) ? -1 : isBefore(x, y) ? 1 : 0;
          })
      );
      const relatedByTags = take(3)(
        postItems
          .filter((v) => v !== found)
          .filter(({ tags }) => tags.some((tag) => found.tags.includes(tag)))
          .sort((a, b) => {
            const x = parseJSON(a.datetime),
              y = parseJSON(b.datetime);
            return isAfter(x, y) ? -1 : isBefore(x, y) ? 1 : 0;
          })
      );

      return {
        props: {
          slug,
          content,
          frontMatter,
          associatedPosts,
          relatedByTags,
        },
      };
    })
    .orDefault({
      props: {
        slug: '',
        content: '',
        frontMatter: {},
        associatedPosts: [],
        relatedByTags: [],
      },
    });

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts(['slug', 'datetime', 'thumbnail', 'title', 'description', 'tags', 'content']);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
