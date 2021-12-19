// To be called in the default: case of a swich statement.
// If the calling switch statement is NOT exhaustive, calling this function will produce a TypeScript error.
// If the calling switch statement IS exhaustive, this function is not reacheable, and TypeScript compiles OK.
//
// See https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking
export const switchExhaustivenessCheck = (v: never): never => {
  return v;
};
