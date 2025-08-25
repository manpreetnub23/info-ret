import { NextResponse } from "next/server";
import { createProfile, listProfiles } from "@/lib/store";

export async function GET() {
	try {
		const profiles = listProfiles();
		return NextResponse.json(profiles);
	} catch (err: unknown) {
		let message = "Invalid payload";
		if (err instanceof Error) message = err.message;

		return NextResponse.json({ error: message }, { status: 400 });
	}
}

export async function POST(request: Request) {
	try {
		const body = await request.json();
		// Validation already done in createProfile
		const profile = createProfile(body);
		return NextResponse.json(profile, { status: 201 });
	} catch (err: unknown) {
		let message = "Invalid payload";
		if (err instanceof Error) message = err.message;

		return NextResponse.json({ error: message }, { status: 400 });
	}
}
