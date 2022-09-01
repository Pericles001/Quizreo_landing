import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import App from "../App";
import {About, Feature} from "../components";
import {Features} from "../components/Feature/Features";

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
        </Previews>
    );
};

export default ComponentPreviews;
