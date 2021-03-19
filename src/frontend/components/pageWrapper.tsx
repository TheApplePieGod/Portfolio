import React from 'react';
import { Sidebar } from './sidebar';
import { Transition } from 'react-transition-group';
import { useHistory } from 'react-router';
import { Header } from './header';

const animationDuration = 200;

interface _props {

}

export const PageWrapper: React.FunctionComponent<_props> = (props) => {
    const history = useHistory();

    const [animationState, setAnimationState] = React.useState(location.pathname.includes("/more"));

    const backgroundTransitionStyles: any = {
        entering: { opacity: 1 },
        entered:  { opacity: 0 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 1 },
    };

    React.useEffect(() => {
        return history.listen((location) => {
            setAnimationState(location.pathname.includes("/more"));
        })
    }, [history])

    return (
        <Transition
            timeout={animationDuration}
            in={animationState}
            //appear={true}
        >
            {state => (
                <div style={{
                    width: "100%",
                    height: "100%",
                }}>
                    <Header />
                    <Sidebar />
                    <div style={{
                        position: "absolute",
                        zIndex: -20,
                        width: "100%",
                        height: "100%",
                        backgroundImage: "url(images/background-nomoon.jpg)",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        transition: `opacity ${animationDuration}ms ease-in-out`,
                        ...backgroundTransitionStyles[state]
                    }}>
                    </div>
                    {props.children}
                </div>
            )}
        </Transition>
    );
}