"use client";
import { useEffect, useState } from "react";

export default function ProgressBar({ loading }: { loading: boolean }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (loading) {
            setProgress(0);
            timer = setInterval(() => {
                setProgress((prev) => {
                    if (prev < 90) return prev + 10; // fake loading
                    return prev;
                });
            }, 200);
        } else {
            setProgress(100);
            timer = setTimeout(() => setProgress(0), 500); // reset after complete
        }

        return () => clearInterval(timer);
    }, [loading]);

    return (
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-transparent">
            <div
                className="h-[3px] bg-red-500 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
