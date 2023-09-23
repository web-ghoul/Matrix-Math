import { TeacherContext } from "@/context/TeacherContext";
import { PrimaryButton } from "@/mui/Buttons/PrimaryButton";
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import boy from "../../../public/assets/images/boy.jpg";
import { PrimaryContainer } from "@/mui/Containers/PrimaryContainer";
import { PrimaryBox } from "@/mui/Boxes/PrimaryBox";
import styles from "./HomeSection.module.scss";
import { useRouter } from "next/navigation";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HomeSection = () => {
  const { teacher_name } = useContext(TeacherContext);
  const router = useRouter();
  return (
    <PrimaryBox>
      <PrimaryContainer
        className={`grid jcs aic g100 ${styles.home_section_contain}`}
      >
        <Box className={`grid jcfs aic g10`}>
          <Box className={`grid jcf aic`}>
            <Typography
              variant="h3"
              sx={{
                color: (theme) => theme.palette.primary.main,
                lineHeight: 0.5,
              }}
            >
              Matrix
            </Typography>
            <Typography
              sx={{ color: (theme) => theme.palette.primary.main }}
              variant="h3"
            >
              Math
            </Typography>
          </Box>
          <Typography variant="h4">{teacher_name}</Typography>
          <Typography component={"p"} variant="h6" className={`fw500 ttcap`}>
            Helping secondary school students in achieving their academic goals,
            through interactive lessons, practice quizzes and helpful resources.
          </Typography>
          <PrimaryButton
            onClick={() =>
              router.push(`${process.env.NEXT_PUBLIC_REGISTER_PAGE}`)
            }
          >
            Join Now!
          </PrimaryButton>
        </Box>
        <Box className={`flex jcs aic ${styles.home_image}`}>
          <LazyLoadImage alt={"home image"} src={boy.src} />
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default HomeSection;
