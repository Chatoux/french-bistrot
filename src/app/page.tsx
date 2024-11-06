import Header from './components/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Header />
      <section className="hero bg-center bg-cover h-96 relative text-center flex items-center justify-center bg-fixed" style={{ backgroundImage: 'url(/hero-bistro.jpg)' }}>
        <div className="bg-black bg-opacity-50 p-8 rounded shadow-lg">
          <h1 className="text-4xl text-white font-bold">Welcome to French Bistrot</h1>
          <p className="text-white mt-4">Exquisite French dining in the heart of the city.</p>
          <Link href="/contact">
            <a className="mt-6 inline-block bg-yellow-800 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-700">Book Now</a>
          </Link>
        </div>
      </section>
      <section className="p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <Image src="/about-bistro.jpg" alt="French Bistrot dining experience" width={600} height={400} className="mx-auto" />
        <p className="mt-4 text-gray-600">Discover the authentic flavors of France with our carefully curated menu.</p>
      </section>
    </div>
  );
}