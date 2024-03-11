import { IImage } from "@/app/lib/types";
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

  const { contextSafe } = useGSAP({ scope: containerViewFull });
  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.7 },
      });

      tl.set(["#description, #author, #closeBtn"], {
        x: "-100%",
        display: "block",
      }).to(["#description, #author, #closeBtn"], { x: 0 });
    },
    { scope: containerViewFull }
  );
  return (
    <section
      ref={containerViewFull}
      className="absolute top-0 left-0 z-20 w-full h-full bg-[#F2E7D5] grid grid-cols-2  grid-rows-[min-content]"
    >
      {/* Close Button */}
      <div className="row-start-1 col-span-2 col-start-1 w-fit mx-auto overflow-x-auto h-[5vh] flex items-center md:text-2xl">
        <button
          id="closeBtn"
          onClick={viewFullImgAnimation}
          className="tracking-tighter font-semibold hover:text-[#6D9886]"
        >
          - CLOSE -
        </button>
      </div>

      {/* Full Img container */}
      <div className="row-start-2 col-start-1 col-span-2 relative h-[80vh] w-[90vw] mx-auto overflow-x-hidden md:w-[60vw]">
        <Image
          id="fullImg"
          src={currentImg.urls.regular}
          alt={currentImg.id.toString()}
          className="object-contain invisible"
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 60vw"
          onLoad={contextSafe(() => {
            const tl = gsap.timeline({
              defaults: { ease: "power2.out", duration: 0.7 },
            });

            tl.set(["#fullImg"], {
              x: "-100%",
              visibility: "visible",
            }).to(["#fullImg"], { x: 0 });
          })}
          fill
        />
      </div>

      {/* Description container */}
      <div className="row-start-3 col-span-2 col-start-1 h-[10vh] mx-auto overflow-x-hidden overflow-y-scroll w-[90vw] md:w-[60vw]">
        <p id="description" className="md:text-2xl italic text-center px-5">
          <span className="not-italic font-semibold">
            {currentImg.user.name}
            <br />
          </span>
          {!currentImg.description
            ? currentImg.alt_description.charAt(0).toUpperCase() +
              currentImg.alt_description.slice(1)
            : currentImg.description}
        </p>
      </div>
    </section>
  );
}
