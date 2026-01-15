import styled from "@emotion/styled";
import { AppBar, MenuItem, Toolbar } from "@mui/material"

const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex", 
    justifyContent: "space-between"
}))

const NavBar = () =>{
    return(
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Projects</MenuItem>
                </StyledToolbar>
            </AppBar>
        </>
    )
}

export default NavBar;