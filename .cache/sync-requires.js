
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("C:\\FreelanceProjects\\DatoCMS-Test\\datocms-gatsby-blog\\src\\pages\\404.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\FreelanceProjects\\DatoCMS-Test\\datocms-gatsby-blog\\src\\pages\\index.js")),
  "component---src-pages-posts-dato-cms-post-slug-js": preferDefault(require("C:\\FreelanceProjects\\DatoCMS-Test\\datocms-gatsby-blog\\src\\pages\\posts\\{DatoCmsPost.slug}.js"))
}

