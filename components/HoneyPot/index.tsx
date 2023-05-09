import {
  FormEvent,
  FunctionComponent,
  PropsWithChildren,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import BorderBox from "../Shared/BorderBox";
import CountdownTimer from "../Shared/Countdown";
import { useGetPotData } from "../../blockchain/HoneyPot/Pot.read";
import { useBuyTicket } from "../../blockchain/HoneyPot/Pot.write";
import { useAppContext } from "../../hooks/context";
import { SubmitHandler, useForm } from "react-hook-form";
import { useApprove } from "../../blockchain/Tokens/ERC20/ERC20.write";
import {
  useLottoMintedEvent,
  useWinnnerPickedEvent,
} from "../../blockchain/HoneyPot/Pot.event";
import WinnerPicked from "./WinnerPicked";

type Inputs = {
  mintAmount: number;
};

const HoneyPotBox: FunctionComponent<PropsWithChildren> = () => {
  const { register, handleSubmit, watch, resetField } = useForm<Inputs>();
  const { isApproved, isLoading, setMinting, setLoading } = useAppContext();
  const [end, setEnd] = useState(false);
  const [amountToMint, setAmountToMint] = useState(0);
  const { potData } = useGetPotData();
  const { approve } = useApprove();
  const { mint } = useBuyTicket(amountToMint <= 0 ? 1 : amountToMint);

  useLottoMintedEvent();
  useWinnnerPickedEvent();

  useEffect(() => {
    setAmountToMint(watch("mintAmount"));
  }, [watch("mintAmount")]);

  const handleMinting: SubmitHandler<Inputs> = (data) => {
    setLoading(true);
    setMinting(true);
    //parse input
    if (
      amountToMint <= 0 ||
      amountToMint == null ||
      amountToMint == undefined
    ) {
      setLoading(false);
      setMinting(false);
      return;
    }
    mint();
    resetField("mintAmount");
  };

  const handleApproval = (e: SyntheticEvent) => {
    setLoading(true);
    e.preventDefault();
    approve();
  };

  return (
    <div className="flex flex-col justify-center w-full items-center gap-2 text-pepe_white pb-[10%]">
      <div className="flex flex-col">
        <div className="leading-[40px]">
          <div className="text-[60px]">Round #{potData?.currentRound}</div>
          <div>CurrentMinted: {potData?.roundMintedCount} tokens</div>
        </div>
        {!end ? (
          <CountdownTimer endtimeMs={potData?.endTime!} setCanSettle={setEnd} />
        ) : null}
        {!potData?.isPaused && !end ? (
          <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(handleMinting)}
          >
            <div className="flex items-center gap-2">
              <input
                className="p-2 flex-grow rounded-md text-center disabled:bg-pepe_green1 disabled:bg-opacity-25 text-pepe_black text-[30px]"
                disabled={isLoading || !isApproved ? true : false}
                type="number"
                min={1}
                max={100}
                placeholder="amount to mint"
                {...register("mintAmount")}
              ></input>
              <button
                disabled={isLoading || isApproved}
                className=" bg-pepe_green1 text-[30px] rounded-md hover:border-pepe_white hover:border-[1px] p-2 disabled:bg-opacity-25"
                onClick={(e) => handleApproval(e)}
                type="button"
              >
                {"Approve"}
              </button>
            </div>
            {!isLoading ? (
              <button
                disabled={!isApproved ? true : false}
                type="submit"
                className=" bg-pepe_green1 text-[50px] mb-3 space-y-1 rounded-md hover:border-pepe_white hover:border-[1px] disabled:bg-opacity-25"
              >
                {!isApproved ? "Need approval!" : "Get Lucky!"}
              </button>
            ) : (
              <div className="text-[50px] text-center">Minting ...</div>
            )}
          </form>
        ) : (
          <div className=" p-2 bg-pepe_green1 text-[50px] mb-3 space-y-1 rounded-md hover:border-pepe_white hover:border-[1px]">
            {!end
              ? "We are closed !, <br /> please try again later"
              : "Time Up! wait for Winner Pick!"}
          </div>
        )}
        <div>
          {potData?.price.ether} + {potData?.fee.ether} Kub[fee] PepeKrub/ticket
        </div>
        <BorderBox>
          <div className="max-w-[600px]">
            <div className="text-2xl mb-3">How does this work!?</div>
            <p>
              use your PepeToken to Buy the Pot ticket. when the time is up! we
              will pick winner from the tokenId that available in the current
              round. the owner of the Winner tokenId will receive 90% Pepe Token
              locked in the Pot and another 10% to treasury maybe we use this
              portion to do something more!!
            </p>
          </div>
        </BorderBox>

        {/* <Image src="/images/blue.png" width={450} height={450} alt="blue" /> */}
        {potData?.winnerPicked ? (
          <WinnerPicked round={potData?.currentRound} />
        ) : null}
        {/* <WinnerPicked round={potData?.currentRound!} /> */}
      </div>
    </div>
  );
};

export default HoneyPotBox;
