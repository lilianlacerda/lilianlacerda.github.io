import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from '../../../../assets/images/avatar.jpg'
import DownloadIcon from '@mui/icons-material/Download';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import AnimatedSubTitle from "../../../../components/AnimatedSubTitle/AnimatedSubTitle";
import meuCV from '../../../../assets/pdfs/cv_dev_Lilian_Lacerda.pdf';

const StyledHero = styled("div")(({theme})=>({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "100px"
        },
        [theme.breakpoints.up('md')]: { // <= desktop
            paddingTop: "0"
        }
}))

const StyledImg = styled("img")(({theme})=>({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`
}))

const HandleWhatsApp = (): void => {
    const phoneNumber = "5511970703567";
    const message = "Olá! acessei seu portfólio e gostaria de conversar.";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank");
}

const HandleDownload = (): void => {
    const link = document.createElement('a');

    link.href = meuCV;
    link.download = "cv_dev_Lilian_Lacerda.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const Hero = () => {

    return(
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box position={"relative"}>
                                <Box position={"absolute"} width={"150%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position={"relative"} textAlign={"center"}>
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Lilian Lacerda</Typography>
                            <AnimatedSubTitle />
                            <Grid container display={"flex"} justifyContent={"center"} spacing={3} pt={3}>
                                <Grid size={{xs: 12, md: 4}} display={"flex"} justifyContent={"center"}>
                                    <StyledButton onClick={HandleDownload}>
                                        <DownloadIcon />
                                        <Typography fontWeight={500}>
                                            Download CV
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid size={{xs: 12, md: 4}} display={"flex"} justifyContent={"center"}>
                                    <StyledButton onClick={HandleWhatsApp}>
                                        <WhatsAppIcon />
                                        <Typography fontWeight={500}>
                                            Contact me
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero;