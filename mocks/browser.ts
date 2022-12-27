import { handlers } from "./handlers/index";
import { setupWorker, SetupWorkerApi } from "msw";

export const worker: SetupWorkerApi = setupWorker(...handlers);
