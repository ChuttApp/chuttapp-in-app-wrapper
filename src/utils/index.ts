import React from 'react';

export const isEmpty = (data: any) => {
  return typeof data === "undefined" || data == null || data === "";
};

export const appendClass = (...classNames: Array<string | undefined>) => {
  return classNames?.join(" ");
};

export const getReactChildren = (children: any, displayName: string) => {
  return React.Children.map(children, (child) => child.type.displayName === displayName ? child : null)
}
