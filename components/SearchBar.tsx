"use client";

interface Props {
	value: string;
	onChange: (val: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
	return (
		<input
			type="text"
			placeholder="Search profiles..."
			value={value}
			onChange={(e) => onChange(e.target.value)}
			className="w-full p-2 mb-4 rounded bg-black text-white border border-gray-700 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500"
		/>
	);
}
