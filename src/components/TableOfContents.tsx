import React from "react";
import { Link } from "gatsby";

export function TableOfContents({ toc }) {
  const items = toc.filter(
    (item) => item.id && (item.level === 2 || item.level === 3)
  );

  if (items.length <= 1) {
    return null;
  }

  return (
    <nav className="toc">
      <ul className="flex column">
        {items.map((item) => {
          const to = `#${item.to}`;
          return (
            <li
              key={item.title}
              className={[item.level === 3 ? "padded" : undefined]
                .filter(Boolean)
                .join(" ")}
            >
              <Link to={to} activeClassName="active">
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <style>
        {`
          nav {
            position: sticky;
            // top: calc(2.5rem + var(--top-nav-height));
            top: calc(2.5rem + 51px);
            // max-height: calc(100vh - var(--top-nav-height));
            max-height: calc(100vh - 51px);
            flex: 0 0 auto;
            align-self: flex-start;
            margin-bottom: 1rem;
            padding: 0.5rem 0 0;
            // border-left: 1px solid var(--border-color);
            border-left: 1px solid black;
          }
          ul {
            margin: 0;
            padding: 0 1.5rem;
          }
          li {
            list-style-type: none;
            margin: 0 0 1rem;
          }
          li a {
            text-decoration: none;
          }
          li a:hover {
            text-decoration: underline;
          }
          li.padded {
            padding-left: 1rem;
          }
          .active {
            text-decoration: underline;
          }
        `}
      </style>
    </nav>
  );
}
