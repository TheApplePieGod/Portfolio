import React from "react";
import { useLocation } from "react-router";
import { Section } from "./section";
import { useWindowDimensions } from './useWindowDimensions';
import * as theme from '../theme';
import { CircleLine } from "./circleLine";
import { Typography, makeStyles } from "@material-ui/core";
import ComputerIcon from '@material-ui/icons/Computer';
import CodeIcon from '@material-ui/icons/Code';
import CategoryIcon from '@material-ui/icons/Category';
import { SkillBar } from "./skillBar";

const useStyles = makeStyles({
    content: {
        backgroundColor: theme.PALETTE_WHITE,
        position: "absolute",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "8rem",
        top: "100%"
    },
    starSection: {
        //minHeight: "400px",
        marginTop: "75px",
        clipPath: "polygon(0 50px, 100% 0, 100% calc(100% - 50px), 0 100%)",
        backgroundImage: "url(images/background-nomoon.jpg)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "100px",
        paddingTop: "30px",
        height: "max-content"
    },
    parallax: {
        backgroundAttachment: "fixed",
        backgroundPosition: "left",
        backgroundSize: '100vw',
    },
    noParallax: {
        backgroundPosition: 'center',
    },
    bodyText: {
        lineHeight: "40px",
        marginTop: "20px",
        maxWidth: "80%"
    }
});

export const Homelab = () => {
    const classes = useStyles();
    const location = useLocation();
    const { height, width } = useWindowDimensions();

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
                <div className={classes.content}>
                    <Typography variant="h3" style={{ color: theme.PALETTE_BLACK, marginTop: "65px" }}>Introduction</Typography>
                    <CircleLine circleCount={10} />
                    <Typography variant="body1" style={{ color: theme.PALETTE_LIGHT_BLACK }} className={classes.bodyText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero justo laoreet sit amet cursus sit amet dictum. Luctus accumsan tortor posuere ac ut consequat semper. Sit amet venenatis urna cursus eget nunc scelerisque. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Amet dictum sit amet justo donec enim diam. Sapien eget mi proin sed libero enim. Etiam dignissim diam quis enim lobortis. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean.
                    </Typography>
                    <div className={`${classes.starSection} ${condense ? classes.noParallax : classes.parallax}`}>
                        <Typography variant="h3" color="textPrimary" style={{ marginTop: condense ? "20%" : "3%" }}>The Base Layer</Typography>
                        <CircleLine circleCount={11} />
                        <Typography variant="body1" color="textSecondary" className={classes.bodyText}>
                            While it would be possible to run everything in the same space, dividing up computing power into lightweight ‘virtual machines’ allows for efficient organization and separation of services. Using a high horsepower physical machine (we’ll call it ‘Alduin’), it was divided up into smaller virtual ones, each laying claim to a portion of Alduin’s resources. This was possible using a virtualization technology called ‘Proxmox’ -- a flavor of linux running the qemu-based software.
                        </Typography>
                    </div>
                    <Typography variant="h3" style={{ color: theme.PALETTE_BLACK, marginTop: "65px" }}>Node Network</Typography>
                    <CircleLine circleCount={10} />
                    <Typography variant="body1" style={{ color: theme.PALETTE_LIGHT_BLACK }} className={classes.bodyText}>
                        Running on a multitude of virtual machines is a technology known as Kubernetes. Kubernetes is a system for managing workloads and services that can scale across multiple machines. In other words, it is a platform which allows fast deployment of an app or service by an admin without having to worry about where the service is actually running. A Kubernetes cluster is defined by control planes and worker agents, all of which are their own virtual machines. The control planes receive requests and are the central authority of the cluster, while worker agents receive requests from the control plane and are responsible for actually running the requested services. When a workload is deployed, the cluster will automagically pick a worker agent that is the best fit for the job and run the service there.
                    </Typography>
                    <div className={`${classes.starSection} ${condense ? classes.noParallax : classes.parallax}`}>
                        <Typography variant="h3" color="textPrimary" style={{ marginTop: condense ? "20%" : "3%" }}>Cattle System</Typography>
                        <CircleLine circleCount={10} />
                        <Typography variant="body1" color="textSecondary" className={classes.bodyText}>
                            Managing the Kuberenetes cluster all on the command line is difficult, so that’s where Rancher comes in. Rancher is a management tool for Kubernetes that runs inside the cluster itself. It simplifies the DevOps task through a well-featured web UI and provides a one-stop shop for managing the cluster. Running alongside Rancher is another technology known as Longhorn. Longhorn takes disk space and breaks it up into volumetric storage which can be requested by and assigned to workloads. Essentially, Longhorn abstracts the process of allocating storage away from running services on the cluster and allows for more fluid integration. Another key benefit of Longhorn is automatic backup scheduling and replication. If a node running a service fails, replication comes to the rescue because blocks of storage are replicated (copied) across several nodes, meaning the same service can start back up immediately on a different node with no data loss.
                        </Typography>
                    </div>
                    <Typography variant="h3" style={{ color: theme.PALETTE_BLACK, marginTop: "65px" }}>Traffic Routing</Typography>
                    <CircleLine circleCount={12} />
                    <Typography variant="body1" style={{ color: theme.PALETTE_LIGHT_BLACK }} className={classes.bodyText}>
                        As the number of internal and external services on the network increased, a consistent and logical way to route network traffic became a requirement. PiHole, an open source technology, enables custom DNS records, which allows for internal services to be able to reference other services via a sensical string rather than an ip address.  PiHole has the added advantage of automatically blocking domain names that are known advertisers or trackers and as every device on the network uses PiHole as the primary DNS server, no device on the network gets ads (99% of the time). Although PiHole solves a number of the traffic issues, the critical issue of  routing network traffic from the outside internet remains. To remove as many potential security risks as possible, a technology known as Traefik was implemented. Traefik routes external requests and matches the subdomain with the ip of an internal service. This enables hosting of a large number of services without worrying about port overlap or exposing more than the few Traefik access ports on the firewall. Additionally, Traefik routes all traffic through HTTPS using CloudFlare authorized certificates.
                    </Typography>
                    <div className={`${classes.starSection} ${condense ? classes.noParallax : classes.parallax}`}>
                        <Typography variant="h3" color="textPrimary" style={{ marginTop: condense ? "20%" : "3%" }}>Minecraft Server</Typography>
                        <CircleLine circleCount={13} />
                        <Typography variant="body1" color="textSecondary" className={classes.bodyText}>
                            With all of the infrastructure finally in place, it was time to put it to the test. As Minecraft was a simple test and a popular game amongst my friend group, I decided to start there. I created my own fully featured docker image that would run the server with a variety of additional administration features, and I created a workload through the Rancher UI. I added the service to traefik so it was accessible via a domain name, and I added the new subdomain to CloudFlare.
                        </Typography>
                    </div>
                    <Typography variant="h3" style={{ color: theme.PALETTE_BLACK, marginTop: "65px" }}>Epilogue</Typography>
                    <CircleLine circleCount={7} />
                    <Typography variant="body1" style={{ color: theme.PALETTE_LIGHT_BLACK }} className={classes.bodyText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero justo laoreet sit amet cursus sit amet dictum. Luctus accumsan tortor posuere ac ut consequat semper. Sit amet venenatis urna cursus eget nunc scelerisque. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Amet dictum sit amet justo donec enim diam. Sapien eget mi proin sed libero enim. Etiam dignissim diam quis enim lobortis. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean.
                    </Typography>
                </div>
            }
        </div>
    );
}