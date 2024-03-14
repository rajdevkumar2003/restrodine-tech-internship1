import Item from "@/database/models/item";
import { connectMongodb } from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function DELETE(req) {
    try {
        const { id } = req.query;
        
        await connectMongodb();
    
        await Item.deleteOne({_id:ObjectId(id)});
    
        return NextResponse.json({ message: "Item deleted." }, { status: 201 });
      } catch (error) {
        return NextResponse.json({ message: "An error occured." }, { status: 500 });
      }
}