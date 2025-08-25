import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient"; // apna Supabase client
import { nanoid } from "nanoid";

function generateAvatar(): string {
	return `https://api.dicebear.com/6.x/thumbs/png?seed=${nanoid()}&size=64`;
}

export async function GET() {
	try {
		const { data, error } = await supabase.from("profiles").select("*");
		if (error) throw error;

		return NextResponse.json(data);
	} catch (err: unknown) {
		let message = "Failed to fetch profiles";
		if (err instanceof Error) message = err.message;
		return NextResponse.json({ error: message }, { status: 400 });
	}
}

export async function POST(request: Request) {
	try {
		const body = await request.json();

		// avatar generate kar do
		const avatar = generateAvatar();

		const { data, error } = await supabase
			.from("profiles")
			.insert([{ ...body, avatar }])
			.select();

		if (error) throw error;

		return NextResponse.json(data[0], { status: 201 });
	} catch (err: unknown) {
		let message = "Failed to create profile";
		if (err instanceof Error) message = err.message;
		return NextResponse.json({ error: message }, { status: 400 });
	}
}
