var jy = Object.defineProperty;
var Vy = (e, t, n) => t in e ? jy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ts = (e, t, n) => Vy(e, typeof t != "symbol" ? t + "" : t, n);
/*! Package version @n8n/chat@0.50.0 */
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Bu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const tt = {}, co = [], Dt = () => {
}, Uy = () => !1, Ai = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Fu = (e) => e.startsWith("onUpdate:"), xt = Object.assign, qu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ky = Object.prototype.hasOwnProperty, Xe = (e, t) => Ky.call(e, t), Le = Array.isArray, uo = (e) => Ti(e) === "[object Map]", Q2 = (e) => Ti(e) === "[object Set]", Ee = (e) => typeof e == "function", Ke = (e) => typeof e == "string", or = (e) => typeof e == "symbol", Fe = (e) => e !== null && typeof e == "object", e1 = (e) => (Fe(e) || Ee(e)) && Ee(e.then) && Ee(e.catch), t1 = Object.prototype.toString, Ti = (e) => t1.call(e), Zs = (e) => Ti(e).slice(8, -1), n1 = (e) => Ti(e) === "[object Object]", zu = (e) => Ke(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ho = /* @__PURE__ */ Bu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Mi = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Wy = /-(\w)/g, dn = Mi(
  (e) => e.replace(Wy, (t, n) => n ? n.toUpperCase() : "")
), Gy = /\B([A-Z])/g, xr = Mi(
  (e) => e.replace(Gy, "-$1").toLowerCase()
), $i = Mi((e) => e.charAt(0).toUpperCase() + e.slice(1)), ga = Mi(
  (e) => e ? `on${$i(e)}` : ""
), kr = (e, t) => !Object.is(e, t), Xs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, r1 = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, eu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Zy = (e) => {
  const t = Ke(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let sd;
const Ii = () => sd || (sd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function st(e) {
  if (Le(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = Ke(r) ? Qy(r) : st(r);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (Ke(e) || Fe(e))
    return e;
}
const Xy = /;(?![^(]*\))/g, Yy = /:([^]+)/, Jy = /\/\*[^]*?\*\//g;
function Qy(e) {
  const t = {};
  return e.replace(Jy, "").split(Xy).forEach((n) => {
    if (n) {
      const r = n.split(Yy);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Q(e) {
  let t = "";
  if (Ke(e))
    t = e;
  else if (Le(e))
    for (let n = 0; n < e.length; n++) {
      const r = Q(e[n]);
      r && (t += r + " ");
    }
  else if (Fe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function li(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Ke(t) && (e.class = Q(t)), n && (e.style = st(n)), e;
}
const e4 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", t4 = /* @__PURE__ */ Bu(e4);
function o1(e) {
  return !!e || e === "";
}
const s1 = (e) => !!(e && e.__v_isRef === !0), Je = (e) => Ke(e) ? e : e == null ? "" : Le(e) || Fe(e) && (e.toString === t1 || !Ee(e.toString)) ? s1(e) ? Je(e.value) : JSON.stringify(e, i1, 2) : String(e), i1 = (e, t) => s1(t) ? i1(e, t.value) : uo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], o) => (n[ma(r, o) + " =>"] = s, n),
    {}
  )
} : Q2(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ma(n))
} : or(t) ? ma(t) : Fe(t) && !Le(t) && !n1(t) ? String(t) : t, ma = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    or(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ht;
class n4 {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ht, !t && Ht && (this.index = (Ht.scopes || (Ht.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ht;
      try {
        return Ht = this, t();
      } finally {
        Ht = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ht = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ht = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Hu() {
  return Ht;
}
function a1(e, t = !1) {
  Ht && Ht.cleanups.push(e);
}
let lt;
const va = /* @__PURE__ */ new WeakSet();
class l1 {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ht && Ht.active && Ht.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, va.has(this) && (va.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || u1(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, id(this), f1(this);
    const t = lt, n = kn;
    lt = this, kn = !0;
    try {
      return this.fn();
    } finally {
      d1(this), lt = t, kn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Uu(t);
      this.deps = this.depsTail = void 0, id(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? va.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    tu(this) && this.run();
  }
  get dirty() {
    return tu(this);
  }
}
let c1 = 0, jo, Vo;
function u1(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Vo, Vo = e;
    return;
  }
  e.next = jo, jo = e;
}
function ju() {
  c1++;
}
function Vu() {
  if (--c1 > 0)
    return;
  if (Vo) {
    let t = Vo;
    for (Vo = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; jo; ) {
    let t = jo;
    for (jo = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function f1(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function d1(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Uu(r), r4(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function tu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (p1(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function p1(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Qo))
    return;
  e.globalVersion = Qo;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !tu(e)) {
    e.flags &= -3;
    return;
  }
  const n = lt, r = kn;
  lt = e, kn = !0;
  try {
    f1(e);
    const s = e.fn(e._value);
    (t.version === 0 || kr(s, e._value)) && (e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    lt = n, kn = r, d1(e), e.flags &= -3;
  }
}
function Uu(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Uu(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function r4(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let kn = !0;
const h1 = [];
function Er() {
  h1.push(kn), kn = !1;
}
function Sr() {
  const e = h1.pop();
  kn = e === void 0 ? !0 : e;
}
function id(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = lt;
    lt = void 0;
    try {
      t();
    } finally {
      lt = n;
    }
  }
}
let Qo = 0;
class o4 {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ku {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!lt || !kn || lt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== lt)
      n = this.activeLink = new o4(lt, this), lt.deps ? (n.prevDep = lt.depsTail, lt.depsTail.nextDep = n, lt.depsTail = n) : lt.deps = lt.depsTail = n, g1(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = lt.depsTail, n.nextDep = void 0, lt.depsTail.nextDep = n, lt.depsTail = n, lt.deps === n && (lt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Qo++, this.notify(t);
  }
  notify(t) {
    ju();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Vu();
    }
  }
}
function g1(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        g1(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ci = /* @__PURE__ */ new WeakMap(), jr = Symbol(
  ""
), nu = Symbol(
  ""
), es = Symbol(
  ""
);
function Lt(e, t, n) {
  if (kn && lt) {
    let r = ci.get(e);
    r || ci.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new Ku()), s.map = r, s.key = n), s.track();
  }
}
function Kn(e, t, n, r, s, o) {
  const i = ci.get(e);
  if (!i) {
    Qo++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (ju(), t === "clear")
    i.forEach(a);
  else {
    const l = Le(e), u = l && zu(n);
    if (l && n === "length") {
      const f = Number(r);
      i.forEach((c, p) => {
        (p === "length" || p === es || !or(p) && p >= f) && a(c);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), u && a(i.get(es)), t) {
        case "add":
          l ? u && a(i.get("length")) : (a(i.get(jr)), uo(e) && a(i.get(nu)));
          break;
        case "delete":
          l || (a(i.get(jr)), uo(e) && a(i.get(nu)));
          break;
        case "set":
          uo(e) && a(i.get(jr));
          break;
      }
  }
  Vu();
}
function s4(e, t) {
  const n = ci.get(e);
  return n && n.get(t);
}
function to(e) {
  const t = je(e);
  return t === e ? t : (Lt(t, "iterate", es), cn(e) ? t : t.map(Ot));
}
function Li(e) {
  return Lt(e = je(e), "iterate", es), e;
}
const i4 = {
  __proto__: null,
  [Symbol.iterator]() {
    return ba(this, Symbol.iterator, Ot);
  },
  concat(...e) {
    return to(this).concat(
      ...e.map((t) => Le(t) ? to(t) : t)
    );
  },
  entries() {
    return ba(this, "entries", (e) => (e[1] = Ot(e[1]), e));
  },
  every(e, t) {
    return qn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return qn(this, "filter", e, t, (n) => n.map(Ot), arguments);
  },
  find(e, t) {
    return qn(this, "find", e, t, Ot, arguments);
  },
  findIndex(e, t) {
    return qn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return qn(this, "findLast", e, t, Ot, arguments);
  },
  findLastIndex(e, t) {
    return qn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return qn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return _a(this, "includes", e);
  },
  indexOf(...e) {
    return _a(this, "indexOf", e);
  },
  join(e) {
    return to(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return _a(this, "lastIndexOf", e);
  },
  map(e, t) {
    return qn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return $o(this, "pop");
  },
  push(...e) {
    return $o(this, "push", e);
  },
  reduce(e, ...t) {
    return ad(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ad(this, "reduceRight", e, t);
  },
  shift() {
    return $o(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return qn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return $o(this, "splice", e);
  },
  toReversed() {
    return to(this).toReversed();
  },
  toSorted(e) {
    return to(this).toSorted(e);
  },
  toSpliced(...e) {
    return to(this).toSpliced(...e);
  },
  unshift(...e) {
    return $o(this, "unshift", e);
  },
  values() {
    return ba(this, "values", Ot);
  }
};
function ba(e, t, n) {
  const r = Li(e), s = r[t]();
  return r !== e && !cn(e) && (s._next = s.next, s.next = () => {
    const o = s._next();
    return o.value && (o.value = n(o.value)), o;
  }), s;
}
const a4 = Array.prototype;
function qn(e, t, n, r, s, o) {
  const i = Li(e), a = i !== e && !cn(e), l = i[t];
  if (l !== a4[t]) {
    const c = l.apply(e, o);
    return a ? Ot(c) : c;
  }
  let u = n;
  i !== e && (a ? u = function(c, p) {
    return n.call(this, Ot(c), p, e);
  } : n.length > 2 && (u = function(c, p) {
    return n.call(this, c, p, e);
  }));
  const f = l.call(i, u, r);
  return a && s ? s(f) : f;
}
function ad(e, t, n, r) {
  const s = Li(e);
  let o = n;
  return s !== e && (cn(e) ? n.length > 3 && (o = function(i, a, l) {
    return n.call(this, i, a, l, e);
  }) : o = function(i, a, l) {
    return n.call(this, i, Ot(a), l, e);
  }), s[t](o, ...r);
}
function _a(e, t, n) {
  const r = je(e);
  Lt(r, "iterate", es);
  const s = r[t](...n);
  return (s === -1 || s === !1) && Zu(n[0]) ? (n[0] = je(n[0]), r[t](...n)) : s;
}
function $o(e, t, n = []) {
  Er(), ju();
  const r = je(e)[t].apply(e, n);
  return Vu(), Sr(), r;
}
const l4 = /* @__PURE__ */ Bu("__proto__,__v_isRef,__isVue"), m1 = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(or)
);
function c4(e) {
  or(e) || (e = String(e));
  const t = je(this);
  return Lt(t, "has", e), t.hasOwnProperty(e);
}
class v1 {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (s ? o ? _4 : w1 : o ? y1 : _1).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = Le(t);
    if (!s) {
      let l;
      if (i && (l = i4[n]))
        return l;
      if (n === "hasOwnProperty")
        return c4;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      bt(t) ? t : r
    );
    return (or(n) ? m1.has(n) : l4(n)) || (s || Lt(t, "get", n), o) ? a : bt(a) ? i && zu(n) ? a : a.value : Fe(a) ? s ? Oi(a) : Sn(a) : a;
  }
}
class b1 extends v1 {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const l = Gr(o);
      if (!cn(r) && !Gr(r) && (o = je(o), r = je(r)), !Le(t) && bt(o) && !bt(r))
        return l ? !1 : (o.value = r, !0);
    }
    const i = Le(t) && zu(n) ? Number(n) < t.length : Xe(t, n), a = Reflect.set(
      t,
      n,
      r,
      bt(t) ? t : s
    );
    return t === je(s) && (i ? kr(r, o) && Kn(t, "set", n, r) : Kn(t, "add", n, r)), a;
  }
  deleteProperty(t, n) {
    const r = Xe(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Kn(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!or(n) || !m1.has(n)) && Lt(t, "has", n), r;
  }
  ownKeys(t) {
    return Lt(
      t,
      "iterate",
      Le(t) ? "length" : jr
    ), Reflect.ownKeys(t);
  }
}
class u4 extends v1 {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const f4 = /* @__PURE__ */ new b1(), d4 = /* @__PURE__ */ new u4(), p4 = /* @__PURE__ */ new b1(!0);
const ru = (e) => e, Ms = (e) => Reflect.getPrototypeOf(e);
function h4(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, o = je(s), i = uo(o), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, u = s[e](...r), f = n ? ru : t ? ou : Ot;
    return !t && Lt(
      o,
      "iterate",
      l ? nu : jr
    ), {
      // iterator protocol
      next() {
        const { value: c, done: p } = u.next();
        return p ? { value: c, done: p } : {
          value: a ? [f(c[0]), f(c[1])] : f(c),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function $s(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function g4(e, t) {
  const n = {
    get(s) {
      const o = this.__v_raw, i = je(o), a = je(s);
      e || (kr(s, a) && Lt(i, "get", s), Lt(i, "get", a));
      const { has: l } = Ms(i), u = t ? ru : e ? ou : Ot;
      if (l.call(i, s))
        return u(o.get(s));
      if (l.call(i, a))
        return u(o.get(a));
      o !== i && o.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Lt(je(s), "iterate", jr), Reflect.get(s, "size", s);
    },
    has(s) {
      const o = this.__v_raw, i = je(o), a = je(s);
      return e || (kr(s, a) && Lt(i, "has", s), Lt(i, "has", a)), s === a ? o.has(s) : o.has(s) || o.has(a);
    },
    forEach(s, o) {
      const i = this, a = i.__v_raw, l = je(a), u = t ? ru : e ? ou : Ot;
      return !e && Lt(l, "iterate", jr), a.forEach((f, c) => s.call(o, u(f), u(c), i));
    }
  };
  return xt(
    n,
    e ? {
      add: $s("add"),
      set: $s("set"),
      delete: $s("delete"),
      clear: $s("clear")
    } : {
      add(s) {
        !t && !cn(s) && !Gr(s) && (s = je(s));
        const o = je(this);
        return Ms(o).has.call(o, s) || (o.add(s), Kn(o, "add", s, s)), this;
      },
      set(s, o) {
        !t && !cn(o) && !Gr(o) && (o = je(o));
        const i = je(this), { has: a, get: l } = Ms(i);
        let u = a.call(i, s);
        u || (s = je(s), u = a.call(i, s));
        const f = l.call(i, s);
        return i.set(s, o), u ? kr(o, f) && Kn(i, "set", s, o) : Kn(i, "add", s, o), this;
      },
      delete(s) {
        const o = je(this), { has: i, get: a } = Ms(o);
        let l = i.call(o, s);
        l || (s = je(s), l = i.call(o, s)), a && a.call(o, s);
        const u = o.delete(s);
        return l && Kn(o, "delete", s, void 0), u;
      },
      clear() {
        const s = je(this), o = s.size !== 0, i = s.clear();
        return o && Kn(
          s,
          "clear",
          void 0,
          void 0
        ), i;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = h4(s, e, t);
  }), n;
}
function Wu(e, t) {
  const n = g4(e, t);
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    Xe(n, s) && s in r ? n : r,
    s,
    o
  );
}
const m4 = {
  get: /* @__PURE__ */ Wu(!1, !1)
}, v4 = {
  get: /* @__PURE__ */ Wu(!1, !0)
}, b4 = {
  get: /* @__PURE__ */ Wu(!0, !1)
};
const _1 = /* @__PURE__ */ new WeakMap(), y1 = /* @__PURE__ */ new WeakMap(), w1 = /* @__PURE__ */ new WeakMap(), _4 = /* @__PURE__ */ new WeakMap();
function y4(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function w4(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : y4(Zs(e));
}
function Sn(e) {
  return Gr(e) ? e : Gu(
    e,
    !1,
    f4,
    m4,
    _1
  );
}
function k4(e) {
  return Gu(
    e,
    !1,
    p4,
    v4,
    y1
  );
}
function Oi(e) {
  return Gu(
    e,
    !0,
    d4,
    b4,
    w1
  );
}
function Gu(e, t, n, r, s) {
  if (!Fe(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const i = w4(e);
  if (i === 0)
    return e;
  const a = new Proxy(
    e,
    i === 2 ? r : n
  );
  return s.set(e, a), a;
}
function fo(e) {
  return Gr(e) ? fo(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Gr(e) {
  return !!(e && e.__v_isReadonly);
}
function cn(e) {
  return !!(e && e.__v_isShallow);
}
function Zu(e) {
  return e ? !!e.__v_raw : !1;
}
function je(e) {
  const t = e && e.__v_raw;
  return t ? je(t) : e;
}
function C4(e) {
  return !Xe(e, "__v_skip") && Object.isExtensible(e) && r1(e, "__v_skip", !0), e;
}
const Ot = (e) => Fe(e) ? Sn(e) : e, ou = (e) => Fe(e) ? Oi(e) : e;
function bt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function W(e) {
  return k1(e, !1);
}
function Zn(e) {
  return k1(e, !0);
}
function k1(e, t) {
  return bt(e) ? e : new x4(e, t);
}
class x4 {
  constructor(t, n) {
    this.dep = new Ku(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : je(t), this._value = n ? t : Ot(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || cn(t) || Gr(t);
    t = r ? t : je(t), kr(t, n) && (this._rawValue = t, this._value = r ? t : Ot(t), this.dep.trigger());
  }
}
function Io(e) {
  e.dep && e.dep.trigger();
}
function b(e) {
  return bt(e) ? e.value : e;
}
const E4 = {
  get: (e, t, n) => t === "__v_raw" ? e : b(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return bt(s) && !bt(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function C1(e) {
  return fo(e) ? e : new Proxy(e, E4);
}
function Ri(e) {
  const t = Le(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = x1(e, n);
  return t;
}
class S4 {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return s4(je(this._object), this._key);
  }
}
class A4 {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function yn(e, t, n) {
  return bt(e) ? e : Ee(e) ? new A4(e) : Fe(e) && arguments.length > 1 ? x1(e, t, n) : W(e);
}
function x1(e, t, n) {
  const r = e[t];
  return bt(r) ? r : new S4(e, t, n);
}
class T4 {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ku(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Qo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    lt !== this)
      return u1(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return p1(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function M4(e, t, n = !1) {
  let r, s;
  return Ee(e) ? r = e : (r = e.get, s = e.set), new T4(r, s, n);
}
const Is = {}, ui = /* @__PURE__ */ new WeakMap();
let qr;
function $4(e, t = !1, n = qr) {
  if (n) {
    let r = ui.get(n);
    r || ui.set(n, r = []), r.push(e);
  }
}
function I4(e, t, n = tt) {
  const { immediate: r, deep: s, once: o, scheduler: i, augmentJob: a, call: l } = n, u = (_) => s ? _ : cn(_) || s === !1 || s === 0 ? Wn(_, 1) : Wn(_);
  let f, c, p, d, m = !1, g = !1;
  if (bt(e) ? (c = () => e.value, m = cn(e)) : fo(e) ? (c = () => u(e), m = !0) : Le(e) ? (g = !0, m = e.some((_) => fo(_) || cn(_)), c = () => e.map((_) => {
    if (bt(_))
      return _.value;
    if (fo(_))
      return u(_);
    if (Ee(_))
      return l ? l(_, 2) : _();
  })) : Ee(e) ? t ? c = l ? () => l(e, 2) : e : c = () => {
    if (p) {
      Er();
      try {
        p();
      } finally {
        Sr();
      }
    }
    const _ = qr;
    qr = f;
    try {
      return l ? l(e, 3, [d]) : e(d);
    } finally {
      qr = _;
    }
  } : c = Dt, t && s) {
    const _ = c, E = s === !0 ? 1 / 0 : s;
    c = () => Wn(_(), E);
  }
  const C = Hu(), h = () => {
    f.stop(), C && C.active && qu(C.effects, f);
  };
  if (o && t) {
    const _ = t;
    t = (...E) => {
      _(...E), h();
    };
  }
  let k = g ? new Array(e.length).fill(Is) : Is;
  const y = (_) => {
    if (!(!(f.flags & 1) || !f.dirty && !_))
      if (t) {
        const E = f.run();
        if (s || m || (g ? E.some((x, M) => kr(x, k[M])) : kr(E, k))) {
          p && p();
          const x = qr;
          qr = f;
          try {
            const M = [
              E,
              // pass undefined as the old value when it's changed for the first time
              k === Is ? void 0 : g && k[0] === Is ? [] : k,
              d
            ];
            l ? l(t, 3, M) : (
              // @ts-expect-error
              t(...M)
            ), k = E;
          } finally {
            qr = x;
          }
        }
      } else
        f.run();
  };
  return a && a(y), f = new l1(c), f.scheduler = i ? () => i(y, !1) : y, d = (_) => $4(_, !1, f), p = f.onStop = () => {
    const _ = ui.get(f);
    if (_) {
      if (l)
        l(_, 4);
      else
        for (const E of _) E();
      ui.delete(f);
    }
  }, t ? r ? y(!0) : k = f.run() : i ? i(y.bind(null, !0), !0) : f.run(), h.pause = f.pause.bind(f), h.resume = f.resume.bind(f), h.stop = h, h;
}
function Wn(e, t = 1 / 0, n) {
  if (t <= 0 || !Fe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, bt(e))
    Wn(e.value, t, n);
  else if (Le(e))
    for (let r = 0; r < e.length; r++)
      Wn(e[r], t, n);
  else if (Q2(e) || uo(e))
    e.forEach((r) => {
      Wn(r, t, n);
    });
  else if (n1(e)) {
    for (const r in e)
      Wn(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Wn(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ms(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Pi(s, t, n);
  }
}
function xn(e, t, n, r) {
  if (Ee(e)) {
    const s = ms(e, t, n, r);
    return s && e1(s) && s.catch((o) => {
      Pi(o, t, n);
    }), s;
  }
  if (Le(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++)
      s.push(xn(e[o], t, n, r));
    return s;
  }
}
function Pi(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || tt;
  if (t) {
    let a = t.parent;
    const l = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const f = a.ec;
      if (f) {
        for (let c = 0; c < f.length; c++)
          if (f[c](e, l, u) === !1)
            return;
      }
      a = a.parent;
    }
    if (o) {
      Er(), ms(o, null, 10, [
        e,
        l,
        u
      ]), Sr();
      return;
    }
  }
  L4(e, n, s, r, i);
}
function L4(e, t, n, r = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const jt = [];
let Rn = -1;
const po = [];
let mr = null, oo = 0;
const E1 = /* @__PURE__ */ Promise.resolve();
let fi = null;
function Ue(e) {
  const t = fi || E1;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function O4(e) {
  let t = Rn + 1, n = jt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = jt[r], o = ts(s);
    o < e || o === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Xu(e) {
  if (!(e.flags & 1)) {
    const t = ts(e), n = jt[jt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ts(n) ? jt.push(e) : jt.splice(O4(t), 0, e), e.flags |= 1, S1();
  }
}
function S1() {
  fi || (fi = E1.then(T1));
}
function R4(e) {
  Le(e) ? po.push(...e) : mr && e.id === -1 ? mr.splice(oo + 1, 0, e) : e.flags & 1 || (po.push(e), e.flags |= 1), S1();
}
function ld(e, t, n = Rn + 1) {
  for (; n < jt.length; n++) {
    const r = jt[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      jt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function A1(e) {
  if (po.length) {
    const t = [...new Set(po)].sort(
      (n, r) => ts(n) - ts(r)
    );
    if (po.length = 0, mr) {
      mr.push(...t);
      return;
    }
    for (mr = t, oo = 0; oo < mr.length; oo++) {
      const n = mr[oo];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    mr = null, oo = 0;
  }
}
const ts = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function T1(e) {
  try {
    for (Rn = 0; Rn < jt.length; Rn++) {
      const t = jt[Rn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ms(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Rn < jt.length; Rn++) {
      const t = jt[Rn];
      t && (t.flags &= -2);
    }
    Rn = -1, jt.length = 0, A1(), fi = null, (jt.length || po.length) && T1();
  }
}
let Ct = null, M1 = null;
function di(e) {
  const t = Ct;
  return Ct = e, M1 = e && e.type.__scopeId || null, t;
}
function he(e, t = Ct, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && kd(-1);
    const o = di(t);
    let i;
    try {
      i = e(...s);
    } finally {
      di(o), r._d && kd(1);
    }
    return i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Ut(e, t) {
  if (Ct === null)
    return e;
  const n = zi(Ct), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, a, l = tt] = t[s];
    o && (Ee(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Wn(i), r.push({
      dir: o,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return e;
}
function Lr(e, t, n, r) {
  const s = e.dirs, o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    o && (a.oldValue = o[i].value);
    let l = a.dir[r];
    l && (Er(), xn(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), Sr());
  }
}
const $1 = Symbol("_vte"), I1 = (e) => e.__isTeleport, Uo = (e) => e && (e.disabled || e.disabled === ""), cd = (e) => e && (e.defer || e.defer === ""), ud = (e) => typeof SVGElement < "u" && e instanceof SVGElement, fd = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, su = (e, t) => {
  const n = e && e.to;
  return Ke(n) ? t ? t(n) : null : n;
}, L1 = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, s, o, i, a, l, u) {
    const {
      mc: f,
      pc: c,
      pbc: p,
      o: { insert: d, querySelector: m, createText: g, createComment: C }
    } = u, h = Uo(t.props);
    let { shapeFlag: k, children: y, dynamicChildren: _ } = t;
    if (e == null) {
      const E = t.el = g(""), x = t.anchor = g("");
      d(E, n, r), d(x, n, r);
      const M = (O, D) => {
        k & 16 && (s && s.isCE && (s.ce._teleportTarget = O), f(
          y,
          O,
          D,
          s,
          o,
          i,
          a,
          l
        ));
      }, $ = () => {
        const O = t.target = su(t.props, m), D = O1(O, t, g, d);
        O && (i !== "svg" && ud(O) ? i = "svg" : i !== "mathml" && fd(O) && (i = "mathml"), h || (M(O, D), Ys(t, !1)));
      };
      h && (M(n, x), Ys(t, !0)), cd(t.props) ? qt(() => {
        $(), t.el.__isMounted = !0;
      }, o) : $();
    } else {
      if (cd(t.props) && !e.el.__isMounted) {
        qt(() => {
          L1.process(
            e,
            t,
            n,
            r,
            s,
            o,
            i,
            a,
            l,
            u
          ), delete e.el.__isMounted;
        }, o);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const E = t.anchor = e.anchor, x = t.target = e.target, M = t.targetAnchor = e.targetAnchor, $ = Uo(e.props), O = $ ? n : x, D = $ ? E : M;
      if (i === "svg" || ud(x) ? i = "svg" : (i === "mathml" || fd(x)) && (i = "mathml"), _ ? (p(
        e.dynamicChildren,
        _,
        O,
        s,
        o,
        i,
        a
      ), ef(e, t, !0)) : l || c(
        e,
        t,
        O,
        D,
        s,
        o,
        i,
        a,
        !1
      ), h)
        $ ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ls(
          t,
          n,
          E,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const B = t.target = su(
          t.props,
          m
        );
        B && Ls(
          t,
          B,
          null,
          u,
          0
        );
      } else $ && Ls(
        t,
        x,
        M,
        u,
        1
      );
      Ys(t, h);
    }
  },
  remove(e, t, n, { um: r, o: { remove: s } }, o) {
    const {
      shapeFlag: i,
      children: a,
      anchor: l,
      targetStart: u,
      targetAnchor: f,
      target: c,
      props: p
    } = e;
    if (c && (s(u), s(f)), o && s(l), i & 16) {
      const d = o || !Uo(p);
      for (let m = 0; m < a.length; m++) {
        const g = a[m];
        r(
          g,
          t,
          n,
          d,
          !!g.dynamicChildren
        );
      }
    }
  },
  move: Ls,
  hydrate: P4
};
function Ls(e, t, n, { o: { insert: r }, m: s }, o = 2) {
  o === 0 && r(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: l, children: u, props: f } = e, c = o === 2;
  if (c && r(i, t, n), (!c || Uo(f)) && l & 16)
    for (let p = 0; p < u.length; p++)
      s(
        u[p],
        t,
        n,
        2
      );
  c && r(a, t, n);
}
function P4(e, t, n, r, s, o, {
  o: { nextSibling: i, parentNode: a, querySelector: l, insert: u, createText: f }
}, c) {
  const p = t.target = su(
    t.props,
    l
  );
  if (p) {
    const d = Uo(t.props), m = p._lpa || p.firstChild;
    if (t.shapeFlag & 16)
      if (d)
        t.anchor = c(
          i(e),
          t,
          a(e),
          n,
          r,
          s,
          o
        ), t.targetStart = m, t.targetAnchor = m && i(m);
      else {
        t.anchor = i(e);
        let g = m;
        for (; g; ) {
          if (g && g.nodeType === 8) {
            if (g.data === "teleport start anchor")
              t.targetStart = g;
            else if (g.data === "teleport anchor") {
              t.targetAnchor = g, p._lpa = t.targetAnchor && i(t.targetAnchor);
              break;
            }
          }
          g = i(g);
        }
        t.targetAnchor || O1(p, t, f, u), c(
          m && i(m),
          t,
          p,
          n,
          r,
          s,
          o
        );
      }
    Ys(t, d);
  }
  return t.anchor && i(t.anchor);
}
const D4 = L1;
function Ys(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, s;
    for (t ? (r = e.el, s = e.anchor) : (r = e.targetStart, s = e.targetAnchor); r && r !== s; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function O1(e, t, n, r) {
  const s = t.targetStart = n(""), o = t.targetAnchor = n("");
  return s[$1] = o, e && (r(s, e), r(o, e)), o;
}
const vr = Symbol("_leaveCb"), Os = Symbol("_enterCb");
function N4() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return it(() => {
    e.isMounted = !0;
  }), Yt(() => {
    e.isUnmounting = !0;
  }), e;
}
const ln = [Function, Array], R1 = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: ln,
  onEnter: ln,
  onAfterEnter: ln,
  onEnterCancelled: ln,
  // leave
  onBeforeLeave: ln,
  onLeave: ln,
  onAfterLeave: ln,
  onLeaveCancelled: ln,
  // appear
  onBeforeAppear: ln,
  onAppear: ln,
  onAfterAppear: ln,
  onAppearCancelled: ln
}, P1 = (e) => {
  const t = e.subTree;
  return t.component ? P1(t.component) : t;
}, B4 = {
  name: "BaseTransition",
  props: R1,
  setup(e, { slots: t }) {
    const n = _t(), r = N4();
    return () => {
      const s = t.default && B1(t.default(), !0);
      if (!s || !s.length)
        return;
      const o = D1(s), i = je(e), { mode: a } = i;
      if (r.isLeaving)
        return ya(o);
      const l = dd(o);
      if (!l)
        return ya(o);
      let u = iu(
        l,
        i,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (c) => u = c
      );
      l.type !== Rt && ns(l, u);
      let f = n.subTree && dd(n.subTree);
      if (f && f.type !== Rt && !zr(l, f) && P1(n).type !== Rt) {
        let c = iu(
          f,
          i,
          r,
          n
        );
        if (ns(f, c), a === "out-in" && l.type !== Rt)
          return r.isLeaving = !0, c.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete c.afterLeave, f = void 0;
          }, ya(o);
        a === "in-out" && l.type !== Rt ? c.delayLeave = (p, d, m) => {
          const g = N1(
            r,
            f
          );
          g[String(f.key)] = f, p[vr] = () => {
            d(), p[vr] = void 0, delete u.delayedLeave, f = void 0;
          }, u.delayedLeave = () => {
            m(), delete u.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return o;
    };
  }
};
function D1(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Rt) {
        t = n;
        break;
      }
  }
  return t;
}
const F4 = B4;
function N1(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function iu(e, t, n, r, s) {
  const {
    appear: o,
    mode: i,
    persisted: a = !1,
    onBeforeEnter: l,
    onEnter: u,
    onAfterEnter: f,
    onEnterCancelled: c,
    onBeforeLeave: p,
    onLeave: d,
    onAfterLeave: m,
    onLeaveCancelled: g,
    onBeforeAppear: C,
    onAppear: h,
    onAfterAppear: k,
    onAppearCancelled: y
  } = t, _ = String(e.key), E = N1(n, e), x = (O, D) => {
    O && xn(
      O,
      r,
      9,
      D
    );
  }, M = (O, D) => {
    const B = D[1];
    x(O, D), Le(O) ? O.every((N) => N.length <= 1) && B() : O.length <= 1 && B();
  }, $ = {
    mode: i,
    persisted: a,
    beforeEnter(O) {
      let D = l;
      if (!n.isMounted)
        if (o)
          D = C || l;
        else
          return;
      O[vr] && O[vr](
        !0
        /* cancelled */
      );
      const B = E[_];
      B && zr(e, B) && B.el[vr] && B.el[vr](), x(D, [O]);
    },
    enter(O) {
      let D = u, B = f, N = c;
      if (!n.isMounted)
        if (o)
          D = h || u, B = k || f, N = y || c;
        else
          return;
      let oe = !1;
      const q = O[Os] = (ie) => {
        oe || (oe = !0, ie ? x(N, [O]) : x(B, [O]), $.delayedLeave && $.delayedLeave(), O[Os] = void 0);
      };
      D ? M(D, [O, q]) : q();
    },
    leave(O, D) {
      const B = String(e.key);
      if (O[Os] && O[Os](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return D();
      x(p, [O]);
      let N = !1;
      const oe = O[vr] = (q) => {
        N || (N = !0, D(), q ? x(g, [O]) : x(m, [O]), O[vr] = void 0, E[B] === e && delete E[B]);
      };
      E[B] = e, d ? M(d, [O, oe]) : oe();
    },
    clone(O) {
      const D = iu(
        O,
        t,
        n,
        r,
        s
      );
      return s && s(D), D;
    }
  };
  return $;
}
function ya(e) {
  if (Di(e))
    return e = Jn(e), e.children = null, e;
}
function dd(e) {
  if (!Di(e))
    return I1(e.type) && e.children ? D1(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Ee(n.default))
      return n.default();
  }
}
function ns(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ns(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function B1(e, t = !1, n) {
  let r = [], s = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === et ? (i.patchFlag & 128 && s++, r = r.concat(
      B1(i.children, t, a)
    )) : (t || i.type !== Rt) && r.push(a != null ? Jn(i, { key: a }) : i);
  }
  if (s > 1)
    for (let o = 0; o < r.length; o++)
      r[o].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function re(e, t) {
  return Ee(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    xt({ name: e.name }, t, { setup: e })
  ) : e;
}
function F1(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function pi(e, t, n, r, s = !1) {
  if (Le(e)) {
    e.forEach(
      (m, g) => pi(
        m,
        t && (Le(t) ? t[g] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (ho(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && pi(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? zi(r.component) : r.el, i = s ? null : o, { i: a, r: l } = e, u = t && t.r, f = a.refs === tt ? a.refs = {} : a.refs, c = a.setupState, p = je(c), d = c === tt ? () => !1 : (m) => Xe(p, m);
  if (u != null && u !== l && (Ke(u) ? (f[u] = null, d(u) && (c[u] = null)) : bt(u) && (u.value = null)), Ee(l))
    ms(l, a, 12, [i, f]);
  else {
    const m = Ke(l), g = bt(l);
    if (m || g) {
      const C = () => {
        if (e.f) {
          const h = m ? d(l) ? c[l] : f[l] : l.value;
          s ? Le(h) && qu(h, o) : Le(h) ? h.includes(o) || h.push(o) : m ? (f[l] = [o], d(l) && (c[l] = f[l])) : (l.value = [o], e.k && (f[e.k] = l.value));
        } else m ? (f[l] = i, d(l) && (c[l] = i)) : g && (l.value = i, e.k && (f[e.k] = i));
      };
      i ? (C.id = -1, qt(C, n)) : C();
    }
  }
}
Ii().requestIdleCallback;
Ii().cancelIdleCallback;
const ho = (e) => !!e.type.__asyncLoader, Di = (e) => e.type.__isKeepAlive;
function q4(e, t) {
  z1(e, "a", t);
}
function q1(e, t) {
  z1(e, "da", t);
}
function z1(e, t, n = Tt) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Ni(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Di(s.parent.vnode) && z4(r, t, n, s), s = s.parent;
  }
}
function z4(e, t, n, r) {
  const s = Ni(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Bi(() => {
    qu(r[t], s);
  }, n);
}
function Ni(e, t, n = Tt, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      Er();
      const a = vs(n), l = xn(t, n, e, i);
      return a(), Sr(), l;
    });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const sr = (e) => (t, n = Tt) => {
  (!ss || e === "sp") && Ni(e, (...r) => t(...r), n);
}, H1 = sr("bm"), it = sr("m"), H4 = sr(
  "bu"
), j1 = sr("u"), Yt = sr(
  "bum"
), Bi = sr("um"), j4 = sr(
  "sp"
), V4 = sr("rtg"), U4 = sr("rtc");
function K4(e, t = Tt) {
  Ni("ec", e, t);
}
const Yu = "components", W4 = "directives";
function fr(e, t) {
  return Ju(Yu, e, !0, t) || e;
}
const V1 = Symbol.for("v-ndc");
function Pt(e) {
  return Ke(e) ? Ju(Yu, e, !1) || e : e || V1;
}
function U1(e) {
  return Ju(W4, e);
}
function Ju(e, t, n = !0, r = !1) {
  const s = Ct || Tt;
  if (s) {
    const o = s.type;
    if (e === Yu) {
      const a = $w(
        o,
        !1
      );
      if (a && (a === t || a === dn(t) || a === $i(dn(t))))
        return o;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      pd(s[e] || o[e], t) || // global registration
      pd(s.appContext[e], t)
    );
    return !i && r ? o : i;
  }
}
function pd(e, t) {
  return e && (e[t] || e[dn(t)] || e[$i(dn(t))]);
}
function Cn(e, t, n, r) {
  let s;
  const o = n, i = Le(e);
  if (i || Ke(e)) {
    const a = i && fo(e);
    let l = !1;
    a && (l = !cn(e), e = Li(e)), s = new Array(e.length);
    for (let u = 0, f = e.length; u < f; u++)
      s[u] = t(
        l ? Ot(e[u]) : e[u],
        u,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let a = 0; a < e; a++)
      s[a] = t(a + 1, a, void 0, o);
  } else if (Fe(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (a, l) => t(a, l, void 0, o)
      );
    else {
      const a = Object.keys(e);
      s = new Array(a.length);
      for (let l = 0, u = a.length; l < u; l++) {
        const f = a[l];
        s[l] = t(e[f], f, l, o);
      }
    }
  else
    s = [];
  return s;
}
function hi(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (Le(r))
      for (let s = 0; s < r.length; s++)
        e[r[s].name] = r[s].fn;
    else r && (e[r.name] = r.key ? (...s) => {
      const o = r.fn(...s);
      return o && (o.key = r.key), o;
    } : r.fn);
  }
  return e;
}
function we(e, t, n = {}, r, s) {
  if (Ct.ce || Ct.parent && ho(Ct.parent) && Ct.parent.ce)
    return t !== "default" && (n.name = t), w(), ue(
      et,
      null,
      [Ce("slot", n, r && r())],
      64
    );
  let o = e[t];
  o && o._c && (o._d = !1), w();
  const i = o && K1(o(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, l = ue(
    et,
    {
      key: (a && !or(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && r ? "_fb" : "")
    },
    i || (r ? r() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !s && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), o && o._c && (o._d = !0), l;
}
function K1(e) {
  return e.some((t) => os(t) ? !(t.type === Rt || t.type === et && !K1(t.children)) : !0) ? e : null;
}
const au = (e) => e ? pg(e) ? zi(e) : au(e.parent) : null, Ko = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ xt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => au(e.parent),
    $root: (e) => au(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => X1(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Xu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ue.bind(e.proxy)),
    $watch: (e) => hw.bind(e)
  })
), wa = (e, t) => e !== tt && !e.__isScriptSetup && Xe(e, t), G4 = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: a, appContext: l } = e;
    let u;
    if (t[0] !== "$") {
      const d = i[t];
      if (d !== void 0)
        switch (d) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (wa(r, t))
          return i[t] = 1, r[t];
        if (s !== tt && Xe(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && Xe(u, t)
        )
          return i[t] = 3, o[t];
        if (n !== tt && Xe(n, t))
          return i[t] = 4, n[t];
        lu && (i[t] = 0);
      }
    }
    const f = Ko[t];
    let c, p;
    if (f)
      return t === "$attrs" && Lt(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (c = a.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== tt && Xe(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      p = l.config.globalProperties, Xe(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: o } = e;
    return wa(s, t) ? (s[t] = n, !0) : r !== tt && Xe(r, t) ? (r[t] = n, !0) : Xe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o }
  }, i) {
    let a;
    return !!n[i] || e !== tt && Xe(e, i) || wa(t, i) || (a = o[0]) && Xe(a, i) || Xe(r, i) || Xe(Ko, i) || Xe(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Xe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function W1() {
  return G1().slots;
}
function Fi() {
  return G1().attrs;
}
function G1() {
  const e = _t();
  return e.setupContext || (e.setupContext = gg(e));
}
function hd(e) {
  return Le(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let lu = !0;
function Z4(e) {
  const t = X1(e), n = e.proxy, r = e.ctx;
  lu = !1, t.beforeCreate && gd(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: o,
    methods: i,
    watch: a,
    provide: l,
    inject: u,
    // lifecycle
    created: f,
    beforeMount: c,
    mounted: p,
    beforeUpdate: d,
    updated: m,
    activated: g,
    deactivated: C,
    beforeDestroy: h,
    beforeUnmount: k,
    destroyed: y,
    unmounted: _,
    render: E,
    renderTracked: x,
    renderTriggered: M,
    errorCaptured: $,
    serverPrefetch: O,
    // public API
    expose: D,
    inheritAttrs: B,
    // assets
    components: N,
    directives: oe,
    filters: q
  } = t;
  if (u && X4(u, r, null), i)
    for (const V in i) {
      const H = i[V];
      Ee(H) && (r[V] = H.bind(n));
    }
  if (s) {
    const V = s.call(n, n);
    Fe(V) && (e.data = Sn(V));
  }
  if (lu = !0, o)
    for (const V in o) {
      const H = o[V], J = Ee(H) ? H.bind(n, n) : Ee(H.get) ? H.get.bind(n, n) : Dt, L = !Ee(H) && Ee(H.set) ? H.set.bind(n) : Dt, Z = P({
        get: J,
        set: L
      });
      Object.defineProperty(r, V, {
        enumerable: !0,
        configurable: !0,
        get: () => Z.value,
        set: (K) => Z.value = K
      });
    }
  if (a)
    for (const V in a)
      Z1(a[V], r, n, V);
  if (l) {
    const V = Ee(l) ? l.call(n) : l;
    Reflect.ownKeys(V).forEach((H) => {
      Kt(H, V[H]);
    });
  }
  f && gd(f, e, "c");
  function j(V, H) {
    Le(H) ? H.forEach((J) => V(J.bind(n))) : H && V(H.bind(n));
  }
  if (j(H1, c), j(it, p), j(H4, d), j(j1, m), j(q4, g), j(q1, C), j(K4, $), j(U4, x), j(V4, M), j(Yt, k), j(Bi, _), j(j4, O), Le(D))
    if (D.length) {
      const V = e.exposed || (e.exposed = {});
      D.forEach((H) => {
        Object.defineProperty(V, H, {
          get: () => n[H],
          set: (J) => n[H] = J
        });
      });
    } else e.exposed || (e.exposed = {});
  E && e.render === Dt && (e.render = E), B != null && (e.inheritAttrs = B), N && (e.components = N), oe && (e.directives = oe), O && F1(e);
}
function X4(e, t, n = Dt) {
  Le(e) && (e = cu(e));
  for (const r in e) {
    const s = e[r];
    let o;
    Fe(s) ? "default" in s ? o = qe(
      s.from || r,
      s.default,
      !0
    ) : o = qe(s.from || r) : o = qe(s), bt(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[r] = o;
  }
}
function gd(e, t, n) {
  xn(
    Le(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Z1(e, t, n, r) {
  let s = r.includes(".") ? lg(n, r) : () => n[r];
  if (Ke(e)) {
    const o = t[e];
    Ee(o) && Te(s, o);
  } else if (Ee(e))
    Te(s, e.bind(n));
  else if (Fe(e))
    if (Le(e))
      e.forEach((o) => Z1(o, t, n, r));
    else {
      const o = Ee(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ee(o) && Te(s, o, e);
    }
}
function X1(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !s.length && !n && !r ? l = t : (l = {}, s.length && s.forEach(
    (u) => gi(l, u, i, !0)
  ), gi(l, t, i)), Fe(t) && o.set(t, l), l;
}
function gi(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && gi(e, o, n, !0), s && s.forEach(
    (i) => gi(e, i, n, !0)
  );
  for (const i in t)
    if (!(r && i === "expose")) {
      const a = Y4[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const Y4 = {
  data: md,
  props: vd,
  emits: vd,
  // objects
  methods: Fo,
  computed: Fo,
  // lifecycle
  beforeCreate: Ft,
  created: Ft,
  beforeMount: Ft,
  mounted: Ft,
  beforeUpdate: Ft,
  updated: Ft,
  beforeDestroy: Ft,
  beforeUnmount: Ft,
  destroyed: Ft,
  unmounted: Ft,
  activated: Ft,
  deactivated: Ft,
  errorCaptured: Ft,
  serverPrefetch: Ft,
  // assets
  components: Fo,
  directives: Fo,
  // watch
  watch: Q4,
  // provide / inject
  provide: md,
  inject: J4
};
function md(e, t) {
  return t ? e ? function() {
    return xt(
      Ee(e) ? e.call(this, this) : e,
      Ee(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function J4(e, t) {
  return Fo(cu(e), cu(t));
}
function cu(e) {
  if (Le(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ft(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Fo(e, t) {
  return e ? xt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function vd(e, t) {
  return e ? Le(e) && Le(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : xt(
    /* @__PURE__ */ Object.create(null),
    hd(e),
    hd(t ?? {})
  ) : t;
}
function Q4(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = xt(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Ft(e[r], t[r]);
  return n;
}
function Y1() {
  return {
    app: null,
    config: {
      isNativeTag: Uy,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let ew = 0;
function tw(e, t) {
  return function(r, s = null) {
    Ee(r) || (r = xt({}, r)), s != null && !Fe(s) && (s = null);
    const o = Y1(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const u = o.app = {
      _uid: ew++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: Lw,
      get config() {
        return o.config;
      },
      set config(f) {
      },
      use(f, ...c) {
        return i.has(f) || (f && Ee(f.install) ? (i.add(f), f.install(u, ...c)) : Ee(f) && (i.add(f), f(u, ...c))), u;
      },
      mixin(f) {
        return o.mixins.includes(f) || o.mixins.push(f), u;
      },
      component(f, c) {
        return c ? (o.components[f] = c, u) : o.components[f];
      },
      directive(f, c) {
        return c ? (o.directives[f] = c, u) : o.directives[f];
      },
      mount(f, c, p) {
        if (!l) {
          const d = u._ceVNode || Ce(r, s);
          return d.appContext = o, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(d, f, p), l = !0, u._container = f, f.__vue_app__ = u, zi(d.component);
        }
      },
      onUnmount(f) {
        a.push(f);
      },
      unmount() {
        l && (xn(
          a,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(f, c) {
        return o.provides[f] = c, u;
      },
      runWithContext(f) {
        const c = go;
        go = u;
        try {
          return f();
        } finally {
          go = c;
        }
      }
    };
    return u;
  };
}
let go = null;
function Kt(e, t) {
  if (Tt) {
    let n = Tt.provides;
    const r = Tt.parent && Tt.parent.provides;
    r === n && (n = Tt.provides = Object.create(r)), n[e] = t;
  }
}
function qe(e, t, n = !1) {
  const r = Tt || Ct;
  if (r || go) {
    const s = go ? go._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && Ee(t) ? t.call(r && r.proxy) : t;
  }
}
const J1 = {}, Q1 = () => Object.create(J1), eg = (e) => Object.getPrototypeOf(e) === J1;
function nw(e, t, n, r = !1) {
  const s = {}, o = Q1();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), tg(e, t, s, o);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  n ? e.props = r ? s : k4(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o;
}
function rw(e, t, n, r) {
  const {
    props: s,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, a = je(s), [l] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const f = e.vnode.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        let p = f[c];
        if (qi(e.emitsOptions, p))
          continue;
        const d = t[p];
        if (l)
          if (Xe(o, p))
            d !== o[p] && (o[p] = d, u = !0);
          else {
            const m = dn(p);
            s[m] = uu(
              l,
              a,
              m,
              d,
              e,
              !1
            );
          }
        else
          d !== o[p] && (o[p] = d, u = !0);
      }
    }
  } else {
    tg(e, t, s, o) && (u = !0);
    let f;
    for (const c in a)
      (!t || // for camelCase
      !Xe(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = xr(c)) === c || !Xe(t, f))) && (l ? n && // for camelCase
      (n[c] !== void 0 || // for kebab-case
      n[f] !== void 0) && (s[c] = uu(
        l,
        a,
        c,
        void 0,
        e,
        !0
      )) : delete s[c]);
    if (o !== a)
      for (const c in o)
        (!t || !Xe(t, c)) && (delete o[c], u = !0);
  }
  u && Kn(e.attrs, "set", "");
}
function tg(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let l in t) {
      if (Ho(l))
        continue;
      const u = t[l];
      let f;
      s && Xe(s, f = dn(l)) ? !o || !o.includes(f) ? n[f] = u : (a || (a = {}))[f] = u : qi(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, i = !0);
    }
  if (o) {
    const l = je(n), u = a || tt;
    for (let f = 0; f < o.length; f++) {
      const c = o[f];
      n[c] = uu(
        s,
        l,
        c,
        u[c],
        e,
        !Xe(u, c)
      );
    }
  }
  return i;
}
function uu(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const a = Xe(i, "default");
    if (a && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && Ee(l)) {
        const { propsDefaults: u } = s;
        if (n in u)
          r = u[n];
        else {
          const f = vs(s);
          r = u[n] = l.call(
            null,
            t
          ), f();
        }
      } else
        r = l;
      s.ce && s.ce._setProp(n, r);
    }
    i[
      0
      /* shouldCast */
    ] && (o && !a ? r = !1 : i[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === xr(n)) && (r = !0));
  }
  return r;
}
const ow = /* @__PURE__ */ new WeakMap();
function ng(e, t, n = !1) {
  const r = n ? ow : t.propsCache, s = r.get(e);
  if (s)
    return s;
  const o = e.props, i = {}, a = [];
  let l = !1;
  if (!Ee(e)) {
    const f = (c) => {
      l = !0;
      const [p, d] = ng(c, t, !0);
      xt(i, p), d && a.push(...d);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!o && !l)
    return Fe(e) && r.set(e, co), co;
  if (Le(o))
    for (let f = 0; f < o.length; f++) {
      const c = dn(o[f]);
      bd(c) && (i[c] = tt);
    }
  else if (o)
    for (const f in o) {
      const c = dn(f);
      if (bd(c)) {
        const p = o[f], d = i[c] = Le(p) || Ee(p) ? { type: p } : xt({}, p), m = d.type;
        let g = !1, C = !0;
        if (Le(m))
          for (let h = 0; h < m.length; ++h) {
            const k = m[h], y = Ee(k) && k.name;
            if (y === "Boolean") {
              g = !0;
              break;
            } else y === "String" && (C = !1);
          }
        else
          g = Ee(m) && m.name === "Boolean";
        d[
          0
          /* shouldCast */
        ] = g, d[
          1
          /* shouldCastTrue */
        ] = C, (g || Xe(d, "default")) && a.push(c);
      }
    }
  const u = [i, a];
  return Fe(e) && r.set(e, u), u;
}
function bd(e) {
  return e[0] !== "$" && !Ho(e);
}
const rg = (e) => e[0] === "_" || e === "$stable", Qu = (e) => Le(e) ? e.map(Pn) : [Pn(e)], sw = (e, t, n) => {
  if (t._n)
    return t;
  const r = he((...s) => Qu(t(...s)), n);
  return r._c = !1, r;
}, og = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (rg(s)) continue;
    const o = e[s];
    if (Ee(o))
      t[s] = sw(s, o, r);
    else if (o != null) {
      const i = Qu(o);
      t[s] = () => i;
    }
  }
}, sg = (e, t) => {
  const n = Qu(t);
  e.slots.default = () => n;
}, ig = (e, t, n) => {
  for (const r in t)
    (n || r !== "_") && (e[r] = t[r]);
}, iw = (e, t, n) => {
  const r = e.slots = Q1();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (ig(r, t, n), n && r1(r, "_", s, !0)) : og(t, r);
  } else t && sg(e, t);
}, aw = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let o = !0, i = tt;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? o = !1 : ig(s, t, n) : (o = !t.$stable, og(t, s)), i = t;
  } else t && (sg(e, t), i = { default: 1 });
  if (o)
    for (const a in s)
      !rg(a) && i[a] == null && delete s[a];
}, qt = ww;
function lw(e) {
  return cw(e);
}
function cw(e, t) {
  const n = Ii();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: s,
    patchProp: o,
    createElement: i,
    createText: a,
    createComment: l,
    setText: u,
    setElementText: f,
    parentNode: c,
    nextSibling: p,
    setScopeId: d = Dt,
    insertStaticContent: m
  } = e, g = (T, I, z, Y = null, X = null, ee = null, ae = void 0, se = null, ne = !!I.dynamicChildren) => {
    if (T === I)
      return;
    T && !zr(T, I) && (Y = We(T), K(T, X, ee, !0), T = null), I.patchFlag === -2 && (ne = !1, I.dynamicChildren = null);
    const { type: te, ref: ye, shapeFlag: fe } = I;
    switch (te) {
      case So:
        C(T, I, z, Y);
        break;
      case Rt:
        h(T, I, z, Y);
        break;
      case Js:
        T == null && k(I, z, Y, ae);
        break;
      case et:
        N(
          T,
          I,
          z,
          Y,
          X,
          ee,
          ae,
          se,
          ne
        );
        break;
      default:
        fe & 1 ? E(
          T,
          I,
          z,
          Y,
          X,
          ee,
          ae,
          se,
          ne
        ) : fe & 6 ? oe(
          T,
          I,
          z,
          Y,
          X,
          ee,
          ae,
          se,
          ne
        ) : (fe & 64 || fe & 128) && te.process(
          T,
          I,
          z,
          Y,
          X,
          ee,
          ae,
          se,
          ne,
          pe
        );
    }
    ye != null && X && pi(ye, T && T.ref, ee, I || T, !I);
  }, C = (T, I, z, Y) => {
    if (T == null)
      r(
        I.el = a(I.children),
        z,
        Y
      );
    else {
      const X = I.el = T.el;
      I.children !== T.children && u(X, I.children);
    }
  }, h = (T, I, z, Y) => {
    T == null ? r(
      I.el = l(I.children || ""),
      z,
      Y
    ) : I.el = T.el;
  }, k = (T, I, z, Y) => {
    [T.el, T.anchor] = m(
      T.children,
      I,
      z,
      Y,
      T.el,
      T.anchor
    );
  }, y = ({ el: T, anchor: I }, z, Y) => {
    let X;
    for (; T && T !== I; )
      X = p(T), r(T, z, Y), T = X;
    r(I, z, Y);
  }, _ = ({ el: T, anchor: I }) => {
    let z;
    for (; T && T !== I; )
      z = p(T), s(T), T = z;
    s(I);
  }, E = (T, I, z, Y, X, ee, ae, se, ne) => {
    I.type === "svg" ? ae = "svg" : I.type === "math" && (ae = "mathml"), T == null ? x(
      I,
      z,
      Y,
      X,
      ee,
      ae,
      se,
      ne
    ) : O(
      T,
      I,
      X,
      ee,
      ae,
      se,
      ne
    );
  }, x = (T, I, z, Y, X, ee, ae, se) => {
    let ne, te;
    const { props: ye, shapeFlag: fe, transition: ve, dirs: U } = T;
    if (ne = T.el = i(
      T.type,
      ee,
      ye && ye.is,
      ye
    ), fe & 8 ? f(ne, T.children) : fe & 16 && $(
      T.children,
      ne,
      null,
      Y,
      X,
      ka(T, ee),
      ae,
      se
    ), U && Lr(T, null, Y, "created"), M(ne, T, T.scopeId, ae, Y), ye) {
      for (const Ae in ye)
        Ae !== "value" && !Ho(Ae) && o(ne, Ae, null, ye[Ae], ee, Y);
      "value" in ye && o(ne, "value", null, ye.value, ee), (te = ye.onVnodeBeforeMount) && On(te, Y, T);
    }
    U && Lr(T, null, Y, "beforeMount");
    const le = uw(X, ve);
    le && ve.beforeEnter(ne), r(ne, I, z), ((te = ye && ye.onVnodeMounted) || le || U) && qt(() => {
      te && On(te, Y, T), le && ve.enter(ne), U && Lr(T, null, Y, "mounted");
    }, X);
  }, M = (T, I, z, Y, X) => {
    if (z && d(T, z), Y)
      for (let ee = 0; ee < Y.length; ee++)
        d(T, Y[ee]);
    if (X) {
      let ee = X.subTree;
      if (I === ee || ug(ee.type) && (ee.ssContent === I || ee.ssFallback === I)) {
        const ae = X.vnode;
        M(
          T,
          ae,
          ae.scopeId,
          ae.slotScopeIds,
          X.parent
        );
      }
    }
  }, $ = (T, I, z, Y, X, ee, ae, se, ne = 0) => {
    for (let te = ne; te < T.length; te++) {
      const ye = T[te] = se ? br(T[te]) : Pn(T[te]);
      g(
        null,
        ye,
        I,
        z,
        Y,
        X,
        ee,
        ae,
        se
      );
    }
  }, O = (T, I, z, Y, X, ee, ae) => {
    const se = I.el = T.el;
    let { patchFlag: ne, dynamicChildren: te, dirs: ye } = I;
    ne |= T.patchFlag & 16;
    const fe = T.props || tt, ve = I.props || tt;
    let U;
    if (z && Or(z, !1), (U = ve.onVnodeBeforeUpdate) && On(U, z, I, T), ye && Lr(I, T, z, "beforeUpdate"), z && Or(z, !0), (fe.innerHTML && ve.innerHTML == null || fe.textContent && ve.textContent == null) && f(se, ""), te ? D(
      T.dynamicChildren,
      te,
      se,
      z,
      Y,
      ka(I, X),
      ee
    ) : ae || H(
      T,
      I,
      se,
      null,
      z,
      Y,
      ka(I, X),
      ee,
      !1
    ), ne > 0) {
      if (ne & 16)
        B(se, fe, ve, z, X);
      else if (ne & 2 && fe.class !== ve.class && o(se, "class", null, ve.class, X), ne & 4 && o(se, "style", fe.style, ve.style, X), ne & 8) {
        const le = I.dynamicProps;
        for (let Ae = 0; Ae < le.length; Ae++) {
          const Oe = le[Ae], ct = fe[Oe], ht = ve[Oe];
          (ht !== ct || Oe === "value") && o(se, Oe, ct, ht, X, z);
        }
      }
      ne & 1 && T.children !== I.children && f(se, I.children);
    } else !ae && te == null && B(se, fe, ve, z, X);
    ((U = ve.onVnodeUpdated) || ye) && qt(() => {
      U && On(U, z, I, T), ye && Lr(I, T, z, "updated");
    }, Y);
  }, D = (T, I, z, Y, X, ee, ae) => {
    for (let se = 0; se < I.length; se++) {
      const ne = T[se], te = I[se], ye = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ne.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ne.type === et || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !zr(ne, te) || // - In the case of a component, it could contain anything.
        ne.shapeFlag & 70) ? c(ne.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          z
        )
      );
      g(
        ne,
        te,
        ye,
        null,
        Y,
        X,
        ee,
        ae,
        !0
      );
    }
  }, B = (T, I, z, Y, X) => {
    if (I !== z) {
      if (I !== tt)
        for (const ee in I)
          !Ho(ee) && !(ee in z) && o(
            T,
            ee,
            I[ee],
            null,
            X,
            Y
          );
      for (const ee in z) {
        if (Ho(ee)) continue;
        const ae = z[ee], se = I[ee];
        ae !== se && ee !== "value" && o(T, ee, se, ae, X, Y);
      }
      "value" in z && o(T, "value", I.value, z.value, X);
    }
  }, N = (T, I, z, Y, X, ee, ae, se, ne) => {
    const te = I.el = T ? T.el : a(""), ye = I.anchor = T ? T.anchor : a("");
    let { patchFlag: fe, dynamicChildren: ve, slotScopeIds: U } = I;
    U && (se = se ? se.concat(U) : U), T == null ? (r(te, z, Y), r(ye, z, Y), $(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      I.children || [],
      z,
      ye,
      X,
      ee,
      ae,
      se,
      ne
    )) : fe > 0 && fe & 64 && ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    T.dynamicChildren ? (D(
      T.dynamicChildren,
      ve,
      z,
      X,
      ee,
      ae,
      se
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (I.key != null || X && I === X.subTree) && ef(
      T,
      I,
      !0
      /* shallow */
    )) : H(
      T,
      I,
      z,
      ye,
      X,
      ee,
      ae,
      se,
      ne
    );
  }, oe = (T, I, z, Y, X, ee, ae, se, ne) => {
    I.slotScopeIds = se, T == null ? I.shapeFlag & 512 ? X.ctx.activate(
      I,
      z,
      Y,
      ae,
      ne
    ) : q(
      I,
      z,
      Y,
      X,
      ee,
      ae,
      ne
    ) : ie(T, I, ne);
  }, q = (T, I, z, Y, X, ee, ae) => {
    const se = T.component = Sw(
      T,
      Y,
      X
    );
    if (Di(T) && (se.ctx.renderer = pe), Aw(se, !1, ae), se.asyncDep) {
      if (X && X.registerDep(se, j, ae), !T.el) {
        const ne = se.subTree = Ce(Rt);
        h(null, ne, I, z);
      }
    } else
      j(
        se,
        T,
        I,
        z,
        X,
        ee,
        ae
      );
  }, ie = (T, I, z) => {
    const Y = I.component = T.component;
    if (_w(T, I, z))
      if (Y.asyncDep && !Y.asyncResolved) {
        V(Y, I, z);
        return;
      } else
        Y.next = I, Y.update();
    else
      I.el = T.el, Y.vnode = I;
  }, j = (T, I, z, Y, X, ee, ae) => {
    const se = () => {
      if (T.isMounted) {
        let { next: fe, bu: ve, u: U, parent: le, vnode: Ae } = T;
        {
          const Et = ag(T);
          if (Et) {
            fe && (fe.el = Ae.el, V(T, fe, ae)), Et.asyncDep.then(() => {
              T.isUnmounted || se();
            });
            return;
          }
        }
        let Oe = fe, ct;
        Or(T, !1), fe ? (fe.el = Ae.el, V(T, fe, ae)) : fe = Ae, ve && Xs(ve), (ct = fe.props && fe.props.onVnodeBeforeUpdate) && On(ct, le, fe, Ae), Or(T, !0);
        const ht = yd(T), kt = T.subTree;
        T.subTree = ht, g(
          kt,
          ht,
          // parent may have changed if it's in a teleport
          c(kt.el),
          // anchor may have changed if it's in a fragment
          We(kt),
          T,
          X,
          ee
        ), fe.el = ht.el, Oe === null && yw(T, ht.el), U && qt(U, X), (ct = fe.props && fe.props.onVnodeUpdated) && qt(
          () => On(ct, le, fe, Ae),
          X
        );
      } else {
        let fe;
        const { el: ve, props: U } = I, { bm: le, m: Ae, parent: Oe, root: ct, type: ht } = T, kt = ho(I);
        Or(T, !1), le && Xs(le), !kt && (fe = U && U.onVnodeBeforeMount) && On(fe, Oe, I), Or(T, !0);
        {
          ct.ce && ct.ce._injectChildStyle(ht);
          const Et = T.subTree = yd(T);
          g(
            null,
            Et,
            z,
            Y,
            T,
            X,
            ee
          ), I.el = Et.el;
        }
        if (Ae && qt(Ae, X), !kt && (fe = U && U.onVnodeMounted)) {
          const Et = I;
          qt(
            () => On(fe, Oe, Et),
            X
          );
        }
        (I.shapeFlag & 256 || Oe && ho(Oe.vnode) && Oe.vnode.shapeFlag & 256) && T.a && qt(T.a, X), T.isMounted = !0, I = z = Y = null;
      }
    };
    T.scope.on();
    const ne = T.effect = new l1(se);
    T.scope.off();
    const te = T.update = ne.run.bind(ne), ye = T.job = ne.runIfDirty.bind(ne);
    ye.i = T, ye.id = T.uid, ne.scheduler = () => Xu(ye), Or(T, !0), te();
  }, V = (T, I, z) => {
    I.component = T;
    const Y = T.vnode.props;
    T.vnode = I, T.next = null, rw(T, I.props, Y, z), aw(T, I.children, z), Er(), ld(T), Sr();
  }, H = (T, I, z, Y, X, ee, ae, se, ne = !1) => {
    const te = T && T.children, ye = T ? T.shapeFlag : 0, fe = I.children, { patchFlag: ve, shapeFlag: U } = I;
    if (ve > 0) {
      if (ve & 128) {
        L(
          te,
          fe,
          z,
          Y,
          X,
          ee,
          ae,
          se,
          ne
        );
        return;
      } else if (ve & 256) {
        J(
          te,
          fe,
          z,
          Y,
          X,
          ee,
          ae,
          se,
          ne
        );
        return;
      }
    }
    U & 8 ? (ye & 16 && Pe(te, X, ee), fe !== te && f(z, fe)) : ye & 16 ? U & 16 ? L(
      te,
      fe,
      z,
      Y,
      X,
      ee,
      ae,
      se,
      ne
    ) : Pe(te, X, ee, !0) : (ye & 8 && f(z, ""), U & 16 && $(
      fe,
      z,
      Y,
      X,
      ee,
      ae,
      se,
      ne
    ));
  }, J = (T, I, z, Y, X, ee, ae, se, ne) => {
    T = T || co, I = I || co;
    const te = T.length, ye = I.length, fe = Math.min(te, ye);
    let ve;
    for (ve = 0; ve < fe; ve++) {
      const U = I[ve] = ne ? br(I[ve]) : Pn(I[ve]);
      g(
        T[ve],
        U,
        z,
        null,
        X,
        ee,
        ae,
        se,
        ne
      );
    }
    te > ye ? Pe(
      T,
      X,
      ee,
      !0,
      !1,
      fe
    ) : $(
      I,
      z,
      Y,
      X,
      ee,
      ae,
      se,
      ne,
      fe
    );
  }, L = (T, I, z, Y, X, ee, ae, se, ne) => {
    let te = 0;
    const ye = I.length;
    let fe = T.length - 1, ve = ye - 1;
    for (; te <= fe && te <= ve; ) {
      const U = T[te], le = I[te] = ne ? br(I[te]) : Pn(I[te]);
      if (zr(U, le))
        g(
          U,
          le,
          z,
          null,
          X,
          ee,
          ae,
          se,
          ne
        );
      else
        break;
      te++;
    }
    for (; te <= fe && te <= ve; ) {
      const U = T[fe], le = I[ve] = ne ? br(I[ve]) : Pn(I[ve]);
      if (zr(U, le))
        g(
          U,
          le,
          z,
          null,
          X,
          ee,
          ae,
          se,
          ne
        );
      else
        break;
      fe--, ve--;
    }
    if (te > fe) {
      if (te <= ve) {
        const U = ve + 1, le = U < ye ? I[U].el : Y;
        for (; te <= ve; )
          g(
            null,
            I[te] = ne ? br(I[te]) : Pn(I[te]),
            z,
            le,
            X,
            ee,
            ae,
            se,
            ne
          ), te++;
      }
    } else if (te > ve)
      for (; te <= fe; )
        K(T[te], X, ee, !0), te++;
    else {
      const U = te, le = te, Ae = /* @__PURE__ */ new Map();
      for (te = le; te <= ve; te++) {
        const mt = I[te] = ne ? br(I[te]) : Pn(I[te]);
        mt.key != null && Ae.set(mt.key, te);
      }
      let Oe, ct = 0;
      const ht = ve - le + 1;
      let kt = !1, Et = 0;
      const gn = new Array(ht);
      for (te = 0; te < ht; te++) gn[te] = 0;
      for (te = U; te <= fe; te++) {
        const mt = T[te];
        if (ct >= ht) {
          K(mt, X, ee, !0);
          continue;
        }
        let $t;
        if (mt.key != null)
          $t = Ae.get(mt.key);
        else
          for (Oe = le; Oe <= ve; Oe++)
            if (gn[Oe - le] === 0 && zr(mt, I[Oe])) {
              $t = Oe;
              break;
            }
        $t === void 0 ? K(mt, X, ee, !0) : (gn[$t - le] = te + 1, $t >= Et ? Et = $t : kt = !0, g(
          mt,
          I[$t],
          z,
          null,
          X,
          ee,
          ae,
          se,
          ne
        ), ct++);
      }
      const an = kt ? fw(gn) : co;
      for (Oe = an.length - 1, te = ht - 1; te >= 0; te--) {
        const mt = le + te, $t = I[mt], $n = mt + 1 < ye ? I[mt + 1].el : Y;
        gn[te] === 0 ? g(
          null,
          $t,
          z,
          $n,
          X,
          ee,
          ae,
          se,
          ne
        ) : kt && (Oe < 0 || te !== an[Oe] ? Z($t, z, $n, 2) : Oe--);
      }
    }
  }, Z = (T, I, z, Y, X = null) => {
    const { el: ee, type: ae, transition: se, children: ne, shapeFlag: te } = T;
    if (te & 6) {
      Z(T.component.subTree, I, z, Y);
      return;
    }
    if (te & 128) {
      T.suspense.move(I, z, Y);
      return;
    }
    if (te & 64) {
      ae.move(T, I, z, pe);
      return;
    }
    if (ae === et) {
      r(ee, I, z);
      for (let fe = 0; fe < ne.length; fe++)
        Z(ne[fe], I, z, Y);
      r(T.anchor, I, z);
      return;
    }
    if (ae === Js) {
      y(T, I, z);
      return;
    }
    if (Y !== 2 && te & 1 && se)
      if (Y === 0)
        se.beforeEnter(ee), r(ee, I, z), qt(() => se.enter(ee), X);
      else {
        const { leave: fe, delayLeave: ve, afterLeave: U } = se, le = () => r(ee, I, z), Ae = () => {
          fe(ee, () => {
            le(), U && U();
          });
        };
        ve ? ve(ee, le, Ae) : Ae();
      }
    else
      r(ee, I, z);
  }, K = (T, I, z, Y = !1, X = !1) => {
    const {
      type: ee,
      props: ae,
      ref: se,
      children: ne,
      dynamicChildren: te,
      shapeFlag: ye,
      patchFlag: fe,
      dirs: ve,
      cacheIndex: U
    } = T;
    if (fe === -2 && (X = !1), se != null && pi(se, null, z, T, !0), U != null && (I.renderCache[U] = void 0), ye & 256) {
      I.ctx.deactivate(T);
      return;
    }
    const le = ye & 1 && ve, Ae = !ho(T);
    let Oe;
    if (Ae && (Oe = ae && ae.onVnodeBeforeUnmount) && On(Oe, I, T), ye & 6)
      Re(T.component, z, Y);
    else {
      if (ye & 128) {
        T.suspense.unmount(z, Y);
        return;
      }
      le && Lr(T, null, I, "beforeUnmount"), ye & 64 ? T.type.remove(
        T,
        I,
        z,
        pe,
        Y
      ) : te && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !te.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ee !== et || fe > 0 && fe & 64) ? Pe(
        te,
        I,
        z,
        !1,
        !0
      ) : (ee === et && fe & 384 || !X && ye & 16) && Pe(ne, I, z), Y && me(T);
    }
    (Ae && (Oe = ae && ae.onVnodeUnmounted) || le) && qt(() => {
      Oe && On(Oe, I, T), le && Lr(T, null, I, "unmounted");
    }, z);
  }, me = (T) => {
    const { type: I, el: z, anchor: Y, transition: X } = T;
    if (I === et) {
      Se(z, Y);
      return;
    }
    if (I === Js) {
      _(T);
      return;
    }
    const ee = () => {
      s(z), X && !X.persisted && X.afterLeave && X.afterLeave();
    };
    if (T.shapeFlag & 1 && X && !X.persisted) {
      const { leave: ae, delayLeave: se } = X, ne = () => ae(z, ee);
      se ? se(T.el, ee, ne) : ne();
    } else
      ee();
  }, Se = (T, I) => {
    let z;
    for (; T !== I; )
      z = p(T), s(T), T = z;
    s(I);
  }, Re = (T, I, z) => {
    const { bum: Y, scope: X, job: ee, subTree: ae, um: se, m: ne, a: te } = T;
    _d(ne), _d(te), Y && Xs(Y), X.stop(), ee && (ee.flags |= 8, K(ae, T, I, z)), se && qt(se, I), qt(() => {
      T.isUnmounted = !0;
    }, I), I && I.pendingBranch && !I.isUnmounted && T.asyncDep && !T.asyncResolved && T.suspenseId === I.pendingId && (I.deps--, I.deps === 0 && I.resolve());
  }, Pe = (T, I, z, Y = !1, X = !1, ee = 0) => {
    for (let ae = ee; ae < T.length; ae++)
      K(T[ae], I, z, Y, X);
  }, We = (T) => {
    if (T.shapeFlag & 6)
      return We(T.component.subTree);
    if (T.shapeFlag & 128)
      return T.suspense.next();
    const I = p(T.anchor || T.el), z = I && I[$1];
    return z ? p(z) : I;
  };
  let ze = !1;
  const dt = (T, I, z) => {
    T == null ? I._vnode && K(I._vnode, null, null, !0) : g(
      I._vnode || null,
      T,
      I,
      null,
      null,
      null,
      z
    ), I._vnode = T, ze || (ze = !0, ld(), A1(), ze = !1);
  }, pe = {
    p: g,
    um: K,
    m: Z,
    r: me,
    mt: q,
    mc: $,
    pc: H,
    pbc: D,
    n: We,
    o: e
  };
  return {
    render: dt,
    hydrate: void 0,
    createApp: tw(dt)
  };
}
function ka({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Or({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function uw(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ef(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (Le(r) && Le(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let a = s[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[o] = br(s[o]), a.el = i.el), !n && a.patchFlag !== -2 && ef(i, a)), a.type === So && (a.el = i.el);
    }
}
function fw(e) {
  const t = e.slice(), n = [0];
  let r, s, o, i, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const u = e[r];
    if (u !== 0) {
      if (s = n[n.length - 1], e[s] < u) {
        t[r] = s, n.push(r);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        a = o + i >> 1, e[n[a]] < u ? o = a + 1 : i = a;
      u < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
function ag(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ag(t);
}
function _d(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const dw = Symbol.for("v-scx"), pw = () => qe(dw);
function tf(e, t) {
  return nf(e, null, t);
}
function Te(e, t, n) {
  return nf(e, t, n);
}
function nf(e, t, n = tt) {
  const { immediate: r, deep: s, flush: o, once: i } = n, a = xt({}, n), l = t && r || !t && o !== "post";
  let u;
  if (ss) {
    if (o === "sync") {
      const d = pw();
      u = d.__watcherHandles || (d.__watcherHandles = []);
    } else if (!l) {
      const d = () => {
      };
      return d.stop = Dt, d.resume = Dt, d.pause = Dt, d;
    }
  }
  const f = Tt;
  a.call = (d, m, g) => xn(d, f, m, g);
  let c = !1;
  o === "post" ? a.scheduler = (d) => {
    qt(d, f && f.suspense);
  } : o !== "sync" && (c = !0, a.scheduler = (d, m) => {
    m ? d() : Xu(d);
  }), a.augmentJob = (d) => {
    t && (d.flags |= 4), c && (d.flags |= 2, f && (d.id = f.uid, d.i = f));
  };
  const p = I4(e, t, a);
  return ss && (u ? u.push(p) : l && p()), p;
}
function hw(e, t, n) {
  const r = this.proxy, s = Ke(e) ? e.includes(".") ? lg(r, e) : () => r[e] : e.bind(r, r);
  let o;
  Ee(t) ? o = t : (o = t.handler, n = t);
  const i = vs(this), a = nf(s, o.bind(r), n);
  return i(), a;
}
function lg(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
const gw = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${dn(t)}Modifiers`] || e[`${xr(t)}Modifiers`];
function mw(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || tt;
  let s = n;
  const o = t.startsWith("update:"), i = o && gw(r, t.slice(7));
  i && (i.trim && (s = n.map((f) => Ke(f) ? f.trim() : f)), i.number && (s = n.map(eu)));
  let a, l = r[a = ga(t)] || // also try camelCase event handler (#2249)
  r[a = ga(dn(t))];
  !l && o && (l = r[a = ga(xr(t))]), l && xn(
    l,
    e,
    6,
    s
  );
  const u = r[a + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, xn(
      u,
      e,
      6,
      s
    );
  }
}
function cg(e, t, n = !1) {
  const r = t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const o = e.emits;
  let i = {}, a = !1;
  if (!Ee(e)) {
    const l = (u) => {
      const f = cg(u, t, !0);
      f && (a = !0, xt(i, f));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (Fe(e) && r.set(e, null), null) : (Le(o) ? o.forEach((l) => i[l] = null) : xt(i, o), Fe(e) && r.set(e, i), i);
}
function qi(e, t) {
  return !e || !Ai(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Xe(e, t[0].toLowerCase() + t.slice(1)) || Xe(e, xr(t)) || Xe(e, t));
}
function yd(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    propsOptions: [o],
    slots: i,
    attrs: a,
    emit: l,
    render: u,
    renderCache: f,
    props: c,
    data: p,
    setupState: d,
    ctx: m,
    inheritAttrs: g
  } = e, C = di(e);
  let h, k;
  try {
    if (n.shapeFlag & 4) {
      const _ = s || r, E = _;
      h = Pn(
        u.call(
          E,
          _,
          f,
          c,
          d,
          p,
          m
        )
      ), k = a;
    } else {
      const _ = t;
      h = Pn(
        _.length > 1 ? _(
          c,
          { attrs: a, slots: i, emit: l }
        ) : _(
          c,
          null
        )
      ), k = t.props ? a : vw(a);
    }
  } catch (_) {
    Wo.length = 0, Pi(_, e, 1), h = Ce(Rt);
  }
  let y = h;
  if (k && g !== !1) {
    const _ = Object.keys(k), { shapeFlag: E } = y;
    _.length && E & 7 && (o && _.some(Fu) && (k = bw(
      k,
      o
    )), y = Jn(y, k, !1, !0));
  }
  return n.dirs && (y = Jn(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && ns(y, n.transition), h = y, di(C), h;
}
const vw = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ai(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, bw = (e, t) => {
  const n = {};
  for (const r in e)
    (!Fu(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function _w(e, t, n) {
  const { props: r, children: s, component: o } = e, { props: i, children: a, patchFlag: l } = t, u = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? wd(r, i, u) : !!i;
    if (l & 8) {
      const f = t.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        const p = f[c];
        if (i[p] !== r[p] && !qi(u, p))
          return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? wd(r, i, u) : !0 : !!i;
  return !1;
}
function wd(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !qi(n, o))
      return !0;
  }
  return !1;
}
function yw({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const ug = (e) => e.__isSuspense;
function ww(e, t) {
  t && t.pendingBranch ? Le(e) ? t.effects.push(...e) : t.effects.push(e) : R4(e);
}
const et = Symbol.for("v-fgt"), So = Symbol.for("v-txt"), Rt = Symbol.for("v-cmt"), Js = Symbol.for("v-stc"), Wo = [];
let on = null;
function w(e = !1) {
  Wo.push(on = e ? null : []);
}
function kw() {
  Wo.pop(), on = Wo[Wo.length - 1] || null;
}
let rs = 1;
function kd(e, t = !1) {
  rs += e, e < 0 && on && t && (on.hasOnce = !0);
}
function fg(e) {
  return e.dynamicChildren = rs > 0 ? on || co : null, kw(), rs > 0 && on && on.push(e), e;
}
function A(e, t, n, r, s, o) {
  return fg(
    v(
      e,
      t,
      n,
      r,
      s,
      o,
      !0
    )
  );
}
function ue(e, t, n, r, s) {
  return fg(
    Ce(
      e,
      t,
      n,
      r,
      s,
      !0
    )
  );
}
function os(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function zr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const dg = ({ key: e }) => e ?? null, Qs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ke(e) || bt(e) || Ee(e) ? { i: Ct, r: e, k: t, f: !!n } : e : null);
function v(e, t = null, n = null, r = 0, s = null, o = e === et ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && dg(t),
    ref: t && Qs(t),
    scopeId: M1,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ct
  };
  return a ? (of(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ke(n) ? 8 : 16), rs > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  on && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && on.push(l), l;
}
const Ce = Cw;
function Cw(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === V1) && (e = Rt), os(e)) {
    const a = Jn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && of(a, n), rs > 0 && !o && on && (a.shapeFlag & 6 ? on[on.indexOf(e)] = a : on.push(a)), a.patchFlag = -2, a;
  }
  if (Iw(e) && (e = e.__vccOpts), t) {
    t = rf(t);
    let { class: a, style: l } = t;
    a && !Ke(a) && (t.class = Q(a)), Fe(l) && (Zu(l) && !Le(l) && (l = xt({}, l)), t.style = st(l));
  }
  const i = Ke(e) ? 1 : ug(e) ? 128 : I1(e) ? 64 : Fe(e) ? 4 : Ee(e) ? 2 : 0;
  return v(
    e,
    t,
    n,
    r,
    s,
    i,
    o,
    !0
  );
}
function rf(e) {
  return e ? Zu(e) || eg(e) ? xt({}, e) : e : null;
}
function Jn(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: a, transition: l } = e, u = t ? gt(s || {}, t) : s, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && dg(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? Le(o) ? o.concat(Qs(t)) : [o, Qs(t)] : Qs(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== et ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Jn(e.ssContent),
    ssFallback: e.ssFallback && Jn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && ns(
    f,
    l.clone(f)
  ), f;
}
function Zr(e = " ", t = 0) {
  return Ce(So, null, e, t);
}
function Ar(e, t) {
  const n = Ce(Js, null, e);
  return n.staticCount = t, n;
}
function _e(e = "", t = !1) {
  return t ? (w(), ue(Rt, null, e)) : Ce(Rt, null, e);
}
function Pn(e) {
  return e == null || typeof e == "boolean" ? Ce(Rt) : Le(e) ? Ce(
    et,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : os(e) ? br(e) : Ce(So, null, String(e));
}
function br(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Jn(e);
}
function of(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Le(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), of(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !eg(t) ? t._ctx = Ct : s === 3 && Ct && (Ct.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Ee(t) ? (t = { default: t, _ctx: Ct }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Zr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function gt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = Q([t.class, r.class]));
      else if (s === "style")
        t.style = st([t.style, r.style]);
      else if (Ai(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(Le(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function On(e, t, n, r = null) {
  xn(e, t, 7, [
    n,
    r
  ]);
}
const xw = Y1();
let Ew = 0;
function Sw(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || xw, o = {
    uid: Ew++,
    vnode: e,
    type: r,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new n4(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: ng(r, s),
    emitsOptions: cg(r, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: tt,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: tt,
    data: tt,
    props: tt,
    attrs: tt,
    slots: tt,
    refs: tt,
    setupState: tt,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = mw.bind(null, o), e.ce && e.ce(o), o;
}
let Tt = null;
const _t = () => Tt || Ct;
let mi, fu;
{
  const e = Ii(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (o) => {
      s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
    };
  };
  mi = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Tt = n
  ), fu = t(
    "__VUE_SSR_SETTERS__",
    (n) => ss = n
  );
}
const vs = (e) => {
  const t = Tt;
  return mi(e), e.scope.on(), () => {
    e.scope.off(), mi(t);
  };
}, Cd = () => {
  Tt && Tt.scope.off(), mi(null);
};
function pg(e) {
  return e.vnode.shapeFlag & 4;
}
let ss = !1;
function Aw(e, t = !1, n = !1) {
  t && fu(t);
  const { props: r, children: s } = e.vnode, o = pg(e);
  nw(e, r, o, t), iw(e, s, n);
  const i = o ? Tw(e, t) : void 0;
  return t && fu(!1), i;
}
function Tw(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, G4);
  const { setup: r } = n;
  if (r) {
    Er();
    const s = e.setupContext = r.length > 1 ? gg(e) : null, o = vs(e), i = ms(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), a = e1(i);
    if (Sr(), o(), (a || e.sp) && !ho(e) && F1(e), a) {
      if (i.then(Cd, Cd), t)
        return i.then((l) => {
          xd(e, l);
        }).catch((l) => {
          Pi(l, e, 0);
        });
      e.asyncDep = i;
    } else
      xd(e, i);
  } else
    hg(e);
}
function xd(e, t, n) {
  Ee(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Fe(t) && (e.setupState = C1(t)), hg(e);
}
function hg(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Dt);
  {
    const s = vs(e);
    Er();
    try {
      Z4(e);
    } finally {
      Sr(), s();
    }
  }
}
const Mw = {
  get(e, t) {
    return Lt(e, "get", ""), e[t];
  }
};
function gg(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Mw),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function zi(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(C1(C4(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Ko)
        return Ko[n](e);
    },
    has(t, n) {
      return n in t || n in Ko;
    }
  })) : e.proxy;
}
function $w(e, t = !0) {
  return Ee(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Iw(e) {
  return Ee(e) && "__vccOpts" in e;
}
const P = (e, t) => M4(e, t, ss);
function _n(e, t, n) {
  const r = arguments.length;
  return r === 2 ? Fe(t) && !Le(t) ? os(t) ? Ce(e, null, [t]) : Ce(e, t) : Ce(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && os(n) && (n = [n]), Ce(e, t, n));
}
const Lw = "3.5.13", Ow = Dt;
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let du;
const Ed = typeof window < "u" && window.trustedTypes;
if (Ed)
  try {
    du = /* @__PURE__ */ Ed.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const mg = du ? (e) => du.createHTML(e) : (e) => e, Rw = "http://www.w3.org/2000/svg", Pw = "http://www.w3.org/1998/Math/MathML", jn = typeof document < "u" ? document : null, Sd = jn && /* @__PURE__ */ jn.createElement("template"), Dw = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? jn.createElementNS(Rw, e) : t === "mathml" ? jn.createElementNS(Pw, e) : n ? jn.createElement(e, { is: n }) : jn.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => jn.createTextNode(e),
  createComment: (e) => jn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => jn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, s, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === o || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)); )
        ;
    else {
      Sd.innerHTML = mg(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Sd.content;
      if (r === "svg" || r === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, dr = "transition", Lo = "animation", is = Symbol("_vtc"), vg = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Nw = /* @__PURE__ */ xt(
  {},
  R1,
  vg
), Bw = (e) => (e.displayName = "Transition", e.props = Nw, e), Xr = /* @__PURE__ */ Bw(
  (e, { slots: t }) => _n(F4, Fw(e), t)
), Rr = (e, t = []) => {
  Le(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ad = (e) => e ? Le(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Fw(e) {
  const t = {};
  for (const N in e)
    N in vg || (t[N] = e[N]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: r,
    duration: s,
    enterFromClass: o = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: l = o,
    appearActiveClass: u = i,
    appearToClass: f = a,
    leaveFromClass: c = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: d = `${n}-leave-to`
  } = e, m = qw(s), g = m && m[0], C = m && m[1], {
    onBeforeEnter: h,
    onEnter: k,
    onEnterCancelled: y,
    onLeave: _,
    onLeaveCancelled: E,
    onBeforeAppear: x = h,
    onAppear: M = k,
    onAppearCancelled: $ = y
  } = t, O = (N, oe, q, ie) => {
    N._enterCancelled = ie, Pr(N, oe ? f : a), Pr(N, oe ? u : i), q && q();
  }, D = (N, oe) => {
    N._isLeaving = !1, Pr(N, c), Pr(N, d), Pr(N, p), oe && oe();
  }, B = (N) => (oe, q) => {
    const ie = N ? M : k, j = () => O(oe, N, q);
    Rr(ie, [oe, j]), Td(() => {
      Pr(oe, N ? l : o), zn(oe, N ? f : a), Ad(ie) || Md(oe, r, g, j);
    });
  };
  return xt(t, {
    onBeforeEnter(N) {
      Rr(h, [N]), zn(N, o), zn(N, i);
    },
    onBeforeAppear(N) {
      Rr(x, [N]), zn(N, l), zn(N, u);
    },
    onEnter: B(!1),
    onAppear: B(!0),
    onLeave(N, oe) {
      N._isLeaving = !0;
      const q = () => D(N, oe);
      zn(N, c), N._enterCancelled ? (zn(N, p), Ld()) : (Ld(), zn(N, p)), Td(() => {
        N._isLeaving && (Pr(N, c), zn(N, d), Ad(_) || Md(N, r, C, q));
      }), Rr(_, [N, q]);
    },
    onEnterCancelled(N) {
      O(N, !1, void 0, !0), Rr(y, [N]);
    },
    onAppearCancelled(N) {
      O(N, !0, void 0, !0), Rr($, [N]);
    },
    onLeaveCancelled(N) {
      D(N), Rr(E, [N]);
    }
  });
}
function qw(e) {
  if (e == null)
    return null;
  if (Fe(e))
    return [Ca(e.enter), Ca(e.leave)];
  {
    const t = Ca(e);
    return [t, t];
  }
}
function Ca(e) {
  return Zy(e);
}
function zn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[is] || (e[is] = /* @__PURE__ */ new Set())).add(t);
}
function Pr(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[is];
  n && (n.delete(t), n.size || (e[is] = void 0));
}
function Td(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let zw = 0;
function Md(e, t, n, r) {
  const s = e._endId = ++zw, o = () => {
    s === e._endId && r();
  };
  if (n != null)
    return setTimeout(o, n);
  const { type: i, timeout: a, propCount: l } = Hw(e, t);
  if (!i)
    return r();
  const u = i + "end";
  let f = 0;
  const c = () => {
    e.removeEventListener(u, p), o();
  }, p = (d) => {
    d.target === e && ++f >= l && c();
  };
  setTimeout(() => {
    f < l && c();
  }, a + 1), e.addEventListener(u, p);
}
function Hw(e, t) {
  const n = window.getComputedStyle(e), r = (m) => (n[m] || "").split(", "), s = r(`${dr}Delay`), o = r(`${dr}Duration`), i = $d(s, o), a = r(`${Lo}Delay`), l = r(`${Lo}Duration`), u = $d(a, l);
  let f = null, c = 0, p = 0;
  t === dr ? i > 0 && (f = dr, c = i, p = o.length) : t === Lo ? u > 0 && (f = Lo, c = u, p = l.length) : (c = Math.max(i, u), f = c > 0 ? i > u ? dr : Lo : null, p = f ? f === dr ? o.length : l.length : 0);
  const d = f === dr && /\b(transform|all)(,|$)/.test(
    r(`${dr}Property`).toString()
  );
  return {
    type: f,
    timeout: c,
    propCount: p,
    hasTransform: d
  };
}
function $d(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => Id(n) + Id(e[r])));
}
function Id(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ld() {
  return document.body.offsetHeight;
}
function jw(e, t, n) {
  const r = e[is];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const vi = Symbol("_vod"), bg = Symbol("_vsh"), Qn = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[vi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Oo(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Oo(e, !0), r.enter(e)) : r.leave(e, () => {
      Oo(e, !1);
    }) : Oo(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Oo(e, t);
  }
};
function Oo(e, t) {
  e.style.display = t ? e[vi] : "none", e[bg] = !t;
}
const Vw = Symbol(""), Uw = /(^|;)\s*display\s*:/;
function Kw(e, t, n) {
  const r = e.style, s = Ke(n);
  let o = !1;
  if (n && !s) {
    if (t)
      if (Ke(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && ei(r, a, "");
        }
      else
        for (const i in t)
          n[i] == null && ei(r, i, "");
    for (const i in n)
      i === "display" && (o = !0), ei(r, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = r[Vw];
      i && (n += ";" + i), r.cssText = n, o = Uw.test(n);
    }
  } else t && e.removeAttribute("style");
  vi in e && (e[vi] = o ? r.display : "", e[bg] && (r.display = "none"));
}
const Od = /\s*!important$/;
function ei(e, t, n) {
  if (Le(n))
    n.forEach((r) => ei(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Ww(e, t);
    Od.test(n) ? e.setProperty(
      xr(r),
      n.replace(Od, ""),
      "important"
    ) : e[r] = n;
  }
}
const Rd = ["Webkit", "Moz", "ms"], xa = {};
function Ww(e, t) {
  const n = xa[t];
  if (n)
    return n;
  let r = dn(t);
  if (r !== "filter" && r in e)
    return xa[t] = r;
  r = $i(r);
  for (let s = 0; s < Rd.length; s++) {
    const o = Rd[s] + r;
    if (o in e)
      return xa[t] = o;
  }
  return t;
}
const Pd = "http://www.w3.org/1999/xlink";
function Dd(e, t, n, r, s, o = t4(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Pd, t.slice(6, t.length)) : e.setAttributeNS(Pd, t, n) : n == null || o && !o1(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : or(n) ? String(n) : n
  );
}
function Nd(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? mg(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = o1(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(s || t);
}
function so(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Gw(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Bd = Symbol("_vei");
function Zw(e, t, n, r, s = null) {
  const o = e[Bd] || (e[Bd] = {}), i = o[t];
  if (r && i)
    i.value = r;
  else {
    const [a, l] = Xw(t);
    if (r) {
      const u = o[t] = Qw(
        r,
        s
      );
      so(e, a, u, l);
    } else i && (Gw(e, a, i, l), o[t] = void 0);
  }
}
const Fd = /(?:Once|Passive|Capture)$/;
function Xw(e) {
  let t;
  if (Fd.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Fd); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : xr(e.slice(2)), t];
}
let Ea = 0;
const Yw = /* @__PURE__ */ Promise.resolve(), Jw = () => Ea || (Yw.then(() => Ea = 0), Ea = Date.now());
function Qw(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    xn(
      e3(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Jw(), n;
}
function e3(e, t) {
  if (Le(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (s) => !s._stopped && r && r(s)
    );
  } else
    return t;
}
const qd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, t3 = (e, t, n, r, s, o) => {
  const i = s === "svg";
  t === "class" ? jw(e, r, i) : t === "style" ? Kw(e, n, r) : Ai(t) ? Fu(t) || Zw(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : n3(e, t, r, i)) ? (Nd(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Dd(e, t, r, i, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Ke(r)) ? Nd(e, dn(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Dd(e, t, r, i));
};
function n3(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && qd(t) && Ee(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return qd(t) && Ke(n) ? !1 : t in e;
}
function sf(e = "$style") {
  {
    const t = _t();
    if (!t)
      return tt;
    const n = t.type.__cssModules;
    if (!n)
      return tt;
    const r = n[e];
    return r || tt;
  }
}
const zd = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Le(t) ? (n) => Xs(t, n) : t;
};
function r3(e) {
  e.target.composing = !0;
}
function Hd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Sa = Symbol("_assign"), _g = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e[Sa] = zd(s);
    const o = r || s.props && s.props.type === "number";
    so(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let a = e.value;
      n && (a = a.trim()), o && (a = eu(a)), e[Sa](a);
    }), n && so(e, "change", () => {
      e.value = e.value.trim();
    }), t || (so(e, "compositionstart", r3), so(e, "compositionend", Hd), so(e, "change", Hd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: o } }, i) {
    if (e[Sa] = zd(i), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? eu(e.value) : e.value, l = t ?? "";
    a !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === l) || (e.value = l));
  }
}, o3 = ["ctrl", "shift", "alt", "meta"], s3 = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => o3.some((n) => e[`${n}Key`] && !t.includes(n))
}, nn = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (s, ...o) => {
    for (let i = 0; i < t.length; i++) {
      const a = s3[t[i]];
      if (a && a(s, t)) return;
    }
    return e(s, ...o);
  });
}, i3 = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, zt = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = (s) => {
    if (!("key" in s))
      return;
    const o = xr(s.key);
    if (t.some(
      (i) => i === o || i3[i] === o
    ))
      return e(s);
  });
}, a3 = /* @__PURE__ */ xt({ patchProp: t3 }, Dw);
let jd;
function l3() {
  return jd || (jd = lw(a3));
}
const c3 = (...e) => {
  const t = l3().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = f3(r);
    if (!s) return;
    const o = t._component;
    !Ee(o) && !o.render && !o.template && (o.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const i = n(s, !1, u3(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
};
function u3(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function f3(e) {
  return Ke(e) ? document.querySelector(e) : e;
}
const Ro = {
  webhookUrl: "http://localhost:5678",
  webhookConfig: {
    method: "POST",
    headers: {}
  },
  target: "#n8n-chat",
  mode: "window",
  loadPreviousSession: !0,
  chatInputKey: "chatInput",
  chatSessionKey: "sessionId",
  defaultLanguage: "en",
  showWelcomeScreen: !1,
  initialMessages: ["Hi there! 👋", "My name is Nathan. How can I assist you today?"],
  i18n: {
    en: {
      title: "Hi there! 👋",
      subtitle: "Start a chat. We're here to help you 24/7.",
      footer: "",
      getStarted: "New Conversation",
      inputPlaceholder: "Type your question..",
      closeButtonTooltip: "Close chat"
    }
  },
  theme: {},
  enableStreaming: !1
}, d3 = "#n8n-chat", p3 = "n8n-chat", Vd = `${p3}/sessionId`, yg = "Chat", wg = "ChatOptions";
var At = [];
for (var Aa = 0; Aa < 256; ++Aa)
  At.push((Aa + 256).toString(16).slice(1));
function h3(e, t = 0) {
  return (At[e[t + 0]] + At[e[t + 1]] + At[e[t + 2]] + At[e[t + 3]] + "-" + At[e[t + 4]] + At[e[t + 5]] + "-" + At[e[t + 6]] + At[e[t + 7]] + "-" + At[e[t + 8]] + At[e[t + 9]] + "-" + At[e[t + 10]] + At[e[t + 11]] + At[e[t + 12]] + At[e[t + 13]] + At[e[t + 14]] + At[e[t + 15]]).toLowerCase();
}
var Rs, g3 = new Uint8Array(16);
function m3() {
  if (!Rs && (Rs = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Rs))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Rs(g3);
}
var v3 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Ud = {
  randomUUID: v3
};
function Vr(e, t, n) {
  if (Ud.randomUUID && !e)
    return Ud.randomUUID();
  e = e || {};
  var r = e.random || (e.rng || m3)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, h3(r);
}
async function b3() {
  return "";
}
async function af(...e) {
  var i, a;
  const t = await b3(), n = (i = e[1]) == null ? void 0 : i.body, r = {
    ...t ? { authorization: `Bearer ${t}` } : {},
    ...(a = e[1]) == null ? void 0 : a.headers
  };
  n instanceof FormData ? delete r["Content-Type"] : r["Content-Type"] = "application/json";
  const s = await fetch(e[0], {
    ...e[1],
    mode: "cors",
    cache: "no-cache",
    headers: r
  });
  let o;
  try {
    o = await s.clone().json();
  } catch {
    o = await s.text();
  }
  return o;
}
async function kg(e, t = {}, n = {}) {
  let r = e;
  return Object.keys(t).length > 0 && (r = `${r}?${new URLSearchParams(
    t
  ).toString()}`), await af(r, { ...n, method: "GET" });
}
async function Cg(e, t = {}, n = {}) {
  return await af(e, {
    ...n,
    method: "POST",
    body: JSON.stringify(t)
  });
}
async function _3(e, t = {}, n = [], r = {}) {
  const s = new FormData();
  for (const o in t)
    s.append(o, t[o]);
  for (const o of n)
    s.append("files", o);
  return await af(e, {
    ...r,
    method: "POST",
    body: s
  });
}
async function y3(e, t) {
  var r, s;
  return await (((r = t.webhookConfig) == null ? void 0 : r.method) === "POST" ? Cg : kg)(
    `${t.webhookUrl}`,
    {
      action: "loadPreviousSession",
      [t.chatSessionKey]: e,
      ...t.metadata ? { metadata: t.metadata } : {}
    },
    {
      headers: (s = t.webhookConfig) == null ? void 0 : s.headers
    }
  );
}
async function w3(e, t, n, r) {
  var o, i, a;
  return t.length > 0 ? await _3(
    `${r.webhookUrl}`,
    {
      action: "sendMessage",
      [r.chatSessionKey]: n,
      [r.chatInputKey]: e,
      ...r.metadata ? { metadata: r.metadata } : {}
    },
    t,
    {
      headers: (o = r.webhookConfig) == null ? void 0 : o.headers
    }
  ) : await (((i = r.webhookConfig) == null ? void 0 : i.method) === "POST" ? Cg : kg)(
    `${r.webhookUrl}`,
    {
      action: "sendMessage",
      [r.chatSessionKey]: n,
      [r.chatInputKey]: e,
      ...r.metadata ? { metadata: r.metadata } : {}
    },
    {
      headers: (a = r.webhookConfig) == null ? void 0 : a.headers
    }
  );
}
function k3() {
  let e = "";
  const t = new TextDecoder();
  return new TransformStream({
    transform(n, r) {
      e += t.decode(n, { stream: !0 });
      const s = e.split(`
`);
      e = s.pop() ?? "";
      for (const o of s)
        if (o.trim())
          try {
            const i = JSON.parse(o);
            r.enqueue(i);
          } catch {
            r.enqueue({
              type: "item",
              content: o
            });
          }
    },
    flush(n) {
      if (e.trim())
        try {
          const r = JSON.parse(e);
          n.enqueue(r);
        } catch {
          n.enqueue({
            type: "item",
            content: e
          });
        }
    }
  });
}
async function C3(e, t, n, r, s) {
  var l, u;
  const o = await (t.length > 0 ? x3(e, t, n, r) : E3(e, n, r));
  if (!o.ok) {
    const f = await o.text();
    throw console.error("HTTP error response:", o.status, f), new Error(`Error while sending message. Error: ${f}`);
  }
  if (!o.body)
    throw new Error("Response body is not readable");
  const i = o.body.pipeThrough(k3()).getReader();
  let a = !1;
  try {
    for (; ; ) {
      const { done: f, value: c } = await i.read();
      if (f) break;
      const p = ((l = c.metadata) == null ? void 0 : l.nodeId) || "unknown", d = (u = c.metadata) == null ? void 0 : u.runIndex;
      switch (c.type) {
        case "begin":
          s.onBeginMessage(p, d);
          break;
        case "item":
          a = !0, s.onChunk(c.content ?? "", p, d);
          break;
        case "end":
          s.onEndMessage(p, d);
          break;
        case "error":
          a = !0, s.onChunk(`Error: ${c.content ?? "Unknown error"}`, p, d), s.onEndMessage(p, d);
          break;
      }
    }
  } finally {
    i.releaseLock();
  }
  return { hasReceivedChunks: a };
}
async function x3(e, t, n, r) {
  var o;
  const s = new FormData();
  s.append("action", "sendMessage"), s.append(r.chatSessionKey, n), s.append(r.chatInputKey, e), r.metadata && s.append("metadata", JSON.stringify(r.metadata));
  for (const i of t)
    s.append("files", i);
  return await fetch(r.webhookUrl, {
    method: "POST",
    headers: {
      Accept: "text/plain",
      ...(o = r.webhookConfig) == null ? void 0 : o.headers
    },
    body: s
  });
}
async function E3(e, t, n) {
  var s;
  const r = {
    action: "sendMessage",
    [n.chatSessionKey]: t,
    [n.chatInputKey]: e,
    ...n.metadata ? { metadata: n.metadata } : {}
  };
  return await fetch(n.webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/plain",
      ...(s = n.webhookConfig) == null ? void 0 : s.headers
    },
    body: JSON.stringify(r)
  });
}
function S3() {
  const e = /* @__PURE__ */ new Map();
  function t(s, o) {
    const i = e.get(s);
    i && i.splice(i.indexOf(o) >>> 0, 1);
  }
  function n(s, o) {
    let i = e.get(s);
    return i ? i.push(o) : i = [o], e.set(s, i), () => t(s, o);
  }
  function r(s, o) {
    const i = e.get(s);
    i && i.slice().forEach(async (a) => {
      await a(o);
    });
  }
  return {
    on: n,
    off: t,
    emit: r
  };
}
function A3(e) {
  if (!document.querySelector(e)) {
    const n = document.createElement("div");
    e.startsWith("#") && (n.id = e.replace("#", "")), e.startsWith(".") && n.classList.add(e.replace(".", "")), document.body.appendChild(n);
  }
}
function T3(e, t, n, r) {
  const s = new URL(e).origin, o = s.startsWith("https") ? "wss" : "ws";
  return `${s.replace(/^https?/, o)}/chat?sessionId=${n}&executionId=${t}&isPublic=true`;
}
const Vt = S3();
class M3 {
  constructor() {
    Ts(this, "nodeRuns", /* @__PURE__ */ new Map());
    Ts(this, "runOrder", []);
    Ts(this, "activeRuns", /* @__PURE__ */ new Set());
  }
  getRunKey(t, n) {
    return n !== void 0 ? `${t}-${n}` : t;
  }
  initializeRun(t, n) {
    const r = this.getRunKey(t, n);
    if (!this.nodeRuns.has(r)) {
      const s = vo();
      return this.nodeRuns.set(r, {
        content: "",
        isComplete: !1,
        message: s
      }), this.runOrder.push(r), s;
    }
    return this.nodeRuns.get(r).message;
  }
  registerRunStart(t, n) {
    const r = this.getRunKey(t, n);
    this.activeRuns.add(r);
  }
  addRunToActive(t, n) {
    const r = this.getRunKey(t, n);
    return this.activeRuns.add(r), this.initializeRun(t, n);
  }
  removeRunFromActive(t, n) {
    const r = this.getRunKey(t, n);
    this.activeRuns.delete(r);
    const s = this.nodeRuns.get(r);
    s && (s.isComplete = !0);
  }
  addChunkToRun(t, n, r) {
    const s = this.getRunKey(t, r), o = this.nodeRuns.get(s);
    if (o) {
      o.content += n;
      const i = {
        ...o.message,
        text: o.content
      };
      return o.message = i, i;
    }
    return null;
  }
  getRunMessage(t, n) {
    const r = this.getRunKey(t, n), s = this.nodeRuns.get(r);
    return (s == null ? void 0 : s.message) ?? null;
  }
  areAllRunsComplete() {
    return Array.from(this.nodeRuns.values()).every((t) => t.isComplete);
  }
  getRunCount() {
    return this.runOrder.length;
  }
  getActiveRunCount() {
    return this.activeRuns.size;
  }
  getAllMessages() {
    return this.runOrder.map((t) => {
      var n;
      return (n = this.nodeRuns.get(t)) == null ? void 0 : n.message;
    }).filter((t) => t !== void 0);
  }
  reset() {
    this.nodeRuns.clear(), this.runOrder = [], this.activeRuns.clear();
  }
}
function vo(e) {
  return {
    id: e ?? Vr(),
    type: "text",
    text: "",
    sender: "bot"
  };
}
function Kd(e, t, n) {
  const r = e.findIndex((s) => s.id === t);
  if (r === -1)
    throw new Error(`Can't update message. No message with id ${t} found`);
  e[r] = n;
}
function $3(e, t, n, r, s, o) {
  try {
    if (e === "")
      return;
    if (t) {
      let i = n.getRunMessage(t, o);
      i || (i = n.addRunToActive(t, o), s.value.push(i));
      const a = n.addChunkToRun(t, e, o);
      a && Kd(s.value, a.id, a);
    } else {
      r.value || (r.value = vo(), s.value.push(r.value));
      const i = {
        ...r.value,
        text: r.value.text + e
      };
      Kd(s.value, r.value.id, i), r.value = i;
    }
    Ue(() => {
      Vt.emit("scrollToBottom");
    });
  } catch (i) {
    console.error("Error handling stream chunk:", i);
  }
}
function I3(e, t, n) {
  try {
    t.registerRunStart(e, n);
  } catch (r) {
    console.error("Error handling node start:", r);
  }
}
function L3(e, t, n) {
  try {
    t.removeRunFromActive(e, n);
  } catch (r) {
    console.error("Error handling node complete:", r);
  }
}
function O3(e, t = []) {
  return {
    id: Vr(),
    text: e,
    sender: "user",
    files: t
  };
}
function R3(e) {
  let t = e.output ?? e.text ?? e.message ?? "";
  if (t === "" && Object.keys(e).length > 0)
    try {
      t = JSON.stringify(e, null, 2);
    } catch {
    }
  return t;
}
function P3(e) {
  const { receivedMessage: t, messages: n } = e;
  t.value && n.value.some(
    (s) => s.sender === "bot" && "text" in s && s.text.trim().length > 0
  ) || (t.value = vo(), n.value.push(t.value)), t.value.text = "[No response received. This could happen if streaming is enabled in the trigger but disabled in agent node(s)]";
}
function D3(e) {
  const { error: t, receivedMessage: n, messages: r } = e;
  n.value ?? (n.value = vo()), n.value.text = "Error: Failed to receive response", r.value.includes(n.value) || r.value.push(n.value), console.error("Chat API error:", t);
}
async function N3(e) {
  const { text: t, files: n, sessionId: r, options: s, messages: o, receivedMessage: i, streamingManager: a } = e, l = {
    onChunk: (f, c, p) => {
      $3(f, c, a, i, o, p);
    },
    onBeginMessage: (f, c) => {
      I3(f, a, c);
    },
    onEndMessage: (f, c) => {
      L3(f, a, c);
    }
  }, { hasReceivedChunks: u } = await C3(
    t,
    n,
    r,
    s,
    l
  );
  u || P3({ receivedMessage: i, messages: o });
}
async function B3(e) {
  const { text: t, files: n, sessionId: r, options: s } = e, o = await w3(t, n, r, s);
  if (o != null && o.executionStarted)
    return { response: o };
  const i = vo();
  return i.text = R3(o), { botMessage: i };
}
const F3 = {
  install(e, t) {
    e.provide(wg, t);
    const n = W([]), r = W(null), s = W(!1), o = P(
      () => (t.initialMessages ?? []).map((f) => ({
        id: Vr(),
        text: f,
        sender: "bot"
      }))
    );
    async function i(f, c = []) {
      var g;
      const p = O3(f, c);
      n.value.push(p), s.value = !0, Ue(() => {
        Vt.emit("scrollToBottom");
      });
      const d = W(null), m = new M3();
      try {
        if (t != null && t.enableStreaming)
          await N3({
            text: f,
            files: c,
            sessionId: r.value,
            options: t,
            messages: n,
            receivedMessage: d,
            streamingManager: m
          });
        else {
          const C = await B3({
            text: f,
            files: c,
            sessionId: r.value,
            options: t
          });
          if ((g = C.response) != null && g.executionStarted)
            return s.value = !1, C.response;
          C.botMessage && (d.value = C.botMessage, n.value.push(C.botMessage));
        }
      } catch (C) {
        D3({ error: C, receivedMessage: d, messages: n });
      } finally {
        s.value = !1;
      }
      return Ue(() => {
        Vt.emit("scrollToBottom");
      }), null;
    }
    async function a() {
      if (!t.loadPreviousSession)
        return;
      const f = localStorage.getItem(Vd) ?? Vr(), c = await y3(f, t);
      return n.value = ((c == null ? void 0 : c.data) || []).map((p, d) => ({
        id: `${d}`,
        text: p.kwargs.content,
        sender: p.id.includes("HumanMessage") ? "user" : "bot"
      })), n.value.length && (r.value = f), f;
    }
    async function l() {
      r.value = Vr(), localStorage.setItem(Vd, r.value);
    }
    const u = {
      initialMessages: o,
      messages: n,
      currentSessionId: r,
      waitingForResponse: s,
      loadPreviousSession: a,
      startNewSession: l,
      sendMessage: i
    };
    e.provide(yg, u), e.config.globalProperties.$chat = u;
  }
};
var ao = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function lf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ta, Wd;
function q3() {
  if (Wd) return Ta;
  Wd = 1;
  function e(S) {
    return S instanceof Map ? S.clear = S.delete = S.set = function() {
      throw new Error("map is read-only");
    } : S instanceof Set && (S.add = S.clear = S.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(S), Object.getOwnPropertyNames(S).forEach((R) => {
      const G = S[R], ke = typeof G;
      (ke === "object" || ke === "function") && !Object.isFrozen(G) && e(G);
    }), S;
  }
  class t {
    /**
     * @param {CompiledMode} mode
     */
    constructor(R) {
      R.data === void 0 && (R.data = {}), this.data = R.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function n(S) {
    return S.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function r(S, ...R) {
    const G = /* @__PURE__ */ Object.create(null);
    for (const ke in S)
      G[ke] = S[ke];
    return R.forEach(function(ke) {
      for (const He in ke)
        G[He] = ke[He];
    }), /** @type {T} */
    G;
  }
  const s = "</span>", o = (S) => !!S.scope, i = (S, { prefix: R }) => {
    if (S.startsWith("language:"))
      return S.replace("language:", "language-");
    if (S.includes(".")) {
      const G = S.split(".");
      return [
        `${R}${G.shift()}`,
        ...G.map((ke, He) => `${ke}${"_".repeat(He + 1)}`)
      ].join(" ");
    }
    return `${R}${S}`;
  };
  class a {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(R, G) {
      this.buffer = "", this.classPrefix = G.classPrefix, R.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(R) {
      this.buffer += n(R);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(R) {
      if (!o(R)) return;
      const G = i(
        R.scope,
        { prefix: this.classPrefix }
      );
      this.span(G);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(R) {
      o(R) && (this.buffer += s);
    }
    /**
     * returns the accumulated buffer
    */
    value() {
      return this.buffer;
    }
    // helpers
    /**
     * Builds a span element
     *
     * @param {string} className */
    span(R) {
      this.buffer += `<span class="${R}">`;
    }
  }
  const l = (S = {}) => {
    const R = { children: [] };
    return Object.assign(R, S), R;
  };
  class u {
    constructor() {
      this.rootNode = l(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(R) {
      this.top.children.push(R);
    }
    /** @param {string} scope */
    openNode(R) {
      const G = l({ scope: R });
      this.add(G), this.stack.push(G);
    }
    closeNode() {
      if (this.stack.length > 1)
        return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); ) ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    /**
     * @typedef { import("./html_renderer").Renderer } Renderer
     * @param {Renderer} builder
     */
    walk(R) {
      return this.constructor._walk(R, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(R, G) {
      return typeof G == "string" ? R.addText(G) : G.children && (R.openNode(G), G.children.forEach((ke) => this._walk(R, ke)), R.closeNode(G)), R;
    }
    /**
     * @param {Node} node
     */
    static _collapse(R) {
      typeof R != "string" && R.children && (R.children.every((G) => typeof G == "string") ? R.children = [R.children.join("")] : R.children.forEach((G) => {
        u._collapse(G);
      }));
    }
  }
  class f extends u {
    /**
     * @param {*} options
     */
    constructor(R) {
      super(), this.options = R;
    }
    /**
     * @param {string} text
     */
    addText(R) {
      R !== "" && this.add(R);
    }
    /** @param {string} scope */
    startScope(R) {
      this.openNode(R);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(R, G) {
      const ke = R.root;
      G && (ke.scope = `language:${G}`), this.add(ke);
    }
    toHTML() {
      return new a(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function c(S) {
    return S ? typeof S == "string" ? S : S.source : null;
  }
  function p(S) {
    return g("(?=", S, ")");
  }
  function d(S) {
    return g("(?:", S, ")*");
  }
  function m(S) {
    return g("(?:", S, ")?");
  }
  function g(...S) {
    return S.map((G) => c(G)).join("");
  }
  function C(S) {
    const R = S[S.length - 1];
    return typeof R == "object" && R.constructor === Object ? (S.splice(S.length - 1, 1), R) : {};
  }
  function h(...S) {
    return "(" + (C(S).capture ? "" : "?:") + S.map((ke) => c(ke)).join("|") + ")";
  }
  function k(S) {
    return new RegExp(S.toString() + "|").exec("").length - 1;
  }
  function y(S, R) {
    const G = S && S.exec(R);
    return G && G.index === 0;
  }
  const _ = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function E(S, { joinWith: R }) {
    let G = 0;
    return S.map((ke) => {
      G += 1;
      const He = G;
      let Ge = c(ke), be = "";
      for (; Ge.length > 0; ) {
        const de = _.exec(Ge);
        if (!de) {
          be += Ge;
          break;
        }
        be += Ge.substring(0, de.index), Ge = Ge.substring(de.index + de[0].length), de[0][0] === "\\" && de[1] ? be += "\\" + String(Number(de[1]) + He) : (be += de[0], de[0] === "(" && G++);
      }
      return be;
    }).map((ke) => `(${ke})`).join(R);
  }
  const x = /\b\B/, M = "[a-zA-Z]\\w*", $ = "[a-zA-Z_]\\w*", O = "\\b\\d+(\\.\\d+)?", D = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", B = "\\b(0b[01]+)", N = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", oe = (S = {}) => {
    const R = /^#![ ]*\//;
    return S.binary && (S.begin = g(
      R,
      /.*\b/,
      S.binary,
      /\b.*/
    )), r({
      scope: "meta",
      begin: R,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (G, ke) => {
        G.index !== 0 && ke.ignoreMatch();
      }
    }, S);
  }, q = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, ie = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [q]
  }, j = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [q]
  }, V = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, H = function(S, R, G = {}) {
    const ke = r(
      {
        scope: "comment",
        begin: S,
        end: R,
        contains: []
      },
      G
    );
    ke.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const He = h(
      // list of common 1 and 2 letter words in English
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      // note: this is not an exhaustive list of contractions, just popular ones
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      // contractions - can't we'd they're let's, etc
      /[A-Za-z]+[-][a-z]+/,
      // `no-way`, etc.
      /[A-Za-z][a-z]{2,}/
      // allow capitalized words at beginning of sentences
    );
    return ke.contains.push(
      {
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: g(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          He,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), ke;
  }, J = H("//", "$"), L = H("/\\*", "\\*/"), Z = H("#", "$"), K = {
    scope: "number",
    begin: O,
    relevance: 0
  }, me = {
    scope: "number",
    begin: D,
    relevance: 0
  }, Se = {
    scope: "number",
    begin: B,
    relevance: 0
  }, Re = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      q,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [q]
      }
    ]
  }, Pe = {
    scope: "title",
    begin: M,
    relevance: 0
  }, We = {
    scope: "title",
    begin: $,
    relevance: 0
  }, ze = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + $,
    relevance: 0
  };
  var pe = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: ie,
    BACKSLASH_ESCAPE: q,
    BINARY_NUMBER_MODE: Se,
    BINARY_NUMBER_RE: B,
    COMMENT: H,
    C_BLOCK_COMMENT_MODE: L,
    C_LINE_COMMENT_MODE: J,
    C_NUMBER_MODE: me,
    C_NUMBER_RE: D,
    END_SAME_AS_BEGIN: function(S) {
      return Object.assign(
        S,
        {
          /** @type {ModeCallback} */
          "on:begin": (R, G) => {
            G.data._beginMatch = R[1];
          },
          /** @type {ModeCallback} */
          "on:end": (R, G) => {
            G.data._beginMatch !== R[1] && G.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: Z,
    IDENT_RE: M,
    MATCH_NOTHING_RE: x,
    METHOD_GUARD: ze,
    NUMBER_MODE: K,
    NUMBER_RE: O,
    PHRASAL_WORDS_MODE: V,
    QUOTE_STRING_MODE: j,
    REGEXP_MODE: Re,
    RE_STARTERS_RE: N,
    SHEBANG: oe,
    TITLE_MODE: Pe,
    UNDERSCORE_IDENT_RE: $,
    UNDERSCORE_TITLE_MODE: We
  });
  function Me(S, R) {
    S.input[S.index - 1] === "." && R.ignoreMatch();
  }
  function T(S, R) {
    S.className !== void 0 && (S.scope = S.className, delete S.className);
  }
  function I(S, R) {
    R && S.beginKeywords && (S.begin = "\\b(" + S.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", S.__beforeBegin = Me, S.keywords = S.keywords || S.beginKeywords, delete S.beginKeywords, S.relevance === void 0 && (S.relevance = 0));
  }
  function z(S, R) {
    Array.isArray(S.illegal) && (S.illegal = h(...S.illegal));
  }
  function Y(S, R) {
    if (S.match) {
      if (S.begin || S.end) throw new Error("begin & end are not supported with match");
      S.begin = S.match, delete S.match;
    }
  }
  function X(S, R) {
    S.relevance === void 0 && (S.relevance = 1);
  }
  const ee = (S, R) => {
    if (!S.beforeMatch) return;
    if (S.starts) throw new Error("beforeMatch cannot be used with starts");
    const G = Object.assign({}, S);
    Object.keys(S).forEach((ke) => {
      delete S[ke];
    }), S.keywords = G.keywords, S.begin = g(G.beforeMatch, p(G.begin)), S.starts = {
      relevance: 0,
      contains: [
        Object.assign(G, { endsParent: !0 })
      ]
    }, S.relevance = 0, delete G.beforeMatch;
  }, ae = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    // common variable name
    "list",
    // common variable name
    "value"
    // common variable name
  ], se = "keyword";
  function ne(S, R, G = se) {
    const ke = /* @__PURE__ */ Object.create(null);
    return typeof S == "string" ? He(G, S.split(" ")) : Array.isArray(S) ? He(G, S) : Object.keys(S).forEach(function(Ge) {
      Object.assign(
        ke,
        ne(S[Ge], R, Ge)
      );
    }), ke;
    function He(Ge, be) {
      R && (be = be.map((de) => de.toLowerCase())), be.forEach(function(de) {
        const Ie = de.split("|");
        ke[Ie[0]] = [Ge, te(Ie[0], Ie[1])];
      });
    }
  }
  function te(S, R) {
    return R ? Number(R) : ye(S) ? 0 : 1;
  }
  function ye(S) {
    return ae.includes(S.toLowerCase());
  }
  const fe = {}, ve = (S) => {
    console.error(S);
  }, U = (S, ...R) => {
    console.log(`WARN: ${S}`, ...R);
  }, le = (S, R) => {
    fe[`${S}/${R}`] || (console.log(`Deprecated as of ${S}. ${R}`), fe[`${S}/${R}`] = !0);
  }, Ae = new Error();
  function Oe(S, R, { key: G }) {
    let ke = 0;
    const He = S[G], Ge = {}, be = {};
    for (let de = 1; de <= R.length; de++)
      be[de + ke] = He[de], Ge[de + ke] = !0, ke += k(R[de - 1]);
    S[G] = be, S[G]._emit = Ge, S[G]._multi = !0;
  }
  function ct(S) {
    if (Array.isArray(S.begin)) {
      if (S.skip || S.excludeBegin || S.returnBegin)
        throw ve("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Ae;
      if (typeof S.beginScope != "object" || S.beginScope === null)
        throw ve("beginScope must be object"), Ae;
      Oe(S, S.begin, { key: "beginScope" }), S.begin = E(S.begin, { joinWith: "" });
    }
  }
  function ht(S) {
    if (Array.isArray(S.end)) {
      if (S.skip || S.excludeEnd || S.returnEnd)
        throw ve("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Ae;
      if (typeof S.endScope != "object" || S.endScope === null)
        throw ve("endScope must be object"), Ae;
      Oe(S, S.end, { key: "endScope" }), S.end = E(S.end, { joinWith: "" });
    }
  }
  function kt(S) {
    S.scope && typeof S.scope == "object" && S.scope !== null && (S.beginScope = S.scope, delete S.scope);
  }
  function Et(S) {
    kt(S), typeof S.beginScope == "string" && (S.beginScope = { _wrap: S.beginScope }), typeof S.endScope == "string" && (S.endScope = { _wrap: S.endScope }), ct(S), ht(S);
  }
  function gn(S) {
    function R(be, de) {
      return new RegExp(
        c(be),
        "m" + (S.case_insensitive ? "i" : "") + (S.unicodeRegex ? "u" : "") + (de ? "g" : "")
      );
    }
    class G {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(de, Ie) {
        Ie.position = this.position++, this.matchIndexes[this.matchAt] = Ie, this.regexes.push([Ie, de]), this.matchAt += k(de) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const de = this.regexes.map((Ie) => Ie[1]);
        this.matcherRe = R(E(de, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(de) {
        this.matcherRe.lastIndex = this.lastIndex;
        const Ie = this.matcherRe.exec(de);
        if (!Ie)
          return null;
        const yt = Ie.findIndex((Jt, ca) => ca > 0 && Jt !== void 0), Ze = this.matchIndexes[yt];
        return Ie.splice(0, yt), Object.assign(Ie, Ze);
      }
    }
    class ke {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(de) {
        if (this.multiRegexes[de]) return this.multiRegexes[de];
        const Ie = new G();
        return this.rules.slice(de).forEach(([yt, Ze]) => Ie.addRule(yt, Ze)), Ie.compile(), this.multiRegexes[de] = Ie, Ie;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(de, Ie) {
        this.rules.push([de, Ie]), Ie.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(de) {
        const Ie = this.getMatcher(this.regexIndex);
        Ie.lastIndex = this.lastIndex;
        let yt = Ie.exec(de);
        if (this.resumingScanAtSamePosition() && !(yt && yt.index === this.lastIndex)) {
          const Ze = this.getMatcher(0);
          Ze.lastIndex = this.lastIndex + 1, yt = Ze.exec(de);
        }
        return yt && (this.regexIndex += yt.position + 1, this.regexIndex === this.count && this.considerAll()), yt;
      }
    }
    function He(be) {
      const de = new ke();
      return be.contains.forEach((Ie) => de.addRule(Ie.begin, { rule: Ie, type: "begin" })), be.terminatorEnd && de.addRule(be.terminatorEnd, { type: "end" }), be.illegal && de.addRule(be.illegal, { type: "illegal" }), de;
    }
    function Ge(be, de) {
      const Ie = (
        /** @type CompiledMode */
        be
      );
      if (be.isCompiled) return Ie;
      [
        T,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        Y,
        Et,
        ee
      ].forEach((Ze) => Ze(be, de)), S.compilerExtensions.forEach((Ze) => Ze(be, de)), be.__beforeBegin = null, [
        I,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        z,
        // default to 1 relevance if not specified
        X
      ].forEach((Ze) => Ze(be, de)), be.isCompiled = !0;
      let yt = null;
      return typeof be.keywords == "object" && be.keywords.$pattern && (be.keywords = Object.assign({}, be.keywords), yt = be.keywords.$pattern, delete be.keywords.$pattern), yt = yt || /\w+/, be.keywords && (be.keywords = ne(be.keywords, S.case_insensitive)), Ie.keywordPatternRe = R(yt, !0), de && (be.begin || (be.begin = /\B|\b/), Ie.beginRe = R(Ie.begin), !be.end && !be.endsWithParent && (be.end = /\B|\b/), be.end && (Ie.endRe = R(Ie.end)), Ie.terminatorEnd = c(Ie.end) || "", be.endsWithParent && de.terminatorEnd && (Ie.terminatorEnd += (be.end ? "|" : "") + de.terminatorEnd)), be.illegal && (Ie.illegalRe = R(
        /** @type {RegExp | string} */
        be.illegal
      )), be.contains || (be.contains = []), be.contains = [].concat(...be.contains.map(function(Ze) {
        return mt(Ze === "self" ? be : Ze);
      })), be.contains.forEach(function(Ze) {
        Ge(
          /** @type Mode */
          Ze,
          Ie
        );
      }), be.starts && Ge(be.starts, de), Ie.matcher = He(Ie), Ie;
    }
    if (S.compilerExtensions || (S.compilerExtensions = []), S.contains && S.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return S.classNameAliases = r(S.classNameAliases || {}), Ge(
      /** @type Mode */
      S
    );
  }
  function an(S) {
    return S ? S.endsWithParent || an(S.starts) : !1;
  }
  function mt(S) {
    return S.variants && !S.cachedVariants && (S.cachedVariants = S.variants.map(function(R) {
      return r(S, { variants: null }, R);
    })), S.cachedVariants ? S.cachedVariants : an(S) ? r(S, { starts: S.starts ? r(S.starts) : null }) : Object.isFrozen(S) ? r(S) : S;
  }
  var $t = "11.9.0";
  class $n extends Error {
    constructor(R, G) {
      super(R), this.name = "HTMLInjectionError", this.html = G;
    }
  }
  const lr = n, Qr = r, $r = Symbol("nomatch"), Mo = 7, eo = function(S) {
    const R = /* @__PURE__ */ Object.create(null), G = /* @__PURE__ */ Object.create(null), ke = [];
    let He = !0;
    const Ge = "Could not find the language '{}', did you forget to load/include a language module?", be = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let de = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: f
    };
    function Ie(ce) {
      return de.noHighlightRe.test(ce);
    }
    function yt(ce) {
      let $e = ce.className + " ";
      $e += ce.parentNode ? ce.parentNode.className : "";
      const Ve = de.languageDetectRe.exec($e);
      if (Ve) {
        const at = cr(Ve[1]);
        return at || (U(Ge.replace("{}", Ve[1])), U("Falling back to no-highlight mode for this block.", ce)), at ? Ve[1] : "no-highlight";
      }
      return $e.split(/\s+/).find((at) => Ie(at) || cr(at));
    }
    function Ze(ce, $e, Ve) {
      let at = "", wt = "";
      typeof $e == "object" ? (at = ce, Ve = $e.ignoreIllegals, wt = $e.language) : (le("10.7.0", "highlight(lang, code, ...args) has been deprecated."), le("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), wt = ce, at = $e), Ve === void 0 && (Ve = !0);
      const mn = {
        code: at,
        language: wt
      };
      xs("before:highlight", mn);
      const ur = mn.result ? mn.result : Jt(mn.language, mn.code, Ve);
      return ur.code = mn.code, xs("after:highlight", ur), ur;
    }
    function Jt(ce, $e, Ve, at) {
      const wt = /* @__PURE__ */ Object.create(null);
      function mn(ge, xe) {
        return ge.keywords[xe];
      }
      function ur() {
        if (!De.keywords) {
          St.addText(ut);
          return;
        }
        let ge = 0;
        De.keywordPatternRe.lastIndex = 0;
        let xe = De.keywordPatternRe.exec(ut), Be = "";
        for (; xe; ) {
          Be += ut.substring(ge, xe.index);
          const rt = Ln.case_insensitive ? xe[0].toLowerCase() : xe[0], It = mn(De, rt);
          if (It) {
            const [Fn, zy] = It;
            if (St.addText(Be), Be = "", wt[rt] = (wt[rt] || 0) + 1, wt[rt] <= Mo && (As += zy), Fn.startsWith("_"))
              Be += xe[0];
            else {
              const Hy = Ln.classNameAliases[Fn] || Fn;
              In(xe[0], Hy);
            }
          } else
            Be += xe[0];
          ge = De.keywordPatternRe.lastIndex, xe = De.keywordPatternRe.exec(ut);
        }
        Be += ut.substring(ge), St.addText(Be);
      }
      function Es() {
        if (ut === "") return;
        let ge = null;
        if (typeof De.subLanguage == "string") {
          if (!R[De.subLanguage]) {
            St.addText(ut);
            return;
          }
          ge = Jt(De.subLanguage, ut, !0, od[De.subLanguage]), od[De.subLanguage] = /** @type {CompiledMode} */
          ge._top;
        } else
          ge = ua(ut, De.subLanguage.length ? De.subLanguage : null);
        De.relevance > 0 && (As += ge.relevance), St.__addSublanguage(ge._emitter, ge.language);
      }
      function Qt() {
        De.subLanguage != null ? Es() : ur(), ut = "";
      }
      function In(ge, xe) {
        ge !== "" && (St.startScope(xe), St.addText(ge), St.endScope());
      }
      function ed(ge, xe) {
        let Be = 1;
        const rt = xe.length - 1;
        for (; Be <= rt; ) {
          if (!ge._emit[Be]) {
            Be++;
            continue;
          }
          const It = Ln.classNameAliases[ge[Be]] || ge[Be], Fn = xe[Be];
          It ? In(Fn, It) : (ut = Fn, ur(), ut = ""), Be++;
        }
      }
      function td(ge, xe) {
        return ge.scope && typeof ge.scope == "string" && St.openNode(Ln.classNameAliases[ge.scope] || ge.scope), ge.beginScope && (ge.beginScope._wrap ? (In(ut, Ln.classNameAliases[ge.beginScope._wrap] || ge.beginScope._wrap), ut = "") : ge.beginScope._multi && (ed(ge.beginScope, xe), ut = "")), De = Object.create(ge, { parent: { value: De } }), De;
      }
      function nd(ge, xe, Be) {
        let rt = y(ge.endRe, Be);
        if (rt) {
          if (ge["on:end"]) {
            const It = new t(ge);
            ge["on:end"](xe, It), It.isMatchIgnored && (rt = !1);
          }
          if (rt) {
            for (; ge.endsParent && ge.parent; )
              ge = ge.parent;
            return ge;
          }
        }
        if (ge.endsWithParent)
          return nd(ge.parent, xe, Be);
      }
      function Dy(ge) {
        return De.matcher.regexIndex === 0 ? (ut += ge[0], 1) : (ha = !0, 0);
      }
      function Ny(ge) {
        const xe = ge[0], Be = ge.rule, rt = new t(Be), It = [Be.__beforeBegin, Be["on:begin"]];
        for (const Fn of It)
          if (Fn && (Fn(ge, rt), rt.isMatchIgnored))
            return Dy(xe);
        return Be.skip ? ut += xe : (Be.excludeBegin && (ut += xe), Qt(), !Be.returnBegin && !Be.excludeBegin && (ut = xe)), td(Be, ge), Be.returnBegin ? 0 : xe.length;
      }
      function By(ge) {
        const xe = ge[0], Be = $e.substring(ge.index), rt = nd(De, ge, Be);
        if (!rt)
          return $r;
        const It = De;
        De.endScope && De.endScope._wrap ? (Qt(), In(xe, De.endScope._wrap)) : De.endScope && De.endScope._multi ? (Qt(), ed(De.endScope, ge)) : It.skip ? ut += xe : (It.returnEnd || It.excludeEnd || (ut += xe), Qt(), It.excludeEnd && (ut = xe));
        do
          De.scope && St.closeNode(), !De.skip && !De.subLanguage && (As += De.relevance), De = De.parent;
        while (De !== rt.parent);
        return rt.starts && td(rt.starts, ge), It.returnEnd ? 0 : xe.length;
      }
      function Fy() {
        const ge = [];
        for (let xe = De; xe !== Ln; xe = xe.parent)
          xe.scope && ge.unshift(xe.scope);
        ge.forEach((xe) => St.openNode(xe));
      }
      let Ss = {};
      function rd(ge, xe) {
        const Be = xe && xe[0];
        if (ut += ge, Be == null)
          return Qt(), 0;
        if (Ss.type === "begin" && xe.type === "end" && Ss.index === xe.index && Be === "") {
          if (ut += $e.slice(xe.index, xe.index + 1), !He) {
            const rt = new Error(`0 width match regex (${ce})`);
            throw rt.languageName = ce, rt.badRule = Ss.rule, rt;
          }
          return 1;
        }
        if (Ss = xe, xe.type === "begin")
          return Ny(xe);
        if (xe.type === "illegal" && !Ve) {
          const rt = new Error('Illegal lexeme "' + Be + '" for mode "' + (De.scope || "<unnamed>") + '"');
          throw rt.mode = De, rt;
        } else if (xe.type === "end") {
          const rt = By(xe);
          if (rt !== $r)
            return rt;
        }
        if (xe.type === "illegal" && Be === "")
          return 1;
        if (pa > 1e5 && pa > xe.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return ut += Be, Be.length;
      }
      const Ln = cr(ce);
      if (!Ln)
        throw ve(Ge.replace("{}", ce)), new Error('Unknown language: "' + ce + '"');
      const qy = gn(Ln);
      let da = "", De = at || qy;
      const od = {}, St = new de.__emitter(de);
      Fy();
      let ut = "", As = 0, Ir = 0, pa = 0, ha = !1;
      try {
        if (Ln.__emitTokens)
          Ln.__emitTokens($e, St);
        else {
          for (De.matcher.considerAll(); ; ) {
            pa++, ha ? ha = !1 : De.matcher.considerAll(), De.matcher.lastIndex = Ir;
            const ge = De.matcher.exec($e);
            if (!ge) break;
            const xe = $e.substring(Ir, ge.index), Be = rd(xe, ge);
            Ir = ge.index + Be;
          }
          rd($e.substring(Ir));
        }
        return St.finalize(), da = St.toHTML(), {
          language: ce,
          value: da,
          relevance: As,
          illegal: !1,
          _emitter: St,
          _top: De
        };
      } catch (ge) {
        if (ge.message && ge.message.includes("Illegal"))
          return {
            language: ce,
            value: lr($e),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: ge.message,
              index: Ir,
              context: $e.slice(Ir - 100, Ir + 100),
              mode: ge.mode,
              resultSoFar: da
            },
            _emitter: St
          };
        if (He)
          return {
            language: ce,
            value: lr($e),
            illegal: !1,
            relevance: 0,
            errorRaised: ge,
            _emitter: St,
            _top: De
          };
        throw ge;
      }
    }
    function ca(ce) {
      const $e = {
        value: lr(ce),
        illegal: !1,
        relevance: 0,
        _top: be,
        _emitter: new de.__emitter(de)
      };
      return $e._emitter.addText(ce), $e;
    }
    function ua(ce, $e) {
      $e = $e || de.languages || Object.keys(R);
      const Ve = ca(ce), at = $e.filter(cr).filter(Qf).map(
        (Qt) => Jt(Qt, ce, !1)
      );
      at.unshift(Ve);
      const wt = at.sort((Qt, In) => {
        if (Qt.relevance !== In.relevance) return In.relevance - Qt.relevance;
        if (Qt.language && In.language) {
          if (cr(Qt.language).supersetOf === In.language)
            return 1;
          if (cr(In.language).supersetOf === Qt.language)
            return -1;
        }
        return 0;
      }), [mn, ur] = wt, Es = mn;
      return Es.secondBest = ur, Es;
    }
    function xy(ce, $e, Ve) {
      const at = $e && G[$e] || Ve;
      ce.classList.add("hljs"), ce.classList.add(`language-${at}`);
    }
    function fa(ce) {
      let $e = null;
      const Ve = yt(ce);
      if (Ie(Ve)) return;
      if (xs(
        "before:highlightElement",
        { el: ce, language: Ve }
      ), ce.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", ce);
        return;
      }
      if (ce.children.length > 0 && (de.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(ce)), de.throwUnescapedHTML))
        throw new $n(
          "One of your code blocks includes unescaped HTML.",
          ce.innerHTML
        );
      $e = ce;
      const at = $e.textContent, wt = Ve ? Ze(at, { language: Ve, ignoreIllegals: !0 }) : ua(at);
      ce.innerHTML = wt.value, ce.dataset.highlighted = "yes", xy(ce, Ve, wt.language), ce.result = {
        language: wt.language,
        // TODO: remove with version 11.0
        re: wt.relevance,
        relevance: wt.relevance
      }, wt.secondBest && (ce.secondBest = {
        language: wt.secondBest.language,
        relevance: wt.secondBest.relevance
      }), xs("after:highlightElement", { el: ce, result: wt, text: at });
    }
    function Ey(ce) {
      de = Qr(de, ce);
    }
    const Sy = () => {
      Cs(), le("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function Ay() {
      Cs(), le("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let Yf = !1;
    function Cs() {
      if (document.readyState === "loading") {
        Yf = !0;
        return;
      }
      document.querySelectorAll(de.cssSelector).forEach(fa);
    }
    function Ty() {
      Yf && Cs();
    }
    typeof window < "u" && window.addEventListener && window.addEventListener("DOMContentLoaded", Ty, !1);
    function My(ce, $e) {
      let Ve = null;
      try {
        Ve = $e(S);
      } catch (at) {
        if (ve("Language definition for '{}' could not be registered.".replace("{}", ce)), He)
          ve(at);
        else
          throw at;
        Ve = be;
      }
      Ve.name || (Ve.name = ce), R[ce] = Ve, Ve.rawDefinition = $e.bind(null, S), Ve.aliases && Jf(Ve.aliases, { languageName: ce });
    }
    function $y(ce) {
      delete R[ce];
      for (const $e of Object.keys(G))
        G[$e] === ce && delete G[$e];
    }
    function Iy() {
      return Object.keys(R);
    }
    function cr(ce) {
      return ce = (ce || "").toLowerCase(), R[ce] || R[G[ce]];
    }
    function Jf(ce, { languageName: $e }) {
      typeof ce == "string" && (ce = [ce]), ce.forEach((Ve) => {
        G[Ve.toLowerCase()] = $e;
      });
    }
    function Qf(ce) {
      const $e = cr(ce);
      return $e && !$e.disableAutodetect;
    }
    function Ly(ce) {
      ce["before:highlightBlock"] && !ce["before:highlightElement"] && (ce["before:highlightElement"] = ($e) => {
        ce["before:highlightBlock"](
          Object.assign({ block: $e.el }, $e)
        );
      }), ce["after:highlightBlock"] && !ce["after:highlightElement"] && (ce["after:highlightElement"] = ($e) => {
        ce["after:highlightBlock"](
          Object.assign({ block: $e.el }, $e)
        );
      });
    }
    function Oy(ce) {
      Ly(ce), ke.push(ce);
    }
    function Ry(ce) {
      const $e = ke.indexOf(ce);
      $e !== -1 && ke.splice($e, 1);
    }
    function xs(ce, $e) {
      const Ve = ce;
      ke.forEach(function(at) {
        at[Ve] && at[Ve]($e);
      });
    }
    function Py(ce) {
      return le("10.7.0", "highlightBlock will be removed entirely in v12.0"), le("10.7.0", "Please use highlightElement now."), fa(ce);
    }
    Object.assign(S, {
      highlight: Ze,
      highlightAuto: ua,
      highlightAll: Cs,
      highlightElement: fa,
      // TODO: Remove with v12 API
      highlightBlock: Py,
      configure: Ey,
      initHighlighting: Sy,
      initHighlightingOnLoad: Ay,
      registerLanguage: My,
      unregisterLanguage: $y,
      listLanguages: Iy,
      getLanguage: cr,
      registerAliases: Jf,
      autoDetection: Qf,
      inherit: Qr,
      addPlugin: Oy,
      removePlugin: Ry
    }), S.debugMode = function() {
      He = !1;
    }, S.safeMode = function() {
      He = !0;
    }, S.versionString = $t, S.regex = {
      concat: g,
      lookahead: p,
      either: h,
      optional: m,
      anyNumberOfTimes: d
    };
    for (const ce in pe)
      typeof pe[ce] == "object" && e(pe[ce]);
    return Object.assign(S, pe), S;
  }, F = eo({});
  return F.newInstance = () => eo({}), Ta = F, F.HighlightJS = F, F.default = F, Ta;
}
var z3 = /* @__PURE__ */ q3();
const Vn = /* @__PURE__ */ lf(z3), Gd = "[A-Za-z$_][0-9A-Za-z$_]*", H3 = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends"
], j3 = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], xg = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], Eg = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Sg = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], V3 = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], U3 = [].concat(
  Sg,
  xg,
  Eg
);
function Ag(e) {
  const t = e.regex, n = (H, { after: J }) => {
    const L = "</" + H[0].slice(1);
    return H.input.indexOf(L, J) !== -1;
  }, r = Gd, s = {
    begin: "<>",
    end: "</>"
  }, o = /<[A-Za-z0-9\\._:-]+\s*\/>/, i = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (H, J) => {
      const L = H[0].length + H.index, Z = H.input[L];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Z === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Z === ","
      ) {
        J.ignoreMatch();
        return;
      }
      Z === ">" && (n(H, { after: L }) || J.ignoreMatch());
      let K;
      const me = H.input.substring(L);
      if (K = me.match(/^\s*=/)) {
        J.ignoreMatch();
        return;
      }
      if ((K = me.match(/^\s+extends\s+/)) && K.index === 0) {
        J.ignoreMatch();
        return;
      }
    }
  }, a = {
    $pattern: Gd,
    keyword: H3,
    literal: j3,
    built_in: U3,
    "variable.language": V3
  }, l = "[0-9](_?[0-9])*", u = `\\.(${l})`, f = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", c = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${f})((${u})|\\.)?|(${u}))[eE][+-]?(${l})\\b` },
      { begin: `\\b(${f})\\b((${u})\\b|\\.)?|(${u})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, p = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: a,
    contains: []
    // defined later
  }, d = {
    begin: "html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "xml"
    }
  }, m = {
    begin: "css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "css"
    }
  }, g = {
    begin: "gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "graphql"
    }
  }, C = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      p
    ]
  }, k = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: r + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, y = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    d,
    m,
    g,
    C,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    c
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  p.contains = y.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: a,
    contains: [
      "self"
    ].concat(y)
  });
  const _ = [].concat(k, p.contains), E = _.concat([
    // eat recursive parens in sub expressions
    {
      begin: /\(/,
      end: /\)/,
      keywords: a,
      contains: ["self"].concat(_)
    }
  ]), x = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: a,
    contains: E
  }, M = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          r,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(r, "(", t.concat(/\./, r), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          r
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, $ = {
    relevance: 0,
    match: t.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...xg,
        ...Eg
      ]
    }
  }, O = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, D = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          r,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [x],
    illegal: /%/
  }, B = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function N(H) {
    return t.concat("(?!", H.join("|"), ")");
  }
  const oe = {
    match: t.concat(
      /\b/,
      N([
        ...Sg,
        "super",
        "import"
      ]),
      r,
      t.lookahead(/\(/)
    ),
    className: "title.function",
    relevance: 0
  }, q = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(r, /(?![0-9A-Za-z$_(])/)
    )),
    end: r,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, ie = {
    match: [
      /get|set/,
      /\s+/,
      r,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      x
    ]
  }, j = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", V = {
    match: [
      /const|var|let/,
      /\s+/,
      r,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(j)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      x
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: a,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: E, CLASS_REFERENCE: $ },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      O,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      d,
      m,
      g,
      C,
      k,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      c,
      $,
      {
        className: "attr",
        begin: r + t.lookahead(":"),
        relevance: 0
      },
      V,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          k,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: j,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: a,
                    contains: E
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: s.begin, end: s.end },
              { match: o },
              {
                begin: i.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": i.isTrulyOpeningTag,
                end: i.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: i.begin,
                end: i.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      D,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          x,
          e.inherit(e.TITLE_MODE, { begin: r, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      q,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + r,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [x]
      },
      oe,
      B,
      M,
      ie,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Tg(e) {
  const t = e.regex, n = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), r = /[\p{L}0-9._:-]+/u, s = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  }, o = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  }, i = e.inherit(o, {
    begin: /\(/,
    end: /\)/
  }), a = e.inherit(e.APOS_STRING_MODE, { className: "string" }), l = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), u = {
    endsWithParent: !0,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: r,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: !0,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [s]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [s]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: !0,
    unicodeRegex: !0,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          o,
          l,
          a,
          i,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  o,
                  i,
                  l,
                  a
                ]
              }
            ]
          }
        ]
      },
      e.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      s,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              l
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: "tag",
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [u],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [u],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: t.concat(
          /</,
          t.lookahead(t.concat(
            n,
            // <tag/>
            // <tag>
            // <tag ...
            t.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0,
            starts: u
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: t.concat(
          /<\//,
          t.lookahead(t.concat(
            n,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: !0
          }
        ]
      }
    ]
  };
}
const K3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function W3(e, t) {
  return w(), A("svg", K3, t[0] || (t[0] = [
    v("path", {
      fill: "currentColor",
      d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
    }, null, -1)
  ]));
}
const G3 = { name: "mdi-close", render: W3 }, Tr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, Z3 = {}, X3 = { class: "chat-button" };
function Y3(e, t) {
  return w(), A("button", X3, [
    we(e.$slots, "default")
  ]);
}
const J3 = /* @__PURE__ */ Tr(Z3, [["render", Y3]]);
function cf() {
  return qe(yg);
}
function bs() {
  return {
    options: qe(wg)
  };
}
function Hi() {
  const { options: e } = bs(), t = (e == null ? void 0 : e.defaultLanguage) ?? "en";
  function n(s) {
    var i, a;
    const o = (a = (i = e == null ? void 0 : e.i18n) == null ? void 0 : i[t]) == null ? void 0 : a[s];
    return bt(o) ? o.value : o ?? s;
  }
  function r(s) {
    var o, i;
    return !!((i = (o = e == null ? void 0 : e.i18n) == null ? void 0 : o[t]) != null && i[s]);
  }
  return { t: n, te: r };
}
const Q3 = { class: "chat-get-started" }, ek = /* @__PURE__ */ re({
  __name: "GetStarted",
  setup(e) {
    const { t } = Hi();
    return (n, r) => (w(), A("div", Q3, [
      Ce(J3, {
        onClick: r[0] || (r[0] = (s) => n.$emit("click:button"))
      }, {
        default: he(() => [
          Zr(Je(b(t)("getStarted")), 1)
        ]),
        _: 1
      })
    ]));
  }
}), tk = {}, nk = { class: "chat-powered-by" };
function rk(e, t) {
  return w(), A("div", nk, t[0] || (t[0] = [
    Zr(" Powered by "),
    v("a", { href: "https://n8n.io?utm_source=n8n-external&utm_medium=widget-powered-by" }, "n8n", -1)
  ]));
}
const ok = /* @__PURE__ */ Tr(tk, [["render", rk]]), sk = { class: "chat-get-started-footer" }, ik = { key: 0 }, ak = /* @__PURE__ */ re({
  __name: "GetStartedFooter",
  setup(e) {
    const { t, te: n } = Hi();
    return (r, s) => (w(), A("div", sk, [
      b(n)("footer") ? (w(), A("div", ik, Je(b(t)("footer")), 1)) : _e("", !0),
      Ce(ok)
    ]));
  }
});
function lk(e) {
  return Hu() ? (a1(e), !0) : !1;
}
function ck() {
  const e = /* @__PURE__ */ new Set(), t = (s) => {
    e.delete(s);
  };
  return {
    on: (s) => {
      e.add(s);
      const o = () => t(s);
      return lk(o), {
        off: o
      };
    },
    off: t,
    trigger: (...s) => Promise.all(Array.from(e).map((o) => o(...s)))
  };
}
const uk = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const fk = (e, t) => Object.prototype.hasOwnProperty.call(e, t), dk = uk ? window.document : void 0, pk = {
  multiple: !0,
  accept: "*",
  reset: !1,
  directory: !1
};
function hk(e = {}) {
  const {
    document: t = dk
  } = e, n = W(null), { on: r, trigger: s } = ck();
  let o;
  t && (o = t.createElement("input"), o.type = "file", o.onchange = (l) => {
    const u = l.target;
    n.value = u.files, s(n.value);
  });
  const i = () => {
    n.value = null, o && o.value && (o.value = "", s(null));
  }, a = (l) => {
    if (!o)
      return;
    const u = {
      ...pk,
      ...e,
      ...l
    };
    o.multiple = u.multiple, o.accept = u.accept, o.webkitdirectory = u.directory, fk(u, "capture") && (o.capture = u.capture), u.reset && i(), o.click();
  };
  return {
    files: Oi(n),
    open: a,
    reset: i,
    onChange: r
  };
}
const gk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function mk(e, t) {
  return w(), A("svg", gk, t[0] || (t[0] = [
    v("path", {
      fill: "currentColor",
      d: "M16.5 6v11.5a4 4 0 0 1-4 4a4 4 0 0 1-4-4V5A2.5 2.5 0 0 1 11 2.5A2.5 2.5 0 0 1 13.5 5v10.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1V6H10v9.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5V5a4 4 0 0 0-4-4a4 4 0 0 0-4 4v12.5a5.5 5.5 0 0 0 5.5 5.5a5.5 5.5 0 0 0 5.5-5.5V6z"
    }, null, -1)
  ]));
}
const vk = { name: "mdi-paperclip", render: mk }, bk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _k(e, t) {
  return w(), A("svg", bk, t[0] || (t[0] = [
    v("path", {
      fill: "currentColor",
      d: "m2 21l21-9L2 3v7l15 2l-15 2z"
    }, null, -1)
  ]));
}
const yk = { name: "mdi-send", render: _k }, wk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function kk(e, t) {
  return w(), A("svg", wk, t[0] || (t[0] = [
    v("path", {
      fill: "currentColor",
      d: "M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"
    }, null, -1)
  ]));
}
const Ck = { name: "mdi-closeThick", render: kk }, xk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ek(e, t) {
  return w(), A("svg", xk, t[0] || (t[0] = [
    v("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m0 18h12v-8l-4 4l-2-2zM8 9a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
    }, null, -1)
  ]));
}
const Sk = { name: "mdi-fileImage", render: Ek }, Ak = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Tk(e, t) {
  return w(), A("svg", Ak, t[0] || (t[0] = [
    v("path", {
      fill: "currentColor",
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 11h-2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2c.4 0 .7.1 1 .3V11h3zm0-4V3.5L18.5 9z"
    }, null, -1)
  ]));
}
const Mk = { name: "mdi-fileMusic", render: Tk }, $k = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ik(e, t) {
  return w(), A("svg", $k, t[0] || (t[0] = [
    v("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H6v2zm3-4v-2H6v2z"
    }, null, -1)
  ]));
}
const Zd = { name: "mdi-fileText", render: Ik }, Lk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ok(e, t) {
  return w(), A("svg", Lk, t[0] || (t[0] = [
    v("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m11 17v-6l-3 2.2V13H7v6h7v-2.2z"
    }, null, -1)
  ]));
}
const Rk = { name: "mdi-fileVideo", render: Ok }, Pk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Dk(e, t) {
  return w(), A("svg", Pk, t[0] || (t[0] = [
    v("path", {
      fill: "currentColor",
      d: "M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"
    }, null, -1)
  ]));
}
const Nk = { name: "mdi-openInNew", render: Dk }, Bk = { class: "chat-file-name" }, Fk = /* @__PURE__ */ re({
  __name: "ChatFile",
  props: {
    file: {},
    isRemovable: { type: Boolean },
    isPreviewable: { type: Boolean }
  },
  emits: ["remove"],
  setup(e, { emit: t }) {
    const n = e, r = t, s = {
      document: Zd,
      audio: Mk,
      image: Sk,
      video: Rk
    }, o = P(() => {
      var u;
      const l = (u = n.file) == null ? void 0 : u.type.split("/")[0];
      return s[l] || Zd;
    });
    function i() {
      n.isPreviewable && window.open(URL.createObjectURL(n.file));
    }
    function a() {
      r("remove", n.file);
    }
    return (l, u) => (w(), A("div", {
      class: "chat-file",
      onClick: i
    }, [
      Ce(b(o)),
      v("p", Bk, Je(l.file.name), 1),
      l.isRemovable ? (w(), A("span", {
        key: 0,
        class: "chat-file-delete",
        onClick: nn(a, ["stop"])
      }, [
        Ce(b(Ck))
      ])) : l.isPreviewable ? (w(), ue(b(Nk), {
        key: 1,
        class: "chat-file-preview"
      })) : _e("", !0)
    ]));
  }
}), Mg = /* @__PURE__ */ Tr(Fk, [["__scopeId", "data-v-e0d57af7"]]), qk = { class: "chat-inputs" }, zk = {
  key: 0,
  class: "chat-input-left-panel"
}, Hk = ["disabled", "placeholder"], jk = { class: "chat-inputs-controls" }, Vk = ["disabled"], Uk = ["disabled"], Kk = {
  key: 0,
  class: "chat-files"
}, Wk = /* @__PURE__ */ re({
  __name: "Input",
  props: {
    placeholder: { default: "inputPlaceholder" }
  },
  emits: ["arrowKeyDown"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = Hi(), s = t, { options: o } = bs(), i = cf(), { waitingForResponse: a } = i, l = W(null), u = W(null), f = W(""), c = W(!1), p = W(null), d = W(!1), m = P(() => {
      var L;
      return d.value ? !1 : f.value === "" || b(a) || ((L = o.disabled) == null ? void 0 : L.value) === !0;
    }), g = P(() => {
      var L;
      return ((L = o.disabled) == null ? void 0 : L.value) === !0;
    }), C = P(
      () => {
        var L;
        return h.value && b(a) && !((L = o.disabled) != null && L.value);
      }
    ), h = P(() => b(o.allowFileUploads) === !0), k = P(() => b(o.allowedFilesMimeTypes)), y = P(() => ({
      "--controls-count": h.value ? 2 : 1
    })), {
      open: _,
      reset: E,
      onChange: x
    } = hk({
      multiple: !0,
      reset: !1
    });
    x((L) => {
      if (!L) return;
      const Z = new DataTransfer();
      if (l.value)
        for (let K = 0; K < l.value.length; K++)
          Z.items.add(l.value[K]);
      for (let K = 0; K < L.length; K++)
        Z.items.add(L[K]);
      l.value = Z.files;
    }), it(() => {
      Vt.on("focusInput", $), Vt.on("blurInput", M), Vt.on("setInputValue", O), u.value && (p.value = new ResizeObserver((L) => {
        for (const Z of L)
          Z.target === u.value && J();
      }), p.value.observe(u.value));
    }), Bi(() => {
      Vt.off("focusInput", $), Vt.off("blurInput", M), Vt.off("setInputValue", O), p.value && (p.value.disconnect(), p.value = null);
    });
    function M() {
      u.value && u.value.blur();
    }
    function $() {
      u.value && u.value.focus();
    }
    function O(L) {
      f.value = L, $();
    }
    function D() {
      if (l.value) {
        const L = Array.from(l.value);
        return E(), l.value = null, L;
      }
      return [];
    }
    function B(L) {
      if (o.webhookUrl && i.currentSessionId.value)
        try {
          const Z = T3(
            o.webhookUrl,
            L,
            i.currentSessionId.value,
            !0
          );
          i.ws = new WebSocket(Z), i.ws.onmessage = (K) => {
            var Se;
            if (K.data === "n8n|heartbeat") {
              (Se = i.ws) == null || Se.send("n8n|heartbeat-ack");
              return;
            }
            if (K.data === "n8n|continue") {
              d.value = !1, i.waitingForResponse.value = !0;
              return;
            }
            const me = {
              id: Vr(),
              text: K.data,
              sender: "bot"
            };
            i.messages.value.push(me), d.value = !0, i.waitingForResponse.value = !1;
          }, i.ws.onclose = () => {
            i.ws = null, d.value = !1, i.waitingForResponse.value = !1;
          };
        } catch (Z) {
          console.error("Error setting up websocket connection", Z);
        }
    }
    async function N(L) {
      if (!L || L.length === 0) return [];
      const Z = L.map(async (K) => new Promise((me, Se) => {
        const Re = new FileReader();
        Re.onload = () => me({
          name: K.name,
          type: K.type,
          data: Re.result
        }), Re.onerror = () => {
          var Pe;
          return Se(new Error(`Error reading file: ${((Pe = Re.error) == null ? void 0 : Pe.message) ?? "Unknown error"}`));
        }, Re.readAsDataURL(K);
      }));
      return await Promise.all(Z);
    }
    async function oe(L, Z) {
      const K = {
        id: Vr(),
        text: Z,
        sender: "user",
        files: l.value ? D() : void 0
      };
      i.messages.value.push(K), L.send(
        JSON.stringify({
          sessionId: i.currentSessionId.value,
          action: "sendMessage",
          chatInput: Z,
          files: await N(K.files)
        })
      ), i.waitingForResponse.value = !0, d.value = !1;
    }
    async function q(L) {
      if (L.preventDefault(), m.value)
        return;
      const Z = f.value;
      if (f.value = "", c.value = !0, i.ws && d.value) {
        await oe(i.ws, Z);
        return;
      }
      const K = await i.sendMessage(Z, D());
      K != null && K.executionId && B(K.executionId), c.value = !1;
    }
    async function ie(L) {
      L.shiftKey || L.isComposing || (await q(L), J());
    }
    function j(L) {
      if (!l.value) return;
      const Z = new DataTransfer();
      for (let K = 0; K < l.value.length; K++) {
        const me = l.value[K];
        L.name !== me.name && Z.items.add(me);
      }
      E(), l.value = Z.files;
    }
    function V(L) {
      (L.key === "ArrowUp" || L.key === "ArrowDown") && (L.preventDefault(), s("arrowKeyDown", {
        key: L.key,
        currentInputValue: f.value
      }));
    }
    function H() {
      C.value || _({ accept: b(k) });
    }
    function J() {
      const L = u.value;
      if (!L) return;
      L.style.height = "var(--chat--textarea--height)";
      const Z = Math.min(L.scrollHeight, 480);
      L.style.height = `${Z}px`;
    }
    return (L, Z) => {
      var K;
      return w(), A("div", {
        class: "chat-input",
        style: st(y.value),
        onKeydown: nn(V, ["stop"])
      }, [
        v("div", qk, [
          L.$slots.leftPanel ? (w(), A("div", zk, [
            we(L.$slots, "leftPanel", {}, void 0, !0)
          ])) : _e("", !0),
          Ut(v("textarea", {
            ref_key: "chatTextArea",
            ref: u,
            "onUpdate:modelValue": Z[0] || (Z[0] = (me) => f.value = me),
            "data-test-id": "chat-input",
            disabled: g.value,
            placeholder: b(r)(n.placeholder),
            onKeydown: zt(ie, ["enter"]),
            onInput: J,
            onMousedown: J,
            onFocus: J
          }, null, 40, Hk), [
            [_g, f.value]
          ]),
          v("div", jk, [
            h.value ? (w(), A("button", {
              key: 0,
              disabled: C.value,
              class: "chat-input-file-button",
              "data-test-id": "chat-attach-file-button",
              onClick: H
            }, [
              Ce(b(vk), {
                height: "24",
                width: "24"
              })
            ], 8, Vk)) : _e("", !0),
            v("button", {
              disabled: m.value,
              class: "chat-input-send-button",
              onClick: q
            }, [
              Ce(b(yk), {
                height: "24",
                width: "24"
              })
            ], 8, Uk)
          ])
        ]),
        (K = l.value) != null && K.length && (!c.value || d.value) ? (w(), A("div", Kk, [
          (w(!0), A(et, null, Cn(l.value, (me) => (w(), ue(Mg, {
            key: me.name,
            file: me,
            "is-removable": !0,
            "is-previewable": !0,
            onRemove: j
          }, null, 8, ["file"]))), 128))
        ])) : _e("", !0)
      ], 36);
    };
  }
}), Gk = /* @__PURE__ */ Tr(Wk, [["__scopeId", "data-v-de5e7961"]]), Zk = { class: "chat-layout" }, Xk = {
  key: 0,
  class: "chat-header"
}, Yk = {
  key: 2,
  class: "chat-footer"
}, Jk = /* @__PURE__ */ re({
  __name: "Layout",
  setup(e) {
    const t = W(null);
    function n() {
      const r = t.value;
      r && (r.scrollTop = r.scrollHeight);
    }
    return it(() => {
      Vt.on("scrollToBottom", n), window.addEventListener("resize", n);
    }), Yt(() => {
      Vt.off("scrollToBottom", n), window.removeEventListener("resize", n);
    }), (r, s) => (w(), A("main", Zk, [
      r.$slots.header ? (w(), A("div", Xk, [
        we(r.$slots, "header")
      ])) : _e("", !0),
      r.$slots.default ? (w(), A("div", {
        key: 1,
        ref_key: "chatBodyRef",
        ref: t,
        class: "chat-body"
      }, [
        we(r.$slots, "default")
      ], 512)) : _e("", !0),
      r.$slots.footer ? (w(), A("div", Yk, [
        we(r.$slots, "footer")
      ])) : _e("", !0)
    ]));
  }
}), Un = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (s) => {
  const o = e == null ? void 0 : e(s);
  if (n === !1 || !o)
    return t == null ? void 0 : t(s);
};
var Xd;
const Nt = typeof window < "u", Qk = (e) => typeof e == "string", $g = () => {
}, Ig = Nt && ((Xd = window == null ? void 0 : window.navigator) == null ? void 0 : Xd.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Lg(e) {
  return typeof e == "function" ? e() : b(e);
}
function eC(e) {
  return e;
}
function uf(e) {
  return Hu() ? (a1(e), !0) : !1;
}
function tC(e, t = !0) {
  _t() ? it(e) : t ? e() : Ue(e);
}
function yr(e) {
  var t;
  const n = Lg(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const ff = Nt ? window : void 0;
function Ur(...e) {
  let t, n, r, s;
  if (Qk(e[0]) || Array.isArray(e[0]) ? ([n, r, s] = e, t = ff) : [t, n, r, s] = e, !t)
    return $g;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const o = [], i = () => {
    o.forEach((f) => f()), o.length = 0;
  }, a = (f, c, p, d) => (f.addEventListener(c, p, d), () => f.removeEventListener(c, p, d)), l = Te(() => [yr(t), Lg(s)], ([f, c]) => {
    i(), f && o.push(...n.flatMap((p) => r.map((d) => a(f, p, d, c))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), i();
  };
  return uf(u), u;
}
let Yd = !1;
function nC(e, t, n = {}) {
  const { window: r = ff, ignore: s = [], capture: o = !0, detectIframe: i = !1 } = n;
  if (!r)
    return;
  Ig && !Yd && (Yd = !0, Array.from(r.document.body.children).forEach((p) => p.addEventListener("click", $g)));
  let a = !0;
  const l = (p) => s.some((d) => {
    if (typeof d == "string")
      return Array.from(r.document.querySelectorAll(d)).some((m) => m === p.target || p.composedPath().includes(m));
    {
      const m = yr(d);
      return m && (p.target === m || p.composedPath().includes(m));
    }
  }), f = [
    Ur(r, "click", (p) => {
      const d = yr(e);
      if (!(!d || d === p.target || p.composedPath().includes(d))) {
        if (p.detail === 0 && (a = !l(p)), !a) {
          a = !0;
          return;
        }
        t(p);
      }
    }, { passive: !0, capture: o }),
    Ur(r, "pointerdown", (p) => {
      const d = yr(e);
      d && (a = !p.composedPath().includes(d) && !l(p));
    }, { passive: !0 }),
    i && Ur(r, "blur", (p) => {
      var d;
      const m = yr(e);
      ((d = r.document.activeElement) == null ? void 0 : d.tagName) === "IFRAME" && !(m != null && m.contains(r.document.activeElement)) && t(p);
    })
  ].filter(Boolean);
  return () => f.forEach((p) => p());
}
function rC(e, t = !1) {
  const n = W(), r = () => n.value = !!e();
  return r(), tC(r, t), n;
}
const Jd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Qd = "__vueuse_ssr_handlers__";
Jd[Qd] = Jd[Qd] || {};
var e0 = Object.getOwnPropertySymbols, oC = Object.prototype.hasOwnProperty, sC = Object.prototype.propertyIsEnumerable, iC = (e, t) => {
  var n = {};
  for (var r in e)
    oC.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && e0)
    for (var r of e0(e))
      t.indexOf(r) < 0 && sC.call(e, r) && (n[r] = e[r]);
  return n;
};
function ji(e, t, n = {}) {
  const r = n, { window: s = ff } = r, o = iC(r, ["window"]);
  let i;
  const a = rC(() => s && "ResizeObserver" in s), l = () => {
    i && (i.disconnect(), i = void 0);
  }, u = Te(() => yr(e), (c) => {
    l(), a.value && s && c && (i = new ResizeObserver(t), i.observe(c, o));
  }, { immediate: !0, flush: "post" }), f = () => {
    l(), u();
  };
  return uf(f), {
    isSupported: a,
    stop: f
  };
}
var t0;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(t0 || (t0 = {}));
var aC = Object.defineProperty, n0 = Object.getOwnPropertySymbols, lC = Object.prototype.hasOwnProperty, cC = Object.prototype.propertyIsEnumerable, r0 = (e, t, n) => t in e ? aC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, uC = (e, t) => {
  for (var n in t || (t = {}))
    lC.call(t, n) && r0(e, n, t[n]);
  if (n0)
    for (var n of n0(t))
      cC.call(t, n) && r0(e, n, t[n]);
  return e;
};
const fC = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
uC({
  linear: eC
}, fC);
const dC = () => Nt && /firefox/i.test(window.navigator.userAgent), df = (e) => {
  let t, n;
  return e.type === "touchend" ? (n = e.changedTouches[0].clientY, t = e.changedTouches[0].clientX) : e.type.startsWith("touch") ? (n = e.touches[0].clientY, t = e.touches[0].clientX) : (n = e.clientY, t = e.clientX), {
    clientX: t,
    clientY: n
  };
};
var Og = typeof global == "object" && global && global.Object === Object && global, pC = typeof self == "object" && self && self.Object === Object && self, Bn = Og || pC || Function("return this")(), Cr = Bn.Symbol, Rg = Object.prototype, hC = Rg.hasOwnProperty, gC = Rg.toString, Po = Cr ? Cr.toStringTag : void 0;
function mC(e) {
  var t = hC.call(e, Po), n = e[Po];
  try {
    e[Po] = void 0;
    var r = !0;
  } catch {
  }
  var s = gC.call(e);
  return r && (t ? e[Po] = n : delete e[Po]), s;
}
var vC = Object.prototype, bC = vC.toString;
function _C(e) {
  return bC.call(e);
}
var yC = "[object Null]", wC = "[object Undefined]", o0 = Cr ? Cr.toStringTag : void 0;
function Ao(e) {
  return e == null ? e === void 0 ? wC : yC : o0 && o0 in Object(e) ? mC(e) : _C(e);
}
function bo(e) {
  return e != null && typeof e == "object";
}
var kC = "[object Symbol]";
function Vi(e) {
  return typeof e == "symbol" || bo(e) && Ao(e) == kC;
}
function CC(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = Array(r); ++n < r; )
    s[n] = t(e[n], n, e);
  return s;
}
var er = Array.isArray, s0 = Cr ? Cr.prototype : void 0, i0 = s0 ? s0.toString : void 0;
function Pg(e) {
  if (typeof e == "string")
    return e;
  if (er(e))
    return CC(e, Pg) + "";
  if (Vi(e))
    return i0 ? i0.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var xC = /\s/;
function EC(e) {
  for (var t = e.length; t-- && xC.test(e.charAt(t)); )
    ;
  return t;
}
var SC = /^\s+/;
function AC(e) {
  return e && e.slice(0, EC(e) + 1).replace(SC, "");
}
function _o(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var a0 = NaN, TC = /^[-+]0x[0-9a-f]+$/i, MC = /^0b[01]+$/i, $C = /^0o[0-7]+$/i, IC = parseInt;
function l0(e) {
  if (typeof e == "number")
    return e;
  if (Vi(e))
    return a0;
  if (_o(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = _o(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = AC(e);
  var n = MC.test(e);
  return n || $C.test(e) ? IC(e.slice(2), n ? 2 : 8) : TC.test(e) ? a0 : +e;
}
function LC(e) {
  return e;
}
var OC = "[object AsyncFunction]", RC = "[object Function]", PC = "[object GeneratorFunction]", DC = "[object Proxy]";
function Dg(e) {
  if (!_o(e))
    return !1;
  var t = Ao(e);
  return t == RC || t == PC || t == OC || t == DC;
}
var Ma = Bn["__core-js_shared__"], c0 = function() {
  var e = /[^.]+$/.exec(Ma && Ma.keys && Ma.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function NC(e) {
  return !!c0 && c0 in e;
}
var BC = Function.prototype, FC = BC.toString;
function Jr(e) {
  if (e != null) {
    try {
      return FC.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var qC = /[\\^$.*+?()[\]{}|]/g, zC = /^\[object .+?Constructor\]$/, HC = Function.prototype, jC = Object.prototype, VC = HC.toString, UC = jC.hasOwnProperty, KC = RegExp(
  "^" + VC.call(UC).replace(qC, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function WC(e) {
  if (!_o(e) || NC(e))
    return !1;
  var t = Dg(e) ? KC : zC;
  return t.test(Jr(e));
}
function GC(e, t) {
  return e == null ? void 0 : e[t];
}
function To(e, t) {
  var n = GC(e, t);
  return WC(n) ? n : void 0;
}
var pu = To(Bn, "WeakMap");
function ZC(e, t, n, r) {
  e.length;
  for (var s = n + 1; s--; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
var XC = 9007199254740991, YC = /^(?:0|[1-9]\d*)$/;
function Ng(e, t) {
  var n = typeof e;
  return t = t ?? XC, !!t && (n == "number" || n != "symbol" && YC.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Bg(e, t) {
  return e === t || e !== e && t !== t;
}
var JC = 9007199254740991;
function pf(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= JC;
}
function QC(e) {
  return e != null && pf(e.length) && !Dg(e);
}
var e6 = Object.prototype;
function t6(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || e6;
  return e === n;
}
function n6(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var r6 = "[object Arguments]";
function u0(e) {
  return bo(e) && Ao(e) == r6;
}
var Fg = Object.prototype, o6 = Fg.hasOwnProperty, s6 = Fg.propertyIsEnumerable, qg = u0(/* @__PURE__ */ function() {
  return arguments;
}()) ? u0 : function(e) {
  return bo(e) && o6.call(e, "callee") && !s6.call(e, "callee");
};
function i6() {
  return !1;
}
var zg = typeof exports == "object" && exports && !exports.nodeType && exports, f0 = zg && typeof module == "object" && module && !module.nodeType && module, a6 = f0 && f0.exports === zg, d0 = a6 ? Bn.Buffer : void 0, l6 = d0 ? d0.isBuffer : void 0, hu = l6 || i6, c6 = "[object Arguments]", u6 = "[object Array]", f6 = "[object Boolean]", d6 = "[object Date]", p6 = "[object Error]", h6 = "[object Function]", g6 = "[object Map]", m6 = "[object Number]", v6 = "[object Object]", b6 = "[object RegExp]", _6 = "[object Set]", y6 = "[object String]", w6 = "[object WeakMap]", k6 = "[object ArrayBuffer]", C6 = "[object DataView]", x6 = "[object Float32Array]", E6 = "[object Float64Array]", S6 = "[object Int8Array]", A6 = "[object Int16Array]", T6 = "[object Int32Array]", M6 = "[object Uint8Array]", $6 = "[object Uint8ClampedArray]", I6 = "[object Uint16Array]", L6 = "[object Uint32Array]", ft = {};
ft[x6] = ft[E6] = ft[S6] = ft[A6] = ft[T6] = ft[M6] = ft[$6] = ft[I6] = ft[L6] = !0;
ft[c6] = ft[u6] = ft[k6] = ft[f6] = ft[C6] = ft[d6] = ft[p6] = ft[h6] = ft[g6] = ft[m6] = ft[v6] = ft[b6] = ft[_6] = ft[y6] = ft[w6] = !1;
function O6(e) {
  return bo(e) && pf(e.length) && !!ft[Ao(e)];
}
function R6(e) {
  return function(t) {
    return e(t);
  };
}
var Hg = typeof exports == "object" && exports && !exports.nodeType && exports, Go = Hg && typeof module == "object" && module && !module.nodeType && module, P6 = Go && Go.exports === Hg, $a = P6 && Og.process, p0 = function() {
  try {
    var e = Go && Go.require && Go.require("util").types;
    return e || $a && $a.binding && $a.binding("util");
  } catch {
  }
}(), h0 = p0 && p0.isTypedArray, jg = h0 ? R6(h0) : O6, D6 = Object.prototype, N6 = D6.hasOwnProperty;
function B6(e, t) {
  var n = er(e), r = !n && qg(e), s = !n && !r && hu(e), o = !n && !r && !s && jg(e), i = n || r || s || o, a = i ? n6(e.length, String) : [], l = a.length;
  for (var u in e)
    N6.call(e, u) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ng(u, l))) && a.push(u);
  return a;
}
function F6(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var q6 = F6(Object.keys, Object), z6 = Object.prototype, H6 = z6.hasOwnProperty;
function j6(e) {
  if (!t6(e))
    return q6(e);
  var t = [];
  for (var n in Object(e))
    H6.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Vg(e) {
  return QC(e) ? B6(e) : j6(e);
}
var V6 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, U6 = /^\w*$/;
function hf(e, t) {
  if (er(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Vi(e) ? !0 : U6.test(e) || !V6.test(e) || t != null && e in Object(t);
}
var as = To(Object, "create");
function K6() {
  this.__data__ = as ? as(null) : {}, this.size = 0;
}
function W6(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var G6 = "__lodash_hash_undefined__", Z6 = Object.prototype, X6 = Z6.hasOwnProperty;
function Y6(e) {
  var t = this.__data__;
  if (as) {
    var n = t[e];
    return n === G6 ? void 0 : n;
  }
  return X6.call(t, e) ? t[e] : void 0;
}
var J6 = Object.prototype, Q6 = J6.hasOwnProperty;
function ex(e) {
  var t = this.__data__;
  return as ? t[e] !== void 0 : Q6.call(t, e);
}
var tx = "__lodash_hash_undefined__";
function nx(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = as && t === void 0 ? tx : t, this;
}
function Yr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Yr.prototype.clear = K6;
Yr.prototype.delete = W6;
Yr.prototype.get = Y6;
Yr.prototype.has = ex;
Yr.prototype.set = nx;
function rx() {
  this.__data__ = [], this.size = 0;
}
function Ui(e, t) {
  for (var n = e.length; n--; )
    if (Bg(e[n][0], t))
      return n;
  return -1;
}
var ox = Array.prototype, sx = ox.splice;
function ix(e) {
  var t = this.__data__, n = Ui(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : sx.call(t, n, 1), --this.size, !0;
}
function ax(e) {
  var t = this.__data__, n = Ui(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function lx(e) {
  return Ui(this.__data__, e) > -1;
}
function cx(e, t) {
  var n = this.__data__, r = Ui(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function ir(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ir.prototype.clear = rx;
ir.prototype.delete = ix;
ir.prototype.get = ax;
ir.prototype.has = lx;
ir.prototype.set = cx;
var ls = To(Bn, "Map");
function ux() {
  this.size = 0, this.__data__ = {
    hash: new Yr(),
    map: new (ls || ir)(),
    string: new Yr()
  };
}
function fx(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ki(e, t) {
  var n = e.__data__;
  return fx(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function dx(e) {
  var t = Ki(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function px(e) {
  return Ki(this, e).get(e);
}
function hx(e) {
  return Ki(this, e).has(e);
}
function gx(e, t) {
  var n = Ki(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function ar(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ar.prototype.clear = ux;
ar.prototype.delete = dx;
ar.prototype.get = px;
ar.prototype.has = hx;
ar.prototype.set = gx;
var mx = "Expected a function";
function gf(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(mx);
  var n = function() {
    var r = arguments, s = t ? t.apply(this, r) : r[0], o = n.cache;
    if (o.has(s))
      return o.get(s);
    var i = e.apply(this, r);
    return n.cache = o.set(s, i) || o, i;
  };
  return n.cache = new (gf.Cache || ar)(), n;
}
gf.Cache = ar;
var vx = 500;
function bx(e) {
  var t = gf(e, function(r) {
    return n.size === vx && n.clear(), r;
  }), n = t.cache;
  return t;
}
var _x = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, yx = /\\(\\)?/g, wx = bx(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(_x, function(n, r, s, o) {
    t.push(s ? o.replace(yx, "$1") : r || n);
  }), t;
});
function kx(e) {
  return e == null ? "" : Pg(e);
}
function Ug(e, t) {
  return er(e) ? e : hf(e, t) ? [e] : wx(kx(e));
}
function Wi(e) {
  if (typeof e == "string" || Vi(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Kg(e, t) {
  t = Ug(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Wi(t[n++])];
  return n && n == r ? e : void 0;
}
function rn(e, t, n) {
  var r = e == null ? void 0 : Kg(e, t);
  return r === void 0 ? n : r;
}
function Cx(e, t) {
  for (var n = -1, r = t.length, s = e.length; ++n < r; )
    e[s + n] = t[n];
  return e;
}
function xx() {
  this.__data__ = new ir(), this.size = 0;
}
function Ex(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Sx(e) {
  return this.__data__.get(e);
}
function Ax(e) {
  return this.__data__.has(e);
}
var Tx = 200;
function Mx(e, t) {
  var n = this.__data__;
  if (n instanceof ir) {
    var r = n.__data__;
    if (!ls || r.length < Tx - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new ar(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Xn(e) {
  var t = this.__data__ = new ir(e);
  this.size = t.size;
}
Xn.prototype.clear = xx;
Xn.prototype.delete = Ex;
Xn.prototype.get = Sx;
Xn.prototype.has = Ax;
Xn.prototype.set = Mx;
function $x(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = 0, o = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (o[s++] = i);
  }
  return o;
}
function Ix() {
  return [];
}
var Lx = Object.prototype, Ox = Lx.propertyIsEnumerable, g0 = Object.getOwnPropertySymbols, Rx = g0 ? function(e) {
  return e == null ? [] : (e = Object(e), $x(g0(e), function(t) {
    return Ox.call(e, t);
  }));
} : Ix;
function Px(e, t, n) {
  var r = t(e);
  return er(e) ? r : Cx(r, n(e));
}
function m0(e) {
  return Px(e, Vg, Rx);
}
var gu = To(Bn, "DataView"), mu = To(Bn, "Promise"), vu = To(Bn, "Set"), v0 = "[object Map]", Dx = "[object Object]", b0 = "[object Promise]", _0 = "[object Set]", y0 = "[object WeakMap]", w0 = "[object DataView]", Nx = Jr(gu), Bx = Jr(ls), Fx = Jr(mu), qx = Jr(vu), zx = Jr(pu), _r = Ao;
(gu && _r(new gu(new ArrayBuffer(1))) != w0 || ls && _r(new ls()) != v0 || mu && _r(mu.resolve()) != b0 || vu && _r(new vu()) != _0 || pu && _r(new pu()) != y0) && (_r = function(e) {
  var t = Ao(e), n = t == Dx ? e.constructor : void 0, r = n ? Jr(n) : "";
  if (r)
    switch (r) {
      case Nx:
        return w0;
      case Bx:
        return v0;
      case Fx:
        return b0;
      case qx:
        return _0;
      case zx:
        return y0;
    }
  return t;
});
var k0 = Bn.Uint8Array, Hx = "__lodash_hash_undefined__";
function jx(e) {
  return this.__data__.set(e, Hx), this;
}
function Vx(e) {
  return this.__data__.has(e);
}
function bi(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new ar(); ++t < n; )
    this.add(e[t]);
}
bi.prototype.add = bi.prototype.push = jx;
bi.prototype.has = Vx;
function Ux(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Kx(e, t) {
  return e.has(t);
}
var Wx = 1, Gx = 2;
function Wg(e, t, n, r, s, o) {
  var i = n & Wx, a = e.length, l = t.length;
  if (a != l && !(i && l > a))
    return !1;
  var u = o.get(e), f = o.get(t);
  if (u && f)
    return u == t && f == e;
  var c = -1, p = !0, d = n & Gx ? new bi() : void 0;
  for (o.set(e, t), o.set(t, e); ++c < a; ) {
    var m = e[c], g = t[c];
    if (r)
      var C = i ? r(g, m, c, t, e, o) : r(m, g, c, e, t, o);
    if (C !== void 0) {
      if (C)
        continue;
      p = !1;
      break;
    }
    if (d) {
      if (!Ux(t, function(h, k) {
        if (!Kx(d, k) && (m === h || s(m, h, n, r, o)))
          return d.push(k);
      })) {
        p = !1;
        break;
      }
    } else if (!(m === g || s(m, g, n, r, o))) {
      p = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), p;
}
function Zx(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, s) {
    n[++t] = [s, r];
  }), n;
}
function Xx(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var Yx = 1, Jx = 2, Qx = "[object Boolean]", e5 = "[object Date]", t5 = "[object Error]", n5 = "[object Map]", r5 = "[object Number]", o5 = "[object RegExp]", s5 = "[object Set]", i5 = "[object String]", a5 = "[object Symbol]", l5 = "[object ArrayBuffer]", c5 = "[object DataView]", C0 = Cr ? Cr.prototype : void 0, Ia = C0 ? C0.valueOf : void 0;
function u5(e, t, n, r, s, o, i) {
  switch (n) {
    case c5:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case l5:
      return !(e.byteLength != t.byteLength || !o(new k0(e), new k0(t)));
    case Qx:
    case e5:
    case r5:
      return Bg(+e, +t);
    case t5:
      return e.name == t.name && e.message == t.message;
    case o5:
    case i5:
      return e == t + "";
    case n5:
      var a = Zx;
    case s5:
      var l = r & Yx;
      if (a || (a = Xx), e.size != t.size && !l)
        return !1;
      var u = i.get(e);
      if (u)
        return u == t;
      r |= Jx, i.set(e, t);
      var f = Wg(a(e), a(t), r, s, o, i);
      return i.delete(e), f;
    case a5:
      if (Ia)
        return Ia.call(e) == Ia.call(t);
  }
  return !1;
}
var f5 = 1, d5 = Object.prototype, p5 = d5.hasOwnProperty;
function h5(e, t, n, r, s, o) {
  var i = n & f5, a = m0(e), l = a.length, u = m0(t), f = u.length;
  if (l != f && !i)
    return !1;
  for (var c = l; c--; ) {
    var p = a[c];
    if (!(i ? p in t : p5.call(t, p)))
      return !1;
  }
  var d = o.get(e), m = o.get(t);
  if (d && m)
    return d == t && m == e;
  var g = !0;
  o.set(e, t), o.set(t, e);
  for (var C = i; ++c < l; ) {
    p = a[c];
    var h = e[p], k = t[p];
    if (r)
      var y = i ? r(k, h, p, t, e, o) : r(h, k, p, e, t, o);
    if (!(y === void 0 ? h === k || s(h, k, n, r, o) : y)) {
      g = !1;
      break;
    }
    C || (C = p == "constructor");
  }
  if (g && !C) {
    var _ = e.constructor, E = t.constructor;
    _ != E && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof E == "function" && E instanceof E) && (g = !1);
  }
  return o.delete(e), o.delete(t), g;
}
var g5 = 1, x0 = "[object Arguments]", E0 = "[object Array]", Ps = "[object Object]", m5 = Object.prototype, S0 = m5.hasOwnProperty;
function v5(e, t, n, r, s, o) {
  var i = er(e), a = er(t), l = i ? E0 : _r(e), u = a ? E0 : _r(t);
  l = l == x0 ? Ps : l, u = u == x0 ? Ps : u;
  var f = l == Ps, c = u == Ps, p = l == u;
  if (p && hu(e)) {
    if (!hu(t))
      return !1;
    i = !0, f = !1;
  }
  if (p && !f)
    return o || (o = new Xn()), i || jg(e) ? Wg(e, t, n, r, s, o) : u5(e, t, l, n, r, s, o);
  if (!(n & g5)) {
    var d = f && S0.call(e, "__wrapped__"), m = c && S0.call(t, "__wrapped__");
    if (d || m) {
      var g = d ? e.value() : e, C = m ? t.value() : t;
      return o || (o = new Xn()), s(g, C, n, r, o);
    }
  }
  return p ? (o || (o = new Xn()), h5(e, t, n, r, s, o)) : !1;
}
function Gi(e, t, n, r, s) {
  return e === t ? !0 : e == null || t == null || !bo(e) && !bo(t) ? e !== e && t !== t : v5(e, t, n, r, Gi, s);
}
var b5 = 1, _5 = 2;
function y5(e, t, n, r) {
  var s = n.length, o = s;
  if (e == null)
    return !o;
  for (e = Object(e); s--; ) {
    var i = n[s];
    if (i[2] ? i[1] !== e[i[0]] : !(i[0] in e))
      return !1;
  }
  for (; ++s < o; ) {
    i = n[s];
    var a = i[0], l = e[a], u = i[1];
    if (i[2]) {
      if (l === void 0 && !(a in e))
        return !1;
    } else {
      var f = new Xn(), c;
      if (!(c === void 0 ? Gi(u, l, b5 | _5, r, f) : c))
        return !1;
    }
  }
  return !0;
}
function Gg(e) {
  return e === e && !_o(e);
}
function w5(e) {
  for (var t = Vg(e), n = t.length; n--; ) {
    var r = t[n], s = e[r];
    t[n] = [r, s, Gg(s)];
  }
  return t;
}
function Zg(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function k5(e) {
  var t = w5(e);
  return t.length == 1 && t[0][2] ? Zg(t[0][0], t[0][1]) : function(n) {
    return n === e || y5(n, e, t);
  };
}
function C5(e, t) {
  return e != null && t in Object(e);
}
function x5(e, t, n) {
  t = Ug(t, e);
  for (var r = -1, s = t.length, o = !1; ++r < s; ) {
    var i = Wi(t[r]);
    if (!(o = e != null && n(e, i)))
      break;
    e = e[i];
  }
  return o || ++r != s ? o : (s = e == null ? 0 : e.length, !!s && pf(s) && Ng(i, s) && (er(e) || qg(e)));
}
function E5(e, t) {
  return e != null && x5(e, t, C5);
}
var S5 = 1, A5 = 2;
function T5(e, t) {
  return hf(e) && Gg(t) ? Zg(Wi(e), t) : function(n) {
    var r = rn(n, e);
    return r === void 0 && r === t ? E5(n, e) : Gi(t, r, S5 | A5);
  };
}
function M5(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function $5(e) {
  return function(t) {
    return Kg(t, e);
  };
}
function I5(e) {
  return hf(e) ? M5(Wi(e)) : $5(e);
}
function L5(e) {
  return typeof e == "function" ? e : e == null ? LC : typeof e == "object" ? er(e) ? T5(e[0], e[1]) : k5(e) : I5(e);
}
var La = function() {
  return Bn.Date.now();
}, O5 = "Expected a function", R5 = Math.max, P5 = Math.min;
function bu(e, t, n) {
  var r, s, o, i, a, l, u = 0, f = !1, c = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(O5);
  t = l0(t) || 0, _o(n) && (f = !!n.leading, c = "maxWait" in n, o = c ? R5(l0(n.maxWait) || 0, t) : o, p = "trailing" in n ? !!n.trailing : p);
  function d(x) {
    var M = r, $ = s;
    return r = s = void 0, u = x, i = e.apply($, M), i;
  }
  function m(x) {
    return u = x, a = setTimeout(h, t), f ? d(x) : i;
  }
  function g(x) {
    var M = x - l, $ = x - u, O = t - M;
    return c ? P5(O, o - $) : O;
  }
  function C(x) {
    var M = x - l, $ = x - u;
    return l === void 0 || M >= t || M < 0 || c && $ >= o;
  }
  function h() {
    var x = La();
    if (C(x))
      return k(x);
    a = setTimeout(h, g(x));
  }
  function k(x) {
    return a = void 0, p && r ? d(x) : (r = s = void 0, i);
  }
  function y() {
    a !== void 0 && clearTimeout(a), u = 0, r = l = s = a = void 0;
  }
  function _() {
    return a === void 0 ? i : k(La());
  }
  function E() {
    var x = La(), M = C(x);
    if (r = arguments, s = this, l = x, M) {
      if (a === void 0)
        return m(l);
      if (c)
        return clearTimeout(a), a = setTimeout(h, t), d(l);
    }
    return a === void 0 && (a = setTimeout(h, t)), i;
  }
  return E.cancel = y, E.flush = _, E;
}
function D5(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var s = r - 1;
  return ZC(e, L5(t), s);
}
function _i(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var s = e[t];
    r[s[0]] = s[1];
  }
  return r;
}
function _u(e, t) {
  return Gi(e, t);
}
function Kr(e) {
  return e == null;
}
function N5(e) {
  return e === void 0;
}
const Xg = (e) => e === void 0, mf = (e) => typeof e == "boolean", vt = (e) => typeof e == "number", cs = (e) => typeof Element > "u" ? !1 : e instanceof Element, B5 = (e) => Ke(e) ? !Number.isNaN(Number(e)) : !1, F5 = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
class q5 extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function z5(e, t) {
  throw new q5(`[${e}] ${t}`);
}
function yo(e, t = "px") {
  if (!e)
    return "";
  if (vt(e) || B5(e))
    return `${e}${t}`;
  if (Ke(e))
    return e;
}
function H5(e, t) {
  if (!Nt)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let r = t.offsetParent;
  for (; r !== null && e !== r && e.contains(r); )
    n.push(r), r = r.offsetParent;
  const s = t.offsetTop + n.reduce((l, u) => l + u.offsetTop, 0), o = s + t.offsetHeight, i = e.scrollTop, a = i + e.clientHeight;
  s < i ? e.scrollTop = s : o > a && (e.scrollTop = o - e.clientHeight);
}
/*! Element Plus Icons Vue v2.3.1 */
var j5 = /* @__PURE__ */ re({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Yg = j5, V5 = /* @__PURE__ */ re({
  name: "ArrowLeft",
  __name: "arrow-left",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
}), U5 = V5, K5 = /* @__PURE__ */ re({
  name: "ArrowRight",
  __name: "arrow-right",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
}), W5 = K5, G5 = /* @__PURE__ */ re({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      v("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), Z5 = G5, X5 = /* @__PURE__ */ re({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      v("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), vf = X5, Y5 = /* @__PURE__ */ re({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), yu = Y5, J5 = /* @__PURE__ */ re({
  name: "DArrowLeft",
  __name: "d-arrow-left",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
      })
    ]));
  }
}), Q5 = J5, e8 = /* @__PURE__ */ re({
  name: "DArrowRight",
  __name: "d-arrow-right",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
      })
    ]));
  }
}), t8 = e8, n8 = /* @__PURE__ */ re({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      v("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), r8 = n8, o8 = /* @__PURE__ */ re({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), Jg = o8, s8 = /* @__PURE__ */ re({
  name: "MoreFilled",
  __name: "more-filled",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224"
      })
    ]));
  }
}), A0 = s8, i8 = /* @__PURE__ */ re({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), a8 = i8;
const Qg = "__epPropKey", Ne = (e) => e, l8 = (e) => Fe(e) && !!e[Qg], Zi = (e, t) => {
  if (!Fe(e) || l8(e))
    return e;
  const { values: n, required: r, default: s, type: o, validator: i } = e, l = {
    type: o,
    required: !!r,
    validator: n || i ? (u) => {
      let f = !1, c = [];
      if (n && (c = Array.from(n), Xe(e, "default") && c.push(s), f || (f = c.includes(u))), i && (f || (f = i(u))), !f && c.length > 0) {
        const p = [...new Set(c)].map((d) => JSON.stringify(d)).join(", ");
        Ow(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [Qg]: !0
  };
  return Xe(e, "default") && (l.default = s), l;
}, ot = (e) => _i(Object.entries(e).map(([t, n]) => [
  t,
  Zi(n, t)
])), En = Ne([
  String,
  Object,
  Function
]), em = {
  validating: Jg,
  success: Z5,
  error: vf
}, An = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, c8 = (e, t) => (e.install = (n) => {
  n.directive(t, e);
}, e), bf = (e) => (e.install = Dt, e), Yn = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Wt = "update:modelValue", _f = "change", _s = ["", "default", "small", "large"], u8 = {
  large: 40,
  default: 32,
  small: 24
}, f8 = (e) => u8[e || "default"], d8 = (e) => ["", ..._s].includes(e), tm = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e), yf = (e) => e, p8 = ["class", "style"], h8 = /^on[A-Z]/, g8 = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = P(() => ((n == null ? void 0 : n.value) || []).concat(p8)), s = _t();
  return P(s ? () => {
    var o;
    return _i(Object.entries((o = s.proxy) == null ? void 0 : o.$attrs).filter(([i]) => !r.value.includes(i) && !(t && h8.test(i))));
  } : () => ({}));
}, nm = ({ from: e, replacement: t, scope: n, version: r, ref: s, type: o = "API" }, i) => {
  Te(() => b(i), (a) => {
  }, {
    immediate: !0
  });
};
var m8 = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const v8 = (e) => (t, n) => b8(t, n, b(e)), b8 = (e, t, n) => rn(n, e, e).replace(/\{(\w+)\}/g, (r, s) => {
  var o;
  return `${(o = t == null ? void 0 : t[s]) != null ? o : `{${s}}`}`;
}), _8 = (e) => {
  const t = P(() => b(e).name), n = bt(e) ? e : W(e);
  return {
    lang: t,
    locale: n,
    t: v8(e)
  };
}, y8 = Symbol("localeContextKey"), Tn = (e) => {
  const t = qe(y8, W());
  return _8(P(() => t.value || m8));
}, Oa = "el", w8 = "is-", Dr = (e, t, n, r, s) => {
  let o = `${e}-${t}`;
  return n && (o += `-${n}`), r && (o += `__${r}`), s && (o += `--${s}`), o;
}, k8 = Symbol("namespaceContextKey"), wf = (e) => {
  const t = _t() ? qe(k8, W(Oa)) : W(Oa);
  return P(() => b(t) || Oa);
}, Qe = (e, t) => {
  const n = wf();
  return {
    namespace: n,
    b: (g = "") => Dr(n.value, e, g, "", ""),
    e: (g) => g ? Dr(n.value, e, "", g, "") : "",
    m: (g) => g ? Dr(n.value, e, "", "", g) : "",
    be: (g, C) => g && C ? Dr(n.value, e, g, C, "") : "",
    em: (g, C) => g && C ? Dr(n.value, e, "", g, C) : "",
    bm: (g, C) => g && C ? Dr(n.value, e, g, "", C) : "",
    bem: (g, C, h) => g && C && h ? Dr(n.value, e, g, C, h) : "",
    is: (g, ...C) => {
      const h = C.length >= 1 ? C[0] : !0;
      return g && h ? `${w8}${g}` : "";
    },
    cssVar: (g) => {
      const C = {};
      for (const h in g)
        g[h] && (C[`--${n.value}-${h}`] = g[h]);
      return C;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const C = {};
      for (const h in g)
        g[h] && (C[`--${n.value}-${e}-${h}`] = g[h]);
      return C;
    },
    cssVarBlockName: (g) => `--${n.value}-${e}-${g}`
  };
}, C8 = Zi({
  type: Ne(Boolean),
  default: null
}), x8 = Zi({
  type: Ne(Function)
}), E8 = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], s = {
    [e]: C8,
    [n]: x8
  };
  return {
    useModelToggle: ({
      indicator: i,
      toggleReason: a,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: f,
      onHide: c
    }) => {
      const p = _t(), { emit: d } = p, m = p.props, g = P(() => Ee(m[n])), C = P(() => m[e] === null), h = (M) => {
        i.value !== !0 && (i.value = !0, a && (a.value = M), Ee(f) && f(M));
      }, k = (M) => {
        i.value !== !1 && (i.value = !1, a && (a.value = M), Ee(c) && c(M));
      }, y = (M) => {
        if (m.disabled === !0 || Ee(u) && !u())
          return;
        const $ = g.value && Nt;
        $ && d(t, !0), (C.value || !$) && h(M);
      }, _ = (M) => {
        if (m.disabled === !0 || !Nt)
          return;
        const $ = g.value && Nt;
        $ && d(t, !1), (C.value || !$) && k(M);
      }, E = (M) => {
        mf(M) && (m.disabled && M ? g.value && d(t, !1) : i.value !== M && (M ? h() : k()));
      }, x = () => {
        i.value ? _() : y();
      };
      return Te(() => m[e], E), l && p.appContext.config.globalProperties.$route !== void 0 && Te(() => ({
        ...p.proxy.$route
      }), () => {
        l.value && i.value && _();
      }), it(() => {
        E(m[e]);
      }), {
        hide: _,
        show: y,
        toggle: x,
        hasUpdateHandler: g
      };
    },
    useModelToggleProps: s,
    useModelToggleEmits: r
  };
}, rm = (e) => {
  const t = _t();
  return P(() => {
    var n, r;
    return (r = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
};
var Zt = "top", pn = "bottom", hn = "right", Xt = "left", kf = "auto", ys = [Zt, pn, hn, Xt], wo = "start", us = "end", S8 = "clippingParents", om = "viewport", Do = "popper", A8 = "reference", T0 = ys.reduce(function(e, t) {
  return e.concat([t + "-" + wo, t + "-" + us]);
}, []), Xi = [].concat(ys, [kf]).reduce(function(e, t) {
  return e.concat([t, t + "-" + wo, t + "-" + us]);
}, []), T8 = "beforeRead", M8 = "read", $8 = "afterRead", I8 = "beforeMain", L8 = "main", O8 = "afterMain", R8 = "beforeWrite", P8 = "write", D8 = "afterWrite", N8 = [T8, M8, $8, I8, L8, O8, R8, P8, D8];
function Nn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Mn(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ko(e) {
  var t = Mn(e).Element;
  return e instanceof t || e instanceof Element;
}
function un(e) {
  var t = Mn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Cf(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Mn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function B8(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !un(o) || !Nn(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(i) {
      var a = s[i];
      a === !1 ? o.removeAttribute(i) : o.setAttribute(i, a === !0 ? "" : a);
    }));
  });
}
function F8(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var s = t.elements[r], o = t.attributes[r] || {}, i = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), a = i.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !un(s) || !Nn(s) || (Object.assign(s.style, a), Object.keys(o).forEach(function(l) {
        s.removeAttribute(l);
      }));
    });
  };
}
var sm = { name: "applyStyles", enabled: !0, phase: "write", fn: B8, effect: F8, requires: ["computeStyles"] };
function Dn(e) {
  return e.split("-")[0];
}
var Wr = Math.max, yi = Math.min, Co = Math.round;
function xo(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), r = 1, s = 1;
  if (un(e) && t) {
    var o = e.offsetHeight, i = e.offsetWidth;
    i > 0 && (r = Co(n.width) / i || 1), o > 0 && (s = Co(n.height) / o || 1);
  }
  return { width: n.width / r, height: n.height / s, top: n.top / s, right: n.right / r, bottom: n.bottom / s, left: n.left / r, x: n.left / r, y: n.top / s };
}
function xf(e) {
  var t = xo(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function im(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Cf(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function tr(e) {
  return Mn(e).getComputedStyle(e);
}
function q8(e) {
  return ["table", "td", "th"].indexOf(Nn(e)) >= 0;
}
function Mr(e) {
  return ((ko(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Yi(e) {
  return Nn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Cf(e) ? e.host : null) || Mr(e);
}
function M0(e) {
  return !un(e) || tr(e).position === "fixed" ? null : e.offsetParent;
}
function z8(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && un(e)) {
    var r = tr(e);
    if (r.position === "fixed") return null;
  }
  var s = Yi(e);
  for (Cf(s) && (s = s.host); un(s) && ["html", "body"].indexOf(Nn(s)) < 0; ) {
    var o = tr(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none") return s;
    s = s.parentNode;
  }
  return null;
}
function ws(e) {
  for (var t = Mn(e), n = M0(e); n && q8(n) && tr(n).position === "static"; ) n = M0(n);
  return n && (Nn(n) === "html" || Nn(n) === "body" && tr(n).position === "static") ? t : n || z8(e) || t;
}
function Ef(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Zo(e, t, n) {
  return Wr(e, yi(t, n));
}
function H8(e, t, n) {
  var r = Zo(e, t, n);
  return r > n ? n : r;
}
function am() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function lm(e) {
  return Object.assign({}, am(), e);
}
function cm(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var j8 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, lm(typeof e != "number" ? e : cm(e, ys));
};
function V8(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, i = n.modifiersData.popperOffsets, a = Dn(n.placement), l = Ef(a), u = [Xt, hn].indexOf(a) >= 0, f = u ? "height" : "width";
  if (!(!o || !i)) {
    var c = j8(s.padding, n), p = xf(o), d = l === "y" ? Zt : Xt, m = l === "y" ? pn : hn, g = n.rects.reference[f] + n.rects.reference[l] - i[l] - n.rects.popper[f], C = i[l] - n.rects.reference[l], h = ws(o), k = h ? l === "y" ? h.clientHeight || 0 : h.clientWidth || 0 : 0, y = g / 2 - C / 2, _ = c[d], E = k - p[f] - c[m], x = k / 2 - p[f] / 2 + y, M = Zo(_, x, E), $ = l;
    n.modifiersData[r] = (t = {}, t[$] = M, t.centerOffset = M - x, t);
  }
}
function U8(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !im(t.elements.popper, s) || (t.elements.arrow = s));
}
var K8 = { name: "arrow", enabled: !0, phase: "main", fn: V8, effect: U8, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Eo(e) {
  return e.split("-")[1];
}
var W8 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function G8(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return { x: Co(t * s) / s || 0, y: Co(n * s) / s || 0 };
}
function $0(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, i = e.offsets, a = e.position, l = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, c = e.isFixed, p = i.x, d = p === void 0 ? 0 : p, m = i.y, g = m === void 0 ? 0 : m, C = typeof f == "function" ? f({ x: d, y: g }) : { x: d, y: g };
  d = C.x, g = C.y;
  var h = i.hasOwnProperty("x"), k = i.hasOwnProperty("y"), y = Xt, _ = Zt, E = window;
  if (u) {
    var x = ws(n), M = "clientHeight", $ = "clientWidth";
    if (x === Mn(n) && (x = Mr(n), tr(x).position !== "static" && a === "absolute" && (M = "scrollHeight", $ = "scrollWidth")), x = x, s === Zt || (s === Xt || s === hn) && o === us) {
      _ = pn;
      var O = c && x === E && E.visualViewport ? E.visualViewport.height : x[M];
      g -= O - r.height, g *= l ? 1 : -1;
    }
    if (s === Xt || (s === Zt || s === pn) && o === us) {
      y = hn;
      var D = c && x === E && E.visualViewport ? E.visualViewport.width : x[$];
      d -= D - r.width, d *= l ? 1 : -1;
    }
  }
  var B = Object.assign({ position: a }, u && W8), N = f === !0 ? G8({ x: d, y: g }) : { x: d, y: g };
  if (d = N.x, g = N.y, l) {
    var oe;
    return Object.assign({}, B, (oe = {}, oe[_] = k ? "0" : "", oe[y] = h ? "0" : "", oe.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + g + "px)" : "translate3d(" + d + "px, " + g + "px, 0)", oe));
  }
  return Object.assign({}, B, (t = {}, t[_] = k ? g + "px" : "", t[y] = h ? d + "px" : "", t.transform = "", t));
}
function Z8(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, i = o === void 0 ? !0 : o, a = n.roundOffsets, l = a === void 0 ? !0 : a, u = { placement: Dn(t.placement), variation: Eo(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: s, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, $0(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: i, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, $0(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var um = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Z8, data: {} }, Ds = { passive: !0 };
function X8(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, i = r.resize, a = i === void 0 ? !0 : i, l = Mn(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, Ds);
  }), a && l.addEventListener("resize", n.update, Ds), function() {
    o && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Ds);
    }), a && l.removeEventListener("resize", n.update, Ds);
  };
}
var fm = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: X8, data: {} }, Y8 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ti(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Y8[t];
  });
}
var J8 = { start: "end", end: "start" };
function I0(e) {
  return e.replace(/start|end/g, function(t) {
    return J8[t];
  });
}
function Sf(e) {
  var t = Mn(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Af(e) {
  return xo(Mr(e)).left + Sf(e).scrollLeft;
}
function Q8(e) {
  var t = Mn(e), n = Mr(e), r = t.visualViewport, s = n.clientWidth, o = n.clientHeight, i = 0, a = 0;
  return r && (s = r.width, o = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = r.offsetLeft, a = r.offsetTop)), { width: s, height: o, x: i + Af(e), y: a };
}
function eE(e) {
  var t, n = Mr(e), r = Sf(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = Wr(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), i = Wr(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -r.scrollLeft + Af(e), l = -r.scrollTop;
  return tr(s || n).direction === "rtl" && (a += Wr(n.clientWidth, s ? s.clientWidth : 0) - o), { width: o, height: i, x: a, y: l };
}
function Tf(e) {
  var t = tr(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function dm(e) {
  return ["html", "body", "#document"].indexOf(Nn(e)) >= 0 ? e.ownerDocument.body : un(e) && Tf(e) ? e : dm(Yi(e));
}
function Xo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = dm(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Mn(r), i = s ? [o].concat(o.visualViewport || [], Tf(r) ? r : []) : r, a = t.concat(i);
  return s ? a : a.concat(Xo(Yi(i)));
}
function wu(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function tE(e) {
  var t = xo(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function L0(e, t) {
  return t === om ? wu(Q8(e)) : ko(t) ? tE(t) : wu(eE(Mr(e)));
}
function nE(e) {
  var t = Xo(Yi(e)), n = ["absolute", "fixed"].indexOf(tr(e).position) >= 0, r = n && un(e) ? ws(e) : e;
  return ko(r) ? t.filter(function(s) {
    return ko(s) && im(s, r) && Nn(s) !== "body";
  }) : [];
}
function rE(e, t, n) {
  var r = t === "clippingParents" ? nE(e) : [].concat(t), s = [].concat(r, [n]), o = s[0], i = s.reduce(function(a, l) {
    var u = L0(e, l);
    return a.top = Wr(u.top, a.top), a.right = yi(u.right, a.right), a.bottom = yi(u.bottom, a.bottom), a.left = Wr(u.left, a.left), a;
  }, L0(e, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function pm(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? Dn(r) : null, o = r ? Eo(r) : null, i = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, l;
  switch (s) {
    case Zt:
      l = { x: i, y: t.y - n.height };
      break;
    case pn:
      l = { x: i, y: t.y + t.height };
      break;
    case hn:
      l = { x: t.x + t.width, y: a };
      break;
    case Xt:
      l = { x: t.x - n.width, y: a };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = s ? Ef(s) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (o) {
      case wo:
        l[u] = l[u] - (t[f] / 2 - n[f] / 2);
        break;
      case us:
        l[u] = l[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return l;
}
function fs(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.boundary, i = o === void 0 ? S8 : o, a = n.rootBoundary, l = a === void 0 ? om : a, u = n.elementContext, f = u === void 0 ? Do : u, c = n.altBoundary, p = c === void 0 ? !1 : c, d = n.padding, m = d === void 0 ? 0 : d, g = lm(typeof m != "number" ? m : cm(m, ys)), C = f === Do ? A8 : Do, h = e.rects.popper, k = e.elements[p ? C : f], y = rE(ko(k) ? k : k.contextElement || Mr(e.elements.popper), i, l), _ = xo(e.elements.reference), E = pm({ reference: _, element: h, placement: s }), x = wu(Object.assign({}, h, E)), M = f === Do ? x : _, $ = { top: y.top - M.top + g.top, bottom: M.bottom - y.bottom + g.bottom, left: y.left - M.left + g.left, right: M.right - y.right + g.right }, O = e.modifiersData.offset;
  if (f === Do && O) {
    var D = O[s];
    Object.keys($).forEach(function(B) {
      var N = [hn, pn].indexOf(B) >= 0 ? 1 : -1, oe = [Zt, pn].indexOf(B) >= 0 ? "y" : "x";
      $[B] += D[oe] * N;
    });
  }
  return $;
}
function oE(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, i = n.padding, a = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Xi : l, f = Eo(r), c = f ? a ? T0 : T0.filter(function(m) {
    return Eo(m) === f;
  }) : ys, p = c.filter(function(m) {
    return u.indexOf(m) >= 0;
  });
  p.length === 0 && (p = c);
  var d = p.reduce(function(m, g) {
    return m[g] = fs(e, { placement: g, boundary: s, rootBoundary: o, padding: i })[Dn(g)], m;
  }, {});
  return Object.keys(d).sort(function(m, g) {
    return d[m] - d[g];
  });
}
function sE(e) {
  if (Dn(e) === kf) return [];
  var t = ti(e);
  return [I0(e), t, I0(t)];
}
function iE(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, i = n.altAxis, a = i === void 0 ? !0 : i, l = n.fallbackPlacements, u = n.padding, f = n.boundary, c = n.rootBoundary, p = n.altBoundary, d = n.flipVariations, m = d === void 0 ? !0 : d, g = n.allowedAutoPlacements, C = t.options.placement, h = Dn(C), k = h === C, y = l || (k || !m ? [ti(C)] : sE(C)), _ = [C].concat(y).reduce(function(Se, Re) {
      return Se.concat(Dn(Re) === kf ? oE(t, { placement: Re, boundary: f, rootBoundary: c, padding: u, flipVariations: m, allowedAutoPlacements: g }) : Re);
    }, []), E = t.rects.reference, x = t.rects.popper, M = /* @__PURE__ */ new Map(), $ = !0, O = _[0], D = 0; D < _.length; D++) {
      var B = _[D], N = Dn(B), oe = Eo(B) === wo, q = [Zt, pn].indexOf(N) >= 0, ie = q ? "width" : "height", j = fs(t, { placement: B, boundary: f, rootBoundary: c, altBoundary: p, padding: u }), V = q ? oe ? hn : Xt : oe ? pn : Zt;
      E[ie] > x[ie] && (V = ti(V));
      var H = ti(V), J = [];
      if (o && J.push(j[N] <= 0), a && J.push(j[V] <= 0, j[H] <= 0), J.every(function(Se) {
        return Se;
      })) {
        O = B, $ = !1;
        break;
      }
      M.set(B, J);
    }
    if ($) for (var L = m ? 3 : 1, Z = function(Se) {
      var Re = _.find(function(Pe) {
        var We = M.get(Pe);
        if (We) return We.slice(0, Se).every(function(ze) {
          return ze;
        });
      });
      if (Re) return O = Re, "break";
    }, K = L; K > 0; K--) {
      var me = Z(K);
      if (me === "break") break;
    }
    t.placement !== O && (t.modifiersData[r]._skip = !0, t.placement = O, t.reset = !0);
  }
}
var aE = { name: "flip", enabled: !0, phase: "main", fn: iE, requiresIfExists: ["offset"], data: { _skip: !1 } };
function O0(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function R0(e) {
  return [Zt, hn, pn, Xt].some(function(t) {
    return e[t] >= 0;
  });
}
function lE(e) {
  var t = e.state, n = e.name, r = t.rects.reference, s = t.rects.popper, o = t.modifiersData.preventOverflow, i = fs(t, { elementContext: "reference" }), a = fs(t, { altBoundary: !0 }), l = O0(i, r), u = O0(a, s, o), f = R0(l), c = R0(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: c }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": c });
}
var cE = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: lE };
function uE(e, t, n) {
  var r = Dn(e), s = [Xt, Zt].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, i = o[0], a = o[1];
  return i = i || 0, a = (a || 0) * s, [Xt, hn].indexOf(r) >= 0 ? { x: a, y: i } : { x: i, y: a };
}
function fE(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, i = Xi.reduce(function(f, c) {
    return f[c] = uE(c, t.rects, o), f;
  }, {}), a = i[t.placement], l = a.x, u = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = i;
}
var dE = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: fE };
function pE(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = pm({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var hm = { name: "popperOffsets", enabled: !0, phase: "read", fn: pE, data: {} };
function hE(e) {
  return e === "x" ? "y" : "x";
}
function gE(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, i = n.altAxis, a = i === void 0 ? !1 : i, l = n.boundary, u = n.rootBoundary, f = n.altBoundary, c = n.padding, p = n.tether, d = p === void 0 ? !0 : p, m = n.tetherOffset, g = m === void 0 ? 0 : m, C = fs(t, { boundary: l, rootBoundary: u, padding: c, altBoundary: f }), h = Dn(t.placement), k = Eo(t.placement), y = !k, _ = Ef(h), E = hE(_), x = t.modifiersData.popperOffsets, M = t.rects.reference, $ = t.rects.popper, O = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, D = typeof O == "number" ? { mainAxis: O, altAxis: O } : Object.assign({ mainAxis: 0, altAxis: 0 }, O), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, N = { x: 0, y: 0 };
  if (x) {
    if (o) {
      var oe, q = _ === "y" ? Zt : Xt, ie = _ === "y" ? pn : hn, j = _ === "y" ? "height" : "width", V = x[_], H = V + C[q], J = V - C[ie], L = d ? -$[j] / 2 : 0, Z = k === wo ? M[j] : $[j], K = k === wo ? -$[j] : -M[j], me = t.elements.arrow, Se = d && me ? xf(me) : { width: 0, height: 0 }, Re = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : am(), Pe = Re[q], We = Re[ie], ze = Zo(0, M[j], Se[j]), dt = y ? M[j] / 2 - L - ze - Pe - D.mainAxis : Z - ze - Pe - D.mainAxis, pe = y ? -M[j] / 2 + L + ze + We + D.mainAxis : K + ze + We + D.mainAxis, Me = t.elements.arrow && ws(t.elements.arrow), T = Me ? _ === "y" ? Me.clientTop || 0 : Me.clientLeft || 0 : 0, I = (oe = B == null ? void 0 : B[_]) != null ? oe : 0, z = V + dt - I - T, Y = V + pe - I, X = Zo(d ? yi(H, z) : H, V, d ? Wr(J, Y) : J);
      x[_] = X, N[_] = X - V;
    }
    if (a) {
      var ee, ae = _ === "x" ? Zt : Xt, se = _ === "x" ? pn : hn, ne = x[E], te = E === "y" ? "height" : "width", ye = ne + C[ae], fe = ne - C[se], ve = [Zt, Xt].indexOf(h) !== -1, U = (ee = B == null ? void 0 : B[E]) != null ? ee : 0, le = ve ? ye : ne - M[te] - $[te] - U + D.altAxis, Ae = ve ? ne + M[te] + $[te] - U - D.altAxis : fe, Oe = d && ve ? H8(le, ne, Ae) : Zo(d ? le : ye, ne, d ? Ae : fe);
      x[E] = Oe, N[E] = Oe - ne;
    }
    t.modifiersData[r] = N;
  }
}
var mE = { name: "preventOverflow", enabled: !0, phase: "main", fn: gE, requiresIfExists: ["offset"] };
function vE(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function bE(e) {
  return e === Mn(e) || !un(e) ? Sf(e) : vE(e);
}
function _E(e) {
  var t = e.getBoundingClientRect(), n = Co(t.width) / e.offsetWidth || 1, r = Co(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function yE(e, t, n) {
  n === void 0 && (n = !1);
  var r = un(t), s = un(t) && _E(t), o = Mr(t), i = xo(e, s), a = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((Nn(t) !== "body" || Tf(o)) && (a = bE(t)), un(t) ? (l = xo(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = Af(o))), { x: i.left + a.scrollLeft - l.x, y: i.top + a.scrollTop - l.y, width: i.width, height: i.height };
}
function wE(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function s(o) {
    n.add(o.name);
    var i = [].concat(o.requires || [], o.requiresIfExists || []);
    i.forEach(function(a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && s(l);
      }
    }), r.push(o);
  }
  return e.forEach(function(o) {
    n.has(o.name) || s(o);
  }), r;
}
function kE(e) {
  var t = wE(e);
  return N8.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function CE(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function xE(e) {
  var t = e.reduce(function(n, r) {
    var s = n[r.name];
    return n[r.name] = s ? Object.assign({}, s, r, { options: Object.assign({}, s.options, r.options), data: Object.assign({}, s.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var P0 = { placement: "bottom", modifiers: [], strategy: "absolute" };
function D0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Mf(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? P0 : s;
  return function(i, a, l) {
    l === void 0 && (l = o);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, P0, o), modifiersData: {}, elements: { reference: i, popper: a }, attributes: {}, styles: {} }, f = [], c = !1, p = { state: u, setOptions: function(g) {
      var C = typeof g == "function" ? g(u.options) : g;
      m(), u.options = Object.assign({}, o, u.options, C), u.scrollParents = { reference: ko(i) ? Xo(i) : i.contextElement ? Xo(i.contextElement) : [], popper: Xo(a) };
      var h = kE(xE([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = h.filter(function(k) {
        return k.enabled;
      }), d(), p.update();
    }, forceUpdate: function() {
      if (!c) {
        var g = u.elements, C = g.reference, h = g.popper;
        if (D0(C, h)) {
          u.rects = { reference: yE(C, ws(h), u.options.strategy === "fixed"), popper: xf(h) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function($) {
            return u.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var k = 0; k < u.orderedModifiers.length; k++) {
            if (u.reset === !0) {
              u.reset = !1, k = -1;
              continue;
            }
            var y = u.orderedModifiers[k], _ = y.fn, E = y.options, x = E === void 0 ? {} : E, M = y.name;
            typeof _ == "function" && (u = _({ state: u, options: x, name: M, instance: p }) || u);
          }
        }
      }
    }, update: CE(function() {
      return new Promise(function(g) {
        p.forceUpdate(), g(u);
      });
    }), destroy: function() {
      m(), c = !0;
    } };
    if (!D0(i, a)) return p;
    p.setOptions(l).then(function(g) {
      !c && l.onFirstUpdate && l.onFirstUpdate(g);
    });
    function d() {
      u.orderedModifiers.forEach(function(g) {
        var C = g.name, h = g.options, k = h === void 0 ? {} : h, y = g.effect;
        if (typeof y == "function") {
          var _ = y({ state: u, name: C, instance: p, options: k }), E = function() {
          };
          f.push(_ || E);
        }
      });
    }
    function m() {
      f.forEach(function(g) {
        return g();
      }), f = [];
    }
    return p;
  };
}
Mf();
var EE = [fm, hm, um, sm];
Mf({ defaultModifiers: EE });
var SE = [fm, hm, um, sm, dE, aE, mE, K8, cE], AE = Mf({ defaultModifiers: SE });
const TE = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = ME(l);
      Object.assign(i.value, u);
    },
    requires: ["computeStyles"]
  }, s = P(() => {
    const { onFirstUpdate: l, placement: u, strategy: f, modifiers: c } = b(n);
    return {
      onFirstUpdate: l,
      placement: u || "bottom",
      strategy: f || "absolute",
      modifiers: [
        ...c || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), o = Zn(), i = W({
    styles: {
      popper: {
        position: b(s).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), a = () => {
    o.value && (o.value.destroy(), o.value = void 0);
  };
  return Te(s, (l) => {
    const u = b(o);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), Te([e, t], ([l, u]) => {
    a(), !(!l || !u) && (o.value = AE(l, u, b(s)));
  }), Yt(() => {
    a();
  }), {
    state: P(() => {
      var l;
      return { ...((l = b(o)) == null ? void 0 : l.state) || {} };
    }),
    styles: P(() => b(i).styles),
    attributes: P(() => b(i).attributes),
    update: () => {
      var l;
      return (l = b(o)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = b(o)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: P(() => b(o))
  };
};
function ME(e) {
  const t = Object.keys(e.elements), n = _i(t.map((s) => [s, e.styles[s] || {}])), r = _i(t.map((s) => [s, e.attributes[s]]));
  return {
    styles: n,
    attributes: r
  };
}
function N0() {
  let e;
  const t = (r, s) => {
    n(), e = window.setTimeout(r, s);
  }, n = () => window.clearTimeout(e);
  return uf(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const B0 = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, $E = Symbol("elIdInjection"), gm = () => _t() ? qe($E, B0) : B0, Ji = (e) => {
  const t = gm(), n = wf();
  return P(() => b(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let io = [];
const F0 = (e) => {
  const t = e;
  t.key === Yn.esc && io.forEach((n) => n(t));
}, IE = (e) => {
  it(() => {
    io.length === 0 && document.addEventListener("keydown", F0), Nt && io.push(e);
  }), Yt(() => {
    io = io.filter((t) => t !== e), io.length === 0 && Nt && document.removeEventListener("keydown", F0);
  });
};
let q0;
const mm = () => {
  const e = wf(), t = gm(), n = P(() => `${e.value}-popper-container-${t.prefix}`), r = P(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, LE = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, OE = () => {
  const { id: e, selector: t } = mm();
  return H1(() => {
    Nt && !q0 && !document.body.querySelector(t.value) && (q0 = LE(e.value));
  }), {
    id: e,
    selector: t
  };
}, RE = ot({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
}), PE = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: s
}) => {
  const { registerTimeout: o } = N0(), {
    registerTimeout: i,
    cancelTimeout: a
  } = N0();
  return {
    onOpen: (f) => {
      o(() => {
        r(f);
        const c = b(n);
        vt(c) && c > 0 && i(() => {
          s(f);
        }, c);
      }, b(e));
    },
    onClose: (f) => {
      a(), o(() => {
        s(f);
      }, b(t));
    }
  };
}, vm = Symbol("elForwardRef"), DE = (e) => {
  Kt(vm, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, NE = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), z0 = W(0), BE = 2e3, FE = Symbol("zIndexContextKey"), qE = (e) => {
  const t = _t() ? qe(FE, void 0) : void 0, n = P(() => {
    const o = b(t);
    return vt(o) ? o : BE;
  }), r = P(() => n.value + z0.value);
  return {
    initialZIndex: n,
    currentZIndex: r,
    nextZIndex: () => (z0.value++, r.value)
  };
};
function zE(e) {
  const t = W();
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: s, selectionEnd: o, value: i } = e.value;
    if (s == null || o == null)
      return;
    const a = i.slice(0, Math.max(0, s)), l = i.slice(Math.max(0, o));
    t.value = {
      selectionStart: s,
      selectionEnd: o,
      value: i,
      beforeTxt: a,
      afterTxt: l
    };
  }
  function r() {
    if (e.value == null || t.value == null)
      return;
    const { value: s } = e.value, { beforeTxt: o, afterTxt: i, selectionStart: a } = t.value;
    if (o == null || i == null || a == null)
      return;
    let l = s.length;
    if (s.endsWith(i))
      l = s.length - i.length;
    else if (s.startsWith(o))
      l = o.length;
    else {
      const u = o[a - 1], f = s.indexOf(u, a - 1);
      f !== -1 && (l = f + 1);
    }
    e.value.setSelectionRange(l, l);
  }
  return [n, r];
}
const $f = Zi({
  type: String,
  values: _s,
  required: !1
}), HE = Symbol("size"), jE = () => {
  const e = qe(HE, {});
  return P(() => b(e.size) || "");
};
function bm(e, { afterFocus: t, beforeBlur: n, afterBlur: r } = {}) {
  const s = _t(), { emit: o } = s, i = Zn(), a = W(!1), l = (c) => {
    a.value || (a.value = !0, o("focus", c), t == null || t());
  }, u = (c) => {
    var p;
    Ee(n) && n(c) || c.relatedTarget && ((p = i.value) != null && p.contains(c.relatedTarget)) || (a.value = !1, o("blur", c), r == null || r());
  }, f = () => {
    var c;
    (c = e.value) == null || c.focus();
  };
  return Te(i, (c) => {
    c && c.setAttribute("tabindex", "-1");
  }), Ur(i, "click", f), {
    wrapperRef: i,
    isFocused: a,
    handleFocus: l,
    handleBlur: u
  };
}
const VE = Symbol(), H0 = W();
function UE(e, t = void 0) {
  const n = _t() ? qe(VE, H0) : H0;
  return P(() => {
    var r, s;
    return (s = (r = n.value) == null ? void 0 : r[e]) != null ? s : t;
  });
}
var Ye = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
};
const KE = ot({
  size: {
    type: Ne([Number, String])
  },
  color: {
    type: String
  }
}), WE = /* @__PURE__ */ re({
  name: "ElIcon",
  inheritAttrs: !1
}), GE = /* @__PURE__ */ re({
  ...WE,
  props: KE,
  setup(e) {
    const t = e, n = Qe("icon"), r = P(() => {
      const { size: s, color: o } = t;
      return !s && !o ? {} : {
        fontSize: Xg(s) ? void 0 : yo(s),
        "--color": o
      };
    });
    return (s, o) => (w(), A("i", gt({
      class: b(n).b(),
      style: b(r)
    }, s.$attrs), [
      we(s.$slots, "default")
    ], 16));
  }
});
var ZE = /* @__PURE__ */ Ye(GE, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Gt = An(ZE), If = Symbol("formContextKey"), wi = Symbol("formItemContextKey"), ks = (e, t = {}) => {
  const n = W(void 0), r = t.prop ? n : rm("size"), s = t.global ? n : jE(), o = t.form ? { size: void 0 } : qe(If, void 0), i = t.formItem ? { size: void 0 } : qe(wi, void 0);
  return P(() => r.value || b(e) || (i == null ? void 0 : i.size) || (o == null ? void 0 : o.size) || s.value || "");
}, Qi = (e) => {
  const t = rm("disabled"), n = qe(If, void 0);
  return P(() => t.value || b(e) || (n == null ? void 0 : n.disabled) || !1);
}, ea = () => {
  const e = qe(If, void 0), t = qe(wi, void 0);
  return {
    form: e,
    formItem: t
  };
}, _m = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = W(!1)), r || (r = W(!1));
  const s = W();
  let o;
  const i = P(() => {
    var a;
    return !!(!e.label && t && t.inputIds && ((a = t.inputIds) == null ? void 0 : a.length) <= 1);
  });
  return it(() => {
    o = Te([yn(e, "id"), n], ([a, l]) => {
      const u = a ?? (l ? void 0 : Ji().value);
      u !== s.value && (t != null && t.removeInputId && (s.value && t.removeInputId(s.value), !(r != null && r.value) && !l && u && t.addInputId(u)), s.value = u);
    }, { immediate: !0 });
  }), Bi(() => {
    o && o(), t != null && t.removeInputId && s.value && t.removeInputId(s.value);
  }), {
    isLabeledByFormItem: i,
    inputId: s
  };
};
let vn;
const XE = `
  height:0 !important;
  visibility:hidden !important;
  ${dC() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, YE = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function JE(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), s = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: YE.map((i) => `${i}:${t.getPropertyValue(i)}`).join(";"), paddingSize: r, borderSize: s, boxSizing: n };
}
function j0(e, t = 1, n) {
  var r;
  vn || (vn = document.createElement("textarea"), document.body.appendChild(vn));
  const { paddingSize: s, borderSize: o, boxSizing: i, contextStyle: a } = JE(e);
  vn.setAttribute("style", `${a};${XE}`), vn.value = e.value || e.placeholder || "";
  let l = vn.scrollHeight;
  const u = {};
  i === "border-box" ? l = l + o : i === "content-box" && (l = l - s), vn.value = "";
  const f = vn.scrollHeight - s;
  if (vt(t)) {
    let c = f * t;
    i === "border-box" && (c = c + s + o), l = Math.max(c, l), u.minHeight = `${c}px`;
  }
  if (vt(n)) {
    let c = f * n;
    i === "border-box" && (c = c + s + o), l = Math.min(c, l);
  }
  return u.height = `${l}px`, (r = vn.parentNode) == null || r.removeChild(vn), vn = void 0, u;
}
const QE = ot({
  id: {
    type: String,
    default: void 0
  },
  size: $f,
  disabled: Boolean,
  modelValue: {
    type: Ne([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: Ne([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  showPassword: {
    type: Boolean,
    default: !1
  },
  showWordLimit: {
    type: Boolean,
    default: !1
  },
  suffixIcon: {
    type: En
  },
  prefixIcon: {
    type: En
  },
  containerRole: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: Ne([Object, Array, String]),
    default: () => yf({})
  },
  autofocus: {
    type: Boolean,
    default: !1
  }
}), eS = {
  [Wt]: (e) => Ke(e),
  input: (e) => Ke(e),
  change: (e) => Ke(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, tS = ["role"], nS = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus"], rS = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus"], oS = /* @__PURE__ */ re({
  name: "ElInput",
  inheritAttrs: !1
}), sS = /* @__PURE__ */ re({
  ...oS,
  props: QE,
  emits: eS,
  setup(e, { expose: t, emit: n }) {
    const r = e, s = Fi(), o = W1(), i = P(() => {
      const U = {};
      return r.containerRole === "combobox" && (U["aria-haspopup"] = s["aria-haspopup"], U["aria-owns"] = s["aria-owns"], U["aria-expanded"] = s["aria-expanded"]), U;
    }), a = P(() => [
      r.type === "textarea" ? C.b() : g.b(),
      g.m(d.value),
      g.is("disabled", m.value),
      g.is("exceed", Se.value),
      {
        [g.b("group")]: o.prepend || o.append,
        [g.bm("group", "append")]: o.append,
        [g.bm("group", "prepend")]: o.prepend,
        [g.m("prefix")]: o.prefix || r.prefixIcon,
        [g.m("suffix")]: o.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [g.bm("suffix", "password-clear")]: L.value && Z.value
      },
      s.class
    ]), l = P(() => [
      g.e("wrapper"),
      g.is("focus", D.value)
    ]), u = g8({
      excludeKeys: P(() => Object.keys(i.value))
    }), { form: f, formItem: c } = ea(), { inputId: p } = _m(r, {
      formItemContext: c
    }), d = ks(), m = Qi(), g = Qe("input"), C = Qe("textarea"), h = Zn(), k = Zn(), y = W(!1), _ = W(!1), E = W(!1), x = W(), M = Zn(r.inputStyle), $ = P(() => h.value || k.value), { wrapperRef: O, isFocused: D, handleFocus: B, handleBlur: N } = bm($, {
      afterBlur() {
        var U;
        r.validateEvent && ((U = c == null ? void 0 : c.validate) == null || U.call(c, "blur").catch((le) => void 0));
      }
    }), oe = P(() => {
      var U;
      return (U = f == null ? void 0 : f.statusIcon) != null ? U : !1;
    }), q = P(() => (c == null ? void 0 : c.validateState) || ""), ie = P(() => q.value && em[q.value]), j = P(() => E.value ? a8 : r8), V = P(() => [
      s.style,
      r.inputStyle
    ]), H = P(() => [
      r.inputStyle,
      M.value,
      { resize: r.resize }
    ]), J = P(() => Kr(r.modelValue) ? "" : String(r.modelValue)), L = P(() => r.clearable && !m.value && !r.readonly && !!J.value && (D.value || y.value)), Z = P(() => r.showPassword && !m.value && !r.readonly && !!J.value && (!!J.value || D.value)), K = P(() => r.showWordLimit && !!u.value.maxlength && (r.type === "text" || r.type === "textarea") && !m.value && !r.readonly && !r.showPassword), me = P(() => J.value.length), Se = P(() => !!K.value && me.value > Number(u.value.maxlength)), Re = P(() => !!o.suffix || !!r.suffixIcon || L.value || r.showPassword || K.value || !!q.value && oe.value), [Pe, We] = zE(h);
    ji(k, (U) => {
      if (pe(), !K.value || r.resize !== "both")
        return;
      const le = U[0], { width: Ae } = le.contentRect;
      x.value = {
        right: `calc(100% - ${Ae + 15 + 6}px)`
      };
    });
    const ze = () => {
      const { type: U, autosize: le } = r;
      if (!(!Nt || U !== "textarea" || !k.value))
        if (le) {
          const Ae = Fe(le) ? le.minRows : void 0, Oe = Fe(le) ? le.maxRows : void 0, ct = j0(k.value, Ae, Oe);
          M.value = {
            overflowY: "hidden",
            ...ct
          }, Ue(() => {
            k.value.offsetHeight, M.value = ct;
          });
        } else
          M.value = {
            minHeight: j0(k.value).minHeight
          };
    }, pe = ((U) => {
      let le = !1;
      return () => {
        var Ae;
        if (le || !r.autosize)
          return;
        ((Ae = k.value) == null ? void 0 : Ae.offsetParent) === null || (U(), le = !0);
      };
    })(ze), Me = () => {
      const U = $.value, le = r.formatter ? r.formatter(J.value) : J.value;
      !U || U.value === le || (U.value = le);
    }, T = async (U) => {
      Pe();
      let { value: le } = U.target;
      if (r.formatter && (le = r.parser ? r.parser(le) : le), !_.value) {
        if (le === J.value) {
          Me();
          return;
        }
        n(Wt, le), n("input", le), await Ue(), Me(), We();
      }
    }, I = (U) => {
      n("change", U.target.value);
    }, z = (U) => {
      n("compositionstart", U), _.value = !0;
    }, Y = (U) => {
      var le;
      n("compositionupdate", U);
      const Ae = (le = U.target) == null ? void 0 : le.value, Oe = Ae[Ae.length - 1] || "";
      _.value = !tm(Oe);
    }, X = (U) => {
      n("compositionend", U), _.value && (_.value = !1, T(U));
    }, ee = () => {
      E.value = !E.value, ae();
    }, ae = async () => {
      var U;
      await Ue(), (U = $.value) == null || U.focus();
    }, se = () => {
      var U;
      return (U = $.value) == null ? void 0 : U.blur();
    }, ne = (U) => {
      y.value = !1, n("mouseleave", U);
    }, te = (U) => {
      y.value = !0, n("mouseenter", U);
    }, ye = (U) => {
      n("keydown", U);
    }, fe = () => {
      var U;
      (U = $.value) == null || U.select();
    }, ve = () => {
      n(Wt, ""), n("change", ""), n("clear"), n("input", "");
    };
    return Te(() => r.modelValue, () => {
      var U;
      Ue(() => ze()), r.validateEvent && ((U = c == null ? void 0 : c.validate) == null || U.call(c, "change").catch((le) => void 0));
    }), Te(J, () => Me()), Te(() => r.type, async () => {
      await Ue(), Me(), ze();
    }), it(() => {
      !r.formatter && r.parser, Me(), Ue(ze);
    }), t({
      input: h,
      textarea: k,
      ref: $,
      textareaStyle: H,
      autosize: yn(r, "autosize"),
      focus: ae,
      blur: se,
      select: fe,
      clear: ve,
      resizeTextarea: ze
    }), (U, le) => Ut((w(), A("div", gt(b(i), {
      class: b(a),
      style: b(V),
      role: U.containerRole,
      onMouseenter: te,
      onMouseleave: ne
    }), [
      _e(" input "),
      U.type !== "textarea" ? (w(), A(et, { key: 0 }, [
        _e(" prepend slot "),
        U.$slots.prepend ? (w(), A("div", {
          key: 0,
          class: Q(b(g).be("group", "prepend"))
        }, [
          we(U.$slots, "prepend")
        ], 2)) : _e("v-if", !0),
        v("div", {
          ref_key: "wrapperRef",
          ref: O,
          class: Q(b(l))
        }, [
          _e(" prefix slot "),
          U.$slots.prefix || U.prefixIcon ? (w(), A("span", {
            key: 0,
            class: Q(b(g).e("prefix"))
          }, [
            v("span", {
              class: Q(b(g).e("prefix-inner"))
            }, [
              we(U.$slots, "prefix"),
              U.prefixIcon ? (w(), ue(b(Gt), {
                key: 0,
                class: Q(b(g).e("icon"))
              }, {
                default: he(() => [
                  (w(), ue(Pt(U.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : _e("v-if", !0)
            ], 2)
          ], 2)) : _e("v-if", !0),
          v("input", gt({
            id: b(p),
            ref_key: "input",
            ref: h,
            class: b(g).e("inner")
          }, b(u), {
            type: U.showPassword ? E.value ? "text" : "password" : U.type,
            disabled: b(m),
            formatter: U.formatter,
            parser: U.parser,
            readonly: U.readonly,
            autocomplete: U.autocomplete,
            tabindex: U.tabindex,
            "aria-label": U.label,
            placeholder: U.placeholder,
            style: U.inputStyle,
            form: r.form,
            autofocus: r.autofocus,
            onCompositionstart: z,
            onCompositionupdate: Y,
            onCompositionend: X,
            onInput: T,
            onFocus: le[0] || (le[0] = (...Ae) => b(B) && b(B)(...Ae)),
            onBlur: le[1] || (le[1] = (...Ae) => b(N) && b(N)(...Ae)),
            onChange: I,
            onKeydown: ye
          }), null, 16, nS),
          _e(" suffix slot "),
          b(Re) ? (w(), A("span", {
            key: 1,
            class: Q(b(g).e("suffix"))
          }, [
            v("span", {
              class: Q(b(g).e("suffix-inner"))
            }, [
              !b(L) || !b(Z) || !b(K) ? (w(), A(et, { key: 0 }, [
                we(U.$slots, "suffix"),
                U.suffixIcon ? (w(), ue(b(Gt), {
                  key: 0,
                  class: Q(b(g).e("icon"))
                }, {
                  default: he(() => [
                    (w(), ue(Pt(U.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : _e("v-if", !0)
              ], 64)) : _e("v-if", !0),
              b(L) ? (w(), ue(b(Gt), {
                key: 1,
                class: Q([b(g).e("icon"), b(g).e("clear")]),
                onMousedown: nn(b(Dt), ["prevent"]),
                onClick: ve
              }, {
                default: he(() => [
                  Ce(b(vf))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : _e("v-if", !0),
              b(Z) ? (w(), ue(b(Gt), {
                key: 2,
                class: Q([b(g).e("icon"), b(g).e("password")]),
                onClick: ee
              }, {
                default: he(() => [
                  (w(), ue(Pt(b(j))))
                ]),
                _: 1
              }, 8, ["class"])) : _e("v-if", !0),
              b(K) ? (w(), A("span", {
                key: 3,
                class: Q(b(g).e("count"))
              }, [
                v("span", {
                  class: Q(b(g).e("count-inner"))
                }, Je(b(me)) + " / " + Je(b(u).maxlength), 3)
              ], 2)) : _e("v-if", !0),
              b(q) && b(ie) && b(oe) ? (w(), ue(b(Gt), {
                key: 4,
                class: Q([
                  b(g).e("icon"),
                  b(g).e("validateIcon"),
                  b(g).is("loading", b(q) === "validating")
                ])
              }, {
                default: he(() => [
                  (w(), ue(Pt(b(ie))))
                ]),
                _: 1
              }, 8, ["class"])) : _e("v-if", !0)
            ], 2)
          ], 2)) : _e("v-if", !0)
        ], 2),
        _e(" append slot "),
        U.$slots.append ? (w(), A("div", {
          key: 1,
          class: Q(b(g).be("group", "append"))
        }, [
          we(U.$slots, "append")
        ], 2)) : _e("v-if", !0)
      ], 64)) : (w(), A(et, { key: 1 }, [
        _e(" textarea "),
        v("textarea", gt({
          id: b(p),
          ref_key: "textarea",
          ref: k,
          class: b(C).e("inner")
        }, b(u), {
          tabindex: U.tabindex,
          disabled: b(m),
          readonly: U.readonly,
          autocomplete: U.autocomplete,
          style: b(H),
          "aria-label": U.label,
          placeholder: U.placeholder,
          form: r.form,
          autofocus: r.autofocus,
          onCompositionstart: z,
          onCompositionupdate: Y,
          onCompositionend: X,
          onInput: T,
          onFocus: le[2] || (le[2] = (...Ae) => b(B) && b(B)(...Ae)),
          onBlur: le[3] || (le[3] = (...Ae) => b(N) && b(N)(...Ae)),
          onChange: I,
          onKeydown: ye
        }), null, 16, rS),
        b(K) ? (w(), A("span", {
          key: 0,
          style: st(x.value),
          class: Q(b(g).e("count"))
        }, Je(b(me)) + " / " + Je(b(u).maxlength), 7)) : _e("v-if", !0)
      ], 64))
    ], 16, tS)), [
      [Qn, U.type !== "hidden"]
    ]);
  }
});
var iS = /* @__PURE__ */ Ye(sS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const ta = An(iS), lo = 4, aS = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, lS = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), ym = Symbol("scrollbarContextKey"), cS = ot({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), uS = "Thumb", fS = /* @__PURE__ */ re({
  __name: "thumb",
  props: cS,
  setup(e) {
    const t = e, n = qe(ym), r = Qe("scrollbar");
    n || z5(uS, "can not inject scrollbar context");
    const s = W(), o = W(), i = W({}), a = W(!1);
    let l = !1, u = !1, f = Nt ? document.onselectstart : null;
    const c = P(() => aS[t.vertical ? "vertical" : "horizontal"]), p = P(() => lS({
      size: t.size,
      move: t.move,
      bar: c.value
    })), d = P(() => s.value[c.value.offset] ** 2 / n.wrapElement[c.value.scrollSize] / t.ratio / o.value[c.value.offset]), m = (x) => {
      var M;
      if (x.stopPropagation(), x.ctrlKey || [1, 2].includes(x.button))
        return;
      (M = window.getSelection()) == null || M.removeAllRanges(), C(x);
      const $ = x.currentTarget;
      $ && (i.value[c.value.axis] = $[c.value.offset] - (x[c.value.client] - $.getBoundingClientRect()[c.value.direction]));
    }, g = (x) => {
      if (!o.value || !s.value || !n.wrapElement)
        return;
      const M = Math.abs(x.target.getBoundingClientRect()[c.value.direction] - x[c.value.client]), $ = o.value[c.value.offset] / 2, O = (M - $) * 100 * d.value / s.value[c.value.offset];
      n.wrapElement[c.value.scroll] = O * n.wrapElement[c.value.scrollSize] / 100;
    }, C = (x) => {
      x.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", h), document.addEventListener("mouseup", k), f = document.onselectstart, document.onselectstart = () => !1;
    }, h = (x) => {
      if (!s.value || !o.value || l === !1)
        return;
      const M = i.value[c.value.axis];
      if (!M)
        return;
      const $ = (s.value.getBoundingClientRect()[c.value.direction] - x[c.value.client]) * -1, O = o.value[c.value.offset] - M, D = ($ - O) * 100 * d.value / s.value[c.value.offset];
      n.wrapElement[c.value.scroll] = D * n.wrapElement[c.value.scrollSize] / 100;
    }, k = () => {
      l = !1, i.value[c.value.axis] = 0, document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", k), E(), u && (a.value = !1);
    }, y = () => {
      u = !1, a.value = !!t.size;
    }, _ = () => {
      u = !0, a.value = l;
    };
    Yt(() => {
      E(), document.removeEventListener("mouseup", k);
    });
    const E = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return Ur(yn(n, "scrollbarElement"), "mousemove", y), Ur(yn(n, "scrollbarElement"), "mouseleave", _), (x, M) => (w(), ue(Xr, {
      name: b(r).b("fade"),
      persisted: ""
    }, {
      default: he(() => [
        Ut(v("div", {
          ref_key: "instance",
          ref: s,
          class: Q([b(r).e("bar"), b(r).is(b(c).key)]),
          onMousedown: g
        }, [
          v("div", {
            ref_key: "thumb",
            ref: o,
            class: Q(b(r).e("thumb")),
            style: st(b(p)),
            onMousedown: m
          }, null, 38)
        ], 34), [
          [Qn, x.always || a.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var V0 = /* @__PURE__ */ Ye(fS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const dS = ot({
  always: {
    type: Boolean,
    default: !0
  },
  width: String,
  height: String,
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
}), pS = /* @__PURE__ */ re({
  __name: "bar",
  props: dS,
  setup(e, { expose: t }) {
    const n = e, r = W(0), s = W(0);
    return t({
      handleScroll: (i) => {
        if (i) {
          const a = i.offsetHeight - lo, l = i.offsetWidth - lo;
          s.value = i.scrollTop * 100 / a * n.ratioY, r.value = i.scrollLeft * 100 / l * n.ratioX;
        }
      }
    }), (i, a) => (w(), A(et, null, [
      Ce(V0, {
        move: r.value,
        ratio: i.ratioX,
        size: i.width,
        always: i.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      Ce(V0, {
        move: s.value,
        ratio: i.ratioY,
        size: i.height,
        vertical: "",
        always: i.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var hS = /* @__PURE__ */ Ye(pS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const gS = ot({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: !1
  },
  wrapStyle: {
    type: Ne([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  },
  id: String,
  role: String,
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical"]
  }
}), mS = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(vt)
}, vS = "ElScrollbar", bS = /* @__PURE__ */ re({
  name: vS
}), _S = /* @__PURE__ */ re({
  ...bS,
  props: gS,
  emits: mS,
  setup(e, { expose: t, emit: n }) {
    const r = e, s = Qe("scrollbar");
    let o, i;
    const a = W(), l = W(), u = W(), f = W("0"), c = W("0"), p = W(), d = W(1), m = W(1), g = P(() => {
      const M = {};
      return r.height && (M.height = yo(r.height)), r.maxHeight && (M.maxHeight = yo(r.maxHeight)), [r.wrapStyle, M];
    }), C = P(() => [
      r.wrapClass,
      s.e("wrap"),
      { [s.em("wrap", "hidden-default")]: !r.native }
    ]), h = P(() => [s.e("view"), r.viewClass]), k = () => {
      var M;
      l.value && ((M = p.value) == null || M.handleScroll(l.value), n("scroll", {
        scrollTop: l.value.scrollTop,
        scrollLeft: l.value.scrollLeft
      }));
    };
    function y(M, $) {
      Fe(M) ? l.value.scrollTo(M) : vt(M) && vt($) && l.value.scrollTo(M, $);
    }
    const _ = (M) => {
      vt(M) && (l.value.scrollTop = M);
    }, E = (M) => {
      vt(M) && (l.value.scrollLeft = M);
    }, x = () => {
      if (!l.value)
        return;
      const M = l.value.offsetHeight - lo, $ = l.value.offsetWidth - lo, O = M ** 2 / l.value.scrollHeight, D = $ ** 2 / l.value.scrollWidth, B = Math.max(O, r.minSize), N = Math.max(D, r.minSize);
      d.value = O / (M - O) / (B / (M - B)), m.value = D / ($ - D) / (N / ($ - N)), c.value = B + lo < M ? `${B}px` : "", f.value = N + lo < $ ? `${N}px` : "";
    };
    return Te(() => r.noresize, (M) => {
      M ? (o == null || o(), i == null || i()) : ({ stop: o } = ji(u, x), i = Ur("resize", x));
    }, { immediate: !0 }), Te(() => [r.maxHeight, r.height], () => {
      r.native || Ue(() => {
        var M;
        x(), l.value && ((M = p.value) == null || M.handleScroll(l.value));
      });
    }), Kt(ym, Sn({
      scrollbarElement: a,
      wrapElement: l
    })), it(() => {
      r.native || Ue(() => {
        x();
      });
    }), j1(() => x()), t({
      wrapRef: l,
      update: x,
      scrollTo: y,
      setScrollTop: _,
      setScrollLeft: E,
      handleScroll: k
    }), (M, $) => (w(), A("div", {
      ref_key: "scrollbarRef",
      ref: a,
      class: Q(b(s).b())
    }, [
      v("div", {
        ref_key: "wrapRef",
        ref: l,
        class: Q(b(C)),
        style: st(b(g)),
        onScroll: k
      }, [
        (w(), ue(Pt(M.tag), {
          id: M.id,
          ref_key: "resizeRef",
          ref: u,
          class: Q(b(h)),
          style: st(M.viewStyle),
          role: M.role,
          "aria-label": M.ariaLabel,
          "aria-orientation": M.ariaOrientation
        }, {
          default: he(() => [
            we(M.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 38),
      M.native ? _e("v-if", !0) : (w(), ue(hS, {
        key: 0,
        ref_key: "barRef",
        ref: p,
        height: c.value,
        width: f.value,
        always: M.always,
        "ratio-x": m.value,
        "ratio-y": d.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var yS = /* @__PURE__ */ Ye(_S, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const wS = An(yS), Lf = Symbol("popper"), wm = Symbol("popperContent"), kS = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], km = ot({
  role: {
    type: String,
    values: kS,
    default: "tooltip"
  }
}), CS = /* @__PURE__ */ re({
  name: "ElPopper",
  inheritAttrs: !1
}), xS = /* @__PURE__ */ re({
  ...CS,
  props: km,
  setup(e, { expose: t }) {
    const n = e, r = W(), s = W(), o = W(), i = W(), a = P(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: s,
      contentRef: o,
      referenceRef: i,
      role: a
    };
    return t(l), Kt(Lf, l), (u, f) => we(u.$slots, "default");
  }
});
var ES = /* @__PURE__ */ Ye(xS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const Cm = ot({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), SS = /* @__PURE__ */ re({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), AS = /* @__PURE__ */ re({
  ...SS,
  props: Cm,
  setup(e, { expose: t }) {
    const n = e, r = Qe("popper"), { arrowOffset: s, arrowRef: o, arrowStyle: i } = qe(wm, void 0);
    return Te(() => n.arrowOffset, (a) => {
      s.value = a;
    }), Yt(() => {
      o.value = void 0;
    }), t({
      arrowRef: o
    }), (a, l) => (w(), A("span", {
      ref_key: "arrowRef",
      ref: o,
      class: Q(b(r).e("arrow")),
      style: st(b(i)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var TS = /* @__PURE__ */ Ye(AS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const MS = "ElOnlyChild", $S = /* @__PURE__ */ re({
  name: MS,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const s = qe(vm), o = NE((r = s == null ? void 0 : s.setForwardRef) != null ? r : Dt);
    return () => {
      var i;
      const a = (i = t.default) == null ? void 0 : i.call(t, n);
      if (!a || a.length > 1)
        return null;
      const l = xm(a);
      return l ? Ut(Jn(l, n), [[o]]) : null;
    };
  }
});
function xm(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Fe(n))
      switch (n.type) {
        case Rt:
          continue;
        case So:
        case "svg":
          return U0(n);
        case et:
          return xm(n.children);
        default:
          return n;
      }
    return U0(n);
  }
  return null;
}
function U0(e) {
  const t = Qe("only-child");
  return Ce("span", {
    class: t.e("content")
  }, [e]);
}
const Em = ot({
  virtualRef: {
    type: Ne(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: Ne(Function)
  },
  onMouseleave: {
    type: Ne(Function)
  },
  onClick: {
    type: Ne(Function)
  },
  onKeydown: {
    type: Ne(Function)
  },
  onFocus: {
    type: Ne(Function)
  },
  onBlur: {
    type: Ne(Function)
  },
  onContextmenu: {
    type: Ne(Function)
  },
  id: String,
  open: Boolean
}), IS = /* @__PURE__ */ re({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), LS = /* @__PURE__ */ re({
  ...IS,
  props: Em,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: s } = qe(Lf, void 0);
    DE(s);
    const o = P(() => a.value ? n.id : void 0), i = P(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), a = P(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), l = P(() => a.value ? `${n.open}` : void 0);
    let u;
    return it(() => {
      Te(() => n.virtualRef, (f) => {
        f && (s.value = yr(f));
      }, {
        immediate: !0
      }), Te(s, (f, c) => {
        u == null || u(), u = void 0, cs(f) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((p) => {
          var d;
          const m = n[p];
          m && (f.addEventListener(p.slice(2).toLowerCase(), m), (d = c == null ? void 0 : c.removeEventListener) == null || d.call(c, p.slice(2).toLowerCase(), m));
        }), u = Te([o, i, a, l], (p) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((d, m) => {
            Kr(p[m]) ? f.removeAttribute(d) : f.setAttribute(d, p[m]);
          });
        }, { immediate: !0 })), cs(c) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((p) => c.removeAttribute(p));
      }, {
        immediate: !0
      });
    }), Yt(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: s
    }), (f, c) => f.virtualTriggering ? _e("v-if", !0) : (w(), ue(b($S), gt({ key: 0 }, f.$attrs, {
      "aria-controls": b(o),
      "aria-describedby": b(i),
      "aria-expanded": b(l),
      "aria-haspopup": b(a)
    }), {
      default: he(() => [
        we(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var OS = /* @__PURE__ */ Ye(LS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const Ra = "focus-trap.focus-after-trapped", Pa = "focus-trap.focus-after-released", RS = "focus-trap.focusout-prevented", K0 = {
  cancelable: !0,
  bubbles: !1
}, PS = {
  cancelable: !0,
  bubbles: !1
}, W0 = "focusAfterTrapped", G0 = "focusAfterReleased", DS = Symbol("elFocusTrap"), Of = W(), na = W(0), Rf = W(0);
let Ns = 0;
const Sm = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const s = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Z0 = (e, t) => {
  for (const n of e)
    if (!NS(n, t))
      return n;
}, NS = (e, t) => {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, BS = (e) => {
  const t = Sm(e), n = Z0(t, e), r = Z0(t.reverse(), e);
  return [n, r];
}, FS = (e) => e instanceof HTMLInputElement && "select" in e, hr = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), Rf.value = window.performance.now(), e !== n && FS(e) && t && e.select();
  }
};
function X0(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const qS = () => {
  let e = [];
  return {
    push: (r) => {
      const s = e[0];
      s && r !== s && s.pause(), e = X0(e, r), e.unshift(r);
    },
    remove: (r) => {
      var s, o;
      e = X0(e, r), (o = (s = e[0]) == null ? void 0 : s.resume) == null || o.call(s);
    }
  };
}, zS = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (hr(r, t), document.activeElement !== n)
      return;
}, Y0 = qS(), HS = () => na.value > Rf.value, Bs = () => {
  Of.value = "pointer", na.value = window.performance.now();
}, J0 = () => {
  Of.value = "keyboard", na.value = window.performance.now();
}, jS = () => (it(() => {
  Ns === 0 && (document.addEventListener("mousedown", Bs), document.addEventListener("touchstart", Bs), document.addEventListener("keydown", J0)), Ns++;
}), Yt(() => {
  Ns--, Ns <= 0 && (document.removeEventListener("mousedown", Bs), document.removeEventListener("touchstart", Bs), document.removeEventListener("keydown", J0));
}), {
  focusReason: Of,
  lastUserFocusTimestamp: na,
  lastAutomatedFocusTimestamp: Rf
}), Fs = (e) => new CustomEvent(RS, {
  ...PS,
  detail: e
}), VS = /* @__PURE__ */ re({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    W0,
    G0,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = W();
    let r, s;
    const { focusReason: o } = jS();
    IE((m) => {
      e.trapped && !i.paused && t("release-requested", m);
    });
    const i = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, a = (m) => {
      if (!e.loop && !e.trapped || i.paused)
        return;
      const { key: g, altKey: C, ctrlKey: h, metaKey: k, currentTarget: y, shiftKey: _ } = m, { loop: E } = e, x = g === Yn.tab && !C && !h && !k, M = document.activeElement;
      if (x && M) {
        const $ = y, [O, D] = BS($);
        if (O && D) {
          if (!_ && M === D) {
            const N = Fs({
              focusReason: o.value
            });
            t("focusout-prevented", N), N.defaultPrevented || (m.preventDefault(), E && hr(O, !0));
          } else if (_ && [O, $].includes(M)) {
            const N = Fs({
              focusReason: o.value
            });
            t("focusout-prevented", N), N.defaultPrevented || (m.preventDefault(), E && hr(D, !0));
          }
        } else if (M === $) {
          const N = Fs({
            focusReason: o.value
          });
          t("focusout-prevented", N), N.defaultPrevented || m.preventDefault();
        }
      }
    };
    Kt(DS, {
      focusTrapRef: n,
      onKeydown: a
    }), Te(() => e.focusTrapEl, (m) => {
      m && (n.value = m);
    }, { immediate: !0 }), Te([n], ([m], [g]) => {
      m && (m.addEventListener("keydown", a), m.addEventListener("focusin", f), m.addEventListener("focusout", c)), g && (g.removeEventListener("keydown", a), g.removeEventListener("focusin", f), g.removeEventListener("focusout", c));
    });
    const l = (m) => {
      t(W0, m);
    }, u = (m) => t(G0, m), f = (m) => {
      const g = b(n);
      if (!g)
        return;
      const C = m.target, h = m.relatedTarget, k = C && g.contains(C);
      e.trapped || h && g.contains(h) || (r = h), k && t("focusin", m), !i.paused && e.trapped && (k ? s = C : hr(s, !0));
    }, c = (m) => {
      const g = b(n);
      if (!(i.paused || !g))
        if (e.trapped) {
          const C = m.relatedTarget;
          !Kr(C) && !g.contains(C) && setTimeout(() => {
            if (!i.paused && e.trapped) {
              const h = Fs({
                focusReason: o.value
              });
              t("focusout-prevented", h), h.defaultPrevented || hr(s, !0);
            }
          }, 0);
        } else {
          const C = m.target;
          C && g.contains(C) || t("focusout", m);
        }
    };
    async function p() {
      await Ue();
      const m = b(n);
      if (m) {
        Y0.push(i);
        const g = m.contains(document.activeElement) ? r : document.activeElement;
        if (r = g, !m.contains(g)) {
          const h = new Event(Ra, K0);
          m.addEventListener(Ra, l), m.dispatchEvent(h), h.defaultPrevented || Ue(() => {
            let k = e.focusStartEl;
            Ke(k) || (hr(k), document.activeElement !== k && (k = "first")), k === "first" && zS(Sm(m), !0), (document.activeElement === g || k === "container") && hr(m);
          });
        }
      }
    }
    function d() {
      const m = b(n);
      if (m) {
        m.removeEventListener(Ra, l);
        const g = new CustomEvent(Pa, {
          ...K0,
          detail: {
            focusReason: o.value
          }
        });
        m.addEventListener(Pa, u), m.dispatchEvent(g), !g.defaultPrevented && (o.value == "keyboard" || !HS() || m.contains(document.activeElement)) && hr(r ?? document.body), m.removeEventListener(Pa, u), Y0.remove(i);
      }
    }
    return it(() => {
      e.trapped && p(), Te(() => e.trapped, (m) => {
        m ? p() : d();
      });
    }), Yt(() => {
      e.trapped && d();
    }), {
      onKeydown: a
    };
  }
});
function US(e, t, n, r, s, o) {
  return we(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var KS = /* @__PURE__ */ Ye(VS, [["render", US], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const WS = ["fixed", "absolute"], GS = ot({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: Ne(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: Xi,
    default: "bottom"
  },
  popperOptions: {
    type: Ne(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: WS,
    default: "absolute"
  }
}), Am = ot({
  ...GS,
  id: String,
  style: {
    type: Ne([String, Array, Object])
  },
  className: {
    type: Ne([String, Array, Object])
  },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: Ne([String, Array, Object])
  },
  popperStyle: {
    type: Ne([String, Array, Object])
  },
  referenceEl: {
    type: Ne(Object)
  },
  triggerTargetEl: {
    type: Ne(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
}), ZS = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, XS = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: s } = e, o = {
    placement: n,
    strategy: r,
    ...s,
    modifiers: [...JS(e), ...t]
  };
  return QS(o, s == null ? void 0 : s.modifiers), o;
}, YS = (e) => {
  if (Nt)
    return yr(e);
};
function JS(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: r } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: r
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n
      }
    }
  ];
}
function QS(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const e7 = 0, t7 = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: s } = qe(Lf, void 0), o = W(), i = W(), a = P(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = P(() => {
    var h;
    const k = b(o), y = (h = b(i)) != null ? h : e7;
    return {
      name: "arrow",
      enabled: !N5(k),
      options: {
        element: k,
        padding: y
      }
    };
  }), u = P(() => ({
    onFirstUpdate: () => {
      m();
    },
    ...XS(e, [
      b(l),
      b(a)
    ])
  })), f = P(() => YS(e.referenceEl) || b(r)), { attributes: c, state: p, styles: d, update: m, forceUpdate: g, instanceRef: C } = TE(f, n, u);
  return Te(C, (h) => t.value = h), it(() => {
    Te(() => {
      var h;
      return (h = b(f)) == null ? void 0 : h.getBoundingClientRect();
    }, () => {
      m();
    });
  }), {
    attributes: c,
    arrowRef: o,
    contentRef: n,
    instanceRef: C,
    state: p,
    styles: d,
    role: s,
    forceUpdate: g,
    update: m
  };
}, n7 = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: s } = qE(), o = Qe("popper"), i = P(() => b(t).popper), a = W(vt(e.zIndex) ? e.zIndex : s()), l = P(() => [
    o.b(),
    o.is("pure", e.pure),
    o.is(e.effect),
    e.popperClass
  ]), u = P(() => [
    { zIndex: b(a) },
    b(n).popper,
    e.popperStyle || {}
  ]), f = P(() => r.value === "dialog" ? "false" : void 0), c = P(() => b(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: c,
    contentAttrs: i,
    contentClass: l,
    contentStyle: u,
    contentZIndex: a,
    updateZIndex: () => {
      a.value = vt(e.zIndex) ? e.zIndex : s();
    }
  };
}, r7 = (e, t) => {
  const n = W(!1), r = W();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var f;
      ((f = u.detail) == null ? void 0 : f.focusReason) !== "pointer" && (r.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (u) => {
      e.visible && !n.value && (u.target && (r.value = u.target), n.value = !0);
    },
    onFocusoutPrevented: (u) => {
      e.trapping || (u.detail.focusReason === "pointer" && u.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, o7 = /* @__PURE__ */ re({
  name: "ElPopperContent"
}), s7 = /* @__PURE__ */ re({
  ...o7,
  props: Am,
  emits: ZS,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: s,
      trapped: o,
      onFocusAfterReleased: i,
      onFocusAfterTrapped: a,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: f
    } = r7(r, n), { attributes: c, arrowRef: p, contentRef: d, styles: m, instanceRef: g, role: C, update: h } = t7(r), {
      ariaModal: k,
      arrowStyle: y,
      contentAttrs: _,
      contentClass: E,
      contentStyle: x,
      updateZIndex: M
    } = n7(r, {
      styles: m,
      attributes: c,
      role: C
    }), $ = qe(wi, void 0), O = W();
    Kt(wm, {
      arrowStyle: y,
      arrowRef: p,
      arrowOffset: O
    }), $ && ($.addInputId || $.removeInputId) && Kt(wi, {
      ...$,
      addInputId: Dt,
      removeInputId: Dt
    });
    let D;
    const B = (oe = !0) => {
      h(), oe && M();
    }, N = () => {
      B(!1), r.visible && r.focusOnShow ? o.value = !0 : r.visible === !1 && (o.value = !1);
    };
    return it(() => {
      Te(() => r.triggerTargetEl, (oe, q) => {
        D == null || D(), D = void 0;
        const ie = b(oe || d.value), j = b(q || d.value);
        cs(ie) && (D = Te([C, () => r.ariaLabel, k, () => r.id], (V) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((H, J) => {
            Kr(V[J]) ? ie.removeAttribute(H) : ie.setAttribute(H, V[J]);
          });
        }, { immediate: !0 })), j !== ie && cs(j) && ["role", "aria-label", "aria-modal", "id"].forEach((V) => {
          j.removeAttribute(V);
        });
      }, { immediate: !0 }), Te(() => r.visible, N, { immediate: !0 });
    }), Yt(() => {
      D == null || D(), D = void 0;
    }), t({
      popperContentRef: d,
      popperInstanceRef: g,
      updatePopper: B,
      contentStyle: x
    }), (oe, q) => (w(), A("div", gt({
      ref_key: "contentRef",
      ref: d
    }, b(_), {
      style: b(x),
      class: b(E),
      tabindex: "-1",
      onMouseenter: q[0] || (q[0] = (ie) => oe.$emit("mouseenter", ie)),
      onMouseleave: q[1] || (q[1] = (ie) => oe.$emit("mouseleave", ie))
    }), [
      Ce(b(KS), {
        trapped: b(o),
        "trap-on-focus-in": !0,
        "focus-trap-el": b(d),
        "focus-start-el": b(s),
        onFocusAfterTrapped: b(a),
        onFocusAfterReleased: b(i),
        onFocusin: b(l),
        onFocusoutPrevented: b(u),
        onReleaseRequested: b(f)
      }, {
        default: he(() => [
          we(oe.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var i7 = /* @__PURE__ */ Ye(s7, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const a7 = An(ES), Pf = Symbol("elTooltip"), tn = ot({
  ...RE,
  ...Am,
  appendTo: {
    type: Ne([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: !1
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: Ne(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean
}), ds = ot({
  ...Em,
  disabled: Boolean,
  trigger: {
    type: Ne([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: Ne(Array),
    default: () => [Yn.enter, Yn.space]
  }
}), {
  useModelToggleProps: l7,
  useModelToggleEmits: c7,
  useModelToggle: u7
} = E8("visible"), f7 = ot({
  ...km,
  ...l7,
  ...tn,
  ...ds,
  ...Cm,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), d7 = [
  ...c7,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], p7 = (e, t) => Le(e) ? e.includes(t) : e === t, no = (e, t, n) => (r) => {
  p7(b(e), t) && n(r);
}, h7 = /* @__PURE__ */ re({
  name: "ElTooltipTrigger"
}), g7 = /* @__PURE__ */ re({
  ...h7,
  props: ds,
  setup(e, { expose: t }) {
    const n = e, r = Qe("tooltip"), { controlled: s, id: o, open: i, onOpen: a, onClose: l, onToggle: u } = qe(Pf, void 0), f = W(null), c = () => {
      if (b(s) || n.disabled)
        return !0;
    }, p = yn(n, "trigger"), d = Un(c, no(p, "hover", a)), m = Un(c, no(p, "hover", l)), g = Un(c, no(p, "click", (_) => {
      _.button === 0 && u(_);
    })), C = Un(c, no(p, "focus", a)), h = Un(c, no(p, "focus", l)), k = Un(c, no(p, "contextmenu", (_) => {
      _.preventDefault(), u(_);
    })), y = Un(c, (_) => {
      const { code: E } = _;
      n.triggerKeys.includes(E) && (_.preventDefault(), u(_));
    });
    return t({
      triggerRef: f
    }), (_, E) => (w(), ue(b(OS), {
      id: b(o),
      "virtual-ref": _.virtualRef,
      open: b(i),
      "virtual-triggering": _.virtualTriggering,
      class: Q(b(r).e("trigger")),
      onBlur: b(h),
      onClick: b(g),
      onContextmenu: b(k),
      onFocus: b(C),
      onMouseenter: b(d),
      onMouseleave: b(m),
      onKeydown: b(y)
    }, {
      default: he(() => [
        we(_.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var m7 = /* @__PURE__ */ Ye(g7, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const v7 = /* @__PURE__ */ re({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), b7 = /* @__PURE__ */ re({
  ...v7,
  props: tn,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = mm(), s = Qe("tooltip"), o = W(null), i = W(!1), {
      controlled: a,
      id: l,
      open: u,
      trigger: f,
      onClose: c,
      onOpen: p,
      onShow: d,
      onHide: m,
      onBeforeShow: g,
      onBeforeHide: C
    } = qe(Pf, void 0), h = P(() => n.transition || `${s.namespace.value}-fade-in-linear`), k = P(() => n.persistent);
    Yt(() => {
      i.value = !0;
    });
    const y = P(() => b(k) ? !0 : b(u)), _ = P(() => n.disabled ? !1 : b(u)), E = P(() => n.appendTo || r.value), x = P(() => {
      var V;
      return (V = n.style) != null ? V : {};
    }), M = P(() => !b(u)), $ = () => {
      m();
    }, O = () => {
      if (b(a))
        return !0;
    }, D = Un(O, () => {
      n.enterable && b(f) === "hover" && p();
    }), B = Un(O, () => {
      b(f) === "hover" && c();
    }), N = () => {
      var V, H;
      (H = (V = o.value) == null ? void 0 : V.updatePopper) == null || H.call(V), g == null || g();
    }, oe = () => {
      C == null || C();
    }, q = () => {
      d(), j = nC(P(() => {
        var V;
        return (V = o.value) == null ? void 0 : V.popperContentRef;
      }), () => {
        if (b(a))
          return;
        b(f) !== "hover" && c();
      });
    }, ie = () => {
      n.virtualTriggering || c();
    };
    let j;
    return Te(() => b(u), (V) => {
      V || j == null || j();
    }, {
      flush: "post"
    }), Te(() => n.content, () => {
      var V, H;
      (H = (V = o.value) == null ? void 0 : V.updatePopper) == null || H.call(V);
    }), t({
      contentRef: o
    }), (V, H) => (w(), ue(D4, {
      disabled: !V.teleported,
      to: b(E)
    }, [
      Ce(Xr, {
        name: b(h),
        onAfterLeave: $,
        onBeforeEnter: N,
        onAfterEnter: q,
        onBeforeLeave: oe
      }, {
        default: he(() => [
          b(y) ? Ut((w(), ue(b(i7), gt({
            key: 0,
            id: b(l),
            ref_key: "contentRef",
            ref: o
          }, V.$attrs, {
            "aria-label": V.ariaLabel,
            "aria-hidden": b(M),
            "boundaries-padding": V.boundariesPadding,
            "fallback-placements": V.fallbackPlacements,
            "gpu-acceleration": V.gpuAcceleration,
            offset: V.offset,
            placement: V.placement,
            "popper-options": V.popperOptions,
            strategy: V.strategy,
            effect: V.effect,
            enterable: V.enterable,
            pure: V.pure,
            "popper-class": V.popperClass,
            "popper-style": [V.popperStyle, b(x)],
            "reference-el": V.referenceEl,
            "trigger-target-el": V.triggerTargetEl,
            visible: b(_),
            "z-index": V.zIndex,
            onMouseenter: b(D),
            onMouseleave: b(B),
            onBlur: ie,
            onClose: b(c)
          }), {
            default: he(() => [
              i.value ? _e("v-if", !0) : we(V.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [Qn, b(_)]
          ]) : _e("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var _7 = /* @__PURE__ */ Ye(b7, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const y7 = ["innerHTML"], w7 = { key: 1 }, k7 = /* @__PURE__ */ re({
  name: "ElTooltip"
}), C7 = /* @__PURE__ */ re({
  ...k7,
  props: f7,
  emits: d7,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    OE();
    const s = Ji(), o = W(), i = W(), a = () => {
      var h;
      const k = b(o);
      k && ((h = k.popperInstanceRef) == null || h.update());
    }, l = W(!1), u = W(), { show: f, hide: c, hasUpdateHandler: p } = u7({
      indicator: l,
      toggleReason: u
    }), { onOpen: d, onClose: m } = PE({
      showAfter: yn(r, "showAfter"),
      hideAfter: yn(r, "hideAfter"),
      autoClose: yn(r, "autoClose"),
      open: f,
      close: c
    }), g = P(() => mf(r.visible) && !p.value);
    Kt(Pf, {
      controlled: g,
      id: s,
      open: Oi(l),
      trigger: yn(r, "trigger"),
      onOpen: (h) => {
        d(h);
      },
      onClose: (h) => {
        m(h);
      },
      onToggle: (h) => {
        b(l) ? m(h) : d(h);
      },
      onShow: () => {
        n("show", u.value);
      },
      onHide: () => {
        n("hide", u.value);
      },
      onBeforeShow: () => {
        n("before-show", u.value);
      },
      onBeforeHide: () => {
        n("before-hide", u.value);
      },
      updatePopper: a
    }), Te(() => r.disabled, (h) => {
      h && l.value && (l.value = !1);
    });
    const C = (h) => {
      var k, y;
      const _ = (y = (k = i.value) == null ? void 0 : k.contentRef) == null ? void 0 : y.popperContentRef, E = (h == null ? void 0 : h.relatedTarget) || document.activeElement;
      return _ && _.contains(E);
    };
    return q1(() => l.value && c()), t({
      popperRef: o,
      contentRef: i,
      isFocusInsideContent: C,
      updatePopper: a,
      onOpen: d,
      onClose: m,
      hide: c
    }), (h, k) => (w(), ue(b(a7), {
      ref_key: "popperRef",
      ref: o,
      role: h.role
    }, {
      default: he(() => [
        Ce(m7, {
          disabled: h.disabled,
          trigger: h.trigger,
          "trigger-keys": h.triggerKeys,
          "virtual-ref": h.virtualRef,
          "virtual-triggering": h.virtualTriggering
        }, {
          default: he(() => [
            h.$slots.default ? we(h.$slots, "default", { key: 0 }) : _e("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        Ce(_7, {
          ref_key: "contentRef",
          ref: i,
          "aria-label": h.ariaLabel,
          "boundaries-padding": h.boundariesPadding,
          content: h.content,
          disabled: h.disabled,
          effect: h.effect,
          enterable: h.enterable,
          "fallback-placements": h.fallbackPlacements,
          "hide-after": h.hideAfter,
          "gpu-acceleration": h.gpuAcceleration,
          offset: h.offset,
          persistent: h.persistent,
          "popper-class": h.popperClass,
          "popper-style": h.popperStyle,
          placement: h.placement,
          "popper-options": h.popperOptions,
          pure: h.pure,
          "raw-content": h.rawContent,
          "reference-el": h.referenceEl,
          "trigger-target-el": h.triggerTargetEl,
          "show-after": h.showAfter,
          strategy: h.strategy,
          teleported: h.teleported,
          transition: h.transition,
          "virtual-triggering": h.virtualTriggering,
          "z-index": h.zIndex,
          "append-to": h.appendTo
        }, {
          default: he(() => [
            we(h.$slots, "content", {}, () => [
              h.rawContent ? (w(), A("span", {
                key: 0,
                innerHTML: h.content
              }, null, 8, y7)) : (w(), A("span", w7, Je(h.content), 1))
            ]),
            h.showArrow ? (w(), ue(b(TS), {
              key: 0,
              "arrow-offset": h.arrowOffset
            }, null, 8, ["arrow-offset"])) : _e("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var x7 = /* @__PURE__ */ Ye(C7, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const ps = An(x7), Tm = Symbol("buttonGroupContextKey"), E7 = (e, t) => {
  nm({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, P(() => e.type === "text"));
  const n = qe(Tm, void 0), r = UE("button"), { form: s } = ea(), o = ks(P(() => n == null ? void 0 : n.size)), i = Qi(), a = W(), l = W1(), u = P(() => e.type || (n == null ? void 0 : n.type) || ""), f = P(() => {
    var m, g, C;
    return (C = (g = e.autoInsertSpace) != null ? g : (m = r.value) == null ? void 0 : m.autoInsertSpace) != null ? C : !1;
  }), c = P(() => e.tag === "button" ? {
    ariaDisabled: i.value || e.loading,
    disabled: i.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), p = P(() => {
    var m;
    const g = (m = l.default) == null ? void 0 : m.call(l);
    if (f.value && (g == null ? void 0 : g.length) === 1) {
      const C = g[0];
      if ((C == null ? void 0 : C.type) === So) {
        const h = C.children;
        return new RegExp("^\\p{Unified_Ideograph}{2}$", "u").test(h.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: i,
    _size: o,
    _type: u,
    _ref: a,
    _props: c,
    shouldAddSpace: p,
    handleClick: (m) => {
      e.nativeType === "reset" && (s == null || s.resetFields()), t("click", m);
    }
  };
}, S7 = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], A7 = ["button", "submit", "reset"], ku = ot({
  size: $f,
  disabled: Boolean,
  type: {
    type: String,
    values: S7,
    default: ""
  },
  icon: {
    type: En
  },
  nativeType: {
    type: String,
    values: A7,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: En,
    default: () => Jg
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  tag: {
    type: Ne([String, Object]),
    default: "button"
  }
}), T7 = {
  click: (e) => e instanceof MouseEvent
};
function Mt(e, t) {
  M7(e) && (e = "100%");
  var n = $7(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function qs(e) {
  return Math.min(1, Math.max(0, e));
}
function M7(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function $7(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Mm(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function zs(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Hr(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function I7(e, t, n) {
  return {
    r: Mt(e, 255) * 255,
    g: Mt(t, 255) * 255,
    b: Mt(n, 255) * 255
  };
}
function Q0(e, t, n) {
  e = Mt(e, 255), t = Mt(t, 255), n = Mt(n, 255);
  var r = Math.max(e, t, n), s = Math.min(e, t, n), o = 0, i = 0, a = (r + s) / 2;
  if (r === s)
    i = 0, o = 0;
  else {
    var l = r - s;
    switch (i = a > 0.5 ? l / (2 - r - s) : l / (r + s), r) {
      case e:
        o = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / l + 2;
        break;
      case n:
        o = (e - t) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: i, l: a };
}
function Da(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function L7(e, t, n) {
  var r, s, o;
  if (e = Mt(e, 360), t = Mt(t, 100), n = Mt(n, 100), t === 0)
    s = n, o = n, r = n;
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - i;
    r = Da(a, i, e + 1 / 3), s = Da(a, i, e), o = Da(a, i, e - 1 / 3);
  }
  return { r: r * 255, g: s * 255, b: o * 255 };
}
function ep(e, t, n) {
  e = Mt(e, 255), t = Mt(t, 255), n = Mt(n, 255);
  var r = Math.max(e, t, n), s = Math.min(e, t, n), o = 0, i = r, a = r - s, l = r === 0 ? 0 : a / r;
  if (r === s)
    o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: l, v: i };
}
function O7(e, t, n) {
  e = Mt(e, 360) * 6, t = Mt(t, 100), n = Mt(n, 100);
  var r = Math.floor(e), s = e - r, o = n * (1 - t), i = n * (1 - s * t), a = n * (1 - (1 - s) * t), l = r % 6, u = [n, i, o, o, a, n][l], f = [a, n, n, i, o, o][l], c = [o, o, a, n, n, i][l];
  return { r: u * 255, g: f * 255, b: c * 255 };
}
function tp(e, t, n, r) {
  var s = [
    Hr(Math.round(e).toString(16)),
    Hr(Math.round(t).toString(16)),
    Hr(Math.round(n).toString(16))
  ];
  return r && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) : s.join("");
}
function R7(e, t, n, r, s) {
  var o = [
    Hr(Math.round(e).toString(16)),
    Hr(Math.round(t).toString(16)),
    Hr(Math.round(n).toString(16)),
    Hr(P7(r))
  ];
  return s && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function P7(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function np(e) {
  return en(e) / 255;
}
function en(e) {
  return parseInt(e, 16);
}
function D7(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Cu = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function N7(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, s = null, o = null, i = !1, a = !1;
  return typeof e == "string" && (e = q7(e)), typeof e == "object" && (Hn(e.r) && Hn(e.g) && Hn(e.b) ? (t = I7(e.r, e.g, e.b), i = !0, a = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Hn(e.h) && Hn(e.s) && Hn(e.v) ? (r = zs(e.s), s = zs(e.v), t = O7(e.h, r, s), i = !0, a = "hsv") : Hn(e.h) && Hn(e.s) && Hn(e.l) && (r = zs(e.s), o = zs(e.l), t = L7(e.h, r, o), i = !0, a = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Mm(n), {
    ok: i,
    format: e.format || a,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var B7 = "[-\\+]?\\d+%?", F7 = "[-\\+]?\\d*\\.\\d+%?", wr = "(?:".concat(F7, ")|(?:").concat(B7, ")"), Na = "[\\s|\\(]+(".concat(wr, ")[,|\\s]+(").concat(wr, ")[,|\\s]+(").concat(wr, ")\\s*\\)?"), Ba = "[\\s|\\(]+(".concat(wr, ")[,|\\s]+(").concat(wr, ")[,|\\s]+(").concat(wr, ")[,|\\s]+(").concat(wr, ")\\s*\\)?"), bn = {
  CSS_UNIT: new RegExp(wr),
  rgb: new RegExp("rgb" + Na),
  rgba: new RegExp("rgba" + Ba),
  hsl: new RegExp("hsl" + Na),
  hsla: new RegExp("hsla" + Ba),
  hsv: new RegExp("hsv" + Na),
  hsva: new RegExp("hsva" + Ba),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function q7(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Cu[e])
    e = Cu[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = bn.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = bn.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = bn.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = bn.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = bn.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = bn.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = bn.hex8.exec(e), n ? {
    r: en(n[1]),
    g: en(n[2]),
    b: en(n[3]),
    a: np(n[4]),
    format: t ? "name" : "hex8"
  } : (n = bn.hex6.exec(e), n ? {
    r: en(n[1]),
    g: en(n[2]),
    b: en(n[3]),
    format: t ? "name" : "hex"
  } : (n = bn.hex4.exec(e), n ? {
    r: en(n[1] + n[1]),
    g: en(n[2] + n[2]),
    b: en(n[3] + n[3]),
    a: np(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = bn.hex3.exec(e), n ? {
    r: en(n[1] + n[1]),
    g: en(n[2] + n[2]),
    b: en(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Hn(e) {
  return !!bn.CSS_UNIT.exec(String(e));
}
var z7 = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = D7(t)), this.originalInput = t;
      var s = N7(t);
      this.originalInput = t, this.r = s.r, this.g = s.g, this.b = s.b, this.a = s.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : s.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = s.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, r, s, o = t.r / 255, i = t.g / 255, a = t.b / 255;
      return o <= 0.03928 ? n = o / 12.92 : n = Math.pow((o + 0.055) / 1.055, 2.4), i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), a <= 0.03928 ? s = a / 12.92 : s = Math.pow((a + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * s;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Mm(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = ep(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = ep(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), s = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(s, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(s, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Q0(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Q0(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), s = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(s, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(s, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), tp(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), R7(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(Mt(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Mt(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + tp(this.r, this.g, this.b, !1), n = 0, r = Object.entries(Cu); n < r.length; n++) {
        var s = r[n], o = s[0], i = s[1];
        if (t === i)
          return o;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1, s = this.a < 1 && this.a >= 0, o = !n && s && (t.startsWith("hex") || t === "name");
      return o ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = qs(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = qs(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = qs(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = qs(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), s = new e(t).toRgb(), o = n / 100, i = {
        r: (s.r - r.r) * o + r.r,
        g: (s.g - r.g) * o + r.g,
        b: (s.b - r.b) * o + r.b,
        a: (s.a - r.a) * o + r.a
      };
      return new e(i);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(), s = 360 / n, o = [this];
      for (r.h = (r.h - (s * t >> 1) + 720) % 360; --t; )
        r.h = (r.h + s) % 360, o.push(new e(r));
      return o;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, s = n.s, o = n.v, i = [], a = 1 / t; t--; )
        i.push(new e({ h: r, s, v: o })), o = (o + a) % 1;
      return i;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), r = new e(t).toRgb(), s = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / s,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / s,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / s,
        a: s
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), r = n.h, s = [this], o = 360 / t, i = 1; i < t; i++)
        s.push(new e({ h: (r + i * o) % 360, s: n.s, l: n.l }));
      return s;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function pr(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function H7(e) {
  const t = Qi(), n = Qe("button");
  return P(() => {
    let r = {};
    const s = e.color;
    if (s) {
      const o = new z7(s), i = e.dark ? o.tint(20).toString() : pr(o, 20);
      if (e.plain)
        r = n.cssVarBlock({
          "bg-color": e.dark ? pr(o, 90) : o.tint(90).toString(),
          "text-color": s,
          "border-color": e.dark ? pr(o, 50) : o.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": s,
          "hover-border-color": s,
          "active-bg-color": i,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": i
        }), t.value && (r[n.cssVarBlockName("disabled-bg-color")] = e.dark ? pr(o, 90) : o.tint(90).toString(), r[n.cssVarBlockName("disabled-text-color")] = e.dark ? pr(o, 50) : o.tint(50).toString(), r[n.cssVarBlockName("disabled-border-color")] = e.dark ? pr(o, 80) : o.tint(80).toString());
      else {
        const a = e.dark ? pr(o, 30) : o.tint(30).toString(), l = o.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (r = n.cssVarBlock({
          "bg-color": s,
          "text-color": l,
          "border-color": s,
          "hover-bg-color": a,
          "hover-text-color": l,
          "hover-border-color": a,
          "active-bg-color": i,
          "active-border-color": i
        }), t.value) {
          const u = e.dark ? pr(o, 50) : o.tint(50).toString();
          r[n.cssVarBlockName("disabled-bg-color")] = u, r[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, r[n.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return r;
  });
}
const j7 = /* @__PURE__ */ re({
  name: "ElButton"
}), V7 = /* @__PURE__ */ re({
  ...j7,
  props: ku,
  emits: T7,
  setup(e, { expose: t, emit: n }) {
    const r = e, s = H7(r), o = Qe("button"), { _ref: i, _size: a, _type: l, _disabled: u, _props: f, shouldAddSpace: c, handleClick: p } = E7(r, n);
    return t({
      ref: i,
      size: a,
      type: l,
      disabled: u,
      shouldAddSpace: c
    }), (d, m) => (w(), ue(Pt(d.tag), gt({
      ref_key: "_ref",
      ref: i
    }, b(f), {
      class: [
        b(o).b(),
        b(o).m(b(l)),
        b(o).m(b(a)),
        b(o).is("disabled", b(u)),
        b(o).is("loading", d.loading),
        b(o).is("plain", d.plain),
        b(o).is("round", d.round),
        b(o).is("circle", d.circle),
        b(o).is("text", d.text),
        b(o).is("link", d.link),
        b(o).is("has-bg", d.bg)
      ],
      style: b(s),
      onClick: b(p)
    }), {
      default: he(() => [
        d.loading ? (w(), A(et, { key: 0 }, [
          d.$slots.loading ? we(d.$slots, "loading", { key: 0 }) : (w(), ue(b(Gt), {
            key: 1,
            class: Q(b(o).is("loading"))
          }, {
            default: he(() => [
              (w(), ue(Pt(d.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : d.icon || d.$slots.icon ? (w(), ue(b(Gt), { key: 1 }, {
          default: he(() => [
            d.icon ? (w(), ue(Pt(d.icon), { key: 0 })) : we(d.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : _e("v-if", !0),
        d.$slots.default ? (w(), A("span", {
          key: 2,
          class: Q({ [b(o).em("text", "expand")]: b(c) })
        }, [
          we(d.$slots, "default")
        ], 2)) : _e("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var U7 = /* @__PURE__ */ Ye(V7, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const K7 = {
  size: ku.size,
  type: ku.type
}, W7 = /* @__PURE__ */ re({
  name: "ElButtonGroup"
}), G7 = /* @__PURE__ */ re({
  ...W7,
  props: K7,
  setup(e) {
    const t = e;
    Kt(Tm, Sn({
      size: yn(t, "size"),
      type: yn(t, "type")
    }));
    const n = Qe("button");
    return (r, s) => (w(), A("div", {
      class: Q(`${b(n).b("group")}`)
    }, [
      we(r.$slots, "default")
    ], 2));
  }
});
var $m = /* @__PURE__ */ Ye(G7, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const rp = An(U7, {
  ButtonGroup: $m
});
bf($m);
const gr = /* @__PURE__ */ new Map();
let op;
Nt && (document.addEventListener("mousedown", (e) => op = e), document.addEventListener("mouseup", (e) => {
  for (const t of gr.values())
    for (const { documentHandler: n } of t)
      n(e, op);
}));
function sp(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : cs(t.arg) && n.push(t.arg), function(r, s) {
    const o = t.instance.popperRef, i = r.target, a = s == null ? void 0 : s.target, l = !t || !t.instance, u = !i || !a, f = e.contains(i) || e.contains(a), c = e === i, p = n.length && n.some((m) => m == null ? void 0 : m.contains(i)) || n.length && n.includes(a), d = o && (o.contains(i) || o.contains(a));
    l || u || f || c || p || d || t.value(r, s);
  };
}
const Im = {
  beforeMount(e, t) {
    gr.has(e) || gr.set(e, []), gr.get(e).push({
      documentHandler: sp(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    gr.has(e) || gr.set(e, []);
    const n = gr.get(e), r = n.findIndex((o) => o.bindingFn === t.oldValue), s = {
      documentHandler: sp(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, s) : n.push(s);
  },
  unmounted(e) {
    gr.delete(e);
  }
}, Lm = ot({
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  closable: Boolean,
  disableTransitions: Boolean,
  hit: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: _s,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), Z7 = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, X7 = /* @__PURE__ */ re({
  name: "ElTag"
}), Y7 = /* @__PURE__ */ re({
  ...X7,
  props: Lm,
  emits: Z7,
  setup(e, { emit: t }) {
    const n = e, r = ks(), s = Qe("tag"), o = P(() => {
      const { type: l, hit: u, effect: f, closable: c, round: p } = n;
      return [
        s.b(),
        s.is("closable", c),
        s.m(l),
        s.m(r.value),
        s.m(f),
        s.is("hit", u),
        s.is("round", p)
      ];
    }), i = (l) => {
      t("close", l);
    }, a = (l) => {
      t("click", l);
    };
    return (l, u) => l.disableTransitions ? (w(), A("span", {
      key: 0,
      class: Q(b(o)),
      style: st({ backgroundColor: l.color }),
      onClick: a
    }, [
      v("span", {
        class: Q(b(s).e("content"))
      }, [
        we(l.$slots, "default")
      ], 2),
      l.closable ? (w(), ue(b(Gt), {
        key: 0,
        class: Q(b(s).e("close")),
        onClick: nn(i, ["stop"])
      }, {
        default: he(() => [
          Ce(b(yu))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : _e("v-if", !0)
    ], 6)) : (w(), ue(Xr, {
      key: 1,
      name: `${b(s).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: he(() => [
        v("span", {
          class: Q(b(o)),
          style: st({ backgroundColor: l.color }),
          onClick: a
        }, [
          v("span", {
            class: Q(b(s).e("content"))
          }, [
            we(l.$slots, "default")
          ], 2),
          l.closable ? (w(), ue(b(Gt), {
            key: 0,
            class: Q(b(s).e("close")),
            onClick: nn(i, ["stop"])
          }, {
            default: he(() => [
              Ce(b(yu))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : _e("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var J7 = /* @__PURE__ */ Ye(Y7, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const Q7 = An(J7), e9 = ot({
  color: {
    type: Ne(Object),
    required: !0
  },
  vertical: {
    type: Boolean,
    default: !1
  }
});
let Fa = !1;
function hs(e, t) {
  if (!Nt)
    return;
  const n = function(o) {
    var i;
    (i = t.drag) == null || i.call(t, o);
  }, r = function(o) {
    var i;
    document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", r), document.removeEventListener("touchmove", n), document.removeEventListener("touchend", r), document.onselectstart = null, document.ondragstart = null, Fa = !1, (i = t.end) == null || i.call(t, o);
  }, s = function(o) {
    var i;
    Fa || (o.preventDefault(), document.onselectstart = () => !1, document.ondragstart = () => !1, document.addEventListener("mousemove", n), document.addEventListener("mouseup", r), document.addEventListener("touchmove", n), document.addEventListener("touchend", r), Fa = !0, (i = t.start) == null || i.call(t, o));
  };
  e.addEventListener("mousedown", s), e.addEventListener("touchstart", s);
}
const t9 = (e) => {
  const t = _t(), n = Zn(), r = Zn();
  function s(i) {
    i.target !== n.value && o(i);
  }
  function o(i) {
    if (!r.value || !n.value)
      return;
    const l = t.vnode.el.getBoundingClientRect(), { clientX: u, clientY: f } = df(i);
    if (e.vertical) {
      let c = f - l.top;
      c = Math.max(n.value.offsetHeight / 2, c), c = Math.min(c, l.height - n.value.offsetHeight / 2), e.color.set("alpha", Math.round((c - n.value.offsetHeight / 2) / (l.height - n.value.offsetHeight) * 100));
    } else {
      let c = u - l.left;
      c = Math.max(n.value.offsetWidth / 2, c), c = Math.min(c, l.width - n.value.offsetWidth / 2), e.color.set("alpha", Math.round((c - n.value.offsetWidth / 2) / (l.width - n.value.offsetWidth) * 100));
    }
  }
  return {
    thumb: n,
    bar: r,
    handleDrag: o,
    handleClick: s
  };
}, n9 = (e, {
  bar: t,
  thumb: n,
  handleDrag: r
}) => {
  const s = _t(), o = Qe("color-alpha-slider"), i = W(0), a = W(0), l = W();
  function u() {
    if (!n.value || e.vertical)
      return 0;
    const k = s.vnode.el, y = e.color.get("alpha");
    return k ? Math.round(y * (k.offsetWidth - n.value.offsetWidth / 2) / 100) : 0;
  }
  function f() {
    if (!n.value)
      return 0;
    const k = s.vnode.el;
    if (!e.vertical)
      return 0;
    const y = e.color.get("alpha");
    return k ? Math.round(y * (k.offsetHeight - n.value.offsetHeight / 2) / 100) : 0;
  }
  function c() {
    if (e.color && e.color.value) {
      const { r: k, g: y, b: _ } = e.color.toRgb();
      return `linear-gradient(to right, rgba(${k}, ${y}, ${_}, 0) 0%, rgba(${k}, ${y}, ${_}, 1) 100%)`;
    }
    return "";
  }
  function p() {
    i.value = u(), a.value = f(), l.value = c();
  }
  it(() => {
    if (!t.value || !n.value)
      return;
    const k = {
      drag: (y) => {
        r(y);
      },
      end: (y) => {
        r(y);
      }
    };
    hs(t.value, k), hs(n.value, k), p();
  }), Te(() => e.color.get("alpha"), () => p()), Te(() => e.color.value, () => p());
  const d = P(() => [o.b(), o.is("vertical", e.vertical)]), m = P(() => o.e("bar")), g = P(() => o.e("thumb")), C = P(() => ({ background: l.value })), h = P(() => ({
    left: yo(i.value),
    top: yo(a.value)
  }));
  return { rootKls: d, barKls: m, barStyle: C, thumbKls: g, thumbStyle: h, update: p };
}, r9 = "ElColorAlphaSlider", o9 = /* @__PURE__ */ re({
  name: r9
}), s9 = /* @__PURE__ */ re({
  ...o9,
  props: e9,
  setup(e, { expose: t }) {
    const n = e, { bar: r, thumb: s, handleDrag: o, handleClick: i } = t9(n), { rootKls: a, barKls: l, barStyle: u, thumbKls: f, thumbStyle: c, update: p } = n9(n, {
      bar: r,
      thumb: s,
      handleDrag: o
    });
    return t({
      update: p,
      bar: r,
      thumb: s
    }), (d, m) => (w(), A("div", {
      class: Q(b(a))
    }, [
      v("div", {
        ref_key: "bar",
        ref: r,
        class: Q(b(l)),
        style: st(b(u)),
        onClick: m[0] || (m[0] = (...g) => b(i) && b(i)(...g))
      }, null, 6),
      v("div", {
        ref_key: "thumb",
        ref: s,
        class: Q(b(f)),
        style: st(b(c))
      }, null, 6)
    ], 2));
  }
});
var i9 = /* @__PURE__ */ Ye(s9, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/alpha-slider.vue"]]);
const a9 = /* @__PURE__ */ re({
  name: "ElColorHueSlider",
  props: {
    color: {
      type: Object,
      required: !0
    },
    vertical: Boolean
  },
  setup(e) {
    const t = Qe("color-hue-slider"), n = _t(), r = W(), s = W(), o = W(0), i = W(0), a = P(() => e.color.get("hue"));
    Te(() => a.value, () => {
      p();
    });
    function l(d) {
      d.target !== r.value && u(d);
    }
    function u(d) {
      if (!s.value || !r.value)
        return;
      const g = n.vnode.el.getBoundingClientRect(), { clientX: C, clientY: h } = df(d);
      let k;
      if (e.vertical) {
        let y = h - g.top;
        y = Math.min(y, g.height - r.value.offsetHeight / 2), y = Math.max(r.value.offsetHeight / 2, y), k = Math.round((y - r.value.offsetHeight / 2) / (g.height - r.value.offsetHeight) * 360);
      } else {
        let y = C - g.left;
        y = Math.min(y, g.width - r.value.offsetWidth / 2), y = Math.max(r.value.offsetWidth / 2, y), k = Math.round((y - r.value.offsetWidth / 2) / (g.width - r.value.offsetWidth) * 360);
      }
      e.color.set("hue", k);
    }
    function f() {
      if (!r.value)
        return 0;
      const d = n.vnode.el;
      if (e.vertical)
        return 0;
      const m = e.color.get("hue");
      return d ? Math.round(m * (d.offsetWidth - r.value.offsetWidth / 2) / 360) : 0;
    }
    function c() {
      if (!r.value)
        return 0;
      const d = n.vnode.el;
      if (!e.vertical)
        return 0;
      const m = e.color.get("hue");
      return d ? Math.round(m * (d.offsetHeight - r.value.offsetHeight / 2) / 360) : 0;
    }
    function p() {
      o.value = f(), i.value = c();
    }
    return it(() => {
      if (!s.value || !r.value)
        return;
      const d = {
        drag: (m) => {
          u(m);
        },
        end: (m) => {
          u(m);
        }
      };
      hs(s.value, d), hs(r.value, d), p();
    }), {
      bar: s,
      thumb: r,
      thumbLeft: o,
      thumbTop: i,
      hueValue: a,
      handleClick: l,
      update: p,
      ns: t
    };
  }
});
function l9(e, t, n, r, s, o) {
  return w(), A("div", {
    class: Q([e.ns.b(), e.ns.is("vertical", e.vertical)])
  }, [
    v("div", {
      ref: "bar",
      class: Q(e.ns.e("bar")),
      onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
    }, null, 2),
    v("div", {
      ref: "thumb",
      class: Q(e.ns.e("thumb")),
      style: st({
        left: e.thumbLeft + "px",
        top: e.thumbTop + "px"
      })
    }, null, 6)
  ], 2);
}
var c9 = /* @__PURE__ */ Ye(a9, [["render", l9], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/hue-slider.vue"]]);
const u9 = ot({
  modelValue: String,
  id: String,
  showAlpha: Boolean,
  colorFormat: String,
  disabled: Boolean,
  size: $f,
  popperClass: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  predefine: {
    type: Ne(Array)
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), f9 = {
  [Wt]: (e) => Ke(e) || Kr(e),
  [_f]: (e) => Ke(e) || Kr(e),
  activeChange: (e) => Ke(e) || Kr(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent
}, Om = Symbol("colorPickerContextKey"), ip = function(e, t, n) {
  return [
    e,
    t * n / ((e = (2 - t) * n) < 1 ? e : 2 - e) || 0,
    e / 2
  ];
}, d9 = function(e) {
  return typeof e == "string" && e.includes(".") && Number.parseFloat(e) === 1;
}, p9 = function(e) {
  return typeof e == "string" && e.includes("%");
}, mo = function(e, t) {
  d9(e) && (e = "100%");
  const n = p9(e);
  return e = Math.min(t, Math.max(0, Number.parseFloat(`${e}`))), n && (e = Number.parseInt(`${e * t}`, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / Number.parseFloat(t);
}, ap = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F"
}, ni = (e) => {
  e = Math.min(Math.round(e), 255);
  const t = Math.floor(e / 16), n = e % 16;
  return `${ap[t] || t}${ap[n] || n}`;
}, lp = function({ r: e, g: t, b: n }) {
  return Number.isNaN(+e) || Number.isNaN(+t) || Number.isNaN(+n) ? "" : `#${ni(e)}${ni(t)}${ni(n)}`;
}, qa = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
}, Nr = function(e) {
  return e.length === 2 ? (qa[e[0].toUpperCase()] || +e[0]) * 16 + (qa[e[1].toUpperCase()] || +e[1]) : qa[e[1].toUpperCase()] || +e[1];
}, h9 = function(e, t, n) {
  t = t / 100, n = n / 100;
  let r = t;
  const s = Math.max(n, 0.01);
  n *= 2, t *= n <= 1 ? n : 2 - n, r *= s <= 1 ? s : 2 - s;
  const o = (n + t) / 2, i = n === 0 ? 2 * r / (s + r) : 2 * t / (n + t);
  return {
    h: e,
    s: i * 100,
    v: o * 100
  };
}, cp = (e, t, n) => {
  e = mo(e, 255), t = mo(t, 255), n = mo(n, 255);
  const r = Math.max(e, t, n), s = Math.min(e, t, n);
  let o;
  const i = r, a = r - s, l = r === 0 ? 0 : a / r;
  if (r === s)
    o = 0;
  else {
    switch (r) {
      case e: {
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      }
      case t: {
        o = (n - e) / a + 2;
        break;
      }
      case n: {
        o = (e - t) / a + 4;
        break;
      }
    }
    o /= 6;
  }
  return { h: o * 360, s: l * 100, v: i * 100 };
}, No = function(e, t, n) {
  e = mo(e, 360) * 6, t = mo(t, 100), n = mo(n, 100);
  const r = Math.floor(e), s = e - r, o = n * (1 - t), i = n * (1 - s * t), a = n * (1 - (1 - s) * t), l = r % 6, u = [n, i, o, o, a, n][l], f = [a, n, n, i, o, o][l], c = [o, o, a, n, n, i][l];
  return {
    r: Math.round(u * 255),
    g: Math.round(f * 255),
    b: Math.round(c * 255)
  };
};
class Yo {
  constructor(t = {}) {
    this._hue = 0, this._saturation = 100, this._value = 100, this._alpha = 100, this.enableAlpha = !1, this.format = "hex", this.value = "";
    for (const n in t)
      Xe(t, n) && (this[n] = t[n]);
    t.value ? this.fromString(t.value) : this.doOnChange();
  }
  set(t, n) {
    if (arguments.length === 1 && typeof t == "object") {
      for (const r in t)
        Xe(t, r) && this.set(r, t[r]);
      return;
    }
    this[`_${t}`] = n, this.doOnChange();
  }
  get(t) {
    return t === "alpha" ? Math.floor(this[`_${t}`]) : this[`_${t}`];
  }
  toRgb() {
    return No(this._hue, this._saturation, this._value);
  }
  fromString(t) {
    if (!t) {
      this._hue = 0, this._saturation = 100, this._value = 100, this.doOnChange();
      return;
    }
    const n = (r, s, o) => {
      this._hue = Math.max(0, Math.min(360, r)), this._saturation = Math.max(0, Math.min(100, s)), this._value = Math.max(0, Math.min(100, o)), this.doOnChange();
    };
    if (t.includes("hsl")) {
      const r = t.replace(/hsla|hsl|\(|\)/gm, "").split(/\s|,/g).filter((s) => s !== "").map((s, o) => o > 2 ? Number.parseFloat(s) : Number.parseInt(s, 10));
      if (r.length === 4 ? this._alpha = Number.parseFloat(r[3]) * 100 : r.length === 3 && (this._alpha = 100), r.length >= 3) {
        const { h: s, s: o, v: i } = h9(r[0], r[1], r[2]);
        n(s, o, i);
      }
    } else if (t.includes("hsv")) {
      const r = t.replace(/hsva|hsv|\(|\)/gm, "").split(/\s|,/g).filter((s) => s !== "").map((s, o) => o > 2 ? Number.parseFloat(s) : Number.parseInt(s, 10));
      r.length === 4 ? this._alpha = Number.parseFloat(r[3]) * 100 : r.length === 3 && (this._alpha = 100), r.length >= 3 && n(r[0], r[1], r[2]);
    } else if (t.includes("rgb")) {
      const r = t.replace(/rgba|rgb|\(|\)/gm, "").split(/\s|,/g).filter((s) => s !== "").map((s, o) => o > 2 ? Number.parseFloat(s) : Number.parseInt(s, 10));
      if (r.length === 4 ? this._alpha = Number.parseFloat(r[3]) * 100 : r.length === 3 && (this._alpha = 100), r.length >= 3) {
        const { h: s, s: o, v: i } = cp(r[0], r[1], r[2]);
        n(s, o, i);
      }
    } else if (t.includes("#")) {
      const r = t.replace("#", "").trim();
      if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(r))
        return;
      let s, o, i;
      r.length === 3 ? (s = Nr(r[0] + r[0]), o = Nr(r[1] + r[1]), i = Nr(r[2] + r[2])) : (r.length === 6 || r.length === 8) && (s = Nr(r.slice(0, 2)), o = Nr(r.slice(2, 4)), i = Nr(r.slice(4, 6))), r.length === 8 ? this._alpha = Nr(r.slice(6)) / 255 * 100 : (r.length === 3 || r.length === 6) && (this._alpha = 100);
      const { h: a, s: l, v: u } = cp(s, o, i);
      n(a, l, u);
    }
  }
  compare(t) {
    return Math.abs(t._hue - this._hue) < 2 && Math.abs(t._saturation - this._saturation) < 1 && Math.abs(t._value - this._value) < 1 && Math.abs(t._alpha - this._alpha) < 1;
  }
  doOnChange() {
    const { _hue: t, _saturation: n, _value: r, _alpha: s, format: o } = this;
    if (this.enableAlpha)
      switch (o) {
        case "hsl": {
          const i = ip(t, n / 100, r / 100);
          this.value = `hsla(${t}, ${Math.round(i[1] * 100)}%, ${Math.round(i[2] * 100)}%, ${this.get("alpha") / 100})`;
          break;
        }
        case "hsv": {
          this.value = `hsva(${t}, ${Math.round(n)}%, ${Math.round(r)}%, ${this.get("alpha") / 100})`;
          break;
        }
        case "hex": {
          this.value = `${lp(No(t, n, r))}${ni(s * 255 / 100)}`;
          break;
        }
        default: {
          const { r: i, g: a, b: l } = No(t, n, r);
          this.value = `rgba(${i}, ${a}, ${l}, ${this.get("alpha") / 100})`;
        }
      }
    else
      switch (o) {
        case "hsl": {
          const i = ip(t, n / 100, r / 100);
          this.value = `hsl(${t}, ${Math.round(i[1] * 100)}%, ${Math.round(i[2] * 100)}%)`;
          break;
        }
        case "hsv": {
          this.value = `hsv(${t}, ${Math.round(n)}%, ${Math.round(r)}%)`;
          break;
        }
        case "rgb": {
          const { r: i, g: a, b: l } = No(t, n, r);
          this.value = `rgb(${i}, ${a}, ${l})`;
          break;
        }
        default:
          this.value = lp(No(t, n, r));
      }
  }
}
const g9 = /* @__PURE__ */ re({
  props: {
    colors: {
      type: Array,
      required: !0
    },
    color: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = Qe("color-predefine"), { currentColor: n } = qe(Om), r = W(o(e.colors, e.color));
    Te(() => n.value, (i) => {
      const a = new Yo();
      a.fromString(i), r.value.forEach((l) => {
        l.selected = a.compare(l);
      });
    }), tf(() => {
      r.value = o(e.colors, e.color);
    });
    function s(i) {
      e.color.fromString(e.colors[i]);
    }
    function o(i, a) {
      return i.map((l) => {
        const u = new Yo();
        return u.enableAlpha = !0, u.format = "rgba", u.fromString(l), u.selected = u.value === a.value, u;
      });
    }
    return {
      rgbaColors: r,
      handleSelect: s,
      ns: t
    };
  }
}), m9 = ["onClick"];
function v9(e, t, n, r, s, o) {
  return w(), A("div", {
    class: Q(e.ns.b())
  }, [
    v("div", {
      class: Q(e.ns.e("colors"))
    }, [
      (w(!0), A(et, null, Cn(e.rgbaColors, (i, a) => (w(), A("div", {
        key: e.colors[a],
        class: Q([
          e.ns.e("color-selector"),
          e.ns.is("alpha", i._alpha < 100),
          { selected: i.selected }
        ]),
        onClick: (l) => e.handleSelect(a)
      }, [
        v("div", {
          style: st({ backgroundColor: i.value })
        }, null, 4)
      ], 10, m9))), 128))
    ], 2)
  ], 2);
}
var b9 = /* @__PURE__ */ Ye(g9, [["render", v9], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/predefine.vue"]]);
const _9 = /* @__PURE__ */ re({
  name: "ElSlPanel",
  props: {
    color: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = Qe("color-svpanel"), n = _t(), r = W(0), s = W(0), o = W("hsl(0, 100%, 50%)"), i = P(() => {
      const u = e.color.get("hue"), f = e.color.get("value");
      return { hue: u, value: f };
    });
    function a() {
      const u = e.color.get("saturation"), f = e.color.get("value"), c = n.vnode.el, { clientWidth: p, clientHeight: d } = c;
      s.value = u * p / 100, r.value = (100 - f) * d / 100, o.value = `hsl(${e.color.get("hue")}, 100%, 50%)`;
    }
    function l(u) {
      const c = n.vnode.el.getBoundingClientRect(), { clientX: p, clientY: d } = df(u);
      let m = p - c.left, g = d - c.top;
      m = Math.max(0, m), m = Math.min(m, c.width), g = Math.max(0, g), g = Math.min(g, c.height), s.value = m, r.value = g, e.color.set({
        saturation: m / c.width * 100,
        value: 100 - g / c.height * 100
      });
    }
    return Te(() => i.value, () => {
      a();
    }), it(() => {
      hs(n.vnode.el, {
        drag: (u) => {
          l(u);
        },
        end: (u) => {
          l(u);
        }
      }), a();
    }), {
      cursorTop: r,
      cursorLeft: s,
      background: o,
      colorValue: i,
      handleDrag: l,
      update: a,
      ns: t
    };
  }
}), y9 = /* @__PURE__ */ v("div", null, null, -1), w9 = [
  y9
];
function k9(e, t, n, r, s, o) {
  return w(), A("div", {
    class: Q(e.ns.b()),
    style: st({
      backgroundColor: e.background
    })
  }, [
    v("div", {
      class: Q(e.ns.e("white"))
    }, null, 2),
    v("div", {
      class: Q(e.ns.e("black"))
    }, null, 2),
    v("div", {
      class: Q(e.ns.e("cursor")),
      style: st({
        top: e.cursorTop + "px",
        left: e.cursorLeft + "px"
      })
    }, w9, 6)
  ], 6);
}
var C9 = /* @__PURE__ */ Ye(_9, [["render", k9], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/sv-panel.vue"]]);
const x9 = ["onKeydown"], E9 = ["id", "aria-label", "aria-labelledby", "aria-description", "aria-disabled", "tabindex"], S9 = /* @__PURE__ */ re({
  name: "ElColorPicker"
}), A9 = /* @__PURE__ */ re({
  ...S9,
  props: u9,
  emits: f9,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: s } = Tn(), o = Qe("color"), { formItem: i } = ea(), a = ks(), l = Qi(), { inputId: u, isLabeledByFormItem: f } = _m(r, {
      formItemContext: i
    }), c = W(), p = W(), d = W(), m = W(), g = W(), C = W(), {
      isFocused: h,
      handleFocus: k,
      handleBlur: y
    } = bm(g, {
      beforeBlur(pe) {
        var Me;
        return (Me = m.value) == null ? void 0 : Me.isFocusInsideContent(pe);
      },
      afterBlur() {
        j(!1), L();
      }
    }), _ = (pe) => {
      if (l.value)
        return dt();
      k(pe);
    };
    let E = !0;
    const x = Sn(new Yo({
      enableAlpha: r.showAlpha,
      format: r.colorFormat || "",
      value: r.modelValue
    })), M = W(!1), $ = W(!1), O = W(""), D = P(() => !r.modelValue && !$.value ? "transparent" : ie(x, r.showAlpha)), B = P(() => !r.modelValue && !$.value ? "" : x.value), N = P(() => f.value ? void 0 : r.label || s("el.colorpicker.defaultLabel")), oe = P(() => f.value ? i == null ? void 0 : i.labelId : void 0), q = P(() => [
      o.b("picker"),
      o.is("disabled", l.value),
      o.bm("picker", a.value),
      o.is("focused", h.value)
    ]);
    function ie(pe, Me) {
      if (!(pe instanceof Yo))
        throw new TypeError("color should be instance of _color Class");
      const { r: T, g: I, b: z } = pe.toRgb();
      return Me ? `rgba(${T}, ${I}, ${z}, ${pe.get("alpha") / 100})` : `rgb(${T}, ${I}, ${z})`;
    }
    function j(pe) {
      M.value = pe;
    }
    const V = bu(j, 100, { leading: !0 });
    function H() {
      l.value || j(!0);
    }
    function J() {
      V(!1), L();
    }
    function L() {
      Ue(() => {
        r.modelValue ? x.fromString(r.modelValue) : (x.value = "", Ue(() => {
          $.value = !1;
        }));
      });
    }
    function Z() {
      l.value || V(!M.value);
    }
    function K() {
      x.fromString(O.value);
    }
    function me() {
      const pe = x.value;
      n(Wt, pe), n("change", pe), r.validateEvent && (i == null || i.validate("change").catch((Me) => void 0)), V(!1), Ue(() => {
        const Me = new Yo({
          enableAlpha: r.showAlpha,
          format: r.colorFormat || "",
          value: r.modelValue
        });
        x.compare(Me) || L();
      });
    }
    function Se() {
      V(!1), n(Wt, null), n("change", null), r.modelValue !== null && r.validateEvent && (i == null || i.validate("change").catch((pe) => void 0)), L();
    }
    function Re(pe) {
      if (M.value && (J(), h.value)) {
        const Me = new FocusEvent("focus", pe);
        y(Me);
      }
    }
    function Pe(pe) {
      pe.preventDefault(), pe.stopPropagation(), j(!1), L();
    }
    function We(pe) {
      switch (pe.code) {
        case Yn.enter:
        case Yn.space:
          pe.preventDefault(), pe.stopPropagation(), H(), C.value.focus();
          break;
        case Yn.esc:
          Pe(pe);
          break;
      }
    }
    function ze() {
      g.value.focus();
    }
    function dt() {
      g.value.blur();
    }
    return it(() => {
      r.modelValue && (O.value = B.value);
    }), Te(() => r.modelValue, (pe) => {
      pe ? pe && pe !== x.value && (E = !1, x.fromString(pe)) : $.value = !1;
    }), Te(() => B.value, (pe) => {
      O.value = pe, E && n("activeChange", pe), E = !0;
    }), Te(() => x.value, () => {
      !r.modelValue && !$.value && ($.value = !0);
    }), Te(() => M.value, () => {
      Ue(() => {
        var pe, Me, T;
        (pe = c.value) == null || pe.update(), (Me = p.value) == null || Me.update(), (T = d.value) == null || T.update();
      });
    }), Kt(Om, {
      currentColor: B
    }), t({
      color: x,
      show: H,
      hide: J,
      focus: ze,
      blur: dt
    }), (pe, Me) => (w(), ue(b(ps), {
      ref_key: "popper",
      ref: m,
      visible: M.value,
      "show-arrow": !1,
      "fallback-placements": ["bottom", "top", "right", "left"],
      offset: 0,
      "gpu-acceleration": !1,
      "popper-class": [b(o).be("picker", "panel"), b(o).b("dropdown"), pe.popperClass],
      "stop-popper-mouse-event": !1,
      effect: "light",
      trigger: "click",
      transition: `${b(o).namespace.value}-zoom-in-top`,
      persistent: "",
      onHide: Me[2] || (Me[2] = (T) => j(!1))
    }, {
      content: he(() => [
        Ut((w(), A("div", {
          onKeydown: zt(Pe, ["esc"])
        }, [
          v("div", {
            class: Q(b(o).be("dropdown", "main-wrapper"))
          }, [
            Ce(c9, {
              ref_key: "hue",
              ref: c,
              class: "hue-slider",
              color: b(x),
              vertical: ""
            }, null, 8, ["color"]),
            Ce(C9, {
              ref_key: "sv",
              ref: p,
              color: b(x)
            }, null, 8, ["color"])
          ], 2),
          pe.showAlpha ? (w(), ue(i9, {
            key: 0,
            ref_key: "alpha",
            ref: d,
            color: b(x)
          }, null, 8, ["color"])) : _e("v-if", !0),
          pe.predefine ? (w(), ue(b9, {
            key: 1,
            ref: "predefine",
            color: b(x),
            colors: pe.predefine
          }, null, 8, ["color", "colors"])) : _e("v-if", !0),
          v("div", {
            class: Q(b(o).be("dropdown", "btns"))
          }, [
            v("span", {
              class: Q(b(o).be("dropdown", "value"))
            }, [
              Ce(b(ta), {
                ref_key: "inputRef",
                ref: C,
                modelValue: O.value,
                "onUpdate:modelValue": Me[0] || (Me[0] = (T) => O.value = T),
                "validate-event": !1,
                size: "small",
                onKeyup: zt(K, ["enter"]),
                onBlur: K
              }, null, 8, ["modelValue", "onKeyup"])
            ], 2),
            Ce(b(rp), {
              class: Q(b(o).be("dropdown", "link-btn")),
              text: "",
              size: "small",
              onClick: Se
            }, {
              default: he(() => [
                Zr(Je(b(s)("el.colorpicker.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"]),
            Ce(b(rp), {
              plain: "",
              size: "small",
              class: Q(b(o).be("dropdown", "btn")),
              onClick: me
            }, {
              default: he(() => [
                Zr(Je(b(s)("el.colorpicker.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ], 2)
        ], 40, x9)), [
          [b(Im), Re]
        ])
      ]),
      default: he(() => [
        v("div", {
          id: b(u),
          ref_key: "triggerRef",
          ref: g,
          class: Q(b(q)),
          role: "button",
          "aria-label": b(N),
          "aria-labelledby": b(oe),
          "aria-description": b(s)("el.colorpicker.description", { color: pe.modelValue || "" }),
          "aria-disabled": b(l),
          tabindex: b(l) ? -1 : pe.tabindex,
          onKeydown: We,
          onFocus: _,
          onBlur: Me[1] || (Me[1] = (...T) => b(y) && b(y)(...T))
        }, [
          b(l) ? (w(), A("div", {
            key: 0,
            class: Q(b(o).be("picker", "mask"))
          }, null, 2)) : _e("v-if", !0),
          v("div", {
            class: Q(b(o).be("picker", "trigger")),
            onClick: Z
          }, [
            v("span", {
              class: Q([b(o).be("picker", "color"), b(o).is("alpha", pe.showAlpha)])
            }, [
              v("span", {
                class: Q(b(o).be("picker", "color-inner")),
                style: st({
                  backgroundColor: b(D)
                })
              }, [
                Ut(Ce(b(Gt), {
                  class: Q([b(o).be("picker", "icon"), b(o).is("icon-arrow-down")])
                }, {
                  default: he(() => [
                    Ce(b(Yg))
                  ]),
                  _: 1
                }, 8, ["class"]), [
                  [Qn, pe.modelValue || $.value]
                ]),
                Ut(Ce(b(Gt), {
                  class: Q([b(o).be("picker", "empty"), b(o).is("icon-close")])
                }, {
                  default: he(() => [
                    Ce(b(yu))
                  ]),
                  _: 1
                }, 8, ["class"]), [
                  [Qn, !pe.modelValue && !$.value]
                ])
              ], 6)
            ], 2)
          ], 2)
        ], 42, E9)
      ]),
      _: 1
    }, 8, ["visible", "popper-class", "transition"]));
  }
});
var T9 = /* @__PURE__ */ Ye(A9, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/color-picker.vue"]]);
const M9 = An(T9), $9 = /* @__PURE__ */ re({
  inheritAttrs: !1
});
function I9(e, t, n, r, s, o) {
  return we(e.$slots, "default");
}
var L9 = /* @__PURE__ */ Ye($9, [["render", I9], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);
const O9 = /* @__PURE__ */ re({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function R9(e, t, n, r, s, o) {
  return we(e.$slots, "default");
}
var P9 = /* @__PURE__ */ Ye(O9, [["render", R9], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);
const D9 = "data-el-collection-item", N9 = (e) => {
  const t = `El${e}Collection`, n = `${t}Item`, r = Symbol(t), s = Symbol(n), o = {
    ...L9,
    name: t,
    setup() {
      const a = W(null), l = /* @__PURE__ */ new Map();
      Kt(r, {
        itemMap: l,
        getItems: () => {
          const f = b(a);
          if (!f)
            return [];
          const c = Array.from(f.querySelectorAll(`[${D9}]`));
          return [...l.values()].sort((d, m) => c.indexOf(d.ref) - c.indexOf(m.ref));
        },
        collectionRef: a
      });
    }
  }, i = {
    ...P9,
    name: n,
    setup(a, { attrs: l }) {
      const u = W(null), f = qe(r, void 0);
      Kt(s, {
        collectionItemRef: u
      }), it(() => {
        const c = b(u);
        c && f.itemMap.set(c, {
          ref: c,
          ...l
        });
      }), Yt(() => {
        const c = b(u);
        f.itemMap.delete(c);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: r,
    COLLECTION_ITEM_INJECTION_KEY: s,
    ElCollection: o,
    ElCollectionItem: i
  };
}, za = ot({
  trigger: ds.trigger,
  effect: {
    ...tn.effect,
    default: "light"
  },
  type: {
    type: Ne(String)
  },
  placement: {
    type: Ne(String),
    default: "bottom"
  },
  popperOptions: {
    type: Ne(Object),
    default: () => ({})
  },
  id: String,
  size: {
    type: String,
    default: ""
  },
  splitButton: Boolean,
  hideOnClick: {
    type: Boolean,
    default: !0
  },
  loop: {
    type: Boolean,
    default: !0
  },
  showTimeout: {
    type: Number,
    default: 150
  },
  hideTimeout: {
    type: Number,
    default: 150
  },
  tabindex: {
    type: Ne([Number, String]),
    default: 0
  },
  maxHeight: {
    type: Ne([Number, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  role: {
    type: String,
    default: "menu"
  },
  buttonProps: {
    type: Ne(Object)
  },
  teleported: tn.teleported
});
ot({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: En
  }
});
ot({
  onKeydown: { type: Ne(Function) }
});
N9("Dropdown");
const Rm = Symbol("elPaginationKey"), B9 = ot({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  },
  prevIcon: {
    type: En
  }
}), F9 = {
  click: (e) => e instanceof MouseEvent
}, q9 = ["disabled", "aria-label", "aria-disabled"], z9 = { key: 0 }, H9 = /* @__PURE__ */ re({
  name: "ElPaginationPrev"
}), j9 = /* @__PURE__ */ re({
  ...H9,
  props: B9,
  emits: F9,
  setup(e) {
    const t = e, { t: n } = Tn(), r = P(() => t.disabled || t.currentPage <= 1);
    return (s, o) => (w(), A("button", {
      type: "button",
      class: "btn-prev",
      disabled: b(r),
      "aria-label": s.prevText || b(n)("el.pagination.prev"),
      "aria-disabled": b(r),
      onClick: o[0] || (o[0] = (i) => s.$emit("click", i))
    }, [
      s.prevText ? (w(), A("span", z9, Je(s.prevText), 1)) : (w(), ue(b(Gt), { key: 1 }, {
        default: he(() => [
          (w(), ue(Pt(s.prevIcon)))
        ]),
        _: 1
      }))
    ], 8, q9));
  }
});
var V9 = /* @__PURE__ */ Ye(j9, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
const U9 = ot({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    default: 50
  },
  nextText: {
    type: String
  },
  nextIcon: {
    type: En
  }
}), K9 = ["disabled", "aria-label", "aria-disabled"], W9 = { key: 0 }, G9 = /* @__PURE__ */ re({
  name: "ElPaginationNext"
}), Z9 = /* @__PURE__ */ re({
  ...G9,
  props: U9,
  emits: ["click"],
  setup(e) {
    const t = e, { t: n } = Tn(), r = P(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0);
    return (s, o) => (w(), A("button", {
      type: "button",
      class: "btn-next",
      disabled: b(r),
      "aria-label": s.nextText || b(n)("el.pagination.next"),
      "aria-disabled": b(r),
      onClick: o[0] || (o[0] = (i) => s.$emit("click", i))
    }, [
      s.nextText ? (w(), A("span", W9, Je(s.nextText), 1)) : (w(), ue(b(Gt), { key: 1 }, {
        default: he(() => [
          (w(), ue(Pt(s.nextIcon)))
        ]),
        _: 1
      }))
    ], 8, K9));
  }
});
var X9 = /* @__PURE__ */ Ye(Z9, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
const Pm = Symbol("ElSelectGroup"), ra = Symbol("ElSelect");
function Y9(e, t) {
  const n = qe(ra), r = qe(Pm, { disabled: !1 }), s = P(() => Fe(e.value)), o = P(() => n.props.multiple ? c(n.props.modelValue, e.value) : p(e.value, n.props.modelValue)), i = P(() => {
    if (n.props.multiple) {
      const g = n.props.modelValue || [];
      return !o.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), a = P(() => e.label || (s.value ? "" : e.value)), l = P(() => e.value || e.label || ""), u = P(() => e.disabled || t.groupDisabled || i.value), f = _t(), c = (g = [], C) => {
    if (s.value) {
      const h = n.props.valueKey;
      return g && g.some((k) => je(rn(k, h)) === rn(C, h));
    } else
      return g && g.includes(C);
  }, p = (g, C) => {
    if (s.value) {
      const { valueKey: h } = n.props;
      return rn(g, h) === rn(C, h);
    } else
      return g === C;
  }, d = () => {
    !e.disabled && !r.disabled && (n.hoverIndex = n.optionsArray.indexOf(f.proxy));
  };
  Te(() => a.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Te(() => e.value, (g, C) => {
    const { remote: h, valueKey: k } = n.props;
    if (Object.is(g, C) || (n.onOptionDestroy(C, f.proxy), n.onOptionCreate(f.proxy)), !e.created && !h) {
      if (k && Fe(g) && Fe(C) && g[k] === C[k])
        return;
      n.setSelected();
    }
  }), Te(() => r.disabled, () => {
    t.groupDisabled = r.disabled;
  }, { immediate: !0 });
  const { queryChange: m } = je(n);
  return Te(m, (g) => {
    const { query: C } = b(g), h = new RegExp(F5(C), "i");
    t.visible = h.test(a.value) || e.created, t.visible || n.filteredOptionsCount--;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: a,
    currentValue: l,
    itemSelected: o,
    isDisabled: u,
    hoverItem: d
  };
}
const J9 = /* @__PURE__ */ re({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: !0,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: Boolean
  },
  setup(e) {
    const t = Qe("select"), n = Ji(), r = P(() => [
      t.be("dropdown", "item"),
      t.is("disabled", b(a)),
      {
        selected: b(i),
        hover: b(c)
      }
    ]), s = Sn({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: o, itemSelected: i, isDisabled: a, select: l, hoverItem: u } = Y9(e, s), { visible: f, hover: c } = Ri(s), p = _t().proxy;
    l.onOptionCreate(p), Yt(() => {
      const m = p.value, { selected: g } = l, h = (l.props.multiple ? g : [g]).some((k) => k.value === p.value);
      Ue(() => {
        l.cachedOptions.get(m) === p && !h && l.cachedOptions.delete(m);
      }), l.onOptionDestroy(m, p);
    });
    function d() {
      e.disabled !== !0 && s.groupDisabled !== !0 && l.handleOptionSelect(p);
    }
    return {
      ns: t,
      id: n,
      containerKls: r,
      currentLabel: o,
      itemSelected: i,
      isDisabled: a,
      select: l,
      hoverItem: u,
      visible: f,
      hover: c,
      selectOptionClick: d,
      states: s
    };
  }
}), Q9 = ["id", "aria-disabled", "aria-selected"];
function eA(e, t, n, r, s, o) {
  return Ut((w(), A("li", {
    id: e.id,
    class: Q(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMouseenter: t[0] || (t[0] = (...i) => e.hoverItem && e.hoverItem(...i)),
    onClick: t[1] || (t[1] = nn((...i) => e.selectOptionClick && e.selectOptionClick(...i), ["stop"]))
  }, [
    we(e.$slots, "default", {}, () => [
      v("span", null, Je(e.currentLabel), 1)
    ])
  ], 42, Q9)), [
    [Qn, e.visible]
  ]);
}
var Df = /* @__PURE__ */ Ye(J9, [["render", eA], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const tA = /* @__PURE__ */ re({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = qe(ra), t = Qe("select"), n = P(() => e.props.popperClass), r = P(() => e.props.multiple), s = P(() => e.props.fitInputWidth), o = W("");
    function i() {
      var a;
      o.value = `${(a = e.selectWrapper) == null ? void 0 : a.offsetWidth}px`;
    }
    return it(() => {
      i(), ji(e.selectWrapper, i);
    }), {
      ns: t,
      minWidth: o,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: s
    };
  }
});
function nA(e, t, n, r, s, o) {
  return w(), A("div", {
    class: Q([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: st({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (w(), A("div", {
      key: 0,
      class: Q(e.ns.be("dropdown", "header"))
    }, [
      we(e.$slots, "header")
    ], 2)) : _e("v-if", !0),
    we(e.$slots, "default"),
    e.$slots.footer ? (w(), A("div", {
      key: 1,
      class: Q(e.ns.be("dropdown", "footer"))
    }, [
      we(e.$slots, "footer")
    ], 2)) : _e("v-if", !0)
  ], 6);
}
var rA = /* @__PURE__ */ Ye(tA, [["render", nA], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function oA(e) {
  const { t } = Tn();
  return Sn({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    disabledOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: !1,
    selected: e.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: !1,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: !1,
    cachedPlaceHolder: "",
    currentPlaceholder: t("el.select.placeholder"),
    menuVisibleOnFocus: !1,
    isOnComposition: !1,
    prefixWidth: 11,
    mouseEnter: !1,
    focused: !1
  });
}
const sA = (e, t, n) => {
  const { t: r } = Tn(), s = Qe("select");
  nm({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, P(() => e.suffixTransition === !1));
  const o = W(null), i = W(null), a = W(null), l = W(null), u = W(null), f = W(null), c = W(null), p = W(null), d = W(), m = Zn({ query: "" }), g = Zn(""), C = W([]);
  let h = 0;
  const { form: k, formItem: y } = ea(), _ = P(() => !e.filterable || e.multiple || !t.visible), E = P(() => e.disabled || (k == null ? void 0 : k.disabled)), x = P(() => {
    const F = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !E.value && t.inputHovering && F;
  }), M = P(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), $ = P(() => s.is("reverse", M.value && t.visible && e.suffixTransition)), O = P(() => (k == null ? void 0 : k.statusIcon) && (y == null ? void 0 : y.validateState) && em[y == null ? void 0 : y.validateState]), D = P(() => e.remote ? 300 : 0), B = P(() => e.loading ? e.loadingText || r("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || r("el.select.noMatch") : t.options.size === 0 ? e.noDataText || r("el.select.noData") : null), N = P(() => {
    const F = Array.from(t.options.values()), S = [];
    return C.value.forEach((R) => {
      const G = F.findIndex((ke) => ke.currentLabel === R);
      G > -1 && S.push(F[G]);
    }), S.length >= F.length ? S : F;
  }), oe = P(() => Array.from(t.cachedOptions.values())), q = P(() => {
    const F = N.value.filter((S) => !S.created).some((S) => S.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !F;
  }), ie = ks(), j = P(() => ["small"].includes(ie.value) ? "small" : "default"), V = P({
    get() {
      return t.visible && B.value !== !1;
    },
    set(F) {
      t.visible = F;
    }
  });
  Te([() => E.value, () => ie.value, () => k == null ? void 0 : k.size], () => {
    Ue(() => {
      H();
    });
  }), Te(() => e.placeholder, (F) => {
    t.cachedPlaceHolder = t.currentPlaceholder = F, e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (t.currentPlaceholder = "");
  }), Te(() => e.modelValue, (F, S) => {
    e.multiple && (H(), F && F.length > 0 || i.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", J(t.query))), K(), e.filterable && !e.multiple && (t.inputLength = 20), !_u(F, S) && e.validateEvent && (y == null || y.validate("change").catch((R) => void 0));
  }, {
    flush: "post",
    deep: !0
  }), Te(() => t.visible, (F) => {
    var S, R, G, ke, He;
    F ? ((R = (S = l.value) == null ? void 0 : S.updatePopper) == null || R.call(S), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, (ke = (G = a.value) == null ? void 0 : G.focus) == null || ke.call(G), e.multiple ? (He = i.value) == null || He.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), J(t.query), !e.multiple && !e.remote && (m.value.query = "", Io(m), Io(g)))) : (e.filterable && (Ee(e.filterMethod) && e.filterMethod(""), Ee(e.remoteMethod) && e.remoteMethod("")), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, Se(), Ue(() => {
      i.value && i.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", F);
  }), Te(() => t.options.entries(), () => {
    var F, S, R;
    if (!Nt)
      return;
    (S = (F = l.value) == null ? void 0 : F.updatePopper) == null || S.call(F), e.multiple && H();
    const G = ((R = c.value) == null ? void 0 : R.querySelectorAll("input")) || [];
    (!e.filterable && !e.defaultFirstOption && !Xg(e.modelValue) || !Array.from(G).includes(document.activeElement)) && K(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && Z();
  }, {
    flush: "post"
  }), Te(() => t.hoverIndex, (F) => {
    vt(F) && F > -1 ? d.value = N.value[F] || {} : d.value = {}, N.value.forEach((S) => {
      S.hover = d.value === S;
    });
  });
  const H = () => {
    Ue(() => {
      var F, S;
      if (!o.value)
        return;
      const R = o.value.$el.querySelector("input");
      h = h || (R.clientHeight > 0 ? R.clientHeight + 2 : 0);
      const G = f.value, ke = getComputedStyle(R).getPropertyValue(s.cssVarName("input-height")), He = Number.parseFloat(ke) || f8(ie.value || (k == null ? void 0 : k.size)), Ge = ie.value || He === h || h <= 0 ? He : h;
      !(R.offsetParent === null) && (R.style.height = `${(t.selected.length === 0 ? Ge : Math.max(G ? G.clientHeight + (G.clientHeight > Ge ? 6 : 0) : 0, Ge)) - 2}px`), t.visible && B.value !== !1 && ((S = (F = l.value) == null ? void 0 : F.updatePopper) == null || S.call(F));
    });
  }, J = async (F) => {
    if (!(t.previousQuery === F || t.isOnComposition)) {
      if (t.previousQuery === null && (Ee(e.filterMethod) || Ee(e.remoteMethod))) {
        t.previousQuery = F;
        return;
      }
      t.previousQuery = F, Ue(() => {
        var S, R;
        t.visible && ((R = (S = l.value) == null ? void 0 : S.updatePopper) == null || R.call(S));
      }), t.hoverIndex = -1, e.multiple && e.filterable && Ue(() => {
        if (!E.value) {
          const S = i.value.value.length * 15 + 20;
          t.inputLength = e.collapseTags ? Math.min(50, S) : S, L();
        }
        H();
      }), e.remote && Ee(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(F)) : Ee(e.filterMethod) ? (e.filterMethod(F), Io(g)) : (t.filteredOptionsCount = t.optionsCount, m.value.query = F, Io(m), Io(g)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await Ue(), Z());
    }
  }, L = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = i.value.value ? "" : t.cachedPlaceHolder);
  }, Z = () => {
    const F = N.value.filter((G) => G.visible && !G.disabled && !G.states.groupDisabled), S = F.find((G) => G.created), R = F[0];
    t.hoverIndex = X(N.value, S || R);
  }, K = () => {
    var F;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const R = me(e.modelValue);
      (F = R.props) != null && F.created ? (t.createdLabel = R.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = R.currentLabel, t.selected = R, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const S = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((R) => {
      S.push(me(R));
    }), t.selected = S, Ue(() => {
      H();
    });
  }, me = (F) => {
    let S;
    const R = Zs(F).toLowerCase() === "object", G = Zs(F).toLowerCase() === "null", ke = Zs(F).toLowerCase() === "undefined";
    for (let be = t.cachedOptions.size - 1; be >= 0; be--) {
      const de = oe.value[be];
      if (R ? rn(de.value, e.valueKey) === rn(F, e.valueKey) : de.value === F) {
        S = {
          value: F,
          currentLabel: de.currentLabel,
          isDisabled: de.isDisabled
        };
        break;
      }
    }
    if (S)
      return S;
    const He = R ? F.label : !G && !ke ? F : "", Ge = {
      value: F,
      currentLabel: He
    };
    return e.multiple && (Ge.hitState = !1), Ge;
  }, Se = () => {
    setTimeout(() => {
      const F = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((S) => N.value.findIndex((R) => rn(R, F) === rn(S, F)))) : t.hoverIndex = -1 : t.hoverIndex = N.value.findIndex((S) => an(S) === an(t.selected));
    }, 300);
  }, Re = () => {
    var F, S;
    Pe(), (S = (F = l.value) == null ? void 0 : F.updatePopper) == null || S.call(F), e.multiple && H();
  }, Pe = () => {
    var F;
    t.inputWidth = (F = o.value) == null ? void 0 : F.$el.offsetWidth;
  }, We = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, J(t.query));
  }, ze = bu(() => {
    We();
  }, D.value), dt = bu((F) => {
    J(F.target.value);
  }, D.value), pe = (F) => {
    _u(e.modelValue, F) || n.emit(_f, F);
  }, Me = (F) => D5(F, (S) => !t.disabledOptions.has(S)), T = (F) => {
    if (F.code !== Yn.delete) {
      if (F.target.value.length <= 0 && !ye()) {
        const S = e.modelValue.slice(), R = Me(S);
        if (R < 0)
          return;
        S.splice(R, 1), n.emit(Wt, S), pe(S);
      }
      F.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }
  }, I = (F, S) => {
    const R = t.selected.indexOf(S);
    if (R > -1 && !E.value) {
      const G = e.modelValue.slice();
      G.splice(R, 1), n.emit(Wt, G), pe(G), n.emit("remove-tag", S.value);
    }
    F.stopPropagation(), le();
  }, z = (F) => {
    F.stopPropagation();
    const S = e.multiple ? [] : "";
    if (!Ke(S))
      for (const R of t.selected)
        R.isDisabled && S.push(R.value);
    n.emit(Wt, S), pe(S), t.hoverIndex = -1, t.visible = !1, n.emit("clear"), le();
  }, Y = (F) => {
    var S;
    if (e.multiple) {
      const R = (e.modelValue || []).slice(), G = X(R, F.value);
      G > -1 ? R.splice(G, 1) : (e.multipleLimit <= 0 || R.length < e.multipleLimit) && R.push(F.value), n.emit(Wt, R), pe(R), F.created && (t.query = "", J(""), t.inputLength = 20), e.filterable && ((S = i.value) == null || S.focus());
    } else
      n.emit(Wt, F.value), pe(F.value), t.visible = !1;
    ee(), !t.visible && Ue(() => {
      ae(F);
    });
  }, X = (F = [], S) => {
    if (!Fe(S))
      return F.indexOf(S);
    const R = e.valueKey;
    let G = -1;
    return F.some((ke, He) => je(rn(ke, R)) === rn(S, R) ? (G = He, !0) : !1), G;
  }, ee = () => {
    const F = i.value || o.value;
    F && (F == null || F.focus());
  }, ae = (F) => {
    var S, R, G, ke, He;
    const Ge = Array.isArray(F) ? F[0] : F;
    let be = null;
    if (Ge != null && Ge.value) {
      const de = N.value.filter((Ie) => Ie.value === Ge.value);
      de.length > 0 && (be = de[0].$el);
    }
    if (l.value && be) {
      const de = (ke = (G = (R = (S = l.value) == null ? void 0 : S.popperRef) == null ? void 0 : R.contentRef) == null ? void 0 : G.querySelector) == null ? void 0 : ke.call(G, `.${s.be("dropdown", "wrap")}`);
      de && H5(de, be);
    }
    (He = p.value) == null || He.handleScroll();
  }, se = (F) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(F.value, F), t.cachedOptions.set(F.value, F), F.disabled && t.disabledOptions.set(F.value, F);
  }, ne = (F, S) => {
    t.options.get(F) === S && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(F));
  }, te = (F) => {
    F.code !== Yn.backspace && ye(!1), t.inputLength = i.value.value.length * 15 + 20, H();
  }, ye = (F) => {
    if (!Array.isArray(t.selected))
      return;
    const S = Me(t.selected.map((G) => G.value)), R = t.selected[S];
    if (R)
      return F === !0 || F === !1 ? (R.hitState = F, F) : (R.hitState = !R.hitState, R.hitState);
  }, fe = (F) => {
    const S = F.target.value;
    if (F.type === "compositionend")
      t.isOnComposition = !1, Ue(() => J(S));
    else {
      const R = S[S.length - 1] || "";
      t.isOnComposition = !tm(R);
    }
  }, ve = () => {
    Ue(() => ae(t.selected));
  }, U = (F) => {
    t.focused || ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), t.focused = !0, n.emit("focus", F));
  }, le = () => {
    var F, S;
    t.visible ? (F = i.value || o.value) == null || F.focus() : (S = o.value) == null || S.focus();
  }, Ae = () => {
    var F, S, R;
    t.visible = !1, (F = o.value) == null || F.blur(), (R = (S = a.value) == null ? void 0 : S.blur) == null || R.call(S);
  }, Oe = (F) => {
    var S, R, G;
    (S = l.value) != null && S.isFocusInsideContent(F) || (R = u.value) != null && R.isFocusInsideContent(F) || (G = c.value) != null && G.contains(F.relatedTarget) || (t.visible && ht(), t.focused = !1, n.emit("blur", F));
  }, ct = (F) => {
    z(F);
  }, ht = () => {
    t.visible = !1;
  }, kt = (F) => {
    t.visible && (F.preventDefault(), F.stopPropagation(), t.visible = !1);
  }, Et = (F) => {
    F && !t.mouseEnter || E.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!l.value || !l.value.isFocusInsideContent()) && (t.visible = !t.visible), le());
  }, gn = () => {
    t.visible ? N.value[t.hoverIndex] && Y(N.value[t.hoverIndex]) : Et();
  }, an = (F) => Fe(F.value) ? rn(F.value, e.valueKey) : F.value, mt = P(() => N.value.filter((F) => F.visible).every((F) => F.disabled)), $t = P(() => e.multiple ? t.selected.slice(0, e.maxCollapseTags) : []), $n = P(() => e.multiple ? t.selected.slice(e.maxCollapseTags) : []), lr = (F) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !mt.value) {
      F === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : F === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const S = N.value[t.hoverIndex];
      (S.disabled === !0 || S.states.groupDisabled === !0 || !S.visible) && lr(F), Ue(() => ae(d.value));
    }
  }, Qr = () => {
    t.mouseEnter = !0;
  }, $r = () => {
    t.mouseEnter = !1;
  }, Mo = (F, S) => {
    var R, G;
    I(F, S), (G = (R = u.value) == null ? void 0 : R.updatePopper) == null || G.call(R);
  }, eo = P(() => ({
    maxWidth: `${b(t.inputWidth) - 32 - (O.value ? 22 : 0)}px`,
    width: "100%"
  }));
  return {
    optionList: C,
    optionsArray: N,
    hoverOption: d,
    selectSize: ie,
    handleResize: Re,
    debouncedOnInputChange: ze,
    debouncedQueryChange: dt,
    deletePrevTag: T,
    deleteTag: I,
    deleteSelected: z,
    handleOptionSelect: Y,
    scrollToOption: ae,
    readonly: _,
    resetInputHeight: H,
    showClose: x,
    iconComponent: M,
    iconReverse: $,
    showNewOption: q,
    collapseTagSize: j,
    setSelected: K,
    managePlaceholder: L,
    selectDisabled: E,
    emptyText: B,
    toggleLastOptionHitState: ye,
    resetInputState: te,
    handleComposition: fe,
    onOptionCreate: se,
    onOptionDestroy: ne,
    handleMenuEnter: ve,
    handleFocus: U,
    focus: le,
    blur: Ae,
    handleBlur: Oe,
    handleClearClick: ct,
    handleClose: ht,
    handleKeydownEscape: kt,
    toggleMenu: Et,
    selectOption: gn,
    getValueKey: an,
    navigateOptions: lr,
    handleDeleteTooltipTag: Mo,
    dropMenuVisible: V,
    queryChange: m,
    groupQueryChange: g,
    showTagList: $t,
    collapseTagList: $n,
    selectTagsStyle: eo,
    reference: o,
    input: i,
    iOSInput: a,
    tooltipRef: l,
    tagTooltipRef: u,
    tags: f,
    selectWrapper: c,
    scrollbar: p,
    handleMouseEnter: Qr,
    handleMouseLeave: $r
  };
};
var iA = /* @__PURE__ */ re({
  name: "ElOptions",
  emits: ["update-options"],
  setup(e, { slots: t, emit: n }) {
    let r = [];
    function s(o, i) {
      if (o.length !== i.length)
        return !1;
      for (const [a] of o.entries())
        if (o[a] != i[a])
          return !1;
      return !0;
    }
    return () => {
      var o, i;
      const a = (o = t.default) == null ? void 0 : o.call(t), l = [];
      function u(f) {
        Array.isArray(f) && f.forEach((c) => {
          var p, d, m, g;
          const C = (p = (c == null ? void 0 : c.type) || {}) == null ? void 0 : p.name;
          C === "ElOptionGroup" ? u(!Ke(c.children) && !Array.isArray(c.children) && Ee((d = c.children) == null ? void 0 : d.default) ? (m = c.children) == null ? void 0 : m.default() : c.children) : C === "ElOption" ? l.push((g = c.props) == null ? void 0 : g.label) : Array.isArray(c.children) && u(c.children);
        });
      }
      return a.length && u((i = a[0]) == null ? void 0 : i.children), s(l, r) || (r = l, n("update-options", l)), a;
    };
  }
});
const up = "ElSelect", aA = /* @__PURE__ */ re({
  name: up,
  componentName: up,
  components: {
    ElInput: ta,
    ElSelectMenu: rA,
    ElOption: Df,
    ElOptions: iA,
    ElTag: Q7,
    ElScrollbar: wS,
    ElTooltip: ps,
    ElIcon: Gt
  },
  directives: { ClickOutside: Im },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: d8
    },
    effect: {
      type: String,
      default: "light"
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: ""
    },
    popperOptions: {
      type: Object,
      default: () => ({})
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      default: !0
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: Boolean,
    maxCollapseTags: {
      type: Number,
      default: 1
    },
    teleported: tn.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: En,
      default: vf
    },
    fitInputWidth: Boolean,
    suffixIcon: {
      type: En,
      default: Yg
    },
    tagType: { ...Lm.type, default: "info" },
    validateEvent: {
      type: Boolean,
      default: !0
    },
    remoteShowSuffix: Boolean,
    suffixTransition: {
      type: Boolean,
      default: !0
    },
    placement: {
      type: String,
      values: Xi,
      default: "bottom-start"
    },
    ariaLabel: {
      type: String,
      default: void 0
    }
  },
  emits: [
    Wt,
    _f,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = Qe("select"), r = Qe("input"), { t: s } = Tn(), o = Ji(), i = oA(e), {
      optionList: a,
      optionsArray: l,
      hoverOption: u,
      selectSize: f,
      readonly: c,
      handleResize: p,
      collapseTagSize: d,
      debouncedOnInputChange: m,
      debouncedQueryChange: g,
      deletePrevTag: C,
      deleteTag: h,
      deleteSelected: k,
      handleOptionSelect: y,
      scrollToOption: _,
      setSelected: E,
      resetInputHeight: x,
      managePlaceholder: M,
      showClose: $,
      selectDisabled: O,
      iconComponent: D,
      iconReverse: B,
      showNewOption: N,
      emptyText: oe,
      toggleLastOptionHitState: q,
      resetInputState: ie,
      handleComposition: j,
      onOptionCreate: V,
      onOptionDestroy: H,
      handleMenuEnter: J,
      handleFocus: L,
      focus: Z,
      blur: K,
      handleBlur: me,
      handleClearClick: Se,
      handleClose: Re,
      handleKeydownEscape: Pe,
      toggleMenu: We,
      selectOption: ze,
      getValueKey: dt,
      navigateOptions: pe,
      handleDeleteTooltipTag: Me,
      dropMenuVisible: T,
      reference: I,
      input: z,
      iOSInput: Y,
      tooltipRef: X,
      tagTooltipRef: ee,
      tags: ae,
      selectWrapper: se,
      scrollbar: ne,
      queryChange: te,
      groupQueryChange: ye,
      handleMouseEnter: fe,
      handleMouseLeave: ve,
      showTagList: U,
      collapseTagList: le,
      selectTagsStyle: Ae
    } = sA(e, i, t), {
      inputWidth: Oe,
      selected: ct,
      inputLength: ht,
      filteredOptionsCount: kt,
      visible: Et,
      selectedLabel: gn,
      hoverIndex: an,
      query: mt,
      inputHovering: $t,
      currentPlaceholder: $n,
      menuVisibleOnFocus: lr,
      isOnComposition: Qr,
      options: $r,
      cachedOptions: Mo,
      optionsCount: eo,
      prefixWidth: F
    } = Ri(i), S = P(() => {
      const Ze = [n.b()], Jt = b(f);
      return Jt && Ze.push(n.m(Jt)), e.disabled && Ze.push(n.m("disabled")), Ze;
    }), R = P(() => [
      n.e("tags"),
      n.is("disabled", b(O))
    ]), G = P(() => [
      n.b("tags-wrapper"),
      { "has-prefix": b(F) && b(ct).length }
    ]), ke = P(() => [
      n.e("input"),
      n.is(b(f)),
      n.is("disabled", b(O))
    ]), He = P(() => [
      n.e("input"),
      n.is(b(f)),
      n.em("input", "iOS")
    ]), Ge = P(() => [
      n.is("empty", !e.allowCreate && !!b(mt) && b(kt) === 0)
    ]), be = P(() => ({ maxWidth: `${b(Oe) > 123 && b(ct).length > e.maxCollapseTags ? b(Oe) - 123 : b(Oe) - 75}px` })), de = P(() => ({
      marginLeft: `${b(F)}px`,
      flexGrow: 1,
      width: `${b(ht) / (b(Oe) - 32)}%`,
      maxWidth: `${b(Oe) - 42}px`
    }));
    Kt(ra, Sn({
      props: e,
      options: $r,
      optionsArray: l,
      cachedOptions: Mo,
      optionsCount: eo,
      filteredOptionsCount: kt,
      hoverIndex: an,
      handleOptionSelect: y,
      onOptionCreate: V,
      onOptionDestroy: H,
      selectWrapper: se,
      selected: ct,
      setSelected: E,
      queryChange: te,
      groupQueryChange: ye
    })), it(() => {
      i.cachedPlaceHolder = $n.value = e.placeholder || (() => s("el.select.placeholder")), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && ($n.value = ""), ji(se, p), e.remote && e.multiple && x(), Ue(() => {
        const Ze = I.value && I.value.$el;
        if (Ze && (Oe.value = Ze.getBoundingClientRect().width, t.slots.prefix)) {
          const Jt = Ze.querySelector(`.${r.e("prefix")}`);
          F.value = Math.max(Jt.getBoundingClientRect().width + 11, 30);
        }
      }), E();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(Wt, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(Wt, "");
    const Ie = P(() => {
      var Ze, Jt;
      return (Jt = (Ze = X.value) == null ? void 0 : Ze.popperRef) == null ? void 0 : Jt.contentRef;
    });
    return {
      isIOS: Ig,
      onOptionsRendered: (Ze) => {
        a.value = Ze;
      },
      prefixWidth: F,
      selectSize: f,
      readonly: c,
      handleResize: p,
      collapseTagSize: d,
      debouncedOnInputChange: m,
      debouncedQueryChange: g,
      deletePrevTag: C,
      deleteTag: h,
      handleDeleteTooltipTag: Me,
      deleteSelected: k,
      handleOptionSelect: y,
      scrollToOption: _,
      inputWidth: Oe,
      selected: ct,
      inputLength: ht,
      filteredOptionsCount: kt,
      visible: Et,
      selectedLabel: gn,
      hoverIndex: an,
      query: mt,
      inputHovering: $t,
      currentPlaceholder: $n,
      menuVisibleOnFocus: lr,
      isOnComposition: Qr,
      options: $r,
      resetInputHeight: x,
      managePlaceholder: M,
      showClose: $,
      selectDisabled: O,
      iconComponent: D,
      iconReverse: B,
      showNewOption: N,
      emptyText: oe,
      toggleLastOptionHitState: q,
      resetInputState: ie,
      handleComposition: j,
      handleMenuEnter: J,
      handleFocus: L,
      focus: Z,
      blur: K,
      handleBlur: me,
      handleClearClick: Se,
      handleClose: Re,
      handleKeydownEscape: Pe,
      toggleMenu: We,
      selectOption: ze,
      getValueKey: dt,
      navigateOptions: pe,
      dropMenuVisible: T,
      reference: I,
      input: z,
      iOSInput: Y,
      tooltipRef: X,
      popperPaneRef: Ie,
      tags: ae,
      selectWrapper: se,
      scrollbar: ne,
      wrapperKls: S,
      tagsKls: R,
      tagWrapperKls: G,
      inputKls: ke,
      iOSInputKls: He,
      scrollbarKls: Ge,
      selectTagsStyle: Ae,
      nsSelect: n,
      tagTextStyle: be,
      inputStyle: de,
      handleMouseEnter: fe,
      handleMouseLeave: ve,
      showTagList: U,
      collapseTagList: le,
      tagTooltipRef: ee,
      contentId: o,
      hoverOption: u
    };
  }
}), lA = ["disabled", "autocomplete", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label"], cA = ["disabled"], uA = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function fA(e, t, n, r, s, o) {
  const i = fr("el-tag"), a = fr("el-tooltip"), l = fr("el-icon"), u = fr("el-input"), f = fr("el-option"), c = fr("el-options"), p = fr("el-scrollbar"), d = fr("el-select-menu"), m = U1("click-outside");
  return Ut((w(), A("div", {
    ref: "selectWrapper",
    class: Q(e.wrapperKls),
    onMouseenter: t[22] || (t[22] = (...g) => e.handleMouseEnter && e.handleMouseEnter(...g)),
    onMouseleave: t[23] || (t[23] = (...g) => e.handleMouseLeave && e.handleMouseLeave(...g)),
    onClick: t[24] || (t[24] = nn((...g) => e.toggleMenu && e.toggleMenu(...g), ["stop"]))
  }, [
    Ce(a, {
      ref: "tooltipRef",
      visible: e.dropMenuVisible,
      placement: e.placement,
      teleported: e.teleported,
      "popper-class": [e.nsSelect.e("popper"), e.popperClass],
      "popper-options": e.popperOptions,
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: e.effect,
      pure: "",
      trigger: "click",
      transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      persistent: e.persistent,
      onShow: e.handleMenuEnter
    }, {
      default: he(() => {
        var g, C;
        return [
          v("div", {
            class: "select-trigger",
            onMouseenter: t[20] || (t[20] = (h) => e.inputHovering = !0),
            onMouseleave: t[21] || (t[21] = (h) => e.inputHovering = !1)
          }, [
            e.multiple ? (w(), A("div", {
              key: 0,
              ref: "tags",
              tabindex: "-1",
              class: Q(e.tagsKls),
              style: st(e.selectTagsStyle),
              onClick: t[15] || (t[15] = (...h) => e.focus && e.focus(...h))
            }, [
              e.collapseTags && e.selected.length ? (w(), ue(Xr, {
                key: 0,
                onAfterLeave: e.resetInputHeight
              }, {
                default: he(() => [
                  v("span", {
                    class: Q(e.tagWrapperKls)
                  }, [
                    (w(!0), A(et, null, Cn(e.showTagList, (h) => (w(), ue(i, {
                      key: e.getValueKey(h),
                      closable: !e.selectDisabled && !h.isDisabled,
                      size: e.collapseTagSize,
                      hit: h.hitState,
                      type: e.tagType,
                      "disable-transitions": "",
                      onClose: (k) => e.deleteTag(k, h)
                    }, {
                      default: he(() => [
                        v("span", {
                          class: Q(e.nsSelect.e("tags-text")),
                          style: st(e.tagTextStyle)
                        }, Je(h.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128)),
                    e.selected.length > e.maxCollapseTags ? (w(), ue(i, {
                      key: 0,
                      closable: !1,
                      size: e.collapseTagSize,
                      type: e.tagType,
                      "disable-transitions": ""
                    }, {
                      default: he(() => [
                        e.collapseTagsTooltip ? (w(), ue(a, {
                          key: 0,
                          ref: "tagTooltipRef",
                          disabled: e.dropMenuVisible,
                          "fallback-placements": ["bottom", "top", "right", "left"],
                          effect: e.effect,
                          placement: "bottom",
                          teleported: e.teleported
                        }, {
                          default: he(() => [
                            v("span", {
                              class: Q(e.nsSelect.e("tags-text"))
                            }, "+ " + Je(e.selected.length - e.maxCollapseTags), 3)
                          ]),
                          content: he(() => [
                            v("div", {
                              class: Q(e.nsSelect.e("collapse-tags"))
                            }, [
                              (w(!0), A(et, null, Cn(e.collapseTagList, (h) => (w(), A("div", {
                                key: e.getValueKey(h),
                                class: Q(e.nsSelect.e("collapse-tag"))
                              }, [
                                Ce(i, {
                                  class: "in-tooltip",
                                  closable: !e.selectDisabled && !h.isDisabled,
                                  size: e.collapseTagSize,
                                  hit: h.hitState,
                                  type: e.tagType,
                                  "disable-transitions": "",
                                  style: { margin: "2px" },
                                  onClose: (k) => e.handleDeleteTooltipTag(k, h)
                                }, {
                                  default: he(() => [
                                    v("span", {
                                      class: Q(e.nsSelect.e("tags-text")),
                                      style: st({
                                        maxWidth: e.inputWidth - 75 + "px"
                                      })
                                    }, Je(h.currentLabel), 7)
                                  ]),
                                  _: 2
                                }, 1032, ["closable", "size", "hit", "type", "onClose"])
                              ], 2))), 128))
                            ], 2)
                          ]),
                          _: 1
                        }, 8, ["disabled", "effect", "teleported"])) : (w(), A("span", {
                          key: 1,
                          class: Q(e.nsSelect.e("tags-text"))
                        }, "+ " + Je(e.selected.length - e.maxCollapseTags), 3))
                      ]),
                      _: 1
                    }, 8, ["size", "type"])) : _e("v-if", !0)
                  ], 2)
                ]),
                _: 1
              }, 8, ["onAfterLeave"])) : _e("v-if", !0),
              e.collapseTags ? _e("v-if", !0) : (w(), ue(Xr, {
                key: 1,
                onAfterLeave: e.resetInputHeight
              }, {
                default: he(() => [
                  v("span", {
                    class: Q(e.tagWrapperKls),
                    style: st(e.prefixWidth && e.selected.length ? { marginLeft: `${e.prefixWidth}px` } : "")
                  }, [
                    (w(!0), A(et, null, Cn(e.selected, (h) => (w(), ue(i, {
                      key: e.getValueKey(h),
                      closable: !e.selectDisabled && !h.isDisabled,
                      size: e.collapseTagSize,
                      hit: h.hitState,
                      type: e.tagType,
                      "disable-transitions": "",
                      onClose: (k) => e.deleteTag(k, h)
                    }, {
                      default: he(() => [
                        v("span", {
                          class: Q(e.nsSelect.e("tags-text")),
                          style: st({ maxWidth: e.inputWidth - 75 + "px" })
                        }, Je(h.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                  ], 6)
                ]),
                _: 1
              }, 8, ["onAfterLeave"])),
              e.filterable && !e.selectDisabled ? Ut((w(), A("input", {
                key: 2,
                ref: "input",
                "onUpdate:modelValue": t[0] || (t[0] = (h) => e.query = h),
                type: "text",
                class: Q(e.inputKls),
                disabled: e.selectDisabled,
                autocomplete: e.autocomplete,
                style: st(e.inputStyle),
                role: "combobox",
                "aria-activedescendant": ((g = e.hoverOption) == null ? void 0 : g.id) || "",
                "aria-controls": e.contentId,
                "aria-expanded": e.dropMenuVisible,
                "aria-label": e.ariaLabel,
                "aria-autocomplete": "none",
                "aria-haspopup": "listbox",
                onFocus: t[1] || (t[1] = (...h) => e.handleFocus && e.handleFocus(...h)),
                onBlur: t[2] || (t[2] = (...h) => e.handleBlur && e.handleBlur(...h)),
                onKeyup: t[3] || (t[3] = (...h) => e.managePlaceholder && e.managePlaceholder(...h)),
                onKeydown: [
                  t[4] || (t[4] = (...h) => e.resetInputState && e.resetInputState(...h)),
                  t[5] || (t[5] = zt(nn((h) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                  t[6] || (t[6] = zt(nn((h) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                  t[7] || (t[7] = zt((...h) => e.handleKeydownEscape && e.handleKeydownEscape(...h), ["esc"])),
                  t[8] || (t[8] = zt(nn((...h) => e.selectOption && e.selectOption(...h), ["stop", "prevent"]), ["enter"])),
                  t[9] || (t[9] = zt((...h) => e.deletePrevTag && e.deletePrevTag(...h), ["delete"])),
                  t[10] || (t[10] = zt((h) => e.visible = !1, ["tab"]))
                ],
                onCompositionstart: t[11] || (t[11] = (...h) => e.handleComposition && e.handleComposition(...h)),
                onCompositionupdate: t[12] || (t[12] = (...h) => e.handleComposition && e.handleComposition(...h)),
                onCompositionend: t[13] || (t[13] = (...h) => e.handleComposition && e.handleComposition(...h)),
                onInput: t[14] || (t[14] = (...h) => e.debouncedQueryChange && e.debouncedQueryChange(...h))
              }, null, 46, lA)), [
                [_g, e.query]
              ]) : _e("v-if", !0)
            ], 6)) : _e("v-if", !0),
            e.isIOS && !e.multiple && e.filterable && e.readonly ? (w(), A("input", {
              key: 1,
              ref: "iOSInput",
              class: Q(e.iOSInputKls),
              disabled: e.selectDisabled,
              type: "text"
            }, null, 10, cA)) : _e("v-if", !0),
            Ce(u, {
              id: e.id,
              ref: "reference",
              modelValue: e.selectedLabel,
              "onUpdate:modelValue": t[16] || (t[16] = (h) => e.selectedLabel = h),
              type: "text",
              placeholder: typeof e.currentPlaceholder == "function" ? e.currentPlaceholder() : e.currentPlaceholder,
              name: e.name,
              autocomplete: e.autocomplete,
              size: e.selectSize,
              disabled: e.selectDisabled,
              readonly: e.readonly,
              "validate-event": !1,
              class: Q([e.nsSelect.is("focus", e.visible)]),
              tabindex: e.multiple && e.filterable ? -1 : void 0,
              role: "combobox",
              "aria-activedescendant": ((C = e.hoverOption) == null ? void 0 : C.id) || "",
              "aria-controls": e.contentId,
              "aria-expanded": e.dropMenuVisible,
              label: e.ariaLabel,
              "aria-autocomplete": "none",
              "aria-haspopup": "listbox",
              onFocus: e.handleFocus,
              onBlur: e.handleBlur,
              onInput: e.debouncedOnInputChange,
              onPaste: e.debouncedOnInputChange,
              onCompositionstart: e.handleComposition,
              onCompositionupdate: e.handleComposition,
              onCompositionend: e.handleComposition,
              onKeydown: [
                t[17] || (t[17] = zt(nn((h) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
                t[18] || (t[18] = zt(nn((h) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
                zt(nn(e.selectOption, ["stop", "prevent"]), ["enter"]),
                zt(e.handleKeydownEscape, ["esc"]),
                t[19] || (t[19] = zt((h) => e.visible = !1, ["tab"]))
              ]
            }, hi({
              suffix: he(() => [
                e.iconComponent && !e.showClose ? (w(), ue(l, {
                  key: 0,
                  class: Q([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
                }, {
                  default: he(() => [
                    (w(), ue(Pt(e.iconComponent)))
                  ]),
                  _: 1
                }, 8, ["class"])) : _e("v-if", !0),
                e.showClose && e.clearIcon ? (w(), ue(l, {
                  key: 1,
                  class: Q([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                  onClick: e.handleClearClick
                }, {
                  default: he(() => [
                    (w(), ue(Pt(e.clearIcon)))
                  ]),
                  _: 1
                }, 8, ["class", "onClick"])) : _e("v-if", !0)
              ]),
              _: 2
            }, [
              e.$slots.prefix ? {
                name: "prefix",
                fn: he(() => [
                  v("div", uA, [
                    we(e.$slots, "prefix")
                  ])
                ])
              } : void 0
            ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "aria-activedescendant", "aria-controls", "aria-expanded", "label", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
          ], 32)
        ];
      }),
      content: he(() => [
        Ce(d, null, hi({
          default: he(() => [
            Ut(Ce(p, {
              id: e.contentId,
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: Q(e.scrollbarKls),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical"
            }, {
              default: he(() => [
                e.showNewOption ? (w(), ue(f, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : _e("v-if", !0),
                Ce(c, { onUpdateOptions: e.onOptionsRendered }, {
                  default: he(() => [
                    we(e.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["onUpdateOptions"])
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label"]), [
              [Qn, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (w(), A(et, { key: 0 }, [
              e.$slots.empty ? we(e.$slots, "empty", { key: 0 }) : (w(), A("p", {
                key: 1,
                class: Q(e.nsSelect.be("dropdown", "empty"))
              }, Je(e.emptyText), 3))
            ], 64)) : _e("v-if", !0)
          ]),
          _: 2
        }, [
          e.$slots.header ? {
            name: "header",
            fn: he(() => [
              we(e.$slots, "header")
            ])
          } : void 0,
          e.$slots.footer ? {
            name: "footer",
            fn: he(() => [
              we(e.$slots, "footer")
            ])
          } : void 0
        ]), 1024)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [m, e.handleClose, e.popperPaneRef]
  ]);
}
var dA = /* @__PURE__ */ Ye(aA, [["render", fA], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const pA = /* @__PURE__ */ re({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = Qe("select"), n = W(!0), r = _t(), s = W([]);
    Kt(Pm, Sn({
      ...Ri(e)
    }));
    const o = qe(ra);
    it(() => {
      s.value = i(r.subTree);
    });
    const i = (l) => {
      const u = [];
      return Array.isArray(l.children) && l.children.forEach((f) => {
        var c;
        f.type && f.type.name === "ElOption" && f.component && f.component.proxy ? u.push(f.component.proxy) : (c = f.children) != null && c.length && u.push(...i(f));
      }), u;
    }, { groupQueryChange: a } = je(o);
    return Te(a, () => {
      n.value = s.value.some((l) => l.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function hA(e, t, n, r, s, o) {
  return Ut((w(), A("ul", {
    class: Q(e.ns.be("group", "wrap"))
  }, [
    v("li", {
      class: Q(e.ns.be("group", "title"))
    }, Je(e.label), 3),
    v("li", null, [
      v("ul", {
        class: Q(e.ns.b("group"))
      }, [
        we(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Qn, e.visible]
  ]);
}
var Dm = /* @__PURE__ */ Ye(pA, [["render", hA], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const xu = An(dA, {
  Option: Df,
  OptionGroup: Dm
}), gA = bf(Df);
bf(Dm);
const Nf = () => qe(Rm, {}), mA = ot({
  pageSize: {
    type: Number,
    required: !0
  },
  pageSizes: {
    type: Ne(Array),
    default: () => yf([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String
  },
  disabled: Boolean,
  teleported: Boolean,
  size: {
    type: String,
    values: _s
  }
}), vA = /* @__PURE__ */ re({
  name: "ElPaginationSizes"
}), bA = /* @__PURE__ */ re({
  ...vA,
  props: mA,
  emits: ["page-size-change"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = Tn(), s = Qe("pagination"), o = Nf(), i = W(n.pageSize);
    Te(() => n.pageSizes, (u, f) => {
      if (!_u(u, f) && Array.isArray(u)) {
        const c = u.includes(n.pageSize) ? n.pageSize : n.pageSizes[0];
        t("page-size-change", c);
      }
    }), Te(() => n.pageSize, (u) => {
      i.value = u;
    });
    const a = P(() => n.pageSizes);
    function l(u) {
      var f;
      u !== i.value && (i.value = u, (f = o.handleSizeChange) == null || f.call(o, Number(u)));
    }
    return (u, f) => (w(), A("span", {
      class: Q(b(s).e("sizes"))
    }, [
      Ce(b(xu), {
        "model-value": i.value,
        disabled: u.disabled,
        "popper-class": u.popperClass,
        size: u.size,
        teleported: u.teleported,
        "validate-event": !1,
        onChange: l
      }, {
        default: he(() => [
          (w(!0), A(et, null, Cn(b(a), (c) => (w(), ue(b(gA), {
            key: c,
            value: c,
            label: c + b(r)("el.pagination.pagesize")
          }, null, 8, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "disabled", "popper-class", "size", "teleported"])
    ], 2));
  }
});
var _A = /* @__PURE__ */ Ye(bA, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
const yA = ot({
  size: {
    type: String,
    values: _s
  }
}), wA = ["disabled"], kA = /* @__PURE__ */ re({
  name: "ElPaginationJumper"
}), CA = /* @__PURE__ */ re({
  ...kA,
  props: yA,
  setup(e) {
    const { t } = Tn(), n = Qe("pagination"), { pageCount: r, disabled: s, currentPage: o, changeEvent: i } = Nf(), a = W(), l = P(() => {
      var c;
      return (c = a.value) != null ? c : o == null ? void 0 : o.value;
    });
    function u(c) {
      a.value = c ? +c : "";
    }
    function f(c) {
      c = Math.trunc(+c), i == null || i(c), a.value = void 0;
    }
    return (c, p) => (w(), A("span", {
      class: Q(b(n).e("jump")),
      disabled: b(s)
    }, [
      v("span", {
        class: Q([b(n).e("goto")])
      }, Je(b(t)("el.pagination.goto")), 3),
      Ce(b(ta), {
        size: c.size,
        class: Q([b(n).e("editor"), b(n).is("in-pagination")]),
        min: 1,
        max: b(r),
        disabled: b(s),
        "model-value": b(l),
        "validate-event": !1,
        label: b(t)("el.pagination.page"),
        type: "number",
        "onUpdate:modelValue": u,
        onChange: f
      }, null, 8, ["size", "class", "max", "disabled", "model-value", "label"]),
      v("span", {
        class: Q([b(n).e("classifier")])
      }, Je(b(t)("el.pagination.pageClassifier")), 3)
    ], 10, wA));
  }
});
var xA = /* @__PURE__ */ Ye(CA, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
const EA = ot({
  total: {
    type: Number,
    default: 1e3
  }
}), SA = ["disabled"], AA = /* @__PURE__ */ re({
  name: "ElPaginationTotal"
}), TA = /* @__PURE__ */ re({
  ...AA,
  props: EA,
  setup(e) {
    const { t } = Tn(), n = Qe("pagination"), { disabled: r } = Nf();
    return (s, o) => (w(), A("span", {
      class: Q(b(n).e("total")),
      disabled: b(r)
    }, Je(b(t)("el.pagination.total", {
      total: s.total
    })), 11, SA));
  }
});
var MA = /* @__PURE__ */ Ye(TA, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
const $A = ot({
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    required: !0
  },
  pagerCount: {
    type: Number,
    default: 7
  },
  disabled: Boolean
}), IA = ["onKeyup"], LA = ["aria-current", "aria-label", "tabindex"], OA = ["tabindex", "aria-label"], RA = ["aria-current", "aria-label", "tabindex"], PA = ["tabindex", "aria-label"], DA = ["aria-current", "aria-label", "tabindex"], NA = /* @__PURE__ */ re({
  name: "ElPaginationPager"
}), BA = /* @__PURE__ */ re({
  ...NA,
  props: $A,
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, r = Qe("pager"), s = Qe("icon"), { t: o } = Tn(), i = W(!1), a = W(!1), l = W(!1), u = W(!1), f = W(!1), c = W(!1), p = P(() => {
      const _ = n.pagerCount, E = (_ - 1) / 2, x = Number(n.currentPage), M = Number(n.pageCount);
      let $ = !1, O = !1;
      M > _ && (x > _ - E && ($ = !0), x < M - E && (O = !0));
      const D = [];
      if ($ && !O) {
        const B = M - (_ - 2);
        for (let N = B; N < M; N++)
          D.push(N);
      } else if (!$ && O)
        for (let B = 2; B < _; B++)
          D.push(B);
      else if ($ && O) {
        const B = Math.floor(_ / 2) - 1;
        for (let N = x - B; N <= x + B; N++)
          D.push(N);
      } else
        for (let B = 2; B < M; B++)
          D.push(B);
      return D;
    }), d = P(() => [
      "more",
      "btn-quickprev",
      s.b(),
      r.is("disabled", n.disabled)
    ]), m = P(() => [
      "more",
      "btn-quicknext",
      s.b(),
      r.is("disabled", n.disabled)
    ]), g = P(() => n.disabled ? -1 : 0);
    tf(() => {
      const _ = (n.pagerCount - 1) / 2;
      i.value = !1, a.value = !1, n.pageCount > n.pagerCount && (n.currentPage > n.pagerCount - _ && (i.value = !0), n.currentPage < n.pageCount - _ && (a.value = !0));
    });
    function C(_ = !1) {
      n.disabled || (_ ? l.value = !0 : u.value = !0);
    }
    function h(_ = !1) {
      _ ? f.value = !0 : c.value = !0;
    }
    function k(_) {
      const E = _.target;
      if (E.tagName.toLowerCase() === "li" && Array.from(E.classList).includes("number")) {
        const x = Number(E.textContent);
        x !== n.currentPage && t("change", x);
      } else E.tagName.toLowerCase() === "li" && Array.from(E.classList).includes("more") && y(_);
    }
    function y(_) {
      const E = _.target;
      if (E.tagName.toLowerCase() === "ul" || n.disabled)
        return;
      let x = Number(E.textContent);
      const M = n.pageCount, $ = n.currentPage, O = n.pagerCount - 2;
      E.className.includes("more") && (E.className.includes("quickprev") ? x = $ - O : E.className.includes("quicknext") && (x = $ + O)), Number.isNaN(+x) || (x < 1 && (x = 1), x > M && (x = M)), x !== $ && t("change", x);
    }
    return (_, E) => (w(), A("ul", {
      class: Q(b(r).b()),
      onClick: y,
      onKeyup: zt(k, ["enter"])
    }, [
      _.pageCount > 0 ? (w(), A("li", {
        key: 0,
        class: Q([[
          b(r).is("active", _.currentPage === 1),
          b(r).is("disabled", _.disabled)
        ], "number"]),
        "aria-current": _.currentPage === 1,
        "aria-label": b(o)("el.pagination.currentPage", { pager: 1 }),
        tabindex: b(g)
      }, " 1 ", 10, LA)) : _e("v-if", !0),
      i.value ? (w(), A("li", {
        key: 1,
        class: Q(b(d)),
        tabindex: b(g),
        "aria-label": b(o)("el.pagination.prevPages", { pager: _.pagerCount - 2 }),
        onMouseenter: E[0] || (E[0] = (x) => C(!0)),
        onMouseleave: E[1] || (E[1] = (x) => l.value = !1),
        onFocus: E[2] || (E[2] = (x) => h(!0)),
        onBlur: E[3] || (E[3] = (x) => f.value = !1)
      }, [
        (l.value || f.value) && !_.disabled ? (w(), ue(b(Q5), { key: 0 })) : (w(), ue(b(A0), { key: 1 }))
      ], 42, OA)) : _e("v-if", !0),
      (w(!0), A(et, null, Cn(b(p), (x) => (w(), A("li", {
        key: x,
        class: Q([[
          b(r).is("active", _.currentPage === x),
          b(r).is("disabled", _.disabled)
        ], "number"]),
        "aria-current": _.currentPage === x,
        "aria-label": b(o)("el.pagination.currentPage", { pager: x }),
        tabindex: b(g)
      }, Je(x), 11, RA))), 128)),
      a.value ? (w(), A("li", {
        key: 2,
        class: Q(b(m)),
        tabindex: b(g),
        "aria-label": b(o)("el.pagination.nextPages", { pager: _.pagerCount - 2 }),
        onMouseenter: E[4] || (E[4] = (x) => C()),
        onMouseleave: E[5] || (E[5] = (x) => u.value = !1),
        onFocus: E[6] || (E[6] = (x) => h()),
        onBlur: E[7] || (E[7] = (x) => c.value = !1)
      }, [
        (u.value || c.value) && !_.disabled ? (w(), ue(b(t8), { key: 0 })) : (w(), ue(b(A0), { key: 1 }))
      ], 42, PA)) : _e("v-if", !0),
      _.pageCount > 1 ? (w(), A("li", {
        key: 3,
        class: Q([[
          b(r).is("active", _.currentPage === _.pageCount),
          b(r).is("disabled", _.disabled)
        ], "number"]),
        "aria-current": _.currentPage === _.pageCount,
        "aria-label": b(o)("el.pagination.currentPage", { pager: _.pageCount }),
        tabindex: b(g)
      }, Je(_.pageCount), 11, DA)) : _e("v-if", !0)
    ], 42, IA));
  }
});
var FA = /* @__PURE__ */ Ye(BA, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
const Bt = (e) => typeof e != "number", Nm = ot({
  pageSize: Number,
  defaultPageSize: Number,
  total: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (e) => vt(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1,
    default: 7
  },
  currentPage: Number,
  defaultCurrentPage: Number,
  layout: {
    type: String,
    default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ")
  },
  pageSizes: {
    type: Ne(Array),
    default: () => yf([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String,
    default: ""
  },
  prevText: {
    type: String,
    default: ""
  },
  prevIcon: {
    type: En,
    default: () => U5
  },
  nextText: {
    type: String,
    default: ""
  },
  nextIcon: {
    type: En,
    default: () => W5
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
}), qA = {
  "update:current-page": (e) => vt(e),
  "update:page-size": (e) => vt(e),
  "size-change": (e) => vt(e),
  "current-change": (e) => vt(e),
  "prev-click": (e) => vt(e),
  "next-click": (e) => vt(e)
}, fp = "ElPagination";
var zA = /* @__PURE__ */ re({
  name: fp,
  props: Nm,
  emits: qA,
  setup(e, { emit: t, slots: n }) {
    const { t: r } = Tn(), s = Qe("pagination"), o = _t().vnode.props || {}, i = "onUpdate:currentPage" in o || "onUpdate:current-page" in o || "onCurrentChange" in o, a = "onUpdate:pageSize" in o || "onUpdate:page-size" in o || "onSizeChange" in o, l = P(() => {
      if (Bt(e.total) && Bt(e.pageCount) || !Bt(e.currentPage) && !i)
        return !1;
      if (e.layout.includes("sizes")) {
        if (Bt(e.pageCount)) {
          if (!Bt(e.total) && !Bt(e.pageSize) && !a)
            return !1;
        } else if (!a)
          return !1;
      }
      return !0;
    }), u = W(Bt(e.defaultPageSize) ? 10 : e.defaultPageSize), f = W(Bt(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), c = P({
      get() {
        return Bt(e.pageSize) ? u.value : e.pageSize;
      },
      set(y) {
        Bt(e.pageSize) && (u.value = y), a && (t("update:page-size", y), t("size-change", y));
      }
    }), p = P(() => {
      let y = 0;
      return Bt(e.pageCount) ? Bt(e.total) || (y = Math.max(1, Math.ceil(e.total / c.value))) : y = e.pageCount, y;
    }), d = P({
      get() {
        return Bt(e.currentPage) ? f.value : e.currentPage;
      },
      set(y) {
        let _ = y;
        y < 1 ? _ = 1 : y > p.value && (_ = p.value), Bt(e.currentPage) && (f.value = _), i && (t("update:current-page", _), t("current-change", _));
      }
    });
    Te(p, (y) => {
      d.value > y && (d.value = y);
    });
    function m(y) {
      d.value = y;
    }
    function g(y) {
      c.value = y;
      const _ = p.value;
      d.value > _ && (d.value = _);
    }
    function C() {
      e.disabled || (d.value -= 1, t("prev-click", d.value));
    }
    function h() {
      e.disabled || (d.value += 1, t("next-click", d.value));
    }
    function k(y, _) {
      y && (y.props || (y.props = {}), y.props.class = [y.props.class, _].join(" "));
    }
    return Kt(Rm, {
      pageCount: p,
      disabled: P(() => e.disabled),
      currentPage: d,
      changeEvent: m,
      handleSizeChange: g
    }), () => {
      var y, _;
      if (!l.value)
        return r("el.pagination.deprecationWarning"), null;
      if (!e.layout || e.hideOnSinglePage && p.value <= 1)
        return null;
      const E = [], x = [], M = _n("div", { class: s.e("rightwrapper") }, x), $ = {
        prev: _n(V9, {
          disabled: e.disabled,
          currentPage: d.value,
          prevText: e.prevText,
          prevIcon: e.prevIcon,
          onClick: C
        }),
        jumper: _n(xA, {
          size: e.small ? "small" : "default"
        }),
        pager: _n(FA, {
          currentPage: d.value,
          pageCount: p.value,
          pagerCount: e.pagerCount,
          onChange: m,
          disabled: e.disabled
        }),
        next: _n(X9, {
          disabled: e.disabled,
          currentPage: d.value,
          pageCount: p.value,
          nextText: e.nextText,
          nextIcon: e.nextIcon,
          onClick: h
        }),
        sizes: _n(_A, {
          pageSize: c.value,
          pageSizes: e.pageSizes,
          popperClass: e.popperClass,
          disabled: e.disabled,
          teleported: e.teleported,
          size: e.small ? "small" : "default"
        }),
        slot: (_ = (y = n == null ? void 0 : n.default) == null ? void 0 : y.call(n)) != null ? _ : null,
        total: _n(MA, { total: Bt(e.total) ? 0 : e.total })
      }, O = e.layout.split(",").map((B) => B.trim());
      let D = !1;
      return O.forEach((B) => {
        if (B === "->") {
          D = !0;
          return;
        }
        D ? x.push($[B]) : E.push($[B]);
      }), k(E[0], s.is("first")), k(E[E.length - 1], s.is("last")), D && x.length > 0 && (k(x[0], s.is("first")), k(x[x.length - 1], s.is("last")), E.push(M)), _n("div", {
        class: [
          s.b(),
          s.is("background", e.background),
          {
            [s.m("small")]: e.small
          }
        ]
      }, E);
    };
  }
});
const HA = An(zA), Bm = ot({
  trigger: ds.trigger,
  placement: za.placement,
  disabled: ds.disabled,
  visible: tn.visible,
  transition: tn.transition,
  popperOptions: za.popperOptions,
  tabindex: za.tabindex,
  content: tn.content,
  popperStyle: tn.popperStyle,
  popperClass: tn.popperClass,
  enterable: {
    ...tn.enterable,
    default: !0
  },
  effect: {
    ...tn.effect,
    default: "light"
  },
  teleported: tn.teleported,
  title: String,
  width: {
    type: [String, Number],
    default: 150
  },
  offset: {
    type: Number,
    default: void 0
  },
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  },
  showArrow: {
    type: Boolean,
    default: !0
  },
  persistent: {
    type: Boolean,
    default: !0
  },
  "onUpdate:visible": {
    type: Function
  }
}), jA = {
  "update:visible": (e) => mf(e),
  "before-enter": () => !0,
  "before-leave": () => !0,
  "after-enter": () => !0,
  "after-leave": () => !0
}, VA = "onUpdate:visible", UA = /* @__PURE__ */ re({
  name: "ElPopover"
}), KA = /* @__PURE__ */ re({
  ...UA,
  props: Bm,
  emits: jA,
  setup(e, { expose: t, emit: n }) {
    const r = e, s = P(() => r[VA]), o = Qe("popover"), i = W(), a = P(() => {
      var C;
      return (C = b(i)) == null ? void 0 : C.popperRef;
    }), l = P(() => [
      {
        width: yo(r.width)
      },
      r.popperStyle
    ]), u = P(() => [o.b(), r.popperClass, { [o.m("plain")]: !!r.content }]), f = P(() => r.transition === `${o.namespace.value}-fade-in-linear`), c = () => {
      var C;
      (C = i.value) == null || C.hide();
    }, p = () => {
      n("before-enter");
    }, d = () => {
      n("before-leave");
    }, m = () => {
      n("after-enter");
    }, g = () => {
      n("update:visible", !1), n("after-leave");
    };
    return t({
      popperRef: a,
      hide: c
    }), (C, h) => (w(), ue(b(ps), gt({
      ref_key: "tooltipRef",
      ref: i
    }, C.$attrs, {
      trigger: C.trigger,
      placement: C.placement,
      disabled: C.disabled,
      visible: C.visible,
      transition: C.transition,
      "popper-options": C.popperOptions,
      tabindex: C.tabindex,
      content: C.content,
      offset: C.offset,
      "show-after": C.showAfter,
      "hide-after": C.hideAfter,
      "auto-close": C.autoClose,
      "show-arrow": C.showArrow,
      "aria-label": C.title,
      effect: C.effect,
      enterable: C.enterable,
      "popper-class": b(u),
      "popper-style": b(l),
      teleported: C.teleported,
      persistent: C.persistent,
      "gpu-acceleration": b(f),
      "onUpdate:visible": b(s),
      onBeforeShow: p,
      onBeforeHide: d,
      onShow: m,
      onHide: g
    }), {
      content: he(() => [
        C.title ? (w(), A("div", {
          key: 0,
          class: Q(b(o).e("title")),
          role: "title"
        }, Je(C.title), 3)) : _e("v-if", !0),
        we(C.$slots, "default", {}, () => [
          Zr(Je(C.content), 1)
        ])
      ]),
      default: he(() => [
        C.$slots.reference ? we(C.$slots, "reference", { key: 0 }) : _e("v-if", !0)
      ]),
      _: 3
    }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]));
  }
});
var WA = /* @__PURE__ */ Ye(KA, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);
const dp = (e, t) => {
  const n = t.arg || t.value, r = n == null ? void 0 : n.popperRef;
  r && (r.triggerRef = e);
};
var GA = {
  mounted(e, t) {
    dp(e, t);
  },
  updated(e, t) {
    dp(e, t);
  }
};
const ZA = "popover", XA = c8(GA, ZA), YA = An(WA, {
  directive: XA
}), JA = "TOOLTIP_APPEND_TO";
function QA() {
  return qe(
    JA,
    P(() => {
    })
  );
}
const Fm = "data:image/svg+xml,%3csvg%20viewBox='0%200%2012%2012'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M1%200.642857C1%200.287817%201.27473%200%201.61364%200H4.06818C4.40708%200%204.68182%200.287817%204.68182%200.642857V4.5C4.68182%204.85504%204.40708%205.14286%204.06818%205.14286H1.61364C1.27473%205.14286%201%204.85504%201%204.5V0.642857ZM2.22727%201.28571V3.85714H3.45455V1.28571H2.22727ZM6.31818%200.642857C6.31818%200.287817%206.59292%200%206.93182%200H8.15909C8.49799%200%208.77273%200.287817%208.77273%200.642857V3.85714H9.38636C9.72527%203.85714%2010%204.14496%2010%204.5C10%204.85504%209.72527%205.14286%209.38636%205.14286H6.93182C6.59292%205.14286%206.31818%204.85504%206.31818%204.5C6.31818%204.14496%206.59292%203.85714%206.93182%203.85714H7.54545V1.28571H6.93182C6.59292%201.28571%206.31818%200.997897%206.31818%200.642857ZM1%207.5C1%207.14496%201.27473%206.85714%201.61364%206.85714H2.84091C3.17981%206.85714%203.45455%207.14496%203.45455%207.5V10.7143H4.06818C4.40708%2010.7143%204.68182%2011.0021%204.68182%2011.3571C4.68182%2011.7122%204.40708%2012%204.06818%2012H1.61364C1.27473%2012%201%2011.7122%201%2011.3571C1%2011.0021%201.27473%2010.7143%201.61364%2010.7143H2.22727V8.14286H1.61364C1.27473%208.14286%201%207.85504%201%207.5ZM6.31818%207.5C6.31818%207.14496%206.59292%206.85714%206.93182%206.85714H9.38636C9.72527%206.85714%2010%207.14496%2010%207.5V11.3571C10%2011.7122%209.72527%2012%209.38636%2012H6.93182C6.59292%2012%206.31818%2011.7122%206.31818%2011.3571V7.5ZM7.54545%208.14286V10.7143H8.77273V8.14286H7.54545Z'%20/%3e%3c/svg%3e", eT = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.2251%201.02271C13.5179%200.968554%2013.8195%201.00233%2014.0913%201.11939L14.2055%201.17506L14.3149%201.23951C14.5275%201.37763%2014.7014%201.56758%2014.8208%201.79127L14.8764%201.90553L14.9214%202.02467C15.0145%202.30522%2015.0227%202.60793%2014.9438%202.89478C14.9403%202.90772%2014.9372%202.92106%2014.9331%202.93385L13.0132%208.95338L12.9965%209.00025H19.9995C20.3769%208.99952%2020.7471%209.10523%2021.0669%209.30592C21.3874%209.50712%2021.6437%209.79562%2021.8071%2010.137C21.9704%2010.4783%2022.0341%2010.8588%2021.9897%2011.2346C21.9453%2011.6105%2021.7946%2011.9661%2021.5561%2012.26C21.5375%2012.2829%2021.5181%2012.3052%2021.4975%2012.3264L11.5971%2022.5266L11.5962%2022.5256C11.3774%2022.7595%2011.0907%2022.9194%2010.7749%2022.9778C10.4403%2023.0397%2010.0944%2022.9859%209.7944%2022.8254C9.4944%2022.665%209.25775%2022.4066%209.1235%2022.094C8.98941%2021.7815%208.96593%2021.4327%209.05612%2021.1047L9.06686%2021.0657L10.9868%2015.0462L11.0034%2015.0003H3.99948C3.62236%2015.0008%203.25253%2014.8941%202.93307%2014.6936C2.61276%2014.4925%202.35617%2014.2047%202.19284%2013.8635C2.02947%2013.5221%201.96581%2013.1408%202.01022%2012.7649C2.05468%2012.3892%202.20544%2012.0333%202.44382%2011.7395C2.46238%2011.7167%202.4819%2011.6942%202.50241%2011.6731L12.4028%201.47389C12.6215%201.23984%2012.9091%201.08117%2013.2251%201.02271Z'%20fill='currentColor'%20fill-opacity='0.9'%20style='fill:currentColor;fill-opacity:0.9;'/%3e%3c/svg%3e", tT = "data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M224.975%2049.429c17.138-17.139%2044.919-17.139%2062.057%200l175.546%20175.546a43.8%2043.8%200%200%201%209.347%2013.817l.146.349q.125.298.243.598.1.25.197.5l.147.388q.133.356.261.716l.09.257q.141.407.275.818l.044.136a39%2039%200%200%201%20.306.988%2043.9%2043.9%200%200%201%201.802%2012.473c0%2012.497-5.225%2023.774-13.608%2031.767L287.032%20462.578c-17.138%2017.138-44.919%2017.138-62.057%200s-17.139-44.92%200-62.059l100.618-100.618H80.458c-24.238%200-43.887-19.649-43.887-43.886s19.65-43.887%2043.887-43.887h245.158L224.975%20111.486c-17.139-17.138-17.139-44.919%200-62.057'%20fill='currentColor'/%3e%3c/svg%3e", nT = "data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M209.675%20387.718c20.945%2010.711%2030.794%2035.749%2022.073%2058.141-9.306%2023.886-36.221%2035.695-60.107%2026.389-29.106-11.34-56.354-28.746-79.744-52.137-20.47-20.47-36.356-43.894-47.607-68.932l-4.53-10.812-1.517-4.508c-6.284-22.673%205.511-46.874%2027.906-55.599%2022.392-8.721%2047.431%201.129%2058.141%2022.073l1.945%204.338%202.735%206.453c6.714%2014.943%2016.204%2028.982%2028.568%2041.346%2014.132%2014.132%2030.44%2024.54%2047.799%2031.304zM91.897%2091.905c23.39-23.39%2050.638-40.796%2079.744-52.137l4.508-1.517c22.673-6.284%2046.874%205.512%2055.599%2027.906%209.303%2023.885-2.526%2050.781-26.411%2060.086-17.359%206.763-33.667%2017.171-47.799%2031.303-12.364%2012.364-21.854%2026.403-28.568%2041.347l-2.735%206.453-1.945%204.337c-10.71%2020.945-35.75%2030.794-58.141%2022.073-23.886-9.306-35.695-36.221-26.39-60.107%2011.341-29.106%2028.747-56.353%2052.138-79.744M354.462%20354.47c12.364-12.364%2021.854-26.403%2028.568-41.346l2.735-6.453%201.945-4.338c10.71-20.944%2035.749-30.794%2058.141-22.073%2022.394%208.725%2034.19%2032.926%2027.906%2055.599l-1.517%204.508-4.53%2010.812c-11.251%2025.038-27.137%2048.462-47.607%2068.932-23.39%2023.391-50.638%2040.797-79.744%2052.137-23.886%209.306-50.801-2.503-60.107-26.389-9.303-23.885%202.526-50.78%2026.411-60.085l6.453-2.735c14.943-6.715%2028.982-16.205%2041.346-28.569m65.641-262.565c23.391%2023.391%2040.796%2050.638%2052.137%2079.744%209.306%2023.886-2.503%2050.801-26.389%2060.107-22.392%208.721-47.431-1.128-58.141-22.073l-1.945-4.337-2.735-6.453c-6.714-14.944-16.204-28.983-28.568-41.347-14.132-14.132-30.44-24.54-47.799-31.303-23.885-9.305-35.714-36.201-26.411-60.086%209.306-23.886%2036.221-35.694%2060.107-26.389l10.812%204.53c25.038%2011.25%2048.462%2027.137%2068.932%2047.607'%20fill='currentColor'%20/%3e%3c/svg%3e", qm = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%203L9%2021'%20stroke='currentColor'%20style='stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15%203L15%2021'%20stroke='currentColor'%20style='stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", zm = "data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M13.3333%2012.5525V12.4489C14.2278%2012.0756%2014.8571%2011.1925%2014.8571%2010.1632V3.61924C14.8571%202.96252%2014.5962%202.3327%2014.1318%201.86832C13.6675%201.40395%2013.0376%201.14307%2012.3809%201.14307H5.90473C5.38113%201.14296%204.87098%201.30883%204.44756%201.61684C4.02414%201.92485%203.70926%202.35915%203.54816%202.85734H3.39501C2.70016%202.85734%202.10892%203.10191%201.70206%203.5842C1.30739%204.05124%201.14282%204.67372%201.14282%205.33352V12.0002C1.14282%2012.8078%201.43463%2013.5346%201.98854%2014.0573C2.54168%2014.5777%203.30892%2014.8535%204.19044%2014.8535H7.17711L10.2826%2014.8573H10.2842C11.0278%2014.8611%2011.7645%2014.7049%2012.336%2014.3392C12.9303%2013.9582%2013.3333%2013.3525%2013.3333%2012.5525ZM3.39501%204.0002H3.42854V10.1625C3.42854%2010.8192%203.68942%2011.449%204.1538%2011.9134C4.61817%2012.3777%205.248%2012.6386%205.90473%2012.6386H12.1874C12.163%2012.9571%2012.003%2013.1948%2011.7196%2013.3761C11.3897%2013.588%2010.8891%2013.7175%2010.2887%2013.7144H10.2857L7.17558%2013.7106H4.19044C3.54816%2013.7106%203.07806%2013.5125%202.7733%2013.2253C2.47006%2012.9403%202.28568%2012.5259%202.28568%2012.0002V5.33352C2.28568%204.84971%202.40758%204.52057%202.5752%204.32096C2.73139%204.13658%202.98054%204.0002%203.39501%204.0002ZM8.01673%203.80972H11.619C11.7706%203.80972%2011.9159%203.86992%2012.0231%203.97709C12.1302%204.08425%2012.1904%204.22959%2012.1904%204.38115V7.98418C12.1904%208.13573%2012.1302%208.28107%2012.0231%208.38823C11.9159%208.4954%2011.7706%208.5556%2011.619%208.5556C11.4675%208.5556%2011.3221%208.4954%2011.215%208.38823C11.1078%208.28107%2011.0476%208.13573%2011.0476%207.98418V5.76019L7.07044%209.73731C7.0177%209.79186%206.95463%209.83536%206.8849%209.86528C6.81517%209.89519%206.74018%209.91092%206.6643%209.91154C6.58843%209.91217%206.51319%209.89767%206.44298%209.86891C6.37277%209.84014%206.30899%209.79768%206.25536%209.74401C6.20173%209.69033%206.15933%209.62651%206.13063%209.55627C6.10193%209.48603%206.08751%209.41078%206.0882%209.3349C6.0889%209.25903%206.1047%209.18406%206.13468%209.11435C6.16466%209.04465%206.20822%208.98162%206.26282%208.92893L10.24%204.95257H8.01673C7.86517%204.95257%207.71983%204.89237%207.61267%204.7852C7.5055%204.67804%207.4453%204.5327%207.4453%204.38115C7.4453%204.22959%207.5055%204.08425%207.61267%203.97709C7.71983%203.86992%207.86517%203.80972%208.01673%203.80972Z'%20/%3e%3c/svg%3e", rT = "data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M416.648%20227.85c23.324%200%2042.232%2018.908%2042.232%2042.232v84.462c0%2038.872-31.513%2070.384-70.385%2070.385H191.423v36.402c0%2012.541-15.163%2018.822-24.031%209.954l-78.63-78.631c-5.498-5.497-5.498-14.411%200-19.908l78.63-78.631c8.868-8.868%2024.031-2.587%2024.031%209.954v36.398h182.995v-70.385c0-23.324%2018.907-42.231%2042.23-42.232M304.028%2050.669c0-12.541%2015.163-18.822%2024.031-9.954l78.63%2078.631c5.498%205.497%205.498%2014.41%200%2019.908l-78.63%2078.631c-8.868%208.867-24.031%202.587-24.031-9.954v-36.38H121.033v70.385c0%2023.324-18.908%2042.231-42.231%2042.231s-42.23-18.907-42.23-42.231v-84.462c0-38.872%2031.512-70.385%2070.384-70.385h197.072z'%20fill='currentColor'/%3e%3c/svg%3e", oT = "data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M275.114%2036.8c22.13%202.247%2039.401%2020.934%2039.401%2043.657v307.204h73.142c24.237%200%2043.886%2019.648%2043.886%2043.885s-19.648%2043.886-43.886%2043.886H153.6c-24.238-.001-43.886-19.649-43.886-43.886s19.648-43.885%2043.886-43.885h73.143V124.343H153.6c-24.238%200-43.886-19.649-43.886-43.886s19.648-43.885%2043.886-43.886h117.029z'%20fill='currentColor'/%3e%3c/svg%3e", Hm = "data:image/svg+xml,%3csvg%20viewBox='0%20-1%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M1.63636%200H8.18182C9.08556%200%209.81818%200.732625%209.81818%201.63636C9.81818%202.5401%209.08556%203.27273%208.18182%203.27273H1.63636C0.732626%203.27273%200%202.5401%200%201.63636C0%200.732625%200.732625%200%201.63636%200ZM1.63636%201.09091C1.33512%201.09091%201.09091%201.33512%201.09091%201.63636C1.09091%201.93761%201.33512%202.18182%201.63636%202.18182H8.18182C8.48306%202.18182%208.72727%201.93761%208.72727%201.63636C8.72727%201.33512%208.48306%201.09091%208.18182%201.09091H1.63636Z%20M7.09091%204.36353H11.4545C12.3583%204.36353%2013.0909%205.09615%2013.0909%205.99989C13.0909%206.90363%2012.3583%207.63625%2011.4545%207.63625H7.09091C6.18717%207.63625%205.45454%206.90363%205.45454%205.99989C5.45454%205.09615%206.18717%204.36353%207.09091%204.36353ZM7.09091%205.45443C6.78966%205.45443%206.54545%205.69864%206.54545%205.99989C6.54545%206.30114%206.78966%206.54534%207.09091%206.54534H11.4545C11.7558%206.54534%2012%206.30114%2012%205.99989C12%205.69864%2011.7558%205.45443%2011.4545%205.45443H7.09091Z%20M7.09091%208.72729H11.4545C12.3583%208.72729%2013.0909%209.45992%2013.0909%2010.3637C13.0909%2011.2674%2012.3583%2012%2011.4545%2012H7.09091C6.18717%2012%205.45454%2011.2674%205.45454%2010.3637C5.45454%209.45992%206.18717%208.72729%207.09091%208.72729ZM7.09091%209.8182C6.78966%209.8182%206.54545%2010.0624%206.54545%2010.3637C6.54545%2010.6649%206.78966%2010.9091%207.09091%2010.9091H11.4545C11.7558%2010.9091%2012%2010.6649%2012%2010.3637C12%2010.0624%2011.7558%209.8182%2011.4545%209.8182H7.09091Z'%20/%3e%3c/svg%3e", jm = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%202V5'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M12%2019V22'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M12%202V5'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M12%2019V22'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M22.005%2011.9951L19.005%2011.9951'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M5.005%2011.9951L2.005%2011.9951'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M19.0796%2019.0676L16.9583%2016.9463'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M7.05884%207.04688L4.93752%204.92555'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M4.9375%2019.0676L7.05882%2016.9463'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M16.9583%207.04688L19.0796%204.92556'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e", Vm = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207%20C%2014%2010.866%2010.866%2014%207%2014%20C%203.134%2014%200%2010.866%200%207%20C%200%203.134%203.134%200%207%200%20C%2010.866%200%2014%203.134%2014%207%20Z%20M%2011.243%206%20L%202.758%206%20L%202.758%208%20L%2011.243%208%20L%2011.243%206%20Z'%20/%3e%3c/svg%3e", Um = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207%20C%2014%2010.866%2010.866%2014%207%2014%20C%203.134%2014%200%2010.866%200%207%20C%200%203.134%203.134%200%207%200%20C%2010.866%200%2014%203.134%2014%207%20Z%20M%202.575%207.728%20L%205.782%2010.935%20L%2011.489%205.228%20L%2010.075%203.814%20L%205.782%208.107%20L%203.989%206.314%20L%202.575%207.728%20Z'%20/%3e%3c/svg%3e", Km = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%204.207%202.793%20L%207%205.586%20L%209.793%202.793%20L%2011.207%204.207%20L%208.414%207%20L%2011.207%209.793%20L%209.793%2011.207%20L%207%208.414%20L%204.207%2011.207%20L%202.793%209.793%20L%205.586%207%20L%202.793%204.207%20L%204.207%202.793%20Z%20M%207%200%20C%203.134%200%200%203.134%200%207%20C%200%2010.866%203.134%2014%207%2014%20C%2010.866%2014%2014%2010.866%2014%207%20C%2014%203.134%2010.866%200%207%200%20Z'%20/%3e%3c/svg%3e", Wm = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207.006%20C%2014%208.867%2013.162%2010.744%2011.95%2011.956%20C%2010.738%2013.168%208.861%2014.006%207%2014.006%20C%205.139%2014.006%203.262%2013.168%202.05%2011.956%20C%200.838%2010.744%200%208.867%200%207.006%20C%200%205.145%200.838%203.268%202.05%202.056%20C%203.262%200.844%205.139%200.006%207%200.006%20C%208.861%200.006%2010.738%200.844%2011.95%202.056%20C%2013.162%203.268%2014%205.145%2014%207.006%20Z%20M%2010.536%203.47%20C%209.576%202.511%208.453%202.006%207%202.006%20C%205.547%202.006%204.424%202.511%203.464%203.47%20C%202.505%204.43%202%205.553%202%207.006%20C%202%208.459%202.505%209.582%203.464%2010.542%20C%204.424%2011.501%205.547%2012.006%207%2012.006%20C%208.453%2012.006%209.576%2011.501%2010.536%2010.542%20C%2011.495%209.582%2012%208.459%2012%207.006%20C%2012%205.553%2011.495%204.43%2010.536%203.47%20Z'%20/%3e%3c/svg%3e", Gm = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M13.8668%208.36613L11.9048%207.978C11.967%207.66329%2012%207.33649%2012%207C12%206.66351%2011.967%206.3367%2011.9048%206.022L13.8668%205.63387C13.9542%206.07571%2014%206.5325%2014%207C14%207.4675%2013.9542%207.92429%2013.8668%208.36613ZM12.821%203.11069L11.159%204.22333C10.7934%203.67721%2010.3228%203.2066%209.77667%202.84098L10.8893%201.17904C11.6527%201.6901%2012.3099%202.34733%2012.821%203.11069ZM8.36613%200.133238L7.978%202.09521C7.66329%202.03296%207.33649%202%207%202C6.66351%202%206.3367%202.03296%206.022%202.09521L5.63387%200.133238C6.07571%200.0458286%206.5325%200%207%200C7.4675%200%207.92429%200.0458285%208.36613%200.133238ZM3.11069%201.17904L4.22333%202.84098C3.67721%203.2066%203.2066%203.67721%202.84098%204.22333L1.17904%203.11069C1.6901%202.34733%202.34733%201.6901%203.11069%201.17904ZM0.133238%205.63387C0.0458285%206.07571%200%206.5325%200%207C0%207.4675%200.0458286%207.92429%200.133238%208.36613L2.09521%207.978C2.03296%207.6633%202%207.33649%202%207C2%206.66351%202.03296%206.33671%202.09521%206.022L0.133238%205.63387ZM1.17904%2010.8893L2.84098%209.77667C3.2066%2010.3228%203.67721%2010.7934%204.22333%2011.159L3.11069%2012.821C2.34733%2012.3099%201.6901%2011.6527%201.17904%2010.8893ZM5.63387%2013.8668L6.022%2011.9048C6.33671%2011.967%206.66351%2012%207%2012C7.33649%2012%207.6633%2011.967%207.978%2011.9048L8.36613%2013.8668C7.92429%2013.9542%207.4675%2014%207%2014C6.5325%2014%206.07571%2013.9542%205.63387%2013.8668ZM10.8893%2012.821L9.77667%2011.159C10.3228%2010.7934%2010.7934%2010.3228%2011.159%209.77667L12.821%2010.8893C12.3099%2011.6527%2011.6527%2012.3099%2010.8893%2012.821Z'%20/%3e%3c/svg%3e", Zm = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M7%2014C10.866%2014%2014%2010.866%2014%207C14%203.13401%2010.866%200%207%200C3.13401%200%200%203.13401%200%207C0%2010.866%203.13401%2014%207%2014ZM7%2012C4.23858%2012%202%209.76142%202%207C2%204.23858%204.23858%202%207%202C9.76142%202%2012%204.23858%2012%207C12%209.76142%209.76142%2012%207%2012ZM6%203V8H11C11%205.23858%208.76142%203%206%203Z'%20/%3e%3c/svg%3e", Xm = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207%20C%2014%2010.866%2010.866%2014%207%2014%20C%203.134%2014%200%2010.866%200%207%20C%200%203.134%203.134%200%207%200%20C%2010.866%200%2014%203.134%2014%207%20Z%20M%206.5%209%20C%206.224%209%206%209.224%206%209.5%20L%206%2010.5%20C%206%2010.776%206.224%2011%206.5%2011%20L%207.5%2011%20C%207.776%2011%208%2010.776%208%2010.5%20L%208%209.5%20C%208%209.224%207.776%209%207.5%209%20L%206.5%209%20Z%20M%206.5%203%20C%206.224%203%206%203.224%206%203.5%20L%206%207.5%20C%206%207.776%206.224%208%206.5%208%20L%207.5%208%20C%207.776%208%208%207.776%208%207.5%20L%208%203.5%20C%208%203.224%207.776%203%207.5%203%20L%206.5%203%20Z'%20/%3e%3c/svg%3e", Ym = "data:image/svg+xml,%3csvg%20viewBox='0%200%2012%2012'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M1.78814e-07%200.666667C1.78814e-07%200.298477%200.298477%200%200.666667%200H11.3333C11.7015%200%2012%200.298477%2012%200.666667C12%201.03486%2011.7015%201.33333%2011.3333%201.33333H0.666667C0.298477%201.33333%201.78814e-07%201.03486%201.78814e-07%200.666667ZM1.78814e-07%203.62963C1.78814e-07%203.26144%200.298477%202.96296%200.666667%202.96296H11.3333C11.7015%202.96296%2012%203.26144%2012%203.62963C12%203.99782%2011.7015%204.2963%2011.3333%204.2963H0.666667C0.298477%204.2963%201.78814e-07%203.99782%201.78814e-07%203.62963ZM0%206.59259C0%206.2244%200.298477%205.92593%200.666667%205.92593H11.3333C11.7015%205.92593%2012%206.2244%2012%206.59259C12%206.96078%2011.7015%207.25926%2011.3333%207.25926H0.666667C0.298477%207.25926%200%206.96078%200%206.59259ZM0%209.55556C0%209.18737%200.298477%208.88889%200.666667%208.88889H8.66667C9.03486%208.88889%209.33333%209.18737%209.33333%209.55556C9.33333%209.92375%209.03486%2010.2222%208.66667%2010.2222H0.666667C0.298477%2010.2222%200%209.92375%200%209.55556Z'%20/%3e%3c/svg%3e", Jm = "data:image/svg+xml,%3csvg%20aria-hidden='true'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20style='stroke:currentColor;stroke-opacity:%201;'%20d='M8%208V4a2%202%200%200%201%202-2h4a2%202%200%200%201%202%202v4m6%2012V10a2%202%200%200%200-2-2H4a2%202%200%200%200-2%202v10a2%202%200%200%200%202%202h16a2%202%200%200%200%202-2ZM8%2013v4m8-4v4M2%2015h20'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e", Qm = "data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M214.433%2056C232.908%2023.9999%20279.096%2024.0001%20297.571%2056L477.704%20368C496.18%20400%20473.085%20440%20436.135%20440H75.8685C38.918%20440%2015.8241%20400%2034.2993%20368L214.433%2056ZM256.002%20144L131.294%20360H380.709L256.002%20144Z'%20/%3e%3c/svg%3e", ev = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='17'%20y='2'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='17'%20y='17'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='2'%20y='17'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='7'%20y='3'%20width='10'%20height='2'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3crect%20x='7'%20y='19'%20width='10'%20height='2'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3crect%20x='3'%20y='7'%20width='2'%20height='10'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3crect%20x='19'%20y='7'%20width='2'%20height='10'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3c/svg%3e", sT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function iT(e, t) {
  return w(), A("svg", sT, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 12H9m12 6H7M21 6H3"
    }, null, -1)
  ]));
}
const tv = { name: "lucide-align-right", render: iT }, aT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function lT(e, t) {
  return w(), A("svg", aT, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("rect", {
        width: "20",
        height: "5",
        x: "2",
        y: "3",
        rx: "1"
      }),
      v("path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8m-10 4h4" })
    ], -1)
  ]));
}
const nv = { name: "lucide-archive", render: lT }, cT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function uT(e, t) {
  return w(), A("svg", cT, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 5v14m7-7l-7 7l-7-7"
    }, null, -1)
  ]));
}
const rv = { name: "lucide-arrow-down", render: uT }, fT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function dT(e, t) {
  return w(), A("svg", fT, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m12 19l-7-7l7-7m7 7H5"
    }, null, -1)
  ]));
}
const Eu = { name: "lucide-arrow-left", render: dT }, pT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function hT(e, t) {
  return w(), A("svg", pT, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 3L4 7l4 4M4 7h16m-4 14l4-4l-4-4m4 4H4"
    }, null, -1)
  ]));
}
const ov = { name: "lucide-arrow-left-right", render: hT }, gT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function mT(e, t) {
  return w(), A("svg", gT, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 12h14m-7-7l7 7l-7 7"
    }, null, -1)
  ]));
}
const sv = { name: "lucide-arrow-right", render: mT }, vT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function bT(e, t) {
  return w(), A("svg", vT, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M3 5v14m18-7H7m8 6l6-6l-6-6"
    }, null, -1)
  ]));
}
const _T = { name: "lucide-arrow-right-from-line", render: bT }, yT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function wT(e, t) {
  return w(), A("svg", yT, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M17 12H3m8 6l6-6l-6-6m10-1v14"
    }, null, -1)
  ]));
}
const kT = { name: "lucide-arrow-right-to-line", render: wT }, CT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function xT(e, t) {
  return w(), A("svg", CT, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m5 12l7-7l7 7m-7 7V5"
    }, null, -1)
  ]));
}
const iv = { name: "lucide-arrow-up", render: xT }, ET = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ST(e, t) {
  return w(), A("svg", ET, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "4"
      }),
      v("path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" })
    ], -1)
  ]));
}
const av = { name: "lucide-at-sign", render: ST }, AT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function TT(e, t) {
  return w(), A("svg", AT, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "m4.9 4.9l14.2 14.2" })
    ], -1)
  ]));
}
const lv = { name: "lucide-ban", render: TT }, MT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function $T(e, t) {
  return w(), A("svg", MT, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
    }, null, -1)
  ]));
}
const cv = { name: "lucide-bell", render: $T }, IT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function LT(e, t) {
  return w(), A("svg", IT, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    }, null, -1)
  ]));
}
const uv = { name: "lucide-book", render: LT }, OT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function RT(e, t) {
  return w(), A("svg", OT, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M12 8V4H8" }),
      v("rect", {
        width: "16",
        height: "12",
        x: "4",
        y: "8",
        rx: "2"
      }),
      v("path", { d: "M2 14h2m16 0h2m-7-1v2m-6-2v2" })
    ], -1)
  ]));
}
const fv = { name: "lucide-bot", render: RT }, PT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function DT(e, t) {
  return w(), A("svg", PT, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }),
      v("path", { d: "m3.3 7l8.7 5l8.7-5M12 22V12" })
    ], -1)
  ]));
}
const dv = { name: "lucide-box", render: DT }, NT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function BT(e, t) {
  return w(), A("svg", NT, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2a2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1m8 0h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"
    }, null, -1)
  ]));
}
const pv = { name: "lucide-braces", render: BT }, FT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function qT(e, t) {
  return w(), A("svg", FT, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" }),
      v("path", { d: "M12 5a3 3 0 1 1 5.997.125a4 4 0 0 1 2.526 5.77a4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" }),
      v("path", { d: "M15 13a4.5 4.5 0 0 1-3-4a4.5 4.5 0 0 1-3 4m8.599-6.5a3 3 0 0 0 .399-1.375m-11.995 0A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396m15.876 0a4 4 0 0 1 .585.396M6 18a4 4 0 0 1-1.967-.516m15.934 0A4 4 0 0 1 18 18" })
    ], -1)
  ]));
}
const hv = { name: "lucide-brain", render: qT }, zT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function HT(e, t) {
  return w(), A("svg", zT, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "m8 2l1.88 1.88m4.24 0L16 2M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" }),
      v("path", { d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6m0 0v-9" }),
      v("path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5m3 8H2m1 8c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4m-.8 4c2.1.1 3.8 1.9 3.8 4" })
    ], -1)
  ]));
}
const gv = { name: "lucide-bug", render: HT }, jT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function VT(e, t) {
  return w(), A("svg", jT, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("rect", {
        width: "16",
        height: "20",
        x: "4",
        y: "2",
        rx: "2"
      }),
      v("path", { d: "M8 6h8m0 8v4m0-8h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01" })
    ], -1)
  ]));
}
const mv = { name: "lucide-calculator", render: VT }, UT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function KT(e, t) {
  return w(), A("svg", UT, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M8 2v4m8-4v4" }),
      v("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "4",
        rx: "2"
      }),
      v("path", { d: "M3 10h18" })
    ], -1)
  ]));
}
const vv = { name: "lucide-calendar", render: KT }, WT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function GT(e, t) {
  return w(), A("svg", WT, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m3 15l4-8l4 8m-7-2h6m5-2h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4"
    }, null, -1)
  ]));
}
const bv = { name: "lucide-case-upper", render: GT }, ZT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function XT(e, t) {
  return w(), A("svg", ZT, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M13 17V9m5 8v-3M3 3v16a2 2 0 0 0 2 2h16M8 17V5"
    }, null, -1)
  ]));
}
const _v = { name: "lucide-chart-column-decreasing", render: XT }, YT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function JT(e, t) {
  return w(), A("svg", YT, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M20 6L9 17l-5-5"
    }, null, -1)
  ]));
}
const yv = { name: "lucide-check", render: JT }, QT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function eM(e, t) {
  return w(), A("svg", QT, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18 6L7 17l-5-5m20-2l-7.5 7.5L13 16"
    }, null, -1)
  ]));
}
const wv = { name: "lucide-check-check", render: eM }, tM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function nM(e, t) {
  return w(), A("svg", tM, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m6 9l6 6l6-6"
    }, null, -1)
  ]));
}
const ri = { name: "lucide-chevron-down", render: nM }, rM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function oM(e, t) {
  return w(), A("svg", rM, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m15 18l-6-6l6-6"
    }, null, -1)
  ]));
}
const oi = { name: "lucide-chevron-left", render: oM }, sM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function iM(e, t) {
  return w(), A("svg", sM, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m9 18l6-6l-6-6"
    }, null, -1)
  ]));
}
const si = { name: "lucide-chevron-right", render: iM }, aM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function lM(e, t) {
  return w(), A("svg", aM, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m18 15l-6-6l-6 6"
    }, null, -1)
  ]));
}
const ii = { name: "lucide-chevron-up", render: lM }, cM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function uM(e, t) {
  return w(), A("svg", cM, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m7 20l5-5l5 5M7 4l5 5l5-5"
    }, null, -1)
  ]));
}
const fM = { name: "lucide-chevrons-down-up", render: uM }, dM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function pM(e, t) {
  return w(), A("svg", dM, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m11 17l-5-5l5-5m7 10l-5-5l5-5"
    }, null, -1)
  ]));
}
const kv = { name: "lucide-chevrons-left", render: pM }, hM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function gM(e, t) {
  return w(), A("svg", hM, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m7 15l5 5l5-5M7 9l5-5l5 5"
    }, null, -1)
  ]));
}
const Cv = { name: "lucide-chevrons-up-down", render: gM }, mM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function vM(e, t) {
  return w(), A("svg", mM, t[0] || (t[0] = [
    v("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, null, -1)
  ]));
}
const xv = { name: "lucide-circle", render: vM }, bM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _M(e, t) {
  return w(), A("svg", bM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "M12 8v4m0 4h.01" })
    ], -1)
  ]));
}
const Ev = { name: "lucide-circle-alert", render: _M }, yM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function wM(e, t) {
  return w(), A("svg", yM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "m9 12l2 2l4-4" })
    ], -1)
  ]));
}
const Sv = { name: "lucide-circle-check", render: wM }, kM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function CM(e, t) {
  return w(), A("svg", kM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      })
    ], -1)
  ]));
}
const Av = { name: "lucide-circle-dot", render: CM }, xM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function EM(e, t) {
  return w(), A("svg", xM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01" })
    ], -1)
  ]));
}
const Su = { name: "lucide-circle-help", render: EM }, SM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function AM(e, t) {
  return w(), A("svg", SM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "M8 12h8" })
    ], -1)
  ]));
}
const Tv = { name: "lucide-circle-minus", render: AM }, TM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function MM(e, t) {
  return w(), A("svg", TM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "M10 15V9m4 6V9" })
    ], -1)
  ]));
}
const Mv = { name: "lucide-circle-pause", render: MM }, $M = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function IM(e, t) {
  return w(), A("svg", $M, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "m10 8l6 4l-6 4z" })
    ], -1)
  ]));
}
const $v = { name: "lucide-circle-play", render: IM }, LM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function OM(e, t) {
  return w(), A("svg", LM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "M8 12h8m-4-4v8" })
    ], -1)
  ]));
}
const Iv = { name: "lucide-circle-plus", render: OM }, RM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function PM(e, t) {
  return w(), A("svg", RM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M18 20a6 6 0 0 0-12 0" }),
      v("circle", {
        cx: "12",
        cy: "10",
        r: "4"
      }),
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })
    ], -1)
  ]));
}
const Lv = { name: "lucide-circle-user-round", render: PM }, DM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function NM(e, t) {
  return w(), A("svg", DM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "m15 9l-6 6m0-6l6 6" })
    ], -1)
  ]));
}
const Ov = { name: "lucide-circle-x", render: NM }, BM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function FM(e, t) {
  return w(), A("svg", BM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("rect", {
        width: "8",
        height: "4",
        x: "8",
        y: "2",
        rx: "1",
        ry: "1"
      }),
      v("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m4 7h4m-4 5h4m-8-5h.01M8 16h.01" })
    ], -1)
  ]));
}
const Rv = { name: "lucide-clipboard-list", render: FM }, qM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function zM(e, t) {
  return w(), A("svg", qM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M12 6v6l4 2" }),
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })
    ], -1)
  ]));
}
const Pv = { name: "lucide-clock", render: zM }, HM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function jM(e, t) {
  return w(), A("svg", HM, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"
    }, null, -1)
  ]));
}
const Dv = { name: "lucide-cloud", render: jM }, VM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function UM(e, t) {
  return w(), A("svg", VM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M12 13v8l-4-4m4 4l4-4" }),
      v("path", { d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" })
    ], -1)
  ]));
}
const Nv = { name: "lucide-cloud-download", render: UM }, KM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function WM(e, t) {
  return w(), A("svg", KM, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m16 18l6-6l-6-6M8 6l-6 6l6 6"
    }, null, -1)
  ]));
}
const Bv = { name: "lucide-code", render: WM }, GM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ZM(e, t) {
  return w(), A("svg", GM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16" }),
      v("path", { d: "M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-12v2m0 18v-2m5 .66l-1-1.73m-5-8.66L7 3.34M20.66 17l-1.73-1M3.34 7l1.73 1M14 12h8M2 12h2m16.66-5l-1.73 1M3.34 17l1.73-1M17 3.34l-1 1.73m-5 8.66l-4 6.93" })
    ], -1)
  ]));
}
const Au = { name: "lucide-cog", render: ZM }, XM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function YM(e, t) {
  return w(), A("svg", XM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "M12 18a6 6 0 0 0 0-12z" })
    ], -1)
  ]));
}
const Fv = { name: "lucide-contrast", render: YM }, JM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function QM(e, t) {
  return w(), A("svg", JM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("rect", {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2"
      }),
      v("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
    ], -1)
  ]));
}
const qv = { name: "lucide-copy", render: QM }, e$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function t$(e, t) {
  return w(), A("svg", e$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "M22 12h-4M6 12H2m10-6V2m0 20v-4" })
    ], -1)
  ]));
}
const n$ = { name: "lucide-crosshair", render: t$ }, r$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function o$(e, t) {
  return w(), A("svg", r$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("ellipse", {
        cx: "12",
        cy: "5",
        rx: "9",
        ry: "3"
      }),
      v("path", { d: "M3 5v14a9 3 0 0 0 18 0V5" }),
      v("path", { d: "M3 12a9 3 0 0 0 18 0" })
    ], -1)
  ]));
}
const zv = { name: "lucide-database", render: o$ }, s$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function i$(e, t) {
  return w(), A("svg", s$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }),
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })
    ], -1)
  ]));
}
const Hv = { name: "lucide-earth", render: i$ }, a$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function l$(e, t) {
  return w(), A("svg", a$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      }),
      v("circle", {
        cx: "19",
        cy: "12",
        r: "1"
      }),
      v("circle", {
        cx: "5",
        cy: "12",
        r: "1"
      })
    ], -1)
  ]));
}
const jv = { name: "lucide-ellipsis", render: l$ }, c$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function u$(e, t) {
  return w(), A("svg", c$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      }),
      v("circle", {
        cx: "12",
        cy: "5",
        r: "1"
      }),
      v("circle", {
        cx: "12",
        cy: "19",
        r: "1"
      })
    ], -1)
  ]));
}
const Vv = { name: "lucide-ellipsis-vertical", render: u$ }, f$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function d$(e, t) {
  return w(), A("svg", f$, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 9h14M5 15h14"
    }, null, -1)
  ]));
}
const Uv = { name: "lucide-equal", render: d$ }, p$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function h$(e, t) {
  return w(), A("svg", p$, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }, null, -1)
  ]));
}
const Kv = { name: "lucide-external-link", render: h$ }, g$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function m$(e, t) {
  return w(), A("svg", g$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0" }),
      v("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      })
    ], -1)
  ]));
}
const Wv = { name: "lucide-eye", render: m$ }, v$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function b$(e, t) {
  return w(), A("svg", v$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575a1 1 0 0 1 0 .696a10.8 10.8 0 0 1-1.444 2.49m-6.41-.679a3 3 0 0 1-4.242-4.242" }),
      v("path", { d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 4.446-5.143M2 2l20 20" })
    ], -1)
  ]));
}
const Gv = { name: "lucide-eye-off", render: b$ }, _$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function y$(e, t) {
  return w(), A("svg", _$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      v("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" })
    ], -1)
  ]));
}
const Zv = { name: "lucide-file", render: y$ }, w$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function k$(e, t) {
  return w(), A("svg", w$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M10 12v-1m0 7v-2m0-9V6m4-4v4a2 2 0 0 0 2 2h4" }),
      v("path", { d: "M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01" }),
      v("circle", {
        cx: "10",
        cy: "20",
        r: "2"
      })
    ], -1)
  ]));
}
const Xv = { name: "lucide-file-archive", render: k$ }, C$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function x$(e, t) {
  return w(), A("svg", C$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M10 12.5L8 15l2 2.5m4-5l2 2.5l-2 2.5M14 2v4a2 2 0 0 0 2 2h4" }),
      v("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" })
    ], -1)
  ]));
}
const Yv = { name: "lucide-file-code", render: x$ }, E$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function S$(e, t) {
  return w(), A("svg", E$, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Zm-6 8h6m-3 3V7M9 17h6"
    }, null, -1)
  ]));
}
const A$ = { name: "lucide-file-diff", render: S$ }, T$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function M$(e, t) {
  return w(), A("svg", T$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      v("path", { d: "M14 2v4a2 2 0 0 0 2 2h4m-8 10v-6m-3 3l3 3l3-3" })
    ], -1)
  ]));
}
const Jv = { name: "lucide-file-down", render: M$ }, $$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function I$(e, t) {
  return w(), A("svg", $$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }),
      v("path", { d: "M14 2v4a2 2 0 0 0 2 2h4M2 15h10m-3 3l3-3l-3-3" })
    ], -1)
  ]));
}
const Qv = { name: "lucide-file-input", render: I$ }, L$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function O$(e, t) {
  return w(), A("svg", L$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M14 2v4a2 2 0 0 0 2 2h4M4 7V4a2 2 0 0 1 2-2a2 2 0 0 0-2 2" }),
      v("path", { d: "M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6m-1 9l-3 3" }),
      v("path", { d: "m5 17l-3-3h10" })
    ], -1)
  ]));
}
const eb = { name: "lucide-file-output", render: O$ }, R$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function P$(e, t) {
  return w(), A("svg", R$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      v("path", { d: "M14 2v4a2 2 0 0 0 2 2h4M10 9H8m8 4H8m8 4H8" })
    ], -1)
  ]));
}
const Tu = { name: "lucide-file-text", render: P$ }, D$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function N$(e, t) {
  return w(), A("svg", D$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M20 7h-3a2 2 0 0 1-2-2V2" }),
      v("path", { d: "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" }),
      v("path", { d: "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" })
    ], -1)
  ]));
}
const tb = { name: "lucide-files", render: N$ }, B$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function F$(e, t) {
  return w(), A("svg", B$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4M14 13.12c0 2.38 0 6.38-1 8.88m4.29-.98c.12-.6.43-2.3.5-3.02M2 12a10 10 0 0 1 18-6M2 16h.01m19.79 0c.2-2 .131-5.354 0-6" }),
      v("path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2m2.31 12c.21-.66.45-1.32.57-2M9 6.8a6 6 0 0 1 9 5.2v2" })
    ], -1)
  ]));
}
const nb = { name: "lucide-fingerprint", render: F$ }, q$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function z$(e, t) {
  return w(), A("svg", q$, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2M6.453 15h11.094M8.5 2h7"
    }, null, -1)
  ]));
}
const rb = { name: "lucide-flask-conical", render: z$ }, H$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function j$(e, t) {
  return w(), A("svg", H$, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }, null, -1)
  ]));
}
const ob = { name: "lucide-folder", render: j$ }, V$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function U$(e, t) {
  return w(), A("svg", V$, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m6 14l1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"
    }, null, -1)
  ]));
}
const sb = { name: "lucide-folder-open", render: U$ }, K$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function W$(e, t) {
  return w(), A("svg", K$, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 10v6m-3-3h6m5 7a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }, null, -1)
  ]));
}
const ib = { name: "lucide-folder-plus", render: W$ }, G$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Z$(e, t) {
  return w(), A("svg", G$, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"
    }, null, -1)
  ]));
}
const ab = { name: "lucide-funnel", render: Z$ }, X$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Y$(e, t) {
  return w(), A("svg", X$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M6 3h12l4 6l-10 13L2 9Z" }),
      v("path", { d: "M11 3L8 9l4 13l4-13l-3-6M2 9h20" })
    ], -1)
  ]));
}
const lb = { name: "lucide-gem", render: Y$ }, J$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Q$(e, t) {
  return w(), A("svg", J$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("rect", {
        width: "18",
        height: "4",
        x: "3",
        y: "8",
        rx: "1"
      }),
      v("path", { d: "M12 8v13m7-9v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5a2.5 2.5 0 0 1 0 5" })
    ], -1)
  ]));
}
const cb = { name: "lucide-gift", render: Q$ }, eI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function tI(e, t) {
  return w(), A("svg", eI, t[0] || (t[0] = [
    Ar('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M6 3v12"></path><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></g>', 1)
  ]));
}
const ub = { name: "lucide-git-branch", render: tI }, nI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function rI(e, t) {
  return w(), A("svg", nI, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20" })
    ], -1)
  ]));
}
const fb = { name: "lucide-globe", render: rI }, oI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function sI(e, t) {
  return w(), A("svg", oI, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6" }),
      v("path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5" })
    ], -1)
  ]));
}
const db = { name: "lucide-graduation-cap", render: sI }, iI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function aI(e, t) {
  return w(), A("svg", iI, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M12 3v18m-9-9h18" }),
      v("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      })
    ], -1)
  ]));
}
const pb = { name: "lucide-grid-2x2", render: aI }, lI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function cI(e, t) {
  return w(), A("svg", lI, t[0] || (t[0] = [
    Ar('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></g>', 1)
  ]));
}
const hb = { name: "lucide-grip-vertical", render: cI }, uI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function fI(e, t) {
  return w(), A("svg", uI, t[0] || (t[0] = [
    Ar('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21l1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9M2 16l6 6"></path><circle cx="16" cy="9" r="2.9"></circle><circle cx="6" cy="5" r="3"></circle></g>', 1)
  ]));
}
const gb = { name: "lucide-hand-coins", render: fI }, dI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function pI(e, t) {
  return w(), A("svg", dI, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "m11 17l2 2a1 1 0 1 0 3-3" }),
      v("path", { d: "m14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" }),
      v("path", { d: "m21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8" })
    ], -1)
  ]));
}
const mb = { name: "lucide-handshake", render: pI }, hI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function gI(e, t) {
  return w(), A("svg", hI, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M22 12H2m3.45-6.89L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11M6 16h.01M10 16h.01"
    }, null, -1)
  ]));
}
const vb = { name: "lucide-hard-drive", render: gI }, mI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function vI(e, t) {
  return w(), A("svg", mI, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M12 2v8m4-4l-4 4l-4-4" }),
      v("rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "14",
        rx: "2"
      }),
      v("path", { d: "M6 18h.01M10 18h.01" })
    ], -1)
  ]));
}
const bb = { name: "lucide-hard-drive-download", render: vI }, bI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _I(e, t) {
  return w(), A("svg", bI, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 9h16M4 15h16M10 3L8 21m8-18l-2 18"
    }, null, -1)
  ]));
}
const _b = { name: "lucide-hash", render: _I }, yI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function wI(e, t) {
  return w(), A("svg", yI, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8" }),
      v("path", { d: "M3 3v5h5m4-1v5l4 2" })
    ], -1)
  ]));
}
const yb = { name: "lucide-history", render: wI }, kI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function CI(e, t) {
  return w(), A("svg", kI, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 22h14M5 2h14m-2 20v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"
    }, null, -1)
  ]));
}
const wb = { name: "lucide-hourglass", render: CI }, xI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function EI(e, t) {
  return w(), A("svg", xI, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
      v("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
    ], -1)
  ]));
}
const kb = { name: "lucide-house", render: EI }, SI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function AI(e, t) {
  return w(), A("svg", SI, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2"
      }),
      v("circle", {
        cx: "9",
        cy: "9",
        r: "2"
      }),
      v("path", { d: "m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
    ], -1)
  ]));
}
const Cb = { name: "lucide-image", render: AI }, TI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function MI(e, t) {
  return w(), A("svg", TI, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M22 12h-6l-2 3h-4l-2-3H2" }),
      v("path", { d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11" })
    ], -1)
  ]));
}
const xb = { name: "lucide-inbox", render: MI }, $I = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function II(e, t) {
  return w(), A("svg", $I, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "M12 16v-4m0-4h.01" })
    ], -1)
  ]));
}
const Mu = { name: "lucide-info", render: II }, LI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function OI(e, t) {
  return w(), A("svg", LI, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" }),
      v("circle", {
        cx: "16.5",
        cy: "7.5",
        r: ".5",
        fill: "currentColor"
      })
    ], -1)
  ]));
}
const Eb = { name: "lucide-key-round", render: OI }, RI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function PI(e, t) {
  return w(), A("svg", RI, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6"
    }, null, -1)
  ]));
}
const Sb = { name: "lucide-languages", render: PI }, DI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function NI(e, t) {
  return w(), A("svg", DI, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" }),
      v("path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" }),
      v("path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" })
    ], -1)
  ]));
}
const Ab = { name: "lucide-layers", render: NI }, BI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function FI(e, t) {
  return w(), A("svg", BI, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4"
    }, null, -1)
  ]));
}
const Tb = { name: "lucide-lightbulb", render: FI }, qI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function zI(e, t) {
  return w(), A("svg", qI, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
      v("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
    ], -1)
  ]));
}
const Mb = { name: "lucide-link", render: zI }, HI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function jI(e, t) {
  return w(), A("svg", HI, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M3 12h.01M3 18h.01M3 6h.01M8 12h13M8 18h13M8 6h13"
    }, null, -1)
  ]));
}
const $b = { name: "lucide-list", render: jI }, VI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function UI(e, t) {
  return w(), A("svg", VI, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m3 17l2 2l4-4M3 7l2 2l4-4m4 1h8m-8 6h8m-8 6h8"
    }, null, -1)
  ]));
}
const Ib = { name: "lucide-list-checks", render: UI }, KI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function WI(e, t) {
  return w(), A("svg", KI, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("rect", {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2"
      }),
      v("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
    ], -1)
  ]));
}
const Lb = { name: "lucide-lock", render: WI }, GI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ZI(e, t) {
  return w(), A("svg", GI, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m10 17l5-5l-5-5m5 5H3m12-9h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
    }, null, -1)
  ]));
}
const Ob = { name: "lucide-log-in", render: ZI }, XI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function YI(e, t) {
  return w(), A("svg", XI, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m16 17l5-5l-5-5m5 5H9m0 9H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
    }, null, -1)
  ]));
}
const Rb = { name: "lucide-log-out", render: YI }, JI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function QI(e, t) {
  return w(), A("svg", JI, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }),
      v("rect", {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2"
      })
    ], -1)
  ]));
}
const Pb = { name: "lucide-mail", render: QI }, eL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function tL(e, t) {
  return w(), A("svg", eL, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3"
    }, null, -1)
  ]));
}
const Db = { name: "lucide-maximize", render: tL }, nL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function rL(e, t) {
  return w(), A("svg", nL, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 3h6v6m0-6l-7 7M3 21l7-7m-1 7H3v-6"
    }, null, -1)
  ]));
}
const Nb = { name: "lucide-maximize-2", render: rL }, oL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function sL(e, t) {
  return w(), A("svg", oL, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 12h16M4 18h16M4 6h16"
    }, null, -1)
  ]));
}
const Bb = { name: "lucide-menu", render: sL }, iL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function aL(e, t) {
  return w(), A("svg", iL, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
    }, null, -1)
  ]));
}
const Fb = { name: "lucide-message-circle", render: aL }, lL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function cL(e, t) {
  return w(), A("svg", lL, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2zm4 0h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"
    }, null, -1)
  ]));
}
const qb = { name: "lucide-messages-square", render: cL }, uL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function fL(e, t) {
  return w(), A("svg", uL, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 13v8m0-18v3M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"
    }, null, -1)
  ]));
}
const zb = { name: "lucide-milestone", render: fL }, dL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function pL(e, t) {
  return w(), A("svg", dL, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m14 10l7-7m-1 7h-6V4M3 21l7-7m-6 0h6v6"
    }, null, -1)
  ]));
}
const hL = { name: "lucide-minimize-2", render: pL }, gL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function mL(e, t) {
  return w(), A("svg", gL, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12.586 12.586L19 19M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"
    }, null, -1)
  ]));
}
const Hb = { name: "lucide-mouse-pointer", render: mL }, vL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function bL(e, t) {
  return w(), A("svg", vL, t[0] || (t[0] = [
    Ar('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="6" height="6" x="16" y="16" rx="1"></rect><rect width="6" height="6" x="2" y="16" rx="1"></rect><rect width="6" height="6" x="9" y="2" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"></path></g>', 1)
  ]));
}
const jb = { name: "lucide-network", render: bL }, _L = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function yL(e, t) {
  return w(), A("svg", _L, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M12 22v-9m3.17-10.79a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.66 1.66 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z" }),
      v("path", { d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13" }),
      v("path", { d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.64 1.64 0 0 0 1.63 0z" })
    ], -1)
  ]));
}
const Vb = { name: "lucide-package-open", render: yL }, wL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function kL(e, t) {
  return w(), A("svg", wL, t[0] || (t[0] = [
    Ar('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle></g>', 1)
  ]));
}
const Ub = { name: "lucide-palette", render: kL }, CL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function xL(e, t) {
  return w(), A("svg", CL, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      v("path", { d: "M15 3v18" })
    ], -1)
  ]));
}
const EL = { name: "lucide-panel-right", render: xL }, SL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function AL(e, t) {
  return w(), A("svg", SL, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("rect", {
        width: "4",
        height: "16",
        x: "14",
        y: "4",
        rx: "1"
      }),
      v("rect", {
        width: "4",
        height: "16",
        x: "6",
        y: "4",
        rx: "1"
      })
    ], -1)
  ]));
}
const Kb = { name: "lucide-pause", render: AL }, TL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ML(e, t) {
  return w(), A("svg", TL, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
    }, null, -1)
  ]));
}
const Wb = { name: "lucide-pen", render: ML }, $L = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function IL(e, t) {
  return w(), A("svg", $L, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4"
    }, null, -1)
  ]));
}
const Gb = { name: "lucide-pencil", render: IL }, LL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function OL(e, t) {
  return w(), A("svg", LL, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 17v5M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4a1 1 0 0 1 1 1z"
    }, null, -1)
  ]));
}
const Zb = { name: "lucide-pin", render: OL }, RL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function PL(e, t) {
  return w(), A("svg", RL, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m6 3l14 9l-14 9z"
    }, null, -1)
  ]));
}
const Xb = { name: "lucide-play", render: PL }, DL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function NL(e, t) {
  return w(), A("svg", DL, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 22v-5M9 8V2m6 6V2m3 6v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"
    }, null, -1)
  ]));
}
const Yb = { name: "lucide-plug", render: NL }, BL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function FL(e, t) {
  return w(), A("svg", BL, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 12h14m-7-7v14"
    }, null, -1)
  ]));
}
const Jb = { name: "lucide-plus", render: FL }, qL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function zL(e, t) {
  return w(), A("svg", qL, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2s-2 1-2 2s2 1 2 2m13-7h.01M6 18h.01m14.82-9.17a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" }),
      v("path", { d: "M18 11.66V22a4 4 0 0 0 4-4V6" })
    ], -1)
  ]));
}
const Qb = { name: "lucide-pocket-knife", render: zL }, HL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function jL(e, t) {
  return w(), A("svg", HL, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 2v10m6.4-5.4a9 9 0 1 1-12.77.04"
    }, null, -1)
  ]));
}
const e_ = { name: "lucide-power", render: jL }, VL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function UL(e, t) {
  return w(), A("svg", VL, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "m15 14l5-5l-5-5" }),
      v("path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" })
    ], -1)
  ]));
}
const t_ = { name: "lucide-redo-2", render: UL }, KL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function WL(e, t) {
  return w(), A("svg", KL, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8" }),
      v("path", { d: "M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16" }),
      v("path", { d: "M8 16H3v5" })
    ], -1)
  ]));
}
const ai = { name: "lucide-refresh-cw", render: WL }, GL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ZL(e, t) {
  return w(), A("svg", GL, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 7V4h16v3M5 20h6m2-16L8 20m7-5l5 5m0-5l-5 5"
    }, null, -1)
  ]));
}
const n_ = { name: "lucide-remove-formatting", render: ZL }, XL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function YL(e, t) {
  return w(), A("svg", XL, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" }),
      v("circle", {
        cx: "5",
        cy: "19",
        r: "1"
      })
    ], -1)
  ]));
}
const r_ = { name: "lucide-rss", render: YL }, JL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function QL(e, t) {
  return w(), A("svg", JL, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 10a7.31 7.31 0 0 0 10 10Zm5 5l3-3m5 1a6 6 0 0 0-6-6m10 6A10 10 0 0 0 11 3"
    }, null, -1)
  ]));
}
const o_ = { name: "lucide-satellite-dish", render: QL }, eO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function tO(e, t) {
  return w(), A("svg", eO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" }),
      v("path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7M7 3v4a1 1 0 0 0 1 1h7" })
    ], -1)
  ]));
}
const s_ = { name: "lucide-save", render: tO }, nO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function rO(e, t) {
  return w(), A("svg", nO, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m16 16l3-8l3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1M2 16l3-8l3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1m5 5h10M12 3v18M3 7h2c2 0 5-1 7-2c2 1 5 2 7 2h2"
    }, null, -1)
  ]));
}
const i_ = { name: "lucide-scale", render: rO }, oO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function sO(e, t) {
  return w(), A("svg", oO, t[0] || (t[0] = [
    Ar('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12L12 12m8-8L8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8L20 20"></path></g>', 1)
  ]));
}
const $u = { name: "lucide-scissors", render: sO }, iO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function aO(e, t) {
  return w(), A("svg", iO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "m21 21l-4.34-4.34" }),
      v("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      })
    ], -1)
  ]));
}
const a_ = { name: "lucide-search", render: aO }, lO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function cO(e, t) {
  return w(), A("svg", lO, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
    }, null, -1)
  ]));
}
const l_ = { name: "lucide-send", render: cO }, uO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function fO(e, t) {
  return w(), A("svg", uO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "2",
        rx: "2",
        ry: "2"
      }),
      v("rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "14",
        rx: "2",
        ry: "2"
      }),
      v("path", { d: "M6 6h.01M6 18h.01" })
    ], -1)
  ]));
}
const c_ = { name: "lucide-server", render: fO }, dO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function pO(e, t) {
  return w(), A("svg", dO, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 2v13m4-9l-4-4l-4 4m-4 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
    }, null, -1)
  ]));
}
const u_ = { name: "lucide-share", render: pO }, hO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function gO(e, t) {
  return w(), A("svg", hO, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 4h-7m-4 0H3m18 8h-9m-4 0H3m18 8h-5m-4 0H3M14 2v4m-6 4v4m8 4v4"
    }, null, -1)
  ]));
}
const f_ = { name: "lucide-sliders-horizontal", render: gO }, mO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function vO(e, t) {
  return w(), A("svg", mO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01" })
    ], -1)
  ]));
}
const d_ = { name: "lucide-smile", render: vO }, bO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _O(e, t) {
  return w(), A("svg", bO, t[0] || (t[0] = [
    v("rect", {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      rx: "2"
    }, null, -1)
  ]));
}
const p_ = { name: "lucide-square", render: _O }, yO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function wO(e, t) {
  return w(), A("svg", yO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      v("path", { d: "m9 12l2 2l4-4" })
    ], -1)
  ]));
}
const h_ = { name: "lucide-square-check", render: wO }, kO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function CO(e, t) {
  return w(), A("svg", kO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }),
      v("path", { d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" })
    ], -1)
  ]));
}
const g_ = { name: "lucide-square-pen", render: CO }, xO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function EO(e, t) {
  return w(), A("svg", xO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      v("path", { d: "M8 12h8m-4-4v8" })
    ], -1)
  ]));
}
const m_ = { name: "lucide-square-plus", render: EO }, SO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function AO(e, t) {
  return w(), A("svg", SO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" }),
      v("path", { d: "M15 3v4a2 2 0 0 0 2 2h4" })
    ], -1)
  ]));
}
const v_ = { name: "lucide-sticky-note", render: AO }, TO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function MO(e, t) {
  return w(), A("svg", TO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "4"
      }),
      v("path", { d: "M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" })
    ], -1)
  ]));
}
const b_ = { name: "lucide-sun", render: MO }, $O = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function IO(e, t) {
  return w(), A("svg", $O, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M12 3v18" }),
      v("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      v("path", { d: "M3 9h18M3 15h18" })
    ], -1)
  ]));
}
const __ = { name: "lucide-table", render: IO }, LO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function OO(e, t) {
  return w(), A("svg", LO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "m15 5l6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" }),
      v("path", { d: "M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z" }),
      v("circle", {
        cx: "6.5",
        cy: "9.5",
        r: ".5",
        fill: "currentColor"
      })
    ], -1)
  ]));
}
const y_ = { name: "lucide-tags", render: OO }, RO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function PO(e, t) {
  return w(), A("svg", RO, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 19h8M4 17l6-6l-6-6"
    }, null, -1)
  ]));
}
const w_ = { name: "lucide-terminal", render: PO }, DO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function NO(e, t) {
  return w(), A("svg", DO, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M17 14V2M9 18.12L10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88"
    }, null, -1)
  ]));
}
const k_ = { name: "lucide-thumbs-down", render: NO }, BO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function FO(e, t) {
  return w(), A("svg", BO, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M7 10v12m8-16.12L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88"
    }, null, -1)
  ]));
}
const C_ = { name: "lucide-thumbs-up", render: FO }, qO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function zO(e, t) {
  return w(), A("svg", qO, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6"
    }, null, -1)
  ]));
}
const x_ = { name: "lucide-trash-2", render: zO }, HO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function jO(e, t) {
  return w(), A("svg", HO, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m17 14l3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7zm-5 8v-3"
    }, null, -1)
  ]));
}
const E_ = { name: "lucide-tree-pine", render: jO }, VO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function UO(e, t) {
  return w(), A("svg", VO, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01"
    }, null, -1)
  ]));
}
const S_ = { name: "lucide-triangle-alert", render: UO }, KO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function WO(e, t) {
  return w(), A("svg", KO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M9 14L4 9l5-5" }),
      v("path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" })
    ], -1)
  ]));
}
const A_ = { name: "lucide-undo-2", render: WO }, GO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ZO(e, t) {
  return w(), A("svg", GO, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m18.84 12.25l1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07a5.006 5.006 0 0 0-6.95 0l-1.72 1.71m-6.58 6.57l-1.71 1.71a5.004 5.004 0 0 0 .12 7.07a5.006 5.006 0 0 0 6.95 0l1.71-1.71M8 2v3M2 8h3m11 11v3m3-6h3"
    }, null, -1)
  ]));
}
const T_ = { name: "lucide-unlink", render: ZO }, XO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function YO(e, t) {
  return w(), A("svg", XO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }),
      v("circle", {
        cx: "12",
        cy: "7",
        r: "4"
      })
    ], -1)
  ]));
}
const M_ = { name: "lucide-user", render: YO }, JO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function QO(e, t) {
  return w(), A("svg", JO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
      v("circle", {
        cx: "9",
        cy: "7",
        r: "4"
      })
    ], -1)
  ]));
}
const $_ = { name: "lucide-user-check", render: QO }, eR = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function tR(e, t) {
  return w(), A("svg", eR, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "10",
        cy: "7",
        r: "4"
      }),
      v("path", { d: "M10.3 15H7a4 4 0 0 0-4 4v2m12-5.5V14a2 2 0 0 1 4 0v1.5" }),
      v("rect", {
        width: "8",
        height: "5",
        x: "13",
        y: "16",
        rx: ".899"
      })
    ], -1)
  ]));
}
const I_ = { name: "lucide-user-lock", render: tR }, nR = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function rR(e, t) {
  return w(), A("svg", nR, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "8",
        r: "5"
      }),
      v("path", { d: "M20 21a8 8 0 0 0-16 0" })
    ], -1)
  ]));
}
const L_ = { name: "lucide-user-round", render: rR }, oR = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function sR(e, t) {
  return w(), A("svg", oR, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87" }),
      v("circle", {
        cx: "9",
        cy: "7",
        r: "4"
      })
    ], -1)
  ]));
}
const O_ = { name: "lucide-users", render: sR }, iR = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function aR(e, t) {
  return w(), A("svg", iR, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 21s-4-3-4-9s4-9 4-9m8 0s4 3 4 9s-4 9-4 9M15 9l-6 6m0-6l6 6"
    }, null, -1)
  ]));
}
const R_ = { name: "lucide-variable", render: aR }, lR = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function cR(e, t) {
  return w(), A("svg", lR, t[0] || (t[0] = [
    Ar('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"></rect><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle><path d="m7.9 7.9l2.7 2.7"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle><path d="m13.4 10.6l2.7-2.7"></path><circle cx="7.5" cy="16.5" r=".5" fill="currentColor"></circle><path d="m7.9 16.1l2.7-2.7"></path><circle cx="16.5" cy="16.5" r=".5" fill="currentColor"></circle><path d="m13.4 13.4l2.7 2.7"></path><circle cx="12" cy="12" r="2"></circle></g>', 1)
  ]));
}
const P_ = { name: "lucide-vault", render: cR }, uR = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function fR(e, t) {
  return w(), A("svg", uR, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }),
      v("rect", {
        width: "14",
        height: "12",
        x: "2",
        y: "6",
        rx: "2"
      })
    ], -1)
  ]));
}
const D_ = { name: "lucide-video", render: fR }, dR = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function pR(e, t) {
  return w(), A("svg", dR, t[0] || (t[0] = [
    Ar('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="4.5" r="2.5"></circle><path d="m10.2 6.3l-3.9 3.9"></path><circle cx="4.5" cy="12" r="2.5"></circle><path d="M7 12h10"></path><circle cx="19.5" cy="12" r="2.5"></circle><path d="m13.8 17.7l3.9-3.9"></path><circle cx="12" cy="19.5" r="2.5"></circle></g>', 1)
  ]));
}
const N_ = { name: "lucide-waypoints", render: pR }, hR = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function gR(e, t) {
  return w(), A("svg", hR, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
    }, null, -1)
  ]));
}
const B_ = { name: "lucide-wrench", render: gR }, mR = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function vR(e, t) {
  return w(), A("svg", mR, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18 6L6 18M6 6l12 12"
    }, null, -1)
  ]));
}
const Iu = { name: "lucide-x", render: vR }, bR = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _R(e, t) {
  return w(), A("svg", bR, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
    }, null, -1)
  ]));
}
const F_ = { name: "lucide-zap", render: _R }, yR = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function wR(e, t) {
  return w(), A("svg", yR, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      }),
      v("path", { d: "m21 21l-4.35-4.35M11 8v6m-3-3h6" })
    ], -1)
  ]));
}
const q_ = { name: "lucide-zoom-in", render: wR }, kR = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function CR(e, t) {
  return w(), A("svg", kR, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      }),
      v("path", { d: "m21 21l-4.35-4.35M8 11h6" })
    ], -1)
  ]));
}
const z_ = { name: "lucide-zoom-out", render: CR }, pp = {
  // customIcons
  variable: R_,
  "pop-out": zm,
  triangle: Qm,
  "status-completed": Um,
  "status-waiting": Zm,
  "status-error": Km,
  "status-canceled": Vm,
  "status-new": Wm,
  "status-unknown": Gm,
  "status-warning": Xm,
  "vector-square": ev,
  schema: Hm,
  json: pv,
  binary: Fm,
  text: Ym,
  toolbox: Jm,
  spinner: jm,
  xmark: Iu,
  // fontAwesomeIcons
  "caret-up": ii,
  "caret-down": ri,
  "caret-right": si,
  "caret-left": oi,
  "folder-plus": ib,
  share: u_,
  "user-check": $_,
  "check-double": wv,
  "exclamation-circle": Ev,
  circle: xv,
  "eye-slash": Gv,
  folder: ob,
  "minus-circle": Tv,
  adjust: Fv,
  refresh: ai,
  vault: P_,
  "angle-double-left": kv,
  "angle-down": ri,
  "angle-left": oi,
  "angle-right": si,
  "angle-up": ii,
  archive: nv,
  "arrow-left": Eu,
  "arrow-right": sv,
  "arrow-up": iv,
  "arrow-down": rv,
  at: av,
  ban: lv,
  "balance-scale-left": i_,
  bars: Bb,
  bolt: F_,
  book: uv,
  "box-open": Vb,
  bug: gv,
  brain: hv,
  calculator: mv,
  calendar: vv,
  "chart-bar": _v,
  check: yv,
  "check-circle": Sv,
  "check-square": h_,
  "chevron-left": oi,
  "chevron-right": si,
  "chevron-down": ri,
  "chevron-up": ii,
  code: Bv,
  "code-branch": ub,
  cog: Au,
  cogs: Au,
  comment: Fb,
  comments: qb,
  "clipboard-list": Rv,
  clock: Pv,
  clone: qv,
  cloud: Dv,
  "cloud-download-alt": Nv,
  compress: Cv,
  copy: tb,
  cube: dv,
  cut: $u,
  database: zv,
  "dot-circle": Av,
  "grip-lines-vertical": qm,
  "grip-vertical": hb,
  edit: g_,
  "ellipsis-h": jv,
  "ellipsis-v": Vv,
  envelope: Pb,
  equals: Uv,
  eye: Wv,
  "exclamation-triangle": S_,
  expand: Db,
  "expand-alt": Nb,
  "external-link-alt": Kv,
  "exchange-alt": ov,
  file: Zv,
  "file-alt": Tu,
  "file-archive": Xv,
  "file-code": Yv,
  "file-download": Jv,
  "file-export": eb,
  "file-import": Qv,
  "file-pdf": Tu,
  filter: ab,
  fingerprint: nb,
  flask: rb,
  "folder-open": sb,
  font: bv,
  gift: cb,
  globe: fb,
  "globe-americas": Hv,
  "graduation-cap": db,
  "hand-holding-usd": gb,
  "hand-scissors": $u,
  handshake: mb,
  "hand-point-left": Eu,
  hashtag: _b,
  hdd: vb,
  history: yb,
  home: kb,
  hourglass: wb,
  image: Cb,
  inbox: xb,
  info: Mu,
  "info-circle": Mu,
  key: Eb,
  language: Sb,
  "layer-group": Ab,
  link: Mb,
  list: $b,
  lightbulb: Tb,
  lock: Lb,
  "map-signs": zb,
  "mouse-pointer": Hb,
  "network-wired": jb,
  palette: Ub,
  pause: Kb,
  "pause-circle": Mv,
  pen: Wb,
  "pencil-alt": Gb,
  play: Xb,
  "play-circle": $v,
  plug: Yb,
  plus: Jb,
  "plus-circle": Iv,
  "plus-square": m_,
  "project-diagram": N_,
  question: Su,
  "question-circle": Su,
  redo: t_,
  "remove-format": n_,
  robot: fv,
  rss: r_,
  save: s_,
  "satellite-dish": o_,
  search: a_,
  "search-minus": z_,
  "search-plus": q_,
  server: c_,
  screwdriver: Qb,
  smile: d_,
  "sign-in-alt": Ob,
  "sign-out-alt": Rb,
  "sliders-h": f_,
  "sticky-note": v_,
  stop: p_,
  stream: tv,
  sun: b_,
  sync: ai,
  "sync-alt": ai,
  table: __,
  tags: y_,
  tasks: Ib,
  terminal: w_,
  "th-large": pb,
  thumbtack: Zb,
  "thumbs-down": k_,
  "thumbs-up": C_,
  times: Iu,
  "times-circle": Ov,
  tools: B_,
  trash: x_,
  undo: A_,
  unlink: T_,
  user: M_,
  "user-circle": Lv,
  "user-friends": L_,
  users: O_,
  video: D_,
  tree: E_,
  "user-lock": I_,
  gem: lb,
  download: bb,
  "power-off": e_,
  "paper-plane": l_,
  bell: cv
}, hp = {
  // custom icons
  // NOTE: ensure to replace any colors with "currentColor" in SVG
  "bolt-filled": eT,
  "grip-lines-vertical": qm,
  variable: R_,
  "pop-out": zm,
  triangle: Qm,
  "status-completed": Um,
  "status-waiting": Zm,
  "status-error": Km,
  "status-canceled": Vm,
  "status-new": Wm,
  "status-unknown": Gm,
  "status-warning": Xm,
  "vector-square": ev,
  "continue-on-error": tT,
  "always-output-data": nT,
  "retry-on-fail": rT,
  "execute-once": oT,
  schema: Hm,
  json: pv,
  binary: Fm,
  text: Ym,
  toolbox: Jm,
  spinner: jm,
  // lucide
  "align-right": tv,
  archive: nv,
  "arrow-down": rv,
  "arrow-left": Eu,
  "arrow-left-right": ov,
  "arrow-right": sv,
  "arrow-right-from-line": _T,
  "arrow-right-to-line": kT,
  "arrow-up": iv,
  "at-sign": av,
  ban: lv,
  bell: cv,
  book: uv,
  bot: fv,
  box: dv,
  brain: hv,
  bug: gv,
  calculator: mv,
  calendar: vv,
  "case-upper": bv,
  "chart-column-decreasing": _v,
  check: yv,
  "check-check": wv,
  "chevron-down": ri,
  "chevron-left": oi,
  "chevron-right": si,
  "chevron-up": ii,
  "chevrons-left": kv,
  "chevrons-down-up": fM,
  "chevrons-up-down": Cv,
  circle: xv,
  "circle-alert": Ev,
  "circle-check": Sv,
  "circle-dot": Av,
  "circle-help": Su,
  "circle-minus": Tv,
  "circle-pause": Mv,
  "circle-play": $v,
  "circle-plus": Iv,
  "circle-user-round": Lv,
  "circle-x": Ov,
  "clipboard-list": Rv,
  clock: Pv,
  cloud: Dv,
  "cloud-download": Nv,
  code: Bv,
  cog: Au,
  contrast: Fv,
  copy: qv,
  crosshair: n$,
  database: zv,
  earth: Hv,
  ellipsis: jv,
  "ellipsis-vertical": Vv,
  equal: Uv,
  "external-link": Kv,
  eye: Wv,
  "eye-off": Gv,
  file: Zv,
  "file-archive": Xv,
  "file-code": Yv,
  "file-diff": A$,
  "file-down": Jv,
  "file-input": Qv,
  "file-output": eb,
  "file-text": Tu,
  files: tb,
  fingerprint: nb,
  "flask-conical": rb,
  folder: ob,
  "folder-open": sb,
  "folder-plus": ib,
  funnel: ab,
  gem: lb,
  gift: cb,
  "git-branch": ub,
  globe: fb,
  "graduation-cap": db,
  "grid-2x2": pb,
  "grip-vertical": hb,
  "hand-coins": gb,
  handshake: mb,
  "hard-drive": vb,
  "hard-drive-download": bb,
  hash: _b,
  history: yb,
  hourglass: wb,
  house: kb,
  image: Cb,
  inbox: xb,
  info: Mu,
  "key-round": Eb,
  languages: Sb,
  layers: Ab,
  lightbulb: Tb,
  link: Mb,
  list: $b,
  "list-checks": Ib,
  lock: Lb,
  "log-in": Ob,
  "log-out": Rb,
  mail: Pb,
  "minimize-2": hL,
  maximize: Db,
  "maximize-2": Nb,
  menu: Bb,
  "message-circle": Fb,
  "messages-square": qb,
  milestone: zb,
  "mouse-pointer": Hb,
  network: jb,
  "package-open": Vb,
  palette: Ub,
  "panel-right": EL,
  pause: Kb,
  pen: Wb,
  pencil: Gb,
  pin: Zb,
  play: Xb,
  plug: Yb,
  plus: Jb,
  "pocket-knife": Qb,
  power: e_,
  "redo-2": t_,
  "refresh-cw": ai,
  "remove-formatting": n_,
  rss: r_,
  "satellite-dish": o_,
  save: s_,
  scale: i_,
  scissors: $u,
  search: a_,
  send: l_,
  server: c_,
  share: u_,
  "sliders-horizontal": f_,
  smile: d_,
  square: p_,
  "square-check": h_,
  "square-pen": g_,
  "square-plus": m_,
  "sticky-note": v_,
  sun: b_,
  table: __,
  tags: y_,
  terminal: w_,
  "thumbs-down": k_,
  "thumbs-up": C_,
  "trash-2": x_,
  "tree-pine": E_,
  "triangle-alert": S_,
  "undo-2": A_,
  unlink: T_,
  user: M_,
  "user-check": $_,
  "user-lock": I_,
  "user-round": L_,
  users: O_,
  vault: P_,
  video: D_,
  waypoints: N_,
  wrench: B_,
  x: Iu,
  zap: F_,
  "zoom-in": q_,
  "zoom-out": z_
}, xR = /* @__PURE__ */ re({
  name: "N8nIcon",
  __name: "Icon",
  props: {
    icon: {},
    size: { default: void 0 },
    spin: { type: Boolean, default: !1 },
    color: { default: void 0 },
    strokeWidth: {}
  },
  setup(e) {
    const t = e, n = sf(), r = P(() => {
      const a = [];
      return t.spin && a.push("spin"), t.strokeWidth && a.push("strokeWidth"), ["n8n-icon", ...a.map((l) => n[l])];
    }), s = {
      xsmall: 10,
      small: 12,
      medium: 14,
      large: 16,
      xlarge: 20
    }, o = P(() => {
      let a = "1em";
      return t.size && (a = `${typeof t.size == "number" ? t.size : s[t.size]}px`), {
        height: a,
        width: a
      };
    }), i = P(() => {
      const a = {};
      return t.color && (a.color = `var(--color-${t.color})`), t.strokeWidth && (a["--n8n-icon-stroke-width"] = `${t.strokeWidth}px`), a;
    });
    return (a, l) => b(hp)[a.icon] ?? b(pp)[a.icon] ? (w(), ue(Pt(
      b(hp)[a.icon] ?? b(pp)[a.icon]
    ), {
      key: 0,
      class: Q(r.value),
      "aria-hidden": "true",
      focusable: "false",
      role: "img",
      height: o.value.height,
      width: o.value.width,
      "data-icon": t.icon,
      style: st(i.value)
    }, null, 8, ["class", "height", "width", "data-icon", "style"])) : _e("", !0);
  }
}), ER = "_strokeWidth_fqxq5_1", SR = "_spin_fqxq5_6", AR = {
  strokeWidth: ER,
  spin: SR
}, TR = {
  $style: AR
}, Bf = /* @__PURE__ */ Tr(xR, [["__cssModules", TR]]), MR = { class: "n8n-spinner" }, $R = {
  key: 0,
  class: "lds-ring"
}, IR = /* @__PURE__ */ re({
  name: "N8nSpinner",
  __name: "Spinner",
  props: {
    size: { default: "medium" },
    type: { default: "dots" }
  },
  setup(e) {
    return (t, n) => (w(), A("span", MR, [
      t.type === "ring" ? (w(), A("div", $R, n[0] || (n[0] = [
        v("div", null, null, -1),
        v("div", null, null, -1),
        v("div", null, null, -1),
        v("div", null, null, -1)
      ]))) : (w(), ue(b(Bf), {
        key: 1,
        icon: "spinner",
        size: t.size,
        spin: ""
      }, null, 8, ["size"]))
    ]));
  }
}), LR = { key: 1 }, OR = /* @__PURE__ */ re({
  name: "N8nButton",
  __name: "Button",
  props: {
    block: { type: Boolean, default: !1 },
    element: { default: "button" },
    href: {},
    label: { default: "" },
    square: { type: Boolean, default: !1 },
    active: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    float: {},
    icon: {},
    loading: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 },
    size: { default: "medium" },
    iconSize: {},
    text: { type: Boolean, default: !1 },
    type: { default: "primary" },
    nativeType: {}
  },
  setup(e) {
    const t = sf(), n = Fi(), r = e;
    tf(() => {
      r.element === "a" && !r.href && console.error("n8n-button:href is required for link buttons");
    });
    const s = P(() => r.loading ? "true" : void 0), o = P(() => r.disabled ? "true" : void 0), i = P(() => r.disabled || r.loading), a = P(
      () => r.iconSize ?? (r.size === "xmini" || r.size === "mini" ? "xsmall" : r.size)
    ), l = P(() => `button ${t.button} ${t[r.type]}${r.size ? ` ${t[r.size]}` : ""}${r.outline ? ` ${t.outline}` : ""}${r.loading ? ` ${t.loading}` : ""}${r.float ? ` ${t[`float-${r.float}`]}` : ""}${r.text ? ` ${t.text}` : ""}${r.disabled ? ` ${t.disabled}` : ""}${r.block ? ` ${t.block}` : ""}${r.active ? ` ${t.active}` : ""}${r.icon || r.loading ? ` ${t.withIcon}` : ""}${r.square ? ` ${t.square}` : ""}`);
    return (u, f) => (w(), ue(Pt(u.element), gt({
      class: l.value,
      disabled: i.value,
      "aria-disabled": o.value,
      "aria-busy": s.value,
      href: u.href,
      "aria-live": "polite"
    }, {
      ...b(n),
      ...r.nativeType ? { type: r.nativeType } : {}
    }), {
      default: he(() => [
        u.loading || u.icon ? (w(), A("span", {
          key: 0,
          class: Q(b(t).icon)
        }, [
          u.loading ? (w(), ue(b(IR), {
            key: 0,
            size: a.value
          }, null, 8, ["size"])) : u.icon ? (w(), ue(b(Bf), {
            key: 1,
            icon: u.icon,
            size: a.value
          }, null, 8, ["icon", "size"])) : _e("", !0)
        ], 2)) : _e("", !0),
        u.label ? (w(), A("span", LR, Je(u.label), 1)) : u.$slots.default ? we(u.$slots, "default", { key: 2 }) : _e("", !0)
      ]),
      _: 3
    }, 16, ["class", "disabled", "aria-disabled", "aria-busy", "href"]));
  }
}), RR = "_button_mdqve_229", PR = "_active_mdqve_263", DR = "_disabled_mdqve_281", NR = "_loading_mdqve_289", BR = "_secondary_mdqve_312", FR = "_tertiary_mdqve_334", qR = "_success_mdqve_356", zR = "_warning_mdqve_378", HR = "_danger_mdqve_400", jR = "_xmini_mdqve_425", VR = "_square_mdqve_430", UR = "_mini_mdqve_435", KR = "_small_mdqve_445", WR = "_medium_mdqve_455", GR = "_large_mdqve_465", ZR = "_xlarge_mdqve_470", XR = "_outline_mdqve_483", YR = "_primary_mdqve_487", JR = "_text_mdqve_524", QR = "_transparent_mdqve_592", eP = "_withIcon_mdqve_597", tP = "_icon_mdqve_603", nP = "_block_mdqve_612", rP = {
  button: RR,
  active: PR,
  disabled: DR,
  loading: NR,
  secondary: BR,
  tertiary: FR,
  success: qR,
  warning: zR,
  danger: HR,
  xmini: jR,
  square: VR,
  mini: UR,
  small: KR,
  medium: WR,
  large: GR,
  xlarge: ZR,
  outline: XR,
  primary: YR,
  text: JR,
  transparent: QR,
  withIcon: eP,
  icon: tP,
  block: nP,
  "float-left": "_float-left_mdqve_616",
  "float-right": "_float-right_mdqve_620"
}, oP = {
  $style: rP
}, sP = /* @__PURE__ */ Tr(OR, [["__cssModules", oP]]);
({
  ...ps.props
});
const iP = /* @__PURE__ */ re({
  name: "N8nText",
  __name: "Text",
  props: {
    bold: { type: Boolean, default: !1 },
    size: { default: "medium" },
    color: {},
    align: {},
    compact: { type: Boolean, default: !1 },
    tag: { default: "span" }
  },
  setup(e) {
    const t = e, n = sf(), r = P(() => {
      const s = [];
      return t.align && s.push(`align-${t.align}`), t.color && s.push(t.color), t.compact && s.push("compact"), s.push(`size-${t.size}`), s.push(t.bold ? "bold" : "regular"), s.map((o) => n[o]);
    });
    return (s, o) => (w(), ue(Pt(s.tag), gt({
      class: ["n8n-text", ...r.value]
    }, s.$attrs), {
      default: he(() => [
        we(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), aP = "_bold_ushv1_1", lP = "_regular_ushv1_5", cP = "_compact_ushv1_34", uP = "_primary_ushv1_38", fP = "_secondary_ushv1_42", dP = "_danger_ushv1_62", pP = "_success_ushv1_66", hP = "_warning_ushv1_70", gP = {
  bold: aP,
  regular: lP,
  "size-xlarge": "_size-xlarge_ushv1_9",
  "size-large": "_size-large_ushv1_14",
  "size-medium": "_size-medium_ushv1_19",
  "size-small": "_size-small_ushv1_24",
  "size-xsmall": "_size-xsmall_ushv1_29",
  compact: cP,
  primary: uP,
  secondary: fP,
  "text-dark": "_text-dark_ushv1_46",
  "text-base": "_text-base_ushv1_50",
  "text-light": "_text-light_ushv1_54",
  "text-xlight": "_text-xlight_ushv1_58",
  danger: dP,
  success: pP,
  warning: hP,
  "foreground-dark": "_foreground-dark_ushv1_74",
  "foreground-xdark": "_foreground-xdark_ushv1_78",
  "align-left": "_align-left_ushv1_82",
  "align-right": "_align-right_ushv1_86",
  "align-center": "_align-center_ushv1_90"
}, mP = {
  $style: gP
}, vP = /* @__PURE__ */ Tr(iP, [["__cssModules", mP]]);
function bP(e, t) {
  return /^on[A-Z]/.test(t);
}
function H_(e) {
  return `${e ? `${e}-` : ""}${Math.random().toString(36).substring(2, 11)}`;
}
const _P = /* @__PURE__ */ re({
  name: "N8nInput",
  __name: "Input",
  props: {
    modelValue: { default: "" },
    type: { default: "text" },
    size: { default: "large" },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    rows: { default: 2 },
    maxlength: { default: void 0 },
    title: { default: "" },
    name: { default: () => H_("input") },
    autocomplete: { default: "off" }
  },
  setup(e, { expose: t }) {
    const n = e, r = P(
      () => n.size === "medium" ? "default" : n.size
    ), s = P(() => {
      const f = [];
      return n.size === "xlarge" && f.push("xlarge"), n.type === "password" && f.push("ph-no-capture"), f;
    }), o = W(), i = P(() => {
      if (!(o != null && o.value)) return;
      const f = n.type === "textarea" ? "textarea" : "input";
      return o.value.$el.querySelector(f);
    });
    return t({ focus: () => {
      var f;
      return (f = i.value) == null ? void 0 : f.focus();
    }, blur: () => {
      var f;
      return (f = i.value) == null ? void 0 : f.blur();
    }, select: () => {
      var f;
      return (f = i.value) == null ? void 0 : f.select();
    } }), (f, c) => (w(), ue(b(ta), gt({
      ref_key: "innerInput",
      ref: o,
      "model-value": f.modelValue,
      type: f.type,
      size: r.value,
      class: ["n8n-input", ...s.value],
      autocomplete: f.autocomplete,
      name: f.name,
      placeholder: f.placeholder,
      disabled: f.disabled,
      readonly: f.readonly,
      clearable: f.clearable,
      rows: f.rows,
      title: f.title,
      maxlength: f.maxlength
    }, f.$attrs), hi({ _: 2 }, [
      f.$slots.prepend ? {
        name: "prepend",
        fn: he(() => [
          we(f.$slots, "prepend")
        ]),
        key: "0"
      } : void 0,
      f.$slots.append ? {
        name: "append",
        fn: he(() => [
          we(f.$slots, "append")
        ]),
        key: "1"
      } : void 0,
      f.$slots.prefix ? {
        name: "prefix",
        fn: he(() => [
          we(f.$slots, "prefix")
        ]),
        key: "2"
      } : void 0,
      f.$slots.suffix ? {
        name: "suffix",
        fn: he(() => [
          we(f.$slots, "suffix")
        ]),
        key: "3"
      } : void 0
    ]), 1040, ["model-value", "type", "size", "class", "autocomplete", "name", "placeholder", "disabled", "readonly", "clearable", "rows", "title", "maxlength"]));
  }
}), yP = "_xlarge_ddtui_1", wP = {
  xlarge: yP
}, kP = {
  $style: wP
}, CP = /* @__PURE__ */ Tr(_P, [["__cssModules", kP]]);
H_("color-picker");
({
  ...Nm
});
({
  ...xu.props
});
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const xP = () => {
}, ki = Array.isArray;
function gp(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function EP(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!SP(e[n], t[n]))
      return !1;
  return !0;
}
function SP(e, t) {
  return ki(e) ? mp(e, t) : ki(t) ? mp(t, e) : e === t;
}
function mp(e, t) {
  return ki(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
var vp;
(function(e) {
  e.pop = "pop", e.push = "push";
})(vp || (vp = {}));
var bp;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(bp || (bp = {}));
var _p;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(_p || (_p = {}));
const j_ = Symbol(""), AP = Symbol("");
function yp(e) {
  const t = qe(j_), n = qe(AP), r = P(() => {
    const l = b(e.to);
    return t.resolve(l);
  }), s = P(() => {
    const { matched: l } = r.value, { length: u } = l, f = l[u - 1], c = n.matched;
    if (!f || !c.length)
      return -1;
    const p = c.findIndex(gp.bind(null, f));
    if (p > -1)
      return p;
    const d = kp(l[u - 2]);
    return (
      // we are dealing with nested routes
      u > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      kp(f) === d && // avoid comparing the child with its parent
      c[c.length - 1].path !== d ? c.findIndex(gp.bind(null, l[u - 2])) : p
    );
  }), o = P(() => s.value > -1 && IP(n.params, r.value.params)), i = P(() => s.value > -1 && s.value === n.matched.length - 1 && EP(n.params, r.value.params));
  function a(l = {}) {
    if ($P(l)) {
      const u = t[b(e.replace) ? "replace" : "push"](
        b(e.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(xP);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u;
    }
    return Promise.resolve();
  }
  return {
    route: r,
    href: P(() => r.value.href),
    isActive: o,
    isExactActive: i,
    navigate: a
  };
}
function TP(e) {
  return e.length === 1 ? e[0] : e;
}
const MP = /* @__PURE__ */ re({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: yp,
  setup(e, { slots: t }) {
    const n = Sn(yp(e)), { options: r } = qe(j_), s = P(() => ({
      [Cp(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Cp(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const o = t.default && TP(t.default(n));
      return e.custom ? o : _n("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, o);
    };
  }
}), wp = MP;
function $P(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function IP(e, t) {
  for (const n in t) {
    const r = t[n], s = e[n];
    if (typeof r == "string") {
      if (r !== s)
        return !1;
    } else if (!ki(s) || s.length !== r.length || r.some((o, i) => o !== s[i]))
      return !1;
  }
  return !0;
}
function kp(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Cp = (e, t, n) => e ?? t ?? n;
var Ha = {};
const LP = "Á", OP = "á", RP = "Ă", PP = "ă", DP = "∾", NP = "∿", BP = "∾̳", FP = "Â", qP = "â", zP = "´", HP = "А", jP = "а", VP = "Æ", UP = "æ", KP = "⁡", WP = "𝔄", GP = "𝔞", ZP = "À", XP = "à", YP = "ℵ", JP = "ℵ", QP = "Α", eD = "α", tD = "Ā", nD = "ā", rD = "⨿", oD = "&", sD = "&", iD = "⩕", aD = "⩓", lD = "∧", cD = "⩜", uD = "⩘", fD = "⩚", dD = "∠", pD = "⦤", hD = "∠", gD = "⦨", mD = "⦩", vD = "⦪", bD = "⦫", _D = "⦬", yD = "⦭", wD = "⦮", kD = "⦯", CD = "∡", xD = "∟", ED = "⊾", SD = "⦝", AD = "∢", TD = "Å", MD = "⍼", $D = "Ą", ID = "ą", LD = "𝔸", OD = "𝕒", RD = "⩯", PD = "≈", DD = "⩰", ND = "≊", BD = "≋", FD = "'", qD = "⁡", zD = "≈", HD = "≊", jD = "Å", VD = "å", UD = "𝒜", KD = "𝒶", WD = "≔", GD = "*", ZD = "≈", XD = "≍", YD = "Ã", JD = "ã", QD = "Ä", eN = "ä", tN = "∳", nN = "⨑", rN = "≌", oN = "϶", sN = "‵", iN = "∽", aN = "⋍", lN = "∖", cN = "⫧", uN = "⊽", fN = "⌅", dN = "⌆", pN = "⌅", hN = "⎵", gN = "⎶", mN = "≌", vN = "Б", bN = "б", _N = "„", yN = "∵", wN = "∵", kN = "∵", CN = "⦰", xN = "϶", EN = "ℬ", SN = "ℬ", AN = "Β", TN = "β", MN = "ℶ", $N = "≬", IN = "𝔅", LN = "𝔟", ON = "⋂", RN = "◯", PN = "⋃", DN = "⨀", NN = "⨁", BN = "⨂", FN = "⨆", qN = "★", zN = "▽", HN = "△", jN = "⨄", VN = "⋁", UN = "⋀", KN = "⤍", WN = "⧫", GN = "▪", ZN = "▴", XN = "▾", YN = "◂", JN = "▸", QN = "␣", eB = "▒", tB = "░", nB = "▓", rB = "█", oB = "=⃥", sB = "≡⃥", iB = "⫭", aB = "⌐", lB = "𝔹", cB = "𝕓", uB = "⊥", fB = "⊥", dB = "⋈", pB = "⧉", hB = "┐", gB = "╕", mB = "╖", vB = "╗", bB = "┌", _B = "╒", yB = "╓", wB = "╔", kB = "─", CB = "═", xB = "┬", EB = "╤", SB = "╥", AB = "╦", TB = "┴", MB = "╧", $B = "╨", IB = "╩", LB = "⊟", OB = "⊞", RB = "⊠", PB = "┘", DB = "╛", NB = "╜", BB = "╝", FB = "└", qB = "╘", zB = "╙", HB = "╚", jB = "│", VB = "║", UB = "┼", KB = "╪", WB = "╫", GB = "╬", ZB = "┤", XB = "╡", YB = "╢", JB = "╣", QB = "├", eF = "╞", tF = "╟", nF = "╠", rF = "‵", oF = "˘", sF = "˘", iF = "¦", aF = "𝒷", lF = "ℬ", cF = "⁏", uF = "∽", fF = "⋍", dF = "⧅", pF = "\\", hF = "⟈", gF = "•", mF = "•", vF = "≎", bF = "⪮", _F = "≏", yF = "≎", wF = "≏", kF = "Ć", CF = "ć", xF = "⩄", EF = "⩉", SF = "⩋", AF = "∩", TF = "⋒", MF = "⩇", $F = "⩀", IF = "ⅅ", LF = "∩︀", OF = "⁁", RF = "ˇ", PF = "ℭ", DF = "⩍", NF = "Č", BF = "č", FF = "Ç", qF = "ç", zF = "Ĉ", HF = "ĉ", jF = "∰", VF = "⩌", UF = "⩐", KF = "Ċ", WF = "ċ", GF = "¸", ZF = "¸", XF = "⦲", YF = "¢", JF = "·", QF = "·", eq = "𝔠", tq = "ℭ", nq = "Ч", rq = "ч", oq = "✓", sq = "✓", iq = "Χ", aq = "χ", lq = "ˆ", cq = "≗", uq = "↺", fq = "↻", dq = "⊛", pq = "⊚", hq = "⊝", gq = "⊙", mq = "®", vq = "Ⓢ", bq = "⊖", _q = "⊕", yq = "⊗", wq = "○", kq = "⧃", Cq = "≗", xq = "⨐", Eq = "⫯", Sq = "⧂", Aq = "∲", Tq = "”", Mq = "’", $q = "♣", Iq = "♣", Lq = ":", Oq = "∷", Rq = "⩴", Pq = "≔", Dq = "≔", Nq = ",", Bq = "@", Fq = "∁", qq = "∘", zq = "∁", Hq = "ℂ", jq = "≅", Vq = "⩭", Uq = "≡", Kq = "∮", Wq = "∯", Gq = "∮", Zq = "𝕔", Xq = "ℂ", Yq = "∐", Jq = "∐", Qq = "©", ez = "©", tz = "℗", nz = "∳", rz = "↵", oz = "✗", sz = "⨯", iz = "𝒞", az = "𝒸", lz = "⫏", cz = "⫑", uz = "⫐", fz = "⫒", dz = "⋯", pz = "⤸", hz = "⤵", gz = "⋞", mz = "⋟", vz = "↶", bz = "⤽", _z = "⩈", yz = "⩆", wz = "≍", kz = "∪", Cz = "⋓", xz = "⩊", Ez = "⊍", Sz = "⩅", Az = "∪︀", Tz = "↷", Mz = "⤼", $z = "⋞", Iz = "⋟", Lz = "⋎", Oz = "⋏", Rz = "¤", Pz = "↶", Dz = "↷", Nz = "⋎", Bz = "⋏", Fz = "∲", qz = "∱", zz = "⌭", Hz = "†", jz = "‡", Vz = "ℸ", Uz = "↓", Kz = "↡", Wz = "⇓", Gz = "‐", Zz = "⫤", Xz = "⊣", Yz = "⤏", Jz = "˝", Qz = "Ď", eH = "ď", tH = "Д", nH = "д", rH = "‡", oH = "⇊", sH = "ⅅ", iH = "ⅆ", aH = "⤑", lH = "⩷", cH = "°", uH = "∇", fH = "Δ", dH = "δ", pH = "⦱", hH = "⥿", gH = "𝔇", mH = "𝔡", vH = "⥥", bH = "⇃", _H = "⇂", yH = "´", wH = "˙", kH = "˝", CH = "`", xH = "˜", EH = "⋄", SH = "⋄", AH = "⋄", TH = "♦", MH = "♦", $H = "¨", IH = "ⅆ", LH = "ϝ", OH = "⋲", RH = "÷", PH = "÷", DH = "⋇", NH = "⋇", BH = "Ђ", FH = "ђ", qH = "⌞", zH = "⌍", HH = "$", jH = "𝔻", VH = "𝕕", UH = "¨", KH = "˙", WH = "⃜", GH = "≐", ZH = "≑", XH = "≐", YH = "∸", JH = "∔", QH = "⊡", ej = "⌆", tj = "∯", nj = "¨", rj = "⇓", oj = "⇐", sj = "⇔", ij = "⫤", aj = "⟸", lj = "⟺", cj = "⟹", uj = "⇒", fj = "⊨", dj = "⇑", pj = "⇕", hj = "∥", gj = "⤓", mj = "↓", vj = "↓", bj = "⇓", _j = "⇵", yj = "̑", wj = "⇊", kj = "⇃", Cj = "⇂", xj = "⥐", Ej = "⥞", Sj = "⥖", Aj = "↽", Tj = "⥟", Mj = "⥗", $j = "⇁", Ij = "↧", Lj = "⊤", Oj = "⤐", Rj = "⌟", Pj = "⌌", Dj = "𝒟", Nj = "𝒹", Bj = "Ѕ", Fj = "ѕ", qj = "⧶", zj = "Đ", Hj = "đ", jj = "⋱", Vj = "▿", Uj = "▾", Kj = "⇵", Wj = "⥯", Gj = "⦦", Zj = "Џ", Xj = "џ", Yj = "⟿", Jj = "É", Qj = "é", eV = "⩮", tV = "Ě", nV = "ě", rV = "Ê", oV = "ê", sV = "≖", iV = "≕", aV = "Э", lV = "э", cV = "⩷", uV = "Ė", fV = "ė", dV = "≑", pV = "ⅇ", hV = "≒", gV = "𝔈", mV = "𝔢", vV = "⪚", bV = "È", _V = "è", yV = "⪖", wV = "⪘", kV = "⪙", CV = "∈", xV = "⏧", EV = "ℓ", SV = "⪕", AV = "⪗", TV = "Ē", MV = "ē", $V = "∅", IV = "∅", LV = "◻", OV = "∅", RV = "▫", PV = " ", DV = " ", NV = " ", BV = "Ŋ", FV = "ŋ", qV = " ", zV = "Ę", HV = "ę", jV = "𝔼", VV = "𝕖", UV = "⋕", KV = "⧣", WV = "⩱", GV = "ε", ZV = "Ε", XV = "ε", YV = "ϵ", JV = "≖", QV = "≕", eU = "≂", tU = "⪖", nU = "⪕", rU = "⩵", oU = "=", sU = "≂", iU = "≟", aU = "⇌", lU = "≡", cU = "⩸", uU = "⧥", fU = "⥱", dU = "≓", pU = "ℯ", hU = "ℰ", gU = "≐", mU = "⩳", vU = "≂", bU = "Η", _U = "η", yU = "Ð", wU = "ð", kU = "Ë", CU = "ë", xU = "€", EU = "!", SU = "∃", AU = "∃", TU = "ℰ", MU = "ⅇ", $U = "ⅇ", IU = "≒", LU = "Ф", OU = "ф", RU = "♀", PU = "ﬃ", DU = "ﬀ", NU = "ﬄ", BU = "𝔉", FU = "𝔣", qU = "ﬁ", zU = "◼", HU = "▪", jU = "fj", VU = "♭", UU = "ﬂ", KU = "▱", WU = "ƒ", GU = "𝔽", ZU = "𝕗", XU = "∀", YU = "∀", JU = "⋔", QU = "⫙", eK = "ℱ", tK = "⨍", nK = "½", rK = "⅓", oK = "¼", sK = "⅕", iK = "⅙", aK = "⅛", lK = "⅔", cK = "⅖", uK = "¾", fK = "⅗", dK = "⅜", pK = "⅘", hK = "⅚", gK = "⅝", mK = "⅞", vK = "⁄", bK = "⌢", _K = "𝒻", yK = "ℱ", wK = "ǵ", kK = "Γ", CK = "γ", xK = "Ϝ", EK = "ϝ", SK = "⪆", AK = "Ğ", TK = "ğ", MK = "Ģ", $K = "Ĝ", IK = "ĝ", LK = "Г", OK = "г", RK = "Ġ", PK = "ġ", DK = "≥", NK = "≧", BK = "⪌", FK = "⋛", qK = "≥", zK = "≧", HK = "⩾", jK = "⪩", VK = "⩾", UK = "⪀", KK = "⪂", WK = "⪄", GK = "⋛︀", ZK = "⪔", XK = "𝔊", YK = "𝔤", JK = "≫", QK = "⋙", eW = "⋙", tW = "ℷ", nW = "Ѓ", rW = "ѓ", oW = "⪥", sW = "≷", iW = "⪒", aW = "⪤", lW = "⪊", cW = "⪊", uW = "⪈", fW = "≩", dW = "⪈", pW = "≩", hW = "⋧", gW = "𝔾", mW = "𝕘", vW = "`", bW = "≥", _W = "⋛", yW = "≧", wW = "⪢", kW = "≷", CW = "⩾", xW = "≳", EW = "𝒢", SW = "ℊ", AW = "≳", TW = "⪎", MW = "⪐", $W = "⪧", IW = "⩺", LW = ">", OW = ">", RW = "≫", PW = "⋗", DW = "⦕", NW = "⩼", BW = "⪆", FW = "⥸", qW = "⋗", zW = "⋛", HW = "⪌", jW = "≷", VW = "≳", UW = "≩︀", KW = "≩︀", WW = "ˇ", GW = " ", ZW = "½", XW = "ℋ", YW = "Ъ", JW = "ъ", QW = "⥈", eG = "↔", tG = "⇔", nG = "↭", rG = "^", oG = "ℏ", sG = "Ĥ", iG = "ĥ", aG = "♥", lG = "♥", cG = "…", uG = "⊹", fG = "𝔥", dG = "ℌ", pG = "ℋ", hG = "⤥", gG = "⤦", mG = "⇿", vG = "∻", bG = "↩", _G = "↪", yG = "𝕙", wG = "ℍ", kG = "―", CG = "─", xG = "𝒽", EG = "ℋ", SG = "ℏ", AG = "Ħ", TG = "ħ", MG = "≎", $G = "≏", IG = "⁃", LG = "‐", OG = "Í", RG = "í", PG = "⁣", DG = "Î", NG = "î", BG = "И", FG = "и", qG = "İ", zG = "Е", HG = "е", jG = "¡", VG = "⇔", UG = "𝔦", KG = "ℑ", WG = "Ì", GG = "ì", ZG = "ⅈ", XG = "⨌", YG = "∭", JG = "⧜", QG = "℩", eZ = "Ĳ", tZ = "ĳ", nZ = "Ī", rZ = "ī", oZ = "ℑ", sZ = "ⅈ", iZ = "ℐ", aZ = "ℑ", lZ = "ı", cZ = "ℑ", uZ = "⊷", fZ = "Ƶ", dZ = "⇒", pZ = "℅", hZ = "∞", gZ = "⧝", mZ = "ı", vZ = "⊺", bZ = "∫", _Z = "∬", yZ = "ℤ", wZ = "∫", kZ = "⊺", CZ = "⋂", xZ = "⨗", EZ = "⨼", SZ = "⁣", AZ = "⁢", TZ = "Ё", MZ = "ё", $Z = "Į", IZ = "į", LZ = "𝕀", OZ = "𝕚", RZ = "Ι", PZ = "ι", DZ = "⨼", NZ = "¿", BZ = "𝒾", FZ = "ℐ", qZ = "∈", zZ = "⋵", HZ = "⋹", jZ = "⋴", VZ = "⋳", UZ = "∈", KZ = "⁢", WZ = "Ĩ", GZ = "ĩ", ZZ = "І", XZ = "і", YZ = "Ï", JZ = "ï", QZ = "Ĵ", eX = "ĵ", tX = "Й", nX = "й", rX = "𝔍", oX = "𝔧", sX = "ȷ", iX = "𝕁", aX = "𝕛", lX = "𝒥", cX = "𝒿", uX = "Ј", fX = "ј", dX = "Є", pX = "є", hX = "Κ", gX = "κ", mX = "ϰ", vX = "Ķ", bX = "ķ", _X = "К", yX = "к", wX = "𝔎", kX = "𝔨", CX = "ĸ", xX = "Х", EX = "х", SX = "Ќ", AX = "ќ", TX = "𝕂", MX = "𝕜", $X = "𝒦", IX = "𝓀", LX = "⇚", OX = "Ĺ", RX = "ĺ", PX = "⦴", DX = "ℒ", NX = "Λ", BX = "λ", FX = "⟨", qX = "⟪", zX = "⦑", HX = "⟨", jX = "⪅", VX = "ℒ", UX = "«", KX = "⇤", WX = "⤟", GX = "←", ZX = "↞", XX = "⇐", YX = "⤝", JX = "↩", QX = "↫", eY = "⤹", tY = "⥳", nY = "↢", rY = "⤙", oY = "⤛", sY = "⪫", iY = "⪭", aY = "⪭︀", lY = "⤌", cY = "⤎", uY = "❲", fY = "{", dY = "[", pY = "⦋", hY = "⦏", gY = "⦍", mY = "Ľ", vY = "ľ", bY = "Ļ", _Y = "ļ", yY = "⌈", wY = "{", kY = "Л", CY = "л", xY = "⤶", EY = "“", SY = "„", AY = "⥧", TY = "⥋", MY = "↲", $Y = "≤", IY = "≦", LY = "⟨", OY = "⇤", RY = "←", PY = "←", DY = "⇐", NY = "⇆", BY = "↢", FY = "⌈", qY = "⟦", zY = "⥡", HY = "⥙", jY = "⇃", VY = "⌊", UY = "↽", KY = "↼", WY = "⇇", GY = "↔", ZY = "↔", XY = "⇔", YY = "⇆", JY = "⇋", QY = "↭", eJ = "⥎", tJ = "↤", nJ = "⊣", rJ = "⥚", oJ = "⋋", sJ = "⧏", iJ = "⊲", aJ = "⊴", lJ = "⥑", cJ = "⥠", uJ = "⥘", fJ = "↿", dJ = "⥒", pJ = "↼", hJ = "⪋", gJ = "⋚", mJ = "≤", vJ = "≦", bJ = "⩽", _J = "⪨", yJ = "⩽", wJ = "⩿", kJ = "⪁", CJ = "⪃", xJ = "⋚︀", EJ = "⪓", SJ = "⪅", AJ = "⋖", TJ = "⋚", MJ = "⪋", $J = "⋚", IJ = "≦", LJ = "≶", OJ = "≶", RJ = "⪡", PJ = "≲", DJ = "⩽", NJ = "≲", BJ = "⥼", FJ = "⌊", qJ = "𝔏", zJ = "𝔩", HJ = "≶", jJ = "⪑", VJ = "⥢", UJ = "↽", KJ = "↼", WJ = "⥪", GJ = "▄", ZJ = "Љ", XJ = "љ", YJ = "⇇", JJ = "≪", QJ = "⋘", eQ = "⌞", tQ = "⇚", nQ = "⥫", rQ = "◺", oQ = "Ŀ", sQ = "ŀ", iQ = "⎰", aQ = "⎰", lQ = "⪉", cQ = "⪉", uQ = "⪇", fQ = "≨", dQ = "⪇", pQ = "≨", hQ = "⋦", gQ = "⟬", mQ = "⇽", vQ = "⟦", bQ = "⟵", _Q = "⟵", yQ = "⟸", wQ = "⟷", kQ = "⟷", CQ = "⟺", xQ = "⟼", EQ = "⟶", SQ = "⟶", AQ = "⟹", TQ = "↫", MQ = "↬", $Q = "⦅", IQ = "𝕃", LQ = "𝕝", OQ = "⨭", RQ = "⨴", PQ = "∗", DQ = "_", NQ = "↙", BQ = "↘", FQ = "◊", qQ = "◊", zQ = "⧫", HQ = "(", jQ = "⦓", VQ = "⇆", UQ = "⌟", KQ = "⇋", WQ = "⥭", GQ = "‎", ZQ = "⊿", XQ = "‹", YQ = "𝓁", JQ = "ℒ", QQ = "↰", eee = "↰", tee = "≲", nee = "⪍", ree = "⪏", oee = "[", see = "‘", iee = "‚", aee = "Ł", lee = "ł", cee = "⪦", uee = "⩹", fee = "<", dee = "<", pee = "≪", hee = "⋖", gee = "⋋", mee = "⋉", vee = "⥶", bee = "⩻", _ee = "◃", yee = "⊴", wee = "◂", kee = "⦖", Cee = "⥊", xee = "⥦", Eee = "≨︀", See = "≨︀", Aee = "¯", Tee = "♂", Mee = "✠", $ee = "✠", Iee = "↦", Lee = "↦", Oee = "↧", Ree = "↤", Pee = "↥", Dee = "▮", Nee = "⨩", Bee = "М", Fee = "м", qee = "—", zee = "∺", Hee = "∡", jee = " ", Vee = "ℳ", Uee = "𝔐", Kee = "𝔪", Wee = "℧", Gee = "µ", Zee = "*", Xee = "⫰", Yee = "∣", Jee = "·", Qee = "⊟", ete = "−", tte = "∸", nte = "⨪", rte = "∓", ote = "⫛", ste = "…", ite = "∓", ate = "⊧", lte = "𝕄", cte = "𝕞", ute = "∓", fte = "𝓂", dte = "ℳ", pte = "∾", hte = "Μ", gte = "μ", mte = "⊸", vte = "⊸", bte = "∇", _te = "Ń", yte = "ń", wte = "∠⃒", kte = "≉", Cte = "⩰̸", xte = "≋̸", Ete = "ŉ", Ste = "≉", Ate = "♮", Tte = "ℕ", Mte = "♮", $te = " ", Ite = "≎̸", Lte = "≏̸", Ote = "⩃", Rte = "Ň", Pte = "ň", Dte = "Ņ", Nte = "ņ", Bte = "≇", Fte = "⩭̸", qte = "⩂", zte = "Н", Hte = "н", jte = "–", Vte = "⤤", Ute = "↗", Kte = "⇗", Wte = "↗", Gte = "≠", Zte = "≐̸", Xte = "​", Yte = "​", Jte = "​", Qte = "​", ene = "≢", tne = "⤨", nne = "≂̸", rne = "≫", one = "≪", sne = `
`, ine = "∄", ane = "∄", lne = "𝔑", cne = "𝔫", une = "≧̸", fne = "≱", dne = "≱", pne = "≧̸", hne = "⩾̸", gne = "⩾̸", mne = "⋙̸", vne = "≵", bne = "≫⃒", _ne = "≯", yne = "≯", wne = "≫̸", kne = "↮", Cne = "⇎", xne = "⫲", Ene = "∋", Sne = "⋼", Ane = "⋺", Tne = "∋", Mne = "Њ", $ne = "њ", Ine = "↚", Lne = "⇍", One = "‥", Rne = "≦̸", Pne = "≰", Dne = "↚", Nne = "⇍", Bne = "↮", Fne = "⇎", qne = "≰", zne = "≦̸", Hne = "⩽̸", jne = "⩽̸", Vne = "≮", Une = "⋘̸", Kne = "≴", Wne = "≪⃒", Gne = "≮", Zne = "⋪", Xne = "⋬", Yne = "≪̸", Jne = "∤", Qne = "⁠", ere = " ", tre = "𝕟", nre = "ℕ", rre = "⫬", ore = "¬", sre = "≢", ire = "≭", are = "∦", lre = "∉", cre = "≠", ure = "≂̸", fre = "∄", dre = "≯", pre = "≱", hre = "≧̸", gre = "≫̸", mre = "≹", vre = "⩾̸", bre = "≵", _re = "≎̸", yre = "≏̸", wre = "∉", kre = "⋵̸", Cre = "⋹̸", xre = "∉", Ere = "⋷", Sre = "⋶", Are = "⧏̸", Tre = "⋪", Mre = "⋬", $re = "≮", Ire = "≰", Lre = "≸", Ore = "≪̸", Rre = "⩽̸", Pre = "≴", Dre = "⪢̸", Nre = "⪡̸", Bre = "∌", Fre = "∌", qre = "⋾", zre = "⋽", Hre = "⊀", jre = "⪯̸", Vre = "⋠", Ure = "∌", Kre = "⧐̸", Wre = "⋫", Gre = "⋭", Zre = "⊏̸", Xre = "⋢", Yre = "⊐̸", Jre = "⋣", Qre = "⊂⃒", eoe = "⊈", toe = "⊁", noe = "⪰̸", roe = "⋡", ooe = "≿̸", soe = "⊃⃒", ioe = "⊉", aoe = "≁", loe = "≄", coe = "≇", uoe = "≉", foe = "∤", doe = "∦", poe = "∦", hoe = "⫽⃥", goe = "∂̸", moe = "⨔", voe = "⊀", boe = "⋠", _oe = "⊀", yoe = "⪯̸", woe = "⪯̸", koe = "⤳̸", Coe = "↛", xoe = "⇏", Eoe = "↝̸", Soe = "↛", Aoe = "⇏", Toe = "⋫", Moe = "⋭", $oe = "⊁", Ioe = "⋡", Loe = "⪰̸", Ooe = "𝒩", Roe = "𝓃", Poe = "∤", Doe = "∦", Noe = "≁", Boe = "≄", Foe = "≄", qoe = "∤", zoe = "∦", Hoe = "⋢", joe = "⋣", Voe = "⊄", Uoe = "⫅̸", Koe = "⊈", Woe = "⊂⃒", Goe = "⊈", Zoe = "⫅̸", Xoe = "⊁", Yoe = "⪰̸", Joe = "⊅", Qoe = "⫆̸", ese = "⊉", tse = "⊃⃒", nse = "⊉", rse = "⫆̸", ose = "≹", sse = "Ñ", ise = "ñ", ase = "≸", lse = "⋪", cse = "⋬", use = "⋫", fse = "⋭", dse = "Ν", pse = "ν", hse = "#", gse = "№", mse = " ", vse = "≍⃒", bse = "⊬", _se = "⊭", yse = "⊮", wse = "⊯", kse = "≥⃒", Cse = ">⃒", xse = "⤄", Ese = "⧞", Sse = "⤂", Ase = "≤⃒", Tse = "<⃒", Mse = "⊴⃒", $se = "⤃", Ise = "⊵⃒", Lse = "∼⃒", Ose = "⤣", Rse = "↖", Pse = "⇖", Dse = "↖", Nse = "⤧", Bse = "Ó", Fse = "ó", qse = "⊛", zse = "Ô", Hse = "ô", jse = "⊚", Vse = "О", Use = "о", Kse = "⊝", Wse = "Ő", Gse = "ő", Zse = "⨸", Xse = "⊙", Yse = "⦼", Jse = "Œ", Qse = "œ", eie = "⦿", tie = "𝔒", nie = "𝔬", rie = "˛", oie = "Ò", sie = "ò", iie = "⧁", aie = "⦵", lie = "Ω", cie = "∮", uie = "↺", fie = "⦾", die = "⦻", pie = "‾", hie = "⧀", gie = "Ō", mie = "ō", vie = "Ω", bie = "ω", _ie = "Ο", yie = "ο", wie = "⦶", kie = "⊖", Cie = "𝕆", xie = "𝕠", Eie = "⦷", Sie = "“", Aie = "‘", Tie = "⦹", Mie = "⊕", $ie = "↻", Iie = "⩔", Lie = "∨", Oie = "⩝", Rie = "ℴ", Pie = "ℴ", Die = "ª", Nie = "º", Bie = "⊶", Fie = "⩖", qie = "⩗", zie = "⩛", Hie = "Ⓢ", jie = "𝒪", Vie = "ℴ", Uie = "Ø", Kie = "ø", Wie = "⊘", Gie = "Õ", Zie = "õ", Xie = "⨶", Yie = "⨷", Jie = "⊗", Qie = "Ö", eae = "ö", tae = "⌽", nae = "‾", rae = "⏞", oae = "⎴", sae = "⏜", iae = "¶", aae = "∥", lae = "∥", cae = "⫳", uae = "⫽", fae = "∂", dae = "∂", pae = "П", hae = "п", gae = "%", mae = ".", vae = "‰", bae = "⊥", _ae = "‱", yae = "𝔓", wae = "𝔭", kae = "Φ", Cae = "φ", xae = "ϕ", Eae = "ℳ", Sae = "☎", Aae = "Π", Tae = "π", Mae = "⋔", $ae = "ϖ", Iae = "ℏ", Lae = "ℎ", Oae = "ℏ", Rae = "⨣", Pae = "⊞", Dae = "⨢", Nae = "+", Bae = "∔", Fae = "⨥", qae = "⩲", zae = "±", Hae = "±", jae = "⨦", Vae = "⨧", Uae = "±", Kae = "ℌ", Wae = "⨕", Gae = "𝕡", Zae = "ℙ", Xae = "£", Yae = "⪷", Jae = "⪻", Qae = "≺", ele = "≼", tle = "⪷", nle = "≺", rle = "≼", ole = "≺", sle = "⪯", ile = "≼", ale = "≾", lle = "⪯", cle = "⪹", ule = "⪵", fle = "⋨", dle = "⪯", ple = "⪳", hle = "≾", gle = "′", mle = "″", vle = "ℙ", ble = "⪹", _le = "⪵", yle = "⋨", wle = "∏", kle = "∏", Cle = "⌮", xle = "⌒", Ele = "⌓", Sle = "∝", Ale = "∝", Tle = "∷", Mle = "∝", $le = "≾", Ile = "⊰", Lle = "𝒫", Ole = "𝓅", Rle = "Ψ", Ple = "ψ", Dle = " ", Nle = "𝔔", Ble = "𝔮", Fle = "⨌", qle = "𝕢", zle = "ℚ", Hle = "⁗", jle = "𝒬", Vle = "𝓆", Ule = "ℍ", Kle = "⨖", Wle = "?", Gle = "≟", Zle = '"', Xle = '"', Yle = "⇛", Jle = "∽̱", Qle = "Ŕ", ece = "ŕ", tce = "√", nce = "⦳", rce = "⟩", oce = "⟫", sce = "⦒", ice = "⦥", ace = "⟩", lce = "»", cce = "⥵", uce = "⇥", fce = "⤠", dce = "⤳", pce = "→", hce = "↠", gce = "⇒", mce = "⤞", vce = "↪", bce = "↬", _ce = "⥅", yce = "⥴", wce = "⤖", kce = "↣", Cce = "↝", xce = "⤚", Ece = "⤜", Sce = "∶", Ace = "ℚ", Tce = "⤍", Mce = "⤏", $ce = "⤐", Ice = "❳", Lce = "}", Oce = "]", Rce = "⦌", Pce = "⦎", Dce = "⦐", Nce = "Ř", Bce = "ř", Fce = "Ŗ", qce = "ŗ", zce = "⌉", Hce = "}", jce = "Р", Vce = "р", Uce = "⤷", Kce = "⥩", Wce = "”", Gce = "”", Zce = "↳", Xce = "ℜ", Yce = "ℛ", Jce = "ℜ", Qce = "ℝ", eue = "ℜ", tue = "▭", nue = "®", rue = "®", oue = "∋", sue = "⇋", iue = "⥯", aue = "⥽", lue = "⌋", cue = "𝔯", uue = "ℜ", fue = "⥤", due = "⇁", pue = "⇀", hue = "⥬", gue = "Ρ", mue = "ρ", vue = "ϱ", bue = "⟩", _ue = "⇥", yue = "→", wue = "→", kue = "⇒", Cue = "⇄", xue = "↣", Eue = "⌉", Sue = "⟧", Aue = "⥝", Tue = "⥕", Mue = "⇂", $ue = "⌋", Iue = "⇁", Lue = "⇀", Oue = "⇄", Rue = "⇌", Pue = "⇉", Due = "↝", Nue = "↦", Bue = "⊢", Fue = "⥛", que = "⋌", zue = "⧐", Hue = "⊳", jue = "⊵", Vue = "⥏", Uue = "⥜", Kue = "⥔", Wue = "↾", Gue = "⥓", Zue = "⇀", Xue = "˚", Yue = "≓", Jue = "⇄", Que = "⇌", efe = "‏", tfe = "⎱", nfe = "⎱", rfe = "⫮", ofe = "⟭", sfe = "⇾", ife = "⟧", afe = "⦆", lfe = "𝕣", cfe = "ℝ", ufe = "⨮", ffe = "⨵", dfe = "⥰", pfe = ")", hfe = "⦔", gfe = "⨒", mfe = "⇉", vfe = "⇛", bfe = "›", _fe = "𝓇", yfe = "ℛ", wfe = "↱", kfe = "↱", Cfe = "]", xfe = "’", Efe = "’", Sfe = "⋌", Afe = "⋊", Tfe = "▹", Mfe = "⊵", $fe = "▸", Ife = "⧎", Lfe = "⧴", Ofe = "⥨", Rfe = "℞", Pfe = "Ś", Dfe = "ś", Nfe = "‚", Bfe = "⪸", Ffe = "Š", qfe = "š", zfe = "⪼", Hfe = "≻", jfe = "≽", Vfe = "⪰", Ufe = "⪴", Kfe = "Ş", Wfe = "ş", Gfe = "Ŝ", Zfe = "ŝ", Xfe = "⪺", Yfe = "⪶", Jfe = "⋩", Qfe = "⨓", ede = "≿", tde = "С", nde = "с", rde = "⊡", ode = "⋅", sde = "⩦", ide = "⤥", ade = "↘", lde = "⇘", cde = "↘", ude = "§", fde = ";", dde = "⤩", pde = "∖", hde = "∖", gde = "✶", mde = "𝔖", vde = "𝔰", bde = "⌢", _de = "♯", yde = "Щ", wde = "щ", kde = "Ш", Cde = "ш", xde = "↓", Ede = "←", Sde = "∣", Ade = "∥", Tde = "→", Mde = "↑", $de = "­", Ide = "Σ", Lde = "σ", Ode = "ς", Rde = "ς", Pde = "∼", Dde = "⩪", Nde = "≃", Bde = "≃", Fde = "⪞", qde = "⪠", zde = "⪝", Hde = "⪟", jde = "≆", Vde = "⨤", Ude = "⥲", Kde = "←", Wde = "∘", Gde = "∖", Zde = "⨳", Xde = "⧤", Yde = "∣", Jde = "⌣", Qde = "⪪", e0e = "⪬", t0e = "⪬︀", n0e = "Ь", r0e = "ь", o0e = "⌿", s0e = "⧄", i0e = "/", a0e = "𝕊", l0e = "𝕤", c0e = "♠", u0e = "♠", f0e = "∥", d0e = "⊓", p0e = "⊓︀", h0e = "⊔", g0e = "⊔︀", m0e = "√", v0e = "⊏", b0e = "⊑", _0e = "⊏", y0e = "⊑", w0e = "⊐", k0e = "⊒", C0e = "⊐", x0e = "⊒", E0e = "□", S0e = "□", A0e = "⊓", T0e = "⊏", M0e = "⊑", $0e = "⊐", I0e = "⊒", L0e = "⊔", O0e = "▪", R0e = "□", P0e = "▪", D0e = "→", N0e = "𝒮", B0e = "𝓈", F0e = "∖", q0e = "⌣", z0e = "⋆", H0e = "⋆", j0e = "☆", V0e = "★", U0e = "ϵ", K0e = "ϕ", W0e = "¯", G0e = "⊂", Z0e = "⋐", X0e = "⪽", Y0e = "⫅", J0e = "⊆", Q0e = "⫃", epe = "⫁", tpe = "⫋", npe = "⊊", rpe = "⪿", ope = "⥹", spe = "⊂", ipe = "⋐", ape = "⊆", lpe = "⫅", cpe = "⊆", upe = "⊊", fpe = "⫋", dpe = "⫇", ppe = "⫕", hpe = "⫓", gpe = "⪸", mpe = "≻", vpe = "≽", bpe = "≻", _pe = "⪰", ype = "≽", wpe = "≿", kpe = "⪰", Cpe = "⪺", xpe = "⪶", Epe = "⋩", Spe = "≿", Ape = "∋", Tpe = "∑", Mpe = "∑", $pe = "♪", Ipe = "¹", Lpe = "²", Ope = "³", Rpe = "⊃", Ppe = "⋑", Dpe = "⪾", Npe = "⫘", Bpe = "⫆", Fpe = "⊇", qpe = "⫄", zpe = "⊃", Hpe = "⊇", jpe = "⟉", Vpe = "⫗", Upe = "⥻", Kpe = "⫂", Wpe = "⫌", Gpe = "⊋", Zpe = "⫀", Xpe = "⊃", Ype = "⋑", Jpe = "⊇", Qpe = "⫆", ehe = "⊋", the = "⫌", nhe = "⫈", rhe = "⫔", ohe = "⫖", she = "⤦", ihe = "↙", ahe = "⇙", lhe = "↙", che = "⤪", uhe = "ß", fhe = "	", dhe = "⌖", phe = "Τ", hhe = "τ", ghe = "⎴", mhe = "Ť", vhe = "ť", bhe = "Ţ", _he = "ţ", yhe = "Т", whe = "т", khe = "⃛", Che = "⌕", xhe = "𝔗", Ehe = "𝔱", She = "∴", Ahe = "∴", The = "∴", Mhe = "Θ", $he = "θ", Ihe = "ϑ", Lhe = "ϑ", Ohe = "≈", Rhe = "∼", Phe = "  ", Dhe = " ", Nhe = " ", Bhe = "≈", Fhe = "∼", qhe = "Þ", zhe = "þ", Hhe = "˜", jhe = "∼", Vhe = "≃", Uhe = "≅", Khe = "≈", Whe = "⨱", Ghe = "⊠", Zhe = "×", Xhe = "⨰", Yhe = "∭", Jhe = "⤨", Qhe = "⌶", e2e = "⫱", t2e = "⊤", n2e = "𝕋", r2e = "𝕥", o2e = "⫚", s2e = "⤩", i2e = "‴", a2e = "™", l2e = "™", c2e = "▵", u2e = "▿", f2e = "◃", d2e = "⊴", p2e = "≜", h2e = "▹", g2e = "⊵", m2e = "◬", v2e = "≜", b2e = "⨺", _2e = "⃛", y2e = "⨹", w2e = "⧍", k2e = "⨻", C2e = "⏢", x2e = "𝒯", E2e = "𝓉", S2e = "Ц", A2e = "ц", T2e = "Ћ", M2e = "ћ", $2e = "Ŧ", I2e = "ŧ", L2e = "≬", O2e = "↞", R2e = "↠", P2e = "Ú", D2e = "ú", N2e = "↑", B2e = "↟", F2e = "⇑", q2e = "⥉", z2e = "Ў", H2e = "ў", j2e = "Ŭ", V2e = "ŭ", U2e = "Û", K2e = "û", W2e = "У", G2e = "у", Z2e = "⇅", X2e = "Ű", Y2e = "ű", J2e = "⥮", Q2e = "⥾", e1e = "𝔘", t1e = "𝔲", n1e = "Ù", r1e = "ù", o1e = "⥣", s1e = "↿", i1e = "↾", a1e = "▀", l1e = "⌜", c1e = "⌜", u1e = "⌏", f1e = "◸", d1e = "Ū", p1e = "ū", h1e = "¨", g1e = "_", m1e = "⏟", v1e = "⎵", b1e = "⏝", _1e = "⋃", y1e = "⊎", w1e = "Ų", k1e = "ų", C1e = "𝕌", x1e = "𝕦", E1e = "⤒", S1e = "↑", A1e = "↑", T1e = "⇑", M1e = "⇅", $1e = "↕", I1e = "↕", L1e = "⇕", O1e = "⥮", R1e = "↿", P1e = "↾", D1e = "⊎", N1e = "↖", B1e = "↗", F1e = "υ", q1e = "ϒ", z1e = "ϒ", H1e = "Υ", j1e = "υ", V1e = "↥", U1e = "⊥", K1e = "⇈", W1e = "⌝", G1e = "⌝", Z1e = "⌎", X1e = "Ů", Y1e = "ů", J1e = "◹", Q1e = "𝒰", ege = "𝓊", tge = "⋰", nge = "Ũ", rge = "ũ", oge = "▵", sge = "▴", ige = "⇈", age = "Ü", lge = "ü", cge = "⦧", uge = "⦜", fge = "ϵ", dge = "ϰ", pge = "∅", hge = "ϕ", gge = "ϖ", mge = "∝", vge = "↕", bge = "⇕", _ge = "ϱ", yge = "ς", wge = "⊊︀", kge = "⫋︀", Cge = "⊋︀", xge = "⫌︀", Ege = "ϑ", Sge = "⊲", Age = "⊳", Tge = "⫨", Mge = "⫫", $ge = "⫩", Ige = "В", Lge = "в", Oge = "⊢", Rge = "⊨", Pge = "⊩", Dge = "⊫", Nge = "⫦", Bge = "⊻", Fge = "∨", qge = "⋁", zge = "≚", Hge = "⋮", jge = "|", Vge = "‖", Uge = "|", Kge = "‖", Wge = "∣", Gge = "|", Zge = "❘", Xge = "≀", Yge = " ", Jge = "𝔙", Qge = "𝔳", eme = "⊲", tme = "⊂⃒", nme = "⊃⃒", rme = "𝕍", ome = "𝕧", sme = "∝", ime = "⊳", ame = "𝒱", lme = "𝓋", cme = "⫋︀", ume = "⊊︀", fme = "⫌︀", dme = "⊋︀", pme = "⊪", hme = "⦚", gme = "Ŵ", mme = "ŵ", vme = "⩟", bme = "∧", _me = "⋀", yme = "≙", wme = "℘", kme = "𝔚", Cme = "𝔴", xme = "𝕎", Eme = "𝕨", Sme = "℘", Ame = "≀", Tme = "≀", Mme = "𝒲", $me = "𝓌", Ime = "⋂", Lme = "◯", Ome = "⋃", Rme = "▽", Pme = "𝔛", Dme = "𝔵", Nme = "⟷", Bme = "⟺", Fme = "Ξ", qme = "ξ", zme = "⟵", Hme = "⟸", jme = "⟼", Vme = "⋻", Ume = "⨀", Kme = "𝕏", Wme = "𝕩", Gme = "⨁", Zme = "⨂", Xme = "⟶", Yme = "⟹", Jme = "𝒳", Qme = "𝓍", eve = "⨆", tve = "⨄", nve = "△", rve = "⋁", ove = "⋀", sve = "Ý", ive = "ý", ave = "Я", lve = "я", cve = "Ŷ", uve = "ŷ", fve = "Ы", dve = "ы", pve = "¥", hve = "𝔜", gve = "𝔶", mve = "Ї", vve = "ї", bve = "𝕐", _ve = "𝕪", yve = "𝒴", wve = "𝓎", kve = "Ю", Cve = "ю", xve = "ÿ", Eve = "Ÿ", Sve = "Ź", Ave = "ź", Tve = "Ž", Mve = "ž", $ve = "З", Ive = "з", Lve = "Ż", Ove = "ż", Rve = "ℨ", Pve = "​", Dve = "Ζ", Nve = "ζ", Bve = "𝔷", Fve = "ℨ", qve = "Ж", zve = "ж", Hve = "⇝", jve = "𝕫", Vve = "ℤ", Uve = "𝒵", Kve = "𝓏", Wve = "‍", Gve = "‌", Zve = {
  Aacute: LP,
  aacute: OP,
  Abreve: RP,
  abreve: PP,
  ac: DP,
  acd: NP,
  acE: BP,
  Acirc: FP,
  acirc: qP,
  acute: zP,
  Acy: HP,
  acy: jP,
  AElig: VP,
  aelig: UP,
  af: KP,
  Afr: WP,
  afr: GP,
  Agrave: ZP,
  agrave: XP,
  alefsym: YP,
  aleph: JP,
  Alpha: QP,
  alpha: eD,
  Amacr: tD,
  amacr: nD,
  amalg: rD,
  amp: oD,
  AMP: sD,
  andand: iD,
  And: aD,
  and: lD,
  andd: cD,
  andslope: uD,
  andv: fD,
  ang: dD,
  ange: pD,
  angle: hD,
  angmsdaa: gD,
  angmsdab: mD,
  angmsdac: vD,
  angmsdad: bD,
  angmsdae: _D,
  angmsdaf: yD,
  angmsdag: wD,
  angmsdah: kD,
  angmsd: CD,
  angrt: xD,
  angrtvb: ED,
  angrtvbd: SD,
  angsph: AD,
  angst: TD,
  angzarr: MD,
  Aogon: $D,
  aogon: ID,
  Aopf: LD,
  aopf: OD,
  apacir: RD,
  ap: PD,
  apE: DD,
  ape: ND,
  apid: BD,
  apos: FD,
  ApplyFunction: qD,
  approx: zD,
  approxeq: HD,
  Aring: jD,
  aring: VD,
  Ascr: UD,
  ascr: KD,
  Assign: WD,
  ast: GD,
  asymp: ZD,
  asympeq: XD,
  Atilde: YD,
  atilde: JD,
  Auml: QD,
  auml: eN,
  awconint: tN,
  awint: nN,
  backcong: rN,
  backepsilon: oN,
  backprime: sN,
  backsim: iN,
  backsimeq: aN,
  Backslash: lN,
  Barv: cN,
  barvee: uN,
  barwed: fN,
  Barwed: dN,
  barwedge: pN,
  bbrk: hN,
  bbrktbrk: gN,
  bcong: mN,
  Bcy: vN,
  bcy: bN,
  bdquo: _N,
  becaus: yN,
  because: wN,
  Because: kN,
  bemptyv: CN,
  bepsi: xN,
  bernou: EN,
  Bernoullis: SN,
  Beta: AN,
  beta: TN,
  beth: MN,
  between: $N,
  Bfr: IN,
  bfr: LN,
  bigcap: ON,
  bigcirc: RN,
  bigcup: PN,
  bigodot: DN,
  bigoplus: NN,
  bigotimes: BN,
  bigsqcup: FN,
  bigstar: qN,
  bigtriangledown: zN,
  bigtriangleup: HN,
  biguplus: jN,
  bigvee: VN,
  bigwedge: UN,
  bkarow: KN,
  blacklozenge: WN,
  blacksquare: GN,
  blacktriangle: ZN,
  blacktriangledown: XN,
  blacktriangleleft: YN,
  blacktriangleright: JN,
  blank: QN,
  blk12: eB,
  blk14: tB,
  blk34: nB,
  block: rB,
  bne: oB,
  bnequiv: sB,
  bNot: iB,
  bnot: aB,
  Bopf: lB,
  bopf: cB,
  bot: uB,
  bottom: fB,
  bowtie: dB,
  boxbox: pB,
  boxdl: hB,
  boxdL: gB,
  boxDl: mB,
  boxDL: vB,
  boxdr: bB,
  boxdR: _B,
  boxDr: yB,
  boxDR: wB,
  boxh: kB,
  boxH: CB,
  boxhd: xB,
  boxHd: EB,
  boxhD: SB,
  boxHD: AB,
  boxhu: TB,
  boxHu: MB,
  boxhU: $B,
  boxHU: IB,
  boxminus: LB,
  boxplus: OB,
  boxtimes: RB,
  boxul: PB,
  boxuL: DB,
  boxUl: NB,
  boxUL: BB,
  boxur: FB,
  boxuR: qB,
  boxUr: zB,
  boxUR: HB,
  boxv: jB,
  boxV: VB,
  boxvh: UB,
  boxvH: KB,
  boxVh: WB,
  boxVH: GB,
  boxvl: ZB,
  boxvL: XB,
  boxVl: YB,
  boxVL: JB,
  boxvr: QB,
  boxvR: eF,
  boxVr: tF,
  boxVR: nF,
  bprime: rF,
  breve: oF,
  Breve: sF,
  brvbar: iF,
  bscr: aF,
  Bscr: lF,
  bsemi: cF,
  bsim: uF,
  bsime: fF,
  bsolb: dF,
  bsol: pF,
  bsolhsub: hF,
  bull: gF,
  bullet: mF,
  bump: vF,
  bumpE: bF,
  bumpe: _F,
  Bumpeq: yF,
  bumpeq: wF,
  Cacute: kF,
  cacute: CF,
  capand: xF,
  capbrcup: EF,
  capcap: SF,
  cap: AF,
  Cap: TF,
  capcup: MF,
  capdot: $F,
  CapitalDifferentialD: IF,
  caps: LF,
  caret: OF,
  caron: RF,
  Cayleys: PF,
  ccaps: DF,
  Ccaron: NF,
  ccaron: BF,
  Ccedil: FF,
  ccedil: qF,
  Ccirc: zF,
  ccirc: HF,
  Cconint: jF,
  ccups: VF,
  ccupssm: UF,
  Cdot: KF,
  cdot: WF,
  cedil: GF,
  Cedilla: ZF,
  cemptyv: XF,
  cent: YF,
  centerdot: JF,
  CenterDot: QF,
  cfr: eq,
  Cfr: tq,
  CHcy: nq,
  chcy: rq,
  check: oq,
  checkmark: sq,
  Chi: iq,
  chi: aq,
  circ: lq,
  circeq: cq,
  circlearrowleft: uq,
  circlearrowright: fq,
  circledast: dq,
  circledcirc: pq,
  circleddash: hq,
  CircleDot: gq,
  circledR: mq,
  circledS: vq,
  CircleMinus: bq,
  CirclePlus: _q,
  CircleTimes: yq,
  cir: wq,
  cirE: kq,
  cire: Cq,
  cirfnint: xq,
  cirmid: Eq,
  cirscir: Sq,
  ClockwiseContourIntegral: Aq,
  CloseCurlyDoubleQuote: Tq,
  CloseCurlyQuote: Mq,
  clubs: $q,
  clubsuit: Iq,
  colon: Lq,
  Colon: Oq,
  Colone: Rq,
  colone: Pq,
  coloneq: Dq,
  comma: Nq,
  commat: Bq,
  comp: Fq,
  compfn: qq,
  complement: zq,
  complexes: Hq,
  cong: jq,
  congdot: Vq,
  Congruent: Uq,
  conint: Kq,
  Conint: Wq,
  ContourIntegral: Gq,
  copf: Zq,
  Copf: Xq,
  coprod: Yq,
  Coproduct: Jq,
  copy: Qq,
  COPY: ez,
  copysr: tz,
  CounterClockwiseContourIntegral: nz,
  crarr: rz,
  cross: oz,
  Cross: sz,
  Cscr: iz,
  cscr: az,
  csub: lz,
  csube: cz,
  csup: uz,
  csupe: fz,
  ctdot: dz,
  cudarrl: pz,
  cudarrr: hz,
  cuepr: gz,
  cuesc: mz,
  cularr: vz,
  cularrp: bz,
  cupbrcap: _z,
  cupcap: yz,
  CupCap: wz,
  cup: kz,
  Cup: Cz,
  cupcup: xz,
  cupdot: Ez,
  cupor: Sz,
  cups: Az,
  curarr: Tz,
  curarrm: Mz,
  curlyeqprec: $z,
  curlyeqsucc: Iz,
  curlyvee: Lz,
  curlywedge: Oz,
  curren: Rz,
  curvearrowleft: Pz,
  curvearrowright: Dz,
  cuvee: Nz,
  cuwed: Bz,
  cwconint: Fz,
  cwint: qz,
  cylcty: zz,
  dagger: Hz,
  Dagger: jz,
  daleth: Vz,
  darr: Uz,
  Darr: Kz,
  dArr: Wz,
  dash: Gz,
  Dashv: Zz,
  dashv: Xz,
  dbkarow: Yz,
  dblac: Jz,
  Dcaron: Qz,
  dcaron: eH,
  Dcy: tH,
  dcy: nH,
  ddagger: rH,
  ddarr: oH,
  DD: sH,
  dd: iH,
  DDotrahd: aH,
  ddotseq: lH,
  deg: cH,
  Del: uH,
  Delta: fH,
  delta: dH,
  demptyv: pH,
  dfisht: hH,
  Dfr: gH,
  dfr: mH,
  dHar: vH,
  dharl: bH,
  dharr: _H,
  DiacriticalAcute: yH,
  DiacriticalDot: wH,
  DiacriticalDoubleAcute: kH,
  DiacriticalGrave: CH,
  DiacriticalTilde: xH,
  diam: EH,
  diamond: SH,
  Diamond: AH,
  diamondsuit: TH,
  diams: MH,
  die: $H,
  DifferentialD: IH,
  digamma: LH,
  disin: OH,
  div: RH,
  divide: PH,
  divideontimes: DH,
  divonx: NH,
  DJcy: BH,
  djcy: FH,
  dlcorn: qH,
  dlcrop: zH,
  dollar: HH,
  Dopf: jH,
  dopf: VH,
  Dot: UH,
  dot: KH,
  DotDot: WH,
  doteq: GH,
  doteqdot: ZH,
  DotEqual: XH,
  dotminus: YH,
  dotplus: JH,
  dotsquare: QH,
  doublebarwedge: ej,
  DoubleContourIntegral: tj,
  DoubleDot: nj,
  DoubleDownArrow: rj,
  DoubleLeftArrow: oj,
  DoubleLeftRightArrow: sj,
  DoubleLeftTee: ij,
  DoubleLongLeftArrow: aj,
  DoubleLongLeftRightArrow: lj,
  DoubleLongRightArrow: cj,
  DoubleRightArrow: uj,
  DoubleRightTee: fj,
  DoubleUpArrow: dj,
  DoubleUpDownArrow: pj,
  DoubleVerticalBar: hj,
  DownArrowBar: gj,
  downarrow: mj,
  DownArrow: vj,
  Downarrow: bj,
  DownArrowUpArrow: _j,
  DownBreve: yj,
  downdownarrows: wj,
  downharpoonleft: kj,
  downharpoonright: Cj,
  DownLeftRightVector: xj,
  DownLeftTeeVector: Ej,
  DownLeftVectorBar: Sj,
  DownLeftVector: Aj,
  DownRightTeeVector: Tj,
  DownRightVectorBar: Mj,
  DownRightVector: $j,
  DownTeeArrow: Ij,
  DownTee: Lj,
  drbkarow: Oj,
  drcorn: Rj,
  drcrop: Pj,
  Dscr: Dj,
  dscr: Nj,
  DScy: Bj,
  dscy: Fj,
  dsol: qj,
  Dstrok: zj,
  dstrok: Hj,
  dtdot: jj,
  dtri: Vj,
  dtrif: Uj,
  duarr: Kj,
  duhar: Wj,
  dwangle: Gj,
  DZcy: Zj,
  dzcy: Xj,
  dzigrarr: Yj,
  Eacute: Jj,
  eacute: Qj,
  easter: eV,
  Ecaron: tV,
  ecaron: nV,
  Ecirc: rV,
  ecirc: oV,
  ecir: sV,
  ecolon: iV,
  Ecy: aV,
  ecy: lV,
  eDDot: cV,
  Edot: uV,
  edot: fV,
  eDot: dV,
  ee: pV,
  efDot: hV,
  Efr: gV,
  efr: mV,
  eg: vV,
  Egrave: bV,
  egrave: _V,
  egs: yV,
  egsdot: wV,
  el: kV,
  Element: CV,
  elinters: xV,
  ell: EV,
  els: SV,
  elsdot: AV,
  Emacr: TV,
  emacr: MV,
  empty: $V,
  emptyset: IV,
  EmptySmallSquare: LV,
  emptyv: OV,
  EmptyVerySmallSquare: RV,
  emsp13: PV,
  emsp14: DV,
  emsp: NV,
  ENG: BV,
  eng: FV,
  ensp: qV,
  Eogon: zV,
  eogon: HV,
  Eopf: jV,
  eopf: VV,
  epar: UV,
  eparsl: KV,
  eplus: WV,
  epsi: GV,
  Epsilon: ZV,
  epsilon: XV,
  epsiv: YV,
  eqcirc: JV,
  eqcolon: QV,
  eqsim: eU,
  eqslantgtr: tU,
  eqslantless: nU,
  Equal: rU,
  equals: oU,
  EqualTilde: sU,
  equest: iU,
  Equilibrium: aU,
  equiv: lU,
  equivDD: cU,
  eqvparsl: uU,
  erarr: fU,
  erDot: dU,
  escr: pU,
  Escr: hU,
  esdot: gU,
  Esim: mU,
  esim: vU,
  Eta: bU,
  eta: _U,
  ETH: yU,
  eth: wU,
  Euml: kU,
  euml: CU,
  euro: xU,
  excl: EU,
  exist: SU,
  Exists: AU,
  expectation: TU,
  exponentiale: MU,
  ExponentialE: $U,
  fallingdotseq: IU,
  Fcy: LU,
  fcy: OU,
  female: RU,
  ffilig: PU,
  fflig: DU,
  ffllig: NU,
  Ffr: BU,
  ffr: FU,
  filig: qU,
  FilledSmallSquare: zU,
  FilledVerySmallSquare: HU,
  fjlig: jU,
  flat: VU,
  fllig: UU,
  fltns: KU,
  fnof: WU,
  Fopf: GU,
  fopf: ZU,
  forall: XU,
  ForAll: YU,
  fork: JU,
  forkv: QU,
  Fouriertrf: eK,
  fpartint: tK,
  frac12: nK,
  frac13: rK,
  frac14: oK,
  frac15: sK,
  frac16: iK,
  frac18: aK,
  frac23: lK,
  frac25: cK,
  frac34: uK,
  frac35: fK,
  frac38: dK,
  frac45: pK,
  frac56: hK,
  frac58: gK,
  frac78: mK,
  frasl: vK,
  frown: bK,
  fscr: _K,
  Fscr: yK,
  gacute: wK,
  Gamma: kK,
  gamma: CK,
  Gammad: xK,
  gammad: EK,
  gap: SK,
  Gbreve: AK,
  gbreve: TK,
  Gcedil: MK,
  Gcirc: $K,
  gcirc: IK,
  Gcy: LK,
  gcy: OK,
  Gdot: RK,
  gdot: PK,
  ge: DK,
  gE: NK,
  gEl: BK,
  gel: FK,
  geq: qK,
  geqq: zK,
  geqslant: HK,
  gescc: jK,
  ges: VK,
  gesdot: UK,
  gesdoto: KK,
  gesdotol: WK,
  gesl: GK,
  gesles: ZK,
  Gfr: XK,
  gfr: YK,
  gg: JK,
  Gg: QK,
  ggg: eW,
  gimel: tW,
  GJcy: nW,
  gjcy: rW,
  gla: oW,
  gl: sW,
  glE: iW,
  glj: aW,
  gnap: lW,
  gnapprox: cW,
  gne: uW,
  gnE: fW,
  gneq: dW,
  gneqq: pW,
  gnsim: hW,
  Gopf: gW,
  gopf: mW,
  grave: vW,
  GreaterEqual: bW,
  GreaterEqualLess: _W,
  GreaterFullEqual: yW,
  GreaterGreater: wW,
  GreaterLess: kW,
  GreaterSlantEqual: CW,
  GreaterTilde: xW,
  Gscr: EW,
  gscr: SW,
  gsim: AW,
  gsime: TW,
  gsiml: MW,
  gtcc: $W,
  gtcir: IW,
  gt: LW,
  GT: OW,
  Gt: RW,
  gtdot: PW,
  gtlPar: DW,
  gtquest: NW,
  gtrapprox: BW,
  gtrarr: FW,
  gtrdot: qW,
  gtreqless: zW,
  gtreqqless: HW,
  gtrless: jW,
  gtrsim: VW,
  gvertneqq: UW,
  gvnE: KW,
  Hacek: WW,
  hairsp: GW,
  half: ZW,
  hamilt: XW,
  HARDcy: YW,
  hardcy: JW,
  harrcir: QW,
  harr: eG,
  hArr: tG,
  harrw: nG,
  Hat: rG,
  hbar: oG,
  Hcirc: sG,
  hcirc: iG,
  hearts: aG,
  heartsuit: lG,
  hellip: cG,
  hercon: uG,
  hfr: fG,
  Hfr: dG,
  HilbertSpace: pG,
  hksearow: hG,
  hkswarow: gG,
  hoarr: mG,
  homtht: vG,
  hookleftarrow: bG,
  hookrightarrow: _G,
  hopf: yG,
  Hopf: wG,
  horbar: kG,
  HorizontalLine: CG,
  hscr: xG,
  Hscr: EG,
  hslash: SG,
  Hstrok: AG,
  hstrok: TG,
  HumpDownHump: MG,
  HumpEqual: $G,
  hybull: IG,
  hyphen: LG,
  Iacute: OG,
  iacute: RG,
  ic: PG,
  Icirc: DG,
  icirc: NG,
  Icy: BG,
  icy: FG,
  Idot: qG,
  IEcy: zG,
  iecy: HG,
  iexcl: jG,
  iff: VG,
  ifr: UG,
  Ifr: KG,
  Igrave: WG,
  igrave: GG,
  ii: ZG,
  iiiint: XG,
  iiint: YG,
  iinfin: JG,
  iiota: QG,
  IJlig: eZ,
  ijlig: tZ,
  Imacr: nZ,
  imacr: rZ,
  image: oZ,
  ImaginaryI: sZ,
  imagline: iZ,
  imagpart: aZ,
  imath: lZ,
  Im: cZ,
  imof: uZ,
  imped: fZ,
  Implies: dZ,
  incare: pZ,
  in: "∈",
  infin: hZ,
  infintie: gZ,
  inodot: mZ,
  intcal: vZ,
  int: bZ,
  Int: _Z,
  integers: yZ,
  Integral: wZ,
  intercal: kZ,
  Intersection: CZ,
  intlarhk: xZ,
  intprod: EZ,
  InvisibleComma: SZ,
  InvisibleTimes: AZ,
  IOcy: TZ,
  iocy: MZ,
  Iogon: $Z,
  iogon: IZ,
  Iopf: LZ,
  iopf: OZ,
  Iota: RZ,
  iota: PZ,
  iprod: DZ,
  iquest: NZ,
  iscr: BZ,
  Iscr: FZ,
  isin: qZ,
  isindot: zZ,
  isinE: HZ,
  isins: jZ,
  isinsv: VZ,
  isinv: UZ,
  it: KZ,
  Itilde: WZ,
  itilde: GZ,
  Iukcy: ZZ,
  iukcy: XZ,
  Iuml: YZ,
  iuml: JZ,
  Jcirc: QZ,
  jcirc: eX,
  Jcy: tX,
  jcy: nX,
  Jfr: rX,
  jfr: oX,
  jmath: sX,
  Jopf: iX,
  jopf: aX,
  Jscr: lX,
  jscr: cX,
  Jsercy: uX,
  jsercy: fX,
  Jukcy: dX,
  jukcy: pX,
  Kappa: hX,
  kappa: gX,
  kappav: mX,
  Kcedil: vX,
  kcedil: bX,
  Kcy: _X,
  kcy: yX,
  Kfr: wX,
  kfr: kX,
  kgreen: CX,
  KHcy: xX,
  khcy: EX,
  KJcy: SX,
  kjcy: AX,
  Kopf: TX,
  kopf: MX,
  Kscr: $X,
  kscr: IX,
  lAarr: LX,
  Lacute: OX,
  lacute: RX,
  laemptyv: PX,
  lagran: DX,
  Lambda: NX,
  lambda: BX,
  lang: FX,
  Lang: qX,
  langd: zX,
  langle: HX,
  lap: jX,
  Laplacetrf: VX,
  laquo: UX,
  larrb: KX,
  larrbfs: WX,
  larr: GX,
  Larr: ZX,
  lArr: XX,
  larrfs: YX,
  larrhk: JX,
  larrlp: QX,
  larrpl: eY,
  larrsim: tY,
  larrtl: nY,
  latail: rY,
  lAtail: oY,
  lat: sY,
  late: iY,
  lates: aY,
  lbarr: lY,
  lBarr: cY,
  lbbrk: uY,
  lbrace: fY,
  lbrack: dY,
  lbrke: pY,
  lbrksld: hY,
  lbrkslu: gY,
  Lcaron: mY,
  lcaron: vY,
  Lcedil: bY,
  lcedil: _Y,
  lceil: yY,
  lcub: wY,
  Lcy: kY,
  lcy: CY,
  ldca: xY,
  ldquo: EY,
  ldquor: SY,
  ldrdhar: AY,
  ldrushar: TY,
  ldsh: MY,
  le: $Y,
  lE: IY,
  LeftAngleBracket: LY,
  LeftArrowBar: OY,
  leftarrow: RY,
  LeftArrow: PY,
  Leftarrow: DY,
  LeftArrowRightArrow: NY,
  leftarrowtail: BY,
  LeftCeiling: FY,
  LeftDoubleBracket: qY,
  LeftDownTeeVector: zY,
  LeftDownVectorBar: HY,
  LeftDownVector: jY,
  LeftFloor: VY,
  leftharpoondown: UY,
  leftharpoonup: KY,
  leftleftarrows: WY,
  leftrightarrow: GY,
  LeftRightArrow: ZY,
  Leftrightarrow: XY,
  leftrightarrows: YY,
  leftrightharpoons: JY,
  leftrightsquigarrow: QY,
  LeftRightVector: eJ,
  LeftTeeArrow: tJ,
  LeftTee: nJ,
  LeftTeeVector: rJ,
  leftthreetimes: oJ,
  LeftTriangleBar: sJ,
  LeftTriangle: iJ,
  LeftTriangleEqual: aJ,
  LeftUpDownVector: lJ,
  LeftUpTeeVector: cJ,
  LeftUpVectorBar: uJ,
  LeftUpVector: fJ,
  LeftVectorBar: dJ,
  LeftVector: pJ,
  lEg: hJ,
  leg: gJ,
  leq: mJ,
  leqq: vJ,
  leqslant: bJ,
  lescc: _J,
  les: yJ,
  lesdot: wJ,
  lesdoto: kJ,
  lesdotor: CJ,
  lesg: xJ,
  lesges: EJ,
  lessapprox: SJ,
  lessdot: AJ,
  lesseqgtr: TJ,
  lesseqqgtr: MJ,
  LessEqualGreater: $J,
  LessFullEqual: IJ,
  LessGreater: LJ,
  lessgtr: OJ,
  LessLess: RJ,
  lesssim: PJ,
  LessSlantEqual: DJ,
  LessTilde: NJ,
  lfisht: BJ,
  lfloor: FJ,
  Lfr: qJ,
  lfr: zJ,
  lg: HJ,
  lgE: jJ,
  lHar: VJ,
  lhard: UJ,
  lharu: KJ,
  lharul: WJ,
  lhblk: GJ,
  LJcy: ZJ,
  ljcy: XJ,
  llarr: YJ,
  ll: JJ,
  Ll: QJ,
  llcorner: eQ,
  Lleftarrow: tQ,
  llhard: nQ,
  lltri: rQ,
  Lmidot: oQ,
  lmidot: sQ,
  lmoustache: iQ,
  lmoust: aQ,
  lnap: lQ,
  lnapprox: cQ,
  lne: uQ,
  lnE: fQ,
  lneq: dQ,
  lneqq: pQ,
  lnsim: hQ,
  loang: gQ,
  loarr: mQ,
  lobrk: vQ,
  longleftarrow: bQ,
  LongLeftArrow: _Q,
  Longleftarrow: yQ,
  longleftrightarrow: wQ,
  LongLeftRightArrow: kQ,
  Longleftrightarrow: CQ,
  longmapsto: xQ,
  longrightarrow: EQ,
  LongRightArrow: SQ,
  Longrightarrow: AQ,
  looparrowleft: TQ,
  looparrowright: MQ,
  lopar: $Q,
  Lopf: IQ,
  lopf: LQ,
  loplus: OQ,
  lotimes: RQ,
  lowast: PQ,
  lowbar: DQ,
  LowerLeftArrow: NQ,
  LowerRightArrow: BQ,
  loz: FQ,
  lozenge: qQ,
  lozf: zQ,
  lpar: HQ,
  lparlt: jQ,
  lrarr: VQ,
  lrcorner: UQ,
  lrhar: KQ,
  lrhard: WQ,
  lrm: GQ,
  lrtri: ZQ,
  lsaquo: XQ,
  lscr: YQ,
  Lscr: JQ,
  lsh: QQ,
  Lsh: eee,
  lsim: tee,
  lsime: nee,
  lsimg: ree,
  lsqb: oee,
  lsquo: see,
  lsquor: iee,
  Lstrok: aee,
  lstrok: lee,
  ltcc: cee,
  ltcir: uee,
  lt: fee,
  LT: dee,
  Lt: pee,
  ltdot: hee,
  lthree: gee,
  ltimes: mee,
  ltlarr: vee,
  ltquest: bee,
  ltri: _ee,
  ltrie: yee,
  ltrif: wee,
  ltrPar: kee,
  lurdshar: Cee,
  luruhar: xee,
  lvertneqq: Eee,
  lvnE: See,
  macr: Aee,
  male: Tee,
  malt: Mee,
  maltese: $ee,
  Map: "⤅",
  map: Iee,
  mapsto: Lee,
  mapstodown: Oee,
  mapstoleft: Ree,
  mapstoup: Pee,
  marker: Dee,
  mcomma: Nee,
  Mcy: Bee,
  mcy: Fee,
  mdash: qee,
  mDDot: zee,
  measuredangle: Hee,
  MediumSpace: jee,
  Mellintrf: Vee,
  Mfr: Uee,
  mfr: Kee,
  mho: Wee,
  micro: Gee,
  midast: Zee,
  midcir: Xee,
  mid: Yee,
  middot: Jee,
  minusb: Qee,
  minus: ete,
  minusd: tte,
  minusdu: nte,
  MinusPlus: rte,
  mlcp: ote,
  mldr: ste,
  mnplus: ite,
  models: ate,
  Mopf: lte,
  mopf: cte,
  mp: ute,
  mscr: fte,
  Mscr: dte,
  mstpos: pte,
  Mu: hte,
  mu: gte,
  multimap: mte,
  mumap: vte,
  nabla: bte,
  Nacute: _te,
  nacute: yte,
  nang: wte,
  nap: kte,
  napE: Cte,
  napid: xte,
  napos: Ete,
  napprox: Ste,
  natural: Ate,
  naturals: Tte,
  natur: Mte,
  nbsp: $te,
  nbump: Ite,
  nbumpe: Lte,
  ncap: Ote,
  Ncaron: Rte,
  ncaron: Pte,
  Ncedil: Dte,
  ncedil: Nte,
  ncong: Bte,
  ncongdot: Fte,
  ncup: qte,
  Ncy: zte,
  ncy: Hte,
  ndash: jte,
  nearhk: Vte,
  nearr: Ute,
  neArr: Kte,
  nearrow: Wte,
  ne: Gte,
  nedot: Zte,
  NegativeMediumSpace: Xte,
  NegativeThickSpace: Yte,
  NegativeThinSpace: Jte,
  NegativeVeryThinSpace: Qte,
  nequiv: ene,
  nesear: tne,
  nesim: nne,
  NestedGreaterGreater: rne,
  NestedLessLess: one,
  NewLine: sne,
  nexist: ine,
  nexists: ane,
  Nfr: lne,
  nfr: cne,
  ngE: une,
  nge: fne,
  ngeq: dne,
  ngeqq: pne,
  ngeqslant: hne,
  nges: gne,
  nGg: mne,
  ngsim: vne,
  nGt: bne,
  ngt: _ne,
  ngtr: yne,
  nGtv: wne,
  nharr: kne,
  nhArr: Cne,
  nhpar: xne,
  ni: Ene,
  nis: Sne,
  nisd: Ane,
  niv: Tne,
  NJcy: Mne,
  njcy: $ne,
  nlarr: Ine,
  nlArr: Lne,
  nldr: One,
  nlE: Rne,
  nle: Pne,
  nleftarrow: Dne,
  nLeftarrow: Nne,
  nleftrightarrow: Bne,
  nLeftrightarrow: Fne,
  nleq: qne,
  nleqq: zne,
  nleqslant: Hne,
  nles: jne,
  nless: Vne,
  nLl: Une,
  nlsim: Kne,
  nLt: Wne,
  nlt: Gne,
  nltri: Zne,
  nltrie: Xne,
  nLtv: Yne,
  nmid: Jne,
  NoBreak: Qne,
  NonBreakingSpace: ere,
  nopf: tre,
  Nopf: nre,
  Not: rre,
  not: ore,
  NotCongruent: sre,
  NotCupCap: ire,
  NotDoubleVerticalBar: are,
  NotElement: lre,
  NotEqual: cre,
  NotEqualTilde: ure,
  NotExists: fre,
  NotGreater: dre,
  NotGreaterEqual: pre,
  NotGreaterFullEqual: hre,
  NotGreaterGreater: gre,
  NotGreaterLess: mre,
  NotGreaterSlantEqual: vre,
  NotGreaterTilde: bre,
  NotHumpDownHump: _re,
  NotHumpEqual: yre,
  notin: wre,
  notindot: kre,
  notinE: Cre,
  notinva: xre,
  notinvb: Ere,
  notinvc: Sre,
  NotLeftTriangleBar: Are,
  NotLeftTriangle: Tre,
  NotLeftTriangleEqual: Mre,
  NotLess: $re,
  NotLessEqual: Ire,
  NotLessGreater: Lre,
  NotLessLess: Ore,
  NotLessSlantEqual: Rre,
  NotLessTilde: Pre,
  NotNestedGreaterGreater: Dre,
  NotNestedLessLess: Nre,
  notni: Bre,
  notniva: Fre,
  notnivb: qre,
  notnivc: zre,
  NotPrecedes: Hre,
  NotPrecedesEqual: jre,
  NotPrecedesSlantEqual: Vre,
  NotReverseElement: Ure,
  NotRightTriangleBar: Kre,
  NotRightTriangle: Wre,
  NotRightTriangleEqual: Gre,
  NotSquareSubset: Zre,
  NotSquareSubsetEqual: Xre,
  NotSquareSuperset: Yre,
  NotSquareSupersetEqual: Jre,
  NotSubset: Qre,
  NotSubsetEqual: eoe,
  NotSucceeds: toe,
  NotSucceedsEqual: noe,
  NotSucceedsSlantEqual: roe,
  NotSucceedsTilde: ooe,
  NotSuperset: soe,
  NotSupersetEqual: ioe,
  NotTilde: aoe,
  NotTildeEqual: loe,
  NotTildeFullEqual: coe,
  NotTildeTilde: uoe,
  NotVerticalBar: foe,
  nparallel: doe,
  npar: poe,
  nparsl: hoe,
  npart: goe,
  npolint: moe,
  npr: voe,
  nprcue: boe,
  nprec: _oe,
  npreceq: yoe,
  npre: woe,
  nrarrc: koe,
  nrarr: Coe,
  nrArr: xoe,
  nrarrw: Eoe,
  nrightarrow: Soe,
  nRightarrow: Aoe,
  nrtri: Toe,
  nrtrie: Moe,
  nsc: $oe,
  nsccue: Ioe,
  nsce: Loe,
  Nscr: Ooe,
  nscr: Roe,
  nshortmid: Poe,
  nshortparallel: Doe,
  nsim: Noe,
  nsime: Boe,
  nsimeq: Foe,
  nsmid: qoe,
  nspar: zoe,
  nsqsube: Hoe,
  nsqsupe: joe,
  nsub: Voe,
  nsubE: Uoe,
  nsube: Koe,
  nsubset: Woe,
  nsubseteq: Goe,
  nsubseteqq: Zoe,
  nsucc: Xoe,
  nsucceq: Yoe,
  nsup: Joe,
  nsupE: Qoe,
  nsupe: ese,
  nsupset: tse,
  nsupseteq: nse,
  nsupseteqq: rse,
  ntgl: ose,
  Ntilde: sse,
  ntilde: ise,
  ntlg: ase,
  ntriangleleft: lse,
  ntrianglelefteq: cse,
  ntriangleright: use,
  ntrianglerighteq: fse,
  Nu: dse,
  nu: pse,
  num: hse,
  numero: gse,
  numsp: mse,
  nvap: vse,
  nvdash: bse,
  nvDash: _se,
  nVdash: yse,
  nVDash: wse,
  nvge: kse,
  nvgt: Cse,
  nvHarr: xse,
  nvinfin: Ese,
  nvlArr: Sse,
  nvle: Ase,
  nvlt: Tse,
  nvltrie: Mse,
  nvrArr: $se,
  nvrtrie: Ise,
  nvsim: Lse,
  nwarhk: Ose,
  nwarr: Rse,
  nwArr: Pse,
  nwarrow: Dse,
  nwnear: Nse,
  Oacute: Bse,
  oacute: Fse,
  oast: qse,
  Ocirc: zse,
  ocirc: Hse,
  ocir: jse,
  Ocy: Vse,
  ocy: Use,
  odash: Kse,
  Odblac: Wse,
  odblac: Gse,
  odiv: Zse,
  odot: Xse,
  odsold: Yse,
  OElig: Jse,
  oelig: Qse,
  ofcir: eie,
  Ofr: tie,
  ofr: nie,
  ogon: rie,
  Ograve: oie,
  ograve: sie,
  ogt: iie,
  ohbar: aie,
  ohm: lie,
  oint: cie,
  olarr: uie,
  olcir: fie,
  olcross: die,
  oline: pie,
  olt: hie,
  Omacr: gie,
  omacr: mie,
  Omega: vie,
  omega: bie,
  Omicron: _ie,
  omicron: yie,
  omid: wie,
  ominus: kie,
  Oopf: Cie,
  oopf: xie,
  opar: Eie,
  OpenCurlyDoubleQuote: Sie,
  OpenCurlyQuote: Aie,
  operp: Tie,
  oplus: Mie,
  orarr: $ie,
  Or: Iie,
  or: Lie,
  ord: Oie,
  order: Rie,
  orderof: Pie,
  ordf: Die,
  ordm: Nie,
  origof: Bie,
  oror: Fie,
  orslope: qie,
  orv: zie,
  oS: Hie,
  Oscr: jie,
  oscr: Vie,
  Oslash: Uie,
  oslash: Kie,
  osol: Wie,
  Otilde: Gie,
  otilde: Zie,
  otimesas: Xie,
  Otimes: Yie,
  otimes: Jie,
  Ouml: Qie,
  ouml: eae,
  ovbar: tae,
  OverBar: nae,
  OverBrace: rae,
  OverBracket: oae,
  OverParenthesis: sae,
  para: iae,
  parallel: aae,
  par: lae,
  parsim: cae,
  parsl: uae,
  part: fae,
  PartialD: dae,
  Pcy: pae,
  pcy: hae,
  percnt: gae,
  period: mae,
  permil: vae,
  perp: bae,
  pertenk: _ae,
  Pfr: yae,
  pfr: wae,
  Phi: kae,
  phi: Cae,
  phiv: xae,
  phmmat: Eae,
  phone: Sae,
  Pi: Aae,
  pi: Tae,
  pitchfork: Mae,
  piv: $ae,
  planck: Iae,
  planckh: Lae,
  plankv: Oae,
  plusacir: Rae,
  plusb: Pae,
  pluscir: Dae,
  plus: Nae,
  plusdo: Bae,
  plusdu: Fae,
  pluse: qae,
  PlusMinus: zae,
  plusmn: Hae,
  plussim: jae,
  plustwo: Vae,
  pm: Uae,
  Poincareplane: Kae,
  pointint: Wae,
  popf: Gae,
  Popf: Zae,
  pound: Xae,
  prap: Yae,
  Pr: Jae,
  pr: Qae,
  prcue: ele,
  precapprox: tle,
  prec: nle,
  preccurlyeq: rle,
  Precedes: ole,
  PrecedesEqual: sle,
  PrecedesSlantEqual: ile,
  PrecedesTilde: ale,
  preceq: lle,
  precnapprox: cle,
  precneqq: ule,
  precnsim: fle,
  pre: dle,
  prE: ple,
  precsim: hle,
  prime: gle,
  Prime: mle,
  primes: vle,
  prnap: ble,
  prnE: _le,
  prnsim: yle,
  prod: wle,
  Product: kle,
  profalar: Cle,
  profline: xle,
  profsurf: Ele,
  prop: Sle,
  Proportional: Ale,
  Proportion: Tle,
  propto: Mle,
  prsim: $le,
  prurel: Ile,
  Pscr: Lle,
  pscr: Ole,
  Psi: Rle,
  psi: Ple,
  puncsp: Dle,
  Qfr: Nle,
  qfr: Ble,
  qint: Fle,
  qopf: qle,
  Qopf: zle,
  qprime: Hle,
  Qscr: jle,
  qscr: Vle,
  quaternions: Ule,
  quatint: Kle,
  quest: Wle,
  questeq: Gle,
  quot: Zle,
  QUOT: Xle,
  rAarr: Yle,
  race: Jle,
  Racute: Qle,
  racute: ece,
  radic: tce,
  raemptyv: nce,
  rang: rce,
  Rang: oce,
  rangd: sce,
  range: ice,
  rangle: ace,
  raquo: lce,
  rarrap: cce,
  rarrb: uce,
  rarrbfs: fce,
  rarrc: dce,
  rarr: pce,
  Rarr: hce,
  rArr: gce,
  rarrfs: mce,
  rarrhk: vce,
  rarrlp: bce,
  rarrpl: _ce,
  rarrsim: yce,
  Rarrtl: wce,
  rarrtl: kce,
  rarrw: Cce,
  ratail: xce,
  rAtail: Ece,
  ratio: Sce,
  rationals: Ace,
  rbarr: Tce,
  rBarr: Mce,
  RBarr: $ce,
  rbbrk: Ice,
  rbrace: Lce,
  rbrack: Oce,
  rbrke: Rce,
  rbrksld: Pce,
  rbrkslu: Dce,
  Rcaron: Nce,
  rcaron: Bce,
  Rcedil: Fce,
  rcedil: qce,
  rceil: zce,
  rcub: Hce,
  Rcy: jce,
  rcy: Vce,
  rdca: Uce,
  rdldhar: Kce,
  rdquo: Wce,
  rdquor: Gce,
  rdsh: Zce,
  real: Xce,
  realine: Yce,
  realpart: Jce,
  reals: Qce,
  Re: eue,
  rect: tue,
  reg: nue,
  REG: rue,
  ReverseElement: oue,
  ReverseEquilibrium: sue,
  ReverseUpEquilibrium: iue,
  rfisht: aue,
  rfloor: lue,
  rfr: cue,
  Rfr: uue,
  rHar: fue,
  rhard: due,
  rharu: pue,
  rharul: hue,
  Rho: gue,
  rho: mue,
  rhov: vue,
  RightAngleBracket: bue,
  RightArrowBar: _ue,
  rightarrow: yue,
  RightArrow: wue,
  Rightarrow: kue,
  RightArrowLeftArrow: Cue,
  rightarrowtail: xue,
  RightCeiling: Eue,
  RightDoubleBracket: Sue,
  RightDownTeeVector: Aue,
  RightDownVectorBar: Tue,
  RightDownVector: Mue,
  RightFloor: $ue,
  rightharpoondown: Iue,
  rightharpoonup: Lue,
  rightleftarrows: Oue,
  rightleftharpoons: Rue,
  rightrightarrows: Pue,
  rightsquigarrow: Due,
  RightTeeArrow: Nue,
  RightTee: Bue,
  RightTeeVector: Fue,
  rightthreetimes: que,
  RightTriangleBar: zue,
  RightTriangle: Hue,
  RightTriangleEqual: jue,
  RightUpDownVector: Vue,
  RightUpTeeVector: Uue,
  RightUpVectorBar: Kue,
  RightUpVector: Wue,
  RightVectorBar: Gue,
  RightVector: Zue,
  ring: Xue,
  risingdotseq: Yue,
  rlarr: Jue,
  rlhar: Que,
  rlm: efe,
  rmoustache: tfe,
  rmoust: nfe,
  rnmid: rfe,
  roang: ofe,
  roarr: sfe,
  robrk: ife,
  ropar: afe,
  ropf: lfe,
  Ropf: cfe,
  roplus: ufe,
  rotimes: ffe,
  RoundImplies: dfe,
  rpar: pfe,
  rpargt: hfe,
  rppolint: gfe,
  rrarr: mfe,
  Rrightarrow: vfe,
  rsaquo: bfe,
  rscr: _fe,
  Rscr: yfe,
  rsh: wfe,
  Rsh: kfe,
  rsqb: Cfe,
  rsquo: xfe,
  rsquor: Efe,
  rthree: Sfe,
  rtimes: Afe,
  rtri: Tfe,
  rtrie: Mfe,
  rtrif: $fe,
  rtriltri: Ife,
  RuleDelayed: Lfe,
  ruluhar: Ofe,
  rx: Rfe,
  Sacute: Pfe,
  sacute: Dfe,
  sbquo: Nfe,
  scap: Bfe,
  Scaron: Ffe,
  scaron: qfe,
  Sc: zfe,
  sc: Hfe,
  sccue: jfe,
  sce: Vfe,
  scE: Ufe,
  Scedil: Kfe,
  scedil: Wfe,
  Scirc: Gfe,
  scirc: Zfe,
  scnap: Xfe,
  scnE: Yfe,
  scnsim: Jfe,
  scpolint: Qfe,
  scsim: ede,
  Scy: tde,
  scy: nde,
  sdotb: rde,
  sdot: ode,
  sdote: sde,
  searhk: ide,
  searr: ade,
  seArr: lde,
  searrow: cde,
  sect: ude,
  semi: fde,
  seswar: dde,
  setminus: pde,
  setmn: hde,
  sext: gde,
  Sfr: mde,
  sfr: vde,
  sfrown: bde,
  sharp: _de,
  SHCHcy: yde,
  shchcy: wde,
  SHcy: kde,
  shcy: Cde,
  ShortDownArrow: xde,
  ShortLeftArrow: Ede,
  shortmid: Sde,
  shortparallel: Ade,
  ShortRightArrow: Tde,
  ShortUpArrow: Mde,
  shy: $de,
  Sigma: Ide,
  sigma: Lde,
  sigmaf: Ode,
  sigmav: Rde,
  sim: Pde,
  simdot: Dde,
  sime: Nde,
  simeq: Bde,
  simg: Fde,
  simgE: qde,
  siml: zde,
  simlE: Hde,
  simne: jde,
  simplus: Vde,
  simrarr: Ude,
  slarr: Kde,
  SmallCircle: Wde,
  smallsetminus: Gde,
  smashp: Zde,
  smeparsl: Xde,
  smid: Yde,
  smile: Jde,
  smt: Qde,
  smte: e0e,
  smtes: t0e,
  SOFTcy: n0e,
  softcy: r0e,
  solbar: o0e,
  solb: s0e,
  sol: i0e,
  Sopf: a0e,
  sopf: l0e,
  spades: c0e,
  spadesuit: u0e,
  spar: f0e,
  sqcap: d0e,
  sqcaps: p0e,
  sqcup: h0e,
  sqcups: g0e,
  Sqrt: m0e,
  sqsub: v0e,
  sqsube: b0e,
  sqsubset: _0e,
  sqsubseteq: y0e,
  sqsup: w0e,
  sqsupe: k0e,
  sqsupset: C0e,
  sqsupseteq: x0e,
  square: E0e,
  Square: S0e,
  SquareIntersection: A0e,
  SquareSubset: T0e,
  SquareSubsetEqual: M0e,
  SquareSuperset: $0e,
  SquareSupersetEqual: I0e,
  SquareUnion: L0e,
  squarf: O0e,
  squ: R0e,
  squf: P0e,
  srarr: D0e,
  Sscr: N0e,
  sscr: B0e,
  ssetmn: F0e,
  ssmile: q0e,
  sstarf: z0e,
  Star: H0e,
  star: j0e,
  starf: V0e,
  straightepsilon: U0e,
  straightphi: K0e,
  strns: W0e,
  sub: G0e,
  Sub: Z0e,
  subdot: X0e,
  subE: Y0e,
  sube: J0e,
  subedot: Q0e,
  submult: epe,
  subnE: tpe,
  subne: npe,
  subplus: rpe,
  subrarr: ope,
  subset: spe,
  Subset: ipe,
  subseteq: ape,
  subseteqq: lpe,
  SubsetEqual: cpe,
  subsetneq: upe,
  subsetneqq: fpe,
  subsim: dpe,
  subsub: ppe,
  subsup: hpe,
  succapprox: gpe,
  succ: mpe,
  succcurlyeq: vpe,
  Succeeds: bpe,
  SucceedsEqual: _pe,
  SucceedsSlantEqual: ype,
  SucceedsTilde: wpe,
  succeq: kpe,
  succnapprox: Cpe,
  succneqq: xpe,
  succnsim: Epe,
  succsim: Spe,
  SuchThat: Ape,
  sum: Tpe,
  Sum: Mpe,
  sung: $pe,
  sup1: Ipe,
  sup2: Lpe,
  sup3: Ope,
  sup: Rpe,
  Sup: Ppe,
  supdot: Dpe,
  supdsub: Npe,
  supE: Bpe,
  supe: Fpe,
  supedot: qpe,
  Superset: zpe,
  SupersetEqual: Hpe,
  suphsol: jpe,
  suphsub: Vpe,
  suplarr: Upe,
  supmult: Kpe,
  supnE: Wpe,
  supne: Gpe,
  supplus: Zpe,
  supset: Xpe,
  Supset: Ype,
  supseteq: Jpe,
  supseteqq: Qpe,
  supsetneq: ehe,
  supsetneqq: the,
  supsim: nhe,
  supsub: rhe,
  supsup: ohe,
  swarhk: she,
  swarr: ihe,
  swArr: ahe,
  swarrow: lhe,
  swnwar: che,
  szlig: uhe,
  Tab: fhe,
  target: dhe,
  Tau: phe,
  tau: hhe,
  tbrk: ghe,
  Tcaron: mhe,
  tcaron: vhe,
  Tcedil: bhe,
  tcedil: _he,
  Tcy: yhe,
  tcy: whe,
  tdot: khe,
  telrec: Che,
  Tfr: xhe,
  tfr: Ehe,
  there4: She,
  therefore: Ahe,
  Therefore: The,
  Theta: Mhe,
  theta: $he,
  thetasym: Ihe,
  thetav: Lhe,
  thickapprox: Ohe,
  thicksim: Rhe,
  ThickSpace: Phe,
  ThinSpace: Dhe,
  thinsp: Nhe,
  thkap: Bhe,
  thksim: Fhe,
  THORN: qhe,
  thorn: zhe,
  tilde: Hhe,
  Tilde: jhe,
  TildeEqual: Vhe,
  TildeFullEqual: Uhe,
  TildeTilde: Khe,
  timesbar: Whe,
  timesb: Ghe,
  times: Zhe,
  timesd: Xhe,
  tint: Yhe,
  toea: Jhe,
  topbot: Qhe,
  topcir: e2e,
  top: t2e,
  Topf: n2e,
  topf: r2e,
  topfork: o2e,
  tosa: s2e,
  tprime: i2e,
  trade: a2e,
  TRADE: l2e,
  triangle: c2e,
  triangledown: u2e,
  triangleleft: f2e,
  trianglelefteq: d2e,
  triangleq: p2e,
  triangleright: h2e,
  trianglerighteq: g2e,
  tridot: m2e,
  trie: v2e,
  triminus: b2e,
  TripleDot: _2e,
  triplus: y2e,
  trisb: w2e,
  tritime: k2e,
  trpezium: C2e,
  Tscr: x2e,
  tscr: E2e,
  TScy: S2e,
  tscy: A2e,
  TSHcy: T2e,
  tshcy: M2e,
  Tstrok: $2e,
  tstrok: I2e,
  twixt: L2e,
  twoheadleftarrow: O2e,
  twoheadrightarrow: R2e,
  Uacute: P2e,
  uacute: D2e,
  uarr: N2e,
  Uarr: B2e,
  uArr: F2e,
  Uarrocir: q2e,
  Ubrcy: z2e,
  ubrcy: H2e,
  Ubreve: j2e,
  ubreve: V2e,
  Ucirc: U2e,
  ucirc: K2e,
  Ucy: W2e,
  ucy: G2e,
  udarr: Z2e,
  Udblac: X2e,
  udblac: Y2e,
  udhar: J2e,
  ufisht: Q2e,
  Ufr: e1e,
  ufr: t1e,
  Ugrave: n1e,
  ugrave: r1e,
  uHar: o1e,
  uharl: s1e,
  uharr: i1e,
  uhblk: a1e,
  ulcorn: l1e,
  ulcorner: c1e,
  ulcrop: u1e,
  ultri: f1e,
  Umacr: d1e,
  umacr: p1e,
  uml: h1e,
  UnderBar: g1e,
  UnderBrace: m1e,
  UnderBracket: v1e,
  UnderParenthesis: b1e,
  Union: _1e,
  UnionPlus: y1e,
  Uogon: w1e,
  uogon: k1e,
  Uopf: C1e,
  uopf: x1e,
  UpArrowBar: E1e,
  uparrow: S1e,
  UpArrow: A1e,
  Uparrow: T1e,
  UpArrowDownArrow: M1e,
  updownarrow: $1e,
  UpDownArrow: I1e,
  Updownarrow: L1e,
  UpEquilibrium: O1e,
  upharpoonleft: R1e,
  upharpoonright: P1e,
  uplus: D1e,
  UpperLeftArrow: N1e,
  UpperRightArrow: B1e,
  upsi: F1e,
  Upsi: q1e,
  upsih: z1e,
  Upsilon: H1e,
  upsilon: j1e,
  UpTeeArrow: V1e,
  UpTee: U1e,
  upuparrows: K1e,
  urcorn: W1e,
  urcorner: G1e,
  urcrop: Z1e,
  Uring: X1e,
  uring: Y1e,
  urtri: J1e,
  Uscr: Q1e,
  uscr: ege,
  utdot: tge,
  Utilde: nge,
  utilde: rge,
  utri: oge,
  utrif: sge,
  uuarr: ige,
  Uuml: age,
  uuml: lge,
  uwangle: cge,
  vangrt: uge,
  varepsilon: fge,
  varkappa: dge,
  varnothing: pge,
  varphi: hge,
  varpi: gge,
  varpropto: mge,
  varr: vge,
  vArr: bge,
  varrho: _ge,
  varsigma: yge,
  varsubsetneq: wge,
  varsubsetneqq: kge,
  varsupsetneq: Cge,
  varsupsetneqq: xge,
  vartheta: Ege,
  vartriangleleft: Sge,
  vartriangleright: Age,
  vBar: Tge,
  Vbar: Mge,
  vBarv: $ge,
  Vcy: Ige,
  vcy: Lge,
  vdash: Oge,
  vDash: Rge,
  Vdash: Pge,
  VDash: Dge,
  Vdashl: Nge,
  veebar: Bge,
  vee: Fge,
  Vee: qge,
  veeeq: zge,
  vellip: Hge,
  verbar: jge,
  Verbar: Vge,
  vert: Uge,
  Vert: Kge,
  VerticalBar: Wge,
  VerticalLine: Gge,
  VerticalSeparator: Zge,
  VerticalTilde: Xge,
  VeryThinSpace: Yge,
  Vfr: Jge,
  vfr: Qge,
  vltri: eme,
  vnsub: tme,
  vnsup: nme,
  Vopf: rme,
  vopf: ome,
  vprop: sme,
  vrtri: ime,
  Vscr: ame,
  vscr: lme,
  vsubnE: cme,
  vsubne: ume,
  vsupnE: fme,
  vsupne: dme,
  Vvdash: pme,
  vzigzag: hme,
  Wcirc: gme,
  wcirc: mme,
  wedbar: vme,
  wedge: bme,
  Wedge: _me,
  wedgeq: yme,
  weierp: wme,
  Wfr: kme,
  wfr: Cme,
  Wopf: xme,
  wopf: Eme,
  wp: Sme,
  wr: Ame,
  wreath: Tme,
  Wscr: Mme,
  wscr: $me,
  xcap: Ime,
  xcirc: Lme,
  xcup: Ome,
  xdtri: Rme,
  Xfr: Pme,
  xfr: Dme,
  xharr: Nme,
  xhArr: Bme,
  Xi: Fme,
  xi: qme,
  xlarr: zme,
  xlArr: Hme,
  xmap: jme,
  xnis: Vme,
  xodot: Ume,
  Xopf: Kme,
  xopf: Wme,
  xoplus: Gme,
  xotime: Zme,
  xrarr: Xme,
  xrArr: Yme,
  Xscr: Jme,
  xscr: Qme,
  xsqcup: eve,
  xuplus: tve,
  xutri: nve,
  xvee: rve,
  xwedge: ove,
  Yacute: sve,
  yacute: ive,
  YAcy: ave,
  yacy: lve,
  Ycirc: cve,
  ycirc: uve,
  Ycy: fve,
  ycy: dve,
  yen: pve,
  Yfr: hve,
  yfr: gve,
  YIcy: mve,
  yicy: vve,
  Yopf: bve,
  yopf: _ve,
  Yscr: yve,
  yscr: wve,
  YUcy: kve,
  yucy: Cve,
  yuml: xve,
  Yuml: Eve,
  Zacute: Sve,
  zacute: Ave,
  Zcaron: Tve,
  zcaron: Mve,
  Zcy: $ve,
  zcy: Ive,
  Zdot: Lve,
  zdot: Ove,
  zeetrf: Rve,
  ZeroWidthSpace: Pve,
  Zeta: Dve,
  zeta: Nve,
  zfr: Bve,
  Zfr: Fve,
  ZHcy: qve,
  zhcy: zve,
  zigrarr: Hve,
  zopf: jve,
  Zopf: Vve,
  Zscr: Uve,
  zscr: Kve,
  zwj: Wve,
  zwnj: Gve
};
var ja, xp;
function V_() {
  return xp || (xp = 1, ja = Zve), ja;
}
var Va, Ep;
function Ff() {
  return Ep || (Ep = 1, Va = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/), Va;
}
var ro = {}, Ua, Sp;
function Xve() {
  if (Sp) return Ua;
  Sp = 1;
  var e = {};
  function t(r) {
    var s, o, i = e[r];
    if (i)
      return i;
    for (i = e[r] = [], s = 0; s < 128; s++)
      o = String.fromCharCode(s), /^[0-9a-z]$/i.test(o) ? i.push(o) : i.push("%" + ("0" + s.toString(16).toUpperCase()).slice(-2));
    for (s = 0; s < r.length; s++)
      i[r.charCodeAt(s)] = r[s];
    return i;
  }
  function n(r, s, o) {
    var i, a, l, u, f, c = "";
    for (typeof s != "string" && (o = s, s = n.defaultChars), typeof o > "u" && (o = !0), f = t(s), i = 0, a = r.length; i < a; i++) {
      if (l = r.charCodeAt(i), o && l === 37 && i + 2 < a && /^[0-9a-f]{2}$/i.test(r.slice(i + 1, i + 3))) {
        c += r.slice(i, i + 3), i += 2;
        continue;
      }
      if (l < 128) {
        c += f[l];
        continue;
      }
      if (l >= 55296 && l <= 57343) {
        if (l >= 55296 && l <= 56319 && i + 1 < a && (u = r.charCodeAt(i + 1), u >= 56320 && u <= 57343)) {
          c += encodeURIComponent(r[i] + r[i + 1]), i++;
          continue;
        }
        c += "%EF%BF%BD";
        continue;
      }
      c += encodeURIComponent(r[i]);
    }
    return c;
  }
  return n.defaultChars = ";/?:@&=+$,-_.!~*'()#", n.componentChars = "-_.!~*'()", Ua = n, Ua;
}
var Ka, Ap;
function Yve() {
  if (Ap) return Ka;
  Ap = 1;
  var e = {};
  function t(r) {
    var s, o, i = e[r];
    if (i)
      return i;
    for (i = e[r] = [], s = 0; s < 128; s++)
      o = String.fromCharCode(s), i.push(o);
    for (s = 0; s < r.length; s++)
      o = r.charCodeAt(s), i[o] = "%" + ("0" + o.toString(16).toUpperCase()).slice(-2);
    return i;
  }
  function n(r, s) {
    var o;
    return typeof s != "string" && (s = n.defaultChars), o = t(s), r.replace(/(%[a-f0-9]{2})+/gi, function(i) {
      var a, l, u, f, c, p, d, m = "";
      for (a = 0, l = i.length; a < l; a += 3) {
        if (u = parseInt(i.slice(a + 1, a + 3), 16), u < 128) {
          m += o[u];
          continue;
        }
        if ((u & 224) === 192 && a + 3 < l && (f = parseInt(i.slice(a + 4, a + 6), 16), (f & 192) === 128)) {
          d = u << 6 & 1984 | f & 63, d < 128 ? m += "��" : m += String.fromCharCode(d), a += 3;
          continue;
        }
        if ((u & 240) === 224 && a + 6 < l && (f = parseInt(i.slice(a + 4, a + 6), 16), c = parseInt(i.slice(a + 7, a + 9), 16), (f & 192) === 128 && (c & 192) === 128)) {
          d = u << 12 & 61440 | f << 6 & 4032 | c & 63, d < 2048 || d >= 55296 && d <= 57343 ? m += "���" : m += String.fromCharCode(d), a += 6;
          continue;
        }
        if ((u & 248) === 240 && a + 9 < l && (f = parseInt(i.slice(a + 4, a + 6), 16), c = parseInt(i.slice(a + 7, a + 9), 16), p = parseInt(i.slice(a + 10, a + 12), 16), (f & 192) === 128 && (c & 192) === 128 && (p & 192) === 128)) {
          d = u << 18 & 1835008 | f << 12 & 258048 | c << 6 & 4032 | p & 63, d < 65536 || d > 1114111 ? m += "����" : (d -= 65536, m += String.fromCharCode(55296 + (d >> 10), 56320 + (d & 1023))), a += 9;
          continue;
        }
        m += "�";
      }
      return m;
    });
  }
  return n.defaultChars = ";/?:@&=+$,#", n.componentChars = "", Ka = n, Ka;
}
var Wa, Tp;
function Jve() {
  return Tp || (Tp = 1, Wa = function(t) {
    var n = "";
    return n += t.protocol || "", n += t.slashes ? "//" : "", n += t.auth ? t.auth + "@" : "", t.hostname && t.hostname.indexOf(":") !== -1 ? n += "[" + t.hostname + "]" : n += t.hostname || "", n += t.port ? ":" + t.port : "", n += t.pathname || "", n += t.search || "", n += t.hash || "", n;
  }), Wa;
}
var Ga, Mp;
function Qve() {
  if (Mp) return Ga;
  Mp = 1;
  function e() {
    this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
  }
  var t = /^([a-z0-9.+-]+:)/i, n = /:[0-9]*$/, r = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, s = ["<", ">", '"', "`", " ", "\r", `
`, "	"], o = ["{", "}", "|", "\\", "^", "`"].concat(s), i = ["'"].concat(o), a = ["%", "/", "?", ";", "#"].concat(i), l = ["/", "?", "#"], u = 255, f = /^[+a-z0-9A-Z_-]{0,63}$/, c = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, p = {
    javascript: !0,
    "javascript:": !0
  }, d = {
    http: !0,
    https: !0,
    ftp: !0,
    gopher: !0,
    file: !0,
    "http:": !0,
    "https:": !0,
    "ftp:": !0,
    "gopher:": !0,
    "file:": !0
  };
  function m(g, C) {
    if (g && g instanceof e)
      return g;
    var h = new e();
    return h.parse(g, C), h;
  }
  return e.prototype.parse = function(g, C) {
    var h, k, y, _, E, x = g;
    if (x = x.trim(), !C && g.split("#").length === 1) {
      var M = r.exec(x);
      if (M)
        return this.pathname = M[1], M[2] && (this.search = M[2]), this;
    }
    var $ = t.exec(x);
    if ($ && ($ = $[0], y = $.toLowerCase(), this.protocol = $, x = x.substr($.length)), (C || $ || x.match(/^\/\/[^@\/]+@[^@\/]+/)) && (E = x.substr(0, 2) === "//", E && !($ && p[$]) && (x = x.substr(2), this.slashes = !0)), !p[$] && (E || $ && !d[$])) {
      var O = -1;
      for (h = 0; h < l.length; h++)
        _ = x.indexOf(l[h]), _ !== -1 && (O === -1 || _ < O) && (O = _);
      var D, B;
      for (O === -1 ? B = x.lastIndexOf("@") : B = x.lastIndexOf("@", O), B !== -1 && (D = x.slice(0, B), x = x.slice(B + 1), this.auth = D), O = -1, h = 0; h < a.length; h++)
        _ = x.indexOf(a[h]), _ !== -1 && (O === -1 || _ < O) && (O = _);
      O === -1 && (O = x.length), x[O - 1] === ":" && O--;
      var N = x.slice(0, O);
      x = x.slice(O), this.parseHost(N), this.hostname = this.hostname || "";
      var oe = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      if (!oe) {
        var q = this.hostname.split(/\./);
        for (h = 0, k = q.length; h < k; h++) {
          var ie = q[h];
          if (ie && !ie.match(f)) {
            for (var j = "", V = 0, H = ie.length; V < H; V++)
              ie.charCodeAt(V) > 127 ? j += "x" : j += ie[V];
            if (!j.match(f)) {
              var J = q.slice(0, h), L = q.slice(h + 1), Z = ie.match(c);
              Z && (J.push(Z[1]), L.unshift(Z[2])), L.length && (x = L.join(".") + x), this.hostname = J.join(".");
              break;
            }
          }
        }
      }
      this.hostname.length > u && (this.hostname = ""), oe && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
    }
    var K = x.indexOf("#");
    K !== -1 && (this.hash = x.substr(K), x = x.slice(0, K));
    var me = x.indexOf("?");
    return me !== -1 && (this.search = x.substr(me), x = x.slice(0, me)), x && (this.pathname = x), d[y] && this.hostname && !this.pathname && (this.pathname = ""), this;
  }, e.prototype.parseHost = function(g) {
    var C = n.exec(g);
    C && (C = C[0], C !== ":" && (this.port = C.substr(1)), g = g.substr(0, g.length - C.length)), g && (this.hostname = g);
  }, Ga = m, Ga;
}
var $p;
function U_() {
  return $p || ($p = 1, ro.encode = Xve(), ro.decode = Yve(), ro.format = Jve(), ro.parse = Qve()), ro;
}
var Br = {}, Za, Ip;
function K_() {
  return Ip || (Ip = 1, Za = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/), Za;
}
var Xa, Lp;
function W_() {
  return Lp || (Lp = 1, Xa = /[\0-\x1F\x7F-\x9F]/), Xa;
}
var Ya, Op;
function ebe() {
  return Op || (Op = 1, Ya = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/), Ya;
}
var Ja, Rp;
function G_() {
  return Rp || (Rp = 1, Ja = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/), Ja;
}
var Pp;
function tbe() {
  return Pp || (Pp = 1, Br.Any = K_(), Br.Cc = W_(), Br.Cf = ebe(), Br.P = Ff(), Br.Z = G_()), Br;
}
var Dp;
function nt() {
  return Dp || (Dp = 1, function(e) {
    function t(q) {
      return Object.prototype.toString.call(q);
    }
    function n(q) {
      return t(q) === "[object String]";
    }
    var r = Object.prototype.hasOwnProperty;
    function s(q, ie) {
      return r.call(q, ie);
    }
    function o(q) {
      var ie = Array.prototype.slice.call(arguments, 1);
      return ie.forEach(function(j) {
        if (j) {
          if (typeof j != "object")
            throw new TypeError(j + "must be object");
          Object.keys(j).forEach(function(V) {
            q[V] = j[V];
          });
        }
      }), q;
    }
    function i(q, ie, j) {
      return [].concat(q.slice(0, ie), j, q.slice(ie + 1));
    }
    function a(q) {
      return !(q >= 55296 && q <= 57343 || q >= 64976 && q <= 65007 || (q & 65535) === 65535 || (q & 65535) === 65534 || q >= 0 && q <= 8 || q === 11 || q >= 14 && q <= 31 || q >= 127 && q <= 159 || q > 1114111);
    }
    function l(q) {
      if (q > 65535) {
        q -= 65536;
        var ie = 55296 + (q >> 10), j = 56320 + (q & 1023);
        return String.fromCharCode(ie, j);
      }
      return String.fromCharCode(q);
    }
    var u = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, f = /&([a-z#][a-z0-9]{1,31});/gi, c = new RegExp(u.source + "|" + f.source, "gi"), p = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i, d = V_();
    function m(q, ie) {
      var j;
      return s(d, ie) ? d[ie] : ie.charCodeAt(0) === 35 && p.test(ie) && (j = ie[1].toLowerCase() === "x" ? parseInt(ie.slice(2), 16) : parseInt(ie.slice(1), 10), a(j)) ? l(j) : q;
    }
    function g(q) {
      return q.indexOf("\\") < 0 ? q : q.replace(u, "$1");
    }
    function C(q) {
      return q.indexOf("\\") < 0 && q.indexOf("&") < 0 ? q : q.replace(c, function(ie, j, V) {
        return j || m(ie, V);
      });
    }
    var h = /[&<>"]/, k = /[&<>"]/g, y = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    };
    function _(q) {
      return y[q];
    }
    function E(q) {
      return h.test(q) ? q.replace(k, _) : q;
    }
    var x = /[.?*+^$[\]\\(){}|-]/g;
    function M(q) {
      return q.replace(x, "\\$&");
    }
    function $(q) {
      switch (q) {
        case 9:
        case 32:
          return !0;
      }
      return !1;
    }
    function O(q) {
      if (q >= 8192 && q <= 8202)
        return !0;
      switch (q) {
        case 9:
        // \t
        case 10:
        // \n
        case 11:
        // \v
        case 12:
        // \f
        case 13:
        // \r
        case 32:
        case 160:
        case 5760:
        case 8239:
        case 8287:
        case 12288:
          return !0;
      }
      return !1;
    }
    var D = Ff();
    function B(q) {
      return D.test(q);
    }
    function N(q) {
      switch (q) {
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 123:
        case 124:
        case 125:
        case 126:
          return !0;
        default:
          return !1;
      }
    }
    function oe(q) {
      return q = q.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (q = q.replace(/ẞ/g, "ß")), q.toLowerCase().toUpperCase();
    }
    e.lib = {}, e.lib.mdurl = U_(), e.lib.ucmicro = tbe(), e.assign = o, e.isString = n, e.has = s, e.unescapeMd = g, e.unescapeAll = C, e.isValidEntityCode = a, e.fromCodePoint = l, e.escapeHtml = E, e.arrayReplaceAt = i, e.isSpace = $, e.isWhiteSpace = O, e.isMdAsciiPunct = N, e.isPunctChar = B, e.escapeRE = M, e.normalizeReference = oe;
  }(Ha)), Ha;
}
var Bo = {}, Qa, Np;
function nbe() {
  return Np || (Np = 1, Qa = function(t, n, r) {
    var s, o, i, a, l = -1, u = t.posMax, f = t.pos;
    for (t.pos = n + 1, s = 1; t.pos < u; ) {
      if (i = t.src.charCodeAt(t.pos), i === 93 && (s--, s === 0)) {
        o = !0;
        break;
      }
      if (a = t.pos, t.md.inline.skipToken(t), i === 91) {
        if (a === t.pos - 1)
          s++;
        else if (r)
          return t.pos = f, -1;
      }
    }
    return o && (l = t.pos), t.pos = f, l;
  }), Qa;
}
var el, Bp;
function rbe() {
  if (Bp) return el;
  Bp = 1;
  var e = nt().unescapeAll;
  return el = function(n, r, s) {
    var o, i, a = r, l = {
      ok: !1,
      pos: 0,
      lines: 0,
      str: ""
    };
    if (n.charCodeAt(a) === 60) {
      for (a++; a < s; ) {
        if (o = n.charCodeAt(a), o === 10 || o === 60)
          return l;
        if (o === 62)
          return l.pos = a + 1, l.str = e(n.slice(r + 1, a)), l.ok = !0, l;
        if (o === 92 && a + 1 < s) {
          a += 2;
          continue;
        }
        a++;
      }
      return l;
    }
    for (i = 0; a < s && (o = n.charCodeAt(a), !(o === 32 || o < 32 || o === 127)); ) {
      if (o === 92 && a + 1 < s) {
        if (n.charCodeAt(a + 1) === 32)
          break;
        a += 2;
        continue;
      }
      if (o === 40 && (i++, i > 32))
        return l;
      if (o === 41) {
        if (i === 0)
          break;
        i--;
      }
      a++;
    }
    return r === a || i !== 0 || (l.str = e(n.slice(r, a)), l.pos = a, l.ok = !0), l;
  }, el;
}
var tl, Fp;
function obe() {
  if (Fp) return tl;
  Fp = 1;
  var e = nt().unescapeAll;
  return tl = function(n, r, s) {
    var o, i, a = 0, l = r, u = {
      ok: !1,
      pos: 0,
      lines: 0,
      str: ""
    };
    if (l >= s || (i = n.charCodeAt(l), i !== 34 && i !== 39 && i !== 40))
      return u;
    for (l++, i === 40 && (i = 41); l < s; ) {
      if (o = n.charCodeAt(l), o === i)
        return u.pos = l + 1, u.lines = a, u.str = e(n.slice(r + 1, l)), u.ok = !0, u;
      if (o === 40 && i === 41)
        return u;
      o === 10 ? a++ : o === 92 && l + 1 < s && (l++, n.charCodeAt(l) === 10 && a++), l++;
    }
    return u;
  }, tl;
}
var qp;
function sbe() {
  return qp || (qp = 1, Bo.parseLinkLabel = nbe(), Bo.parseLinkDestination = rbe(), Bo.parseLinkTitle = obe()), Bo;
}
var nl, zp;
function ibe() {
  if (zp) return nl;
  zp = 1;
  var e = nt().assign, t = nt().unescapeAll, n = nt().escapeHtml, r = {};
  r.code_inline = function(o, i, a, l, u) {
    var f = o[i];
    return "<code" + u.renderAttrs(f) + ">" + n(f.content) + "</code>";
  }, r.code_block = function(o, i, a, l, u) {
    var f = o[i];
    return "<pre" + u.renderAttrs(f) + "><code>" + n(o[i].content) + `</code></pre>
`;
  }, r.fence = function(o, i, a, l, u) {
    var f = o[i], c = f.info ? t(f.info).trim() : "", p = "", d = "", m, g, C, h, k;
    return c && (C = c.split(/(\s+)/g), p = C[0], d = C.slice(2).join("")), a.highlight ? m = a.highlight(f.content, p, d) || n(f.content) : m = n(f.content), m.indexOf("<pre") === 0 ? m + `
` : c ? (g = f.attrIndex("class"), h = f.attrs ? f.attrs.slice() : [], g < 0 ? h.push(["class", a.langPrefix + p]) : (h[g] = h[g].slice(), h[g][1] += " " + a.langPrefix + p), k = {
      attrs: h
    }, "<pre><code" + u.renderAttrs(k) + ">" + m + `</code></pre>
`) : "<pre><code" + u.renderAttrs(f) + ">" + m + `</code></pre>
`;
  }, r.image = function(o, i, a, l, u) {
    var f = o[i];
    return f.attrs[f.attrIndex("alt")][1] = u.renderInlineAsText(f.children, a, l), u.renderToken(o, i, a);
  }, r.hardbreak = function(o, i, a) {
    return a.xhtmlOut ? `<br />
` : `<br>
`;
  }, r.softbreak = function(o, i, a) {
    return a.breaks ? a.xhtmlOut ? `<br />
` : `<br>
` : `
`;
  }, r.text = function(o, i) {
    return n(o[i].content);
  }, r.html_block = function(o, i) {
    return o[i].content;
  }, r.html_inline = function(o, i) {
    return o[i].content;
  };
  function s() {
    this.rules = e({}, r);
  }
  return s.prototype.renderAttrs = function(i) {
    var a, l, u;
    if (!i.attrs)
      return "";
    for (u = "", a = 0, l = i.attrs.length; a < l; a++)
      u += " " + n(i.attrs[a][0]) + '="' + n(i.attrs[a][1]) + '"';
    return u;
  }, s.prototype.renderToken = function(i, a, l) {
    var u, f = "", c = !1, p = i[a];
    return p.hidden ? "" : (p.block && p.nesting !== -1 && a && i[a - 1].hidden && (f += `
`), f += (p.nesting === -1 ? "</" : "<") + p.tag, f += this.renderAttrs(p), p.nesting === 0 && l.xhtmlOut && (f += " /"), p.block && (c = !0, p.nesting === 1 && a + 1 < i.length && (u = i[a + 1], (u.type === "inline" || u.hidden || u.nesting === -1 && u.tag === p.tag) && (c = !1))), f += c ? `>
` : ">", f);
  }, s.prototype.renderInline = function(o, i, a) {
    for (var l, u = "", f = this.rules, c = 0, p = o.length; c < p; c++)
      l = o[c].type, typeof f[l] < "u" ? u += f[l](o, c, i, a, this) : u += this.renderToken(o, c, i);
    return u;
  }, s.prototype.renderInlineAsText = function(o, i, a) {
    for (var l = "", u = 0, f = o.length; u < f; u++)
      o[u].type === "text" ? l += o[u].content : o[u].type === "image" ? l += this.renderInlineAsText(o[u].children, i, a) : o[u].type === "softbreak" && (l += `
`);
    return l;
  }, s.prototype.render = function(o, i, a) {
    var l, u, f, c = "", p = this.rules;
    for (l = 0, u = o.length; l < u; l++)
      f = o[l].type, f === "inline" ? c += this.renderInline(o[l].children, i, a) : typeof p[f] < "u" ? c += p[f](o, l, i, a, this) : c += this.renderToken(o, l, i, a);
    return c;
  }, nl = s, nl;
}
var rl, Hp;
function qf() {
  if (Hp) return rl;
  Hp = 1;
  function e() {
    this.__rules__ = [], this.__cache__ = null;
  }
  return e.prototype.__find__ = function(t) {
    for (var n = 0; n < this.__rules__.length; n++)
      if (this.__rules__[n].name === t)
        return n;
    return -1;
  }, e.prototype.__compile__ = function() {
    var t = this, n = [""];
    t.__rules__.forEach(function(r) {
      r.enabled && r.alt.forEach(function(s) {
        n.indexOf(s) < 0 && n.push(s);
      });
    }), t.__cache__ = {}, n.forEach(function(r) {
      t.__cache__[r] = [], t.__rules__.forEach(function(s) {
        s.enabled && (r && s.alt.indexOf(r) < 0 || t.__cache__[r].push(s.fn));
      });
    });
  }, e.prototype.at = function(t, n, r) {
    var s = this.__find__(t), o = r || {};
    if (s === -1)
      throw new Error("Parser rule not found: " + t);
    this.__rules__[s].fn = n, this.__rules__[s].alt = o.alt || [], this.__cache__ = null;
  }, e.prototype.before = function(t, n, r, s) {
    var o = this.__find__(t), i = s || {};
    if (o === -1)
      throw new Error("Parser rule not found: " + t);
    this.__rules__.splice(o, 0, {
      name: n,
      enabled: !0,
      fn: r,
      alt: i.alt || []
    }), this.__cache__ = null;
  }, e.prototype.after = function(t, n, r, s) {
    var o = this.__find__(t), i = s || {};
    if (o === -1)
      throw new Error("Parser rule not found: " + t);
    this.__rules__.splice(o + 1, 0, {
      name: n,
      enabled: !0,
      fn: r,
      alt: i.alt || []
    }), this.__cache__ = null;
  }, e.prototype.push = function(t, n, r) {
    var s = r || {};
    this.__rules__.push({
      name: t,
      enabled: !0,
      fn: n,
      alt: s.alt || []
    }), this.__cache__ = null;
  }, e.prototype.enable = function(t, n) {
    Array.isArray(t) || (t = [t]);
    var r = [];
    return t.forEach(function(s) {
      var o = this.__find__(s);
      if (o < 0) {
        if (n)
          return;
        throw new Error("Rules manager: invalid rule name " + s);
      }
      this.__rules__[o].enabled = !0, r.push(s);
    }, this), this.__cache__ = null, r;
  }, e.prototype.enableOnly = function(t, n) {
    Array.isArray(t) || (t = [t]), this.__rules__.forEach(function(r) {
      r.enabled = !1;
    }), this.enable(t, n);
  }, e.prototype.disable = function(t, n) {
    Array.isArray(t) || (t = [t]);
    var r = [];
    return t.forEach(function(s) {
      var o = this.__find__(s);
      if (o < 0) {
        if (n)
          return;
        throw new Error("Rules manager: invalid rule name " + s);
      }
      this.__rules__[o].enabled = !1, r.push(s);
    }, this), this.__cache__ = null, r;
  }, e.prototype.getRules = function(t) {
    return this.__cache__ === null && this.__compile__(), this.__cache__[t] || [];
  }, rl = e, rl;
}
var ol, jp;
function abe() {
  if (jp) return ol;
  jp = 1;
  var e = /\r\n?|\n/g, t = /\0/g;
  return ol = function(r) {
    var s;
    s = r.src.replace(e, `
`), s = s.replace(t, "�"), r.src = s;
  }, ol;
}
var sl, Vp;
function lbe() {
  return Vp || (Vp = 1, sl = function(t) {
    var n;
    t.inlineMode ? (n = new t.Token("inline", "", 0), n.content = t.src, n.map = [0, 1], n.children = [], t.tokens.push(n)) : t.md.block.parse(t.src, t.md, t.env, t.tokens);
  }), sl;
}
var il, Up;
function cbe() {
  return Up || (Up = 1, il = function(t) {
    var n = t.tokens, r, s, o;
    for (s = 0, o = n.length; s < o; s++)
      r = n[s], r.type === "inline" && t.md.inline.parse(r.content, t.md, t.env, r.children);
  }), il;
}
var al, Kp;
function ube() {
  if (Kp) return al;
  Kp = 1;
  var e = nt().arrayReplaceAt;
  function t(r) {
    return /^<a[>\s]/i.test(r);
  }
  function n(r) {
    return /^<\/a\s*>/i.test(r);
  }
  return al = function(s) {
    var o, i, a, l, u, f, c, p, d, m, g, C, h, k, y, _, E = s.tokens, x;
    if (s.md.options.linkify) {
      for (i = 0, a = E.length; i < a; i++)
        if (!(E[i].type !== "inline" || !s.md.linkify.pretest(E[i].content)))
          for (l = E[i].children, h = 0, o = l.length - 1; o >= 0; o--) {
            if (f = l[o], f.type === "link_close") {
              for (o--; l[o].level !== f.level && l[o].type !== "link_open"; )
                o--;
              continue;
            }
            if (f.type === "html_inline" && (t(f.content) && h > 0 && h--, n(f.content) && h++), !(h > 0) && f.type === "text" && s.md.linkify.test(f.content)) {
              for (d = f.content, x = s.md.linkify.match(d), c = [], C = f.level, g = 0, x.length > 0 && x[0].index === 0 && o > 0 && l[o - 1].type === "text_special" && (x = x.slice(1)), p = 0; p < x.length; p++)
                k = x[p].url, y = s.md.normalizeLink(k), s.md.validateLink(y) && (_ = x[p].text, x[p].schema ? x[p].schema === "mailto:" && !/^mailto:/i.test(_) ? _ = s.md.normalizeLinkText("mailto:" + _).replace(/^mailto:/, "") : _ = s.md.normalizeLinkText(_) : _ = s.md.normalizeLinkText("http://" + _).replace(/^http:\/\//, ""), m = x[p].index, m > g && (u = new s.Token("text", "", 0), u.content = d.slice(g, m), u.level = C, c.push(u)), u = new s.Token("link_open", "a", 1), u.attrs = [["href", y]], u.level = C++, u.markup = "linkify", u.info = "auto", c.push(u), u = new s.Token("text", "", 0), u.content = _, u.level = C, c.push(u), u = new s.Token("link_close", "a", -1), u.level = --C, u.markup = "linkify", u.info = "auto", c.push(u), g = x[p].lastIndex);
              g < d.length && (u = new s.Token("text", "", 0), u.content = d.slice(g), u.level = C, c.push(u)), E[i].children = l = e(l, o, c);
            }
          }
    }
  }, al;
}
var ll, Wp;
function fbe() {
  if (Wp) return ll;
  Wp = 1;
  var e = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, t = /\((c|tm|r)\)/i, n = /\((c|tm|r)\)/ig, r = {
    c: "©",
    r: "®",
    tm: "™"
  };
  function s(a, l) {
    return r[l.toLowerCase()];
  }
  function o(a) {
    var l, u, f = 0;
    for (l = a.length - 1; l >= 0; l--)
      u = a[l], u.type === "text" && !f && (u.content = u.content.replace(n, s)), u.type === "link_open" && u.info === "auto" && f--, u.type === "link_close" && u.info === "auto" && f++;
  }
  function i(a) {
    var l, u, f = 0;
    for (l = a.length - 1; l >= 0; l--)
      u = a[l], u.type === "text" && !f && e.test(u.content) && (u.content = u.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), u.type === "link_open" && u.info === "auto" && f--, u.type === "link_close" && u.info === "auto" && f++;
  }
  return ll = function(l) {
    var u;
    if (l.md.options.typographer)
      for (u = l.tokens.length - 1; u >= 0; u--)
        l.tokens[u].type === "inline" && (t.test(l.tokens[u].content) && o(l.tokens[u].children), e.test(l.tokens[u].content) && i(l.tokens[u].children));
  }, ll;
}
var cl, Gp;
function dbe() {
  if (Gp) return cl;
  Gp = 1;
  var e = nt().isWhiteSpace, t = nt().isPunctChar, n = nt().isMdAsciiPunct, r = /['"]/, s = /['"]/g, o = "’";
  function i(l, u, f) {
    return l.slice(0, u) + f + l.slice(u + 1);
  }
  function a(l, u) {
    var f, c, p, d, m, g, C, h, k, y, _, E, x, M, $, O, D, B, N, oe, q;
    for (N = [], f = 0; f < l.length; f++) {
      for (c = l[f], C = l[f].level, D = N.length - 1; D >= 0 && !(N[D].level <= C); D--)
        ;
      if (N.length = D + 1, c.type === "text") {
        p = c.content, m = 0, g = p.length;
        e:
          for (; m < g && (s.lastIndex = m, d = s.exec(p), !!d); ) {
            if ($ = O = !0, m = d.index + 1, B = d[0] === "'", k = 32, d.index - 1 >= 0)
              k = p.charCodeAt(d.index - 1);
            else
              for (D = f - 1; D >= 0 && !(l[D].type === "softbreak" || l[D].type === "hardbreak"); D--)
                if (l[D].content) {
                  k = l[D].content.charCodeAt(l[D].content.length - 1);
                  break;
                }
            if (y = 32, m < g)
              y = p.charCodeAt(m);
            else
              for (D = f + 1; D < l.length && !(l[D].type === "softbreak" || l[D].type === "hardbreak"); D++)
                if (l[D].content) {
                  y = l[D].content.charCodeAt(0);
                  break;
                }
            if (_ = n(k) || t(String.fromCharCode(k)), E = n(y) || t(String.fromCharCode(y)), x = e(k), M = e(y), M ? $ = !1 : E && (x || _ || ($ = !1)), x ? O = !1 : _ && (M || E || (O = !1)), y === 34 && d[0] === '"' && k >= 48 && k <= 57 && (O = $ = !1), $ && O && ($ = _, O = E), !$ && !O) {
              B && (c.content = i(c.content, d.index, o));
              continue;
            }
            if (O) {
              for (D = N.length - 1; D >= 0 && (h = N[D], !(N[D].level < C)); D--)
                if (h.single === B && N[D].level === C) {
                  h = N[D], B ? (oe = u.md.options.quotes[2], q = u.md.options.quotes[3]) : (oe = u.md.options.quotes[0], q = u.md.options.quotes[1]), c.content = i(c.content, d.index, q), l[h.token].content = i(
                    l[h.token].content,
                    h.pos,
                    oe
                  ), m += q.length - 1, h.token === f && (m += oe.length - 1), p = c.content, g = p.length, N.length = D;
                  continue e;
                }
            }
            $ ? N.push({
              token: f,
              pos: d.index,
              single: B,
              level: C
            }) : O && B && (c.content = i(c.content, d.index, o));
          }
      }
    }
  }
  return cl = function(u) {
    var f;
    if (u.md.options.typographer)
      for (f = u.tokens.length - 1; f >= 0; f--)
        u.tokens[f].type !== "inline" || !r.test(u.tokens[f].content) || a(u.tokens[f].children, u);
  }, cl;
}
var ul, Zp;
function pbe() {
  return Zp || (Zp = 1, ul = function(t) {
    var n, r, s, o, i, a, l = t.tokens;
    for (n = 0, r = l.length; n < r; n++)
      if (l[n].type === "inline") {
        for (s = l[n].children, i = s.length, o = 0; o < i; o++)
          s[o].type === "text_special" && (s[o].type = "text");
        for (o = a = 0; o < i; o++)
          s[o].type === "text" && o + 1 < i && s[o + 1].type === "text" ? s[o + 1].content = s[o].content + s[o + 1].content : (o !== a && (s[a] = s[o]), a++);
        o !== a && (s.length = a);
      }
  }), ul;
}
var fl, Xp;
function zf() {
  if (Xp) return fl;
  Xp = 1;
  function e(t, n, r) {
    this.type = t, this.tag = n, this.attrs = null, this.map = null, this.nesting = r, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
  }
  return e.prototype.attrIndex = function(n) {
    var r, s, o;
    if (!this.attrs)
      return -1;
    for (r = this.attrs, s = 0, o = r.length; s < o; s++)
      if (r[s][0] === n)
        return s;
    return -1;
  }, e.prototype.attrPush = function(n) {
    this.attrs ? this.attrs.push(n) : this.attrs = [n];
  }, e.prototype.attrSet = function(n, r) {
    var s = this.attrIndex(n), o = [n, r];
    s < 0 ? this.attrPush(o) : this.attrs[s] = o;
  }, e.prototype.attrGet = function(n) {
    var r = this.attrIndex(n), s = null;
    return r >= 0 && (s = this.attrs[r][1]), s;
  }, e.prototype.attrJoin = function(n, r) {
    var s = this.attrIndex(n);
    s < 0 ? this.attrPush([n, r]) : this.attrs[s][1] = this.attrs[s][1] + " " + r;
  }, fl = e, fl;
}
var dl, Yp;
function hbe() {
  if (Yp) return dl;
  Yp = 1;
  var e = zf();
  function t(n, r, s) {
    this.src = n, this.env = s, this.tokens = [], this.inlineMode = !1, this.md = r;
  }
  return t.prototype.Token = e, dl = t, dl;
}
var pl, Jp;
function gbe() {
  if (Jp) return pl;
  Jp = 1;
  var e = qf(), t = [
    ["normalize", abe()],
    ["block", lbe()],
    ["inline", cbe()],
    ["linkify", ube()],
    ["replacements", fbe()],
    ["smartquotes", dbe()],
    // `text_join` finds `text_special` tokens (for escape sequences)
    // and joins them with the rest of the text
    ["text_join", pbe()]
  ];
  function n() {
    this.ruler = new e();
    for (var r = 0; r < t.length; r++)
      this.ruler.push(t[r][0], t[r][1]);
  }
  return n.prototype.process = function(r) {
    var s, o, i;
    for (i = this.ruler.getRules(""), s = 0, o = i.length; s < o; s++)
      i[s](r);
  }, n.prototype.State = hbe(), pl = n, pl;
}
var hl, Qp;
function mbe() {
  if (Qp) return hl;
  Qp = 1;
  var e = nt().isSpace;
  function t(r, s) {
    var o = r.bMarks[s] + r.tShift[s], i = r.eMarks[s];
    return r.src.slice(o, i);
  }
  function n(r) {
    var s = [], o = 0, i = r.length, a, l = !1, u = 0, f = "";
    for (a = r.charCodeAt(o); o < i; )
      a === 124 && (l ? (f += r.substring(u, o - 1), u = o) : (s.push(f + r.substring(u, o)), f = "", u = o + 1)), l = a === 92, o++, a = r.charCodeAt(o);
    return s.push(f + r.substring(u)), s;
  }
  return hl = function(s, o, i, a) {
    var l, u, f, c, p, d, m, g, C, h, k, y, _, E, x, M, $, O;
    if (o + 2 > i || (d = o + 1, s.sCount[d] < s.blkIndent) || s.sCount[d] - s.blkIndent >= 4 || (f = s.bMarks[d] + s.tShift[d], f >= s.eMarks[d]) || ($ = s.src.charCodeAt(f++), $ !== 124 && $ !== 45 && $ !== 58) || f >= s.eMarks[d] || (O = s.src.charCodeAt(f++), O !== 124 && O !== 45 && O !== 58 && !e(O)) || $ === 45 && e(O))
      return !1;
    for (; f < s.eMarks[d]; ) {
      if (l = s.src.charCodeAt(f), l !== 124 && l !== 45 && l !== 58 && !e(l))
        return !1;
      f++;
    }
    for (u = t(s, o + 1), m = u.split("|"), h = [], c = 0; c < m.length; c++) {
      if (k = m[c].trim(), !k) {
        if (c === 0 || c === m.length - 1)
          continue;
        return !1;
      }
      if (!/^:?-+:?$/.test(k))
        return !1;
      k.charCodeAt(k.length - 1) === 58 ? h.push(k.charCodeAt(0) === 58 ? "center" : "right") : k.charCodeAt(0) === 58 ? h.push("left") : h.push("");
    }
    if (u = t(s, o).trim(), u.indexOf("|") === -1 || s.sCount[o] - s.blkIndent >= 4 || (m = n(u), m.length && m[0] === "" && m.shift(), m.length && m[m.length - 1] === "" && m.pop(), g = m.length, g === 0 || g !== h.length))
      return !1;
    if (a)
      return !0;
    for (E = s.parentType, s.parentType = "table", M = s.md.block.ruler.getRules("blockquote"), C = s.push("table_open", "table", 1), C.map = y = [o, 0], C = s.push("thead_open", "thead", 1), C.map = [o, o + 1], C = s.push("tr_open", "tr", 1), C.map = [o, o + 1], c = 0; c < m.length; c++)
      C = s.push("th_open", "th", 1), h[c] && (C.attrs = [["style", "text-align:" + h[c]]]), C = s.push("inline", "", 0), C.content = m[c].trim(), C.children = [], C = s.push("th_close", "th", -1);
    for (C = s.push("tr_close", "tr", -1), C = s.push("thead_close", "thead", -1), d = o + 2; d < i && !(s.sCount[d] < s.blkIndent); d++) {
      for (x = !1, c = 0, p = M.length; c < p; c++)
        if (M[c](s, d, i, !0)) {
          x = !0;
          break;
        }
      if (x || (u = t(s, d).trim(), !u) || s.sCount[d] - s.blkIndent >= 4)
        break;
      for (m = n(u), m.length && m[0] === "" && m.shift(), m.length && m[m.length - 1] === "" && m.pop(), d === o + 2 && (C = s.push("tbody_open", "tbody", 1), C.map = _ = [o + 2, 0]), C = s.push("tr_open", "tr", 1), C.map = [d, d + 1], c = 0; c < g; c++)
        C = s.push("td_open", "td", 1), h[c] && (C.attrs = [["style", "text-align:" + h[c]]]), C = s.push("inline", "", 0), C.content = m[c] ? m[c].trim() : "", C.children = [], C = s.push("td_close", "td", -1);
      C = s.push("tr_close", "tr", -1);
    }
    return _ && (C = s.push("tbody_close", "tbody", -1), _[1] = d), C = s.push("table_close", "table", -1), y[1] = d, s.parentType = E, s.line = d, !0;
  }, hl;
}
var gl, eh;
function vbe() {
  return eh || (eh = 1, gl = function(t, n, r) {
    var s, o, i;
    if (t.sCount[n] - t.blkIndent < 4)
      return !1;
    for (o = s = n + 1; s < r; ) {
      if (t.isEmpty(s)) {
        s++;
        continue;
      }
      if (t.sCount[s] - t.blkIndent >= 4) {
        s++, o = s;
        continue;
      }
      break;
    }
    return t.line = o, i = t.push("code_block", "code", 0), i.content = t.getLines(n, o, 4 + t.blkIndent, !1) + `
`, i.map = [n, t.line], !0;
  }), gl;
}
var ml, th;
function bbe() {
  return th || (th = 1, ml = function(t, n, r, s) {
    var o, i, a, l, u, f, c, p = !1, d = t.bMarks[n] + t.tShift[n], m = t.eMarks[n];
    if (t.sCount[n] - t.blkIndent >= 4 || d + 3 > m || (o = t.src.charCodeAt(d), o !== 126 && o !== 96) || (u = d, d = t.skipChars(d, o), i = d - u, i < 3) || (c = t.src.slice(u, d), a = t.src.slice(d, m), o === 96 && a.indexOf(String.fromCharCode(o)) >= 0))
      return !1;
    if (s)
      return !0;
    for (l = n; l++, !(l >= r || (d = u = t.bMarks[l] + t.tShift[l], m = t.eMarks[l], d < m && t.sCount[l] < t.blkIndent)); )
      if (t.src.charCodeAt(d) === o && !(t.sCount[l] - t.blkIndent >= 4) && (d = t.skipChars(d, o), !(d - u < i) && (d = t.skipSpaces(d), !(d < m)))) {
        p = !0;
        break;
      }
    return i = t.sCount[n], t.line = l + (p ? 1 : 0), f = t.push("fence", "code", 0), f.info = a, f.content = t.getLines(n + 1, l, i, !0), f.markup = c, f.map = [n, t.line], !0;
  }), ml;
}
var vl, nh;
function _be() {
  if (nh) return vl;
  nh = 1;
  var e = nt().isSpace;
  return vl = function(n, r, s, o) {
    var i, a, l, u, f, c, p, d, m, g, C, h, k, y, _, E, x, M, $, O, D = n.lineMax, B = n.bMarks[r] + n.tShift[r], N = n.eMarks[r];
    if (n.sCount[r] - n.blkIndent >= 4 || n.src.charCodeAt(B) !== 62)
      return !1;
    if (o)
      return !0;
    for (g = [], C = [], y = [], _ = [], M = n.md.block.ruler.getRules("blockquote"), k = n.parentType, n.parentType = "blockquote", d = r; d < s && (O = n.sCount[d] < n.blkIndent, B = n.bMarks[d] + n.tShift[d], N = n.eMarks[d], !(B >= N)); d++) {
      if (n.src.charCodeAt(B++) === 62 && !O) {
        for (u = n.sCount[d] + 1, n.src.charCodeAt(B) === 32 ? (B++, u++, i = !1, E = !0) : n.src.charCodeAt(B) === 9 ? (E = !0, (n.bsCount[d] + u) % 4 === 3 ? (B++, u++, i = !1) : i = !0) : E = !1, m = u, g.push(n.bMarks[d]), n.bMarks[d] = B; B < N && (a = n.src.charCodeAt(B), e(a)); ) {
          a === 9 ? m += 4 - (m + n.bsCount[d] + (i ? 1 : 0)) % 4 : m++;
          B++;
        }
        c = B >= N, C.push(n.bsCount[d]), n.bsCount[d] = n.sCount[d] + 1 + (E ? 1 : 0), y.push(n.sCount[d]), n.sCount[d] = m - u, _.push(n.tShift[d]), n.tShift[d] = B - n.bMarks[d];
        continue;
      }
      if (c)
        break;
      for (x = !1, l = 0, f = M.length; l < f; l++)
        if (M[l](n, d, s, !0)) {
          x = !0;
          break;
        }
      if (x) {
        n.lineMax = d, n.blkIndent !== 0 && (g.push(n.bMarks[d]), C.push(n.bsCount[d]), _.push(n.tShift[d]), y.push(n.sCount[d]), n.sCount[d] -= n.blkIndent);
        break;
      }
      g.push(n.bMarks[d]), C.push(n.bsCount[d]), _.push(n.tShift[d]), y.push(n.sCount[d]), n.sCount[d] = -1;
    }
    for (h = n.blkIndent, n.blkIndent = 0, $ = n.push("blockquote_open", "blockquote", 1), $.markup = ">", $.map = p = [r, 0], n.md.block.tokenize(n, r, d), $ = n.push("blockquote_close", "blockquote", -1), $.markup = ">", n.lineMax = D, n.parentType = k, p[1] = n.line, l = 0; l < _.length; l++)
      n.bMarks[l + r] = g[l], n.tShift[l + r] = _[l], n.sCount[l + r] = y[l], n.bsCount[l + r] = C[l];
    return n.blkIndent = h, !0;
  }, vl;
}
var bl, rh;
function ybe() {
  if (rh) return bl;
  rh = 1;
  var e = nt().isSpace;
  return bl = function(n, r, s, o) {
    var i, a, l, u, f = n.bMarks[r] + n.tShift[r], c = n.eMarks[r];
    if (n.sCount[r] - n.blkIndent >= 4 || (i = n.src.charCodeAt(f++), i !== 42 && i !== 45 && i !== 95))
      return !1;
    for (a = 1; f < c; ) {
      if (l = n.src.charCodeAt(f++), l !== i && !e(l))
        return !1;
      l === i && a++;
    }
    return a < 3 ? !1 : (o || (n.line = r + 1, u = n.push("hr", "hr", 0), u.map = [r, n.line], u.markup = Array(a + 1).join(String.fromCharCode(i))), !0);
  }, bl;
}
var _l, oh;
function wbe() {
  if (oh) return _l;
  oh = 1;
  var e = nt().isSpace;
  function t(s, o) {
    var i, a, l, u;
    return a = s.bMarks[o] + s.tShift[o], l = s.eMarks[o], i = s.src.charCodeAt(a++), i !== 42 && i !== 45 && i !== 43 || a < l && (u = s.src.charCodeAt(a), !e(u)) ? -1 : a;
  }
  function n(s, o) {
    var i, a = s.bMarks[o] + s.tShift[o], l = a, u = s.eMarks[o];
    if (l + 1 >= u || (i = s.src.charCodeAt(l++), i < 48 || i > 57))
      return -1;
    for (; ; ) {
      if (l >= u)
        return -1;
      if (i = s.src.charCodeAt(l++), i >= 48 && i <= 57) {
        if (l - a >= 10)
          return -1;
        continue;
      }
      if (i === 41 || i === 46)
        break;
      return -1;
    }
    return l < u && (i = s.src.charCodeAt(l), !e(i)) ? -1 : l;
  }
  function r(s, o) {
    var i, a, l = s.level + 2;
    for (i = o + 2, a = s.tokens.length - 2; i < a; i++)
      s.tokens[i].level === l && s.tokens[i].type === "paragraph_open" && (s.tokens[i + 2].hidden = !0, s.tokens[i].hidden = !0, i += 2);
  }
  return _l = function(o, i, a, l) {
    var u, f, c, p, d, m, g, C, h, k, y, _, E, x, M, $, O, D, B, N, oe, q, ie, j, V, H, J, L = i, Z = !1, K = !0;
    if (o.sCount[L] - o.blkIndent >= 4 || o.listIndent >= 0 && o.sCount[L] - o.listIndent >= 4 && o.sCount[L] < o.blkIndent)
      return !1;
    if (l && o.parentType === "paragraph" && o.sCount[L] >= o.blkIndent && (Z = !0), (q = n(o, L)) >= 0) {
      if (g = !0, j = o.bMarks[L] + o.tShift[L], E = Number(o.src.slice(j, q - 1)), Z && E !== 1) return !1;
    } else if ((q = t(o, L)) >= 0)
      g = !1;
    else
      return !1;
    if (Z && o.skipSpaces(q) >= o.eMarks[L])
      return !1;
    if (l)
      return !0;
    for (_ = o.src.charCodeAt(q - 1), y = o.tokens.length, g ? (J = o.push("ordered_list_open", "ol", 1), E !== 1 && (J.attrs = [["start", E]])) : J = o.push("bullet_list_open", "ul", 1), J.map = k = [L, 0], J.markup = String.fromCharCode(_), ie = !1, H = o.md.block.ruler.getRules("list"), O = o.parentType, o.parentType = "list"; L < a; ) {
      for (oe = q, x = o.eMarks[L], m = M = o.sCount[L] + q - (o.bMarks[L] + o.tShift[L]); oe < x; ) {
        if (u = o.src.charCodeAt(oe), u === 9)
          M += 4 - (M + o.bsCount[L]) % 4;
        else if (u === 32)
          M++;
        else
          break;
        oe++;
      }
      if (f = oe, f >= x ? d = 1 : d = M - m, d > 4 && (d = 1), p = m + d, J = o.push("list_item_open", "li", 1), J.markup = String.fromCharCode(_), J.map = C = [L, 0], g && (J.info = o.src.slice(j, q - 1)), N = o.tight, B = o.tShift[L], D = o.sCount[L], $ = o.listIndent, o.listIndent = o.blkIndent, o.blkIndent = p, o.tight = !0, o.tShift[L] = f - o.bMarks[L], o.sCount[L] = M, f >= x && o.isEmpty(L + 1) ? o.line = Math.min(o.line + 2, a) : o.md.block.tokenize(o, L, a, !0), (!o.tight || ie) && (K = !1), ie = o.line - L > 1 && o.isEmpty(o.line - 1), o.blkIndent = o.listIndent, o.listIndent = $, o.tShift[L] = B, o.sCount[L] = D, o.tight = N, J = o.push("list_item_close", "li", -1), J.markup = String.fromCharCode(_), L = o.line, C[1] = L, L >= a || o.sCount[L] < o.blkIndent || o.sCount[L] - o.blkIndent >= 4)
        break;
      for (V = !1, c = 0, h = H.length; c < h; c++)
        if (H[c](o, L, a, !0)) {
          V = !0;
          break;
        }
      if (V)
        break;
      if (g) {
        if (q = n(o, L), q < 0)
          break;
        j = o.bMarks[L] + o.tShift[L];
      } else if (q = t(o, L), q < 0)
        break;
      if (_ !== o.src.charCodeAt(q - 1))
        break;
    }
    return g ? J = o.push("ordered_list_close", "ol", -1) : J = o.push("bullet_list_close", "ul", -1), J.markup = String.fromCharCode(_), k[1] = L, o.line = L, o.parentType = O, K && r(o, y), !0;
  }, _l;
}
var yl, sh;
function kbe() {
  if (sh) return yl;
  sh = 1;
  var e = nt().normalizeReference, t = nt().isSpace;
  return yl = function(r, s, o, i) {
    var a, l, u, f, c, p, d, m, g, C, h, k, y, _, E, x, M = 0, $ = r.bMarks[s] + r.tShift[s], O = r.eMarks[s], D = s + 1;
    if (r.sCount[s] - r.blkIndent >= 4 || r.src.charCodeAt($) !== 91)
      return !1;
    for (; ++$ < O; )
      if (r.src.charCodeAt($) === 93 && r.src.charCodeAt($ - 1) !== 92) {
        if ($ + 1 === O || r.src.charCodeAt($ + 1) !== 58)
          return !1;
        break;
      }
    for (f = r.lineMax, E = r.md.block.ruler.getRules("reference"), C = r.parentType, r.parentType = "reference"; D < f && !r.isEmpty(D); D++)
      if (!(r.sCount[D] - r.blkIndent > 3) && !(r.sCount[D] < 0)) {
        for (_ = !1, p = 0, d = E.length; p < d; p++)
          if (E[p](r, D, f, !0)) {
            _ = !0;
            break;
          }
        if (_)
          break;
      }
    for (y = r.getLines(s, D, r.blkIndent, !1).trim(), O = y.length, $ = 1; $ < O; $++) {
      if (a = y.charCodeAt($), a === 91)
        return !1;
      if (a === 93) {
        g = $;
        break;
      } else a === 10 ? M++ : a === 92 && ($++, $ < O && y.charCodeAt($) === 10 && M++);
    }
    if (g < 0 || y.charCodeAt(g + 1) !== 58)
      return !1;
    for ($ = g + 2; $ < O; $++)
      if (a = y.charCodeAt($), a === 10)
        M++;
      else if (!t(a)) break;
    if (h = r.md.helpers.parseLinkDestination(y, $, O), !h.ok || (c = r.md.normalizeLink(h.str), !r.md.validateLink(c)))
      return !1;
    for ($ = h.pos, M += h.lines, l = $, u = M, k = $; $ < O; $++)
      if (a = y.charCodeAt($), a === 10)
        M++;
      else if (!t(a)) break;
    for (h = r.md.helpers.parseLinkTitle(y, $, O), $ < O && k !== $ && h.ok ? (x = h.str, $ = h.pos, M += h.lines) : (x = "", $ = l, M = u); $ < O && (a = y.charCodeAt($), !!t(a)); )
      $++;
    if ($ < O && y.charCodeAt($) !== 10 && x)
      for (x = "", $ = l, M = u; $ < O && (a = y.charCodeAt($), !!t(a)); )
        $++;
    return $ < O && y.charCodeAt($) !== 10 || (m = e(y.slice(1, g)), !m) ? !1 : (i || (typeof r.env.references > "u" && (r.env.references = {}), typeof r.env.references[m] > "u" && (r.env.references[m] = { title: x, href: c }), r.parentType = C, r.line = s + M + 1), !0);
  }, yl;
}
var wl, ih;
function Cbe() {
  return ih || (ih = 1, wl = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "section",
    "source",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul"
  ]), wl;
}
var Hs = {}, ah;
function Z_() {
  if (ah) return Hs;
  ah = 1;
  var e = "[a-zA-Z_:][a-zA-Z0-9:._-]*", t = "[^\"'=<>`\\x00-\\x20]+", n = "'[^']*'", r = '"[^"]*"', s = "(?:" + t + "|" + n + "|" + r + ")", o = "(?:\\s+" + e + "(?:\\s*=\\s*" + s + ")?)", i = "<[A-Za-z][A-Za-z0-9\\-]*" + o + "*\\s*\\/?>", a = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", l = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", u = "<[?][\\s\\S]*?[?]>", f = "<![A-Z]+\\s+[^>]*>", c = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", p = new RegExp("^(?:" + i + "|" + a + "|" + l + "|" + u + "|" + f + "|" + c + ")"), d = new RegExp("^(?:" + i + "|" + a + ")");
  return Hs.HTML_TAG_RE = p, Hs.HTML_OPEN_CLOSE_TAG_RE = d, Hs;
}
var kl, lh;
function xbe() {
  if (lh) return kl;
  lh = 1;
  var e = Cbe(), t = Z_().HTML_OPEN_CLOSE_TAG_RE, n = [
    [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
    [/^<!--/, /-->/, !0],
    [/^<\?/, /\?>/, !0],
    [/^<![A-Z]/, />/, !0],
    [/^<!\[CDATA\[/, /\]\]>/, !0],
    [new RegExp("^</?(" + e.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
    [new RegExp(t.source + "\\s*$"), /^$/, !1]
  ];
  return kl = function(s, o, i, a) {
    var l, u, f, c, p = s.bMarks[o] + s.tShift[o], d = s.eMarks[o];
    if (s.sCount[o] - s.blkIndent >= 4 || !s.md.options.html || s.src.charCodeAt(p) !== 60)
      return !1;
    for (c = s.src.slice(p, d), l = 0; l < n.length && !n[l][0].test(c); l++)
      ;
    if (l === n.length)
      return !1;
    if (a)
      return n[l][2];
    if (u = o + 1, !n[l][1].test(c)) {
      for (; u < i && !(s.sCount[u] < s.blkIndent); u++)
        if (p = s.bMarks[u] + s.tShift[u], d = s.eMarks[u], c = s.src.slice(p, d), n[l][1].test(c)) {
          c.length !== 0 && u++;
          break;
        }
    }
    return s.line = u, f = s.push("html_block", "", 0), f.map = [o, u], f.content = s.getLines(o, u, s.blkIndent, !0), !0;
  }, kl;
}
var Cl, ch;
function Ebe() {
  if (ch) return Cl;
  ch = 1;
  var e = nt().isSpace;
  return Cl = function(n, r, s, o) {
    var i, a, l, u, f = n.bMarks[r] + n.tShift[r], c = n.eMarks[r];
    if (n.sCount[r] - n.blkIndent >= 4 || (i = n.src.charCodeAt(f), i !== 35 || f >= c))
      return !1;
    for (a = 1, i = n.src.charCodeAt(++f); i === 35 && f < c && a <= 6; )
      a++, i = n.src.charCodeAt(++f);
    return a > 6 || f < c && !e(i) ? !1 : (o || (c = n.skipSpacesBack(c, f), l = n.skipCharsBack(c, 35, f), l > f && e(n.src.charCodeAt(l - 1)) && (c = l), n.line = r + 1, u = n.push("heading_open", "h" + String(a), 1), u.markup = "########".slice(0, a), u.map = [r, n.line], u = n.push("inline", "", 0), u.content = n.src.slice(f, c).trim(), u.map = [r, n.line], u.children = [], u = n.push("heading_close", "h" + String(a), -1), u.markup = "########".slice(0, a)), !0);
  }, Cl;
}
var xl, uh;
function Sbe() {
  return uh || (uh = 1, xl = function(t, n, r) {
    var s, o, i, a, l, u, f, c, p, d = n + 1, m, g = t.md.block.ruler.getRules("paragraph");
    if (t.sCount[n] - t.blkIndent >= 4)
      return !1;
    for (m = t.parentType, t.parentType = "paragraph"; d < r && !t.isEmpty(d); d++)
      if (!(t.sCount[d] - t.blkIndent > 3)) {
        if (t.sCount[d] >= t.blkIndent && (u = t.bMarks[d] + t.tShift[d], f = t.eMarks[d], u < f && (p = t.src.charCodeAt(u), (p === 45 || p === 61) && (u = t.skipChars(u, p), u = t.skipSpaces(u), u >= f)))) {
          c = p === 61 ? 1 : 2;
          break;
        }
        if (!(t.sCount[d] < 0)) {
          for (o = !1, i = 0, a = g.length; i < a; i++)
            if (g[i](t, d, r, !0)) {
              o = !0;
              break;
            }
          if (o)
            break;
        }
      }
    return c ? (s = t.getLines(n, d, t.blkIndent, !1).trim(), t.line = d + 1, l = t.push("heading_open", "h" + String(c), 1), l.markup = String.fromCharCode(p), l.map = [n, t.line], l = t.push("inline", "", 0), l.content = s, l.map = [n, t.line - 1], l.children = [], l = t.push("heading_close", "h" + String(c), -1), l.markup = String.fromCharCode(p), t.parentType = m, !0) : !1;
  }), xl;
}
var El, fh;
function Abe() {
  return fh || (fh = 1, El = function(t, n, r) {
    var s, o, i, a, l, u, f = n + 1, c = t.md.block.ruler.getRules("paragraph");
    for (u = t.parentType, t.parentType = "paragraph"; f < r && !t.isEmpty(f); f++)
      if (!(t.sCount[f] - t.blkIndent > 3) && !(t.sCount[f] < 0)) {
        for (o = !1, i = 0, a = c.length; i < a; i++)
          if (c[i](t, f, r, !0)) {
            o = !0;
            break;
          }
        if (o)
          break;
      }
    return s = t.getLines(n, f, t.blkIndent, !1).trim(), t.line = f, l = t.push("paragraph_open", "p", 1), l.map = [n, t.line], l = t.push("inline", "", 0), l.content = s, l.map = [n, t.line], l.children = [], l = t.push("paragraph_close", "p", -1), t.parentType = u, !0;
  }), El;
}
var Sl, dh;
function Tbe() {
  if (dh) return Sl;
  dh = 1;
  var e = zf(), t = nt().isSpace;
  function n(r, s, o, i) {
    var a, l, u, f, c, p, d, m;
    for (this.src = r, this.md = s, this.env = o, this.tokens = i, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0, this.result = "", l = this.src, m = !1, u = f = p = d = 0, c = l.length; f < c; f++) {
      if (a = l.charCodeAt(f), !m)
        if (t(a)) {
          p++, a === 9 ? d += 4 - d % 4 : d++;
          continue;
        } else
          m = !0;
      (a === 10 || f === c - 1) && (a !== 10 && f++, this.bMarks.push(u), this.eMarks.push(f), this.tShift.push(p), this.sCount.push(d), this.bsCount.push(0), m = !1, p = 0, d = 0, u = f + 1);
    }
    this.bMarks.push(l.length), this.eMarks.push(l.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
  }
  return n.prototype.push = function(r, s, o) {
    var i = new e(r, s, o);
    return i.block = !0, o < 0 && this.level--, i.level = this.level, o > 0 && this.level++, this.tokens.push(i), i;
  }, n.prototype.isEmpty = function(s) {
    return this.bMarks[s] + this.tShift[s] >= this.eMarks[s];
  }, n.prototype.skipEmptyLines = function(s) {
    for (var o = this.lineMax; s < o && !(this.bMarks[s] + this.tShift[s] < this.eMarks[s]); s++)
      ;
    return s;
  }, n.prototype.skipSpaces = function(s) {
    for (var o, i = this.src.length; s < i && (o = this.src.charCodeAt(s), !!t(o)); s++)
      ;
    return s;
  }, n.prototype.skipSpacesBack = function(s, o) {
    if (s <= o)
      return s;
    for (; s > o; )
      if (!t(this.src.charCodeAt(--s)))
        return s + 1;
    return s;
  }, n.prototype.skipChars = function(s, o) {
    for (var i = this.src.length; s < i && this.src.charCodeAt(s) === o; s++)
      ;
    return s;
  }, n.prototype.skipCharsBack = function(s, o, i) {
    if (s <= i)
      return s;
    for (; s > i; )
      if (o !== this.src.charCodeAt(--s))
        return s + 1;
    return s;
  }, n.prototype.getLines = function(s, o, i, a) {
    var l, u, f, c, p, d, m, g = s;
    if (s >= o)
      return "";
    for (d = new Array(o - s), l = 0; g < o; g++, l++) {
      for (u = 0, m = c = this.bMarks[g], g + 1 < o || a ? p = this.eMarks[g] + 1 : p = this.eMarks[g]; c < p && u < i; ) {
        if (f = this.src.charCodeAt(c), t(f))
          f === 9 ? u += 4 - (u + this.bsCount[g]) % 4 : u++;
        else if (c - m < this.tShift[g])
          u++;
        else
          break;
        c++;
      }
      u > i ? d[l] = new Array(u - i + 1).join(" ") + this.src.slice(c, p) : d[l] = this.src.slice(c, p);
    }
    return d.join("");
  }, n.prototype.Token = e, Sl = n, Sl;
}
var Al, ph;
function Mbe() {
  if (ph) return Al;
  ph = 1;
  var e = qf(), t = [
    // First 2 params - rule name & source. Secondary array - list of rules,
    // which can be terminated by this one.
    ["table", mbe(), ["paragraph", "reference"]],
    ["code", vbe()],
    ["fence", bbe(), ["paragraph", "reference", "blockquote", "list"]],
    ["blockquote", _be(), ["paragraph", "reference", "blockquote", "list"]],
    ["hr", ybe(), ["paragraph", "reference", "blockquote", "list"]],
    ["list", wbe(), ["paragraph", "reference", "blockquote"]],
    ["reference", kbe()],
    ["html_block", xbe(), ["paragraph", "reference", "blockquote"]],
    ["heading", Ebe(), ["paragraph", "reference", "blockquote"]],
    ["lheading", Sbe()],
    ["paragraph", Abe()]
  ];
  function n() {
    this.ruler = new e();
    for (var r = 0; r < t.length; r++)
      this.ruler.push(t[r][0], t[r][1], { alt: (t[r][2] || []).slice() });
  }
  return n.prototype.tokenize = function(r, s, o) {
    for (var i, a, l, u = this.ruler.getRules(""), f = u.length, c = s, p = !1, d = r.md.options.maxNesting; c < o && (r.line = c = r.skipEmptyLines(c), !(c >= o || r.sCount[c] < r.blkIndent)); ) {
      if (r.level >= d) {
        r.line = o;
        break;
      }
      for (l = r.line, a = 0; a < f; a++)
        if (i = u[a](r, c, o, !1), i) {
          if (l >= r.line)
            throw new Error("block rule didn't increment state.line");
          break;
        }
      if (!i) throw new Error("none of the block rules matched");
      r.tight = !p, r.isEmpty(r.line - 1) && (p = !0), c = r.line, c < o && r.isEmpty(c) && (p = !0, c++, r.line = c);
    }
  }, n.prototype.parse = function(r, s, o, i) {
    var a;
    r && (a = new this.State(r, s, o, i), this.tokenize(a, a.line, a.lineMax));
  }, n.prototype.State = Tbe(), Al = n, Al;
}
var Tl, hh;
function $be() {
  if (hh) return Tl;
  hh = 1;
  function e(t) {
    switch (t) {
      case 10:
      case 33:
      case 35:
      case 36:
      case 37:
      case 38:
      case 42:
      case 43:
      case 45:
      case 58:
      case 60:
      case 61:
      case 62:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 125:
      case 126:
        return !0;
      default:
        return !1;
    }
  }
  return Tl = function(n, r) {
    for (var s = n.pos; s < n.posMax && !e(n.src.charCodeAt(s)); )
      s++;
    return s === n.pos ? !1 : (r || (n.pending += n.src.slice(n.pos, s)), n.pos = s, !0);
  }, Tl;
}
var Ml, gh;
function Ibe() {
  if (gh) return Ml;
  gh = 1;
  var e = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
  return Ml = function(n, r) {
    var s, o, i, a, l, u, f, c;
    return !n.md.options.linkify || n.linkLevel > 0 || (s = n.pos, o = n.posMax, s + 3 > o) || n.src.charCodeAt(s) !== 58 || n.src.charCodeAt(s + 1) !== 47 || n.src.charCodeAt(s + 2) !== 47 || (i = n.pending.match(e), !i) || (a = i[1], l = n.md.linkify.matchAtStart(n.src.slice(s - a.length)), !l) || (u = l.url, u.length <= a.length) || (u = u.replace(/\*+$/, ""), f = n.md.normalizeLink(u), !n.md.validateLink(f)) ? !1 : (r || (n.pending = n.pending.slice(0, -a.length), c = n.push("link_open", "a", 1), c.attrs = [["href", f]], c.markup = "linkify", c.info = "auto", c = n.push("text", "", 0), c.content = n.md.normalizeLinkText(u), c = n.push("link_close", "a", -1), c.markup = "linkify", c.info = "auto"), n.pos += u.length - a.length, !0);
  }, Ml;
}
var $l, mh;
function Lbe() {
  if (mh) return $l;
  mh = 1;
  var e = nt().isSpace;
  return $l = function(n, r) {
    var s, o, i, a = n.pos;
    if (n.src.charCodeAt(a) !== 10)
      return !1;
    if (s = n.pending.length - 1, o = n.posMax, !r)
      if (s >= 0 && n.pending.charCodeAt(s) === 32)
        if (s >= 1 && n.pending.charCodeAt(s - 1) === 32) {
          for (i = s - 1; i >= 1 && n.pending.charCodeAt(i - 1) === 32; ) i--;
          n.pending = n.pending.slice(0, i), n.push("hardbreak", "br", 0);
        } else
          n.pending = n.pending.slice(0, -1), n.push("softbreak", "br", 0);
      else
        n.push("softbreak", "br", 0);
    for (a++; a < o && e(n.src.charCodeAt(a)); )
      a++;
    return n.pos = a, !0;
  }, $l;
}
var Il, vh;
function Obe() {
  if (vh) return Il;
  vh = 1;
  for (var e = nt().isSpace, t = [], n = 0; n < 256; n++)
    t.push(0);
  return "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(r) {
    t[r.charCodeAt(0)] = 1;
  }), Il = function(s, o) {
    var i, a, l, u, f, c = s.pos, p = s.posMax;
    if (s.src.charCodeAt(c) !== 92 || (c++, c >= p)) return !1;
    if (i = s.src.charCodeAt(c), i === 10) {
      for (o || s.push("hardbreak", "br", 0), c++; c < p && (i = s.src.charCodeAt(c), !!e(i)); )
        c++;
      return s.pos = c, !0;
    }
    return u = s.src[c], i >= 55296 && i <= 56319 && c + 1 < p && (a = s.src.charCodeAt(c + 1), a >= 56320 && a <= 57343 && (u += s.src[c + 1], c++)), l = "\\" + u, o || (f = s.push("text_special", "", 0), i < 256 && t[i] !== 0 ? f.content = u : f.content = l, f.markup = l, f.info = "escape"), s.pos = c + 1, !0;
  }, Il;
}
var Ll, bh;
function Rbe() {
  return bh || (bh = 1, Ll = function(t, n) {
    var r, s, o, i, a, l, u, f, c = t.pos, p = t.src.charCodeAt(c);
    if (p !== 96)
      return !1;
    for (r = c, c++, s = t.posMax; c < s && t.src.charCodeAt(c) === 96; )
      c++;
    if (o = t.src.slice(r, c), u = o.length, t.backticksScanned && (t.backticks[u] || 0) <= r)
      return n || (t.pending += o), t.pos += u, !0;
    for (l = c; (a = t.src.indexOf("`", l)) !== -1; ) {
      for (l = a + 1; l < s && t.src.charCodeAt(l) === 96; )
        l++;
      if (f = l - a, f === u)
        return n || (i = t.push("code_inline", "code", 0), i.markup = o, i.content = t.src.slice(c, a).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")), t.pos = l, !0;
      t.backticks[f] = a;
    }
    return t.backticksScanned = !0, n || (t.pending += o), t.pos += u, !0;
  }), Ll;
}
var js = {}, _h;
function yh() {
  if (_h) return js;
  _h = 1, js.tokenize = function(n, r) {
    var s, o, i, a, l, u = n.pos, f = n.src.charCodeAt(u);
    if (r || f !== 126 || (o = n.scanDelims(n.pos, !0), a = o.length, l = String.fromCharCode(f), a < 2))
      return !1;
    for (a % 2 && (i = n.push("text", "", 0), i.content = l, a--), s = 0; s < a; s += 2)
      i = n.push("text", "", 0), i.content = l + l, n.delimiters.push({
        marker: f,
        length: 0,
        // disable "rule of 3" length checks meant for emphasis
        token: n.tokens.length - 1,
        end: -1,
        open: o.can_open,
        close: o.can_close
      });
    return n.pos += o.length, !0;
  };
  function e(t, n) {
    var r, s, o, i, a, l = [], u = n.length;
    for (r = 0; r < u; r++)
      o = n[r], o.marker === 126 && o.end !== -1 && (i = n[o.end], a = t.tokens[o.token], a.type = "s_open", a.tag = "s", a.nesting = 1, a.markup = "~~", a.content = "", a = t.tokens[i.token], a.type = "s_close", a.tag = "s", a.nesting = -1, a.markup = "~~", a.content = "", t.tokens[i.token - 1].type === "text" && t.tokens[i.token - 1].content === "~" && l.push(i.token - 1));
    for (; l.length; ) {
      for (r = l.pop(), s = r + 1; s < t.tokens.length && t.tokens[s].type === "s_close"; )
        s++;
      s--, r !== s && (a = t.tokens[s], t.tokens[s] = t.tokens[r], t.tokens[r] = a);
    }
  }
  return js.postProcess = function(n) {
    var r, s = n.tokens_meta, o = n.tokens_meta.length;
    for (e(n, n.delimiters), r = 0; r < o; r++)
      s[r] && s[r].delimiters && e(n, s[r].delimiters);
  }, js;
}
var Vs = {}, wh;
function kh() {
  if (wh) return Vs;
  wh = 1, Vs.tokenize = function(n, r) {
    var s, o, i, a = n.pos, l = n.src.charCodeAt(a);
    if (r || l !== 95 && l !== 42)
      return !1;
    for (o = n.scanDelims(n.pos, l === 42), s = 0; s < o.length; s++)
      i = n.push("text", "", 0), i.content = String.fromCharCode(l), n.delimiters.push({
        // Char code of the starting marker (number).
        //
        marker: l,
        // Total length of these series of delimiters.
        //
        length: o.length,
        // A position of the token this delimiter corresponds to.
        //
        token: n.tokens.length - 1,
        // If this delimiter is matched as a valid opener, `end` will be
        // equal to its position, otherwise it's `-1`.
        //
        end: -1,
        // Boolean flags that determine if this delimiter could open or close
        // an emphasis.
        //
        open: o.can_open,
        close: o.can_close
      });
    return n.pos += o.length, !0;
  };
  function e(t, n) {
    var r, s, o, i, a, l, u = n.length;
    for (r = u - 1; r >= 0; r--)
      s = n[r], !(s.marker !== 95 && s.marker !== 42) && s.end !== -1 && (o = n[s.end], l = r > 0 && n[r - 1].end === s.end + 1 && // check that first two markers match and adjacent
      n[r - 1].marker === s.marker && n[r - 1].token === s.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
      n[s.end + 1].token === o.token + 1, a = String.fromCharCode(s.marker), i = t.tokens[s.token], i.type = l ? "strong_open" : "em_open", i.tag = l ? "strong" : "em", i.nesting = 1, i.markup = l ? a + a : a, i.content = "", i = t.tokens[o.token], i.type = l ? "strong_close" : "em_close", i.tag = l ? "strong" : "em", i.nesting = -1, i.markup = l ? a + a : a, i.content = "", l && (t.tokens[n[r - 1].token].content = "", t.tokens[n[s.end + 1].token].content = "", r--));
  }
  return Vs.postProcess = function(n) {
    var r, s = n.tokens_meta, o = n.tokens_meta.length;
    for (e(n, n.delimiters), r = 0; r < o; r++)
      s[r] && s[r].delimiters && e(n, s[r].delimiters);
  }, Vs;
}
var Ol, Ch;
function Pbe() {
  if (Ch) return Ol;
  Ch = 1;
  var e = nt().normalizeReference, t = nt().isSpace;
  return Ol = function(r, s) {
    var o, i, a, l, u, f, c, p, d, m = "", g = "", C = r.pos, h = r.posMax, k = r.pos, y = !0;
    if (r.src.charCodeAt(r.pos) !== 91 || (u = r.pos + 1, l = r.md.helpers.parseLinkLabel(r, r.pos, !0), l < 0))
      return !1;
    if (f = l + 1, f < h && r.src.charCodeAt(f) === 40) {
      for (y = !1, f++; f < h && (i = r.src.charCodeAt(f), !(!t(i) && i !== 10)); f++)
        ;
      if (f >= h)
        return !1;
      if (k = f, c = r.md.helpers.parseLinkDestination(r.src, f, r.posMax), c.ok) {
        for (m = r.md.normalizeLink(c.str), r.md.validateLink(m) ? f = c.pos : m = "", k = f; f < h && (i = r.src.charCodeAt(f), !(!t(i) && i !== 10)); f++)
          ;
        if (c = r.md.helpers.parseLinkTitle(r.src, f, r.posMax), f < h && k !== f && c.ok)
          for (g = c.str, f = c.pos; f < h && (i = r.src.charCodeAt(f), !(!t(i) && i !== 10)); f++)
            ;
      }
      (f >= h || r.src.charCodeAt(f) !== 41) && (y = !0), f++;
    }
    if (y) {
      if (typeof r.env.references > "u")
        return !1;
      if (f < h && r.src.charCodeAt(f) === 91 ? (k = f + 1, f = r.md.helpers.parseLinkLabel(r, f), f >= 0 ? a = r.src.slice(k, f++) : f = l + 1) : f = l + 1, a || (a = r.src.slice(u, l)), p = r.env.references[e(a)], !p)
        return r.pos = C, !1;
      m = p.href, g = p.title;
    }
    return s || (r.pos = u, r.posMax = l, d = r.push("link_open", "a", 1), d.attrs = o = [["href", m]], g && o.push(["title", g]), r.linkLevel++, r.md.inline.tokenize(r), r.linkLevel--, d = r.push("link_close", "a", -1)), r.pos = f, r.posMax = h, !0;
  }, Ol;
}
var Rl, xh;
function Dbe() {
  if (xh) return Rl;
  xh = 1;
  var e = nt().normalizeReference, t = nt().isSpace;
  return Rl = function(r, s) {
    var o, i, a, l, u, f, c, p, d, m, g, C, h, k = "", y = r.pos, _ = r.posMax;
    if (r.src.charCodeAt(r.pos) !== 33 || r.src.charCodeAt(r.pos + 1) !== 91 || (f = r.pos + 2, u = r.md.helpers.parseLinkLabel(r, r.pos + 1, !1), u < 0))
      return !1;
    if (c = u + 1, c < _ && r.src.charCodeAt(c) === 40) {
      for (c++; c < _ && (i = r.src.charCodeAt(c), !(!t(i) && i !== 10)); c++)
        ;
      if (c >= _)
        return !1;
      for (h = c, d = r.md.helpers.parseLinkDestination(r.src, c, r.posMax), d.ok && (k = r.md.normalizeLink(d.str), r.md.validateLink(k) ? c = d.pos : k = ""), h = c; c < _ && (i = r.src.charCodeAt(c), !(!t(i) && i !== 10)); c++)
        ;
      if (d = r.md.helpers.parseLinkTitle(r.src, c, r.posMax), c < _ && h !== c && d.ok)
        for (m = d.str, c = d.pos; c < _ && (i = r.src.charCodeAt(c), !(!t(i) && i !== 10)); c++)
          ;
      else
        m = "";
      if (c >= _ || r.src.charCodeAt(c) !== 41)
        return r.pos = y, !1;
      c++;
    } else {
      if (typeof r.env.references > "u")
        return !1;
      if (c < _ && r.src.charCodeAt(c) === 91 ? (h = c + 1, c = r.md.helpers.parseLinkLabel(r, c), c >= 0 ? l = r.src.slice(h, c++) : c = u + 1) : c = u + 1, l || (l = r.src.slice(f, u)), p = r.env.references[e(l)], !p)
        return r.pos = y, !1;
      k = p.href, m = p.title;
    }
    return s || (a = r.src.slice(f, u), r.md.inline.parse(
      a,
      r.md,
      r.env,
      C = []
    ), g = r.push("image", "img", 0), g.attrs = o = [["src", k], ["alt", ""]], g.children = C, g.content = a, m && o.push(["title", m])), r.pos = c, r.posMax = _, !0;
  }, Rl;
}
var Pl, Eh;
function Nbe() {
  if (Eh) return Pl;
  Eh = 1;
  var e = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, t = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
  return Pl = function(r, s) {
    var o, i, a, l, u, f, c = r.pos;
    if (r.src.charCodeAt(c) !== 60)
      return !1;
    for (u = r.pos, f = r.posMax; ; ) {
      if (++c >= f || (l = r.src.charCodeAt(c), l === 60)) return !1;
      if (l === 62) break;
    }
    return o = r.src.slice(u + 1, c), t.test(o) ? (i = r.md.normalizeLink(o), r.md.validateLink(i) ? (s || (a = r.push("link_open", "a", 1), a.attrs = [["href", i]], a.markup = "autolink", a.info = "auto", a = r.push("text", "", 0), a.content = r.md.normalizeLinkText(o), a = r.push("link_close", "a", -1), a.markup = "autolink", a.info = "auto"), r.pos += o.length + 2, !0) : !1) : e.test(o) ? (i = r.md.normalizeLink("mailto:" + o), r.md.validateLink(i) ? (s || (a = r.push("link_open", "a", 1), a.attrs = [["href", i]], a.markup = "autolink", a.info = "auto", a = r.push("text", "", 0), a.content = r.md.normalizeLinkText(o), a = r.push("link_close", "a", -1), a.markup = "autolink", a.info = "auto"), r.pos += o.length + 2, !0) : !1) : !1;
  }, Pl;
}
var Dl, Sh;
function Bbe() {
  if (Sh) return Dl;
  Sh = 1;
  var e = Z_().HTML_TAG_RE;
  function t(s) {
    return /^<a[>\s]/i.test(s);
  }
  function n(s) {
    return /^<\/a\s*>/i.test(s);
  }
  function r(s) {
    var o = s | 32;
    return o >= 97 && o <= 122;
  }
  return Dl = function(o, i) {
    var a, l, u, f, c = o.pos;
    return !o.md.options.html || (u = o.posMax, o.src.charCodeAt(c) !== 60 || c + 2 >= u) || (a = o.src.charCodeAt(c + 1), a !== 33 && a !== 63 && a !== 47 && !r(a)) || (l = o.src.slice(c).match(e), !l) ? !1 : (i || (f = o.push("html_inline", "", 0), f.content = l[0], t(f.content) && o.linkLevel++, n(f.content) && o.linkLevel--), o.pos += l[0].length, !0);
  }, Dl;
}
var Nl, Ah;
function Fbe() {
  if (Ah) return Nl;
  Ah = 1;
  var e = V_(), t = nt().has, n = nt().isValidEntityCode, r = nt().fromCodePoint, s = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, o = /^&([a-z][a-z0-9]{1,31});/i;
  return Nl = function(a, l) {
    var u, f, c, p, d = a.pos, m = a.posMax;
    if (a.src.charCodeAt(d) !== 38 || d + 1 >= m) return !1;
    if (u = a.src.charCodeAt(d + 1), u === 35) {
      if (c = a.src.slice(d).match(s), c)
        return l || (f = c[1][0].toLowerCase() === "x" ? parseInt(c[1].slice(1), 16) : parseInt(c[1], 10), p = a.push("text_special", "", 0), p.content = n(f) ? r(f) : r(65533), p.markup = c[0], p.info = "entity"), a.pos += c[0].length, !0;
    } else if (c = a.src.slice(d).match(o), c && t(e, c[1]))
      return l || (p = a.push("text_special", "", 0), p.content = e[c[1]], p.markup = c[0], p.info = "entity"), a.pos += c[0].length, !0;
    return !1;
  }, Nl;
}
var Bl, Th;
function qbe() {
  if (Th) return Bl;
  Th = 1;
  function e(t) {
    var n, r, s, o, i, a, l, u, f = {}, c = t.length;
    if (c) {
      var p = 0, d = -2, m = [];
      for (n = 0; n < c; n++)
        if (s = t[n], m.push(0), (t[p].marker !== s.marker || d !== s.token - 1) && (p = n), d = s.token, s.length = s.length || 0, !!s.close) {
          for (f.hasOwnProperty(s.marker) || (f[s.marker] = [-1, -1, -1, -1, -1, -1]), i = f[s.marker][(s.open ? 3 : 0) + s.length % 3], r = p - m[p] - 1, a = r; r > i; r -= m[r] + 1)
            if (o = t[r], o.marker === s.marker && o.open && o.end < 0 && (l = !1, (o.close || s.open) && (o.length + s.length) % 3 === 0 && (o.length % 3 !== 0 || s.length % 3 !== 0) && (l = !0), !l)) {
              u = r > 0 && !t[r - 1].open ? m[r - 1] + 1 : 0, m[n] = n - r + u, m[r] = u, s.open = !1, o.end = n, o.close = !1, a = -1, d = -2;
              break;
            }
          a !== -1 && (f[s.marker][(s.open ? 3 : 0) + (s.length || 0) % 3] = a);
        }
    }
  }
  return Bl = function(n) {
    var r, s = n.tokens_meta, o = n.tokens_meta.length;
    for (e(n.delimiters), r = 0; r < o; r++)
      s[r] && s[r].delimiters && e(s[r].delimiters);
  }, Bl;
}
var Fl, Mh;
function zbe() {
  return Mh || (Mh = 1, Fl = function(t) {
    var n, r, s = 0, o = t.tokens, i = t.tokens.length;
    for (n = r = 0; n < i; n++)
      o[n].nesting < 0 && s--, o[n].level = s, o[n].nesting > 0 && s++, o[n].type === "text" && n + 1 < i && o[n + 1].type === "text" ? o[n + 1].content = o[n].content + o[n + 1].content : (n !== r && (o[r] = o[n]), r++);
    n !== r && (o.length = r);
  }), Fl;
}
var ql, $h;
function Hbe() {
  if ($h) return ql;
  $h = 1;
  var e = zf(), t = nt().isWhiteSpace, n = nt().isPunctChar, r = nt().isMdAsciiPunct;
  function s(o, i, a, l) {
    this.src = o, this.env = a, this.md = i, this.tokens = l, this.tokens_meta = Array(l.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
  }
  return s.prototype.pushPending = function() {
    var o = new e("text", "", 0);
    return o.content = this.pending, o.level = this.pendingLevel, this.tokens.push(o), this.pending = "", o;
  }, s.prototype.push = function(o, i, a) {
    this.pending && this.pushPending();
    var l = new e(o, i, a), u = null;
    return a < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), l.level = this.level, a > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], u = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(l), this.tokens_meta.push(u), l;
  }, s.prototype.scanDelims = function(o, i) {
    var a = o, l, u, f, c, p, d, m, g, C, h = !0, k = !0, y = this.posMax, _ = this.src.charCodeAt(o);
    for (l = o > 0 ? this.src.charCodeAt(o - 1) : 32; a < y && this.src.charCodeAt(a) === _; )
      a++;
    return f = a - o, u = a < y ? this.src.charCodeAt(a) : 32, m = r(l) || n(String.fromCharCode(l)), C = r(u) || n(String.fromCharCode(u)), d = t(l), g = t(u), g ? h = !1 : C && (d || m || (h = !1)), d ? k = !1 : m && (g || C || (k = !1)), i ? (c = h, p = k) : (c = h && (!k || m), p = k && (!h || C)), {
      can_open: c,
      can_close: p,
      length: f
    };
  }, s.prototype.Token = e, ql = s, ql;
}
var zl, Ih;
function jbe() {
  if (Ih) return zl;
  Ih = 1;
  var e = qf(), t = [
    ["text", $be()],
    ["linkify", Ibe()],
    ["newline", Lbe()],
    ["escape", Obe()],
    ["backticks", Rbe()],
    ["strikethrough", yh().tokenize],
    ["emphasis", kh().tokenize],
    ["link", Pbe()],
    ["image", Dbe()],
    ["autolink", Nbe()],
    ["html_inline", Bbe()],
    ["entity", Fbe()]
  ], n = [
    ["balance_pairs", qbe()],
    ["strikethrough", yh().postProcess],
    ["emphasis", kh().postProcess],
    // rules for pairs separate '**' into its own text tokens, which may be left unused,
    // rule below merges unused segments back with the rest of the text
    ["fragments_join", zbe()]
  ];
  function r() {
    var s;
    for (this.ruler = new e(), s = 0; s < t.length; s++)
      this.ruler.push(t[s][0], t[s][1]);
    for (this.ruler2 = new e(), s = 0; s < n.length; s++)
      this.ruler2.push(n[s][0], n[s][1]);
  }
  return r.prototype.skipToken = function(s) {
    var o, i, a = s.pos, l = this.ruler.getRules(""), u = l.length, f = s.md.options.maxNesting, c = s.cache;
    if (typeof c[a] < "u") {
      s.pos = c[a];
      return;
    }
    if (s.level < f) {
      for (i = 0; i < u; i++)
        if (s.level++, o = l[i](s, !0), s.level--, o) {
          if (a >= s.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    } else
      s.pos = s.posMax;
    o || s.pos++, c[a] = s.pos;
  }, r.prototype.tokenize = function(s) {
    for (var o, i, a, l = this.ruler.getRules(""), u = l.length, f = s.posMax, c = s.md.options.maxNesting; s.pos < f; ) {
      if (a = s.pos, s.level < c) {
        for (i = 0; i < u; i++)
          if (o = l[i](s, !1), o) {
            if (a >= s.pos)
              throw new Error("inline rule didn't increment state.pos");
            break;
          }
      }
      if (o) {
        if (s.pos >= f)
          break;
        continue;
      }
      s.pending += s.src[s.pos++];
    }
    s.pending && s.pushPending();
  }, r.prototype.parse = function(s, o, i, a) {
    var l, u, f, c = new this.State(s, o, i, a);
    for (this.tokenize(c), u = this.ruler2.getRules(""), f = u.length, l = 0; l < f; l++)
      u[l](c);
  }, r.prototype.State = Hbe(), zl = r, zl;
}
var Hl, Lh;
function Vbe() {
  return Lh || (Lh = 1, Hl = function(e) {
    var t = {};
    e = e || {}, t.src_Any = K_().source, t.src_Cc = W_().source, t.src_Z = G_().source, t.src_P = Ff().source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
    var n = "[><｜]";
    return t.src_pseudo_letter = "(?:(?!" + n + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + n + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + n + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = // Allow letters & digits (http://test1)
    "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + n + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
  }), Hl;
}
var jl, Oh;
function Ube() {
  if (Oh) return jl;
  Oh = 1;
  function e(y) {
    var _ = Array.prototype.slice.call(arguments, 1);
    return _.forEach(function(E) {
      E && Object.keys(E).forEach(function(x) {
        y[x] = E[x];
      });
    }), y;
  }
  function t(y) {
    return Object.prototype.toString.call(y);
  }
  function n(y) {
    return t(y) === "[object String]";
  }
  function r(y) {
    return t(y) === "[object Object]";
  }
  function s(y) {
    return t(y) === "[object RegExp]";
  }
  function o(y) {
    return t(y) === "[object Function]";
  }
  function i(y) {
    return y.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }
  var a = {
    fuzzyLink: !0,
    fuzzyEmail: !0,
    fuzzyIP: !1
  };
  function l(y) {
    return Object.keys(y || {}).reduce(function(_, E) {
      return _ || a.hasOwnProperty(E);
    }, !1);
  }
  var u = {
    "http:": {
      validate: function(y, _, E) {
        var x = y.slice(_);
        return E.re.http || (E.re.http = new RegExp(
          "^\\/\\/" + E.re.src_auth + E.re.src_host_port_strict + E.re.src_path,
          "i"
        )), E.re.http.test(x) ? x.match(E.re.http)[0].length : 0;
      }
    },
    "https:": "http:",
    "ftp:": "http:",
    "//": {
      validate: function(y, _, E) {
        var x = y.slice(_);
        return E.re.no_http || (E.re.no_http = new RegExp(
          "^" + E.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
          // with code comments
          "(?:localhost|(?:(?:" + E.re.src_domain + ")\\.)+" + E.re.src_domain_root + ")" + E.re.src_port + E.re.src_host_terminator + E.re.src_path,
          "i"
        )), E.re.no_http.test(x) ? _ >= 3 && y[_ - 3] === ":" || _ >= 3 && y[_ - 3] === "/" ? 0 : x.match(E.re.no_http)[0].length : 0;
      }
    },
    "mailto:": {
      validate: function(y, _, E) {
        var x = y.slice(_);
        return E.re.mailto || (E.re.mailto = new RegExp(
          "^" + E.re.src_email_name + "@" + E.re.src_host_strict,
          "i"
        )), E.re.mailto.test(x) ? x.match(E.re.mailto)[0].length : 0;
      }
    }
  }, f = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", c = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
  function p(y) {
    y.__index__ = -1, y.__text_cache__ = "";
  }
  function d(y) {
    return function(_, E) {
      var x = _.slice(E);
      return y.test(x) ? x.match(y)[0].length : 0;
    };
  }
  function m() {
    return function(y, _) {
      _.normalize(y);
    };
  }
  function g(y) {
    var _ = y.re = Vbe()(y.__opts__), E = y.__tlds__.slice();
    y.onCompile(), y.__tlds_replaced__ || E.push(f), E.push(_.src_xn), _.src_tlds = E.join("|");
    function x(D) {
      return D.replace("%TLDS%", _.src_tlds);
    }
    _.email_fuzzy = RegExp(x(_.tpl_email_fuzzy), "i"), _.link_fuzzy = RegExp(x(_.tpl_link_fuzzy), "i"), _.link_no_ip_fuzzy = RegExp(x(_.tpl_link_no_ip_fuzzy), "i"), _.host_fuzzy_test = RegExp(x(_.tpl_host_fuzzy_test), "i");
    var M = [];
    y.__compiled__ = {};
    function $(D, B) {
      throw new Error('(LinkifyIt) Invalid schema "' + D + '": ' + B);
    }
    Object.keys(y.__schemas__).forEach(function(D) {
      var B = y.__schemas__[D];
      if (B !== null) {
        var N = { validate: null, link: null };
        if (y.__compiled__[D] = N, r(B)) {
          s(B.validate) ? N.validate = d(B.validate) : o(B.validate) ? N.validate = B.validate : $(D, B), o(B.normalize) ? N.normalize = B.normalize : B.normalize ? $(D, B) : N.normalize = m();
          return;
        }
        if (n(B)) {
          M.push(D);
          return;
        }
        $(D, B);
      }
    }), M.forEach(function(D) {
      y.__compiled__[y.__schemas__[D]] && (y.__compiled__[D].validate = y.__compiled__[y.__schemas__[D]].validate, y.__compiled__[D].normalize = y.__compiled__[y.__schemas__[D]].normalize);
    }), y.__compiled__[""] = { validate: null, normalize: m() };
    var O = Object.keys(y.__compiled__).filter(function(D) {
      return D.length > 0 && y.__compiled__[D];
    }).map(i).join("|");
    y.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + _.src_ZPCc + "))(" + O + ")", "i"), y.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + _.src_ZPCc + "))(" + O + ")", "ig"), y.re.schema_at_start = RegExp("^" + y.re.schema_search.source, "i"), y.re.pretest = RegExp(
      "(" + y.re.schema_test.source + ")|(" + y.re.host_fuzzy_test.source + ")|@",
      "i"
    ), p(y);
  }
  function C(y, _) {
    var E = y.__index__, x = y.__last_index__, M = y.__text_cache__.slice(E, x);
    this.schema = y.__schema__.toLowerCase(), this.index = E + _, this.lastIndex = x + _, this.raw = M, this.text = M, this.url = M;
  }
  function h(y, _) {
    var E = new C(y, _);
    return y.__compiled__[E.schema].normalize(E, y), E;
  }
  function k(y, _) {
    if (!(this instanceof k))
      return new k(y, _);
    _ || l(y) && (_ = y, y = {}), this.__opts__ = e({}, a, _), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = e({}, u, y), this.__compiled__ = {}, this.__tlds__ = c, this.__tlds_replaced__ = !1, this.re = {}, g(this);
  }
  return k.prototype.add = function(_, E) {
    return this.__schemas__[_] = E, g(this), this;
  }, k.prototype.set = function(_) {
    return this.__opts__ = e(this.__opts__, _), this;
  }, k.prototype.test = function(_) {
    if (this.__text_cache__ = _, this.__index__ = -1, !_.length)
      return !1;
    var E, x, M, $, O, D, B, N, oe;
    if (this.re.schema_test.test(_)) {
      for (B = this.re.schema_search, B.lastIndex = 0; (E = B.exec(_)) !== null; )
        if ($ = this.testSchemaAt(_, E[2], B.lastIndex), $) {
          this.__schema__ = E[2], this.__index__ = E.index + E[1].length, this.__last_index__ = E.index + E[0].length + $;
          break;
        }
    }
    return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (N = _.search(this.re.host_fuzzy_test), N >= 0 && (this.__index__ < 0 || N < this.__index__) && (x = _.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (O = x.index + x[1].length, (this.__index__ < 0 || O < this.__index__) && (this.__schema__ = "", this.__index__ = O, this.__last_index__ = x.index + x[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (oe = _.indexOf("@"), oe >= 0 && (M = _.match(this.re.email_fuzzy)) !== null && (O = M.index + M[1].length, D = M.index + M[0].length, (this.__index__ < 0 || O < this.__index__ || O === this.__index__ && D > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = O, this.__last_index__ = D))), this.__index__ >= 0;
  }, k.prototype.pretest = function(_) {
    return this.re.pretest.test(_);
  }, k.prototype.testSchemaAt = function(_, E, x) {
    return this.__compiled__[E.toLowerCase()] ? this.__compiled__[E.toLowerCase()].validate(_, x, this) : 0;
  }, k.prototype.match = function(_) {
    var E = 0, x = [];
    this.__index__ >= 0 && this.__text_cache__ === _ && (x.push(h(this, E)), E = this.__last_index__);
    for (var M = E ? _.slice(E) : _; this.test(M); )
      x.push(h(this, E)), M = M.slice(this.__last_index__), E += this.__last_index__;
    return x.length ? x : null;
  }, k.prototype.matchAtStart = function(_) {
    if (this.__text_cache__ = _, this.__index__ = -1, !_.length) return null;
    var E = this.re.schema_at_start.exec(_);
    if (!E) return null;
    var x = this.testSchemaAt(_, E[2], E[0].length);
    return x ? (this.__schema__ = E[2], this.__index__ = E.index + E[1].length, this.__last_index__ = E.index + E[0].length + x, h(this, 0)) : null;
  }, k.prototype.tlds = function(_, E) {
    return _ = Array.isArray(_) ? _ : [_], E ? (this.__tlds__ = this.__tlds__.concat(_).sort().filter(function(x, M, $) {
      return x !== $[M - 1];
    }).reverse(), g(this), this) : (this.__tlds__ = _.slice(), this.__tlds_replaced__ = !0, g(this), this);
  }, k.prototype.normalize = function(_) {
    _.schema || (_.url = "http://" + _.url), _.schema === "mailto:" && !/^mailto:/i.test(_.url) && (_.url = "mailto:" + _.url);
  }, k.prototype.onCompile = function() {
  }, jl = k, jl;
}
var qo = { exports: {} };
/*! https://mths.be/punycode v1.4.1 by @mathias */
var Kbe = qo.exports, Rh;
function Wbe() {
  return Rh || (Rh = 1, function(e, t) {
    (function(n) {
      var r = t && !t.nodeType && t, s = e && !e.nodeType && e, o = typeof ao == "object" && ao;
      (o.global === o || o.window === o || o.self === o) && (n = o);
      var i, a = 2147483647, l = 36, u = 1, f = 26, c = 38, p = 700, d = 72, m = 128, g = "-", C = /^xn--/, h = /[^\x20-\x7E]/, k = /[\x2E\u3002\uFF0E\uFF61]/g, y = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
      }, _ = l - u, E = Math.floor, x = String.fromCharCode, M;
      function $(L) {
        throw new RangeError(y[L]);
      }
      function O(L, Z) {
        for (var K = L.length, me = []; K--; )
          me[K] = Z(L[K]);
        return me;
      }
      function D(L, Z) {
        var K = L.split("@"), me = "";
        K.length > 1 && (me = K[0] + "@", L = K[1]), L = L.replace(k, ".");
        var Se = L.split("."), Re = O(Se, Z).join(".");
        return me + Re;
      }
      function B(L) {
        for (var Z = [], K = 0, me = L.length, Se, Re; K < me; )
          Se = L.charCodeAt(K++), Se >= 55296 && Se <= 56319 && K < me ? (Re = L.charCodeAt(K++), (Re & 64512) == 56320 ? Z.push(((Se & 1023) << 10) + (Re & 1023) + 65536) : (Z.push(Se), K--)) : Z.push(Se);
        return Z;
      }
      function N(L) {
        return O(L, function(Z) {
          var K = "";
          return Z > 65535 && (Z -= 65536, K += x(Z >>> 10 & 1023 | 55296), Z = 56320 | Z & 1023), K += x(Z), K;
        }).join("");
      }
      function oe(L) {
        return L - 48 < 10 ? L - 22 : L - 65 < 26 ? L - 65 : L - 97 < 26 ? L - 97 : l;
      }
      function q(L, Z) {
        return L + 22 + 75 * (L < 26) - ((Z != 0) << 5);
      }
      function ie(L, Z, K) {
        var me = 0;
        for (L = K ? E(L / p) : L >> 1, L += E(L / Z); L > _ * f >> 1; me += l)
          L = E(L / _);
        return E(me + (_ + 1) * L / (L + c));
      }
      function j(L) {
        var Z = [], K = L.length, me, Se = 0, Re = m, Pe = d, We, ze, dt, pe, Me, T, I, z, Y;
        for (We = L.lastIndexOf(g), We < 0 && (We = 0), ze = 0; ze < We; ++ze)
          L.charCodeAt(ze) >= 128 && $("not-basic"), Z.push(L.charCodeAt(ze));
        for (dt = We > 0 ? We + 1 : 0; dt < K; ) {
          for (pe = Se, Me = 1, T = l; dt >= K && $("invalid-input"), I = oe(L.charCodeAt(dt++)), (I >= l || I > E((a - Se) / Me)) && $("overflow"), Se += I * Me, z = T <= Pe ? u : T >= Pe + f ? f : T - Pe, !(I < z); T += l)
            Y = l - z, Me > E(a / Y) && $("overflow"), Me *= Y;
          me = Z.length + 1, Pe = ie(Se - pe, me, pe == 0), E(Se / me) > a - Re && $("overflow"), Re += E(Se / me), Se %= me, Z.splice(Se++, 0, Re);
        }
        return N(Z);
      }
      function V(L) {
        var Z, K, me, Se, Re, Pe, We, ze, dt, pe, Me, T = [], I, z, Y, X;
        for (L = B(L), I = L.length, Z = m, K = 0, Re = d, Pe = 0; Pe < I; ++Pe)
          Me = L[Pe], Me < 128 && T.push(x(Me));
        for (me = Se = T.length, Se && T.push(g); me < I; ) {
          for (We = a, Pe = 0; Pe < I; ++Pe)
            Me = L[Pe], Me >= Z && Me < We && (We = Me);
          for (z = me + 1, We - Z > E((a - K) / z) && $("overflow"), K += (We - Z) * z, Z = We, Pe = 0; Pe < I; ++Pe)
            if (Me = L[Pe], Me < Z && ++K > a && $("overflow"), Me == Z) {
              for (ze = K, dt = l; pe = dt <= Re ? u : dt >= Re + f ? f : dt - Re, !(ze < pe); dt += l)
                X = ze - pe, Y = l - pe, T.push(
                  x(q(pe + X % Y, 0))
                ), ze = E(X / Y);
              T.push(x(q(ze, 0))), Re = ie(K, z, me == Se), K = 0, ++me;
            }
          ++K, ++Z;
        }
        return T.join("");
      }
      function H(L) {
        return D(L, function(Z) {
          return C.test(Z) ? j(Z.slice(4).toLowerCase()) : Z;
        });
      }
      function J(L) {
        return D(L, function(Z) {
          return h.test(Z) ? "xn--" + V(Z) : Z;
        });
      }
      if (i = {
        /**
         * A string representing the current Punycode.js version number.
         * @memberOf punycode
         * @type String
         */
        version: "1.4.1",
        /**
         * An object of methods to convert from JavaScript's internal character
         * representation (UCS-2) to Unicode code points, and back.
         * @see <https://mathiasbynens.be/notes/javascript-encoding>
         * @memberOf punycode
         * @type Object
         */
        ucs2: {
          decode: B,
          encode: N
        },
        decode: j,
        encode: V,
        toASCII: J,
        toUnicode: H
      }, r && s)
        if (e.exports == r)
          s.exports = i;
        else
          for (M in i)
            i.hasOwnProperty(M) && (r[M] = i[M]);
      else
        n.punycode = i;
    })(Kbe);
  }(qo, qo.exports)), qo.exports;
}
var Vl, Ph;
function Gbe() {
  return Ph || (Ph = 1, Vl = {
    options: {
      html: !1,
      // Enable HTML tags in source
      xhtmlOut: !1,
      // Use '/' to close single tags (<br />)
      breaks: !1,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkify: !1,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: !1,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "“”‘’",
      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 100
      // Internal protection, recursion limit
    },
    components: {
      core: {},
      block: {},
      inline: {}
    }
  }), Vl;
}
var Ul, Dh;
function Zbe() {
  return Dh || (Dh = 1, Ul = {
    options: {
      html: !1,
      // Enable HTML tags in source
      xhtmlOut: !1,
      // Use '/' to close single tags (<br />)
      breaks: !1,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkify: !1,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: !1,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "“”‘’",
      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 20
      // Internal protection, recursion limit
    },
    components: {
      core: {
        rules: [
          "normalize",
          "block",
          "inline",
          "text_join"
        ]
      },
      block: {
        rules: [
          "paragraph"
        ]
      },
      inline: {
        rules: [
          "text"
        ],
        rules2: [
          "balance_pairs",
          "fragments_join"
        ]
      }
    }
  }), Ul;
}
var Kl, Nh;
function Xbe() {
  return Nh || (Nh = 1, Kl = {
    options: {
      html: !0,
      // Enable HTML tags in source
      xhtmlOut: !0,
      // Use '/' to close single tags (<br />)
      breaks: !1,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkify: !1,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: !1,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "“”‘’",
      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 20
      // Internal protection, recursion limit
    },
    components: {
      core: {
        rules: [
          "normalize",
          "block",
          "inline",
          "text_join"
        ]
      },
      block: {
        rules: [
          "blockquote",
          "code",
          "fence",
          "heading",
          "hr",
          "html_block",
          "lheading",
          "list",
          "reference",
          "paragraph"
        ]
      },
      inline: {
        rules: [
          "autolink",
          "backticks",
          "emphasis",
          "entity",
          "escape",
          "html_inline",
          "image",
          "link",
          "newline",
          "text"
        ],
        rules2: [
          "balance_pairs",
          "emphasis",
          "fragments_join"
        ]
      }
    }
  }), Kl;
}
var Wl, Bh;
function Ybe() {
  if (Bh) return Wl;
  Bh = 1;
  var e = nt(), t = sbe(), n = ibe(), r = gbe(), s = Mbe(), o = jbe(), i = Ube(), a = U_(), l = Wbe(), u = {
    default: Gbe(),
    zero: Zbe(),
    commonmark: Xbe()
  }, f = /^(vbscript|javascript|file|data):/, c = /^data:image\/(gif|png|jpeg|webp);/;
  function p(h) {
    var k = h.trim().toLowerCase();
    return f.test(k) ? !!c.test(k) : !0;
  }
  var d = ["http:", "https:", "mailto:"];
  function m(h) {
    var k = a.parse(h, !0);
    if (k.hostname && (!k.protocol || d.indexOf(k.protocol) >= 0))
      try {
        k.hostname = l.toASCII(k.hostname);
      } catch {
      }
    return a.encode(a.format(k));
  }
  function g(h) {
    var k = a.parse(h, !0);
    if (k.hostname && (!k.protocol || d.indexOf(k.protocol) >= 0))
      try {
        k.hostname = l.toUnicode(k.hostname);
      } catch {
      }
    return a.decode(a.format(k), a.decode.defaultChars + "%");
  }
  function C(h, k) {
    if (!(this instanceof C))
      return new C(h, k);
    k || e.isString(h) || (k = h || {}, h = "default"), this.inline = new o(), this.block = new s(), this.core = new r(), this.renderer = new n(), this.linkify = new i(), this.validateLink = p, this.normalizeLink = m, this.normalizeLinkText = g, this.utils = e, this.helpers = e.assign({}, t), this.options = {}, this.configure(h), k && this.set(k);
  }
  return C.prototype.set = function(h) {
    return e.assign(this.options, h), this;
  }, C.prototype.configure = function(h) {
    var k = this, y;
    if (e.isString(h) && (y = h, h = u[y], !h))
      throw new Error('Wrong `markdown-it` preset "' + y + '", check name');
    if (!h)
      throw new Error("Wrong `markdown-it` preset, can't be empty");
    return h.options && k.set(h.options), h.components && Object.keys(h.components).forEach(function(_) {
      h.components[_].rules && k[_].ruler.enableOnly(h.components[_].rules), h.components[_].rules2 && k[_].ruler2.enableOnly(h.components[_].rules2);
    }), this;
  }, C.prototype.enable = function(h, k) {
    var y = [];
    Array.isArray(h) || (h = [h]), ["core", "block", "inline"].forEach(function(E) {
      y = y.concat(this[E].ruler.enable(h, !0));
    }, this), y = y.concat(this.inline.ruler2.enable(h, !0));
    var _ = h.filter(function(E) {
      return y.indexOf(E) < 0;
    });
    if (_.length && !k)
      throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + _);
    return this;
  }, C.prototype.disable = function(h, k) {
    var y = [];
    Array.isArray(h) || (h = [h]), ["core", "block", "inline"].forEach(function(E) {
      y = y.concat(this[E].ruler.disable(h, !0));
    }, this), y = y.concat(this.inline.ruler2.disable(h, !0));
    var _ = h.filter(function(E) {
      return y.indexOf(E) < 0;
    });
    if (_.length && !k)
      throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + _);
    return this;
  }, C.prototype.use = function(h) {
    var k = [this].concat(Array.prototype.slice.call(arguments, 1));
    return h.apply(h, k), this;
  }, C.prototype.parse = function(h, k) {
    if (typeof h != "string")
      throw new Error("Input data should be a String");
    var y = new this.core.State(h, this, k);
    return this.core.process(y), y.tokens;
  }, C.prototype.render = function(h, k) {
    return k = k || {}, this.renderer.render(this.parse(h, k), this.options, k);
  }, C.prototype.parseInline = function(h, k) {
    var y = new this.core.State(h, this, k);
    return y.inlineMode = !0, this.core.process(y), y.tokens;
  }, C.prototype.renderInline = function(h, k) {
    return k = k || {}, this.renderer.render(this.parseInline(h, k), this.options, k);
  }, Wl = C, Wl;
}
var Gl, Fh;
function Jbe() {
  return Fh || (Fh = 1, Gl = Ybe()), Gl;
}
var Qbe = Jbe();
const e_e = /* @__PURE__ */ lf(Qbe);
var Zl, qh;
function t_e() {
  if (qh) return Zl;
  qh = 1;
  function e(r, s) {
    var o, i, a = r.attrs[r.attrIndex("href")][1];
    for (o = 0; o < s.length; ++o) {
      if (i = s[o], typeof i.matcher == "function") {
        if (i.matcher(a, i))
          return i;
        continue;
      }
      return i;
    }
  }
  function t(r, s, o) {
    Object.keys(o).forEach(function(i) {
      var a, l = o[i];
      i === "className" && (i = "class"), a = s[r].attrIndex(i), a < 0 ? s[r].attrPush([i, l]) : s[r].attrs[a][1] = l;
    });
  }
  function n(r, s) {
    s ? s = Array.isArray(s) ? s : [s] : s = [], Object.freeze(s);
    var o = r.renderer.rules.link_open || this.defaultRender;
    r.renderer.rules.link_open = function(i, a, l, u, f) {
      var c = e(i[a], s), p = c && c.attrs;
      return p && t(a, i, p), o(i, a, l, u, f);
    };
  }
  return n.defaultRender = function(r, s, o, i, a) {
    return a.renderToken(r, s, o);
  }, Zl = n, Zl;
}
var n_e = t_e();
const r_e = /* @__PURE__ */ lf(n_e);
var Us = { exports: {} }, pt = {}, Ks = { exports: {} }, Fr = {}, zh;
function X_() {
  if (zh) return Fr;
  zh = 1;
  function e() {
    var o = {};
    return o["align-content"] = !1, o["align-items"] = !1, o["align-self"] = !1, o["alignment-adjust"] = !1, o["alignment-baseline"] = !1, o.all = !1, o["anchor-point"] = !1, o.animation = !1, o["animation-delay"] = !1, o["animation-direction"] = !1, o["animation-duration"] = !1, o["animation-fill-mode"] = !1, o["animation-iteration-count"] = !1, o["animation-name"] = !1, o["animation-play-state"] = !1, o["animation-timing-function"] = !1, o.azimuth = !1, o["backface-visibility"] = !1, o.background = !0, o["background-attachment"] = !0, o["background-clip"] = !0, o["background-color"] = !0, o["background-image"] = !0, o["background-origin"] = !0, o["background-position"] = !0, o["background-repeat"] = !0, o["background-size"] = !0, o["baseline-shift"] = !1, o.binding = !1, o.bleed = !1, o["bookmark-label"] = !1, o["bookmark-level"] = !1, o["bookmark-state"] = !1, o.border = !0, o["border-bottom"] = !0, o["border-bottom-color"] = !0, o["border-bottom-left-radius"] = !0, o["border-bottom-right-radius"] = !0, o["border-bottom-style"] = !0, o["border-bottom-width"] = !0, o["border-collapse"] = !0, o["border-color"] = !0, o["border-image"] = !0, o["border-image-outset"] = !0, o["border-image-repeat"] = !0, o["border-image-slice"] = !0, o["border-image-source"] = !0, o["border-image-width"] = !0, o["border-left"] = !0, o["border-left-color"] = !0, o["border-left-style"] = !0, o["border-left-width"] = !0, o["border-radius"] = !0, o["border-right"] = !0, o["border-right-color"] = !0, o["border-right-style"] = !0, o["border-right-width"] = !0, o["border-spacing"] = !0, o["border-style"] = !0, o["border-top"] = !0, o["border-top-color"] = !0, o["border-top-left-radius"] = !0, o["border-top-right-radius"] = !0, o["border-top-style"] = !0, o["border-top-width"] = !0, o["border-width"] = !0, o.bottom = !1, o["box-decoration-break"] = !0, o["box-shadow"] = !0, o["box-sizing"] = !0, o["box-snap"] = !0, o["box-suppress"] = !0, o["break-after"] = !0, o["break-before"] = !0, o["break-inside"] = !0, o["caption-side"] = !1, o.chains = !1, o.clear = !0, o.clip = !1, o["clip-path"] = !1, o["clip-rule"] = !1, o.color = !0, o["color-interpolation-filters"] = !0, o["column-count"] = !1, o["column-fill"] = !1, o["column-gap"] = !1, o["column-rule"] = !1, o["column-rule-color"] = !1, o["column-rule-style"] = !1, o["column-rule-width"] = !1, o["column-span"] = !1, o["column-width"] = !1, o.columns = !1, o.contain = !1, o.content = !1, o["counter-increment"] = !1, o["counter-reset"] = !1, o["counter-set"] = !1, o.crop = !1, o.cue = !1, o["cue-after"] = !1, o["cue-before"] = !1, o.cursor = !1, o.direction = !1, o.display = !0, o["display-inside"] = !0, o["display-list"] = !0, o["display-outside"] = !0, o["dominant-baseline"] = !1, o.elevation = !1, o["empty-cells"] = !1, o.filter = !1, o.flex = !1, o["flex-basis"] = !1, o["flex-direction"] = !1, o["flex-flow"] = !1, o["flex-grow"] = !1, o["flex-shrink"] = !1, o["flex-wrap"] = !1, o.float = !1, o["float-offset"] = !1, o["flood-color"] = !1, o["flood-opacity"] = !1, o["flow-from"] = !1, o["flow-into"] = !1, o.font = !0, o["font-family"] = !0, o["font-feature-settings"] = !0, o["font-kerning"] = !0, o["font-language-override"] = !0, o["font-size"] = !0, o["font-size-adjust"] = !0, o["font-stretch"] = !0, o["font-style"] = !0, o["font-synthesis"] = !0, o["font-variant"] = !0, o["font-variant-alternates"] = !0, o["font-variant-caps"] = !0, o["font-variant-east-asian"] = !0, o["font-variant-ligatures"] = !0, o["font-variant-numeric"] = !0, o["font-variant-position"] = !0, o["font-weight"] = !0, o.grid = !1, o["grid-area"] = !1, o["grid-auto-columns"] = !1, o["grid-auto-flow"] = !1, o["grid-auto-rows"] = !1, o["grid-column"] = !1, o["grid-column-end"] = !1, o["grid-column-start"] = !1, o["grid-row"] = !1, o["grid-row-end"] = !1, o["grid-row-start"] = !1, o["grid-template"] = !1, o["grid-template-areas"] = !1, o["grid-template-columns"] = !1, o["grid-template-rows"] = !1, o["hanging-punctuation"] = !1, o.height = !0, o.hyphens = !1, o.icon = !1, o["image-orientation"] = !1, o["image-resolution"] = !1, o["ime-mode"] = !1, o["initial-letters"] = !1, o["inline-box-align"] = !1, o["justify-content"] = !1, o["justify-items"] = !1, o["justify-self"] = !1, o.left = !1, o["letter-spacing"] = !0, o["lighting-color"] = !0, o["line-box-contain"] = !1, o["line-break"] = !1, o["line-grid"] = !1, o["line-height"] = !1, o["line-snap"] = !1, o["line-stacking"] = !1, o["line-stacking-ruby"] = !1, o["line-stacking-shift"] = !1, o["line-stacking-strategy"] = !1, o["list-style"] = !0, o["list-style-image"] = !0, o["list-style-position"] = !0, o["list-style-type"] = !0, o.margin = !0, o["margin-bottom"] = !0, o["margin-left"] = !0, o["margin-right"] = !0, o["margin-top"] = !0, o["marker-offset"] = !1, o["marker-side"] = !1, o.marks = !1, o.mask = !1, o["mask-box"] = !1, o["mask-box-outset"] = !1, o["mask-box-repeat"] = !1, o["mask-box-slice"] = !1, o["mask-box-source"] = !1, o["mask-box-width"] = !1, o["mask-clip"] = !1, o["mask-image"] = !1, o["mask-origin"] = !1, o["mask-position"] = !1, o["mask-repeat"] = !1, o["mask-size"] = !1, o["mask-source-type"] = !1, o["mask-type"] = !1, o["max-height"] = !0, o["max-lines"] = !1, o["max-width"] = !0, o["min-height"] = !0, o["min-width"] = !0, o["move-to"] = !1, o["nav-down"] = !1, o["nav-index"] = !1, o["nav-left"] = !1, o["nav-right"] = !1, o["nav-up"] = !1, o["object-fit"] = !1, o["object-position"] = !1, o.opacity = !1, o.order = !1, o.orphans = !1, o.outline = !1, o["outline-color"] = !1, o["outline-offset"] = !1, o["outline-style"] = !1, o["outline-width"] = !1, o.overflow = !1, o["overflow-wrap"] = !1, o["overflow-x"] = !1, o["overflow-y"] = !1, o.padding = !0, o["padding-bottom"] = !0, o["padding-left"] = !0, o["padding-right"] = !0, o["padding-top"] = !0, o.page = !1, o["page-break-after"] = !1, o["page-break-before"] = !1, o["page-break-inside"] = !1, o["page-policy"] = !1, o.pause = !1, o["pause-after"] = !1, o["pause-before"] = !1, o.perspective = !1, o["perspective-origin"] = !1, o.pitch = !1, o["pitch-range"] = !1, o["play-during"] = !1, o.position = !1, o["presentation-level"] = !1, o.quotes = !1, o["region-fragment"] = !1, o.resize = !1, o.rest = !1, o["rest-after"] = !1, o["rest-before"] = !1, o.richness = !1, o.right = !1, o.rotation = !1, o["rotation-point"] = !1, o["ruby-align"] = !1, o["ruby-merge"] = !1, o["ruby-position"] = !1, o["shape-image-threshold"] = !1, o["shape-outside"] = !1, o["shape-margin"] = !1, o.size = !1, o.speak = !1, o["speak-as"] = !1, o["speak-header"] = !1, o["speak-numeral"] = !1, o["speak-punctuation"] = !1, o["speech-rate"] = !1, o.stress = !1, o["string-set"] = !1, o["tab-size"] = !1, o["table-layout"] = !1, o["text-align"] = !0, o["text-align-last"] = !0, o["text-combine-upright"] = !0, o["text-decoration"] = !0, o["text-decoration-color"] = !0, o["text-decoration-line"] = !0, o["text-decoration-skip"] = !0, o["text-decoration-style"] = !0, o["text-emphasis"] = !0, o["text-emphasis-color"] = !0, o["text-emphasis-position"] = !0, o["text-emphasis-style"] = !0, o["text-height"] = !0, o["text-indent"] = !0, o["text-justify"] = !0, o["text-orientation"] = !0, o["text-overflow"] = !0, o["text-shadow"] = !0, o["text-space-collapse"] = !0, o["text-transform"] = !0, o["text-underline-position"] = !0, o["text-wrap"] = !0, o.top = !1, o.transform = !1, o["transform-origin"] = !1, o["transform-style"] = !1, o.transition = !1, o["transition-delay"] = !1, o["transition-duration"] = !1, o["transition-property"] = !1, o["transition-timing-function"] = !1, o["unicode-bidi"] = !1, o["vertical-align"] = !1, o.visibility = !1, o["voice-balance"] = !1, o["voice-duration"] = !1, o["voice-family"] = !1, o["voice-pitch"] = !1, o["voice-range"] = !1, o["voice-rate"] = !1, o["voice-stress"] = !1, o["voice-volume"] = !1, o.volume = !1, o["white-space"] = !1, o.widows = !1, o.width = !0, o["will-change"] = !1, o["word-break"] = !0, o["word-spacing"] = !0, o["word-wrap"] = !0, o["wrap-flow"] = !1, o["wrap-through"] = !1, o["writing-mode"] = !1, o["z-index"] = !1, o;
  }
  function t(o, i, a) {
  }
  function n(o, i, a) {
  }
  var r = /javascript\s*\:/img;
  function s(o, i) {
    return r.test(i) ? "" : i;
  }
  return Fr.whiteList = e(), Fr.getDefaultWhiteList = e, Fr.onAttr = t, Fr.onIgnoreAttr = n, Fr.safeAttrValue = s, Fr;
}
var Xl, Hh;
function Y_() {
  return Hh || (Hh = 1, Xl = {
    indexOf: function(e, t) {
      var n, r;
      if (Array.prototype.indexOf)
        return e.indexOf(t);
      for (n = 0, r = e.length; n < r; n++)
        if (e[n] === t)
          return n;
      return -1;
    },
    forEach: function(e, t, n) {
      var r, s;
      if (Array.prototype.forEach)
        return e.forEach(t, n);
      for (r = 0, s = e.length; r < s; r++)
        t.call(n, e[r], r, e);
    },
    trim: function(e) {
      return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "");
    },
    trimRight: function(e) {
      return String.prototype.trimRight ? e.trimRight() : e.replace(/(\s*$)/g, "");
    }
  }), Xl;
}
var Yl, jh;
function o_e() {
  if (jh) return Yl;
  jh = 1;
  var e = Y_();
  function t(n, r) {
    n = e.trimRight(n), n[n.length - 1] !== ";" && (n += ";");
    var s = n.length, o = !1, i = 0, a = 0, l = "";
    function u() {
      if (!o) {
        var p = e.trim(n.slice(i, a)), d = p.indexOf(":");
        if (d !== -1) {
          var m = e.trim(p.slice(0, d)), g = e.trim(p.slice(d + 1));
          if (m) {
            var C = r(i, l.length, m, g, p);
            C && (l += C + "; ");
          }
        }
      }
      i = a + 1;
    }
    for (; a < s; a++) {
      var f = n[a];
      if (f === "/" && n[a + 1] === "*") {
        var c = n.indexOf("*/", a + 2);
        if (c === -1) break;
        a = c + 1, i = a + 1, o = !1;
      } else f === "(" ? o = !0 : f === ")" ? o = !1 : f === ";" ? o || u() : f === `
` && u();
    }
    return e.trim(l);
  }
  return Yl = t, Yl;
}
var Jl, Vh;
function s_e() {
  if (Vh) return Jl;
  Vh = 1;
  var e = X_(), t = o_e();
  Y_();
  function n(o) {
    return o == null;
  }
  function r(o) {
    var i = {};
    for (var a in o)
      i[a] = o[a];
    return i;
  }
  function s(o) {
    o = r(o || {}), o.whiteList = o.whiteList || e.whiteList, o.onAttr = o.onAttr || e.onAttr, o.onIgnoreAttr = o.onIgnoreAttr || e.onIgnoreAttr, o.safeAttrValue = o.safeAttrValue || e.safeAttrValue, this.options = o;
  }
  return s.prototype.process = function(o) {
    if (o = o || "", o = o.toString(), !o) return "";
    var i = this, a = i.options, l = a.whiteList, u = a.onAttr, f = a.onIgnoreAttr, c = a.safeAttrValue, p = t(o, function(d, m, g, C, h) {
      var k = l[g], y = !1;
      if (k === !0 ? y = k : typeof k == "function" ? y = k(C) : k instanceof RegExp && (y = k.test(C)), y !== !0 && (y = !1), C = c(g, C), !!C) {
        var _ = {
          position: m,
          sourcePosition: d,
          source: h,
          isWhite: y
        };
        if (y) {
          var E = u(g, C, _);
          return n(E) ? g + ":" + C : E;
        } else {
          var E = f(g, C, _);
          if (!n(E))
            return E;
        }
      }
    });
    return p;
  }, Jl = s, Jl;
}
var Uh;
function Lu() {
  return Uh || (Uh = 1, function(e, t) {
    var n = X_(), r = s_e();
    function s(i, a) {
      var l = new r(a);
      return l.process(i);
    }
    t = e.exports = s, t.FilterCSS = r;
    for (var o in n) t[o] = n[o];
    typeof window < "u" && (window.filterCSS = e.exports);
  }(Ks, Ks.exports)), Ks.exports;
}
var Ql, Kh;
function Hf() {
  return Kh || (Kh = 1, Ql = {
    indexOf: function(e, t) {
      var n, r;
      if (Array.prototype.indexOf)
        return e.indexOf(t);
      for (n = 0, r = e.length; n < r; n++)
        if (e[n] === t)
          return n;
      return -1;
    },
    forEach: function(e, t, n) {
      var r, s;
      if (Array.prototype.forEach)
        return e.forEach(t, n);
      for (r = 0, s = e.length; r < s; r++)
        t.call(n, e[r], r, e);
    },
    trim: function(e) {
      return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "");
    },
    spaceIndex: function(e) {
      var t = /\s|\n|\t/, n = t.exec(e);
      return n ? n.index : -1;
    }
  }), Ql;
}
var Wh;
function J_() {
  if (Wh) return pt;
  Wh = 1;
  var e = Lu().FilterCSS, t = Lu().getDefaultWhiteList, n = Hf();
  function r() {
    return {
      a: ["target", "href", "title"],
      abbr: ["title"],
      address: [],
      area: ["shape", "coords", "href", "alt"],
      article: [],
      aside: [],
      audio: [
        "autoplay",
        "controls",
        "crossorigin",
        "loop",
        "muted",
        "preload",
        "src"
      ],
      b: [],
      bdi: ["dir"],
      bdo: ["dir"],
      big: [],
      blockquote: ["cite"],
      br: [],
      caption: [],
      center: [],
      cite: [],
      code: [],
      col: ["align", "valign", "span", "width"],
      colgroup: ["align", "valign", "span", "width"],
      dd: [],
      del: ["datetime"],
      details: ["open"],
      div: [],
      dl: [],
      dt: [],
      em: [],
      figcaption: [],
      figure: [],
      font: ["color", "size", "face"],
      footer: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      header: [],
      hr: [],
      i: [],
      img: ["src", "alt", "title", "width", "height", "loading"],
      ins: ["datetime"],
      kbd: [],
      li: [],
      mark: [],
      nav: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      section: [],
      small: [],
      span: [],
      sub: [],
      summary: [],
      sup: [],
      strong: [],
      strike: [],
      table: ["width", "border", "align", "valign"],
      tbody: ["align", "valign"],
      td: ["width", "rowspan", "colspan", "align", "valign"],
      tfoot: ["align", "valign"],
      th: ["width", "rowspan", "colspan", "align", "valign"],
      thead: ["align", "valign"],
      tr: ["rowspan", "align", "valign"],
      tt: [],
      u: [],
      ul: [],
      video: [
        "autoplay",
        "controls",
        "crossorigin",
        "loop",
        "muted",
        "playsinline",
        "poster",
        "preload",
        "src",
        "height",
        "width"
      ]
    };
  }
  var s = new e();
  function o(j, V, H) {
  }
  function i(j, V, H) {
  }
  function a(j, V, H) {
  }
  function l(j, V, H) {
  }
  function u(j) {
    return j.replace(c, "&lt;").replace(p, "&gt;");
  }
  function f(j, V, H, J) {
    if (H = D(H), V === "href" || V === "src") {
      if (H = n.trim(H), H === "#") return "#";
      if (!(H.substr(0, 7) === "http://" || H.substr(0, 8) === "https://" || H.substr(0, 7) === "mailto:" || H.substr(0, 4) === "tel:" || H.substr(0, 11) === "data:image/" || H.substr(0, 6) === "ftp://" || H.substr(0, 2) === "./" || H.substr(0, 3) === "../" || H[0] === "#" || H[0] === "/"))
        return "";
    } else if (V === "background") {
      if (k.lastIndex = 0, k.test(H))
        return "";
    } else if (V === "style") {
      if (y.lastIndex = 0, y.test(H) || (_.lastIndex = 0, _.test(H) && (k.lastIndex = 0, k.test(H))))
        return "";
      J !== !1 && (J = J || s, H = J.process(H));
    }
    return H = B(H), H;
  }
  var c = /</g, p = />/g, d = /"/g, m = /&quot;/g, g = /&#([a-zA-Z0-9]*);?/gim, C = /&colon;?/gim, h = /&newline;?/gim, k = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi, y = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi, _ = /u\s*r\s*l\s*\(.*/gi;
  function E(j) {
    return j.replace(d, "&quot;");
  }
  function x(j) {
    return j.replace(m, '"');
  }
  function M(j) {
    return j.replace(g, function(H, J) {
      return J[0] === "x" || J[0] === "X" ? String.fromCharCode(parseInt(J.substr(1), 16)) : String.fromCharCode(parseInt(J, 10));
    });
  }
  function $(j) {
    return j.replace(C, ":").replace(h, " ");
  }
  function O(j) {
    for (var V = "", H = 0, J = j.length; H < J; H++)
      V += j.charCodeAt(H) < 32 ? " " : j.charAt(H);
    return n.trim(V);
  }
  function D(j) {
    return j = x(j), j = M(j), j = $(j), j = O(j), j;
  }
  function B(j) {
    return j = E(j), j = u(j), j;
  }
  function N() {
    return "";
  }
  function oe(j, V) {
    typeof V != "function" && (V = function() {
    });
    var H = !Array.isArray(j);
    function J(K) {
      return H ? !0 : n.indexOf(j, K) !== -1;
    }
    var L = [], Z = !1;
    return {
      onIgnoreTag: function(K, me, Se) {
        if (J(K))
          if (Se.isClosing) {
            var Re = "[/removed]", Pe = Se.position + Re.length;
            return L.push([
              Z !== !1 ? Z : Se.position,
              Pe
            ]), Z = !1, Re;
          } else
            return Z || (Z = Se.position), "[removed]";
        else
          return V(K, me, Se);
      },
      remove: function(K) {
        var me = "", Se = 0;
        return n.forEach(L, function(Re) {
          me += K.slice(Se, Re[0]), Se = Re[1];
        }), me += K.slice(Se), me;
      }
    };
  }
  function q(j) {
    for (var V = "", H = 0; H < j.length; ) {
      var J = j.indexOf("<!--", H);
      if (J === -1) {
        V += j.slice(H);
        break;
      }
      V += j.slice(H, J);
      var L = j.indexOf("-->", J);
      if (L === -1)
        break;
      H = L + 3;
    }
    return V;
  }
  function ie(j) {
    var V = j.split("");
    return V = V.filter(function(H) {
      var J = H.charCodeAt(0);
      return J === 127 ? !1 : J <= 31 ? J === 10 || J === 13 : !0;
    }), V.join("");
  }
  return pt.whiteList = r(), pt.getDefaultWhiteList = r, pt.onTag = o, pt.onIgnoreTag = i, pt.onTagAttr = a, pt.onIgnoreTagAttr = l, pt.safeAttrValue = f, pt.escapeHtml = u, pt.escapeQuote = E, pt.unescapeQuote = x, pt.escapeHtmlEntities = M, pt.escapeDangerHtml5Entities = $, pt.clearNonPrintableCharacter = O, pt.friendlyAttrValue = D, pt.escapeAttrValue = B, pt.onIgnoreTagStripAll = N, pt.StripTagBody = oe, pt.stripCommentTag = q, pt.stripBlankChar = ie, pt.attributeWrapSign = '"', pt.cssFilter = s, pt.getDefaultCSSWhiteList = t, pt;
}
var Ws = {}, Gh;
function Q_() {
  if (Gh) return Ws;
  Gh = 1;
  var e = Hf();
  function t(c) {
    var p = e.spaceIndex(c), d;
    return p === -1 ? d = c.slice(1, -1) : d = c.slice(1, p + 1), d = e.trim(d).toLowerCase(), d.slice(0, 1) === "/" && (d = d.slice(1)), d.slice(-1) === "/" && (d = d.slice(0, -1)), d;
  }
  function n(c) {
    return c.slice(0, 2) === "</";
  }
  function r(c, p, d) {
    var m = "", g = 0, C = !1, h = !1, k = 0, y = c.length, _ = "", E = "";
    e: for (k = 0; k < y; k++) {
      var x = c.charAt(k);
      if (C === !1) {
        if (x === "<") {
          C = k;
          continue;
        }
      } else if (h === !1) {
        if (x === "<") {
          m += d(c.slice(g, k)), C = k, g = k;
          continue;
        }
        if (x === ">" || k === y - 1) {
          m += d(c.slice(g, C)), E = c.slice(C, k + 1), _ = t(E), m += p(
            C,
            m.length,
            _,
            E,
            n(E)
          ), g = k + 1, C = !1;
          continue;
        }
        if (x === '"' || x === "'")
          for (var M = 1, $ = c.charAt(k - M); $.trim() === "" || $ === "="; ) {
            if ($ === "=") {
              h = x;
              continue e;
            }
            $ = c.charAt(k - ++M);
          }
      } else if (x === h) {
        h = !1;
        continue;
      }
    }
    return g < y && (m += d(c.substr(g))), m;
  }
  var s = /[^a-zA-Z0-9\\_:.-]/gim;
  function o(c, p) {
    var d = 0, m = 0, g = [], C = !1, h = c.length;
    function k(M, $) {
      if (M = e.trim(M), M = M.replace(s, "").toLowerCase(), !(M.length < 1)) {
        var O = p(M, $ || "");
        O && g.push(O);
      }
    }
    for (var y = 0; y < h; y++) {
      var _ = c.charAt(y), E, x;
      if (C === !1 && _ === "=") {
        C = c.slice(d, y), d = y + 1, m = c.charAt(d) === '"' || c.charAt(d) === "'" ? d : a(c, y + 1);
        continue;
      }
      if (C !== !1 && y === m) {
        if (x = c.indexOf(_, y + 1), x === -1)
          break;
        E = e.trim(c.slice(m + 1, x)), k(C, E), C = !1, y = x, d = y + 1;
        continue;
      }
      if (/\s|\n|\t/.test(_))
        if (c = c.replace(/\s|\n|\t/g, " "), C === !1)
          if (x = i(c, y), x === -1) {
            E = e.trim(c.slice(d, y)), k(E), C = !1, d = y + 1;
            continue;
          } else {
            y = x - 1;
            continue;
          }
        else if (x = l(c, y - 1), x === -1) {
          E = e.trim(c.slice(d, y)), E = f(E), k(C, E), C = !1, d = y + 1;
          continue;
        } else
          continue;
    }
    return d < c.length && (C === !1 ? k(c.slice(d)) : k(C, f(e.trim(c.slice(d))))), e.trim(g.join(" "));
  }
  function i(c, p) {
    for (; p < c.length; p++) {
      var d = c[p];
      if (d !== " ")
        return d === "=" ? p : -1;
    }
  }
  function a(c, p) {
    for (; p < c.length; p++) {
      var d = c[p];
      if (d !== " ")
        return d === "'" || d === '"' ? p : -1;
    }
  }
  function l(c, p) {
    for (; p > 0; p--) {
      var d = c[p];
      if (d !== " ")
        return d === "=" ? p : -1;
    }
  }
  function u(c) {
    return c[0] === '"' && c[c.length - 1] === '"' || c[0] === "'" && c[c.length - 1] === "'";
  }
  function f(c) {
    return u(c) ? c.substr(1, c.length - 2) : c;
  }
  return Ws.parseTag = r, Ws.parseAttr = o, Ws;
}
var ec, Zh;
function i_e() {
  if (Zh) return ec;
  Zh = 1;
  var e = Lu().FilterCSS, t = J_(), n = Q_(), r = n.parseTag, s = n.parseAttr, o = Hf();
  function i(c) {
    return c == null;
  }
  function a(c) {
    var p = o.spaceIndex(c);
    if (p === -1)
      return {
        html: "",
        closing: c[c.length - 2] === "/"
      };
    c = o.trim(c.slice(p + 1, -1));
    var d = c[c.length - 1] === "/";
    return d && (c = o.trim(c.slice(0, -1))), {
      html: c,
      closing: d
    };
  }
  function l(c) {
    var p = {};
    for (var d in c)
      p[d] = c[d];
    return p;
  }
  function u(c) {
    var p = {};
    for (var d in c)
      Array.isArray(c[d]) ? p[d.toLowerCase()] = c[d].map(function(m) {
        return m.toLowerCase();
      }) : p[d.toLowerCase()] = c[d];
    return p;
  }
  function f(c) {
    c = l(c || {}), c.stripIgnoreTag && (c.onIgnoreTag && console.error(
      'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
    ), c.onIgnoreTag = t.onIgnoreTagStripAll), c.whiteList || c.allowList ? c.whiteList = u(c.whiteList || c.allowList) : c.whiteList = t.whiteList, this.attributeWrapSign = c.singleQuotedAttributeValue === !0 ? "'" : t.attributeWrapSign, c.onTag = c.onTag || t.onTag, c.onTagAttr = c.onTagAttr || t.onTagAttr, c.onIgnoreTag = c.onIgnoreTag || t.onIgnoreTag, c.onIgnoreTagAttr = c.onIgnoreTagAttr || t.onIgnoreTagAttr, c.safeAttrValue = c.safeAttrValue || t.safeAttrValue, c.escapeHtml = c.escapeHtml || t.escapeHtml, this.options = c, c.css === !1 ? this.cssFilter = !1 : (c.css = c.css || {}, this.cssFilter = new e(c.css));
  }
  return f.prototype.process = function(c) {
    if (c = c || "", c = c.toString(), !c) return "";
    var p = this, d = p.options, m = d.whiteList, g = d.onTag, C = d.onIgnoreTag, h = d.onTagAttr, k = d.onIgnoreTagAttr, y = d.safeAttrValue, _ = d.escapeHtml, E = p.attributeWrapSign, x = p.cssFilter;
    d.stripBlankChar && (c = t.stripBlankChar(c)), d.allowCommentTag || (c = t.stripCommentTag(c));
    var M = !1;
    d.stripIgnoreTagBody && (M = t.StripTagBody(
      d.stripIgnoreTagBody,
      C
    ), C = M.onIgnoreTag);
    var $ = r(
      c,
      function(O, D, B, N, oe) {
        var q = {
          sourcePosition: O,
          position: D,
          isClosing: oe,
          isWhite: Object.prototype.hasOwnProperty.call(m, B)
        }, ie = g(B, N, q);
        if (!i(ie)) return ie;
        if (q.isWhite) {
          if (q.isClosing)
            return "</" + B + ">";
          var j = a(N), V = m[B], H = s(j.html, function(J, L) {
            var Z = o.indexOf(V, J) !== -1, K = h(B, J, L, Z);
            return i(K) ? Z ? (L = y(B, J, L, x), L ? J + "=" + E + L + E : J) : (K = k(B, J, L, Z), i(K) ? void 0 : K) : K;
          });
          return N = "<" + B, H && (N += " " + H), j.closing && (N += " /"), N += ">", N;
        } else
          return ie = C(B, N, q), i(ie) ? _(N) : ie;
      },
      _
    );
    return M && ($ = M.remove($)), $;
  }, ec = f, ec;
}
var Xh;
function a_e() {
  return Xh || (Xh = 1, function(e, t) {
    var n = J_(), r = Q_(), s = i_e();
    function o(a, l) {
      var u = new s(l);
      return u.process(a);
    }
    t = e.exports = o, t.filterXSS = o, t.FilterXSS = s, function() {
      for (var a in n)
        t[a] = n[a];
      for (var l in r)
        t[l] = r[l];
    }(), typeof window < "u" && (window.filterXSS = e.exports);
    function i() {
      return typeof self < "u" && typeof DedicatedWorkerGlobalScope < "u" && self instanceof DedicatedWorkerGlobalScope;
    }
    i() && (self.filterXSS = e.exports);
  }(Us, Us.exports)), Us.exports;
}
a_e();
({
  // @ts-expect-error TS doesn't understand this but it works
  ...wp.props
  // <a> element "props" are passed as attributes
});
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
function Jo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Jo = function(t) {
    return typeof t;
  } : Jo = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jo(e);
}
function l_e(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function c_e(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function u_e(e, t, n) {
  return t && c_e(e.prototype, t), e;
}
function f_e(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function sn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(s) {
      return Object.getOwnPropertyDescriptor(n, s).enumerable;
    }))), r.forEach(function(s) {
      f_e(e, s, n[s]);
    });
  }
  return e;
}
function d_e(e, t) {
  return p_e(e) || h_e(e, t) || g_e();
}
function p_e(e) {
  if (Array.isArray(e)) return e;
}
function h_e(e, t) {
  var n = [], r = !0, s = !1, o = void 0;
  try {
    for (var i = e[Symbol.iterator](), a; !(r = (a = i.next()).done) && (n.push(a.value), !(t && n.length === t)); r = !0)
      ;
  } catch (l) {
    s = !0, o = l;
  } finally {
    try {
      !r && i.return != null && i.return();
    } finally {
      if (s) throw o;
    }
  }
  return n;
}
function g_e() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
var Yh = function() {
}, jf = {}, ey = {}, m_e = null, ty = {
  mark: Yh,
  measure: Yh
};
try {
  typeof window < "u" && (jf = window), typeof document < "u" && (ey = document), typeof MutationObserver < "u" && (m_e = MutationObserver), typeof performance < "u" && (ty = performance);
} catch {
}
var v_e = jf.navigator || {}, Jh = v_e.userAgent, Qh = Jh === void 0 ? "" : Jh, oa = jf, wn = ey, Gs = ty;
oa.document;
var b_e = !!wn.documentElement && !!wn.head && typeof wn.addEventListener == "function" && typeof wn.createElement == "function";
~Qh.indexOf("MSIE") || ~Qh.indexOf("Trident/");
var nr = "___FONT_AWESOME___", __e = "fa", y_e = "svg-inline--fa";
(function() {
  try {
    return !0;
  } catch {
    return !1;
  }
})();
var ny = oa.FontAwesomeConfig || {};
function w_e(e) {
  var t = wn.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function k_e(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (wn && typeof wn.querySelector == "function") {
  var C_e = [["data-family-prefix", "familyPrefix"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  C_e.forEach(function(e) {
    var t = d_e(e, 2), n = t[0], r = t[1], s = k_e(w_e(n));
    s != null && (ny[r] = s);
  });
}
var x_e = {
  familyPrefix: __e,
  replacementClass: y_e,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
}, Ou = sn({}, x_e, ny);
Ou.autoReplaceSvg || (Ou.observeMutations = !1);
var ry = sn({}, Ou);
oa.FontAwesomeConfig = ry;
var rr = oa || {};
rr[nr] || (rr[nr] = {});
rr[nr].styles || (rr[nr].styles = {});
rr[nr].hooks || (rr[nr].hooks = {});
rr[nr].shims || (rr[nr].shims = []);
var Gn = rr[nr], E_e = [], S_e = function e() {
  wn.removeEventListener("DOMContentLoaded", e), Ru = 1, E_e.map(function(t) {
    return t();
  });
}, Ru = !1;
b_e && (Ru = (wn.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(wn.readyState), Ru || wn.addEventListener("DOMContentLoaded", S_e));
var Vf = "pending", oy = "settled", Ci = "fulfilled", xi = "rejected", A_e = function() {
}, sy = typeof global < "u" && typeof global.process < "u" && typeof global.process.emit == "function", T_e = typeof setImmediate > "u" ? setTimeout : setImmediate, zo = [], Pu;
function M_e() {
  for (var e = 0; e < zo.length; e++)
    zo[e][0](zo[e][1]);
  zo = [], Pu = !1;
}
function Ei(e, t) {
  zo.push([e, t]), Pu || (Pu = !0, T_e(M_e, 0));
}
function $_e(e, t) {
  function n(s) {
    Uf(t, s);
  }
  function r(s) {
    gs(t, s);
  }
  try {
    e(n, r);
  } catch (s) {
    r(s);
  }
}
function iy(e) {
  var t = e.owner, n = t._state, r = t._data, s = e[n], o = e.then;
  if (typeof s == "function") {
    n = Ci;
    try {
      r = s(r);
    } catch (i) {
      gs(o, i);
    }
  }
  ay(o, r) || (n === Ci && Uf(o, r), n === xi && gs(o, r));
}
function ay(e, t) {
  var n;
  try {
    if (e === t)
      throw new TypeError("A promises callback cannot return that same promise.");
    if (t && (typeof t == "function" || Jo(t) === "object")) {
      var r = t.then;
      if (typeof r == "function")
        return r.call(t, function(s) {
          n || (n = !0, t === s ? ly(e, s) : Uf(e, s));
        }, function(s) {
          n || (n = !0, gs(e, s));
        }), !0;
    }
  } catch (s) {
    return n || gs(e, s), !0;
  }
  return !1;
}
function Uf(e, t) {
  (e === t || !ay(e, t)) && ly(e, t);
}
function ly(e, t) {
  e._state === Vf && (e._state = oy, e._data = t, Ei(I_e, e));
}
function gs(e, t) {
  e._state === Vf && (e._state = oy, e._data = t, Ei(L_e, e));
}
function cy(e) {
  e._then = e._then.forEach(iy);
}
function I_e(e) {
  e._state = Ci, cy(e);
}
function L_e(e) {
  e._state = xi, cy(e), !e._handled && sy && global.process.emit("unhandledRejection", e._data, e);
}
function O_e(e) {
  global.process.emit("rejectionHandled", e);
}
function fn(e) {
  if (typeof e != "function")
    throw new TypeError("Promise resolver " + e + " is not a function");
  if (!(this instanceof fn))
    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
  this._then = [], $_e(e, this);
}
fn.prototype = {
  constructor: fn,
  _state: Vf,
  _then: null,
  _data: void 0,
  _handled: !1,
  then: function(t, n) {
    var r = {
      owner: this,
      then: new this.constructor(A_e),
      fulfilled: t,
      rejected: n
    };
    return (n || t) && !this._handled && (this._handled = !0, this._state === xi && sy && Ei(O_e, this)), this._state === Ci || this._state === xi ? Ei(iy, r) : this._then.push(r), r.then;
  },
  catch: function(t) {
    return this.then(null, t);
  }
};
fn.all = function(e) {
  if (!Array.isArray(e))
    throw new TypeError("You must pass an array to Promise.all().");
  return new fn(function(t, n) {
    var r = [], s = 0;
    function o(l) {
      return s++, function(u) {
        r[l] = u, --s || t(r);
      };
    }
    for (var i = 0, a; i < e.length; i++)
      a = e[i], a && typeof a.then == "function" ? a.then(o(i), n) : r[i] = a;
    s || t(r);
  });
};
fn.race = function(e) {
  if (!Array.isArray(e))
    throw new TypeError("You must pass an array to Promise.race().");
  return new fn(function(t, n) {
    for (var r = 0, s; r < e.length; r++)
      s = e[r], s && typeof s.then == "function" ? s.then(t, n) : t(s);
  });
};
fn.resolve = function(e) {
  return e && Jo(e) === "object" && e.constructor === fn ? e : new fn(function(t) {
    t(e);
  });
};
fn.reject = function(e) {
  return new fn(function(t, n) {
    n(e);
  });
};
ry.measurePerformance && Gs && Gs.mark && Gs.measure;
var tc = function(t, n, r, s) {
  var o = Object.keys(t), i = o.length, a = n, l, u, f;
  for (r === void 0 ? (l = 1, f = t[o[0]]) : (l = 0, f = r); l < i; l++)
    u = o[l], f = a(f, t[u], u, t);
  return f;
};
function uy(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.skipHooks, s = r === void 0 ? !1 : r, o = Object.keys(t).reduce(function(i, a) {
    var l = t[a], u = !!l.icon;
    return u ? i[l.iconName] = l.icon : i[a] = l, i;
  }, {});
  typeof Gn.hooks.addPack == "function" && !s ? Gn.hooks.addPack(e, o) : Gn.styles[e] = sn({}, Gn.styles[e] || {}, o), e === "fas" && uy("fa", t);
}
var e2 = Gn.styles, R_e = Gn.shims, fy = function() {
  var t = function(s) {
    return tc(e2, function(o, i, a) {
      return o[a] = tc(i, s, {}), o;
    }, {});
  };
  t(function(r, s, o) {
    return s[3] && (r[s[3]] = o), r;
  }), t(function(r, s, o) {
    var i = s[2];
    return r[o] = o, i.forEach(function(a) {
      r[a] = o;
    }), r;
  });
  var n = "far" in e2;
  tc(R_e, function(r, s) {
    var o = s[0], i = s[1], a = s[2];
    return i === "far" && !n && (i = "fas"), r[o] = {
      prefix: i,
      iconName: a
    }, r;
  }, {});
};
fy();
Gn.styles;
function Du(e) {
  this.name = "MissingIcon", this.message = e || "Icon unavailable", this.stack = new Error().stack;
}
Du.prototype = Object.create(Error.prototype);
Du.prototype.constructor = Du;
var sa = {
  fill: "currentColor"
}, dy = {
  attributeType: "XML",
  repeatCount: "indefinite",
  dur: "2s"
};
sn({}, sa, {
  d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
});
var Kf = sn({}, dy, {
  attributeName: "opacity"
});
sn({}, sa, {
  cx: "256",
  cy: "364",
  r: "28"
}), sn({}, dy, {
  attributeName: "r",
  values: "28;14;28;28;14;28;"
}), sn({}, Kf, {
  values: "1;0;1;1;0;1;"
});
sn({}, sa, {
  opacity: "1",
  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
}), sn({}, Kf, {
  values: "1;0;0;0;0;1;"
});
sn({}, sa, {
  opacity: "0",
  d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
}), sn({}, Kf, {
  values: "0;0;1;1;0;0;"
});
Gn.styles;
Gn.styles;
var P_e = /* @__PURE__ */ function() {
  function e() {
    l_e(this, e), this.definitions = {};
  }
  return u_e(e, [{
    key: "add",
    value: function() {
      for (var n = this, r = arguments.length, s = new Array(r), o = 0; o < r; o++)
        s[o] = arguments[o];
      var i = s.reduce(this._pullDefinitions, {});
      Object.keys(i).forEach(function(a) {
        n.definitions[a] = sn({}, n.definitions[a] || {}, i[a]), uy(a, i[a]), fy();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(n, r) {
      var s = r.prefix && r.iconName && r.icon ? {
        0: r
      } : r;
      return Object.keys(s).map(function(o) {
        var i = s[o], a = i.prefix, l = i.iconName, u = i.icon;
        n[a] || (n[a] = {}), n[a][l] = u;
      }), n;
    }
  }]), e;
}();
new P_e();
var D_e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, N_e = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(h, k, y) {
      if (!u(k) || c(k) || p(k) || d(k) || l(k))
        return k;
      var _, E = 0, x = 0;
      if (f(k))
        for (_ = [], x = k.length; E < x; E++)
          _.push(n(h, k[E], y));
      else {
        _ = {};
        for (var M in k)
          Object.prototype.hasOwnProperty.call(k, M) && (_[h(M, y)] = n(h, k[M], y));
      }
      return _;
    }, r = function(h, k) {
      k = k || {};
      var y = k.separator || "_", _ = k.split || /(?=[A-Z])/;
      return h.split(_).join(y);
    }, s = function(h) {
      return m(h) ? h : (h = h.replace(/[\-_\s]+(.)?/g, function(k, y) {
        return y ? y.toUpperCase() : "";
      }), h.substr(0, 1).toLowerCase() + h.substr(1));
    }, o = function(h) {
      var k = s(h);
      return k.substr(0, 1).toUpperCase() + k.substr(1);
    }, i = function(h, k) {
      return r(h, k).toLowerCase();
    }, a = Object.prototype.toString, l = function(h) {
      return typeof h == "function";
    }, u = function(h) {
      return h === Object(h);
    }, f = function(h) {
      return a.call(h) == "[object Array]";
    }, c = function(h) {
      return a.call(h) == "[object Date]";
    }, p = function(h) {
      return a.call(h) == "[object RegExp]";
    }, d = function(h) {
      return a.call(h) == "[object Boolean]";
    }, m = function(h) {
      return h = h - 0, h === h;
    }, g = function(h, k) {
      var y = k && "process" in k ? k.process : k;
      return typeof y != "function" ? h : function(_, E) {
        return y(_, h, E);
      };
    }, C = {
      camelize: s,
      decamelize: i,
      pascalize: o,
      depascalize: i,
      camelizeKeys: function(h, k) {
        return n(g(s, k), h);
      },
      decamelizeKeys: function(h, k) {
        return n(g(i, k), h, k);
      },
      pascalizeKeys: function(h, k) {
        return n(g(o, k), h);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = C : t.humps = C;
  })(D_e);
})(N_e);
var B_e = !1;
try {
  B_e = !0;
} catch {
}
({
  ...Bm
});
var nc, t2;
function Wf() {
  if (t2) return nc;
  t2 = 1;
  var e = Array.isArray;
  return nc = e, nc;
}
var rc, n2;
function F_e() {
  if (n2) return rc;
  n2 = 1;
  var e = typeof ao == "object" && ao && ao.Object === Object && ao;
  return rc = e, rc;
}
var oc, r2;
function Gf() {
  if (r2) return oc;
  r2 = 1;
  var e = F_e(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return oc = n, oc;
}
var sc, o2;
function Zf() {
  if (o2) return sc;
  o2 = 1;
  var e = Gf(), t = e.Symbol;
  return sc = t, sc;
}
var ic, s2;
function q_e() {
  if (s2) return ic;
  s2 = 1;
  var e = Zf(), t = Object.prototype, n = t.hasOwnProperty, r = t.toString, s = e ? e.toStringTag : void 0;
  function o(i) {
    var a = n.call(i, s), l = i[s];
    try {
      i[s] = void 0;
      var u = !0;
    } catch {
    }
    var f = r.call(i);
    return u && (a ? i[s] = l : delete i[s]), f;
  }
  return ic = o, ic;
}
var ac, i2;
function z_e() {
  if (i2) return ac;
  i2 = 1;
  var e = Object.prototype, t = e.toString;
  function n(r) {
    return t.call(r);
  }
  return ac = n, ac;
}
var lc, a2;
function py() {
  if (a2) return lc;
  a2 = 1;
  var e = Zf(), t = q_e(), n = z_e(), r = "[object Null]", s = "[object Undefined]", o = e ? e.toStringTag : void 0;
  function i(a) {
    return a == null ? a === void 0 ? s : r : o && o in Object(a) ? t(a) : n(a);
  }
  return lc = i, lc;
}
var cc, l2;
function H_e() {
  if (l2) return cc;
  l2 = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return cc = e, cc;
}
var uc, c2;
function Xf() {
  if (c2) return uc;
  c2 = 1;
  var e = py(), t = H_e(), n = "[object Symbol]";
  function r(s) {
    return typeof s == "symbol" || t(s) && e(s) == n;
  }
  return uc = r, uc;
}
var fc, u2;
function j_e() {
  if (u2) return fc;
  u2 = 1;
  var e = Wf(), t = Xf(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/;
  function s(o, i) {
    if (e(o))
      return !1;
    var a = typeof o;
    return a == "number" || a == "symbol" || a == "boolean" || o == null || t(o) ? !0 : r.test(o) || !n.test(o) || i != null && o in Object(i);
  }
  return fc = s, fc;
}
var dc, f2;
function hy() {
  if (f2) return dc;
  f2 = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return dc = e, dc;
}
var pc, d2;
function V_e() {
  if (d2) return pc;
  d2 = 1;
  var e = py(), t = hy(), n = "[object AsyncFunction]", r = "[object Function]", s = "[object GeneratorFunction]", o = "[object Proxy]";
  function i(a) {
    if (!t(a))
      return !1;
    var l = e(a);
    return l == r || l == s || l == n || l == o;
  }
  return pc = i, pc;
}
var hc, p2;
function U_e() {
  if (p2) return hc;
  p2 = 1;
  var e = Gf(), t = e["__core-js_shared__"];
  return hc = t, hc;
}
var gc, h2;
function K_e() {
  if (h2) return gc;
  h2 = 1;
  var e = U_e(), t = function() {
    var r = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  }();
  function n(r) {
    return !!t && t in r;
  }
  return gc = n, gc;
}
var mc, g2;
function W_e() {
  if (g2) return mc;
  g2 = 1;
  var e = Function.prototype, t = e.toString;
  function n(r) {
    if (r != null) {
      try {
        return t.call(r);
      } catch {
      }
      try {
        return r + "";
      } catch {
      }
    }
    return "";
  }
  return mc = n, mc;
}
var vc, m2;
function G_e() {
  if (m2) return vc;
  m2 = 1;
  var e = V_e(), t = K_e(), n = hy(), r = W_e(), s = /[\\^$.*+?()[\]{}|]/g, o = /^\[object .+?Constructor\]$/, i = Function.prototype, a = Object.prototype, l = i.toString, u = a.hasOwnProperty, f = RegExp(
    "^" + l.call(u).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function c(p) {
    if (!n(p) || t(p))
      return !1;
    var d = e(p) ? f : o;
    return d.test(r(p));
  }
  return vc = c, vc;
}
var bc, v2;
function Z_e() {
  if (v2) return bc;
  v2 = 1;
  function e(t, n) {
    return t == null ? void 0 : t[n];
  }
  return bc = e, bc;
}
var _c, b2;
function gy() {
  if (b2) return _c;
  b2 = 1;
  var e = G_e(), t = Z_e();
  function n(r, s) {
    var o = t(r, s);
    return e(o) ? o : void 0;
  }
  return _c = n, _c;
}
var yc, _2;
function ia() {
  if (_2) return yc;
  _2 = 1;
  var e = gy(), t = e(Object, "create");
  return yc = t, yc;
}
var wc, y2;
function X_e() {
  if (y2) return wc;
  y2 = 1;
  var e = ia();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return wc = t, wc;
}
var kc, w2;
function Y_e() {
  if (w2) return kc;
  w2 = 1;
  function e(t) {
    var n = this.has(t) && delete this.__data__[t];
    return this.size -= n ? 1 : 0, n;
  }
  return kc = e, kc;
}
var Cc, k2;
function J_e() {
  if (k2) return Cc;
  k2 = 1;
  var e = ia(), t = "__lodash_hash_undefined__", n = Object.prototype, r = n.hasOwnProperty;
  function s(o) {
    var i = this.__data__;
    if (e) {
      var a = i[o];
      return a === t ? void 0 : a;
    }
    return r.call(i, o) ? i[o] : void 0;
  }
  return Cc = s, Cc;
}
var xc, C2;
function Q_e() {
  if (C2) return xc;
  C2 = 1;
  var e = ia(), t = Object.prototype, n = t.hasOwnProperty;
  function r(s) {
    var o = this.__data__;
    return e ? o[s] !== void 0 : n.call(o, s);
  }
  return xc = r, xc;
}
var Ec, x2;
function eye() {
  if (x2) return Ec;
  x2 = 1;
  var e = ia(), t = "__lodash_hash_undefined__";
  function n(r, s) {
    var o = this.__data__;
    return this.size += this.has(r) ? 0 : 1, o[r] = e && s === void 0 ? t : s, this;
  }
  return Ec = n, Ec;
}
var Sc, E2;
function tye() {
  if (E2) return Sc;
  E2 = 1;
  var e = X_e(), t = Y_e(), n = J_e(), r = Q_e(), s = eye();
  function o(i) {
    var a = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++a < l; ) {
      var u = i[a];
      this.set(u[0], u[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = s, Sc = o, Sc;
}
var Ac, S2;
function nye() {
  if (S2) return Ac;
  S2 = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Ac = e, Ac;
}
var Tc, A2;
function rye() {
  if (A2) return Tc;
  A2 = 1;
  function e(t, n) {
    return t === n || t !== t && n !== n;
  }
  return Tc = e, Tc;
}
var Mc, T2;
function aa() {
  if (T2) return Mc;
  T2 = 1;
  var e = rye();
  function t(n, r) {
    for (var s = n.length; s--; )
      if (e(n[s][0], r))
        return s;
    return -1;
  }
  return Mc = t, Mc;
}
var $c, M2;
function oye() {
  if (M2) return $c;
  M2 = 1;
  var e = aa(), t = Array.prototype, n = t.splice;
  function r(s) {
    var o = this.__data__, i = e(o, s);
    if (i < 0)
      return !1;
    var a = o.length - 1;
    return i == a ? o.pop() : n.call(o, i, 1), --this.size, !0;
  }
  return $c = r, $c;
}
var Ic, $2;
function sye() {
  if ($2) return Ic;
  $2 = 1;
  var e = aa();
  function t(n) {
    var r = this.__data__, s = e(r, n);
    return s < 0 ? void 0 : r[s][1];
  }
  return Ic = t, Ic;
}
var Lc, I2;
function iye() {
  if (I2) return Lc;
  I2 = 1;
  var e = aa();
  function t(n) {
    return e(this.__data__, n) > -1;
  }
  return Lc = t, Lc;
}
var Oc, L2;
function aye() {
  if (L2) return Oc;
  L2 = 1;
  var e = aa();
  function t(n, r) {
    var s = this.__data__, o = e(s, n);
    return o < 0 ? (++this.size, s.push([n, r])) : s[o][1] = r, this;
  }
  return Oc = t, Oc;
}
var Rc, O2;
function lye() {
  if (O2) return Rc;
  O2 = 1;
  var e = nye(), t = oye(), n = sye(), r = iye(), s = aye();
  function o(i) {
    var a = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++a < l; ) {
      var u = i[a];
      this.set(u[0], u[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = s, Rc = o, Rc;
}
var Pc, R2;
function cye() {
  if (R2) return Pc;
  R2 = 1;
  var e = gy(), t = Gf(), n = e(t, "Map");
  return Pc = n, Pc;
}
var Dc, P2;
function uye() {
  if (P2) return Dc;
  P2 = 1;
  var e = tye(), t = lye(), n = cye();
  function r() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (n || t)(),
      string: new e()
    };
  }
  return Dc = r, Dc;
}
var Nc, D2;
function fye() {
  if (D2) return Nc;
  D2 = 1;
  function e(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
  }
  return Nc = e, Nc;
}
var Bc, N2;
function la() {
  if (N2) return Bc;
  N2 = 1;
  var e = fye();
  function t(n, r) {
    var s = n.__data__;
    return e(r) ? s[typeof r == "string" ? "string" : "hash"] : s.map;
  }
  return Bc = t, Bc;
}
var Fc, B2;
function dye() {
  if (B2) return Fc;
  B2 = 1;
  var e = la();
  function t(n) {
    var r = e(this, n).delete(n);
    return this.size -= r ? 1 : 0, r;
  }
  return Fc = t, Fc;
}
var qc, F2;
function pye() {
  if (F2) return qc;
  F2 = 1;
  var e = la();
  function t(n) {
    return e(this, n).get(n);
  }
  return qc = t, qc;
}
var zc, q2;
function hye() {
  if (q2) return zc;
  q2 = 1;
  var e = la();
  function t(n) {
    return e(this, n).has(n);
  }
  return zc = t, zc;
}
var Hc, z2;
function gye() {
  if (z2) return Hc;
  z2 = 1;
  var e = la();
  function t(n, r) {
    var s = e(this, n), o = s.size;
    return s.set(n, r), this.size += s.size == o ? 0 : 1, this;
  }
  return Hc = t, Hc;
}
var jc, H2;
function mye() {
  if (H2) return jc;
  H2 = 1;
  var e = uye(), t = dye(), n = pye(), r = hye(), s = gye();
  function o(i) {
    var a = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++a < l; ) {
      var u = i[a];
      this.set(u[0], u[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = s, jc = o, jc;
}
var Vc, j2;
function vye() {
  if (j2) return Vc;
  j2 = 1;
  var e = mye(), t = "Expected a function";
  function n(r, s) {
    if (typeof r != "function" || s != null && typeof s != "function")
      throw new TypeError(t);
    var o = function() {
      var i = arguments, a = s ? s.apply(this, i) : i[0], l = o.cache;
      if (l.has(a))
        return l.get(a);
      var u = r.apply(this, i);
      return o.cache = l.set(a, u) || l, u;
    };
    return o.cache = new (n.Cache || e)(), o;
  }
  return n.Cache = e, Vc = n, Vc;
}
var Uc, V2;
function bye() {
  if (V2) return Uc;
  V2 = 1;
  var e = vye(), t = 500;
  function n(r) {
    var s = e(r, function(i) {
      return o.size === t && o.clear(), i;
    }), o = s.cache;
    return s;
  }
  return Uc = n, Uc;
}
var Kc, U2;
function _ye() {
  if (U2) return Kc;
  U2 = 1;
  var e = bye(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, r = e(function(s) {
    var o = [];
    return s.charCodeAt(0) === 46 && o.push(""), s.replace(t, function(i, a, l, u) {
      o.push(l ? u.replace(n, "$1") : a || i);
    }), o;
  });
  return Kc = r, Kc;
}
var Wc, K2;
function yye() {
  if (K2) return Wc;
  K2 = 1;
  function e(t, n) {
    for (var r = -1, s = t == null ? 0 : t.length, o = Array(s); ++r < s; )
      o[r] = n(t[r], r, t);
    return o;
  }
  return Wc = e, Wc;
}
var Gc, W2;
function wye() {
  if (W2) return Gc;
  W2 = 1;
  var e = Zf(), t = yye(), n = Wf(), r = Xf(), s = e ? e.prototype : void 0, o = s ? s.toString : void 0;
  function i(a) {
    if (typeof a == "string")
      return a;
    if (n(a))
      return t(a, i) + "";
    if (r(a))
      return o ? o.call(a) : "";
    var l = a + "";
    return l == "0" && 1 / a == -1 / 0 ? "-0" : l;
  }
  return Gc = i, Gc;
}
var Zc, G2;
function kye() {
  if (G2) return Zc;
  G2 = 1;
  var e = wye();
  function t(n) {
    return n == null ? "" : e(n);
  }
  return Zc = t, Zc;
}
var Xc, Z2;
function Cye() {
  if (Z2) return Xc;
  Z2 = 1;
  var e = Wf(), t = j_e(), n = _ye(), r = kye();
  function s(o, i) {
    return e(o) ? o : t(o, i) ? [o] : n(r(o));
  }
  return Xc = s, Xc;
}
var Yc, X2;
function xye() {
  if (X2) return Yc;
  X2 = 1;
  var e = Xf();
  function t(n) {
    if (typeof n == "string" || e(n))
      return n;
    var r = n + "";
    return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
  }
  return Yc = t, Yc;
}
var Jc, Y2;
function Eye() {
  if (Y2) return Jc;
  Y2 = 1;
  var e = Cye(), t = xye();
  function n(r, s) {
    s = e(s, r);
    for (var o = 0, i = s.length; r != null && o < i; )
      r = r[t(s[o++])];
    return o && o == i ? r : void 0;
  }
  return Jc = n, Jc;
}
var Qc, J2;
function Sye() {
  if (J2) return Qc;
  J2 = 1;
  var e = Eye();
  function t(n, r, s) {
    var o = n == null ? void 0 : e(n, r);
    return o === void 0 ? s : o;
  }
  return Qc = t, Qc;
}
Sye();
function Aye(e) {
  const t = e.regex, n = {}, r = {
    begin: /\$\{/,
    end: /\}/,
    contains: [
      "self",
      {
        begin: /:-/,
        contains: [n]
      }
      // default values
    ]
  };
  Object.assign(n, {
    className: "variable",
    variants: [
      { begin: t.concat(
        /\$[\w\d#@][\w\d_]*/,
        // negative look-ahead tries to avoid matching patterns that are not
        // Perl at all like $ident$, @ident@, etc.
        "(?![\\w\\d])(?![$])"
      ) },
      r
    ]
  });
  const s = {
    className: "subst",
    begin: /\$\(/,
    end: /\)/,
    contains: [e.BACKSLASH_ESCAPE]
  }, o = {
    begin: /<<-?\s*(?=\w+)/,
    starts: { contains: [
      e.END_SAME_AS_BEGIN({
        begin: /(\w+)/,
        end: /(\w+)/,
        className: "string"
      })
    ] }
  }, i = {
    className: "string",
    begin: /"/,
    end: /"/,
    contains: [
      e.BACKSLASH_ESCAPE,
      n,
      s
    ]
  };
  s.contains.push(i);
  const a = {
    match: /\\"/
  }, l = {
    className: "string",
    begin: /'/,
    end: /'/
  }, u = {
    match: /\\'/
  }, f = {
    begin: /\$?\(\(/,
    end: /\)\)/,
    contains: [
      {
        begin: /\d+#[0-9a-f]+/,
        className: "number"
      },
      e.NUMBER_MODE,
      n
    ]
  }, c = [
    "fish",
    "bash",
    "zsh",
    "sh",
    "csh",
    "ksh",
    "tcsh",
    "dash",
    "scsh"
  ], p = e.SHEBANG({
    binary: `(${c.join("|")})`,
    relevance: 10
  }), d = {
    className: "function",
    begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
    returnBegin: !0,
    contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
    relevance: 0
  }, m = [
    "if",
    "then",
    "else",
    "elif",
    "fi",
    "for",
    "while",
    "until",
    "in",
    "do",
    "done",
    "case",
    "esac",
    "function",
    "select"
  ], g = [
    "true",
    "false"
  ], C = { match: /(\/[a-z._-]+)+/ }, h = [
    "break",
    "cd",
    "continue",
    "eval",
    "exec",
    "exit",
    "export",
    "getopts",
    "hash",
    "pwd",
    "readonly",
    "return",
    "shift",
    "test",
    "times",
    "trap",
    "umask",
    "unset"
  ], k = [
    "alias",
    "bind",
    "builtin",
    "caller",
    "command",
    "declare",
    "echo",
    "enable",
    "help",
    "let",
    "local",
    "logout",
    "mapfile",
    "printf",
    "read",
    "readarray",
    "source",
    "type",
    "typeset",
    "ulimit",
    "unalias"
  ], y = [
    "autoload",
    "bg",
    "bindkey",
    "bye",
    "cap",
    "chdir",
    "clone",
    "comparguments",
    "compcall",
    "compctl",
    "compdescribe",
    "compfiles",
    "compgroups",
    "compquote",
    "comptags",
    "comptry",
    "compvalues",
    "dirs",
    "disable",
    "disown",
    "echotc",
    "echoti",
    "emulate",
    "fc",
    "fg",
    "float",
    "functions",
    "getcap",
    "getln",
    "history",
    "integer",
    "jobs",
    "kill",
    "limit",
    "log",
    "noglob",
    "popd",
    "print",
    "pushd",
    "pushln",
    "rehash",
    "sched",
    "setcap",
    "setopt",
    "stat",
    "suspend",
    "ttyctl",
    "unfunction",
    "unhash",
    "unlimit",
    "unsetopt",
    "vared",
    "wait",
    "whence",
    "where",
    "which",
    "zcompile",
    "zformat",
    "zftp",
    "zle",
    "zmodload",
    "zparseopts",
    "zprof",
    "zpty",
    "zregexparse",
    "zsocket",
    "zstyle",
    "ztcp"
  ], _ = [
    "chcon",
    "chgrp",
    "chown",
    "chmod",
    "cp",
    "dd",
    "df",
    "dir",
    "dircolors",
    "ln",
    "ls",
    "mkdir",
    "mkfifo",
    "mknod",
    "mktemp",
    "mv",
    "realpath",
    "rm",
    "rmdir",
    "shred",
    "sync",
    "touch",
    "truncate",
    "vdir",
    "b2sum",
    "base32",
    "base64",
    "cat",
    "cksum",
    "comm",
    "csplit",
    "cut",
    "expand",
    "fmt",
    "fold",
    "head",
    "join",
    "md5sum",
    "nl",
    "numfmt",
    "od",
    "paste",
    "ptx",
    "pr",
    "sha1sum",
    "sha224sum",
    "sha256sum",
    "sha384sum",
    "sha512sum",
    "shuf",
    "sort",
    "split",
    "sum",
    "tac",
    "tail",
    "tr",
    "tsort",
    "unexpand",
    "uniq",
    "wc",
    "arch",
    "basename",
    "chroot",
    "date",
    "dirname",
    "du",
    "echo",
    "env",
    "expr",
    "factor",
    // "false", // keyword literal already
    "groups",
    "hostid",
    "id",
    "link",
    "logname",
    "nice",
    "nohup",
    "nproc",
    "pathchk",
    "pinky",
    "printenv",
    "printf",
    "pwd",
    "readlink",
    "runcon",
    "seq",
    "sleep",
    "stat",
    "stdbuf",
    "stty",
    "tee",
    "test",
    "timeout",
    // "true", // keyword literal already
    "tty",
    "uname",
    "unlink",
    "uptime",
    "users",
    "who",
    "whoami",
    "yes"
  ];
  return {
    name: "Bash",
    aliases: ["sh"],
    keywords: {
      $pattern: /\b[a-z][a-z0-9._-]+\b/,
      keyword: m,
      literal: g,
      built_in: [
        ...h,
        ...k,
        // Shell modifiers
        "set",
        "shopt",
        ...y,
        ..._
      ]
    },
    contains: [
      p,
      // to catch known shells and boost relevancy
      e.SHEBANG(),
      // to catch unknown shells but still highlight the shebang
      d,
      f,
      e.HASH_COMMENT_MODE,
      o,
      C,
      i,
      a,
      l,
      u,
      n
    ]
  };
}
function Tye(e) {
  const t = e.regex, n = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u"), r = [
    "and",
    "as",
    "assert",
    "async",
    "await",
    "break",
    "case",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "match",
    "nonlocal|10",
    "not",
    "or",
    "pass",
    "raise",
    "return",
    "try",
    "while",
    "with",
    "yield"
  ], a = {
    $pattern: /[A-Za-z]\w+|__\w+__/,
    keyword: r,
    built_in: [
      "__import__",
      "abs",
      "all",
      "any",
      "ascii",
      "bin",
      "bool",
      "breakpoint",
      "bytearray",
      "bytes",
      "callable",
      "chr",
      "classmethod",
      "compile",
      "complex",
      "delattr",
      "dict",
      "dir",
      "divmod",
      "enumerate",
      "eval",
      "exec",
      "filter",
      "float",
      "format",
      "frozenset",
      "getattr",
      "globals",
      "hasattr",
      "hash",
      "help",
      "hex",
      "id",
      "input",
      "int",
      "isinstance",
      "issubclass",
      "iter",
      "len",
      "list",
      "locals",
      "map",
      "max",
      "memoryview",
      "min",
      "next",
      "object",
      "oct",
      "open",
      "ord",
      "pow",
      "print",
      "property",
      "range",
      "repr",
      "reversed",
      "round",
      "set",
      "setattr",
      "slice",
      "sorted",
      "staticmethod",
      "str",
      "sum",
      "super",
      "tuple",
      "type",
      "vars",
      "zip"
    ],
    literal: [
      "__debug__",
      "Ellipsis",
      "False",
      "None",
      "NotImplemented",
      "True"
    ],
    type: [
      "Any",
      "Callable",
      "Coroutine",
      "Dict",
      "List",
      "Literal",
      "Generic",
      "Optional",
      "Sequence",
      "Set",
      "Tuple",
      "Type",
      "Union"
    ]
  }, l = {
    className: "meta",
    begin: /^(>>>|\.\.\.) /
  }, u = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: a,
    illegal: /#/
  }, f = {
    begin: /\{\{/,
    relevance: 0
  }, c = {
    className: "string",
    contains: [e.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l
        ],
        relevance: 10
      },
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l
        ],
        relevance: 10
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l,
          f,
          u
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l,
          f,
          u
        ]
      },
      {
        begin: /([uU]|[rR])'/,
        end: /'/,
        relevance: 10
      },
      {
        begin: /([uU]|[rR])"/,
        end: /"/,
        relevance: 10
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])'/,
        end: /'/
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])"/,
        end: /"/
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'/,
        end: /'/,
        contains: [
          e.BACKSLASH_ESCAPE,
          f,
          u
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"/,
        end: /"/,
        contains: [
          e.BACKSLASH_ESCAPE,
          f,
          u
        ]
      },
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  }, p = "[0-9](_?[0-9])*", d = `(\\b(${p}))?\\.(${p})|\\b(${p})\\.`, m = `\\b|${r.join("|")}`, g = {
    className: "number",
    relevance: 0,
    variants: [
      // exponentfloat, pointfloat
      // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
      // optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      // Note: no leading \b because floats can start with a decimal point
      // and we don't want to mishandle e.g. `fn(.5)`,
      // no trailing \b for pointfloat because it can end with a decimal point
      // and we don't want to mishandle e.g. `0..hex()`; this should be safe
      // because both MUST contain a decimal point and so cannot be confused with
      // the interior part of an identifier
      {
        begin: `(\\b(${p})|(${d}))[eE][+-]?(${p})[jJ]?(?=${m})`
      },
      {
        begin: `(${d})[jJ]?`
      },
      // decinteger, bininteger, octinteger, hexinteger
      // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
      // optionally "long" in Python 2
      // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
      // decinteger is optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${m})`
      },
      {
        begin: `\\b0[bB](_?[01])+[lL]?(?=${m})`
      },
      {
        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${m})`
      },
      {
        begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${m})`
      },
      // imagnumber (digitpart-based)
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b(${p})[jJ](?=${m})`
      }
    ]
  }, C = {
    className: "comment",
    begin: t.lookahead(/# type:/),
    end: /$/,
    keywords: a,
    contains: [
      {
        // prevent keywords from coloring `type`
        begin: /# type:/
      },
      // comment within a datatype comment includes no keywords
      {
        begin: /#/,
        end: /\b\B/,
        endsWithParent: !0
      }
    ]
  }, h = {
    className: "params",
    variants: [
      // Exclude params in functions without params
      {
        className: "",
        begin: /\(\s*\)/,
        skip: !0
      },
      {
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: a,
        contains: [
          "self",
          l,
          g,
          c,
          e.HASH_COMMENT_MODE
        ]
      }
    ]
  };
  return u.contains = [
    c,
    g,
    l
  ], {
    name: "Python",
    aliases: [
      "py",
      "gyp",
      "ipython"
    ],
    unicodeRegex: !0,
    keywords: a,
    illegal: /(<\/|\?)|=>/,
    contains: [
      l,
      g,
      {
        // very common convention
        begin: /\bself\b/
      },
      {
        // eat "if" prior to string so that it won't accidentally be
        // labeled as an f-string
        beginKeywords: "if",
        relevance: 0
      },
      c,
      C,
      e.HASH_COMMENT_MODE,
      {
        match: [
          /\bdef/,
          /\s+/,
          n
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [h]
      },
      {
        variants: [
          {
            match: [
              /\bclass/,
              /\s+/,
              n,
              /\s*/,
              /\(\s*/,
              n,
              /\s*\)/
            ]
          },
          {
            match: [
              /\bclass/,
              /\s+/,
              n
            ]
          }
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          6: "title.class.inherited"
        }
      },
      {
        className: "meta",
        begin: /^[\t ]*@/,
        end: /(?=#)|$/,
        contains: [
          g,
          h,
          c
        ]
      }
    ]
  };
}
const Si = "[A-Za-z$_][0-9A-Za-z$_]*", my = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends"
], vy = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], by = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], _y = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], yy = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], wy = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], ky = [].concat(
  yy,
  by,
  _y
);
function Mye(e) {
  const t = e.regex, n = (H, { after: J }) => {
    const L = "</" + H[0].slice(1);
    return H.input.indexOf(L, J) !== -1;
  }, r = Si, s = {
    begin: "<>",
    end: "</>"
  }, o = /<[A-Za-z0-9\\._:-]+\s*\/>/, i = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (H, J) => {
      const L = H[0].length + H.index, Z = H.input[L];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Z === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Z === ","
      ) {
        J.ignoreMatch();
        return;
      }
      Z === ">" && (n(H, { after: L }) || J.ignoreMatch());
      let K;
      const me = H.input.substring(L);
      if (K = me.match(/^\s*=/)) {
        J.ignoreMatch();
        return;
      }
      if ((K = me.match(/^\s+extends\s+/)) && K.index === 0) {
        J.ignoreMatch();
        return;
      }
    }
  }, a = {
    $pattern: Si,
    keyword: my,
    literal: vy,
    built_in: ky,
    "variable.language": wy
  }, l = "[0-9](_?[0-9])*", u = `\\.(${l})`, f = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", c = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${f})((${u})|\\.)?|(${u}))[eE][+-]?(${l})\\b` },
      { begin: `\\b(${f})\\b((${u})\\b|\\.)?|(${u})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, p = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: a,
    contains: []
    // defined later
  }, d = {
    begin: "html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "xml"
    }
  }, m = {
    begin: "css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "css"
    }
  }, g = {
    begin: "gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "graphql"
    }
  }, C = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      p
    ]
  }, k = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: r + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, y = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    d,
    m,
    g,
    C,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    c
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  p.contains = y.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: a,
    contains: [
      "self"
    ].concat(y)
  });
  const _ = [].concat(k, p.contains), E = _.concat([
    // eat recursive parens in sub expressions
    {
      begin: /\(/,
      end: /\)/,
      keywords: a,
      contains: ["self"].concat(_)
    }
  ]), x = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: a,
    contains: E
  }, M = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          r,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(r, "(", t.concat(/\./, r), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          r
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, $ = {
    relevance: 0,
    match: t.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...by,
        ..._y
      ]
    }
  }, O = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, D = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          r,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [x],
    illegal: /%/
  }, B = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function N(H) {
    return t.concat("(?!", H.join("|"), ")");
  }
  const oe = {
    match: t.concat(
      /\b/,
      N([
        ...yy,
        "super",
        "import"
      ]),
      r,
      t.lookahead(/\(/)
    ),
    className: "title.function",
    relevance: 0
  }, q = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(r, /(?![0-9A-Za-z$_(])/)
    )),
    end: r,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, ie = {
    match: [
      /get|set/,
      /\s+/,
      r,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      x
    ]
  }, j = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", V = {
    match: [
      /const|var|let/,
      /\s+/,
      r,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(j)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      x
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: a,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: E, CLASS_REFERENCE: $ },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      O,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      d,
      m,
      g,
      C,
      k,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      c,
      $,
      {
        className: "attr",
        begin: r + t.lookahead(":"),
        relevance: 0
      },
      V,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          k,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: j,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: a,
                    contains: E
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: s.begin, end: s.end },
              { match: o },
              {
                begin: i.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": i.isTrulyOpeningTag,
                end: i.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: i.begin,
                end: i.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      D,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          x,
          e.inherit(e.TITLE_MODE, { begin: r, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      q,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + r,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [x]
      },
      oe,
      B,
      M,
      ie,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function $ye(e) {
  const t = Mye(e), n = Si, r = [
    "any",
    "void",
    "number",
    "boolean",
    "string",
    "object",
    "never",
    "symbol",
    "bigint",
    "unknown"
  ], s = {
    beginKeywords: "namespace",
    end: /\{/,
    excludeEnd: !0,
    contains: [t.exports.CLASS_REFERENCE]
  }, o = {
    beginKeywords: "interface",
    end: /\{/,
    excludeEnd: !0,
    keywords: {
      keyword: "interface extends",
      built_in: r
    },
    contains: [t.exports.CLASS_REFERENCE]
  }, i = {
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  }, a = [
    "type",
    "namespace",
    "interface",
    "public",
    "private",
    "protected",
    "implements",
    "declare",
    "abstract",
    "readonly",
    "enum",
    "override"
  ], l = {
    $pattern: Si,
    keyword: my.concat(a),
    literal: vy,
    built_in: ky.concat(r),
    "variable.language": wy
  }, u = {
    className: "meta",
    begin: "@" + n
  }, f = (p, d, m) => {
    const g = p.contains.findIndex((C) => C.label === d);
    if (g === -1)
      throw new Error("can not find mode to replace");
    p.contains.splice(g, 1, m);
  };
  Object.assign(t.keywords, l), t.exports.PARAMS_CONTAINS.push(u), t.contains = t.contains.concat([
    u,
    s,
    o
  ]), f(t, "shebang", e.SHEBANG()), f(t, "use_strict", i);
  const c = t.contains.find((p) => p.label === "func.def");
  return c.relevance = 0, Object.assign(t, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  }), t;
}
const Iye = /* @__PURE__ */ re({
  name: "VueMarkdown",
  props: {
    source: {
      type: String,
      required: !0
    },
    options: {
      type: Object,
      required: !1
    },
    plugins: {
      type: Array,
      required: !1
    }
  },
  setup(e) {
    const t = W(new e_e(e.options ?? {}));
    for (const r of e.plugins ?? [])
      t.value.use(r);
    const n = P(() => t.value.render(e.source));
    return () => _n("div", { innerHTML: n.value });
  }
}), Lye = {
  key: 0,
  class: "chat-message-actions"
}, Oye = {
  key: 2,
  class: "chat-message-files"
}, Nu = /* @__PURE__ */ re({
  __name: "Message",
  props: {
    message: {}
  },
  setup(e, { expose: t }) {
    const n = e;
    Vn.registerLanguage("javascript", Ag), Vn.registerLanguage("typescript", $ye), Vn.registerLanguage("python", Tye), Vn.registerLanguage("xml", Tg), Vn.registerLanguage("bash", Aye);
    const { message: r } = Ri(n), { options: s } = bs(), o = W(null), i = W({}), a = P(() => r.value.text || "&lt;Empty response&gt;"), l = P(() => ({
      "chat-message-from-user": r.value.sender === "user",
      "chat-message-from-bot": r.value.sender === "bot",
      "chat-message-transparent": r.value.transparent === !0
    })), u = (m) => {
      m.use(r_e, {
        attrs: {
          target: "_blank",
          rel: "noopener"
        }
      });
    }, f = () => {
      var m;
      (m = o.value) != null && m.scrollIntoView && o.value.scrollIntoView({
        block: "start"
      });
    }, c = {
      highlight(m, g) {
        if (g && Vn.getLanguage(g))
          try {
            return Vn.highlight(m, { language: g }).value;
          } catch {
          }
        return "";
      }
    }, p = { ...(s == null ? void 0 : s.messageComponents) ?? {} };
    t({ scrollToView: f });
    const d = async (m) => await new Promise((g, C) => {
      const h = new FileReader();
      h.onload = () => g(h.result), h.onerror = C, h.readAsDataURL(m);
    });
    return it(async () => {
      if (r.value.files)
        for (const m of r.value.files)
          try {
            const g = await d(m);
            i.value[m.name] = g;
          } catch (g) {
            console.error("Error reading file:", g);
          }
    }), (m, g) => (w(), A("div", {
      ref_key: "messageContainer",
      ref: o,
      class: Q(["chat-message", l.value])
    }, [
      m.$slots.beforeMessage ? (w(), A("div", Lye, [
        we(m.$slots, "beforeMessage", li(rf({ message: b(r) })))
      ])) : _e("", !0),
      we(m.$slots, "default", {}, () => [
        b(r).type === "component" && p[b(r).key] ? (w(), ue(Pt(p[b(r).key]), li(gt({ key: 0 }, b(r).arguments)), null, 16)) : (w(), ue(b(Iye), {
          key: 1,
          class: "chat-message-markdown",
          source: a.value,
          options: c,
          plugins: [u]
        }, null, 8, ["source", "plugins"])),
        (b(r).files ?? []).length > 0 ? (w(), A("div", Oye, [
          (w(!0), A(et, null, Cn(b(r).files ?? [], (C) => (w(), A("div", {
            key: C.name,
            class: "chat-message-file"
          }, [
            Ce(Mg, {
              file: C,
              "is-removable": !1,
              "is-previewable": !0
            }, null, 8, ["file"])
          ]))), 128))
        ])) : _e("", !0)
      ])
    ], 2));
  }
}), Rye = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Pye(e, t) {
  return w(), A("svg", Rye, t[0] || (t[0] = [
    v("path", {
      fill: "currentColor",
      d: "M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8"
    }, null, -1)
  ]));
}
const Dye = { name: "mdi-chat", render: Pye }, Nye = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Bye(e, t) {
  return w(), A("svg", Nye, t[0] || (t[0] = [
    v("path", {
      fill: "currentColor",
      d: "M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
    }, null, -1)
  ]));
}
const Fye = { name: "mdi-chevron-down", render: Bye }, qye = { class: "chat-window-wrapper" }, zye = { class: "chat-window" }, Hye = /* @__PURE__ */ re({
  __name: "ChatWindow",
  setup(e) {
    const t = W(!1);
    function n() {
      t.value = !t.value, t.value && Ue(() => {
        Vt.emit("scrollToBottom");
      });
    }
    return (r, s) => (w(), A("div", qye, [
      Ce(Xr, { name: "chat-window-transition" }, {
        default: he(() => [
          Ut(v("div", zye, [
            Ce(Cy)
          ], 512), [
            [Qn, t.value]
          ])
        ]),
        _: 1
      }),
      v("div", {
        class: "chat-window-toggle",
        onClick: n
      }, [
        Ce(Xr, {
          name: "chat-window-toggle-transition",
          mode: "out-in"
        }, {
          default: he(() => [
            t.value ? (w(), ue(b(Fye), {
              key: 1,
              height: "32",
              width: "32"
            })) : (w(), ue(b(Dye), {
              key: 0,
              height: "32",
              width: "32"
            }))
          ]),
          _: 1
        })
      ])
    ]));
  }
}), jye = /* @__PURE__ */ re({
  __name: "MessageTyping",
  props: {
    animation: { default: "bouncing" }
  },
  setup(e) {
    const t = e, n = {
      id: "typing",
      text: "",
      sender: "bot"
    }, r = W(), s = P(() => ({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "chat-message-typing": !0,
      [`chat-message-typing-animation-${t.animation}`]: !0
    }));
    return it(() => {
      var o;
      (o = r.value) == null || o.scrollToView();
    }), (o, i) => (w(), ue(b(Nu), {
      ref_key: "messageContainer",
      ref: r,
      class: Q(s.value),
      message: n,
      "data-test-id": "chat-message-typing"
    }, {
      default: he(() => i[0] || (i[0] = [
        v("div", { class: "chat-message-typing-body" }, [
          v("span", { class: "chat-message-typing-circle" }),
          v("span", { class: "chat-message-typing-circle" }),
          v("span", { class: "chat-message-typing-circle" })
        ], -1)
      ])),
      _: 1
    }, 8, ["class"]));
  }
}), Vye = {
  key: 0,
  class: "empty-container"
}, Uye = {
  class: "empty",
  "data-test-id": "chat-messages-empty"
}, Kye = {
  key: 1,
  class: "chat-messages-list"
}, Wye = /* @__PURE__ */ re({
  __name: "MessagesList",
  props: {
    messages: {},
    emptyText: {}
  },
  setup(e) {
    const t = cf(), n = W([]), { initialMessages: r, waitingForResponse: s } = t;
    return Te(
      () => n.value.length,
      () => {
        const o = n.value[n.value.length - 1];
        o && o.scrollToView();
      }
    ), (o, i) => o.emptyText && b(r).length === 0 && o.messages.length === 0 ? (w(), A("div", Vye, [
      v("div", Uye, [
        Ce(b(Bf), {
          icon: "message-circle",
          size: "large",
          class: "emptyIcon"
        }),
        Ce(b(vP), {
          tag: "p",
          size: "medium",
          color: "text-base"
        }, {
          default: he(() => [
            Zr(Je(o.emptyText), 1)
          ]),
          _: 1
        })
      ])
    ])) : (w(), A("div", Kye, [
      (w(!0), A(et, null, Cn(b(r), (a) => (w(), ue(Nu, {
        key: a.id,
        message: a
      }, null, 8, ["message"]))), 128)),
      (w(!0), A(et, null, Cn(o.messages, (a) => (w(), ue(Nu, {
        key: a.id,
        ref_for: !0,
        ref_key: "messageComponents",
        ref: n,
        message: a
      }, {
        beforeMessage: he(({ message: l }) => [
          we(o.$slots, "beforeMessage", gt({ ref_for: !0 }, { message: l }))
        ]),
        _: 2
      }, 1032, ["message"]))), 128)),
      b(s) ? (w(), ue(jye, { key: 0 })) : _e("", !0)
    ]));
  }
}), Gye = { class: "chat-heading" }, Zye = ["title"], Xye = { key: 0 }, Cy = /* @__PURE__ */ re({
  __name: "Chat",
  setup(e) {
    const { t } = Hi(), n = cf(), { messages: r, currentSessionId: s } = n, { options: o } = bs(), i = P(() => o.mode === "window" && o.showWindowCloseButton);
    async function a() {
      n.startNewSession && (n.startNewSession(), Ue(() => {
        Vt.emit("scrollToBottom");
      }));
    }
    async function l() {
      n.loadPreviousSession && (await n.loadPreviousSession(), Ue(() => {
        Vt.emit("scrollToBottom");
      }));
    }
    function u() {
      Vt.emit("close");
    }
    return it(async () => {
      await l(), !o.showWelcomeScreen && !s.value && await a();
    }), (f, c) => (w(), ue(Jk, { class: "chat-wrapper" }, {
      header: he(() => [
        v("div", Gye, [
          v("h1", null, Je(b(t)("title")), 1),
          i.value ? (w(), A("button", {
            key: 0,
            class: "chat-close-button",
            title: b(t)("closeButtonTooltip"),
            onClick: u
          }, [
            Ce(b(G3), {
              height: "18",
              width: "18"
            })
          ], 8, Zye)) : _e("", !0)
        ]),
        b(t)("subtitle") ? (w(), A("p", Xye, Je(b(t)("subtitle")), 1)) : _e("", !0)
      ]),
      footer: he(() => [
        b(s) ? (w(), ue(Gk, { key: 0 })) : (w(), ue(ak, { key: 1 }))
      ]),
      default: he(() => [
        !b(s) && b(o).showWelcomeScreen ? (w(), ue(ek, {
          key: 0,
          "onClick:button": a
        })) : (w(), ue(Wye, {
          key: 1,
          messages: b(r)
        }, null, 8, ["messages"]))
      ]),
      _: 1
    }));
  }
}), Yye = /* @__PURE__ */ re({
  __name: "App",
  props: {},
  setup(e) {
    const { options: t } = bs(), n = P(() => t.mode === "fullscreen");
    return it(() => {
      Vn.registerLanguage("xml", Tg), Vn.registerLanguage("javascript", Ag);
    }), (r, s) => n.value ? (w(), ue(Cy, {
      key: 0,
      class: "n8n-chat"
    })) : (w(), ue(Hye, {
      key: 1,
      class: "n8n-chat"
    }));
  }
});
function Qye(e) {
  var s, o;
  const t = {
    ...Ro,
    ...e,
    webhookConfig: {
      ...Ro.webhookConfig,
      ...e == null ? void 0 : e.webhookConfig
    },
    i18n: {
      ...Ro.i18n,
      ...e == null ? void 0 : e.i18n,
      en: {
        ...(s = Ro.i18n) == null ? void 0 : s.en,
        ...(o = e == null ? void 0 : e.i18n) == null ? void 0 : o.en
      }
    },
    theme: {
      ...Ro.theme,
      ...e == null ? void 0 : e.theme
    }
  }, n = t.target ?? d3;
  typeof n == "string" && A3(n);
  const r = c3(Yye);
  return r.use(F3, t), r.mount(n), r;
}
// Global export for script tag usage
window.N8nChat = {
  createChat: Qye
};

// Also support module exports for compatibility
export {
  Qye as createChat
};
