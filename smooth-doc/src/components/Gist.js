import React, { useRef, useEffect } from 'react';
import { marginLeft } from '@xstyled/styled-components'

const Gist = ({ gist, file }) => {
  const iframeRef = useRef(null);

  const fetchGistContent = async () => {
    const url = file
      ? `https://gist.githubusercontent.com/${gist}/raw/${file}`
      : `https://gist.githubusercontent.com/${gist}/raw`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const text = await response.text();
        const lineCount = text.split('\n').length;
        const lineHeight = 22; // Approximate line height in pixels
        const height = lineCount * lineHeight + 40;
        if (iframeRef.current) {
          iframeRef.current.style.height = `${height}px`;
        }
      } else {
        console.error('Failed to fetch Gist content');
      }
    } catch (error) {
      console.error('Error fetching Gist content:', error);
    }
  };

  useEffect(() => {
    fetchGistContent();
  }, [gist, file]);

  const src = file
    ? `https://gist.github.com/${gist}.pibb?file=${file}`
    : `https://gist.github.com/${gist}.pibb`;

  const gistUrl = file
    ? `https://gist.github.com/${gist}#file-${file.replace(/\./g, '-').toLowerCase()}`
    : `https://gist.github.com/${gist}`;

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px 0 0 0', borderRadius: '5px' }}>
      {file && (
        <header style={{ marginLeft: '10px', fontStyle: 'oblique' }}>
          <span role="img" aria-label="source code">🗒️</span>
          <a href={gistUrl} target="_blank" rel="noopener noreferrer">
            {file}
          </a>
        </header>
      )}
      <iframe
        title={file}
        ref={iframeRef}
        src={src}
        width="100%"
        frameBorder="0"
        style={{ margin: '0', padding: '0' }}
      ></iframe>
    </div>
  );
};

export { Gist };
