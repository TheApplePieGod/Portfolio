import { Box, Tooltip } from "@mui/material";
import Image from "next/image";
import * as React from "react";

export enum TechIconType {
    React,
    TS,
    CSharp,
    Python,
    HTMLCss,
    Cpp,
    SQL,
    Azure
}

const ICON_TYPE_DATA: Record<TechIconType, { url: string; alt: string }> = {
    [TechIconType.React]: { url: "/images/react.png", alt: "React" },
    [TechIconType.TS]: { url: "/images/typescript.png", alt: "Typescript" },
    [TechIconType.CSharp]: { url: "/images/cs.svg", alt: "C#" },
    [TechIconType.Python]: { url: "/images/python.png", alt: "Python" },
    [TechIconType.HTMLCss]: { url: "/images/csshtml.svg", alt: "HTML/CSS" },
    [TechIconType.Cpp]: { url: "/images/cpp.svg", alt: "C++" },
    [TechIconType.SQL]: { url: "/images/sql.png", alt: "SQL" },
    [TechIconType.Azure]: { url: "/images/azure.png", alt: "Azure" }
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
        <Tooltip title={props.tooltip ? data.alt : undefined} arrow>
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
        </Tooltip>
    );
};
