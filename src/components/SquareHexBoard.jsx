import React from 'react';
import useWindowDimensions from '../utility/useWindowDimensions';
import { to_rectangular } from '../utility/coords';

export default function({ scale, pos_x, pos_y }) {
    const { height, width } = useWindowDimensions();
    const m = Math.floor(Math.min(height, width)/2 / scale);

    let positions = [];
    for (let h=-m; h<=m; h += 1) {
        for (let k=-m-Math.min(h, 0); k<=m-Math.max(h, 0); k += 1) {
            positions.push(to_rectangular(h, k));
        }
    }
    return <div>
        {positions.map(([x, y], i) => <div
                className="absolute bg-blue-900 border-2 border-blue-600"
                style={{
                    marginLeft: x * scale + (width-scale)/2,
                    marginTop: y * scale + (height-scale)/2,
                    width: scale*0.9,
                    height: scale*0.9 * 0.866,
                }}
                key={i}
            >
            yo
            </div>)}
    </div>;
}

