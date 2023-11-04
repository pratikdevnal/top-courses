"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { filterData } from "./data";
import { Filter } from "@/components/Filter";
import { Cards } from "@/components/Cards";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [category, setCategory] = useState(filterData[0].title);
  return (
    <div className="min-h-screen flex flex-col flex-wrap bg-slate-500">
      <Navbar />
      <Filter
        filterData={filterData}
        setCategory={setCategory}
        category={category}
      />
      <Cards category={category} />
    </div>
  );
}
