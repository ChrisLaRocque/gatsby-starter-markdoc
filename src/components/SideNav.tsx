import React from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";
import { Link } from "gatsby";

const items = [
  {
    title: "Get started",
    links: [{ to: "/docs", children: "Overview" }],
  },
];

export function SideNav() {
  return (
    <nav className="sidenav">
      {items.map((item) => (
        <div key={item.title}>
          <span>{item.title}</span>
          <ul className="flex column">
            {item.links.map((link) => {
              return (
                <li key={link.to}>
                  <Link {...link} activeClassName="active">
                    {link.children}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <style>
        {`
          nav {
            position: sticky;
            // top: var(--top-nav-height);
            top: 51px;
            // height: calc(100vh - var(--top-nav-height));
            height: calc(100vh - 51px)
            flex: 0 0 auto;
            overflow-y: auto;
            padding: 2.5rem 2rem 2rem;
            // border-right: 1px solid var(--border-color);
            border-right: 1px solid black;
          }
          span {
            font-size: larger;
            font-weight: 500;
            padding: 0.5rem 0 0.5rem;
          }
          ul {
            padding: 0;
          }
          li {
            list-style: none;
            margin: 0;
          }
          li a {
            text-decoration: none;
          }
          li a:hover {
            text-decoration: underline;
          }
          .active {
            text-decoration: underline;
          }
        `}
      </style>
    </nav>
  );
}
