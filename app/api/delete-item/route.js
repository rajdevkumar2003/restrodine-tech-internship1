import Item from "@/database/models/item";
import { connectMongodb } from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function DELETE(req) {
    try {
        const id = req.nextUrl.searchParams.get("id");
        
        await connectMongodb();

        

        const item=await Item.findById(id);
        await Item.findByIdAndDelete(id);
        
    
        return NextResponse.json(item);
      } catch (error) {
        return NextResponse.json({ message: "An error occured." }, { status: 500 });
      }
}