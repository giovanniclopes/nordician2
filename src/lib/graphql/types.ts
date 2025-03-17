export interface Asset {
  id: string;
  url: string;
}

export interface Author {
  id: string;
  name: string;
  avatar: Asset;
  posts: Post[];
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  coverPhoto: Asset;
  content: {
    html: string;
    raw: any;
  };
  datePublished: string;
  author: Author;
  tags: string[];
}
