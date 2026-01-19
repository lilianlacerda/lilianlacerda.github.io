import { Box, Container, IconButton, Typography } from "@mui/material";
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

const Footer = () => {
    return(
        <>
            <Box pt={2} pb={2}>
                <Container maxWidth="sm">
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={2} pb={1}>
                        <IconButton onClick={() => window.open("https://github.com/lilianlacerda")}>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton onClick={() => window.open("https://www.linkedin.com/in/lilian-raiany-lacerda/")}>
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton onClick={HandleEmail}>
                            <MailOutlineIcon />
                        </IconButton>
                    </Box>
                    <Typography textAlign={"center"}>
                        © 2026 Desenvolvido com <FavoriteIcon fontSize="small" sx={{color: "#FF8C00"}}/> por Lilian Lacerda - All rights reserved
                    </Typography>
                </Container>
            </Box>
        </>
    )

}

export default Footer;