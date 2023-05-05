import Image from "next/image";
import { useGetWinner } from "../../blockchain/HoneyPot/Pot.read";

function WinnerPicked({ round }: { round: string }) {
  const { winner } = useGetWinner(round);
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-pepe_black bg-opacity-90">
      <div className="flex justify-center mt-[15%]">
        <div className="shadow-[0_0_50px_20px_rgb(255,120,111)]">
          <Image src={winner} alt="winner" width={350} height={350} />
        </div>
      </div>
    </div>
  );
}

export default WinnerPicked;
