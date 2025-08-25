import { NextResponse } from "next/server";
import { createProfile, listProfiles } from "@/lib/store";

export async function GET() {
	try {
		const profiles = listProfiles();
		return NextResponse.json(profiles);
	} catch (err: any) {
		return NextResponse.json(
			{ error: err?.message || "Failed to list profiles" },
			{ status: 500 }
		);
	}
}

export async function POST(request: Request) {
	try {
		const body = await request.json();
		// Validation already done in createProfile
		const profile = createProfile(body);
		return NextResponse.json(profile, { status: 201 });
	} catch (err: any) {
		return NextResponse.json(
			{ error: err?.message || "Invalid payload" },
			{ status: 400 }
		);
	}
}
