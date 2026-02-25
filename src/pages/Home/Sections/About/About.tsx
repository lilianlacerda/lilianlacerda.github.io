import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Container, Grid, styled, Typography } from "@mui/material";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import SchoolIcon from "@mui/icons-material/School";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import StarIcon from "@mui/icons-material/Star";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";

const StyledAbout = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  minHeight: "100vh",
  display: "flex",
  alignItems: "flex-start",
}));

const About = () => {
  return (
    <StyledAbout>
      <Container maxWidth="lg" id="about">
        <Box mb={2} pt={9} pb={3}>
          <Typography
            variant="h2"
            textAlign={"center"}
            color="primary.contrastText"
          >
            Minha trajetória
          </Typography>
        </Box>

        <Grid container justifyContent="center" mb={10}>
          <Grid size={{ xs: 12 }}>
            <Timeline
              position="alternate"
              sx={{
                p: { xs: 0, md: 2 },
                // TRAVA DA LINHA RETA: Garante que os dois lados sejam espelhados
                [`& .MuiTimelineItem-root`]: {
                  "&:before": {
                    flex: { xs: 0, md: 1 },
                    padding: { xs: 0, md: "6px 16px" },
                  },
                },
                [`& .MuiTimelineContent-root`]: {
                  flex: 1,
                },
                [`& .MuiTimelineOppositeContent-root`]: {
                  flex: { xs: 0, md: 1 },
                },
              }}
            >
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0", display: { xs: "none", md: "block" } }}
                  align="right"
                  variant="body2"
                  color="secondary"
                >
                  <Typography fontWeight={700}>Dezembro/2004</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector
                    sx={{ bgcolor: "secondary.main", opacity: 0.5 }}
                  />
                  <TimelineDot color="secondary">
                    <ChildCareIcon fontSize="small" />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      display: { xs: "block", md: "none" },
                      color: "secondary.main",
                      fontWeight: "bold",
                    }}
                  >
                    Dezembro/2004
                  </Typography>
                  <Typography variant="h6" color="primary.contrastText">
                    O Primeiro Contato
                  </Typography>
                  <Typography color="primary.contrastText" variant="body2">
                    Descobri minha paixão pela tecnologia em uma visita à
                    família. Foi amor à primeira vista!
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0", display: { xs: "none", md: "block" } }}
                  variant="body2"
                  color="secondary"
                >
                  <Typography fontWeight={700}>Abril/2017</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  <TimelineDot color="secondary">
                    <HeadphonesIcon fontSize="small" />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      display: { xs: "block", md: "none" },
                      color: "secondary.main",
                      fontWeight: "bold",
                    }}
                  >
                    Abril/2017
                  </Typography>
                  <Typography variant="h6" color="primary.contrastText">
                    Primeira Experiência
                  </Typography>
                  <Typography color="primary.contrastText" variant="body2">
                    Trabalhei como Telemarketing, desenvolvendo habilidades de
                    comunicação e resiliência.
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0", display: { xs: "none", md: "block" } }}
                  color="secondary"
                >
                  <Typography fontWeight={700}>Julho/2018</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  <TimelineDot color="secondary">
                    <EmojiObjectsIcon fontSize="small" />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      display: { xs: "block", md: "none" },
                      color: "secondary.main",
                      fontWeight: "bold",
                    }}
                  >
                    Julho/2018
                  </Typography>
                  <Typography variant="h6" color="primary.contrastText">
                    Inicio de um sonho
                  </Typography>
                  <Typography color="primary.contrastText" variant="body2">
                    Comecei a faculdade de Análise e Desenvolvimento de
                    Sistemas.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0", display: { xs: "none", md: "block" } }}
                  color="secondary"
                >
                  <Typography fontWeight={700}>Junho/2019</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  <TimelineDot color="secondary">
                    <SupportAgentIcon fontSize="small" />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      display: { xs: "block", md: "none" },
                      color: "secondary.main",
                      fontWeight: "bold",
                    }}
                  >
                    Junho/2019
                  </Typography>
                  <Typography variant="h6" color="primary.contrastText">
                    Mercado de TI
                  </Typography>
                  <Typography color="primary.contrastText" variant="body2">
                    Iniciei minha trajetória como Analista de Suporte Pleno na
                    empresa Control iD.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0", display: { xs: "none", md: "block" } }}
                  color="secondary"
                >
                  <Typography fontWeight={700}>Julho/2021</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  <TimelineDot color="secondary">
                    <SchoolIcon fontSize="small" />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      display: { xs: "block", md: "none" },
                      color: "secondary.main",
                      fontWeight: "bold",
                    }}
                  >
                    Julho/2021
                  </Typography>
                  <Typography variant="h6" color="primary.contrastText">
                    Graduação
                  </Typography>
                  <Typography color="primary.contrastText" variant="body2">
                    Me formei na faculdade, mas os estudos nunca param!
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0", display: { xs: "none", md: "block" } }}
                  color="secondary"
                >
                  <Typography fontWeight={700}>Abril/2022</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  <TimelineDot color="secondary">
                    <KeyboardDoubleArrowUpIcon fontSize="small" />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      display: { xs: "block", md: "none" },
                      color: "secondary.main",
                      fontWeight: "bold",
                    }}
                  >
                    Abril/2022
                  </Typography>
                  <Typography variant="h6" color="primary.contrastText">
                    Senioridade
                  </Typography>
                  <Typography color="primary.contrastText" variant="body2">
                    Migrei para Analista de Suporte Senior, assumindo casos
                    complexos.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0", display: { xs: "none", md: "block" } }}
                  color="secondary"
                >
                  <Typography fontWeight={700}>Fevereiro/2023</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  <TimelineDot color="secondary">
                    <StarIcon fontSize="small" />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      display: { xs: "block", md: "none" },
                      color: "secondary.main",
                      fontWeight: "bold",
                    }}
                  >
                    Fevereiro/2023
                  </Typography>
                  <Typography variant="h6" color="primary.contrastText">
                    Liderança Técnica
                  </Typography>
                  <Typography color="primary.contrastText" variant="body2">
                    Promovida a Líder Técnica da equipe de suporte.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0", display: { xs: "none", md: "block" } }}
                  color="secondary"
                >
                  <Typography fontWeight={700}>Maio/2025</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  <TimelineDot color="secondary">
                    <StarIcon fontSize="small" />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      display: { xs: "block", md: "none" },
                      color: "secondary.main",
                      fontWeight: "bold",
                    }}
                  >
                    Maio/2025
                  </Typography>
                  <Typography variant="h6" color="primary.contrastText">
                    Conclusão do Programa Transforme-se
                  </Typography>
                  <Typography color="primary.contrastText" variant="body2">
                    Tive o privilégio de fazer parte da turma de 2024 do
                    programa Transforme-se da Serasa Experian, onde aprendi
                    diversos conceitos importantes para a minha trajetória
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  <TimelineDot color="secondary">
                    <RotateLeftIcon fontSize="small" />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" color="primary.contrastText">
                    Continua...
                  </Typography>
                  <Typography color="primary.contrastText" variant="body2">
                    Focada na transição para Desenvolvimento, aplicando bagagem
                    técnica e liderança para criar soluções eficientes.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
        </Grid>
      </Container>
    </StyledAbout>
  );
};

export default About;
