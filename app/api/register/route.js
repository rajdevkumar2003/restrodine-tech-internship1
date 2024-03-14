import User from "@/database/models/user";
import { connectMongodb } from "@/libs/mongodb";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword= await bcrypt.hash(password,10)
    console.log(hashedPassword);
    await connectMongodb();

    await User.create({name, email, password:hashedPassword});

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "An error occured." }, { status: 500 });
  }
}
