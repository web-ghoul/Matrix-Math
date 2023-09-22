import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./Head.module.scss";

const Head = ({ title, basic }) => {
  return (
    <Box
      className={`flex aic ${basic ? "jcfs" : "jcc"} `}
    >
      <Typography
        sx={{
          color: (theme) =>
            basic ? theme.palette.dark : theme.palette.primary.main,
        }}
        variant="h4"
        className={`ttuc ${!basic && styles.line}`}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Head;
