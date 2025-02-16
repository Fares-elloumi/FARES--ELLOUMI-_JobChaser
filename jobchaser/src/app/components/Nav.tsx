"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="nav-list">
        {/* <li><Link href="/">Hem</Link></li> */}
        <li><Link href="/jobs">Jobb</Link></li>
        <li><Link href="/signin">Logga in</Link></li>
        <li><Link href="/signup">Registrera</Link></li>
      </ul>
    </nav>
  );
}