'use client'

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

/* FONT */
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

type RegisterFormData = {
  fullName: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export default function RegisterForm() {
  const router = useRouter();

  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.repeatPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || 'Registration failed');
        return;
      }

      // ✅ Redirect after successful registration
      router.push('/dashboard');
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <main className={`min-h-screen flex bg-black ${poppins.className}`}>

      {/* LEFT — FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
        <div className="w-full max-w-90">

          <h1 className="text-4xl font-semibold text-white mb-3">
            Register
          </h1>

          <p className="text-gray-400 text-sm leading-relaxed mb-10">
            A good design is not only aesthetically pleasing, but also functional.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 bg-[#1a1a1a] rounded-lg text-gray-300 text-sm placeholder:text-gray-500 focus:bg-[#252525] outline-none transition-colors"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 bg-[#1a1a1a] rounded-lg text-gray-300 text-sm placeholder:text-gray-500 focus:bg-[#252525] outline-none transition-colors"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 bg-[#1a1a1a] rounded-lg text-gray-300 text-sm placeholder:text-gray-500 focus:bg-[#252525] outline-none transition-colors"
            />

            <input
              type="password"
              name="repeatPassword"
              placeholder="Repeat Password"
              value={formData.repeatPassword}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 bg-[#1a1a1a] rounded-lg text-gray-300 text-sm placeholder:text-gray-500 focus:bg-[#252525] outline-none transition-colors"
            />

            <button
              type="submit"
              className="
                w-40 py-4
                bg-linear-to-r from-pink-500 to-purple-500
                rounded-lg text-white text-sm font-medium
                hover:opacity-90 transition cursor-pointer
              "
            >
              Signup Now
            </button>
          </form>

          {/* OAUTH BUTTONS (UI only for now) */}
          <div className="mt-10 flex gap-4">
            <button
              type="button"
              className="flex-1 flex cursor-pointer items-center gap-4 px-4 py-4 bg-[#1a1a1a] rounded-xl text-white hover:bg-[#252525]"
            >
              <Image src="/icons/google.png" alt="Google" width={24} height={24} />
              <div className="text-left">
                <span className="text-xs text-gray-400">Register with</span>
                <div className="text-sm font-medium">Google</div>
              </div>
            </button>

            <button
              type="button"
              className="flex-1 flex cursor-pointer items-center gap-4 px-4 py-4 bg-[#1a1a1a] rounded-xl text-white hover:bg-[#252525]"
            >
              <Image src="/icons/twitterr.png" alt="Twitter" width={24} height={24} />
              <div className="text-left">
                <span className="text-xs text-gray-400">Register with</span>
                <div className="text-sm font-medium">Twitter</div>
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* RIGHT — IMAGE */}
      <div className="hidden lg:flex w-1/2 items-center justify-center">
        <Image
          src="/icons/Group 265.svg"
          alt="Register illustration"
          width={520}
          height={520}
          priority
        />
      </div>

    </main>
  );
}
