import PostContent from '@/app/components/posts/post-details/post-content';
import { getPostData, getPostFiles } from '@/app/helpers/posts-helper';

function PostPage({ params }) {
  const { slug } = params;
  const postData = getPostData(slug);
  return <PostContent post={postData} />;
}

// generateStaticParams replaces the getStaticPaths function in the Pages Router.
export function generateStaticParams() {
  const postFileNames = getPostFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));

  return slugs.map((slug) => ({
    slug,
  }));
}

export default PostPage;
