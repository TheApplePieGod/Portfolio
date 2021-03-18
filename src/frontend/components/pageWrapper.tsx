import React from 'react';
import { Sidebar } from './sidebar';

interface _props {

}

export const PageWrapper: React.FunctionComponent<_props> = (props) => {
    return (
        <div style={{
            width: "100%",
            height: "100%",
            backgroundImage: "url(images/background-nomoon.jpg)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>
            <Sidebar />
            {props.children}
        </div>
    );
}