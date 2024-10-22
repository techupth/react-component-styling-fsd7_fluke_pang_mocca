/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// Start coding here

export default function Button({ type }) {
  if (type === "primary") {
    return (
      <button
        css={css`
          font-size: 1rem;
          font-weight: 400;
          color: white;
          width: 171px;
          height: 50px;
          padding-left: 1rem;
          padding-right: 1rem;
          border-radius: 6px;
          background-color: #074ee8;
          margin: 1px;
        `}>
        Button
      </button>
    );
  } else {
    return (
      <button
        css={css`
          font-size: 1rem;
          font-weight: 400;
          color: white;
          width: 171px;
          height: 50px;
          padding-left: 1rem;
          padding-right: 1rem;
          border-radius: 6px;
          background-color: #07a4e8;
          margin: 1px;
        `}>
        Button
      </button>
    );
  }
}
