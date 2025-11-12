import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

declare module 'react/jsx-runtime' {
  export const jsx: typeof React.createElement;
  export const jsxs: typeof React.createElement;
  export const Fragment: any;
}