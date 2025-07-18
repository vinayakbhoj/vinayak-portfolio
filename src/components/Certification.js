import React from 'react';
import { FiDownload, FiAward } from 'react-icons/fi';

const Certification = () => (
  <section id="certification" className="section-padding">
    <div className="container-custom">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Certification
        </h2>
      </div>
      <div className="max-w-xl mx-auto">
        <div className="glass-effect p-8 rounded-xl shadow-lg flex flex-col items-center">
          <div className="flex items-center mb-4">
            <FiAward className="w-8 h-8 text-blue-500 mr-3" />
            <h3 className="text-2xl font-semibold">Apna College - Delta Batch Student</h3>
          </div>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Full Stack Development Track</p>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
            Successfully completed the Delta Batch (Full Stack Development Track) at Apna College.
          </p>
          <a
            href="/delta-certificate.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            <FiDownload className="w-5 h-5" />
            Download Certificate
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Certification; 