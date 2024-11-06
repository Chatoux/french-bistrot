import Header from '../components/Header';
import Image from 'next/image';

export default function Services() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <Image src="/services-dining.jpg" alt="Dining Services" width={600} height={400} className="mx-auto" />
        <p className="mt-4 text-gray-600">We offer a variety of services including private dining, catering, and special event hosting to make your experience memorable.</p>
      </main>
    </div>
  );
}