import { Container, Grid, styled, Typography } from "@mui/material";
import { hardSkills, softSkills } from "../../../../utils/iconsArray";
import SkillsComponent from "../../../../components/SkillsComponent/SkillsComponent";

const StyledSkills = styled("div")(({theme})=>({
        backgroundColor: theme.palette.primary.main,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
}))

const Skills = () => {
  return (
    <>
    <StyledSkills>
      <Container 
            maxWidth="lg"
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                pt: 8,
                pb: 10,

            }}
      >
        <Grid container spacing={4} id="skills">
          <Grid size={{xs: 12, md: 6}}>
                <Typography variant="h2" color="primary.contrastText" textAlign={"center"}>HardSkills</Typography>

                <Grid container spacing={2} display={"flex"} justifyContent={"center"} pt={3}>
                    {hardSkills.map((skill, index) => (
                    <Grid key={index} display="flex" justifyContent="center">
                        <SkillsComponent name={skill.name} icon={skill.icon} />
                    </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
                <Typography variant="h2" color="primary.contrastText" textAlign={"center"}>SoftSkills</Typography>

                <Grid container spacing={2} display={"flex"} justifyContent={"center"}pt={3}>
                    {softSkills.map((skill, index) => (
                    <Grid key={index} display="flex" justifyContent="center">
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
