// unused (deemed too short to be necessary)

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export function increment(): { type: string } {
  return { type: INCREMENT };
}

export function decrement(): { type: string } {
  return { type: DECREMENT };
}
