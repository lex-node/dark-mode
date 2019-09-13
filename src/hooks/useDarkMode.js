/*## STEP 2 - useDarkMode


- Now to add the class to the body. If we need to manipulate the DOM directly, how do we do that? Any direct DOM manipulation is considered a side effect, right? So let's use the effect hook.
  -Import and set up your effect hook.
  - Inside it, check to see if the value from `useLocalStorage` is true or false.
  - If it's true, add the class `dark-mode` to the `body` element.
  - If it's false, remove the class from the `body` element. (If you don't quite remember how to do this from ages and ages ago, Google will be your friend here 😉)
  - We don't want this effect to run every time anything in the component changes, right? Think about what piece of data this hook depends on, and should be synced with, and add that in its dependency array.
- Finally, we need to return something out of here so we can use this in our app. What do you think we'll need? We'll need to know if dark mode is enabled, right? And we'll need a setter function to toggle dark mode. Let's just forward the value and the setter that were returned out of the `useLocalStorage` call. Return those two values in an array as well.*/

import {useLocalStorage} from "./useLocalStorage";
import React, {useEffect} from 'react';

export const useDarkMode = () => {

    const [darkModeStatus, setDarkModeStatus] = useLocalStorage("darkEnabled", false);


    useEffect(() => {
        darkModeStatus ? document.getElementByName("body").classList.add("dark-mode") : document.getElementByName("body").classList.remove("dark-mode");

    }, [darkModeStatus]);

    return [darkModeStatus, setDarkModeStatus];



}
