import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export interface PostItem {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  datetime: string;
  tags: Array<string>;
  content: string;
}

type PostMatter = {
  data: {
    [key: string]: string;
  };
  content: string;
};

const POSTS_PATH = join(process.cwd(), 'posts');

const getPostFilePaths = () => fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path));

export const getPost = (slug: string): PostMatter => {
  const fullPath = join(POSTS_PATH, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { data, content };
};

export const getPostItems = (filePath: string, fields: string[] = []): PostItem => {
  const slug = filePath.replace(/\.mdx?$/, '');
  const { data, content } = getPost(slug);
  const nextData: Record<string, string> = { ...data, slug, content };

  // Ensure only the minimal needed data is exposed
  return fields.reduce<PostItem>((prev, field) => {
    if (!nextData[field]) {
      return prev;
    }
    return { ...prev, [field]: nextData[field] };
  }, {} as PostItem);
};

export function getAllPosts(fields: string[] = []): Array<PostItem> {
  const filePaths = getPostFilePaths();
  const posts = filePaths
    .map((filePath) => getPostItems(filePath, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.datetime > post2.datetime ? -1 : 1));
  return posts;
}
