import {useEffect, useState} from 'react';

export function useLocalStorage(key, initialState) {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        const item = localStorage.getItem(key)
        const recipes = JSON.parse(item);
        if (item) {
            setState(recipes);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
      }, [state]);

    return [state, setState];
}