import React from 'react';
import { Great_Wall, Terracotta_Army, Forbidden_City, Chinese_Food } from '../components/ChinaComponents';

const Index = () => {
  return (
    <div className="min-h-screen bg-red-50 text-gray-800 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-800 mb-4">Discover China</h1>
        <p className="text-xl">Experience the wonders of an ancient civilization</p>
      </header>
      
      <main className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Welcome to China</h2>
          <p className="mb-4">
            China, the world's most populous country, boasts a history spanning thousands of years. 
            From the Great Wall to the Forbidden City, ancient traditions to modern marvels, 
            China offers a unique blend of the old and the new.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Great_Wall />
          <Terracotta_Army />
          <Forbidden_City />
          <Chinese_Food />
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Plan Your Journey</h2>
          <p className="mb-4">
            Ready to explore the wonders of China? Start planning your unforgettable adventure today!
          </p>
          <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
            Learn More
          </button>
        </section>
      </main>
    </div>
  );
};

export default Index;
