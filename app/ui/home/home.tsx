import Image from "next/image";
import { IImage } from "@/types";

type Props = {
  data: IImage[];
};

export default function Home({ data }: Props) {
  return (
    <main className=" min-h-[90vh] px-5 -z-10">
      {data.map((infoImg: IImage) => (
        <div key={infoImg.id}>
          <div className="">
            <h2 className="uppercase font-bold text-3xl text-right group">
              {infoImg.user.name.split(" ")[0]}{" "}
              <span className="font-light text-sm hidden group-hover:block">
                {infoImg.user.name.split(" ").slice(1).join(" ")}
              </span>
            </h2>
          </div>
        </div>
      ))}

      <Image
        src={data[0].urls.full}
        alt={data[0].id.toString()}
        width={500}
        height={500}
        className="w-1/2 fixed bottom-5 left-5 -z-10"
      />
    </main>
  );
}
