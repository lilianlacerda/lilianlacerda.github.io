import { Box, Container, Grid, styled, Typography } from "@mui/material";
import { hardSkills, softSkills } from "../../../../utils/iconsArray";
import SkillsComponent from "../../../../components/SkillsComponent/SkillsComponent";

const StyledSkills = styled("div")(({theme})=>({
        backgroundColor: theme.palette.primary.main,
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
}))

const Skills = () => {
  return (
    <>
    <StyledSkills>
      <Container maxWidth="lg">
        <Box pt={9} pb={3} mb={3} id="skills">
            <Typography variant="h2" textAlign={"center"} color="primary.contrastText">Minhas Skills</Typography>
        </Box>
        <Grid container spacing={4} mt={10}>
          <Grid size={{xs: 12, md: 6}}>
                <Typography variant="h3" color="primary.contrastText" textAlign={"center"}>HardSkills</Typography>

                <Grid container spacing={2} justifyContent={"center"} pt={3}>
                    {hardSkills.map((skill, index) => (
                    <Grid key={index} justifyContent="center">
                        <SkillsComponent name={skill.name} icon={skill.icon} />
                    </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
                <Typography variant="h3" color="primary.contrastText" textAlign={"center"}>SoftSkills</Typography>

                <Grid container spacing={2} justifyContent={"center"}pt={3}>
                    {softSkills.map((skill, index) => (
                    <Grid key={index} justifyContent="center">
                        <SkillsComponent name={skill.name} icon={skill.icon} />
                    </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
      </Container>
    </StyledSkills>
    </>
  );
};

export default Skills;
