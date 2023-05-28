import FeaturedPosts from './components/home-page/featured-posts';
import Hero from './components/home-page/hero';

const TEMP_POSTS = [
  {
    title: 'Post 1',
    image: '1.jpg',
    excerpt: 'Post 1 description',
    date: '2023-02-10',
    slug: 'post_1',
  },
  {
    title: 'Post 2',
    image: '2.jpg',
    excerpt: 'Post 2 description',
    date: '2023-03-10',
    slug: 'post_2',
  },
  {
    title: 'Post 3',
    image: '3.jpeg',
    excerpt: 'Post 3 description',
    date: '2023-04-10',
    slug: 'post_3',
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={TEMP_POSTS} />
    </>
  );
}
