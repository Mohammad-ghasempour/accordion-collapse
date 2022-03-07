import React from "react";
import Accordion from "./components/Accordion";

const items = [
    {
      title:'How do you use a hook?',
      content:'Hooks make React so much better because you have simpler code that implements similar functionalities faster and more effectively. You can also implement React state and lifecycle methods without writing classes. Below are code examples to illustrate React class and functional components'
    },
    {
        title:'Do React Hooks have to start with use?',
        content:'Just like in a component, make sure to only call other Hooks unconditionally at the top level of your custom Hook. Unlike a React component, a custom Hook doesnt need to have a specific signature. ... Its name should always start with use so that you can tell at a glance that the rules of Hooks apply to it.'
      },
      {
        title:'What is Hooks in react native?',
        content:'What is React Hook? Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. It mainly uses to han d le the state and side effects in react functional component. React Hooks are a way to use stateful functions inside a functional component.'
      },
      {
        title:'Why are hooks better than classes?',
        content:'Hooks allow you to use local state and other React features without writing a class. Hooks are special functions that let you “hook onto” React state and lifecycle features inside function components.'
      }
];

export default () =>{
    return <div>
         <Accordion items={items} /></div>;
}