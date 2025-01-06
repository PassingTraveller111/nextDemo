// _app.js
import React from 'react';
import {ReduxProvider} from "../store/provider";
import "../styles/global.scss";

const App = (context) => {
    const { Component, pageProps } = context;
    return <ReduxProvider>
        <Component {...pageProps} />
    </ReduxProvider>
};

export default App;