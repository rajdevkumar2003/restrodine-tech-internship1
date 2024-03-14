import User from "@/database/models/user";
import { connectMongodb } from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
      await connectMongodb();
      const { email } = await req.json();
      const user = await User.findOne({ email }).select("_id");
      console.log("user: ", user);
      return NextResponse.json({ user });
    } catch (error) {
      console.log(error);
    }
  }