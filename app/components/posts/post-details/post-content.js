import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import classes from './post-content.module.css';

const TEMP_DATA = {
  title: 'Post 1',
  image: '1.jpg',
  date: '2023-02-10',
  slug: 'post_1',
  content: '# This is some post',
};

function PostContent() {
  const imagePath = `/images/posts/${TEMP_DATA.slug}/${TEMP_DATA.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={TEMP_DATA.title} image={imagePath} />
      <ReactMarkdown>{TEMP_DATA.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
