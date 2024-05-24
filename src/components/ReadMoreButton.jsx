import React from "react";

const ReadMoreButton = () => {
  const handleReadMoreClick = () => {
    alert("Anda harus login atau daftar akun untuk membaca artikel ini.");
  };

  return (
    <button className="bg-blue-700 text-white rounded-lg py-2 px-4" onClick={handleReadMoreClick}>
      Baca Selanjutnya
    </button>
  );
};

export default ReadMoreButton;
