// Workaround declarations to satisfy TypeScript/Next build checks
declare module "*app/blogs/*/page" {
  const Page: any;
  export default Page;
}

declare module "*app/blogs/*/page.js" {
  const Page: any;
  export default Page;
}

