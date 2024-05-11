// https://docs.couchbase.com/nodejs-sdk/current/hello-world/start-using-sdk.html

import {
  Bucket,
  Cluster,
  Collection,
  connect,
  ConnectOptions,
  GetResult,
  QueryResult,
} from "couchbase";

async function main() {
  const clusterConnStr: string = "couchbases://cb.bwm7swuz2n28bipn.cloud.couchbase.com";
  const username: string = "kindsettle";
  const password: string = "K!ndsett1e";
  const bucketName: string = "travel-sample";

  const connectOptions: ConnectOptions = {
    username: username,
    password: password,
    // Sets a pre-configured profile called "wanDevelopment" to help avoid latency issues
    // when accessing Capella from a different Wide Area Network
    // or Availability Zone (e.g. your laptop).
    configProfile: "wanDevelopment",
  };

  const cluster: Cluster = await connect(clusterConnStr, connectOptions);
  const bucket: Bucket = cluster.bucket(bucketName);

  const collection: Collection = bucket
    .scope("tenant_agent_00")
    .collection("users");

  interface User {
    type: string;
    name: string;
    email: string;
    interests: string[];
  }

  const user: User = {
    type: "user",
    name: "Michael",
    email: "michael123@test.com",
    interests: ["Swimming", "Rowing"],
  };

  await collection.upsert("michael123", user);

  // Load the Document and print it
  // Prints Content and Metadata of the stored document
  const getResult: GetResult = await collection.get("michael123");
  console.log("Get Result:", getResult);

  // Perform a N1QL Query
  const queryResult: QueryResult = await bucket
    .scope("inventory")
    .query("SELECT name FROM `airline` WHERE country=$1 LIMIT 10", {
      parameters: ["United States"],
    });
  console.log("Query Results:");
  queryResult.rows.forEach((row) => {
    console.log(row);
  });
}

// Run the main function
main()
  .catch((err) => {
    console.log('ERR:', err)
    process.exit(1)
  })
  .then(() => process.exit(0))