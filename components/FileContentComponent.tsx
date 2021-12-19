/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
import Prism from "prismjs";

interface FileContentComponentProps {
  filecontent: string;
}

export const FileContentComponent = ({
  filecontent,
}: FileContentComponentProps): JSX.Element => {
  const codeElement = useRef<HTMLElement>(null);
  useEffect(() => {
    if (codeElement.current) {
      Prism.highlightElement(codeElement.current);
    }
  });

  return (
    <div
      css={css`
        padding: 8px;
        background-color: #2d2d2d;
      `}
    >
      <pre>
        <code ref={codeElement} className={"lang-js"}>
          {filecontent}
        </code>
      </pre>
    </div>
  );
};
