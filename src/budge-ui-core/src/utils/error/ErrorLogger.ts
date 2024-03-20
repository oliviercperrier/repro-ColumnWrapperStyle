import {
  ClientErrorInput,
  ClientErrorInputTargetEnum,
  Configuration,
  UsersApi,
} from "@budgeinc/budge-api";
import { decodeJWT } from "@budgeinc/budge-ui-utils";
import { getDeviceInfo } from "../detectDevice";

const NOT_AVAILABLE = "not_available";

class ErrorLogger {
  private usersApi: UsersApi;

  private config: Configuration;

  private targetApp: ClientErrorInputTargetEnum;

  constructor(config: Configuration, targetApp: ClientErrorInputTargetEnum, usersApi: UsersApi) {
    this.usersApi = usersApi;
    this.config = config;
    this.targetApp = targetApp;
  }

  public logClientError = async (error: Error) => {
    const genericDetails = await this.getGenericLogDetails();

    this.usersApi.createErrorLog({
      metadata: {
        stack: error?.stack || null,
        message: error?.message || null,
        cause: error?.cause || null,
        name: error?.name || null,
      },
      ...genericDetails,
    });
  };

  private getGenericLogDetails = async (): Promise<Omit<ClientErrorInput, "metadata">> => {
    let userId;

    try {
      userId = decodeJWT(this.config.accessToken as string).sub;
      // eslint-disable-next-line no-empty
    } catch {}

    const deviceInfo = getDeviceInfo();
    const ipifyResponse = await fetch("https://api.ipify.org?format=json");
    const ipifyJson = await ipifyResponse.json();

    return {
      userId,
      browser: deviceInfo.browserName || NOT_AVAILABLE,
      browserOS: deviceInfo.osName || NOT_AVAILABLE,
      browserVersion: deviceInfo.browserVersion|| NOT_AVAILABLE,
      clientIP: ipifyJson.ip || NOT_AVAILABLE,
      target: this.targetApp,
    };
  };
}

export default ErrorLogger;
