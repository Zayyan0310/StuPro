import React from "react";

const HeaderUser = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <input type="text" placeholder="Cari Catatan" className="border p-2 rounded" />
      <div className="flex items-center space-x-4">
        <div>Lidya Loga</div>
        <img src="path/to/profile.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  );
};

export default HeaderUser;
