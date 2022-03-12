import { Typography, Avatar, Skeleton } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import * as React from "react";

interface Props {
    username: string;
    size: "tiny" | "small" | "medium" | "large" | number;
    textVariant?: Variant;
    bottomMargin?: boolean;
}

const _ProfilePicture: React.FunctionComponent<Props> = (props) => {
    const [imageData, setImageData] = React.useState("");
    const [noPicture, setNoPicture] = React.useState(false);

    const hashCode = (str: string) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        return hash;
    }

    const intToRGB = (i: number) => {
        const c = (i & 0x00FFFFFF)
            .toString(16)
            .toUpperCase();

        return "00000".substring(0, 6 - c.length) + c;
    }

    const getInitials = () => {
        let val = "";
        val += props.username[0];
        val += props.username[props.username.length - 1];
        return val;
    }

    React.useEffect(() => {
        setImageData("");
        if (props.username != "") {
            const url = `api/account/getProfilePicture?username=${props.username}`;
            fetch(url, {
                method: 'GET',
                credentials: 'same-origin'
            })
                .then(result => {
                    if (result.ok)
                        result.json().then((data: string) => {
                            setImageData(data);
                        });
                    else
                        setNoPicture(true);
                })
        }
    }, [props.username]);

    let size = 0;
    switch (props.size) {
        case "tiny":
            size = 32;
            break;
        case "small":
            size = 64;
            break;
        case "medium":
            size = 128;
            break;
        case "large":
            size = 256;
            break;
        default:
            size = Number(props.size);
            break;
    }

    // TODO: switch to next image
    return (
        <>
            {imageData != "" ?
                <img
                    src={`data:image/jpg;base64,${imageData}`}
                    style={{ borderRadius: "50%", maxWidth: size, objectFit: "cover", maxHeight: size }}
                    width={size}
                    height={size}
                    alt="Profile Picture"
                />
                :
                (noPicture ?
                    <Avatar
                        sx={{
                            backgroundColor: '#' + intToRGB(hashCode(props.username)),
                            width: size,
                            height: size,
                            margin: "auto",
                            marginBottom: props.bottomMargin ? "1rem" : ""
                        }}
                    >
                        <Typography variant={props.textVariant ?? "h6"}>
                            {getInitials()}
                        </Typography>
                    </Avatar>
                    :
                    <Skeleton
                        variant="circular"
                        width={size}
                        height={size}
                        sx={{
                            margin: "auto",
                            marginBottom: props.bottomMargin ? "0.3rem" : ""
                        }}
                    />
                )
            }
        </>
    );
}

export const ProfilePicture = React.memo(_ProfilePicture);