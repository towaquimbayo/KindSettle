import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Layout from "../components/Layout";
import "../css/layout.css";

export default function MyClaims() {
  const navigate = useNavigate();
  const [claims, setClaims] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const response = await fetch("/api/claims");
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
        setClaims(data.claims);
      } catch (error) {
        console.error("Error fetching claims:", error);
      } finally {
        setFetching(false);
      }
    };
    fetchClaims();
  }, []);

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
      {fetching ? (
        <div className="loadingContainer">
          <p id="loadingText">Loading claims...</p>
        </div>
      ) : claims && claims.length > 0 ? (
        claims.map((claim) => (
          <div key={claim.id} className="claimCard">
            {/* @TODO: Create a list view of claims */}
            <div className="claimCardHeader">
              <h3>{claim.title}</h3>
              <p>{claim.status}</p>
            </div>
            <div className="claimCardBody">
              <p>{claim.description}</p>
            </div>
            <div className="claimCardFooter">
              <Button text="View Claim" title="View Claim" />
            </div>
          </div>
        ))
      ) : (
        <div className="noClaims">
          <p>You have no claims yet.</p>
        </div>
      )}
    </Layout>
  );
}
