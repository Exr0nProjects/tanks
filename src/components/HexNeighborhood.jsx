import React from 'react';

import Tile from './Tile';

import useWindowDimensions from '../utility/useWindowDimensions';
import { to_rectangular } from '../utility/coords';

export default function({ ph, pk, scale }) {
    const { height, width } = useWindowDimensions();
    const m = Math.floor(Math.min(height, width)/2 / scale);

    let positions = [];
    for (let h=-m; h<=m; h += 1) {
        for (let k=-m-Math.min(h, 0); k<=m-Math.max(h, 0); k += 1) {
            positions.push([h + ph, k + pk, ...to_rectangular(h, k)]);
        }
    }

    const sz_x = scale * 0.9;
    const sz_y = scale * 0.9 * 0.866;
    return <div >
        {positions.map(([h, k, x, y], i) => <Tile h={h} k={k} key={i}
            x={x*scale + (width-sz_x)/2} y={y*scale + (height-sz_y)/2}
            scale={scale} sz_x={sz_x} sz_y={sz_y} />)}
    </div>;
}

