"use client";
import Image from "next/image";
import { IImage } from "@/types";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  data: IImage[];
};

export default function Home({ data }: Props) {
  const container = useRef<HTMLInputElement | null>(null);
  const [currentImg, setCurrentImg] = useState(data[0]);
  const { contextSafe } = useGSAP({ scope: container });
  const changeImg = contextSafe(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const imgSelected = data.find(
        (filterImg) => filterImg.id === event.currentTarget.value
      );

      if (imgSelected && imgSelected.id !== currentImg.id) {
        gsap.to("img", {
          delay: 0,
          y: "102%",
          ease: "power2.out",
          duration: 0.7,
          onComplete: () => {
            if (imgSelected) {
              setCurrentImg(imgSelected);
            }
          },
        });
      } else if (imgSelected) {
        setCurrentImg(imgSelected);
      }
    }
  );

  const apperAnimation = contextSafe(() => {
    gsap.fromTo(
      "img",
      {
        delay: 0,
        y: "-100%",
        ease: "power2.out",
        duration: 0.7,
      },
      {
        delay: 0,
        y: 0,
        ease: "power2.out",
        duration: 0.7,
      }
    );
  });

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.7 },
      });

      tl.set(["#autorName, img"], { y: "-100%", display: "block" }).to(
        ["#autorName, img"],
        { y: 0 }
      );
    },
    { scope: container }
  );

  return (
    <main className="min-h-[90vh]" ref={container}>
      {data.map((infoImg: IImage) => (
        <div key={infoImg.id} className="text-right">
          <button
            onClick={changeImg}
            value={infoImg.id}
            className="overflow-hidden"
          >
            <h2
              id="autorName"
              className="uppercase font-bold text-3xl group hidden"
            >
              {infoImg.user.name.split(" ")[0]}
              <span className="font-light text-sm hidden group-hover:block text-right">
                {infoImg.user.name.split(" ").slice(1).join(" ")}
              </span>
            </h2>
          </button>
        </div>
      ))}

      <div className="overflow-hidden w-3/5 fixed bottom-5 left-5 -z-10">
        <Image
          src={currentImg.urls.full}
          alt={currentImg.id.toString()}
          width={1000}
          height={1000}
          className="hidden"
          onLoad={apperAnimation}
          priority
        />
      </div>
    </main>
  );
}
