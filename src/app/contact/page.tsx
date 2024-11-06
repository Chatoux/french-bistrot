import Header from '../components/Header';

export default function Contact() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Your Message"></textarea>
          </div>
          <button className="bg-yellow-800 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-700">
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
}