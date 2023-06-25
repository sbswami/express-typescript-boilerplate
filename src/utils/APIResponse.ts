import { Response } from "express";

export class APIResponse {

  /** Response with bad request status. */
  static badRequest(res: Response, message?: string | unknown) {
    try {
      res.status(400).json({ message: message ?? "Bad Request!" });
    } catch(err) {
      console.log("Response sent!");
    }
  }

  /** Response with not found in case of wrong URL */
  static notFound(res: Response) {
    try {
      res.status(404).send('<h1>404 Not Found</h1>');
    } catch(err) {
      console.log("Response sent!");
    }
  }

  /** Response with unauthorized status. */
  static unauthorized(res: Response, message?: string | unknown) {
    try {
      res.setHeader("WWW-Authenticate", "Basic");
      res.status(401).json({ message: message ?? "Unauthorized!" });
    } catch(err) {
      console.log("Response sent!");
    }
  }
}
