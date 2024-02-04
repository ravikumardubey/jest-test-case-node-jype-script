export default function performOperation(p1: number, p2: number, operationType: string) {
  console.log("Hello app.ts")
  if (operationType === 'multiply')
    return p1 * p2;
  else if (operationType === 'add')
    return p1 + p2;
  else
    throw new Error("Invalid operation");
}
