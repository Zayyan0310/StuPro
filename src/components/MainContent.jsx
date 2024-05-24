import React from "react";
import ReadMoreButton from "./ReadMoreButton";

const MainContent = () => {
  return (
    <div className="flex flex-col flex-grow p-8">
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg p-6 mb-8">
        <h2 className="text-3xl font-bold mb-2">Harap Masuk Terlebih Dahulu</h2>
        <p className="text-lg">Mari mulai produktivitasmu</p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-center">Artikel Seputar Produktivitas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="src/assets/Artikel1.png" alt="Article 1" className="w-full h-40 object-cover rounded-md mb-4" />
            <h4 className="text-lg font-bold mb-2">Apa itu Produktivitas?</h4>
            <p className="text-gray-700 mb-4">Produktivitas adalah kemampuan setiap individu, sistem, ataupun perusahaan untuk menghasilkan apa yang mereka inginkan dengan menggunakan sumber daya secara efektif dan efisien.</p>
            <ReadMoreButton />
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="src/assets/Artikel2.png" alt="Article 2" className="w-full h-40 object-cover rounded-md mb-4" />
            <h4 className="text-lg font-bold mb-2">Seberapa penting Produktivitas itu?</h4>
            <p className="text-gray-700 mb-4">Produktivitas merupakan hal yang penting untuk membuat suatu organisasi atau individu menjadi lebih efisien, efektif, dan berkualitas.</p>
            <ReadMoreButton />
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="src/assets/Artikel3.png" alt="Article 3" className="w-full h-40 object-cover rounded-md mb-4" />
            <h4 className="text-lg font-bold mb-2">Bagaimana cara meningkatkan Produktivitas?</h4>
            <ul className="text-gray-700 mb-4">
              <li>1. Mengatur waktu dengan baik</li>
              <li>2. Membuat rencana dan jadwal</li>
              <li>3. Menemukan "Golden Moments"</li>
              <li>4. Jangan menunda pekerjaan</li>
            </ul>
            <ReadMoreButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
