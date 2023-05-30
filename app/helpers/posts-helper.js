import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'posts');

export function getPostData(fileName) {
  const filePath = path.join(postsDir, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, ''); // remove file extension
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDir);

  const allPosts = posts
    .map((postFile) => getPostData(postFile))
    .sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  return allPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
