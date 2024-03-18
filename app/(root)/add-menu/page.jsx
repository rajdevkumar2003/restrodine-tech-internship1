"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const page = () => {
  

    const router=useRouter();

  const [category, setCategory] = useState("");
  const [itemName, setItemName] = useState("");
  const [eta, setEta] = useState(0);
  const [errorTxt, seterrorTxt] = useState("");

  

  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log(category,itemName,eta);
    if(!category || !itemName){
        seterrorTxt("all fields are required")
    }

    try {
        const res = await fetch("api/add-item", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              category,
              itemName,
              eta,
            }),
          });
    
          if (res.ok) {
            toast(`${itemName} added`);
            const form = e.target;
            form.reset();
            
            
          } else {
            toast(`Please fill all the feilds.`)
            console.log("Item saving failed.");
          }

          router.push("/dashboard");
          
    } catch (error) {
        
    }
  };
  return (
    <div className="px-6 py-4 flex flex-col   max-md:text-center  overscroll-none ">
      <h1 className=" text-[22px] ml-3 text-purple ">
        Menu Details
      </h1>
      <div
        className="flex 
       min-h-screen w-[80vw]
       items-center 
       justify-center mt-[-50px]"
      >
        <div className="rounded-md bg-gray-50 h-[580px] max-md:h-[500px] justify-self-center max-md:mx-auto max-md:w-[320px] w-[394px] px-8 py-4 flex flex-col border-black border-1 shadow-md">
          <h1 className="font-medium text-center py-3 text-[25px] ml-3 text-purple ">
            Add Your Menu
          </h1>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg pt-10 mx-auto"
          >
            <div className="mb-8">
              <label
                htmlFor="category"
                className="block text-md text-purple font-bold mb-2"
              >
                Select Category
              </label>
              <select
                id="category"
                name="category"
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
                className="w-full border outline-none border-gray-300 rounded p-2"
              >
                <option value="">Select...</option>
                <option value="Nonveg">Nonveg</option>
                <option value="Veg">Veg</option>
                <option value="Starter">Starter</option>
              </select>
            </div>
            <div className="mb-8">
              <label
                htmlFor="itemName"
                className="block text-md text-purple font-bold mb-2"
              >
                Item Name
              </label>
              <input
                type="text"
                id="itemName"
                name="itemName"
                value={itemName}
                onChange={(e)=>setItemName(e.target.value)}
                className="w-full border outline-none border-gray-300 rounded p-2"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="ETA"
                className="block text-md text-purple font-bold mb-2"
              >
                ETA
              </label>
              <input
                type="number"
                id="eta"
                name="eta"
                value={eta}
                onChange={(e)=>setEta(e.target.value)}
                className="w-full outline-none border border-gray-300 rounded p-2"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-purple mt-3 text-white font-bold py-2 px-4 rounded"
              >
                Save
              </button>
            </div>
            {errorTxt && (
              <p className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {errorTxt}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
