"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ProfileForm from "@/components/ProfileForm";

function SkeletonForm() {
    return (
        <div className="flex justify-center px-4">
            <div className="w-full max-w-lg mt-28 p-8 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-xl animate-pulse">
                {/* Title */}
                <div className="h-8 w-48 bg-gray-700 rounded mb-8" />

                {/* Input fields */}
                <div className="space-y-5">
                    <div className="h-12 w-full bg-gray-700 rounded" />
                    <div className="h-12 w-full bg-gray-700 rounded" />
                    <div className="h-12 w-full bg-gray-700 rounded" />
                    <div className="h-12 w-full bg-gray-700 rounded" />
                </div>

                {/* Submit button */}
                <div className="h-12 w-full bg-gray-700 rounded mt-8" />
            </div>
        </div>
    );
}

export default function CreateUserPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800); // 🔥 artificial delay
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar loading={loading} />

            {/* Skeleton OR Real Form */}
            {loading ? <SkeletonForm /> : <ProfileForm />}
        </div>
    );
}
