'use client';
import { motion } from 'framer-motion';
import type { Profile } from '@/types/profile';
import Image from "next/image"

type Props = {
    profile: Profile;
};

export default function ProfileCard({ profile }: Props) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
        >
            <div className="flex items-center gap-3">
                <Image
                    src={profile.avatar}
                    alt={`${profile.name} avatar`}
                    className="h-12 w-12 rounded-full border border-gray-200"
                />
                <div>
                    <h3 className="text-base font-semibold tracking-tight">{profile.name}</h3>
                    <p className="text-sm text-gray-600">{profile.email}</p>
                    <p className="text-sm text-gray-600">{profile.phone}</p>
                </div>
            </div>
            <div className="mt-3 text-xs text-gray-400">
                Added {new Date(profile.createdAt).toLocaleString()}
            </div>
        </motion.div>
    );
}
