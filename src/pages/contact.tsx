import * as React from "react";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import { NextSeo } from "next-seo";
import { Section } from "../Components/UI/Section";
import { useAppSelector } from "../Redux/Hooks";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";

const ContactPage = () => {
    const expanded = useAppSelector((state) => state.pageExpanded);

    return (
        <React.Fragment>
            <NextSeo
                title="Contact | Evan Thompson's Portfolio"
                description="Contact information to help you reach out to me"
                openGraph={{
                    title: "Contact",
                    description:
                        "Contact information to help you reach out to me"
                }}
            />
            <Box>
                <Section
                    title="Contact"
                    subtitle="Get in touch with me"
                    buttonText=""
                    imagePath="/images/contact.webp"
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            pointerEvents: "all"
                        }}
                    >
                        <IconButton
                            href="mailto:evant.002@gmail.com"
                            sx={{ padding: 0 }}
                        >
                            <MailOutlineIcon
                                sx={{
                                    fontSize: "40px",
                                    color: (theme) => theme.palette.text.primary
                                }}
                            />
                        </IconButton>
                        <IconButton
                            href="https://twitter.com/TheApplePieGod"
                            target="_blank"
                            sx={{ padding: 0 }}
                        >
                            <TwitterIcon
                                sx={{
                                    fontSize: "40px",
                                    color: (theme) => theme.palette.text.primary
                                }}
                            />
                        </IconButton>
                    </Box>
                </Section>
            </Box>
        </React.Fragment>
    );
};

export default ContactPage;
