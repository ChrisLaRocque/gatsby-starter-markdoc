import React from "react";
import { graphql, Link } from "gatsby";
import type { PageProps, HeadProps } from "gatsby";
import "../styles/globals.css";
import { SideNav, TableOfContents, TopNav } from "components";

const TITLE = "Markdoc";
const DESCRIPTION = "A powerful, flexible, Markdown-based authoring framework";

function collectHeadings(node, sections = []) {
  if (node) {
    if (node.name === "Heading") {
      const title = node.children[0];

      if (typeof title === "string") {
        sections.push({
          ...node.attributes,
          title,
        });
      }
    }

    if (node.children) {
      for (const child of node.children) {
        collectHeadings(child, sections);
      }
    }
  }

  return sections;
}

export default function MarkdocPage({
  data,
  location,
}: PageProps<Queries.MarkdocPageQuery>) {
  const { markdoc } = data;

  let title = TITLE;
  let description = DESCRIPTION;
  if (markdoc?.frontmatter) {
    if (markdoc.frontmatter.title) {
      title = markdoc.frontmatter.title;
    }
    if (markdoc.frontmatter.description) {
      description = markdoc.frontmatter.description;
    }
  }

  // const toc = markdoc?.raw ? collectHeadings(markdoc.raw) : [];

  // TODO: copy _app.tsx behavior
  return (
    <>
      {" "}
      <TopNav>
        <Link to="/docs">Docs</Link>
      </TopNav>
      <div className="page">
        <SideNav />
        <main
          className="flex column"
          dangerouslySetInnerHTML={{ __html: markdoc.html }}
        ></main>
        {/* <TableOfContents toc={toc} /> */}
      </div>
      <style>
        {`
          .page {
            position: fixed;
            // top: var(--top-nav-height);
            top: 51px;
            display: flex;
            width: 100vw;
            flex-grow: 1;
          }
          main {
            overflow: auto;
            // height: calc(100vh - var(--top-nav-height));
            height: calc(100vh - 51px)
            flex-grow: 1;
            font-size: 16px;
            padding: 0 2rem 2rem;
          }
        `}
      </style>
    </>
  );
}
export function Head({ data }: HeadProps<Queries.MarkdocPageQuery>) {
  const { markdoc } = data;

  let title = TITLE;
  let description = DESCRIPTION;
  if (markdoc?.frontmatter) {
    if (markdoc.frontmatter.title) {
      title = markdoc.frontmatter.title;
    }
    if (markdoc.frontmatter.description) {
      description = markdoc.frontmatter.description;
    }
  }
  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="referrer" content="strict-origin" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}

export const query = graphql`
  query MarkdocPage($id: String) {
    markdoc(id: { eq: $id }) {
      html
      raw
      frontmatter {
        title
        description
      }
    }
  }
`;
