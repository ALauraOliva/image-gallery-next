"use client";
import Image from "next/image";
import { IImage } from "@/types";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ViewFullImg from "../viewFullImg/viewFullImg";

type Props = {
  data: IImage[];
};

export default function Home({ data }: Props) {
  const container = useRef<HTMLInputElement | null>(null);
  const [currentImg, setCurrentImg] = useState(data[0]);
  const [showFullImg, setShowFullImg] = useState(false);
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
  const viewFullImgAnimation = () => {
    if (!showFullImg) {
      //show full img
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.7 },
      });

      tl.to(["#autorName, img"], {
        y: "-101%",
        onComplete: () => {
          setShowFullImg(!showFullImg);
        },
      });
    } else {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.7 },
      });

      tl.to("#fullImg, #description, #author", {
        x: "-101%",
        onComplete: () => {
          setShowFullImg(!showFullImg);
          tl.to(["#autorName, img"], { y: 0 });
        },
      });
    }
  };

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
    <section className="h-[90vh]" ref={container}>
      <div className="flex flex-col items-end">
        {data.map((infoImg: IImage) => (
          <button
            key={infoImg.id}
            onClick={changeImg}
            value={infoImg.id}
            className="overflow-hidden"
          >
            <h2
              id="autorName"
              className="uppercase font-bold text-3xl group text-right hidden md:text-4xl "
            >
              {infoImg.user.first_name}
              <span className="font-light text-sm hidden group-hover:block text-right">
                {infoImg.user.last_name}
              </span>
            </h2>
          </button>
        ))}
      </div>

      <div
        className="overflow-hidden w-3/5 h-1/2 fixed bottom-5 left-5 max-h-[80vh] before:content-['Click_Me'] before:absolute
      before:bottom-0 before:z-10 before:text-neutral-100 before:left-1 cursor-pointer"
        onClick={viewFullImgAnimation}
      >
        <Image
          src={currentImg.urls.full}
          alt={currentImg.id.toString()}
          className="hidden object-cover"
          onLoad={contextSafe(() => {
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
          })}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
          fill
          priority
        />
      </div>

      {showFullImg && (
        <ViewFullImg
          currentImg={currentImg}
          viewFullImgAnimation={viewFullImgAnimation}
        />
      )}
    </section>
  );
}
