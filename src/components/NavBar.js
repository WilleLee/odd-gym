import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link className="anchor" href={"/"}>
        Home
      </Link>
      <Link href={"/about"}>About</Link>
    </nav>
  );
}
