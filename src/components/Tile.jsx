import React from 'react';

export default function({ h, k, x, y, sz_x, sz_y }) {
    //const sz_x = scale * 0.9;
    //const sz_y = scale * 0.9 * 0.866;

    return <div className="absolute border-2 border-blue-600"
                style={{
                    marginLeft: x,
                    marginTop: y,
                    width: sz_x,
                    height: sz_y,
                    backgroundColor: `rgba(0, ${(((h%3)+3)%3)/3 * 255}, ${(((k%3)+3)%3)/3 * 255}, 0.9)`,
                }}
    >
        <span className="select-none">{h}, {k}</span>
    </div>
}

