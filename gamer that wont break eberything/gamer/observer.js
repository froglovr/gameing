class observer {
    static inCollision(orbe1, orbe2) {
        if (dist(orbe1.x, orbe1.y, orbe2.x, orbe2.y) < orbe1.r || dist(orbe1.x, orbe1.y, orbe2.x, orbe2.y) < orbe2.r) {
            if (orbe1 instanceof boyOrbe && orbe2 instanceof enimeOrbe) {
                console.log('crunch')
            } else if (orbe2 instanceof boyOrbe && orbe1 instanceof enimeOrbe) {
                this.inCollision(orbe2, orbe1);
            } else if (orbe1 instanceof pointOrbe && orbe2 instanceof enimeOrbe) {
                console.log('lol died')
            } else if (orbe2 instanceof pointOrbe && orbe1 instanceof enimeOrbe) {
                this.inCollision(orbe2, orbe1);
            }
        }
    }
}
class collider {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class boyOrbe extends collider {
    constructor(x, y, r) {
        super(x, y);
        this.r = r;
    }
}
class pointOrbe extends collider {
    constructor(x, y, r) {
        super(x, y);
        this.r = r;
    }
}
class enimeOrbe extends collider {
    constructor(x, y, r) {
        super(x, y);
        this.r = r;
    }
}
class notOrbe extends collider {
    constructor(x, y, l, w) {
        super(x, y);
        this.l = l;
        this.w = w;
    }
}