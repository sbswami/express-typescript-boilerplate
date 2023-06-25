/**
 * Return a promise that, Wait for provided milliseconds and then resolve.
 */
export const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

/**
 * Decode base 64 to base 10 string.
 */
export const decodeBase64 = (base64Encoded: string): string => {
  return decodeURIComponent(Buffer.from(base64Encoded, "base64").toString());
};

/**
 * Encode base 64 string.
 * @returns 
 */
export const encodeBase64 = (payload: string): string => {
  return Buffer.from(encodeURIComponent(payload)).toString("base64");
};
