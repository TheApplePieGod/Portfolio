import { Box, Tooltip } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import { StyledTooltip } from "./StyledTooltip";

export enum TechIconType {
    React,
    TS,
    CSharp,
    Python,
    HTMLCss,
    Cpp,
    SQL,
    Azure,
    Vulkan
}

const ICON_TYPE_DATA: Record<TechIconType, { url: string; alt: string }> = {
    [TechIconType.React]: { url: "/images/react.webp", alt: "React" },
    [TechIconType.TS]: { url: "/images/typescript.webp", alt: "Typescript" },
    [TechIconType.CSharp]: { url: "/images/cs.svg", alt: "C#" },
    [TechIconType.Python]: { url: "/images/python.webp", alt: "Python" },
    [TechIconType.HTMLCss]: { url: "/images/csshtml.svg", alt: "HTML/CSS" },
    [TechIconType.Cpp]: { url: "/images/cpp.svg", alt: "C++" },
    [TechIconType.SQL]: { url: "/images/sql.webp", alt: "SQL" },
    [TechIconType.Azure]: { url: "/images/azure.webp", alt: "Azure" },
    [TechIconType.Vulkan]: { url: "/images/vulkan.webp", alt: "Vulkan" }
};

interface Props {
    sizeScalar?: number;
    type: TechIconType;
    tooltip?: boolean;
}

export const TechIcon = (props: Props) => {
    const data = ICON_TYPE_DATA[props.type];
    const sizeScalar = props.sizeScalar ?? 1;

    if (!data) return <></>;

    return (
        <StyledTooltip
            text={props.tooltip ? data.alt : undefined}
            tooltip={{ arrow: true }}
        >
            <Box
                sx={{
                    minWidth: {
                        xs: 35 * sizeScalar,
                        sm: 45 * sizeScalar,
                        md: 55 * sizeScalar,
                        lg: 65 * sizeScalar
                    },
                    minHeight: {
                        xs: 35 * sizeScalar,
                        sm: 45 * sizeScalar,
                        md: 55 * sizeScalar,
                        lg: 65 * sizeScalar
                    },
                    position: "relative"
                }}
            >
                <Image
                    src={data.url}
                    alt={data.alt}
                    fill
                    sizes={`${Math.round(70 * sizeScalar)}px`}
                />
            </Box>
        </StyledTooltip>
    );
};
