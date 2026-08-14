import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Student Portal</h1>

      <Link href="/about">About</Link>
      <br />

      <Link href="/contact">Contact</Link>
      <br />

      <Link href="/service">Service</Link>
      <br />

      <Link href="/product">Product</Link>
      <br />

      <Link href="/product/101">Product 101</Link>
      <br />

      <Link href="/product/mobile/samsung">Samsung</Link>
    </>
  );
}