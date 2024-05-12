import { connect, start } from "ottoman";

export const connectDB = async (options: any) => {
  await connect(options);
  await start();
};