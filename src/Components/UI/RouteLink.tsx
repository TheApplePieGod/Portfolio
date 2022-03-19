import * as React from "react";
import { Link, SxProps, Theme } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import { useRouter } from "next/router";

interface Props {
    route: string;
    variant?: Variant;
    sx?: SxProps<Theme>;
}

export const RouteLink: React.FunctionComponent<Props> = (props) => {
    const router = useRouter();

    return (
        <Link
            component="button"
            variant={props.variant ?? "subtitle1"}
            onClick={() => router.push(props.route)}
            sx={{
                color: "info",
                ...props.sx
            }}
        >
            {props.children}
        </Link>
    );
}