import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const alements = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));
  return <nav>{alements}</nav>;
}

export default NavBar;