export const updateObject = <T, U>(oldObject: T, updatedObject: U): T => {
  return {
    ...oldObject,
    ...updatedObject,
  };
};
