import Head from "@/components/Head/Head";
import { PrimaryBox } from "@/mui/Boxes/PrimaryBox";
import { PrimaryContainer } from "@/mui/Containers/PrimaryContainer";
import React from "react";

const BranchesSection = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid jcs aic g50`}>
        <Head title={"Branches"} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default BranchesSection;
