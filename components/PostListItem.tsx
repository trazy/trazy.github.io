import React, { FunctionComponent } from 'react';
import { Post } from '../entities/Post.entity';
import Link from 'next/link';
import { CalendarCard } from './CalendarCard';

interface PostListItemProps {
  post: Post;
}

export const PostListItem: FunctionComponent<PostListItemProps> = ({ post }) => {
  const { slug, title, description, content, datetime, tags } = post;
  return (
    <article className="block overflow-hidden break-words px-16">
      <div className="flex gap-12">
        <div>
          <CalendarCard datetime={datetime} />
        </div>
        <div>
          <header className="pt-2">
            <h5 className="text-2xl font-bold">
              <Link href={`/posts/${slug}`} passHref>
                <a className="cursor-pointer">{title}</a>
              </Link>
            </h5>
          </header>
          {tags && tags.length && (
            <div className="pt-4">
              <ul className="flex gap-2">
                {tags.map((tag) => (
                  <li key={tag} className="text-sm text-gray-400 before:content-['#']">
                    <Link href={`/tag/${tag}`} passHref>
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="pt-4">
            <Link href={`/posts/${slug}`} passHref>
              <p className="line-clamp-6 cursor-pointer">{content}</p>
            </Link>
          </div>
          <div className="pt-4 h-12">
            <Link href={`/posts/${slug}`} passHref>
              <a className="py-2 px-4 text-baseline bg-rose-500 hover:bg-rose-800 transition-colors font-bold text-white uppercase cursor-pointer rounded">
                Read more
              </a>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
