import FeaturedPosts from './components/home-page/featured-posts';
import Hero from './components/home-page/hero';
import { getFeaturedPosts } from './helpers/posts-helper';

function Home() {
  const featuredPosts = getFeaturedPosts();
  return (
    <>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  );
}

// This is not needed cause I use App Router
// export function getStaticProps() {
//   const featuredPosts = getFeaturedPosts();

//   return {
//     props: {
//       featuredPosts,
//     },
//   };
// }

export default Home;
