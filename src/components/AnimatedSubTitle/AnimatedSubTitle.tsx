import { Grid, styled, Typography } from "@mui/material";

const rollAnimation = `
  @keyframes roll {
    0% { font-size:0px; opacity:0; margin-left:-30px; margin-top:0px; transform: rotate(-25deg); }
    3% { opacity:1; transform: rotate(0deg); }
    5% { font-size:inherit; opacity:1; margin-left:0px; margin-top:0px; }
    20% { font-size:inherit; opacity:1; margin-left:0px; margin-top:0px; transform: rotate(0deg); }
    27% { font-size:0px; opacity:0; margin-left:20px; margin-top:0; }
    100% { font-size:0px; opacity:0; margin-left:-30px; margin-top:0px; transform: rotate(15deg); }
  }
`;

const DroppingTexts = styled(Grid)(() =>({
    display: 'inline-block',
    width: '180px',
    textAlign: 'left',
    height: '36px',
    verticalAlign: '-2px',
    '& div': {
    fontSize: '0px',
    opacity: 0,
    marginLeft: '-30px',
    position: 'absolute',
    fontWeight: 300,
    [rollAnimation]: '',
  },
  '& div:nth-of-type(1)': { animation: 'roll 5s linear infinite 0s' },
  '& div:nth-of-type(2)': { animation: 'roll 5s linear infinite 1s' },
  '& div:nth-of-type(3)': { animation: 'roll 5s linear infinite 2s' },
  '& div:nth-of-type(4)': { animation: 'roll 5s linear infinite 3s' },
}));

const AnimatedSubTitle = () => {
    return(
        <>
            <Grid container spacing={{xs:0}}>
                <Grid size={{xs: 6, md: 8}}>
                    <Typography color="primary.contrastText" variant="h2" textAlign="center">Building</Typography>
                </Grid>
                <Grid size={{xs: 6, md: 4}} marginLeft={{md:"-90px"}}>
                    <DroppingTexts>
                    <div>
                        <Typography color="primary.contrastText" variant="h2">Frontend</Typography>
                    </div>
                    <div>
                        <Typography color="primary.contrastText" variant="h2">Backend</Typography>
                    </div>
                    <div>
                        <Typography color="primary.contrastText" variant="h2">Databases</Typography>
                    </div>
                    <div>
                        <Typography color="#F4511E" variant="h2">Solutions!</Typography>
                    </div>
                    </DroppingTexts>
                </Grid>

            </Grid>

        </>

    )
}

export default AnimatedSubTitle;