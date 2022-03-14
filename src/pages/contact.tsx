import * as React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { NextSeo } from "next-seo";
import { Section } from "../Components/UI/Section";
import { useAppSelector } from "../Redux/Hooks";

const ContactPage = () => {
    const expanded = useAppSelector(state => state.pageExpanded);

    return (
        <React.Fragment>
            <NextSeo
                title="Contact | Evan Thompson's Portfolio"
                openGraph={{
                    title: "Contact"
                }}
            />
            <Box>
                <Section
                    title="Contact"
                    subtitle="Get in touch with me"
                    buttonText=""
                    imagePath="/images/contact.jpg"
                >

                </Section>
            </Box>
        </React.Fragment>
    );
}

export default ContactPage;