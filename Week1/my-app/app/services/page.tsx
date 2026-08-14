import Link from "next/link";

export default function Product() {
  return (
    <div>
      <h1>Products</h1>

      <Link href="/product/101">Product 101</Link>
      <br />

      <Link href="/product/202">Product 202</Link>
      <br />

      <Link href="/product/mobile/samsung">
        Samsung Mobile
      </Link>
    </div>
  );
}