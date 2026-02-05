import { styled } from "@mui/material";
import { IconButton, Tooltip } from "@mui/material";

interface SkillsComponentProps {
  icon: React.ElementType;
  name: string;
}

const StyledSkillsComponent = styled("div")(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: "10px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  "&:hover": {
    border: `1px solid ${theme.palette.secondary.main}`,
  },
}));

const StyledIcons = styled(IconButton)(({ theme }) => ({
  fontSize: "45px",
  color: "rgba(255, 255, 255, 0.5)",
  transition: "0.4s",
  "&:hover": {
    color: theme.palette.secondary.main,
    filter: "drop-shadow(0px 0px 8px #ff6d00)",
    transform: "scale(1.2) rotate(5deg)",
    backgroundColor: "transparent",
  },
  [theme.breakpoints.up('md')]: {
    //fontSize: "50px",
  }
}));

const SkillsComponent: React.FC<SkillsComponentProps> = ({
  name,
  icon: Icon,
}) => {
  return (
    <StyledSkillsComponent>
      <Tooltip
        title={name}
        enterTouchDelay={0}
        leaveTouchDelay={1000}
        arrow
        slotProps={{
          tooltip: {
            sx: {
              fontSize: "17px",
              padding: "8px 16px",
            },
          },
        }}
      >
        <StyledIcons>
          <Icon />
        </StyledIcons>
      </Tooltip>
    </StyledSkillsComponent>
  );
};

export default SkillsComponent;
