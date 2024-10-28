import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { CustomAPIError } from "../errors";
import { z } from "zod";

const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof CustomAPIError) {
    res.status(err.statusCode).json({ message: err.message });
  }

  if (err instanceof z.ZodError) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: err.errors });
  }

  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: "Something went wrong.Try again" });
};

export default errorMiddleware;
