import React from "react";
import { Link, useRoute } from "wouter/preact";

export default props => {
  const [isActive] = useRoute(props.href);
  return (
    <Link {...props}>
      <a className={isActive ? "active" : ""}>{props.children}</a>
    </Link>
  );
};
