// pages/posts/[id].js

import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export async function getStaticPaths() {
  // Fetch the list of posts or the IDs you want to pre-render
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const posts = res.data;

  const paths = posts.map(post => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  // Fetch data for a single post
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = res.data;

  return {
    props: {
      post,
    },
  };
}

export default Post;
