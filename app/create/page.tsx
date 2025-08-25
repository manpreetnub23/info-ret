"use client";

import Navbar from "@/components/Navbar";
import ProfileForm from "@/components/ProfileForm";
// import { useState } from "react";

export default function CreateUserPage() {
    // const [success, setSuccess] = useState(false);

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <ProfileForm />
        </div>
    );
}
