// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Primary ="#074EE8";
const Secondary ="#07A4E8";
;

export function Button({Type}) {
    const backgroundColor = Type === 'Primary' ? Primary : Secondary;
    return (
        <button
        css={css`
          width:170px;
          height: 50px;
          border-radius: 4px;
          padding: 16px;
          background-color: ${backgroundColor};
          font-size: 1.125rem;
          text-align: center;
          color: #FFFFFF;
          border: none;
       `}
      >
        Button
      </button> 
    )
}

/* */