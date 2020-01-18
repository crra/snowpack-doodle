import React from "react";
import { Link, useRoute } from "wouter/preact/index";

export default props => {
  const [isActive] = useRoute(props.href);
  return (
    <Link {...props}>
      <a className={isActive ? "active" : ""}>{props.children}</a>
    </Link>
  );
};
