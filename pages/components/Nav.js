// components/Nav.js
import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          background: #333;
          padding: 1rem;
        }
        ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        li {
          margin-right: 1rem;
        }
        a {
          color: white;
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
}
