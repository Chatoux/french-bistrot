import Header from '../components/Header';
import Image from 'next/image';

export default function About() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
        <Image src="/about-chef.jpg" alt="Our Chef" width={600} height={400} className="mx-auto" />
        <p className="mt-4 text-gray-600">At French Bistrot, our chefs craft traditional French dishes with locally sourced ingredients, bringing an authentic touch to every meal.</p>
      </main>
    </div>
  );
}