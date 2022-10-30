import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <nav>
      <Link href={'/'}>HOME</Link>
      <Link href={'/post'}>POST</Link>
    </nav>
  );
};

export default Nav;
