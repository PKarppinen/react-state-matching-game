import { useEffect, useRef, useState } from 'react';

const useHover = () => {
    const ref = useRef();
    const hovered = useState(false);

    useEffect(() => {
        const refCopy = ref;
        refCopy.addEventListener('mouseenter', enter);
        refCopy.addEventListener('mouseleave', leave);        

        return () => {
            refCopy.current.removeEventListener('mouseenter', enter);
            refCopy.current.removeEventListener('mouseleave', leave);
        };
    });    

    return [ref, hovered];
}

const enter = () => {
    setHovered(true);
}

const leave = () => {
    setHovered(false);
}

export default useHover;