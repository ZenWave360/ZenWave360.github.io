import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Code } from './Code';
import styled from '@xstyled/styled-components';

const StyledDetails = styled.details`
  display: inline-block;
  margin-right: 20px;
  transition: width 0.3s ease;
  
  &[open] {
    width: 100%;
    display: block;
  }
`;

// RemoteCode component to display pre-fetched content or fetch dynamically in dev mode
export const RemoteCode = ({ url, language = 'text', content = '', visibleRange, showLegend = true, summary, collapsed = false }) => {
  const [dynamicContent, setDynamicContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Transform GitHub URL for fetching if needed
  const transformGitHubUrl = (inputUrl) => {
    if (!inputUrl) return inputUrl; // Handle undefined/null URLs
    
    const githubBlobRegex = /^https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/(.+)$/
    const match = inputUrl.match(githubBlobRegex)

    if (match) {
      const [, user, repo, branch, filePath] = match
      console.log(`Transforming GitHub URL: ${inputUrl} to ${user}/${repo}/refs/heads/${branch}/${filePath}`)
      return `https://raw.githubusercontent.com/${user}/${repo}/refs/heads/${branch}/${filePath}`
    }

    return inputUrl
  }

  // Query for pre-fetched remote content
  const data = useStaticQuery(graphql`
    query RemoteCodeContentQuery {
      allRemoteCodeContent {
        nodes {
          url
          originalUrl
          sourceUrl
          language
          visibleRange
          content
          cacheKey
        }
      }
    }
  `);

  // Find pre-fetched content that matches current props
  const fetchUrl = transformGitHubUrl(url)
  const cacheKey = `${fetchUrl || ''}:${visibleRange || 'full'}`;
  const preFetchedContent = data.allRemoteCodeContent.nodes.find(
    node => node.cacheKey === cacheKey
  );

  // In development mode, fetch content dynamically if no pre-fetched content is available
  useEffect(() => {
    if (!preFetchedContent && !content && process.env.NODE_ENV === 'development') {
      const fetchContent = async () => {
        try {
          setLoading(true);
          const fetchUrl = transformGitHubUrl(url);
          const response = await fetch(fetchUrl);
          let text = await response.text();

          // Apply visibleRange if provided (format: "start,end" with 1-based indexing)
          if (visibleRange) {
            const lines = text.split('\n');
            const [start, end] = visibleRange.split(',').map(num => parseInt(num.trim(), 10));
            // Convert from 1-based to 0-based indexing for array slicing
            const startIndex = Math.max(0, start - 1);
            const endIndex = Math.min(lines.length, end);
            text = lines.slice(startIndex, endIndex).join('\n');
          }

          setDynamicContent(text);
          setLoading(false);
        } catch (err) {
          setError(`Failed to fetch content (${url}): ${err.message}`);
          console.log(`Failed to fetch content (${url}): ${err.message}`);
          console.error(err);
          setLoading(false);
        }
      };
      fetchContent();
    }
  }, [url, content, visibleRange, preFetchedContent]);

  if (loading) return <pre>Loading...</pre>;
  if (error) return <pre>{error}</pre>;

  // Priority: explicit content prop > pre-fetched content > dynamically fetched content
  const displayContent = content || (preFetchedContent?.content) || dynamicContent;

  // Create source URL for "View Source" link
  const createSourceUrl = () => {
    if (preFetchedContent?.sourceUrl) {
      return preFetchedContent.sourceUrl;
    }

    // For dynamic content, create GitHub source URL if it's a GitHub URL
    const githubBlobRegex = /^https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/(.+)$/;
    if (githubBlobRegex.test(url)) {
      if (visibleRange) {
        const [start, end] = visibleRange.split(',').map(num => parseInt(num.trim(), 10));
        return `${url}#L${start}-L${end}`;
      }
      return url;
    }

    return url;
  };

  const sourceUrl = createSourceUrl();

  return (
    <div className="remote-code">
      <StyledDetails open={!collapsed}>
        {summary && <summary style={{ cursor: 'pointer' }}>{summary} <span className="summary_expand_handler">(👇 view source)</span></summary>}
        <div>
          <Code lang={language}>
            {typeof displayContent === 'object' ? JSON.stringify(displayContent, null, 2) : displayContent}
          </Code>
        </div>
      </StyledDetails>
      {showLegend && (
        <span style={{ fontSize: '0.8em' }}>
          🔗<a href={sourceUrl} target="_blank">
            Navigate to source
          </a>
        </span>
      )}
    </div>
  );
};

