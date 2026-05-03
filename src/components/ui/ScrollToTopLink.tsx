"use client";

import Link from "next/link";
import React from "react";

interface ScrollToTopLinkProps extends React.ComponentProps<typeof Link> {
  children: React.ReactNode;
}

export function ScrollToTopLink({ children, ...props }: ScrollToTopLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        if (window.location.pathname === "/") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        if (props.onClick) {
          props.onClick(e);
        }
      }}
    >
      {children}
    </Link>
  );
}
