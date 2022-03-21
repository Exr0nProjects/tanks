import React from 'react';
import useWindowDimensions from '../utility/useWindowDimensions';

export default function({ scale, pos_x, pos_y }) {
    const { height, width } = useWindowDimensions();
    const diagonal = Math.sqrt(Math.pow(height, 2) + Math.pow(width, 2))/scale;
    console.log('diagonal', diagonal)
    let positions = [];
    // TODO: work out angles and stuff to better optimize drawing
    for (let x=-diagonal; x<=diagonal; x += 1) {
        for (let y=-diagonal; y<=diagonal; y += 1) {
            positions.push([x, y]);
        }
    }
    return <div>
        {positions.map(([x, y], i) => <div
                className="absolute bg-blue-900 border-2 border-blue-600"
                style={{
                    marginLeft: `calc(50% - ${x * scale + scale/2}px)`,
                    marginTop: `calc(50% - ${y * scale + scale/2}px)`,
                    width: scale*0.9,
                    height: scale*0.9,
                }}
                key={i}
            >
            yo
            </div>)}
    </div>;
}

