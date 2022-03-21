import React, { useReducer } from 'react';
import update from 'immutability-helper';
import { Tank, TankDo } from '../proto/tank.js';

export default function({ players }) {
    let [ game_state, game_dispatch ] = (() => {
        const init_arg = {
            'blocks': {},       // coords -> # blocks
            'players': {},      // player_id (plid) -> tank struct
        }
        function reducer(state, action) {
            // TODO
            switch (action.type) {
                case 'update_player':
                    return update(state, { [action.plid]: {$set: action.payload} });
                case 'view_pan':
                    return update(state, {
                        x: state.x + action.event.movementX,
                        y: state.y + action.event.movementY
                    });
                default:
                    throw new Error(`unknown action type ${action.type}`);
            }
        }
        return useReducer(reducer, init_arg);
    })();

    // event handlers
    function handlePointerMove(ev) {
        console.log(ev.movementX, ev.movementY);
    }

    return <div className="w-screen h-screen overflow-hidden bg-black" onPointerMove={handlePointerMove}>

    </div>
}

