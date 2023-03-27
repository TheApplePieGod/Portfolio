import * as React from "react";
import {
    Box,
    Divider,
    styled,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import { NextSeo } from "next-seo";
import { Section } from "../Components/UI/Section";
import { useAppSelector } from "../Redux/Hooks";
import { StarrySection } from "../Components/UI/StarrySection";
import { ComputerCell } from "../Components/UI/ComputerCell";
import { CircleLine } from "../Components/UI/CircleLine";

const HomelabPage = () => {
    const theme = useTheme();
    const condense = useMediaQuery(theme.breakpoints.down("md"));
    const expanded = useAppSelector((state) => state.pageExpanded);

    return (
        <React.Fragment>
            <NextSeo
                title="Homelab | Evan Thompson's Portfolio"
                description="An overview of the datacenter style services I setup inside my own home"
                openGraph={{
                    title: "Homelab",
                    description:
                        "An overview of the datacenter style services I setup inside my own home"
                }}
            />
            <Box>
                <Section
                    title="Homelab"
                    subtitle="Take a journey through the datacenter style services I setup inside my own home"
                    buttonText="TOUR"
                    imagePath="/images/homelab.png"
                />
                {expanded && (
                    <Box
                        sx={{
                            position: "absolute",
                            width: "100vw",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            top: "100%",
                            left: 0,
                            backgroundColor: {
                                xs: "text.primary",
                                md: "inherit"
                            }
                        }}
                    >
                        <StarrySection disabled={condense}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: { xs: "90%", md: "80%" },
                                    marginTop: "40px",
                                    ...(!condense && {
                                        background:
                                            "linear-gradient(90deg, rgba(44,42,48,0.95) 0%, rgba(66,63,73,0.95) 50%, rgba(44,42,48,0.95) 100%)",
                                        borderRadius: "50px",
                                        padding: "20px 0 20px 0",
                                        border: (theme) =>
                                            `5px solid ${theme.palette.text.primaryDark}`
                                    })
                                }}
                            >
                                <ComputerCell
                                    title="Introduction"
                                    circleCount={10}
                                    content="I have always been fascinated by Google and Microsoft and other large corporations that manage astronomical datacenters with hundreds of thousands of computers. I always wondered what it would be like to manage a system like that, and that is when I discovered a technology called Kubernetes. With help from my family, I was able to purchase an old datacenter computer off of ebay, and I decided to test out these technologies once and for all."
                                />
                                <ComputerCell
                                    starry
                                    title="The Base Layer"
                                    circleCount={11}
                                    content="While it would be possible to run everything in the same space, dividing up computing power into lightweight ‘virtual machines’ allows for efficient organization and separation of services. Using a high horsepower physical machine (we’ll call it ‘Alduin’), it was divided up into smaller virtual ones, each laying claim to a portion of Alduin’s resources. This was possible using a virtualization technology called ‘Proxmox’, which is a qemu-based software running on a custom version of linux."
                                    images={[
                                        {
                                            path: "/images/homelab/proxmox.png",
                                            subtitle: "Proxmox dashboard"
                                        }
                                    ]}
                                />
                                <ComputerCell
                                    title="Node Network"
                                    circleCount={10}
                                    content="Running on a multitude of virtual machines is a technology known as Kubernetes. Kubernetes is a system for managing workloads and services that can scale across multiple machines. In other words, it is a platform which allows fast deployment of an app or service by an admin without having to worry about where the service is actually running. A Kubernetes cluster is defined by control planes and worker agents, all of which are their own virtual machines. The control planes receive requests and are the central authority of the cluster, while worker agents receive requests from the control plane and are responsible for actually running the requested services. When a workload is deployed, the cluster will automagically pick a worker agent that is the best fit for the job and run the service there."
                                    images={[
                                        {
                                            path: "/images/homelab/kubernetes1.png",
                                            subtitle:
                                                "Virtual machines running on Alduin"
                                        }
                                    ]}
                                />
                                <ComputerCell
                                    starry
                                    title="Cattle System"
                                    circleCount={10}
                                    content="Managing the Kuberenetes cluster all on the command line is difficult, so that’s where Rancher comes in. Rancher is a management tool for Kubernetes that runs inside the cluster itself. It simplifies the DevOps task through a well-featured web UI and provides a one-stop shop for managing the cluster. Running alongside Rancher is another technology known as Longhorn. Longhorn, a distributed storage system, takes disk space and breaks it up into volumetric storage which can be requested by and assigned to workloads. Essentially, Longhorn abstracts the process of allocating storage away from running services on the cluster and allows for more fluid integration. Another key benefit of Longhorn is automatic backup scheduling and replication. If a node running a service fails, replication comes to the rescue because blocks of storage are replicated (copied) across several nodes, meaning the same service can start back up immediately on a different node with no data loss."
                                    images={[
                                        {
                                            path: "/images/homelab/rancher1.png",
                                            subtitle: "Rancher cluster explorer"
                                        },
                                        {
                                            path: "/images/homelab/rancher2.png",
                                            subtitle:
                                                "Rancher list of Kubernetes nodes"
                                        },
                                        {
                                            path: "/images/homelab/longhorn1.png",
                                            subtitle: "Longhorn dashboard"
                                        },
                                        {
                                            path: "/images/homelab/longhorn2.png",
                                            subtitle: "A longhorn volume"
                                        }
                                    ]}
                                />
                                <ComputerCell
                                    title="Traffic Routing"
                                    circleCount={12}
                                    content="As the number of internal and external services on the network increased, a consistent and logical way to route network traffic became a requirement. PiHole, an open source technology, enables custom DNS records, which allows for internal services to be able to reference other services via a sensical string rather than an ip address.  PiHole has the added advantage of automatically blocking domain names that are known advertisers or trackers and as every device on the network uses PiHole as the primary DNS server, no device on the network gets ads (99% of the time). Although PiHole solves a number of the traffic issues, the critical issue of  routing network traffic from the outside internet remains. To remove as many potential security risks as possible, a technology known as Traefik was implemented. Traefik routes external requests and matches the subdomain with the ip of an internal service. This enables hosting of a large number of services without worrying about port overlap or exposing more than the few Traefik access ports on the firewall. Additionally, Traefik routes all traffic through HTTPS using CloudFlare authorized certificates."
                                    images={[
                                        {
                                            path: "/images/homelab/pihole1.png",
                                            subtitle: "PiHole dashboard"
                                        },
                                        {
                                            path: "/images/homelab/traefik1.png",
                                            subtitle: "Traefik router list"
                                        },
                                        {
                                            path: "/images/homelab/traefik2.png",
                                            subtitle: "Traefik dashboard"
                                        }
                                    ]}
                                />
                                <ComputerCell
                                    starry
                                    title="Minecraft Server"
                                    circleCount={13}
                                    content="With all of the infrastructure finally in place, it was time to put it to the test. As Minecraft was a simple test and a popular game amongst my friend group, I decided to start there. I created my own fully featured docker image that would run the server with a variety of additional administration features, and I created a workload through the Rancher UI. I added the service to traefik so it was accessible via a domain name, and I added the new subdomain to CloudFlare."
                                    images={[
                                        {
                                            path: "/images/homelab/minecraft1.png",
                                            subtitle: "Workload basic info"
                                        },
                                        {
                                            path: "/images/homelab/minecraft2.png",
                                            subtitle: "Workload volumes"
                                        },
                                        {
                                            path: "/images/homelab/minecraft3.png",
                                            subtitle: "Success!"
                                        }
                                    ]}
                                />
                                <ComputerCell
                                    title="Epilogue"
                                    circleCount={7}
                                    content="I learned a lot from setting up all of this infrastructure. I ventured into uncharted territory for myself, which meant I inevitably spent countless hours pulling my hair out. In the end, everything came together, and now I have the ability to create and test out new services and technologies with ease. I would definitely recommend trying out these technologies, as it taught me a lot about what it would take to run and maintain enterprise services."
                                />
                            </Box>

                            {/* Spacer */}
                            <Box sx={{ height: "100px" }} />
                        </StarrySection>
                    </Box>
                )}
            </Box>
        </React.Fragment>
    );
};

export default HomelabPage;
