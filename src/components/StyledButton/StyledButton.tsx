import { styled } from "@mui/material";
import type { ReactNode } from "react";

interface StyledButtonProps{
    children: ReactNode
    onClick: () => void
}

const MyCustomButton = styled("button")(({theme}) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    color: theme.palette.primary.contrastText,
    '&:hover': {
        backgroundColor: theme.palette.secondary.light
    }
        
    }))

const StyledButton: React.FC<StyledButtonProps> = ({children, onClick}) => {

    return(
        <>
            <MyCustomButton onClick = {onClick}>
                {children}
            </MyCustomButton>

        </>
    )
}

export default StyledButton;