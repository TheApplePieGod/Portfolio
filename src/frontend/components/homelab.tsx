import React from "react";
import { useLocation } from "react-router";
import { Section } from "./section";
import { useWindowDimensions } from './useWindowDimensions';
import * as theme from '../theme';
import { CircleLine } from "./circleLine";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    content: {
        position: "absolute",
        width: "100vw",
        paddingBottom: "8rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        top: "100%",
    },
    innerContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    starSection: {
        //minHeight: "400px",
        margin: "10px 0 10px 0",
        clipPath: "polygon(0 50px, 100% 0, 100% calc(100% - 50px), 0 100%)",
        backgroundImage: "url(images/background-nomoon.jpg)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "75px",
        paddingTop: "75px",
        height: "max-content"
    },
    parallax: {
        background: "url(images/background-nomoon.jpg)",
        backgroundAttachment: "fixed",
        backgroundPosition: "left",
        backgroundSize: '100vw',
    },
    noParallax: {
        background: theme.PALETTE_WHITE,
        backgroundPosition: 'center',
    },
    bodyText: {
        lineHeight: "40px",
        marginTop: "20px",
        maxWidth: "90%"
    },
    computerBorder: {
        //backgroundColor: "#2c2a33E6",
        background: "linear-gradient(90deg, rgba(44,42,48,0.95) 0%, rgba(66,63,73,0.95) 50%, rgba(44,42,48,0.95) 100%)",
        borderRadius: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 0 20px 0",
        border: `5px solid ${theme.PALETTE_BLACK}`,
    },
    computerCell: {
        width: "calc(100% - 80px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: `5px solid ${theme.PALETTE_BLACK}`,
        borderRadius: "50px 50px 50px 50px",
        padding: "50px 0 50px 0",
        position: "relative",
        marginTop: "-5px"
    },
    computerLights: {
        position: "absolute",
        right: "14px",
        bottom: "8px",
        display: "flex",
        gap: "10px",
        opacity: "0.8"
    },
    computerVents: {
        position: "absolute",
        left: "30px",
        top: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "4px"
    },
    computerPorts: {
        position: "absolute",
        right: "30px",
        top: "10px",
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        gap: "20px",
        opacity: "0.3"
    },
    computerLight: {
        width: "50px",
        height: "50px",
        borderRadius: "25px",
        filter: "blur(2px)"
    },
    computerVent: {
        width: "25px",
        height: "25px",
        border: `4px solid #5B57654D`
    },
    imageContainer: {
        marginTop: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        gap: "0.5rem",
        width: "100%"
    },
    subtitle: {
        marginTop: "-0.25rem",
        marginBottom: "0.75rem",
        maxWidth: "80%"
    }
});

const ComputerExtras = () => {
    const classes = useStyles();
    const [colors, setColors] = React.useState([
        "radial-gradient(circle, rgba(255,213,213,1) 0%, rgba(254,150,150,1) 3%, rgba(252,0,0,1) 100%)",
        "radial-gradient(circle, rgba(213,255,215,1) 0%, rgba(150,254,151,1) 3%, rgba(90,252,0,1) 100%)",
        "radial-gradient(circle, rgba(255,253,213,1) 0%, rgba(254,253,150,1) 3%, rgba(252,249,0,1) 100%)"
    ]);
    const [lightCount, setLightCount] = React.useState(Math.trunc(Math.random() * 2) + 1);

    const mapLights = () => {
        let elements: JSX.Element[] = [];
        for (let i = 0; i < lightCount; i++) {
            elements.push(<div key={colors[i]} className={classes.computerLight} style={{ background: colors[i] }} />);
        }
        return elements;
    }

    const ventRow = () => {
        let elements: JSX.Element[] = [];
        for (let i = 0; i < 8; i++) {
            elements.push(<div key={i} className={classes.computerVent}></div>);
        }
        return (
            <div style={{ display: "flex", gap: "4px" }}>
                {elements}
            </div>
        )
    }

    return (
        <React.Fragment>
            <div className={classes.computerVents}>
                {ventRow()}
                {ventRow()}
            </div>
            <div className={classes.computerPorts}>
                <img src="images/port1.svg" width={70} height={70} />
                <img src="images/port2.svg" width={100} height={100} />
            </div>
            <div className={classes.computerLights}>
                {mapLights()}          
            </div>
        </React.Fragment>
    );
}

