import * as React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { NextSeo } from "next-seo";
import { Section } from "../Components/UI/Section";
import { useAppSelector } from "../Redux/Hooks";
import { CircleLine } from "../Components/UI/CircleLine";
import Image from "next/image";
import { StarrySection } from "../Components/UI/StarrySection";
import SvgIcon from "@mui/material/SvgIcon";
import ComputerIcon from "@mui/icons-material/Computer";
import CodeIcon from "@mui/icons-material/Code";
import CategoryIcon from "@mui/icons-material/Category";
import { SkillBar } from "../Components/UI/SkillBar";

const InterestBlock = (props: { text: string; icon: typeof SvgIcon }) => {
  return (
    <Box sx={{ width: { xs: "90%", md: "35%" } }}>
      <props.icon sx={{ width: "15vw", height: "15vw" }} />
      <Typography variant="body1" color="textSecondary">
        {props.text}
      </Typography>
    </Box>
  );
};

const AboutPage = () => {
  const expanded = useAppSelector((state) => state.pageExpanded);
  const description = "I am an MIT student with a passion for computer science";

  return (
    <React.Fragment>
      <NextSeo
        title="About | Evan Thompson's Portfolio"
        description={description}
        openGraph={{
          title: "About",
          description: description,
        }}
      />
      <Box>
        <Section
          title="About Me"
          subtitle={description}
          buttonText="LEARN MORE"
          imagePath="/images/about.jpg"
        />
        {expanded && (
          <Box
            sx={{
              backgroundColor: "text.primary",
              position: "absolute",
              left: 0,
              width: "100vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              top: "100%",
            }}
          >
            <Typography
              variant="h3"
              color="text.primaryDark"
              sx={{ mt: "60px" }}
            >
              Introduction
            </Typography>
            <CircleLine count={10} />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "50px",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box
                sx={{
                  width: { xs: 200, sm: 200, md: 300, lg: 400 },
                  height: { xs: 200, sm: 200, md: 300, lg: 400 },
                  position: "relative",
                }}
              >
                <Image
                  src="/images/user.png"
                  alt="Generic User Image"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
              <Typography
                variant="body1"
                color="text.secondaryDark"
                sx={{
                  maxWidth: { xs: "90%", md: "50%" },
                  marginLeft: { xs: 0, md: "75px" },
                  marginTop: { xs: "1rem", md: 0 },
                  lineHeight: "40px",
                }}
              >
                Born in the United States in 2003, I have spent most of my life
                traversing the world of computer science. I started programming
                at a very young age, and I have dabbled in some of the many
                different worlds of computer science. Game development, computer
                graphics, web development, and low-level programming are a few
                of them that I have experience in.
              </Typography>
            </Box>
            <StarrySection>
              <Typography variant="h3">Interests</Typography>
              <CircleLine count={8} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4rem",
                  textAlign: "center",
                  padding: "0 3% 0 3%",
                  paddingTop: "50px",
                  marginBottom: "50px",
                }}
              >
                <InterestBlock
                  text="Computers and technology are dominant in the modern world, and maintaining an understanding of how they work and operate is something I pride myself in"
                  icon={ComputerIcon}
                />
                <InterestBlock
                  text="The programs that drive computers to complete tasks and display information has always fascinated me and is something I have dedicated a lot of my life to"
                  icon={CodeIcon}
                />
                <InterestBlock
                  text="Designing systems and models is always a daunting task when presented, but I love doing it and have done it countless times. Graphical design is not my strong suit, but I am always improving"
                  icon={CategoryIcon}
                />
              </Box>
            </StarrySection>
            <Typography
              variant="h3"
              color="text.primaryDark"
              sx={{ marginTop: "60px" }}
            >
              Skills
            </Typography>
            <CircleLine count={5} />
            <Typography
              variant="h5"
              color="text.secondaryDark"
              sx={{ marginBottom: "40px" }}
            >
              Confidence
            </Typography>
            <Grid
              container
              spacing={{ xs: 2, sm: 3, md: 4 }}
              columnSpacing={6}
              columns={12}
              sx={{
                padding: { xs: "0 30px", md: "0 60px" },
                maxWidth: "1400px",
              }}
            >
              <SkillBar
                percentage={90}
                yearCount={4}
                skillName="ReactJS"
                iconPath="/images/react.png"
                iconAlt="React Logo"
              />{" "}
              {/* 2019 */}
              <SkillBar
                percentage={90}
                yearCount={8}
                skillName="HTML/CSS"
                iconPath="/images/csshtml.svg"
                iconAlt="HTML/CSS Logo"
              />{" "}
              {/* 2015 */}
              <SkillBar
                percentage={90}
                yearCount={7}
                skillName="JS/TS"
                iconPath="/images/typescript.png"
                iconAlt="JS/TS Logo"
              />{" "}
              {/* 2016 */}
              <SkillBar
                percentage={90}
                yearCount={6}
                skillName="C++"
                iconPath="/images/cpp.svg"
                iconAlt="C++ Logo"
              />{" "}
              {/* 2017 */}
              <SkillBar
                percentage={80}
                yearCount={5}
                skillName="C#/DotNet"
                iconPath="/images/cs.svg"
                iconAlt="C#/DotNet Logo"
              />{" "}
              {/* 2018 */}
              <SkillBar
                percentage={80}
                yearCount={4}
                skillName="SQL"
                iconPath="/images/sql.png"
                iconAlt="SQL Logo"
              />{" "}
              {/* 2019 */}
              <SkillBar
                percentage={70}
                yearCount={3}
                skillName="Python"
                iconPath="/images/python.png"
                iconAlt="Python Logo"
              />{" "}
              {/* 2020 */}
              <SkillBar
                percentage={50}
                yearCount={3}
                skillName="Azure"
                iconPath="/images/azure.png"
                iconAlt="Azure Logo"
              />{" "}
              {/* 2020 */}
            </Grid>

            {/* Spacer */}
            <Box sx={{ height: "150px" }} />
          </Box>
        )}
      </Box>
    </React.Fragment>
  );
};

export default AboutPage;
