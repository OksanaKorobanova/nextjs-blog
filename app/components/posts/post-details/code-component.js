'use client';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeComponent = ({ code, language }) => {
  return (
    <SyntaxHighlighter language={language} style={atomDark}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeComponent;
