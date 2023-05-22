import { useGetWinnerBoard } from "../../blockchain/HoneyPot/Pot.read";
import Image from "next/image";
import BorderBox from "../Shared/BorderBox";

function WinnerBoard() {
  const { winnerData } = useGetWinnerBoard();

  return (
    <BorderBox>
      <div className="max-w-[500px] overflow-y-scroll scroll-m-1 p-2">
        <div className="text-[20px]">Winner Board!</div>
        <div className="grid grid-cols-3 gap-2">
          <div>Image</div>
          <div>Round</div>
          <div>Winner Wallet</div>
          {winnerData.map((w) => (
            <>
              <Image src={w.image} width={80} height={80} alt="image" />
              <div>{w.round}</div>
              <div>
                {w.address
                  ? `${w.address.slice(0, 5)}...${w.address.slice(38)}`
                  : null}
              </div>
            </>
          ))}
        </div>
      </div>
    </BorderBox>
  );
}

export default WinnerBoard;
