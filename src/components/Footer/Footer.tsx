import { Box, Container, IconButton, styled, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const HandleEmail = () => {
    const emailAddress = 'lilianraiany@gmail.com';
    const subject = 'Contato através do Portfólio';
    const body = 'Olá! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.'

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
}

const StyledFooter = styled ("div")(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    color: "inherit",
    cursor: "pointer",
    borderTop: `0.5px solid ${theme.palette.divider}`,
    boxShadow: "0px -10px 20px rgba(0,0,0,0.1)",
    


}))

const Footer = () => {
    return(
        <StyledFooter>
            <Box pt={2} pb={2}>
                <Container maxWidth="sm">
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={2} pb={1}>
                        <IconButton onClick={() => window.open("https://github.com/lilianlacerda")}>
                            <GitHubIcon sx={{ color: "primary.contrastText" }} />
                        </IconButton>
                        <IconButton onClick={() => window.open("https://www.linkedin.com/in/lilian-raiany-lacerda/")}>
                            <LinkedInIcon sx={{ color: "primary.contrastText" }}/>
                        </IconButton>
                        <IconButton onClick={HandleEmail}>
                            <MailOutlineIcon sx={{ color: "primary.contrastText" }}/>
                        </IconButton>
                    </Box>
                    <Typography textAlign={"center"} color="primary.contrastText">
                        © 2026 Desenvolvido com <FavoriteIcon fontSize="small" sx={{color: "#FF8C00"}}/> por Lilian Lacerda - All rights reserved
                    </Typography>
                </Container>
            </Box>
        </StyledFooter>
    )

}

export default Footer;