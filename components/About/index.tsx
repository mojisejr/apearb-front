import { FunctionComponent, PropsWithChildren } from "react";
import Image from "next/image";

const AboutBox: FunctionComponent<PropsWithChildren> = () => {
  return (
    <div className="flex justify-center w-full items-center gap-2 text-pepe_white pb-[10%]">
      <div className="flex items-center gap-10">
        <div className="">
          <Image
            src="/images/peperight.png"
            width={450}
            height={450}
            alt="pepe-right"
          />
        </div>
        <div className="max-w-[500px]">
          <div className="text-[60px] mb-10">ABOUT</div>
          <p className="text-[20px]">
            Pepekrub feels sorry for all the Kubers who have never returned to
            their original place since many projects are collapsed. It is time
            for all the Kubbers to wake up again with the power of the world of
            memes.
          </p>
          <p className="text-[20px] mt-10">
            Pepekrub is the hope of quality memes. We are not just memes. We
            constantly move forward and develop. We will make the Kubs great
            again
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
