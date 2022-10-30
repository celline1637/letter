import { NextPage } from 'next';
import React from 'react';

type PostProps = {
  params: { id: string };
};

const Post: NextPage<PostProps> = ({ params }: PostProps) => {
  const { id } = params;
  return (
    <div>
      <p>{id}</p>
    </div>
  );
};

export default Post;
