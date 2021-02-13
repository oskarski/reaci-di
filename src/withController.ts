import React, { PropsWithChildren } from "react";

export function withController<ViewProps, ControllerProps>(
  useController: (props?: ControllerProps) => ViewProps,
  view: React.FC<ViewProps>
) {
  return (props: PropsWithChildren<ControllerProps>) =>
    React.createElement(view, useController(props), props.children);
}

export function withMemoizedController<ViewProps, ControllerProps>(
  useController: (props?: ControllerProps) => ViewProps,
  view: React.FC<ViewProps>
) {
  return React.memo(withController(useController, view));
}
