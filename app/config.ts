import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const config = {
  serverURL: process.env.NEXT_PUBLIC_NODE_SERVER,
};

export default config;
