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

      tl.set(["#description, #author"], {
        x: "-100%",
        display: "block",
      }).to(["#description, #author"], { x: 0 });
    },
    { scope: containerViewFull }
  );
  return (
    <div
      ref={containerViewFull}
      className="w-full h-full bg-[#F2E7D5] absolute top-0 left-0 flex flex-col justify-center items-center lg:flex-row lg:px-5 lg:gap-[5vw]"
    >
      <button
        onClick={viewFullImgAnimation}
        className="absolute top-0 h-[10vh] w-full z-10 tracking-tighter md:text-3xl"
      >
        CLOSE.
      </button>
      <div className="overflow-hidden w-[90vw] h-[65vh] relative mt-[10vh] md:w-[80vw] lg:w-[47.5vw-5rem] lg:ml-20">
        <Image
          id="fullImg"
          src={currentImg.urls.regular}
          alt={currentImg.id.toString()}
          className="object-contain invisible"
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 40vw"
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
      <div className="h-[15vh] w-[90vw] mt-5 md:w-[80vw] lg:w-[47.5vw-5rem] lg:mr-20 lg:h-fit overflow-y-scroll">
        <div className="overflow-x-hidden">
          <p id="description" className="md:text-2xl italic">
            <span className="not-italic font-semibold">
              {currentImg.user.name}
            </span>
            {" - " +
              (!currentImg.description
                ? currentImg.alt_description.charAt(0).toUpperCase() +
                  currentImg.alt_description.slice(1)
                : currentImg.description)}
          </p>
        </div>
      </div>
    </div>
  );
}
