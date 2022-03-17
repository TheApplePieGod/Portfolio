import * as React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { NextSeo } from "next-seo";
import { Section } from "../Components/UI/Section";
import { useAppSelector } from "../Redux/Hooks";
import { CircleLine } from "../Components/UI/CircleLine";
import Image from "next/image";
import { StarrySection } from "../Components/UI/StarrySection";
import SvgIcon from "@mui/material/SvgIcon";
import ComputerIcon from '@mui/icons-material/Computer';
import CodeIcon from '@mui/icons-material/Code';
import CategoryIcon from '@mui/icons-material/Category';

const InterestBlock = (props: { text: string; icon: typeof SvgIcon }) => {
    return (
        <Box sx={{ width: { xs: "90%", md: "35%" } }}>
            <props.icon sx={{ width: "15vw", height: "15vw" }} />
            <Typography variant="body1" color="textSecondary" sx={{ lineHeight: "40px" }}>
                {props.text}
            </Typography>
        </Box>
    );
}

const AboutPage = () => {
    const expanded = useAppSelector(state => state.pageExpanded);

    return (
        <React.Fragment>
            <NextSeo
                title="About | Evan Thompson's Portfolio"
                openGraph={{
                    title: "About"
                }}
            />
            <Box>
                <Section
                    title="About Me"
                    subtitle="I am a high school student with a passion for computer science"
                    buttonText="LEARN MORE"
                    imagePath="/images/about.jpg"
                />
                {expanded &&
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
                            top: "100%"
                        }}
                    >
                        <Typography variant="h3" color="text.primaryDark" sx={{ mt: "65px" }}>Introduction</Typography>
                        <CircleLine count={10} />
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: "50px",
                                flexDirection: { xs: "column", md: "row" }
                            }}
                        >
                            <Box
                                sx={{
                                    width: { xs: 200, sm: 200, md: 300, lg: 400 },
                                    height: { xs: 200, sm: 200, md: 300, lg: 400 },
                                    position: "relative",
                                }}
                            >
                                <Image src="/images/user.png" alt="Generic User Image" layout="fill" objectFit="cover" />
                            </Box>
                            <Typography
                                variant="body1"
                                color="text.secondaryDark"
                                sx={{
                                    maxWidth:  { xs: "90%", md: "50%" },
                                    marginLeft:  { xs: 0, md : "75px" },
                                    marginTop: { xs: "1rem", md: 0 },
                                    lineHeight: "40px"
                                }}
                            >
                                Born in the United States in 2003, I have spent most of my life traversing the world of computer science. I started programming at a very young age, and I have dabbled in some of the many different worlds of computer science. Game development, computer graphics, web design, and web development are a few of them that I have experience in.  
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
                                    marginBottom: "50px"
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
                                    text="Designing systems and models is always a daunting task when presented, but I love doing it and have done it countless times. Graphical design is not my strong suit, but I am learning"
                                    icon={CategoryIcon}
                                />
                            </Box>
                        </StarrySection>
                    </Box>
                }
            </Box>
        </React.Fragment>
    );
}

export default AboutPage;