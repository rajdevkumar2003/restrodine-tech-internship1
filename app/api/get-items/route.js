import Item from "@/database/models/item";
import { connectMongodb } from "@/libs/mongodb";
import { NextResponse } from "next/server";


export async function GET(req) {
  try {
    
    await connectMongodb();

    const items = await Item.find({});

    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json({ message: "An error occured." }, { status: 500 });
  }
}