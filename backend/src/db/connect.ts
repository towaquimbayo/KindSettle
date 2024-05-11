import { connect, ConnectOptions } from "couchbase";

export const connectDB = (url: string, options: ConnectOptions) => {
  return connect(url, options);
};