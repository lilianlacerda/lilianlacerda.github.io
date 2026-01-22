import { keyframes } from "@emotion/react";
import { styled } from "@mui/material";
import type React from "react";
import { useEffect, useRef, useState, type ReactNode } from "react";

interface AnimationComponentProps{
    children: ReactNode,
    moveDirection: "left" | "right"
}

const moveFromLeftToRight = keyframes`
    0% {
        transform: translateX(-20vw);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`

const moveFromRightToLeft = keyframes`
    0% {
        transform: translateX(20vw);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`
const StyledAnimationComponent = styled("div")<{ startAnimation: boolean, moveDirection: string }>(({startAnimation, moveDirection}) =>({
    animation: startAnimation ? `${moveDirection} 1s linear`: "none"
}));

const AnimationComponent: React.FC<AnimationComponentProps> = ({children, moveDirection}) => {
    const componentRef = useRef(null);
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) =>{
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    setStartAnimation(true);
                    observer.disconnect();
                }
            });
        });
        if(componentRef.current){
            observer.observe(componentRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return(
        <>
            <StyledAnimationComponent
                ref={componentRef}
                startAnimation={startAnimation}
                moveDirection={
                    moveDirection === "right" ? moveFromLeftToRight : moveFromRightToLeft
                }
            >
                {children}    
            </StyledAnimationComponent>
        </>
    )
} 

export default AnimationComponent;