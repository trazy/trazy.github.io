import React, { FunctionComponent } from 'react';
import { Post } from '../entities/Post.entity';
import { PostListItem } from './PostListItem';

interface PostListProps {
  posts: Array<Post>;
}

export const PostList: FunctionComponent<PostListProps> = ({ posts }) => {
  return (
    <div className="py-12 flex flex-col gap-24">
      {posts.map((post) => (
        <PostListItem key={post.slug} post={post} />
      ))}
    </div>
  );
};
