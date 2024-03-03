"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IImage } from "@/types";

export default function Home() {
  const [data, setData] = useState<IImage[]>([]);

  // useEffect(() => {
  //   fetchImagesApi();
  // }, []);

  // const fetchImagesApi = async () => {
  //   try {
  //     const response = await fetch("/api");

  //     if (response) {
  //       const images = await response.json();
  //       setData(images);
  //     } else {
  //       console.error("Failed to fetch data");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  return (
    <main className="w-screen h-screen bg-red-300">
      {data.map((infoImg: IImage) => (
        <div key={infoImg.id}>
          <div>{infoImg.user.name}</div>
          <Image
            src={infoImg.urls.full}
            alt={infoImg.id.toString()}
            width={500}
            height={500}
          />
        </div>
      ))}
    </main>
  );
}
