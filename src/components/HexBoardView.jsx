import React from 'react';

//import Tile from './Tile';
import HexNeighborhood from './HexNeighborhood';
//
//import useWindowDimensions from '../utility/useWindowDimensions';
//import { to_rectangular } from '../utility/coords';

export default function({ scale, pos_x, pos_y }) {
    pos_x = pos_x / scale; pos_y = pos_y / scale;

    //const { height, width } = useWindowDimensions();
    //const m = Math.floor(Math.min(height, width)/2 / scale);

    //const [ ph, pk ] = [ Math.round(- pos_x - 0.5 * pos_y), Math.round(pos_x - 0.5 * pos_y) ];
    const [ ph, pk ] = [ Math.round(- pos_x - 0.5 * pos_y), Math.round(pos_x - 0.5 * pos_y) ];
    console.log("ph", ph, "pk", pk);    

    //let positions = [];
    //for (let h=-m; h<=m; h += 1) {
    //    for (let k=-m-Math.min(h, 0); k<=m-Math.max(h, 0); k += 1) {
    //        positions.push([h + ph, k + pk, ...to_rectangular(h, k)]);
    //    }
    //}

        //{positions.map(([h, k, x, y], i) => <div
        //        className="absolute bg-blue-900 border-2 border-blue-600"
        //        key={i}
        //    >
        //    </div>)}

    //const sz_x = scale * 0.9;
    //const sz_y = scale * 0.9 * 0.866;
    //
    //return <div className="absolute" style={{ marginLeft: pos_x * scale, marginTop: pos_y * scale }}>
    //    {positions.map(([h, k, x, y], i) => <Tile h={h} k={k} key={i}
    //        x={x*scale + (width-sz_x)/2} y={y*scale + (height-sz_y)/2}
    //        scale={scale} sz_x={sz_x} sz_y={sz_y} />)}
    //</div>;
    //
    return <div className="absolute" style={{
        marginLeft: pos_x * scale % (scale/2),
        marginTop:  pos_y * scale % (scale/2)
    }}>
        <HexNeighborhood ph={ph} pk={pk} scale={scale} />
    </div>
}

