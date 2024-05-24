import React from "react";
import PriorityCard from "./PriorityCard";
import NoteCard from "./NoteCard";

const UserHomePage = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <PriorityCard title="Tugas React" date="23/05/2024" />
        <PriorityCard title="Project Website" date="25/05/2024" />
      </div>
      <div className="bg-white shadow rounded p-4">
        <div className="text-lg font-bold mb-4">Seluruh Catatan</div>
        <NoteCard title="Project Website" date="25/05/2024" status="Sedang Berjalan" />
        <NoteCard title="Webinar UI/UX Design" date="28/05/2024" status="Belum Memulai" />
        <NoteCard title="Rapat Organisasi" date="30/05/2024" status="Belum Memulai" />
        <NoteCard title="Tugas Design" date="22/05/2024" status="Selesai" />
        <NoteCard title="Tugas React" date="23/05/2024" status="Sedang Berjalan" />
        <NoteCard title="Daftar Beasiswa" date="21/05/2024" status="Selesai" />
        <NoteCard title="Zoom Mentoring" date="24/05/2024" status="Selesai" />
      </div>
    </div>
  );
};

export default UserHomePage;
