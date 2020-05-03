export const sameAs = (field, getValues) => (value) => {
  debugger;
  const a = getValues();
  const compareTo = getValues()[field];

  return compareTo === value;
};
