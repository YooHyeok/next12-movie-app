import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css"
export default function NavBar() {
  const router = useRouter();

  return <nav>
    <Link href="/">
      <a className={router.pathname === "/" ? "active" : ""}>Home</a>
    </Link>
    <Link href="/about">
      <a className={router.pathname === "/about" ? "active" : ""}>about</a>
    </Link>
    {/* <Link href="/">
      <a className={`${styles.link} ${router.pathname==="/" ? styles.active : ""}`}>Home</a>
    </Link>
    <Link href="/about">
      <a className={[styles.link, router.pathname==="/about" ? styles.active : ""].join(" ")}>about</a>
    </Link> */}
    <style jsx>{`
        nav {
          background-color: tomato;
        }
        a{
          text-decoration: none;
        }
        .active {
          color: yellow;
        }
    `}</style>
  </nav>
}