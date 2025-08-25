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

function SkeletonCard() {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-xl flex flex-col gap-4 items-center text-white animate-pulse">
      <div className="w-16 h-16 rounded-full bg-gray-700" />
      <div className="w-32 h-6 bg-gray-700 rounded" />
      <div className="w-40 h-4 bg-gray-700 rounded" />
      <div className="w-36 h-4 bg-gray-700 rounded" />
      <div className="w-8 h-8 bg-gray-700 rounded-full" />
    </div>
  );
}

export default function HomePage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      fetch("/api/profiles")
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) setProfiles(data);
          else setProfiles([]);
        })
        .catch(() => setProfiles([]))
        .finally(() => setLoading(false));
    }, 600); // 🔥 artificial delay

    return () => clearTimeout(timer);
  }, []);

  const filteredProfiles = profiles.filter((p) =>
    [p.name, p.email, p.phone].some((field) =>
      field?.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col">
      <Navbar loading={loading} />

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

      {/* Main Section */}
      <main className="flex-1 w-full px-4 pb-12 flex justify-center items-start">
        {loading ? (
          // 🔥 Skeleton Cards shown instead of actual profiles
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <StackedCardCarousel profiles={filteredProfiles} />
        )}
      </main>
    </div>
  );
}
