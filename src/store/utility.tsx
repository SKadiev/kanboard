export const updateObject = <T, U>(oldObject: T, updatedObject: U) => {
  return {
    ...oldObject,
    ...updatedObject,
  };
};
