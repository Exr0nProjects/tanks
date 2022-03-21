class Tank {
    // getters?? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
    constructor([x, y], { n_action, n_health, n_range, mx_action, mx_health, mx_range }) {
        this.x = x;
        this.y = y;

        this.n_action = n_action || 3;
        this.n_health = n_health || 3;
        this.n_range  = n_range  || 3;
        this.mx_action = mx_action || 12;
        this.mx_health = mx_health || 12;
        this.mx_range  = mx_range  || 12;

        this.stats = {
            'distance_moved': 0,
            'times_shot':  0,
            'blocks_built': 0,
            'actions_gifted': 0,
            'actions_recieved': 0,
            //'upgrades': 0,
            //'actions_used':   0,
        }
    }
    can_upgr_health() { return this.n_action > 0 && this.n_health < this.mx_health; }
    can_upgr_range () { return this.n_action > 0 && this.n_range  < this.mx_range ; }
    upgr_health() { console.assert(this.can_upgr_health()); this.n_action -= 1; this.n_health += 1; }
    upgr_range () { console.assert(this.can_upgr_range ()); this.n_action -= 1; this.n_range  += 1; }
    do_move(d) { console.assert(this.n_action > d); this.n_action -= d; this.distance_moved += d; }
    do_shoot() { console.assert(this.n_action > 0); this.n_action -= 1; this.stats.times_shot += 1; }
    do_build() { console.assert(this.n_action > 0); this.n_action -= 1; this.stats.blocks_built += 1; }
    do_gift () { console.assert(this.n_action > 0); this.n_action -= 1; this.stats.actions_gifted += 1; }
    do_recv () { console.assert(this.n_action < this.mx_action); this.n_action += 1; this.stats.actions_recieved += 1; }
}

