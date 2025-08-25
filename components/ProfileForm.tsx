"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ProfileForm() {
	const [form, setForm] = useState({ name: "", email: "", phone: "" });
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);
		setError(null);

		try {
			const res = await fetch("/api/profiles", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});

			if (!res.ok) throw new Error((await res.json()).error || "Failed to create");

			setForm({ name: "", email: "", phone: "" });
			toast.success("Profile created successfully!");
		} catch (err: unknown) {
			setError(err instanceof Error ? err.message : "Something went wrong");
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="flex items-center justify-center min-h-screen px-4">
			<Toaster position="top-right" reverseOrder={false} />
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-md bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8 shadow-2xl flex flex-col gap-6 animate-pulse"
				style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
			>
				<h2 className="text-4xl font-extrabold text-white text-center mb-4 tracking-wide">
					Create Profile
				</h2>
				<p className="text-gray-400 text-center mb-6 text-sm">
					Enter your details below to get started
				</p>

				<div className="flex flex-col gap-4">
					<input
						value={form.name}
						onChange={(e) => setForm({ ...form, name: e.target.value })}
						placeholder="Full Name"
						required
						className="bg-black text-white px-4 py-3 border border-gray-700 outline-none text-sm"
					/>
					<input
						value={form.email}
						onChange={(e) => setForm({ ...form, email: e.target.value })}
						placeholder="Email"
						type="email"
						required
						className="bg-black text-white px-4 py-3 border border-gray-700 outline-none text-sm"
					/>
					<input
						value={form.phone}
						onChange={(e) => setForm({ ...form, phone: e.target.value })}
						placeholder="Phone"
						required
						className="bg-black text-white px-4 py-3 border border-gray-700 outline-none text-sm"
					/>
				</div>

				{error && <p className="text-red-500 text-sm text-center">{error}</p>}

				<button
					type="submit"
					disabled={loading}
					className="relative overflow-hidden bg-red-600 px-6 py-3 text-white font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:brightness-110"
				>
					{loading ? "Adding…" : "Add Profile"}
				</button>
			</form>
		</div>
	);
}
