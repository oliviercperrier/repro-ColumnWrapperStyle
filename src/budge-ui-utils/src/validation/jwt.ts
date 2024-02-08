import jwtDecode, { JwtPayload } from "jwt-decode";

export type JwtPayloadWithScope = JwtPayload & {
  scope: string[];
};

export const decodeJWT = (accessToken: string) =>
  jwtDecode<JwtPayloadWithScope>(accessToken);

export const isJWTExpired = (accessToken: string) => {
  const decodedToken = decodeJWT(accessToken);
  return decodedToken.exp ? decodedToken.exp < Date.now() / 1000 : true;
};

export const isJWTValid = (accessToken: string) => !isJWTExpired(accessToken);

export const getJWTRoles = (accessToken: string) => {
  const decodedToken = decodeJWT(accessToken);
  return decodedToken.scope || [];
};
