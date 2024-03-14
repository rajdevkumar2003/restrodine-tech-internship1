"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ItemsTable = () => {
  const router = useRouter();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("api/get-items");
      const data = await response.json();
      setItems(data);
    };

    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`api/delete-item/${id}`, {
        method: "DELETE"
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        router.reload();
      }
    } catch (error) {
      console.log(error);
    }
     
  };

  return (
    <div className="w-full border-black border-1  shadow-md   mt-9">
      <div className="overflow-x-auto">
        <div className="flex flex-row bg-purple text-white">
          <div className="flex-grow border p-4">Category</div>
          <div className="flex-grow border p-4">Item Names</div>
          <div className="flex-grow border p-4">ETA</div>
        </div>

        {items.map((item, id) => (
          <div key={id} className="flex flex-row ">
            <div className="flex-grow border-gray border-b-2  w-full p-4 text-sm">
              {item.category}
            </div>
            <div className="flex-grow border-gray border-b-2 w-full p-4 text-sm">
              {item.itemName}
            </div>
            <div className="flex-grow flex gap-4 border-gray border-b-2 sm:pr-28  p-4 text-sm">
              {item.eta}

              <Image
                alt="delete"
                height={20}
                width={20}
                onClick={() => handleDelete(item._id)}
                className="cursor-pointer"
                src={"/assets/icons/bin.svg"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsTable;
