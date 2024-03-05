import { IImage } from "@/types";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type Props = {
  currentImg: IImage;
  viewFullImgAnimation: () => void;
};

export default function ViewFullImg({
  currentImg,
  viewFullImgAnimation,
}: Props) {
  const containerViewFull = useRef<HTMLInputElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.7 },
      });

      tl.set(["#fullImg, #description, #author"], {
        x: "-100%",
        display: "block",
      }).to(["#fullImg, #description, #author"], { x: 0 });
    },
    { scope: containerViewFull }
  );

  return (
    <div
      ref={containerViewFull}
      className="w-full h-full bg-[#F2E7D5] absolute top-0 left-0 flex flex-col justify-center items-center "
    >
      <button
        onClick={viewFullImgAnimation}
        className="absolute top-0 h-[10vh] w-full z-10"
      >
        Close
      </button>
      <div className="overflow-hidden w-[90vw] h-[78vh] relative mt-[10vh]">
        <Image
          id="fullImg"
          src={currentImg.urls.full}
          alt={currentImg.id.toString()}
          className="object-contain"
          sizes="(max-width: 1200px) 90vw"
          fill
        />
      </div>
      <div className="h-[12vh] w-[90vw]">
        <div className="overflow-hidden h-1/4">
          <h3 id="author">
            <span className="font-bold ">AUTHOR : </span>
            {currentImg.user.name}
          </h3>
        </div>
        <div className="overflow-x-hidden overflow-y-scroll h-1/2">
          <p id="description" className="">
            <span className="font-bold ">DESCRIPTION : </span>
            {!currentImg.description
              ? currentImg.alt_description.charAt(0).toUpperCase() +
                currentImg.alt_description.slice(1)
              : currentImg.description}
          </p>
        </div>
      </div>
    </div>
  );
}
