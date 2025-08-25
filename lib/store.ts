// import { nanoid } from "nanoid";
// import { z } from "zod";
// import type { Profile } from "@/types/profile";

// // In-memory data
// const profiles: Profile[] = [];

// export const ProfileSchema = z.object({
// 	name: z.string().trim().min(1, "Name is required"),
// 	email: z.string().trim().email("Invalid email"),
// 	phone: z.string().trim().min(5, "Phone is required"),
// });

// function generateAvatar(): string {
// 	const seed = nanoid(); // random seed for avatar
// 	return `https://api.dicebear.com/6.x/thumbs/png?seed=${seed}&size=64`;
// }

// export function listProfiles(): Profile[] {
// 	return [...profiles].sort((a, b) => b.createdAt - a.createdAt);
// }

// export function createProfile(input: z.infer<typeof ProfileSchema>): Profile {
// 	const parsed = ProfileSchema.parse(input);
// 	const profile: Profile = {
// 		id: nanoid(),
// 		createdAt: Date.now(),
// 		avatar: generateAvatar(), // assign random avatar
// 		...parsed,
// 	};
// 	profiles.push(profile);
// 	return profile;
// }

// another commented

// import { z } from "zod";
// import fs from "fs";
// import path from "path";
// import { nanoid } from "nanoid";
// import type { Profile } from "@/types/profile";

// const filePath = path.join(process.cwd(), "data", "profiles.json");

// const ProfileSchema = z.object({
// 	name: z.string().min(1),
// 	email: z.string().email(),
// 	phone: z.string().min(5),
// });

// function readProfiles(): Profile[] {
// 	try {
// 		const data = fs.readFileSync(filePath, "utf-8");
// 		return JSON.parse(data);
// 	} catch {
// 		return [];
// 	}
// }

// function writeProfiles(profiles: Profile[]) {
// 	fs.writeFileSync(filePath, JSON.stringify(profiles, null, 2));
// }

// export function listProfiles(): Profile[] {
// 	return readProfiles().sort((a, b) => b.createdAt - a.createdAt);
// }

// function generateAvatar(): string {
// 	const seed = nanoid();
// 	return `https://api.dicebear.com/6.x/thumbs/png?seed=${seed}&size=64`;
// }

// export function createProfile(input: z.infer<typeof ProfileSchema>): Profile {
// 	const parsed = ProfileSchema.parse(input);
// 	const profile: Profile = {
// 		id: nanoid(),
// 		createdAt: Date.now(),
// 		avatar: generateAvatar(),
// 		...parsed,
// 	};
// 	const allProfiles = readProfiles();
// 	allProfiles.push(profile);
// 	writeProfiles(allProfiles);
// 	return profile;
// }

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function listProfiles() {
	const { data, error } = await supabase.from("profiles").select("*");
	if (error) throw new Error(error.message);
	return data;
}

export async function createProfile(profile: {
	name: string;
	email: string;
	phone: string;
}) {
	const { data, error } = await supabase
		.from("profiles")
		.insert([profile])
		.select()
		.single();
	if (error) throw new Error(error.message);
	return data;
}
