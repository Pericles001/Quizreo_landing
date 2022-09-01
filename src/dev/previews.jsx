import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import App from "../App";
import {About, Feature, Footer} from "../components";
import {Features} from "../components/Feature/Features";
import {GetStarted} from "../components/GetStarted/GetStarted";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/About">
                <About/>
            </ComponentPreview>
            <ComponentPreview path="/Feature">
                <Feature/>
            </ComponentPreview>
            <ComponentPreview path="/Features">
                <Features/>
            </ComponentPreview>
            <ComponentPreview path="/GetStarted">
                <GetStarted/>
            </ComponentPreview>
            <ComponentPreview path="/Footer">
                <Footer/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;
