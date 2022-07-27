export interface Post {
  title: Readonly<string>;
  description: Readonly<string>;
  slug: Readonly<string>;
  datetime: Readonly<Date>;
  content: Readonly<string>;
  tags: Readonly<Array<string>>;
}

export const create = ({ title, description, slug, datetime, content, tags }: Post) => ({
  title: String(title),
  description: String(description),
  slug: String(slug),
  datetime: new Date(datetime),
  content: String(content),
  tags: tags.map((tag) => String(tag)),
});
