import Item from "@/database/models/item";
import { connectMongodb } from "@/libs/mongodb";
import { NextResponse } from "next/server";


export async function POST(req) {
  try {
    const { category, itemName, eta } = await req.json();
    
    await connectMongodb();

    await Item.create({category, itemName,eta});

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "An error occured." }, { status: 500 });
  }
}