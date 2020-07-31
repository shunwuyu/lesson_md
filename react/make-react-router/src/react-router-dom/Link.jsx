import React from "react";
import { __RouterContext as RouterContext } from "../react-router/index";
import { resolveToLocation, normalizeToLocation } from "./utils/locationUtils";

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

function LinkAnchor({ innerRef, navigate, onClick, ...rest }) {
  const { target } = rest;
  return (
    <a
      {...rest}
      ref={innerRef} // TODO: Use forwardRef instead
      onClick={event => {
        try {
          if (onClick) onClick(event);
        } catch (ex) {
          event.preventDefault();
          throw ex;
        }

        if (
          !event.defaultPrevented && // onClick prevented default
          event.button === 0 && // ignore everything but left clicks
          (!target || target === "_self") && // let browser handle "target=_blank" etc.
          !isModifiedEvent(event) // ignore clicks with modifier keys
        ) {
          // 走这里
          event.preventDefault();
          navigate();
        }
      }}
    />
  );
}

/**
 * The public API for rendering a history-aware <a>.
 *
 */
function Link({ component = LinkAnchor, replace, to, ...rest }) {
  return (
    <RouterContext.Consumer>
      {context => {
        const { history } = context;
        const location = normalizeToLocation(
          resolveToLocation(to, context.location),
          context.location
        );

        const href = location ? history.createHref(location) : "";
        return React.createElement(component, {
          ...rest,
          href,
          navigate() {
            const location = resolveToLocation(to, context.location);
            const method = replace ? history.replace : history.push;

            method(location);
          }
        });
      }}
    </RouterContext.Consumer>
  );
}

export default Link;
