import React from 'react';

const NoteCard = ({ title, date, status }) => {
  const statusColor = status === 'Selesai' ? 'green' : status === 'Sedang Berjalan' ? 'yellow' : 'gray';

  return (
    <div className="flex justify-between p-4 border-b">
      <div>{title}</div>
      <div>{date}</div>
      <div className={`text-${statusColor}-500`}>{status}</div>
    </div>
  );
};

export default NoteCard;
