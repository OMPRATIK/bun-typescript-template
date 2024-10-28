import express from "express";

import errorMiddleware from "./middlewares/error.middleware";
import notFoundMiddleware from "./middlewares/not-found";

const app = express();
const PORT = Bun.env.PORT || 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res
    .status(200)
    .json({ success: true, message: "Welcome to Express TypeScript" });
});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
