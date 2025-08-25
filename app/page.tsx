// "use client"
// import { useEffect, useState } from "react";
// import type { Profile } from "@/types/profile";
// import Navbar from "@/components/Navbar";
// import StackedCardCarousel from "@/components/StackedCardCarousel";

// export default function HomePage() {
//   const [profiles, setProfiles] = useState<Profile[]>([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetch("/api/profiles")
//       .then((res) => res.json())
//       .then(setProfiles)
//       .catch((err) => console.error(err));
//   }, []);

//   const filteredProfiles = profiles.filter((p) =>
//     [p.name, p.email, p.phone].some((field) =>
//       field?.toLowerCase().includes(search.toLowerCase())
//     )
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col">
//       <Navbar />

//       {/* Heading */}
//       <header className="text-center py-12 px-4 mt-20">
//         <h1 className="text-5xl font-extrabold mb-4 tracking-wide">Profile Cards</h1>
//         <p className="text-gray-400 text-lg mb-6">Browse and search all created profiles</p>

//         {/* Search Bar */}
//         <input
//           type="text"
//           placeholder="Search profiles..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full max-w-md bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
//         />
//       </header>

//       {/* Card Carousel */}
//       <main className="flex-1 flex justify-center items-start px-4 pb-12">
//         <StackedCardCarousel profiles={filteredProfiles} />
//       </main>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import type { Profile } from "@/types/profile";
import Navbar from "@/components/Navbar";
import StackedCardCarousel from "@/components/StackedCardCarousel";

export default function HomePage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/profiles")
      .then((res) => res.json())
      .then((data) => {
        // Ensure data is always an array
        if (Array.isArray(data)) setProfiles(data);
        else setProfiles([]);
      })
      .catch((err) => {
        console.error("Failed to fetch profiles:", err);
        setProfiles([]);
      });
  }, []);

  const filteredProfiles = Array.isArray(profiles)
    ? profiles.filter((p) =>
      [p.name, p.email, p.phone].some((field) =>
        field?.toLowerCase().includes(search.toLowerCase())
      )
    )
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col">
      <Navbar />

      {/* Heading */}
      <header className="text-center py-12 px-4 mt-20">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide">Profile Cards</h1>
        <p className="text-gray-400 text-lg mb-6">Browse and search all created profiles</p>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search profiles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </header>

      {/* Card Carousel */}
      <main className="flex-1 flex justify-center items-start px-4 pb-12">
        <StackedCardCarousel profiles={filteredProfiles} />
      </main>
    </div>
  );
}
