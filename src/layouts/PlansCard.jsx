import { MdOutlineAttachMoney } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import Button from "./Button";

const PlansCard = (props) => {
  return (
    <div className="flex flex-col bg-[#222] w-full md:w-1/3 p-5 rounded-lg">
      <h2 className="font-semibold text-center">{props.title}</h2>
      <div className="flex flex-row justify-center items-center">
        <span className="inline-block">
          <MdOutlineAttachMoney size={22} />
        </span>
        <h3 className="font-semibold text-xl inline-block">{props.price} </h3>
      </div>
      <div className="flex flex-col items-center mt-5 m-8" style={{ fontSize: "1.1rem" }}>
        <div className="flex flex-row items-center">
          <span className="inline-block">
            <AiFillCheckCircle size={30} />
          </span>
          <p>
            Our Basic Membership includes unlimited gym access, essential
            workout equipment.{" "}
          </p>
        </div>
        <div className="flex flex-row items-center">
          <span className="inline-block">
            <AiFillCheckCircle size={30} />
          </span>
          <p style={{ margin: "40px 0" }}>
            You&apos;ll also receive a fitness consultation and access to discounted
            personal training.
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-center mt-4" style={{fontSize:"20px"}} >
        <Button title="Buy Plan" />
      </div>
    </div>
  );
};

export default PlansCard;
