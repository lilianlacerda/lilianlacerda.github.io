import { Box, Container, IconButton, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
    return(
        <>
            <Box pt={2} pb={2}>
                <Container maxWidth="sm">
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={3} pb={1}>
                        <IconButton onClick={() => window.open("https://github.com/lilianlacerda")}>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton onClick={() => window.open("https://www.linkedin.com/in/lilian-raiany-lacerda/")}>
                            <LinkedInIcon />
                        </IconButton>
                    </Box>
                    <Typography>
                        © 2026 Desenvolvido com <FavoriteIcon fontSize="small" sx={{color: "#e65100"}}/> por Lilian Lacerda - All rights reserved
                    </Typography>
                </Container>
            </Box>
        </>
    )

}

export default Footer;