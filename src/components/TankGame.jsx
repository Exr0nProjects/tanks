import React, { useReducer } from 'react';
import update from 'immutability-helper';
import Tank from '../proto/tank.js';

export default function({ players }) {
    
    let [ game_state, game_dispatch ] = (() => {
        const init_arg = {
            'blocks': {},       // coords -> # blocks
            'players': {},      // id -> tank struct
        }
        function reducer(state, action) {
            // TODO
            switch (action.type) {
                case 'update_player':
                    new_state = 
                default:
                    throw new Error(`unknown action type ${action.type}`);
            }
        }
        return useReducer(reducer, init_arg);
    })();

    return <div className="w-screen h-screen overflow-hidden bg-black">

    </div>
}

