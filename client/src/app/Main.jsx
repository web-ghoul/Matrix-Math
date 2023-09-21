"use client";
import React from "react";
import { Provider } from "react-redux";
import "./webGhoul.scss";
import { store } from "@/store/store";
import MyThemeProvider from "@/context/MyThemeContext";
import { Box } from "@mui/material";
import TeacherProvider from "@/context/TeacherContext";
import { MainBox } from "@/mui/Boxes/MainBox";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const Main = ({ children }) => {
  return (
    <Box component={"main"}>
      <box className={"container"}>
        <TeacherProvider>
          <Provider store={store}>
            <MyThemeProvider>
              <MainBox>
                <Header />
                {children}
                <Footer />
              </MainBox>
            </MyThemeProvider>
          </Provider>
        </TeacherProvider>
      </box>
    </Box>
  );
};

export default Main;
