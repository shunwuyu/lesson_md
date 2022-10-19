function createElement(type, props, ...children) {
    return {
      type,
      props: {
        ...props,
        children: children.map(child =>
          typeof child === "object" ? child : createTextElement(child)
        )
      }
    };
  }
  
  function createTextElement(text) {
    return {
      type: "TEXT_ELEMENT",
      props: {
        nodeValue: text,
        children: []
      }
    };
  }

  function createDom(fiber) {
    const dom =
    fiber.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(fiber.type)
    const isProperty = key => key !== "children"
    Object.keys(fiber.props)
        .filter(isProperty)
        .forEach(name => {
        dom[name] = fiber.props[name]
        })
    
    return dom
  }
  
  function render(element, container) {
    nextUnitOfWork = {
        dom: container,
        props: {
            children: [element]
        }
    }
  }

    let nextUnitOfWork = null

    function workLoop(deadline) {
        // console.log('-----')
        let shouldYield = false
        while (nextUnitOfWork && !shouldYield) {
            nextUnitOfWork = performUnitOfWork(
                nextUnitOfWork
            )
            shouldYield = deadline.timeRemaining() < 1
        }
        requestIdleCallback(workLoop)
    }

    requestIdleCallback(workLoop)
    // performs the work but also returns the next unit of work
    function performUnitOfWork(fiber) {
    // TODO
        if (!fiber.dom) {
            fiber.dom = createDom(fiber)
        }
        if (fiber.parent) {
            fiber.parent.dom.appendChild(fiber.dom)
        }
        const elements = fiber.props.children
        let index = 0
        let prevSibling = null
        while (index < elements.length) {
            const element = elements[index]
            const newFiber = {
                type: element.type,
                props: element.props,
                parent: fiber,
                dom: null
            } 
            if (index === 0) {
                fiber.child = newFiber
            } else {
                prevSibling.sibling = newFiber
            }
            prevSibling = newFiber
            index++
        }
        if (fiber.child) {
            return fiber.child
        }
        let nextFiber = fiber
        while(nextFiber) {
            if (nextFiber.sibling) {
                return nextFiber.sibling
            }
            nextFiber = nextFiber.parent
        }
    }
  
  const Didact = {
    createElement,
    render
  };
  
  /** @jsx Didact.createElement */
  const element = (
    <div>
        <h1>
            <p />
            <a />
        </h1>
        <h2/>
    </div>
  )
//   const element = (
//     <div style="background: salmon">
//       <h1>Hello World</h1>
//       <h2 style="text-align:right">from Didact</h2>
//     </div>
//   );
  const container = document.getElementById("root");
  Didact.render(element, container);
  