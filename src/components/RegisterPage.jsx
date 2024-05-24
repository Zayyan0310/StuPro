import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Proses pendaftaran
    alert(`User ${username} terdaftar dengan email ${email}`);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold mb-4">Daftar</h2>
        <p className="mb-8">Masukkan detail data anda</p>
        <div className="w-3/4">
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Nama Pengguna</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700">Kata Sandi</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded" />
            <span className="absolute top-2 right-2 cursor-pointer">👁</span>
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700">Konfirmasi Kata Sandi</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full p-2 border rounded" />
            <span className="absolute top-2 right-2 cursor-pointer">👁</span>
          </div>
          <button onClick={handleRegister} className="w-full bg-blue-600 text-white p-2 rounded">
            Daftar
          </button>
        </div>
      </div>
      <div className="w-1/2 bg-blue-600 flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold">Selamat Datang di STUPRO</h1>
        <p className="mt-4">Masuk untuk mengakses akun Anda</p>
        <div className="mt-auto mb-20">
          <img src="path/to/logo.png" alt="Student Productivity Logo" className="w-64 h-64" />
        </div>
      </div>
    </div>
  );
};

export default Register;
