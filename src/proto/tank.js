import structuredClone from '@ungap/structured-clone';  // https://stackoverflow.com/a/122704

export function Tank([x, y], { n_action, n_health, n_range, mx_action, mx_health, mx_range }) {
    return {
        x: x,
        y: y,

        n_action: n_action || 3,
        n_health: n_health || 3,
        n_range : n_range  || 3,
        mx_action: mx_action || 12,
        mx_health: mx_health || 12,
        mx_range : mx_range  || 12,

        stats: {
            'distance_moved': 0,
            'times_shot':  0,
            'blocks_built': 0,
            'actions_gifted': 0,
            'actions_recieved': 0,
            //'upgrades': 0,
            //'actions_used':   0,
        },
        get can_upgr_health() { return this.n_action > 0 && this.n_health < this.mx_health; },
        get can_upgr_range () { return this.n_action > 0 && this.n_range  < this.mx_range ; },
    }
}

export const TankDo = {
    // TODO OPTM: use immutibility-helper update instead of deep copying
    upgr_health: (t) => { console.assert(t.can_upgr_health());      t = structuredClone(t); t.n_action -= 1; t.n_health += 1; return t; },
    upgr_range:  (t) => { console.assert(t.can_upgr_range ());      t = structuredClone(t); t.n_action -= 1; t.n_range  += 1; return t; },
    do_move:  (t, d) => { console.assert(t.n_action > d);           t = structuredClone(t); t.n_action -= d; t.distance_moved += d; return t; },
    do_shoot: (t) =>    { console.assert(t.n_action > 0);           t = structuredClone(t); t.n_action -= 1; t.stats.times_shot += 1; return t; },
    do_build: (t) =>    { console.assert(t.n_action > 0);           t = structuredClone(t); t.n_action -= 1; t.stats.blocks_built += 1; return t; },
    do_gift:  (t) =>    { console.assert(t.n_action > 0);           t = structuredClone(t); t.n_action -= 1; t.stats.actions_gifted += 1; return t; },
    do_recv:  (t) =>    { console.assert(t.n_action < t.mx_action); t = structuredClone(t); t.n_action += 1; t.stats.actions_recieved += 1; return t; },
}

