export const isEmpty = (data: any) => {
  return typeof data === "undefined" || data == null || data === "";
};

export const appendClass = (...classNames: Array<string | undefined>) => {
  return classNames?.join(" ");
};