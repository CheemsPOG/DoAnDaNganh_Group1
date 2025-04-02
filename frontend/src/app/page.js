import Image from "next/image";
import Link from 'next/link';

// Code for Main Page with 2 button

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">Home Page</h1>
      <div className="space-y-4">
        <Link href="/temp">
          <a className="block">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Go to Temp Page
            </button>
          </a>
        </Link>
        <Link href="/light">
          <a className="block">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
              Go to Light Page
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}


