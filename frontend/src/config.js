// Constants.js
const production = { url: "https://server.kindsettle.com" };
const development = { url: "http://localhost:8080" };
console.log("NODE_ENV: ", process.env.NODE_ENV);
export const config =
  process.env.NODE_ENV === "development" ? development : production;
