'use client';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Image from 'next/image';
import PostHeader from './post-header';
import classes from './post-content.module.css';

const CodeComponent = (props) => {
  const { code, language } = props;
  return (
    <SyntaxHighlighter language={language} style={atomDark}>
      {code}
    </SyntaxHighlighter>
  );
};

function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];
        console.log(image);
        return (
          <div className={classes.image}>
            <Image
              className={classes.image}
              src={image.properties.src}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
      return <CodeComponent code={children} language={language} />;
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
