import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'posts');

export function getPostFiles() {
  return fs.readdirSync(postsDir);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ''); // remove file extension
  const filePath = path.join(postsDir, `${postSlug}.md`);
  console.log(filePath);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  console.log(fileContent);
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostFiles();
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedFiles = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return allPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
