import { BiCheckCircle } from "react-icons/bi";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function ClaimSuccessForm() {
  const navigate = useNavigate();

  return (
    <div className="claimSuccessContainer">
      <BiCheckCircle size={100} color="#00cc66" />
      <h1>
        Congratulations!
        <br />
        You've Completed Your Part.
      </h1>
      <p>
        We'll now notify your co-parent via email to review and continue the
        child support claim process. You've taken an important step towards
        reaching an agreement, and one step closer to providing the support your
        child deserves.
      </p>
      <Button
        text="Return to Home"
        title="Return to Home"
        onClick={() => navigate("/")}
      />
    </div>
  );
}
