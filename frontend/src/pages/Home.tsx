import { Navbar } from '../components/Navbar';
export const Home = () => (
  <div>
    <Navbar />
    <main className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h1 className="text-4xl font-bold mb-4 text-blue-900">Welcome to Federated Health SaaS</h1>
      <p className="max-w-xl text-lg text-gray-600 mb-8">Privacy-first cloud platform for federated, personalized healthcare machine learning.</p>
      <a href="/register" className="px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition">Get Started</a>
    </main>
  </div>
);