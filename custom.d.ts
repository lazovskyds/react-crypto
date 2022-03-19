// allows asing  .svg
declare module '*.svg' {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const content: any;
   export default content;
}

// allows using .ttf
declare module '*.ttf';
