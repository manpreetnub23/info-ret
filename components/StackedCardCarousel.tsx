"use client";

import { Profile } from "@/types/profile";

interface Props {
    profiles: Profile[];
}

export default function ResponsiveCardCarousel({ profiles }: Props) {
    if (!profiles || profiles.length === 0) {
        return <p className="text-gray-400 text-center mt-6">No profiles found.</p>;
    }

    return (
        <div className="w-full px-4 py-8">
            {/* --- Desktop Grid (3x3) --- */}
            <div
                className={`hidden md:grid max-w-6xl h-96 mx-auto gap-6 ${profiles.length === 1 ? "justify-center" : ""
                    } grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`}
                style={profiles.length === 1 ? { justifyContent: "center" } : {}}
            >
                {profiles.map((profile) => (
                    <div
                        key={profile.id}
                        className="p-8 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-xl flex flex-col gap-4 items-center text-white transform transition-transform hover:scale-105"
                    >
                        <img
                            src={profile.avatar}
                            alt={profile.name}
                            className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-2 border-red-500"
                        />
                        <h2 className="text-2xl font-extrabold text-center">{profile.name}</h2>

                        {profile.email && (
                            <p className="text-gray-300 text-base text-center">
                                Email: <span className="font-semibold text-white">{profile.email}</span>
                            </p>
                        )}
                        {profile.phone && (
                            <p className="text-gray-300 text-base text-center">
                                Phone: <span className="font-semibold text-white">{profile.phone}</span>
                            </p>
                        )}
                        <p className="text-center w-full mt-2">
                            😼
                        </p>
                    </div>
                ))}
            </div>


            {/* --- Mobile Swipeable Carousel --- */}
            <div
                className={`h-96 flex md:hidden gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory no-scrollbar scroll-smooth touch-pan-x px-4 ${profiles.length === 1 ? "justify-center" : ""
                    }`}
                style={{ WebkitOverflowScrolling: "touch" }}
            >
                {profiles.map((profile) => (
                    <div
                        key={profile.id}
                        className="flex-shrink-0 snap-center min-w-[320px] sm:min-w-[380px] p-8 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-xl flex flex-col gap-4 items-center text-white transform transition-transform hover:scale-105"
                    >
                        <img
                            src={profile.avatar}
                            alt={profile.name}
                            className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-2 border-red-500"
                        />
                        <h2 className="text-2xl font-extrabold text-center">{profile.name}</h2>

                        {profile.email && (
                            <p className="text-gray-300 text-base text-center">
                                Email: <span className="font-semibold text-white">{profile.email}</span>
                            </p>
                        )}
                        {profile.phone && (
                            <p className="text-gray-300 text-base text-center">
                                Phone: <span className="font-semibold text-white">{profile.phone}</span>
                            </p>
                        )}

                        <p className="text-center w-full mt-2 font-extrabold">
                            <br />😼
                        </p>
                    </div>
                ))}
            </div>

        </div>
    );
}
