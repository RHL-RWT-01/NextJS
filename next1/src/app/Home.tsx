import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>Welcome to Next.js!</h1>
      </header>
      <main>
        <p>This is a simple home component in Next.js.</p>
        <Image src="/next-logo.png" alt="Next.js Logo" width={200} height={200} />
      </main>
      <footer>
        <p>&copy; 2025 Your Company</p>
      </footer>
    </div>
  );
}