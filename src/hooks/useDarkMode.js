import './useLocalStorage';
import {useLocalStorage} from "./useLocalStorage";
import {useEffect} from 'react';

export const useDarkMode = () => {
    const [darkModeStatus, setDarkModeStatus] = useLocalStorage('darkModeStatus');
    useEffect(() => {
        darkModeStatus ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode');
    }, [darkModeStatus])

    return [darkModeStatus, setDarkModeStatus];
}
