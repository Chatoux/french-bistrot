import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold"><Link href="/">French Bistrot</Link></h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/"><a className="hover:text-yellow-800">Home</a></Link></li>
            <li><Link href="/about"><a className="hover:text-yellow-800">About</a></Link></li>
            <li><Link href="/services"><a className="hover:text-yellow-800">Services</a></Link></li>
            <li><Link href="/contact"><a className="hover:text-yellow-800">Contact</a></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}