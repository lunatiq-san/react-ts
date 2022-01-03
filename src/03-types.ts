/*
 * Custom type with Type
 * - Identifier with type composition
 * - State with union
 */

// Type written with a capital letter
type ID = number | string;

const userId: ID = 5;
const postId: ID = "f7s8dfsadf86";

type Coords = [number, number];

const coords: Coords = [50.4501, 30.5234];

type ReqStatus = "request" | "success" | "error";
const requestStatus: ReqStatus = "error";

console.log(userId, postId, coords);

export {};
