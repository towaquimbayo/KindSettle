import { connect } from "ottoman";

export const connectDB = (options: any) => {
  return connect(options);
};