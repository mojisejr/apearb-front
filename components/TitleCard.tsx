import Image from "next/image";
import { useAccount } from "wagmi";

const TitleCard = () => {
  const { isConnected } = useAccount();
  return (
    <div
      id="card-wrapper"
      className="relative flex bg-gradient-to-br from-[#160340] from-20% via-[#2E008F] to-[#4200CF] shadow-md rounded-2xl p-10"
    >
      <div id="content-text" className="flex flex-col justify-center">
        <div id="content-text-title" className="flex flex-col gap-[15px]">
          <div id="title" className="text-[30px]">
            Welcome to The Ape Arb
          </div>
          <div id="sub-title" className="text-ape_yellow text-[35px]">
            Special Referral Program
          </div>
        </div>
        <div
          id="footer"
          className="text-[12px] mt-[20px] mb-[20px]"
        >{`"Join our exlcusive Referral Program and unlock a treasure trove of special rewards!"`}</div>
        {isConnected ? (
          <div className="flex gap-3">
            <button
              className="bg-ape_yellow text-ape_dark_purple pl-[30px] pr-[30px] pt-1 pb-1 min-w-[100px] text-[20px] rounded-[30px]
            hover:shadow-[0px_0px_15px_5px_rgba(255,195,100,0.5)]
            hover:text-ape_white
            transition-all 0.1s
              "
              type="button"
            >
              Copy Code
            </button>
            <button
              className="bg-ape_red text-ape_dark_purple pl-[30px] pr-[30px] pt-1 pb-1 min-w-[100px] text-[20px] rounded-[30px]
            hover:shadow-[0px_0px_15px_5px_rgba(255,80,0,0.5)]
            hover:text-ape_white
            transition-all 0.1s
              "
              type="button"
            >
              Register
            </button>
            <button
              className="bg-ape_green_dark text-ape_dark_purple pl-[30px] pr-[30px] pt-1 pb-1 min-w-[100px] text-[20px] rounded-[30px]
            hover:shadow-[0px_0px_15px_5px_rgba(0,255,0,0.5)]
            hover:text-ape_white
            transition-all 0.1s
              "
              type="button"
            >
              Register
            </button>
          </div>
        ) : null}
      </div>
      <div className="w-[200px]"></div>
      <div id="content-image" className="absolute bottom-[-5rem] right-[-5rem]">
        <Image
          src="/images/titlelogo.png"
          width={350}
          height={350}
          alt="title-logo"
        />
      </div>
    </div>
  );
};

export default TitleCard;
