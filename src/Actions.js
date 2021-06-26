import { TEST } from "./Action-Types";

export function testAction(payload) {
    return {type: TEST, payload};
}