import { API_PORT } from "./config/environment/env";
import { app } from "./src/app";

app.listen(
  {
    port: API_PORT,
  },
  () => {
    console.info("#####################################");
    console.info("#        🚀 Server listening        #");
    console.info("#####################################");
  }
);
