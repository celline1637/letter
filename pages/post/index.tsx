import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
};

const PostPage = () => {
  const [post, setPost] = useState<Post[]>();
  const getPosts = async () => {
    const posts = await axios('https://dummyjson.com/posts?limit=5');
    return posts.data.posts;
  };

  useEffect(() => {
    (async () => {
      const posts: Post[] = await getPosts();
      setPost(posts);
    })();
  }, []);

  return (
    <div>
      Post
      <ul>
        {post?.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/post/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostPage;
