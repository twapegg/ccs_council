import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      uNDer Construction! - stanley
      <Link href="/tracker" className="underline text-blue-600"> CCS student tracker </Link>
    </main>
  );
}