export const Homelab = () => {
    const classes = useStyles();
    const location = useLocation();
    const { height, width } = useWindowDimensions();

    const [scrollY, setScrollY] = React.useState(0);

    const onScroll = () => {
        const winScroll = document.body.scrollTop;
        setScrollY(winScroll);
    }

    React.useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, [])

    const condense = width < 1000;

    return (
        <div>
            <Section
                key="0"
                title="Homelab"
                subtitle="take a journey through the datacenter style services i setup inside my own home"
                buttonText="TOUR"
                buttonPath="/homelab/more"
                imagePath="images/homelab.png"
                basePath="/homelab"
            />
            {location.pathname.includes("/more") &&
                <div className={`${classes.content} ${condense ? classes.noParallax : classes.parallax}`} style={{ backgroundPositionY: scrollY * -0.25 }}>
                    <div className={condense ? classes.innerContent : classes.computerBorder} style={{ width: condense ? "100%" : "80%", marginTop: condense ? "0" : "5rem" }}>
                        <div className={condense ? classes.innerContent : classes.computerCell} style={{ marginTop: condense ? "65px" : "0" }}>
                            <Typography variant="h3" style={{ color: condense ? theme.PALETTE_BLACK : theme.PALETTE_WHITE, zIndex: 2 }}>Introduction</Typography>
                            <CircleLine circleCount={10} />
                            <Typography variant="body1" style={{ color: condense ? theme.PALETTE_LIGHT_BLACK : theme.PALETTE_DARK_WHITE }} className={classes.bodyText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero justo laoreet sit amet cursus sit amet dictum. Luctus accumsan tortor posuere ac ut consequat semper. Sit amet venenatis urna cursus eget nunc scelerisque. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Amet dictum sit amet justo donec enim diam. Sapien eget mi proin sed libero enim. Etiam dignissim diam quis enim lobortis. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean.
                            </Typography>
                            {!condense && <ComputerExtras /> }
                        </div>

                        <div className={condense ? classes.starSection : classes.computerCell}>
                            <Typography variant="h3" style={{ color: theme.PALETTE_WHITE, zIndex: 2 }}>The Base Layer</Typography>
                            <CircleLine circleCount={11} />
                            <Typography variant="body1" style={{ color: theme.PALETTE_DARK_WHITE }} className={classes.bodyText}>
                                While it would be possible to run everything in the same space, dividing up computing power into lightweight ‘virtual machines’ allows for efficient organization and separation of services. Using a high horsepower physical machine (we’ll call it ‘Alduin’), it was divided up into smaller virtual ones, each laying claim to a portion of Alduin’s resources. This was possible using a virtualization technology called ‘Proxmox’ -- a flavor of linux running the qemu-based software.
                            </Typography>
                            <div className={classes.imageContainer}>
                                <img alt="Proxmox dashboard" src="/images/homelab/proxmox.png" style={{ width: "80%", height: condense ? "40vw" : "20vw" }} />
                                <Typography variant="subtitle1" style={{ color: theme.PALETTE_DARK_WHITE }} className={classes.subtitle}>Proxmox dashboard</Typography>
                            </div>
                            {!condense && <ComputerExtras /> }
                        </div>

                        <div className={condense ? classes.innerContent : classes.computerCell}>
                            <Typography variant="h3" style={{ color: condense ? theme.PALETTE_BLACK : theme.PALETTE_WHITE, zIndex: 2 }}>Node Network</Typography>
                            <CircleLine circleCount={10} />
                            <Typography variant="body1" style={{ color: condense ? theme.PALETTE_LIGHT_BLACK : theme.PALETTE_DARK_WHITE }} className={classes.bodyText}>
                                Running on a multitude of virtual machines is a technology known as Kubernetes. Kubernetes is a system for managing workloads and services that can scale across multiple machines. In other words, it is a platform which allows fast deployment of an app or service by an admin without having to worry about where the service is actually running. A Kubernetes cluster is defined by control planes and worker agents, all of which are their own virtual machines. The control planes receive requests and are the central authority of the cluster, while worker agents receive requests from the control plane and are responsible for actually running the requested services. When a workload is deployed, the cluster will automagically pick a worker agent that is the best fit for the job and run the service there.
                            </Typography>
                            <div className={classes.imageContainer}>
                                <img alt="Virtual machines running on Alduin" src="/images/homelab/kubernetes1.png" style={{ width: condense ? "80%" : "50%", height: condense ? "40vw" : "20vw" }} />
                                <Typography variant="subtitle1" style={{ color: condense ? theme.PALETTE_LIGHT_BLACK : theme.PALETTE_DARK_WHITE }} className={classes.subtitle}>Virtual machines running on Alduin</Typography>
                            </div>
                            {!condense && <ComputerExtras /> }
                        </div>

                        <div className={condense ? classes.starSection : classes.computerCell}>
                            <Typography variant="h3" style={{ color: theme.PALETTE_WHITE, zIndex: 2 }}>Cattle System</Typography>
                            <CircleLine circleCount={10} />
                            <Typography variant="body1" style={{ color: theme.PALETTE_DARK_WHITE }} className={classes.bodyText}>
                                Managing the Kuberenetes cluster all on the command line is difficult, so that’s where Rancher comes in. Rancher is a management tool for Kubernetes that runs inside the cluster itself. It simplifies the DevOps task through a well-featured web UI and provides a one-stop shop for managing the cluster. Running alongside Rancher is another technology known as Longhorn. Longhorn takes disk space and breaks it up into volumetric storage which can be requested by and assigned to workloads. Essentially, Longhorn abstracts the process of allocating storage away from running services on the cluster and allows for more fluid integration. Another key benefit of Longhorn is automatic backup scheduling and replication. If a node running a service fails, replication comes to the rescue because blocks of storage are replicated (copied) across several nodes, meaning the same service can start back up immediately on a different node with no data loss.
                            </Typography>
                            <div className={classes.imageContainer}>
                                <img alt="Rancher cluster explorer" src="/images/homelab/rancher1.png" style={{ width: "80%", height: condense ? "40vw" : "25vw" }} />
                                <Typography variant="subtitle1" style={{ color: theme.PALETTE_DARK_WHITE }} className={classes.subtitle}>Rancher cluster explorer</Typography>
                                <img alt="Rancher list of Kubernetes nodes" src="/images/homelab/rancher2.png" style={{ width: "80%", height: condense ? "40vw" : "25vw" }} />
                                <Typography variant="subtitle1" style={{ color: theme.PALETTE_DARK_WHITE }} className={classes.subtitle}>Rancher list of Kubernetes nodes</Typography>
                                <img alt="Longhorn dashboard" src="/images/homelab/longhorn1.png" style={{ width: "80%", height: condense ? "40vw" : "25vw" }} />
                                <Typography variant="subtitle1" style={{ color: theme.PALETTE_DARK_WHITE }} className={classes.subtitle}>Longhorn dashboard</Typography>
                                <img alt="A longhorn volume" src="/images/homelab/longhorn2.png" style={{ width: "80%", height: condense ? "40vw" : "25vw" }} />
                                <Typography variant="subtitle1" style={{ color: theme.PALETTE_DARK_WHITE }} className={classes.subtitle}>A longhorn volume</Typography>
                            </div>
                            {!condense && <ComputerExtras /> }
                        </div>

                        <div className={condense ? classes.innerContent : classes.computerCell}>
                            <Typography variant="h3" style={{ color: condense ? theme.PALETTE_BLACK : theme.PALETTE_WHITE, zIndex: 2 }}>Traffic Routing</Typography>
                            <CircleLine circleCount={12} />
                            <Typography variant="body1" style={{ color: condense ? theme.PALETTE_LIGHT_BLACK : theme.PALETTE_DARK_WHITE }} className={classes.bodyText}>
                                As the number of internal and external services on the network increased, a consistent and logical way to route network traffic became a requirement. PiHole, an open source technology, enables custom DNS records, which allows for internal services to be able to reference other services via a sensical string rather than an ip address.  PiHole has the added advantage of automatically blocking domain names that are known advertisers or trackers and as every device on the network uses PiHole as the primary DNS server, no device on the network gets ads (99% of the time). Although PiHole solves a number of the traffic issues, the critical issue of  routing network traffic from the outside internet remains. To remove as many potential security risks as possible, a technology known as Traefik was implemented. Traefik routes external requests and matches the subdomain with the ip of an internal service. This enables hosting of a large number of services without worrying about port overlap or exposing more than the few Traefik access ports on the firewall. Additionally, Traefik routes all traffic through HTTPS using CloudFlare authorized certificates.
                            </Typography>
                            <div className={classes.imageContainer}>
                                <img alt="PiHole dashboard" src="/images/homelab/pihole1.png" style={{ width: "70%", height: condense ? "40vw" : "30vw" }} />
                                <Typography variant="subtitle1" style={{ color: condense ? theme.PALETTE_LIGHT_BLACK : theme.PALETTE_DARK_WHITE }} className={classes.subtitle}>PiHole dashboard</Typography>
                                <img alt="Traefik router list" src="/images/homelab/traefik1.png" style={{ width: "70%", height: condense ? "40vw" : "25vw" }} />
                                <Typography variant="subtitle1" style={{ color: condense ? theme.PALETTE_LIGHT_BLACK : theme.PALETTE_DARK_WHITE }} className={classes.subtitle}>Traefik router list</Typography>
                                <img alt="Traefik dashboard" src="/images/homelab/traefik2.png" style={{ width: "70%", height: condense ? "40vw" : "25vw" }} />
                                <Typography variant="subtitle1" style={{ color: condense ? theme.PALETTE_LIGHT_BLACK : theme.PALETTE_DARK_WHITE }} className={classes.subtitle}>Traefik dashboard</Typography>
                            </div>
                            {!condense && <ComputerExtras /> }
                        </div>

                        <div className={condense ? classes.starSection : classes.computerCell}>
                            <Typography variant="h3" style={{ color: theme.PALETTE_WHITE, zIndex: 2 }}>Minecraft Server</Typography>
                            <CircleLine circleCount={13} />
                            <Typography variant="body1" style={{ color: theme.PALETTE_DARK_WHITE }} className={classes.bodyText}>
                                With all of the infrastructure finally in place, it was time to put it to the test. As Minecraft was a simple test and a popular game amongst my friend group, I decided to start there. I created my own fully featured docker image that would run the server with a variety of additional administration features, and I created a workload through the Rancher UI. I added the service to traefik so it was accessible via a domain name, and I added the new subdomain to CloudFlare.
                            </Typography>
                            <div className={classes.imageContainer}>
                                <img alt="Workload basic info" src="/images/homelab/minecraft1.png" style={{ width: "70%", height: condense ? "40vw" : "25vw" }} />
                                <Typography variant="subtitle1" style={{ color: theme.PALETTE_DARK_WHITE }} className={classes.subtitle}>Workload basic info</Typography>
                                <img alt="Workload volumes" src="/images/homelab/minecraft2.png" style={{ width: "70%", height: condense ? "40vw" : "30vw" }} />
                                <Typography variant="subtitle1" style={{ color: theme.PALETTE_DARK_WHITE }} className={classes.subtitle}>Workload volumes</Typography>
                                <img alt="Minecraft server screenshot" src="/images/homelab/minecraft3.png" style={{ width: "70%", height: condense ? "40vw" : "25vw" }} />
                                <Typography variant="subtitle1" style={{ color: theme.PALETTE_DARK_WHITE }} className={classes.subtitle}>Success!</Typography>
                            </div>
                            {!condense && <ComputerExtras /> }
                        </div>

                        <div className={condense ? classes.innerContent : classes.computerCell}>
                            <Typography variant="h3" style={{ color: condense ? theme.PALETTE_BLACK : theme.PALETTE_WHITE, zIndex: 2 }}>Epilogue</Typography>
                            <CircleLine circleCount={7} />
                            <Typography variant="body1" style={{ color: condense ? theme.PALETTE_LIGHT_BLACK : theme.PALETTE_DARK_WHITE }} className={classes.bodyText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero justo laoreet sit amet cursus sit amet dictum. Luctus accumsan tortor posuere ac ut consequat semper. Sit amet venenatis urna cursus eget nunc scelerisque. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Amet dictum sit amet justo donec enim diam. Sapien eget mi proin sed libero enim. Etiam dignissim diam quis enim lobortis. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean.
                            </Typography>
                            {!condense && <ComputerExtras /> }
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}