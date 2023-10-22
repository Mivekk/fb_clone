export const getRefValue = (startIndex: number, __ref: string): number => {
  const stringValue = __ref.slice(startIndex);

  return Number(stringValue);
};
