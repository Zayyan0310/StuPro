import React from "react";

const SidebarUser = () => {
  return (
    <div className="bg-blue-600 text-white w-64 h-screen p-4">
      <div className="text-2xl font-bold mb-10">STUDENT PRODUCTIVITY</div>
      <div className="space-y-4">
        <div>Beranda</div>
        <div>Catatan</div>
        <div>Kalender</div>
        <div className="mt-auto">Keluar</div>
      </div>
    </div>
  );
};

export default SidebarUser;
