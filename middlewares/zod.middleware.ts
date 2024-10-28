import type { Request, Response, NextFunction } from "express";
import { z, type AnyZodObject } from "zod";

const validate =
  (schema: AnyZodObject) =>
  async (req: Request, _res: Response, next: NextFunction) => {
    await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    next();
  };

export default validate;
