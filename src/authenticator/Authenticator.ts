import {NextFunction, Request, Response} from "express";
import {APIResponse} from "../utils/APIResponse";

/**
 * Authenticator middleware.
 */
export const authenticator = (req: Request, res: Response, next: NextFunction) => {
  const authHeader: string | undefined = req.headers.authorization as string | undefined;

  /** If no auth header */
  if (!authHeader) return APIResponse.unauthorized(res);

  // TODO: Add your authentication logic here
  const authorized = true;

  /** if Authorized */
  if (authorized) {
    // If Authorized user
    next();
  } else {
    return APIResponse.unauthorized(res);
  }
};
