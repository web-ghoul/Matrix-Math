import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./BranchBox.module.scss";

const BranchBox = ({ image, title }) => {
  return (
    <Box className={`flex jcs aic g20 pad20 ${styles.branch_box}`}>
      <Box
        className={`flex jcs aic ${styles.branch_box_image}`}
        sx={{ backgroundImage: `url(${image.src})` }}
      ></Box>
      <Typography variant="h5" className={`ttcap`}>
        {title}
      </Typography>
    </Box>
  );
};

export default BranchBox;
