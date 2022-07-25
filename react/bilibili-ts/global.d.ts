export {};

declare global {
  interface window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}