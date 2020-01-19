import React from "react";
import ActiveLink from "../Atoms/ActiveLink";

export default () => (
  <ul>
    <li>
      <ActiveLink href="/">Home</ActiveLink>
    </li>
    <li>
      <ActiveLink href="/about">About</ActiveLink>
    </li>
    <li>
      <ActiveLink href="/404">Invalid link</ActiveLink>
    </li>
  </ul>
);
