import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

type PostProps = {
  params: { id: string };
};

const Post: NextPage<PostProps> = () => {
  const { query } = useRouter();
  const { id } = query;

  return (
    <div>
      <p>{id}</p>
    </div>
  );
};

export default Post;
