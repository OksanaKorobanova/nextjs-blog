import AllPosts from '../components/posts/all-posts';
import { getAllPosts } from '../helpers/posts-helper';

export const metadata = {
  title: 'All posts page',
  description: 'Here is a list of all posts',
};

function AllPostsPage() {
  const allPosts = getAllPosts();
  return <AllPosts posts={allPosts} />;
}

// This is not needed cause I use App Router
// export function getStaticProps() {
//   const allPosts = getAllPosts();

//   return {
//     props: {
//       posts: allPosts,
//     },
//   };
// }

export default AllPostsPage;
