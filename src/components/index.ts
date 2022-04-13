"use strict";

import { App } from "@vue/runtime-core";

export const components = import.meta.globEager("./**/*.vue");
export const componentNameCollection = Object.entries(components).map(
  ([path]) => {
    return path
      .split("/")
      .pop()
      ?.replace(/\.\w+$/, "") as string;
  }
);

export function registerComponents(app: App): void {
  Object.entries(components).forEach(([path, definition]) => {
    const componentName = path
      .split("/")
      .pop()
      ?.replace(/\.\w+$/, "") as string;
    const isExsists = app.component(componentName);
    if (!isExsists) app.component(componentName, definition.default);
  });
}
