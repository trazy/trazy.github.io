import type { GetStaticProps, NextPage } from 'next';
import { identity, uniq } from 'ramda';
import { ListLayout } from '../components/layouts/ListLayout';
import { PostList } from '../components/PostList';
import { getAllPosts, PostItem } from '../utils/mdx.util';
import { create as createPost } from '../entities/Post.entity';
import { parseJSON } from 'date-fns';

interface HomeProps {
  posts: Array<PostItem>;
  tags: Array<string>;
}

const Home: NextPage<HomeProps> = ({ posts, tags }) => {
  return (
    <ListLayout>
      <main className="mt-12">
        <h2 className="text-xl font-bold text-center uppercase underline underline-offset-8 decoration-gray-400">
          <span className="">Recently Posts</span>
        </h2>
        <PostList posts={posts.map((post) => createPost({ ...post, datetime: parseJSON(post.datetime) }))} />
      </main>
    </ListLayout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllPosts(['slug', 'datetime', 'thumbnail', 'title', 'description', 'tags', 'content']);

  const tags = uniq(
    [...posts]
      .flatMap((e) => e.tags)
      .map((e) => e.trim().toLowerCase())
      .filter(identity)
  ).sort();

  return { props: { posts, tags } };
};
