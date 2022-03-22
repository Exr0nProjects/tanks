import React, { useReducer } from 'react';
import update from 'immutability-helper';

import HexBoardView from './HexBoardView';
import { Tank, TankDo } from '../proto/tank';

export default function({ players }) {
    let [ game_state, game_dispatch ] = (() => {
        const init_arg = {
            'blocks': {},       // coords -> # blocks
            'players': {},      // player_id (plid) -> tank struct
            view_x: 0,
            view_y: 0,
            msg: '',
        }
        function reducer(state, action) {
            // TODO
            switch (action.type) {
                case 'update_player':
                    return update(state, { [action.plid]: {$set: action.payload} });
                case 'view_pan':
                    return {...state,
                        view_x: state.view_x + action.x,
                        view_y: state.view_y + action.y,
                        msg: action.msg || '',
                    };
                default:
                    throw new Error(`unknown action type ${action.type}`);
            }
        }
        return useReducer(reducer, init_arg);
    })();

    // event handlers
    function handlePointerMove(ev) {
        //console.log(ev)
        if (ev.buttons === 1) {     // mouse dragging
            game_dispatch({ type: 'view_pan', 'x': ev.movementX, 'y': ev.movementY });
        }
    }

    return <div
        className="relative w-screen h-screen overflow-hidden bg-black overscroll-none"
        onPointerMove={handlePointerMove}>
            <div className="fixed">
                <span className="text-blue-300">{game_state.view_x}, {game_state.view_y}, {game_state.msg}</span>
            </div>
            <HexBoardView className="absolute" scale={100} pos_x={game_state.view_x} pos_y={game_state.view_y}/>
    </div>
}

