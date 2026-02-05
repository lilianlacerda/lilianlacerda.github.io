import { Box, Container, Grid, styled, Typography } from "@mui/material";
import ProjectCard, {type ProjectCardProps} from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const StyledExperience = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
}));

const myProjects = [
    {    
        title: "MyMetas",
        subtitle: "Mar 2025 - Mai 2025",
        srcImg: "/src/assets/images/myMetas.png",
        description: "Sistema desenvolvido em grupo para o programa Transforme-se da Serasa Experian 2024, permitindo o gerenciamento de metas pessoais com autenticação de usuários e personalização de interface. Utilizamos conceitos atuais de arquitetura de software e tecnologias completas para uma melhor escalabilidade do projeto.",
        technologies: "Windows Forms (C#), C#, MySQL, Visual Studio, Git/GitHub e Workbench",
        websiteURL: "https://github.com/Transforme-se/ProjetoPI",
        codeURL: "https://github.com/Transforme-se/ProjetoPI", 
    },
    {    
        title: "Lily Calculator",
        subtitle: "Jan 2026",
        srcImg: "/src/assets/images/lilyCalculator.gif",
        description: "Meu primeiro projeto em React! Desenvolvido durante o bootcamp na plataforma DIO. Calculadora funcional, focando não apenas na lógica matemática, mas em uma arquitetura de componentes limpa e uma experiência de usuário (UX) fluida, tanto no desktop quanto no mobile. Foi um marco importante onde apliquei conceitos avançados de React e ferramentas modernas de build. ",
        technologies: "React, HTML, JavaScript, CSS, Styled-Components, NPM, Esbuild",
        websiteURL: "https://lily-calculator.vercel.app/",
        codeURL: "https://github.com/lilianlacerda/lily-calculator", 
    },
    {    
        title: "Minha Lista de Filmes",
        subtitle: "Set 2025 - Atualmente",
        srcImg: "/src/assets/images/catCinema.gif",
        description: "API REST para curadoria de filmes com integração ao TMDB. O sistema permite buscar títulos, gerenciar listas de interesse e possui um algoritmo de sorteio inteligente ('Me Surpreenda') para sugerir filmes não assistidos. Desenvolvido com foco em boas práticas, tratamento global de exceções e semântica HTTP.",
        technologies: "Java 17, Spring Boot 3, Spring Security, MySQL, JPA/Hibernate, REST API",
        websiteURL: "https://github.com/lilianlacerda/movieList",
        codeURL: "https://github.com/lilianlacerda/movieList", 
    },
    {    
        title: "Saúde Diária",
        subtitle: "Set 2025 - Out 2025",
        srcImg: "/src/assets/images/diarioSaude.png",
        description: "Sistema para registro de Sono, Alimentação e Atividade física. Desafio 7 days of Code da Alura. Utilizei conceitos modernos de Java com Spring, Maven, Banco H2 e também tive a oportunidade de conhecer o Thymeleaf!",
        technologies: "Java 17, Spring Boot 3, Spring Security, MySQL, JPA/Hibernate, REST API, Thymeleaf",
        websiteURL: "https://github.com/lilianlacerda/diario-saude/releases/download/projeto/api-1.0.3-Saude-diaria.jar",
        codeURL: "https://github.com/lilianlacerda/diario-saude", 
    },
]

const Projects = () => {
    return (
        <>
            <StyledExperience>
                <Container maxWidth="lg">
                    <Box id="projects" pt={5} pb={3}>
                        <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                    </Box>
                    <Grid container spacing={5} pb={3}>
                        {myProjects.map((project: ProjectCardProps, index: number) => (
                            <Grid size={{md: 6}} key={index}>
                                <AnimationComponent moveDirection={index % 2 == 0  ? "right" : "left"}>
                                    <ProjectCard
                                        title={project.title}
                                        subtitle={project.subtitle}
                                        srcImg={project.srcImg}
                                        description={project.description}
                                        technologies={project.technologies}
                                        websiteURL={project.websiteURL}
                                        codeURL={project.codeURL}
                                    />

                                </AnimationComponent>

                            </Grid>

                        ))}

                    </Grid>

                </Container>
            </StyledExperience>
        
        </>
    )
}

export default Projects; 