import { Request, Response, Router } from "express";
import { version, name } from "../../package.json";

const routes = Router();

routes.get("/", (_: Request, res: Response) => {
  res.redirect(301, "/version");
});

routes.get("/version", (req: Request, res: Response) => {
  return res.status(200).json({
    version,
    name,
  });
});

export { routes };
