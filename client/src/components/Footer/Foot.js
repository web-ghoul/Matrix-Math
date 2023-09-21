import React, { useContext } from "react";
import styles from "./Footer.module.scss";
import { Typography } from "@mui/material";
import { PrimaryContainer } from "@/mui/Containers/PrimaryContainer";
import { TeacherContext } from "@/context/TeacherContext";
import { SecondaryBox } from "@/mui/Boxes/SecondaryBox";

const Foot = () => {
  const { teacher_name } = useContext(TeacherContext);
  return (
    <SecondaryBox className={`${styles.foot}`}>
      <PrimaryContainer className={`flex jcc aic g30`}>
        <Typography variant="h6" className={`fw500`}>
          Copyright © 2024
        </Typography>
        <Typography
          className={`fw500`}
          variant="h6"
          sx={{ color: (theme) => theme.palette.primary.main }}
        >
          {teacher_name}
        </Typography>
      </PrimaryContainer>
    </SecondaryBox>
  );
};

export default Foot;
