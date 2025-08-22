import React from 'react';
import styled from '@xstyled/styled-components';
import { RemoteCode } from './RemoteCode';

const CodeGenerationContainer = styled.div`
    position: relative; /* Allows absolute positioning of the gear */
    
  margin: 4 0;
  padding: 0 3;
  border: 1;
  border-color: layout-border;
  border-radius: base;
  background-color: background-light;

  .dark & {
    background-color: gray-800;
    border-color: gray-700;
  }

    summary::marker {
        content: "📄▶ "; /* Custom arrow character */
        //color: #007bff; /* Arrow color */
        //font-size: 1.2em; /* Arrow size */
    }

    /* Optional: Style when details is open */
    details[open] summary::marker {
        content: "📄▼ "; /* Different arrow when open */
    }
    
    > p {
      margin: 16px 0;
    }
    .gear {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 1.5em;
        color: #007bff;
        transition: transform 0.3s;
    }
    .gear:hover {
        transform: rotate(90deg); /* Rotates gear on hover for interactivity */
    }
`;

const CommandSection = styled.p`
  //margin-bottom: 3;
  //padding: 2 0;
  //background-color: primary-100;
  //border-radius: base;
  //font-weight: 500;
  //color: on-background-primary;
  //
  //.dark & {
  //  background-color: primary-900;
  //  color: primary-200;
  //}
`;

const SourceSection = styled.p`
  //margin-bottom: 2;
  //
  .codegeneration__source-header {
  //  margin-bottom: 2;
  //  font-weight: 600;
  //  color: on-background;
  //  font-size: 14;
  //  text-transform: uppercase;
  //  letter-spacing: 0.5px;
  //  
    &:before {
      content: "📝 ";
      margin-right: 1;
    }
  }
`;

const OutputSection = styled.p`
  //.codegeneration__output-header {
  //  margin-bottom: 2;
  //  font-weight: 600;
  //  color: on-background;
  //  font-size: 14;
  //  text-transform: uppercase;
  //  letter-spacing: 0.5px;
  //  
  //  &:before {
  //    content: "⚡ ";
  //    margin-right: 1;
  //  }
  //}
`;

const ArrowContainer = styled.p`
  //display: flex;
  //justify-content: center;
  //align-items: center;
  //margin: 2 0;
  //
  //.arrow {
  //  font-size: 24;
  //  color: primary-500;
  //
  //  .dark & {
  //    color: primary-400;
  //  }
  //}
`;

const AfterTextSection = styled.p`
  //margin-top: 3;
  //padding: 2 3;
  //font-style: italic;
  //color: on-background-light;
  //border-left: 3px solid primary-300;
  //padding-left: 3;
  //
  //.dark & {
  //  color: gray-400;
  //  border-left-color: primary-600;
  //}
`;

export const CodeGeneration = ({
  text1,
  sourceTitle,
  sourceUrl,
  sourceContent,
  sourceLanguage = 'text',
  sourceVisibleRange,
  text2,
  outputTitle,
  outputUrl,
  outputContent,
  outputLanguage = 'text',
  outputVisibleRange,
  text3
}) => {

  return (
    <CodeGenerationContainer className="codegeneration">
      <span className="gear">⚙️</span>

      {text1 && (
        <CommandSection className="codegeneration__command">
          {text1}
        </CommandSection>
      )}

      {(sourceUrl || sourceContent) && (
        <SourceSection className="codegeneration__source">
          <RemoteCode
            summary={sourceTitle}
            url={sourceUrl}
            content={sourceContent}
            language={sourceLanguage}
            visibleRange={sourceVisibleRange}
            collapsed={true}
            showLegend={sourceUrl != null}
          />
        </SourceSection>
      )}

      {text2}

      {(outputUrl || outputContent) && (
        <OutputSection className="codegeneration__output">
          <RemoteCode
            summary={outputTitle}
            url={outputUrl}
            content={outputContent}
            language={outputLanguage}
            visibleRange={outputVisibleRange}
            collapsed={true}
            showLegend={outputUrl != null}
          />
        </OutputSection>
      )}

      {text3 && (
        <AfterTextSection className="codegeneration__after-text">
          {text3}
        </AfterTextSection>
      )}
    </CodeGenerationContainer>
  );
};
