import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div id="logo container" className="mb-4">
        <div id="upper" className="flex justify-center items-center">
          <div id="first" className="flex gap-2">
            <Image src="/images/btc.png" width={30} height={30} alt="btc" />
            <Image src="/images/eth.png" width={30} height={30} alt="eth" />
            <Image src="/images/dog.png" width={30} height={30} alt="dog" />
            <Image src="/images/lite.png" width={30} height={30} alt="lite" />
            <Image src="/images/usdt.png" width={30} height={30} alt="usdt" />
          </div>
          <div id="middle">
            <Image
              src="/images/apelogo1.png"
              width={100}
              height={100}
              alt="ape"
            />
          </div>
          <div id="end">
            <Image
              src="/images/paylogo.png"
              width={300}
              height={300}
              alt="pay"
            />
          </div>
        </div>
        <div id="lower" className="flex justify-center items-center gap-2">
          <Image
            src="/images/twitter.png"
            width={50}
            height={50}
            alt="twitter"
          />
          <Image
            src="/images/discord.png"
            width={60}
            height={60}
            alt="discord"
          />
          <Image
            src="/images/telegram.png"
            width={60}
            height={60}
            alt="telegram"
          />
        </div>
      </div>
      <div id="all-right" className="bg-ape_dark text-center pt-1 pb-1">
        {`Copyright © 2023 Badmonkeyarb.io - All rights reserved.`}
      </div>
    </div>
  );
};

export default Footer;
