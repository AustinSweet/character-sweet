import { TEST } from "./ActionTypes";

export const testAction = input => ({
    type: TEST,
    payload: input
});