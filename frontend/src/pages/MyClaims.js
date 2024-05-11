import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Layout from "../components/Layout";
import "../css/layout.css";

export default function MyClaims() {
  const navigate = useNavigate();
  return (
    <Layout title="My Alimony Claims">
      <div className="pageHeaderContainer">
        <div className="pageHeader">
          <h1>My Claims</h1>
          <p>
            Explore and manage your existing alimony claims or initiate a new
            one effortlessly by creating a new claim.
          </p>
        </div>
        <Button
          text="Create New Claim"
          title="Create New Claim"
          onClick={() => navigate("/alimony-claim")}
        />
      </div>
    </Layout>
  );
}
