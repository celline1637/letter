import axios from 'axios';
import Link from 'next/link';
import React, { use } from 'react';

const getPosts = async () => {
  const posts = await axios('https://dummyjson.com/posts?limit=5');
  return posts.data.posts;
};

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
};

const PostPage = () => {
  const posts: Post[] = use(getPosts());
  console.log(posts); // server
  return (
    <div>
      Post
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/post/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostPage;
