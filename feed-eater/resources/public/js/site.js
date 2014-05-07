;(function(){
var g, aa = this;
function ba(a, b) {
  var c = a.split("."), d = aa;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var e;c.length && (e = c.shift());) {
    c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b;
  }
}
function p(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function ca(a) {
  var b = p(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function da(a) {
  return "string" == typeof a;
}
function ea(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
var fa = "closure_uid_" + (1E9 * Math.random() >>> 0), ga = 0;
var ha;
function ja(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
}
;var ka = Array.prototype, la = ka.forEach ? function(a, b, c) {
  ka.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = da(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
};
function ma(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
}
;var na, oa, qa, ra;
function sa() {
  return aa.navigator ? aa.navigator.userAgent : null;
}
ra = qa = oa = na = !1;
var ta;
if (ta = sa()) {
  var ua = aa.navigator;
  na = 0 == ta.lastIndexOf("Opera", 0);
  oa = !na && (-1 != ta.indexOf("MSIE") || -1 != ta.indexOf("Trident"));
  qa = !na && -1 != ta.indexOf("WebKit");
  ra = !na && !qa && !oa && "Gecko" == ua.product;
}
var va = na, t = oa, wa = ra, xa = qa;
function ya() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var za;
a: {
  var Ba = "", Da;
  if (va && aa.opera) {
    var Ea = aa.opera.version, Ba = "function" == typeof Ea ? Ea() : Ea
  } else {
    if (wa ? Da = /rv\:([^\);]+)(\)|;)/ : t ? Da = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : xa && (Da = /WebKit\/(\S+)/), Da) {
      var Fa = Da.exec(sa()), Ba = Fa ? Fa[1] : ""
    }
  }
  if (t) {
    var Ga = ya();
    if (Ga > parseFloat(Ba)) {
      za = String(Ga);
      break a;
    }
  }
  za = Ba;
}
var Ha = {};
function Ia(a) {
  var b;
  if (!(b = Ha[a])) {
    b = 0;
    for (var c = ja(String(za)).split("."), d = ja(String(a)).split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = l.exec(h) || ["", "", ""], q = m.exec(k) || ["", "", ""];
        if (0 == n[0].length && 0 == q[0].length) {
          break;
        }
        b = ((0 == n[1].length ? 0 : parseInt(n[1], 10)) < (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? -1 : (0 == n[1].length ? 0 : parseInt(n[1], 10)) > (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? 1 : 0) || ((0 == n[2].length) < (0 == q[2].length) ? -1 : (0 == n[2].length) > (0 == q[2].length) ? 1 : 0) || (n[2] < q[2] ? -1 : n[2] > q[2] ? 1 : 0);
      } while (0 == b);
    }
    b = Ha[a] = 0 <= b;
  }
  return b;
}
var Ja = aa.document, Ka = Ja && t ? ya() || ("CSS1Compat" == Ja.compatMode ? parseInt(za, 10) : 5) : void 0;
!wa && !t || t && t && 9 <= Ka || wa && Ia("1.9.1");
t && Ia("9");
function La() {
  return!0;
}
;function Ma(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function Na(a, b, c) {
  function d(d) {
    d && b.appendChild(da(d) ? a.createTextNode(d) : d);
  }
  for (var e = 1;e < c.length;e++) {
    var f = c[e];
    !ca(f) || ea(f) && 0 < f.nodeType ? d(f) : la(Oa(f) ? ma(f) : f, d);
  }
}
function Oa(a) {
  if (a && "number" == typeof a.length) {
    if (ea(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if ("function" == p(a)) {
      return "function" == typeof a.item;
    }
  }
  return!1;
}
function Pa(a) {
  this.cb = a || aa.document || document;
}
Pa.prototype.createElement = function(a) {
  return this.cb.createElement(a);
};
Pa.prototype.createTextNode = function(a) {
  return this.cb.createTextNode(String(a));
};
Pa.prototype.appendChild = function(a, b) {
  a.appendChild(b);
};
Pa.prototype.append = function(a, b) {
  Na(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments);
};
function Qa(a, b) {
  null != a && this.append.apply(this, arguments);
}
Qa.prototype.pa = "";
Qa.prototype.append = function(a, b, c) {
  this.pa += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.pa += arguments[d];
    }
  }
  return this;
};
Qa.prototype.toString = function() {
  return this.pa;
};
var Ra = null;
function u(a) {
  return null != a && !1 !== a;
}
function x(a, b) {
  return a[p(null == b ? null : b)] ? !0 : a._ ? !0 : y ? !1 : null;
}
function Sa(a) {
  return null == a ? null : a.constructor;
}
function z(a, b) {
  var c = Sa(b), c = u(u(c) ? c.xb : c) ? c.wb : p(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Ta(a) {
  var b = a.wb;
  return u(b) ? b : "" + A(a);
}
function B(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var Ua = {}, Va = {};
function Wa(a) {
  if (a ? a.u : a) {
    return a.u(a);
  }
  var b;
  b = Wa[p(null == a ? null : a)];
  if (!b && (b = Wa._, !b)) {
    throw z("ICounted.-count", a);
  }
  return b.call(null, a);
}
function Xa(a, b) {
  if (a ? a.C : a) {
    return a.C(a, b);
  }
  var c;
  c = Xa[p(null == a ? null : a)];
  if (!c && (c = Xa._, !c)) {
    throw z("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var Ya = {}, C = function() {
  function a(a, b, c) {
    if (a ? a.J : a) {
      return a.J(a, b, c);
    }
    var h;
    h = C[p(null == a ? null : a)];
    if (!h && (h = C._, !h)) {
      throw z("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.F : a) {
      return a.F(a, b);
    }
    var c;
    c = C[p(null == a ? null : a)];
    if (!c && (c = C._, !c)) {
      throw z("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Za = {};
function E(a) {
  if (a ? a.Q : a) {
    return a.Q(a);
  }
  var b;
  b = E[p(null == a ? null : a)];
  if (!b && (b = E._, !b)) {
    throw z("ISeq.-first", a);
  }
  return b.call(null, a);
}
function F(a) {
  if (a ? a.R : a) {
    return a.R(a);
  }
  var b;
  b = F[p(null == a ? null : a)];
  if (!b && (b = F._, !b)) {
    throw z("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var $a = {}, ab = function() {
  function a(a, b, c) {
    if (a ? a.H : a) {
      return a.H(a, b, c);
    }
    var h;
    h = ab[p(null == a ? null : a)];
    if (!h && (h = ab._, !h)) {
      throw z("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.G : a) {
      return a.G(a, b);
    }
    var c;
    c = ab[p(null == a ? null : a)];
    if (!c && (c = ab._, !c)) {
      throw z("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function bb(a, b, c) {
  if (a ? a.qa : a) {
    return a.qa(a, b, c);
  }
  var d;
  d = bb[p(null == a ? null : a)];
  if (!d && (d = bb._, !d)) {
    throw z("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var cb = {}, db = {};
function eb(a) {
  if (a ? a.hb : a) {
    return a.hb();
  }
  var b;
  b = eb[p(null == a ? null : a)];
  if (!b && (b = eb._, !b)) {
    throw z("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function fb(a) {
  if (a ? a.ib : a) {
    return a.ib();
  }
  var b;
  b = fb[p(null == a ? null : a)];
  if (!b && (b = fb._, !b)) {
    throw z("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var gb = {};
function hb(a, b, c) {
  if (a ? a.bb : a) {
    return a.bb(a, b, c);
  }
  var d;
  d = hb[p(null == a ? null : a)];
  if (!d && (d = hb._, !d)) {
    throw z("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
var ib = {};
function jb(a) {
  if (a ? a.O : a) {
    return a.O(a);
  }
  var b;
  b = jb[p(null == a ? null : a)];
  if (!b && (b = jb._, !b)) {
    throw z("IMeta.-meta", a);
  }
  return b.call(null, a);
}
function kb(a, b) {
  if (a ? a.M : a) {
    return a.M(a, b);
  }
  var c;
  c = kb[p(null == a ? null : a)];
  if (!c && (c = kb._, !c)) {
    throw z("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var lb = {}, mb = function() {
  function a(a, b, c) {
    if (a ? a.L : a) {
      return a.L(a, b, c);
    }
    var h;
    h = mb[p(null == a ? null : a)];
    if (!h && (h = mb._, !h)) {
      throw z("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.K : a) {
      return a.K(a, b);
    }
    var c;
    c = mb[p(null == a ? null : a)];
    if (!c && (c = mb._, !c)) {
      throw z("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function nb(a, b) {
  if (a ? a.v : a) {
    return a.v(a, b);
  }
  var c;
  c = nb[p(null == a ? null : a)];
  if (!c && (c = nb._, !c)) {
    throw z("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function ob(a) {
  if (a ? a.A : a) {
    return a.A(a);
  }
  var b;
  b = ob[p(null == a ? null : a)];
  if (!b && (b = ob._, !b)) {
    throw z("IHash.-hash", a);
  }
  return b.call(null, a);
}
var pb = {};
function qb(a) {
  if (a ? a.t : a) {
    return a.t(a);
  }
  var b;
  b = qb[p(null == a ? null : a)];
  if (!b && (b = qb._, !b)) {
    throw z("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var rb = {};
function I(a, b) {
  if (a ? a.kb : a) {
    return a.kb(0, b);
  }
  var c;
  c = I[p(null == a ? null : a)];
  if (!c && (c = I._, !c)) {
    throw z("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var sb = {};
function tb(a, b, c) {
  if (a ? a.w : a) {
    return a.w(a, b, c);
  }
  var d;
  d = tb[p(null == a ? null : a)];
  if (!d && (d = tb._, !d)) {
    throw z("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function ub(a) {
  if (a ? a.za : a) {
    return a.za(a);
  }
  var b;
  b = ub[p(null == a ? null : a)];
  if (!b && (b = ub._, !b)) {
    throw z("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function vb(a, b) {
  if (a ? a.Ba : a) {
    return a.Ba(a, b);
  }
  var c;
  c = vb[p(null == a ? null : a)];
  if (!c && (c = vb._, !c)) {
    throw z("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function wb(a) {
  if (a ? a.Ca : a) {
    return a.Ca(a);
  }
  var b;
  b = wb[p(null == a ? null : a)];
  if (!b && (b = wb._, !b)) {
    throw z("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function xb(a, b, c) {
  if (a ? a.ta : a) {
    return a.ta(a, b, c);
  }
  var d;
  d = xb[p(null == a ? null : a)];
  if (!d && (d = xb._, !d)) {
    throw z("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function yb(a, b, c) {
  if (a ? a.jb : a) {
    return a.jb(0, b, c);
  }
  var d;
  d = yb[p(null == a ? null : a)];
  if (!d && (d = yb._, !d)) {
    throw z("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function zb(a) {
  if (a ? a.gb : a) {
    return a.gb();
  }
  var b;
  b = zb[p(null == a ? null : a)];
  if (!b && (b = zb._, !b)) {
    throw z("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function Cb(a) {
  if (a ? a.Ka : a) {
    return a.Ka(a);
  }
  var b;
  b = Cb[p(null == a ? null : a)];
  if (!b && (b = Cb._, !b)) {
    throw z("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function Db(a) {
  if (a ? a.La : a) {
    return a.La(a);
  }
  var b;
  b = Db[p(null == a ? null : a)];
  if (!b && (b = Db._, !b)) {
    throw z("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function Eb(a) {
  if (a ? a.Ja : a) {
    return a.Ja(a);
  }
  var b;
  b = Eb[p(null == a ? null : a)];
  if (!b && (b = Eb._, !b)) {
    throw z("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function Fb(a) {
  this.Ab = a;
  this.n = 0;
  this.f = 1073741824;
}
Fb.prototype.kb = function(a, b) {
  return this.Ab.append(b);
};
function J(a) {
  var b = new Qa;
  a.w(null, new Fb(b), new Gb(null, 5, [Hb, !0, Ib, !0, Jb, !1, Kb, !1, Lb, null], null));
  return "" + A(b);
}
function Mb(a, b) {
  if (u(Nb.a ? Nb.a(a, b) : Nb.call(null, a, b))) {
    return 0;
  }
  var c = u(a.Y) ? !1 : !0;
  if (u(c ? b.Y : c)) {
    return-1;
  }
  if (u(a.Y)) {
    if (!u(b.Y)) {
      return 1;
    }
    c = Ob.a ? Ob.a(a.Y, b.Y) : Ob.call(null, a.Y, b.Y);
    return 0 === c ? Ob.a ? Ob.a(a.name, b.name) : Ob.call(null, a.name, b.name) : c;
  }
  return Pb ? Ob.a ? Ob.a(a.name, b.name) : Ob.call(null, a.name, b.name) : null;
}
function K(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.f & 8388608 || a.ab)) {
    return a.t(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Qb(a, 0);
  }
  if (x(pb, a)) {
    return qb(a);
  }
  if (y) {
    throw Error([A(a), A("is not ISeqable")].join(""));
  }
  return null;
}
function L(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.f & 64 || a.Aa)) {
    return a.Q(null);
  }
  a = K(a);
  return null == a ? null : E(a);
}
function M(a) {
  return null != a ? a && (a.f & 64 || a.Aa) ? a.R(null) : (a = K(a)) ? F(a) : N : N;
}
function O(a) {
  return null == a ? null : a && (a.f & 128 || a.Gb) ? a.fa(null) : K(M(a));
}
var Nb = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || nb(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = R(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (O(e)) {
            a = d, d = L(e), e = O(e);
          } else {
            return b.a(d, L(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.r = 2;
    a.l = function(a) {
      var b = L(a);
      a = O(a);
      var d = L(a);
      a = M(a);
      return c(b, d, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, R(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.r = 2;
  b.l = c.l;
  b.d = function() {
    return!0;
  };
  b.a = a;
  b.k = c.k;
  return b;
}();
Va["null"] = !0;
Wa["null"] = function() {
  return 0;
};
Date.prototype.v = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
nb.number = function(a, b) {
  return a === b;
};
ib["function"] = !0;
jb["function"] = function() {
  return null;
};
Ua["function"] = !0;
ob._ = function(a) {
  return a[fa] || (a[fa] = ++ga);
};
var Rb = function() {
  function a(a, b, c, d) {
    for (var l = Wa(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, C.a(a, d)) : b.call(null, c, C.a(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = Wa(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, C.a(a, l)) : b.call(null, c, C.a(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = Wa(a);
    if (0 === c) {
      return b.ra ? "" : b.call(null);
    }
    for (var d = C.a(a, 0), l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, C.a(a, l)) : b.call(null, d, C.a(a, l)), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.i = a;
  return d;
}(), Sb = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = a.length, l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, a[l]) : b.call(null, c, a[l]), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.ra ? "" : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.i = a;
  return d;
}();
function Tb(a) {
  return a ? a.f & 2 || a.ya ? !0 : a.f ? !1 : x(Va, a) : x(Va, a);
}
function Ub(a) {
  return a ? a.f & 16 || a.sa ? !0 : a.f ? !1 : x(Ya, a) : x(Ya, a);
}
function Qb(a, b) {
  this.b = a;
  this.g = b;
  this.f = 166199550;
  this.n = 8192;
}
g = Qb.prototype;
g.toString = function() {
  return J(this);
};
g.F = function(a, b) {
  var c = b + this.g;
  return c < this.b.length ? this.b[c] : null;
};
g.J = function(a, b, c) {
  a = b + this.g;
  return a < this.b.length ? this.b[a] : c;
};
g.fa = function() {
  return this.g + 1 < this.b.length ? new Qb(this.b, this.g + 1) : null;
};
g.u = function() {
  return this.b.length - this.g;
};
g.A = function() {
  return Vb.d ? Vb.d(this) : Vb.call(null, this);
};
g.v = function(a, b) {
  return S.a ? S.a(this, b) : S.call(null, this, b);
};
g.K = function(a, b) {
  return Sb.i(this.b, b, this.b[this.g], this.g + 1);
};
g.L = function(a, b, c) {
  return Sb.i(this.b, b, c, this.g);
};
g.Q = function() {
  return this.b[this.g];
};
g.R = function() {
  return this.g + 1 < this.b.length ? new Qb(this.b, this.g + 1) : N;
};
g.t = function() {
  return this;
};
g.C = function(a, b) {
  return T.a ? T.a(b, this) : T.call(null, b, this);
};
var Wb = function() {
  function a(a, b) {
    return b < a.length ? new Qb(a, b) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}(), R = function() {
  function a(a, b) {
    return Wb.a(a, b);
  }
  function b(a) {
    return Wb.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}();
nb._ = function(a, b) {
  return a === b;
};
var Xb = function() {
  function a(a, b) {
    return null != a ? Xa(a, b) : Xa(N, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = R(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (u(e)) {
          a = b.a(a, d), d = L(e), e = O(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.r = 2;
    a.l = function(a) {
      var b = L(a);
      a = O(a);
      var d = L(a);
      a = M(a);
      return c(b, d, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, R(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.r = 2;
  b.l = c.l;
  b.a = a;
  b.k = c.k;
  return b;
}();
function Yb(a) {
  if (null != a) {
    if (a && (a.f & 2 || a.ya)) {
      a = a.u(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (x(Va, a)) {
            a = Wa(a);
          } else {
            if (y) {
              a: {
                a = K(a);
                for (var b = 0;;) {
                  if (Tb(a)) {
                    a = b + Wa(a);
                    break a;
                  }
                  a = O(a);
                  b += 1;
                }
                a = void 0;
              }
            } else {
              a = null;
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var Zb = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return K(a) ? L(a) : c;
      }
      if (Ub(a)) {
        return C.c(a, b, c);
      }
      if (K(a)) {
        a = O(a), b -= 1;
      } else {
        return y ? c : null;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (K(a)) {
          return L(a);
        }
        throw Error("Index out of bounds");
      }
      if (Ub(a)) {
        return C.a(a, b);
      }
      if (K(a)) {
        var c = O(a), h = b - 1;
        a = c;
        b = h;
      } else {
        if (y) {
          throw Error("Index out of bounds");
        }
        return null;
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), $b = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.f & 16 || a.sa)) {
      return a.J(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (x(Ya, a)) {
      return C.a(a, b);
    }
    if (a ? a.f & 64 || a.Aa || (a.f ? 0 : x(Za, a)) : x(Za, a)) {
      return Zb.c(a, b, c);
    }
    if (y) {
      throw Error([A("nth not supported on this type "), A(Ta(Sa(a)))].join(""));
    }
    return null;
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.f & 16 || a.sa)) {
      return a.F(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (x(Ya, a)) {
      return C.a(a, b);
    }
    if (a ? a.f & 64 || a.Aa || (a.f ? 0 : x(Za, a)) : x(Za, a)) {
      return Zb.a(a, b);
    }
    if (y) {
      throw Error([A("nth not supported on this type "), A(Ta(Sa(a)))].join(""));
    }
    return null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), ac = function() {
  function a(a, b, c) {
    return null != a ? a && (a.f & 256 || a.rb) ? a.H(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : x($a, a) ? ab.c(a, b, c) : y ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.f & 256 || a.rb) ? a.G(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : x($a, a) ? ab.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), dc = function() {
  function a(a, b, c) {
    return null != a ? bb(a, b, c) : bc.a ? bc.a([b], [c]) : bc.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var m = null;
      3 < arguments.length && (m = R(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, m);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.c(a, d, e), u(l)) {
          d = L(l), e = L(O(l)), l = O(O(l));
        } else {
          return a;
        }
      }
    }
    a.r = 3;
    a.l = function(a) {
      var b = L(a);
      a = O(a);
      var d = L(a);
      a = O(a);
      var l = L(a);
      a = M(a);
      return c(b, d, l, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e, f, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.k(b, e, f, R(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.r = 3;
  b.l = c.l;
  b.c = a;
  b.k = c.k;
  return b;
}();
function ec(a) {
  var b = "function" == p(a);
  return b ? b : a ? u(u(null) ? null : a.Cb) ? !0 : a.Kb ? !1 : x(Ua, a) : x(Ua, a);
}
function fc(a) {
  var b = null != a;
  return(b ? a ? a.f & 131072 || a.tb || (a.f ? 0 : x(ib, a)) : x(ib, a) : b) ? jb(a) : null;
}
var gc = {}, hc = 0;
function U(a) {
  if (a && (a.f & 4194304 || a.Eb)) {
    a = a.A(null);
  } else {
    if ("number" === typeof a) {
      a = Math.floor(a) % 2147483647;
    } else {
      if (!0 === a) {
        a = 1;
      } else {
        if (!1 === a) {
          a = 0;
        } else {
          if ("string" === typeof a) {
            255 < hc && (gc = {}, hc = 0);
            var b = gc[a];
            if ("number" !== typeof b) {
              for (var c = b = 0;c < a.length;++c) {
                b = 31 * b + a.charCodeAt(c), b %= 4294967296;
              }
              gc[a] = b;
              hc += 1;
            }
            a = b;
          } else {
            a = null == a ? 0 : y ? ob(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function ic(a) {
  return a ? a.f & 16384 || a.Ib ? !0 : a.f ? !1 : x(gb, a) : x(gb, a);
}
function jc(a) {
  var b = [];
  Ma(a, function(a) {
    return function(b, e) {
      return a.push(e);
    };
  }(b));
  return b;
}
function kc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
function lc(a) {
  return u(a) ? !0 : !1;
}
function Ob(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (Sa(a) === Sa(b)) {
    return a && (a.n & 2048 || a.Ma) ? a.Na(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (y) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var mc = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = Ob($b.a(a, h), $b.a(b, h));
      if (0 === k && h + 1 < c) {
        h += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = Yb(a), h = Yb(b);
    return f < h ? -1 : f > h ? 1 : y ? c.i(a, b, f, 0) : null;
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.i = a;
  return c;
}(), V = function() {
  function a(a, b, c) {
    for (c = K(c);;) {
      if (c) {
        b = a.a ? a.a(b, L(c)) : a.call(null, b, L(c)), c = O(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = K(b);
    return c ? nc.c ? nc.c(a, L(c), O(c)) : nc.call(null, a, L(c), O(c)) : a.ra ? "" : a.call(null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), nc = function() {
  function a(a, b, c) {
    return c && (c.f & 524288 || c.vb) ? c.L(null, a, b) : c instanceof Array ? Sb.c(c, a, b) : "string" === typeof c ? Sb.c(c, a, b) : x(lb, c) ? mb.c(c, a, b) : y ? V.c(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.f & 524288 || b.vb) ? b.K(null, a) : b instanceof Array ? Sb.a(b, a) : "string" === typeof b ? Sb.a(b, a) : x(lb, b) ? mb.a(b, a) : y ? V.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function oc(a) {
  return 0 <= a ? Math.floor.d ? Math.floor.d(a) : Math.floor.call(null, a) : Math.ceil.d ? Math.ceil.d(a) : Math.ceil.call(null, a);
}
function pc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var A = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = R(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new Qa(b.d(a)), l = d;;) {
        if (u(l)) {
          e = e.append(b.d(L(l))), l = O(l);
        } else {
          return e.toString();
        }
      }
    }
    a.r = 1;
    a.l = function(a) {
      var b = L(a);
      a = M(a);
      return c(b, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.k(b, R(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.r = 1;
  b.l = c.l;
  b.ra = function() {
    return "";
  };
  b.d = a;
  b.k = c.k;
  return b;
}();
function S(a, b) {
  return lc((b ? b.f & 16777216 || b.Hb || (b.f ? 0 : x(rb, b)) : x(rb, b)) ? function() {
    for (var c = K(a), d = K(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (Nb.a(L(c), L(d))) {
        c = O(c), d = O(d);
      } else {
        return y ? !1 : null;
      }
    }
  }() : null);
}
function qc(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Vb(a) {
  if (K(a)) {
    var b = U(L(a));
    for (a = O(a);;) {
      if (null == a) {
        return b;
      }
      b = qc(b, U(L(a)));
      a = O(a);
    }
  } else {
    return 0;
  }
}
function rc(a) {
  var b = 0;
  for (a = K(a);;) {
    if (a) {
      var c = L(a), b = (b + (U(W.d ? W.d(c) : W.call(null, c)) ^ U(X.d ? X.d(c) : X.call(null, c)))) % 4503599627370496;
      a = O(a);
    } else {
      return b;
    }
  }
}
function sc(a, b, c, d, e) {
  this.j = a;
  this.ua = b;
  this.ea = c;
  this.count = d;
  this.h = e;
  this.f = 65937646;
  this.n = 8192;
}
g = sc.prototype;
g.toString = function() {
  return J(this);
};
g.O = function() {
  return this.j;
};
g.fa = function() {
  return 1 === this.count ? null : this.ea;
};
g.u = function() {
  return this.count;
};
g.A = function() {
  var a = this.h;
  return null != a ? a : this.h = a = Vb(this);
};
g.v = function(a, b) {
  return S(this, b);
};
g.K = function(a, b) {
  return V.a(b, this);
};
g.L = function(a, b, c) {
  return V.c(b, c, this);
};
g.Q = function() {
  return this.ua;
};
g.R = function() {
  return 1 === this.count ? N : this.ea;
};
g.t = function() {
  return this;
};
g.M = function(a, b) {
  return new sc(b, this.ua, this.ea, this.count, this.h);
};
g.C = function(a, b) {
  return new sc(this.j, b, this, this.count + 1, null);
};
function tc(a) {
  this.j = a;
  this.f = 65937614;
  this.n = 8192;
}
g = tc.prototype;
g.toString = function() {
  return J(this);
};
g.O = function() {
  return this.j;
};
g.fa = function() {
  return null;
};
g.u = function() {
  return 0;
};
g.A = function() {
  return 0;
};
g.v = function(a, b) {
  return S(this, b);
};
g.K = function(a, b) {
  return V.a(b, this);
};
g.L = function(a, b, c) {
  return V.c(b, c, this);
};
g.Q = function() {
  return null;
};
g.R = function() {
  return N;
};
g.t = function() {
  return null;
};
g.M = function(a, b) {
  return new tc(b);
};
g.C = function(a, b) {
  return new sc(this.j, b, null, 1, null);
};
var N = new tc(null);
function uc(a, b, c, d) {
  this.j = a;
  this.ua = b;
  this.ea = c;
  this.h = d;
  this.f = 65929452;
  this.n = 8192;
}
g = uc.prototype;
g.toString = function() {
  return J(this);
};
g.O = function() {
  return this.j;
};
g.fa = function() {
  return null == this.ea ? null : K(this.ea);
};
g.A = function() {
  var a = this.h;
  return null != a ? a : this.h = a = Vb(this);
};
g.v = function(a, b) {
  return S(this, b);
};
g.K = function(a, b) {
  return V.a(b, this);
};
g.L = function(a, b, c) {
  return V.c(b, c, this);
};
g.Q = function() {
  return this.ua;
};
g.R = function() {
  return null == this.ea ? N : this.ea;
};
g.t = function() {
  return this;
};
g.M = function(a, b) {
  return new uc(b, this.ua, this.ea, this.h);
};
g.C = function(a, b) {
  return new uc(null, b, this, this.h);
};
function T(a, b) {
  var c = null == b;
  return(c ? c : b && (b.f & 64 || b.Aa)) ? new uc(null, a, b, null) : new uc(null, a, K(b), null);
}
function Y(a, b, c, d) {
  this.Y = a;
  this.name = b;
  this.ha = c;
  this.Fa = d;
  this.f = 2153775105;
  this.n = 4096;
}
g = Y.prototype;
g.w = function(a, b) {
  return I(b, [A(":"), A(this.ha)].join(""));
};
g.A = function() {
  null == this.Fa && (this.Fa = qc(U(this.Y), U(this.name)) + 2654435769);
  return this.Fa;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return ac.a(c, this);
      case 3:
        return ac.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(B(b)));
};
g.d = function(a) {
  return ac.a(a, this);
};
g.a = function(a, b) {
  return ac.c(a, this, b);
};
g.v = function(a, b) {
  return b instanceof Y ? this.ha === b.ha : !1;
};
g.toString = function() {
  return[A(":"), A(this.ha)].join("");
};
var vc = function() {
  function a(a, b) {
    return new Y(a, b, [A(u(a) ? [A(a), A("/")].join("") : null), A(b)].join(""), null);
  }
  function b(a) {
    var b;
    return a instanceof Y ? a : "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new Y(b[0], b[1], a, null) : new Y(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}();
function wc(a, b, c, d) {
  this.j = a;
  this.va = b;
  this.o = c;
  this.h = d;
  this.n = 0;
  this.f = 32374988;
}
g = wc.prototype;
g.toString = function() {
  return J(this);
};
function xc(a) {
  null != a.va && (a.o = a.va.ra ? "" : a.va.call(null), a.va = null);
  return a.o;
}
g.O = function() {
  return this.j;
};
g.fa = function() {
  qb(this);
  return null == this.o ? null : O(this.o);
};
g.A = function() {
  var a = this.h;
  return null != a ? a : this.h = a = Vb(this);
};
g.v = function(a, b) {
  return S(this, b);
};
g.K = function(a, b) {
  return V.a(b, this);
};
g.L = function(a, b, c) {
  return V.c(b, c, this);
};
g.Q = function() {
  qb(this);
  return null == this.o ? null : L(this.o);
};
g.R = function() {
  qb(this);
  return null != this.o ? M(this.o) : N;
};
g.t = function() {
  xc(this);
  if (null == this.o) {
    return null;
  }
  for (var a = this.o;;) {
    if (a instanceof wc) {
      a = xc(a);
    } else {
      return this.o = a, K(this.o);
    }
  }
};
g.M = function(a, b) {
  return new wc(b, this.va, this.o, this.h);
};
g.C = function(a, b) {
  return T(b, this);
};
function yc(a, b) {
  this.Ia = a;
  this.end = b;
  this.n = 0;
  this.f = 2;
}
yc.prototype.u = function() {
  return this.end;
};
yc.prototype.add = function(a) {
  this.Ia[this.end] = a;
  return this.end += 1;
};
yc.prototype.aa = function() {
  var a = new Ac(this.Ia, 0, this.end);
  this.Ia = null;
  return a;
};
function Ac(a, b, c) {
  this.b = a;
  this.p = b;
  this.end = c;
  this.n = 0;
  this.f = 524306;
}
g = Ac.prototype;
g.K = function(a, b) {
  return Sb.i(this.b, b, this.b[this.p], this.p + 1);
};
g.L = function(a, b, c) {
  return Sb.i(this.b, b, c, this.p);
};
g.gb = function() {
  if (this.p === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Ac(this.b, this.p + 1, this.end);
};
g.F = function(a, b) {
  return this.b[this.p + b];
};
g.J = function(a, b, c) {
  return 0 <= b && b < this.end - this.p ? this.b[this.p + b] : c;
};
g.u = function() {
  return this.end - this.p;
};
var Bc = function() {
  function a(a, b, c) {
    return new Ac(a, b, c);
  }
  function b(a, b) {
    return new Ac(a, b, a.length);
  }
  function c(a) {
    return new Ac(a, 0, a.length);
  }
  var d = null, d = function(d, f, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.d = c;
  d.a = b;
  d.c = a;
  return d;
}();
function Cc(a, b, c, d) {
  this.aa = a;
  this.X = b;
  this.j = c;
  this.h = d;
  this.f = 31850732;
  this.n = 1536;
}
g = Cc.prototype;
g.toString = function() {
  return J(this);
};
g.O = function() {
  return this.j;
};
g.fa = function() {
  if (1 < Wa(this.aa)) {
    return new Cc(zb(this.aa), this.X, this.j, null);
  }
  var a = qb(this.X);
  return null == a ? null : a;
};
g.A = function() {
  var a = this.h;
  return null != a ? a : this.h = a = Vb(this);
};
g.v = function(a, b) {
  return S(this, b);
};
g.Q = function() {
  return C.a(this.aa, 0);
};
g.R = function() {
  return 1 < Wa(this.aa) ? new Cc(zb(this.aa), this.X, this.j, null) : null == this.X ? N : this.X;
};
g.t = function() {
  return this;
};
g.Ka = function() {
  return this.aa;
};
g.La = function() {
  return null == this.X ? N : this.X;
};
g.M = function(a, b) {
  return new Cc(this.aa, this.X, b, this.h);
};
g.C = function(a, b) {
  return T(b, this);
};
g.Ja = function() {
  return null == this.X ? null : this.X;
};
function Dc(a) {
  for (var b = [];;) {
    if (K(a)) {
      b.push(L(a)), a = O(a);
    } else {
      return b;
    }
  }
}
function Ec(a, b) {
  if (Tb(a)) {
    return Yb(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && K(c)) {
      c = O(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var Gc = function Fc(b) {
  return null == b ? null : null == O(b) ? K(L(b)) : y ? T(L(b), Fc(O(b))) : null;
}, Hc = function() {
  function a(a, b, c, d) {
    return T(a, T(b, T(c, d)));
  }
  function b(a, b, c) {
    return T(a, T(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, m, n) {
      var q = null;
      4 < arguments.length && (q = R(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, q);
    }
    function b(a, c, d, e, f) {
      return T(a, T(c, T(d, T(e, Gc(f)))));
    }
    a.r = 4;
    a.l = function(a) {
      var c = L(a);
      a = O(a);
      var d = L(a);
      a = O(a);
      var e = L(a);
      a = O(a);
      var n = L(a);
      a = M(a);
      return b(c, d, e, n, a);
    };
    a.k = b;
    return a;
  }(), c = function(c, f, h, k, l) {
    switch(arguments.length) {
      case 1:
        return K(c);
      case 2:
        return T(c, f);
      case 3:
        return b.call(this, c, f, h);
      case 4:
        return a.call(this, c, f, h, k);
      default:
        return d.k(c, f, h, k, R(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.r = 4;
  c.l = d.l;
  c.d = function(a) {
    return K(a);
  };
  c.a = function(a, b) {
    return T(a, b);
  };
  c.c = b;
  c.i = a;
  c.k = d.k;
  return c;
}(), Ic = function() {
  var a = null, b = function() {
    function a(c, f, h, k) {
      var l = null;
      3 < arguments.length && (l = R(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, h, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = xb(a, c, d), u(k)) {
          c = L(k), d = L(O(k)), k = O(O(k));
        } else {
          return a;
        }
      }
    }
    a.r = 3;
    a.l = function(a) {
      var c = L(a);
      a = O(a);
      var h = L(a);
      a = O(a);
      var k = L(a);
      a = M(a);
      return b(c, h, k, a);
    };
    a.k = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return xb(a, d, e);
      default:
        return b.k(a, d, e, R(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.r = 3;
  a.l = b.l;
  a.c = function(a, b, e) {
    return xb(a, b, e);
  };
  a.k = b.k;
  return a;
}();
function Jc(a, b, c) {
  var d = K(c);
  if (0 === b) {
    return a.ra ? "" : a.call(null);
  }
  c = E(d);
  var e = F(d);
  if (1 === b) {
    return a.d ? a.d(c) : a.d ? a.d(c) : a.call(null, c);
  }
  var d = E(e), f = F(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = E(f), h = F(f);
  if (3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e);
  }
  var f = E(h), k = F(h);
  if (4 === b) {
    return a.i ? a.i(c, d, e, f) : a.i ? a.i(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var h = E(k), l = F(k);
  if (5 === b) {
    return a.D ? a.D(c, d, e, f, h) : a.D ? a.D(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  var k = E(l), m = F(l);
  if (6 === b) {
    return a.ca ? a.ca(c, d, e, f, h, k) : a.ca ? a.ca(c, d, e, f, h, k) : a.call(null, c, d, e, f, h, k);
  }
  var l = E(m), n = F(m);
  if (7 === b) {
    return a.ka ? a.ka(c, d, e, f, h, k, l) : a.ka ? a.ka(c, d, e, f, h, k, l) : a.call(null, c, d, e, f, h, k, l);
  }
  var m = E(n), q = F(n);
  if (8 === b) {
    return a.Za ? a.Za(c, d, e, f, h, k, l, m) : a.Za ? a.Za(c, d, e, f, h, k, l, m) : a.call(null, c, d, e, f, h, k, l, m);
  }
  var n = E(q), r = F(q);
  if (9 === b) {
    return a.$a ? a.$a(c, d, e, f, h, k, l, m, n) : a.$a ? a.$a(c, d, e, f, h, k, l, m, n) : a.call(null, c, d, e, f, h, k, l, m, n);
  }
  var q = E(r), s = F(r);
  if (10 === b) {
    return a.Oa ? a.Oa(c, d, e, f, h, k, l, m, n, q) : a.Oa ? a.Oa(c, d, e, f, h, k, l, m, n, q) : a.call(null, c, d, e, f, h, k, l, m, n, q);
  }
  var r = E(s), w = F(s);
  if (11 === b) {
    return a.Pa ? a.Pa(c, d, e, f, h, k, l, m, n, q, r) : a.Pa ? a.Pa(c, d, e, f, h, k, l, m, n, q, r) : a.call(null, c, d, e, f, h, k, l, m, n, q, r);
  }
  var s = E(w), D = F(w);
  if (12 === b) {
    return a.Qa ? a.Qa(c, d, e, f, h, k, l, m, n, q, r, s) : a.Qa ? a.Qa(c, d, e, f, h, k, l, m, n, q, r, s) : a.call(null, c, d, e, f, h, k, l, m, n, q, r, s);
  }
  var w = E(D), v = F(D);
  if (13 === b) {
    return a.Ra ? a.Ra(c, d, e, f, h, k, l, m, n, q, r, s, w) : a.Ra ? a.Ra(c, d, e, f, h, k, l, m, n, q, r, s, w) : a.call(null, c, d, e, f, h, k, l, m, n, q, r, s, w);
  }
  var D = E(v), H = F(v);
  if (14 === b) {
    return a.Sa ? a.Sa(c, d, e, f, h, k, l, m, n, q, r, s, w, D) : a.Sa ? a.Sa(c, d, e, f, h, k, l, m, n, q, r, s, w, D) : a.call(null, c, d, e, f, h, k, l, m, n, q, r, s, w, D);
  }
  var v = E(H), P = F(H);
  if (15 === b) {
    return a.Ta ? a.Ta(c, d, e, f, h, k, l, m, n, q, r, s, w, D, v) : a.Ta ? a.Ta(c, d, e, f, h, k, l, m, n, q, r, s, w, D, v) : a.call(null, c, d, e, f, h, k, l, m, n, q, r, s, w, D, v);
  }
  var H = E(P), Q = F(P);
  if (16 === b) {
    return a.Ua ? a.Ua(c, d, e, f, h, k, l, m, n, q, r, s, w, D, v, H) : a.Ua ? a.Ua(c, d, e, f, h, k, l, m, n, q, r, s, w, D, v, H) : a.call(null, c, d, e, f, h, k, l, m, n, q, r, s, w, D, v, H);
  }
  var P = E(Q), ia = F(Q);
  if (17 === b) {
    return a.Va ? a.Va(c, d, e, f, h, k, l, m, n, q, r, s, w, D, v, H, P) : a.Va ? a.Va(c, d, e, f, h, k, l, m, n, q, r, s, w, D, v, H, P) : a.call(null, c, d, e, f, h, k, l, m, n, q, r, s, w, D, v, H, P);
  }
  var Q = E(ia), Aa = F(ia);
  if (18 === b) {
    return a.Wa ? a.Wa(c, d, e, f, h, k, l, m, n, q, r, s, w, D, v, H, P, Q) : a.Wa ? a.Wa(c, d, e, f, h, k, l, m, n, q, r, s, w, D, v, H, P, Q) : a.call(null, c, d, e, f, h, k, l, m, n, q, r, s, w, D, v, H, P, Q);
  }
  ia = E(Aa);
  Aa = F(Aa);
  if (19 === b) {
    return a.Xa ? a.Xa(c, d, e, f, h, k, l, m, n, q, r, s, w, D, v, H, P, Q, ia) : a.Xa ? a.Xa(c, d, e, f, h, k, l, m, n, q, r, s, w, D, v, H, P, Q, ia) : a.call(null, c, d, e, f, h, k, l, m, n, q, r, s, w, D, v, H, P, Q, ia);
  }
  var pa = E(Aa);
  F(Aa);
  if (20 === b) {
    return a.Ya ? a.Ya(c, d, e, f, h, k, l, m, n, q, r, s, w, D, v, H, P, Q, ia, pa) : a.Ya ? a.Ya(c, d, e, f, h, k, l, m, n, q, r, s, w, D, v, H, P, Q, ia, pa) : a.call(null, c, d, e, f, h, k, l, m, n, q, r, s, w, D, v, H, P, Q, ia, pa);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var Kc = function() {
  function a(a, b, c, d, e) {
    b = Hc.i(b, c, d, e);
    c = a.r;
    return a.l ? (d = Ec(b, c + 1), d <= c ? Jc(a, d, b) : a.l(b)) : a.apply(a, Dc(b));
  }
  function b(a, b, c, d) {
    b = Hc.c(b, c, d);
    c = a.r;
    return a.l ? (d = Ec(b, c + 1), d <= c ? Jc(a, d, b) : a.l(b)) : a.apply(a, Dc(b));
  }
  function c(a, b, c) {
    b = Hc.a(b, c);
    c = a.r;
    if (a.l) {
      var d = Ec(b, c + 1);
      return d <= c ? Jc(a, d, b) : a.l(b);
    }
    return a.apply(a, Dc(b));
  }
  function d(a, b) {
    var c = a.r;
    if (a.l) {
      var d = Ec(b, c + 1);
      return d <= c ? Jc(a, d, b) : a.l(b);
    }
    return a.apply(a, Dc(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, s) {
      var w = null;
      5 < arguments.length && (w = R(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, h, w);
    }
    function b(a, c, d, e, f, h) {
      c = T(c, T(d, T(e, T(f, Gc(h)))));
      d = a.r;
      return a.l ? (e = Ec(c, d + 1), e <= d ? Jc(a, e, c) : a.l(c)) : a.apply(a, Dc(c));
    }
    a.r = 5;
    a.l = function(a) {
      var c = L(a);
      a = O(a);
      var d = L(a);
      a = O(a);
      var e = L(a);
      a = O(a);
      var f = L(a);
      a = O(a);
      var h = L(a);
      a = M(a);
      return b(c, d, e, f, h, a);
    };
    a.k = b;
    return a;
  }(), e = function(e, k, l, m, n, q) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, m);
      case 5:
        return a.call(this, e, k, l, m, n);
      default:
        return f.k(e, k, l, m, n, R(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.r = 5;
  e.l = f.l;
  e.a = d;
  e.c = c;
  e.i = b;
  e.D = a;
  e.k = f.k;
  return e;
}();
function Lc(a, b) {
  for (;;) {
    if (null == K(b)) {
      return!0;
    }
    if (u(a.d ? a.d(L(b)) : a.call(null, L(b)))) {
      var c = a, d = O(b);
      a = c;
      b = d;
    } else {
      return y ? !1 : null;
    }
  }
}
function Mc(a) {
  return a;
}
var Nc = function() {
  function a(a, b, c, e) {
    return new wc(null, function() {
      var m = K(b), n = K(c), q = K(e);
      return m && n && q ? T(a.c ? a.c(L(m), L(n), L(q)) : a.call(null, L(m), L(n), L(q)), d.i(a, M(m), M(n), M(q))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new wc(null, function() {
      var e = K(b), m = K(c);
      return e && m ? T(a.a ? a.a(L(e), L(m)) : a.call(null, L(e), L(m)), d.c(a, M(e), M(m))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new wc(null, function() {
      var c = K(b);
      if (c) {
        if (c && (c.n & 512 || c.qb)) {
          for (var e = Cb(c), m = Yb(e), n = new yc(Array(m), 0), q = 0;;) {
            if (q < m) {
              var r = a.d ? a.d(C.a(e, q)) : a.call(null, C.a(e, q));
              n.add(r);
              q += 1;
            } else {
              break;
            }
          }
          e = n.aa();
          c = d.a(a, Db(c));
          return 0 === Wa(e) ? c : new Cc(e, c, null, null);
        }
        return T(a.d ? a.d(L(c)) : a.call(null, L(c)), d.a(a, M(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, f, q) {
      var r = null;
      4 < arguments.length && (r = R(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, r);
    }
    function b(a, c, e, f, h) {
      var r = function w(a) {
        return new wc(null, function() {
          var b = d.a(K, a);
          return Lc(Mc, b) ? T(d.a(L, b), w(d.a(M, b))) : null;
        }, null, null);
      };
      return d.a(function() {
        return function(b) {
          return Kc.a(a, b);
        };
      }(r), r(Xb.k(h, f, R([e, c], 0))));
    }
    a.r = 4;
    a.l = function(a) {
      var c = L(a);
      a = O(a);
      var d = L(a);
      a = O(a);
      var e = L(a);
      a = O(a);
      var f = L(a);
      a = M(a);
      return b(c, d, e, f, a);
    };
    a.k = b;
    return a;
  }(), d = function(d, h, k, l, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.k(d, h, k, l, R(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.r = 4;
  d.l = e.l;
  d.a = c;
  d.c = b;
  d.i = a;
  d.k = e.k;
  return d;
}();
function Oc(a, b) {
  this.m = a;
  this.b = b;
}
function Pc(a) {
  return new Oc(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Qc(a) {
  a = a.e;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Rc(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Pc(a);
    d.b[0] = c;
    c = d;
    b -= 5;
  }
}
var Tc = function Sc(b, c, d, e) {
  var f = new Oc(d.m, B(d.b)), h = b.e - 1 >>> c & 31;
  5 === c ? f.b[h] = e : (d = d.b[h], b = null != d ? Sc(b, c - 5, d, e) : Rc(null, c - 5, e), f.b[h] = b);
  return f;
};
function Uc(a, b) {
  throw Error([A("No item "), A(a), A(" in vector of length "), A(b)].join(""));
}
function Vc(a) {
  var b = a.root;
  for (a = a.shift;;) {
    if (0 < a) {
      a -= 5, b = b.b[0];
    } else {
      return b.b;
    }
  }
}
function Wc(a, b) {
  if (b >= Qc(a)) {
    return a.B;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.b[b >>> d & 31], d = e
    } else {
      return c.b;
    }
  }
}
function Xc(a, b) {
  return 0 <= b && b < a.e ? Wc(a, b) : Uc(b, a.e);
}
var Zc = function Yc(b, c, d, e, f) {
  var h = new Oc(d.m, B(d.b));
  if (0 === c) {
    h.b[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Yc(b, c - 5, d.b[k], e, f);
    h.b[k] = b;
  }
  return h;
};
function Z(a, b, c, d, e, f) {
  this.j = a;
  this.e = b;
  this.shift = c;
  this.root = d;
  this.B = e;
  this.h = f;
  this.f = 167668511;
  this.n = 8196;
}
g = Z.prototype;
g.toString = function() {
  return J(this);
};
g.G = function(a, b) {
  return ab.c(this, b, null);
};
g.H = function(a, b, c) {
  return "number" === typeof b ? C.c(this, b, c) : c;
};
g.F = function(a, b) {
  return Xc(this, b)[b & 31];
};
g.J = function(a, b, c) {
  return 0 <= b && b < this.e ? Wc(this, b)[b & 31] : c;
};
g.bb = function(a, b, c) {
  if (0 <= b && b < this.e) {
    return Qc(this) <= b ? (a = B(this.B), a[b & 31] = c, new Z(this.j, this.e, this.shift, this.root, a, null)) : new Z(this.j, this.e, this.shift, Zc(this, this.shift, this.root, b, c), this.B, null);
  }
  if (b === this.e) {
    return Xa(this, c);
  }
  if (y) {
    throw Error([A("Index "), A(b), A(" out of bounds  [0,"), A(this.e), A("]")].join(""));
  }
  return null;
};
g.O = function() {
  return this.j;
};
g.u = function() {
  return this.e;
};
g.hb = function() {
  return C.a(this, 0);
};
g.ib = function() {
  return C.a(this, 1);
};
g.A = function() {
  var a = this.h;
  return null != a ? a : this.h = a = Vb(this);
};
g.v = function(a, b) {
  return S(this, b);
};
g.za = function() {
  return new $c(this.e, this.shift, ad.d ? ad.d(this.root) : ad.call(null, this.root), bd.d ? bd.d(this.B) : bd.call(null, this.B));
};
g.K = function(a, b) {
  return Rb.a(this, b);
};
g.L = function(a, b, c) {
  return Rb.c(this, b, c);
};
g.qa = function(a, b, c) {
  if ("number" === typeof b) {
    return hb(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
g.t = function() {
  return 0 === this.e ? null : 32 >= this.e ? new Qb(this.B, 0) : y ? $.i ? $.i(this, Vc(this), 0, 0) : $.call(null, this, Vc(this), 0, 0) : null;
};
g.M = function(a, b) {
  return new Z(b, this.e, this.shift, this.root, this.B, this.h);
};
g.C = function(a, b) {
  if (32 > this.e - Qc(this)) {
    for (var c = this.B.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.B[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new Z(this.j, this.e + 1, this.shift, this.root, d, null);
  }
  c = (d = this.e >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Pc(null), d.b[0] = this.root, e = Rc(null, this.shift, new Oc(null, this.B)), d.b[1] = e) : d = Tc(this, this.shift, this.root, new Oc(null, this.B));
  return new Z(this.j, this.e + 1, c, d, [b], null);
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.F(null, c);
      case 3:
        return this.J(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(B(b)));
};
g.d = function(a) {
  return this.F(null, a);
};
g.a = function(a, b) {
  return this.J(null, a, b);
};
var cd = new Oc(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
function dd(a, b, c, d, e, f) {
  this.q = a;
  this.T = b;
  this.g = c;
  this.p = d;
  this.j = e;
  this.h = f;
  this.f = 32243948;
  this.n = 1536;
}
g = dd.prototype;
g.toString = function() {
  return J(this);
};
g.fa = function() {
  if (this.p + 1 < this.T.length) {
    var a = $.i ? $.i(this.q, this.T, this.g, this.p + 1) : $.call(null, this.q, this.T, this.g, this.p + 1);
    return null == a ? null : a;
  }
  return Eb(this);
};
g.A = function() {
  var a = this.h;
  return null != a ? a : this.h = a = Vb(this);
};
g.v = function(a, b) {
  return S(this, b);
};
g.K = function(a, b) {
  return Rb.a(ed.c ? ed.c(this.q, this.g + this.p, Yb(this.q)) : ed.call(null, this.q, this.g + this.p, Yb(this.q)), b);
};
g.L = function(a, b, c) {
  return Rb.c(ed.c ? ed.c(this.q, this.g + this.p, Yb(this.q)) : ed.call(null, this.q, this.g + this.p, Yb(this.q)), b, c);
};
g.Q = function() {
  return this.T[this.p];
};
g.R = function() {
  if (this.p + 1 < this.T.length) {
    var a = $.i ? $.i(this.q, this.T, this.g, this.p + 1) : $.call(null, this.q, this.T, this.g, this.p + 1);
    return null == a ? N : a;
  }
  return Db(this);
};
g.t = function() {
  return this;
};
g.Ka = function() {
  return Bc.a(this.T, this.p);
};
g.La = function() {
  var a = this.g + this.T.length;
  return a < Wa(this.q) ? $.i ? $.i(this.q, Wc(this.q, a), a, 0) : $.call(null, this.q, Wc(this.q, a), a, 0) : N;
};
g.M = function(a, b) {
  return $.D ? $.D(this.q, this.T, this.g, this.p, b) : $.call(null, this.q, this.T, this.g, this.p, b);
};
g.C = function(a, b) {
  return T(b, this);
};
g.Ja = function() {
  var a = this.g + this.T.length;
  return a < Wa(this.q) ? $.i ? $.i(this.q, Wc(this.q, a), a, 0) : $.call(null, this.q, Wc(this.q, a), a, 0) : null;
};
var $ = function() {
  function a(a, b, c, d, l) {
    return new dd(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new dd(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new dd(a, Xc(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, h, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, h);
      case 4:
        return b.call(this, d, f, h, k);
      case 5:
        return a.call(this, d, f, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.i = b;
  d.D = a;
  return d;
}();
function fd(a, b, c, d, e) {
  this.j = a;
  this.Z = b;
  this.start = c;
  this.end = d;
  this.h = e;
  this.f = 166617887;
  this.n = 8192;
}
g = fd.prototype;
g.toString = function() {
  return J(this);
};
g.G = function(a, b) {
  return ab.c(this, b, null);
};
g.H = function(a, b, c) {
  return "number" === typeof b ? C.c(this, b, c) : c;
};
g.F = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Uc(b, this.end - this.start) : C.a(this.Z, this.start + b);
};
g.J = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : C.c(this.Z, this.start + b, c);
};
g.bb = function(a, b, c) {
  var d = this, e = d.start + b;
  return gd.D ? gd.D(d.j, dc.c(d.Z, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : gd.call(null, d.j, dc.c(d.Z, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
g.O = function() {
  return this.j;
};
g.u = function() {
  return this.end - this.start;
};
g.A = function() {
  var a = this.h;
  return null != a ? a : this.h = a = Vb(this);
};
g.v = function(a, b) {
  return S(this, b);
};
g.K = function(a, b) {
  return Rb.a(this, b);
};
g.L = function(a, b, c) {
  return Rb.c(this, b, c);
};
g.qa = function(a, b, c) {
  if ("number" === typeof b) {
    return hb(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.t = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : T(C.a(a.Z, e), new wc(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
g.M = function(a, b) {
  return gd.D ? gd.D(b, this.Z, this.start, this.end, this.h) : gd.call(null, b, this.Z, this.start, this.end, this.h);
};
g.C = function(a, b) {
  return gd.D ? gd.D(this.j, hb(this.Z, this.end, b), this.start, this.end + 1, null) : gd.call(null, this.j, hb(this.Z, this.end, b), this.start, this.end + 1, null);
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.F(null, c);
      case 3:
        return this.J(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(B(b)));
};
g.d = function(a) {
  return this.F(null, a);
};
g.a = function(a, b) {
  return this.J(null, a, b);
};
function gd(a, b, c, d, e) {
  for (;;) {
    if (b instanceof fd) {
      c = b.start + c, d = b.start + d, b = b.Z;
    } else {
      var f = Yb(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new fd(a, b, c, d, e);
    }
  }
}
var ed = function() {
  function a(a, b, c) {
    return gd(null, a, b, c, null);
  }
  function b(a, b) {
    return c.c(a, b, Yb(a));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function ad(a) {
  return new Oc({}, B(a.b));
}
function bd(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  kc(a, 0, b, 0, a.length);
  return b;
}
var id = function hd(b, c, d, e) {
  d = b.root.m === d.m ? d : new Oc(b.root.m, B(d.b));
  var f = b.e - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.b[f];
    b = null != h ? hd(b, c - 5, h, e) : Rc(b.root.m, c - 5, e);
  }
  d.b[f] = b;
  return d;
};
function $c(a, b, c, d) {
  this.e = a;
  this.shift = b;
  this.root = c;
  this.B = d;
  this.f = 275;
  this.n = 88;
}
g = $c.prototype;
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.G(null, c);
      case 3:
        return this.H(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(B(b)));
};
g.d = function(a) {
  return this.G(null, a);
};
g.a = function(a, b) {
  return this.H(null, a, b);
};
g.G = function(a, b) {
  return ab.c(this, b, null);
};
g.H = function(a, b, c) {
  return "number" === typeof b ? C.c(this, b, c) : c;
};
g.F = function(a, b) {
  if (this.root.m) {
    return Xc(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.J = function(a, b, c) {
  return 0 <= b && b < this.e ? C.a(this, b) : c;
};
g.u = function() {
  if (this.root.m) {
    return this.e;
  }
  throw Error("count after persistent!");
};
g.jb = function(a, b, c) {
  var d = this;
  if (d.root.m) {
    if (0 <= b && b < d.e) {
      return Qc(this) <= b ? d.B[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = d.root.m === k.m ? k : new Oc(d.root.m, B(k.b));
          if (0 === a) {
            l.b[b & 31] = c;
          } else {
            var m = b >>> a & 31, n = f(a - 5, l.b[m]);
            l.b[m] = n;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.e) {
      return vb(this, c);
    }
    if (y) {
      throw Error([A("Index "), A(b), A(" out of bounds for TransientVector of length"), A(d.e)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
g.ta = function(a, b, c) {
  if ("number" === typeof b) {
    return yb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
g.Ba = function(a, b) {
  if (this.root.m) {
    if (32 > this.e - Qc(this)) {
      this.B[this.e & 31] = b;
    } else {
      var c = new Oc(this.root.m, this.B), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.B = d;
      if (this.e >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Rc(this.root.m, this.shift, c);
        this.root = new Oc(this.root.m, d);
        this.shift = e;
      } else {
        this.root = id(this, this.shift, this.root, c);
      }
    }
    this.e += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
g.Ca = function() {
  if (this.root.m) {
    this.root.m = null;
    var a = this.e - Qc(this), b = Array(a);
    kc(this.B, 0, b, 0, a);
    return new Z(null, this.e, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function jd() {
  this.n = 0;
  this.f = 2097152;
}
jd.prototype.v = function() {
  return!1;
};
var kd = new jd;
function ld(a, b) {
  return lc((null == b ? 0 : b ? b.f & 1024 || b.Fb || (b.f ? 0 : x(cb, b)) : x(cb, b)) ? Yb(a) === Yb(b) ? Lc(Mc, Nc.a(function(a) {
    return Nb.a(ac.c(b, L(a), kd), L(O(a)));
  }, a)) : null : null);
}
function md(a, b) {
  var c = a.b;
  if (b instanceof Y) {
    a: {
      for (var d = c.length, e = b.ha, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var h = c[f];
        if (h instanceof Y && e === h.ha) {
          c = f;
          break a;
        }
        if (y) {
          f += 2;
        } else {
          c = null;
          break a;
        }
      }
      c = void 0;
    }
  } else {
    if (da(b) || "number" === typeof b) {
      a: {
        d = c.length;
        for (e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          if (y) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (null == b) {
        a: {
          d = c.length;
          for (e = 0;;) {
            if (d <= e) {
              c = -1;
              break a;
            }
            if (null == c[e]) {
              c = e;
              break a;
            }
            if (y) {
              e += 2;
            } else {
              c = null;
              break a;
            }
          }
          c = void 0;
        }
      } else {
        if (y) {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (Nb.a(b, c[e])) {
                c = e;
                break a;
              }
              if (y) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          c = null;
        }
      }
    }
  }
  return c;
}
function nd(a, b, c) {
  this.b = a;
  this.g = b;
  this.Ga = c;
  this.n = 0;
  this.f = 32374990;
}
g = nd.prototype;
g.toString = function() {
  return J(this);
};
g.O = function() {
  return this.Ga;
};
g.fa = function() {
  return this.g < this.b.length - 2 ? new nd(this.b, this.g + 2, this.Ga) : null;
};
g.u = function() {
  return(this.b.length - this.g) / 2;
};
g.A = function() {
  return Vb(this);
};
g.v = function(a, b) {
  return S(this, b);
};
g.K = function(a, b) {
  return V.a(b, this);
};
g.L = function(a, b, c) {
  return V.c(b, c, this);
};
g.Q = function() {
  return new Z(null, 2, 5, cd, [this.b[this.g], this.b[this.g + 1]], null);
};
g.R = function() {
  return this.g < this.b.length - 2 ? new nd(this.b, this.g + 2, this.Ga) : N;
};
g.t = function() {
  return this;
};
g.M = function(a, b) {
  return new nd(this.b, this.g, b);
};
g.C = function(a, b) {
  return T(b, this);
};
function Gb(a, b, c, d) {
  this.j = a;
  this.e = b;
  this.b = c;
  this.h = d;
  this.f = 16123663;
  this.n = 8196;
}
g = Gb.prototype;
g.toString = function() {
  return J(this);
};
g.G = function(a, b) {
  return ab.c(this, b, null);
};
g.H = function(a, b, c) {
  a = md(this, b);
  return-1 === a ? c : this.b[a + 1];
};
g.O = function() {
  return this.j;
};
g.u = function() {
  return this.e;
};
g.A = function() {
  var a = this.h;
  return null != a ? a : this.h = a = rc(this);
};
g.v = function(a, b) {
  return ld(this, b);
};
g.za = function() {
  return new od({}, this.b.length, B(this.b));
};
g.qa = function(a, b, c) {
  a = md(this, b);
  if (-1 === a) {
    if (this.e < pd) {
      a = this.b;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new Gb(this.j, this.e + 1, e, null);
    }
    a = kb;
    d = bb;
    e = qd;
    null != e ? e && (e.n & 4 || e.Db) ? (e = nc.c(vb, ub(e), this), e = wb(e)) : e = nc.c(Xa, e, this) : e = nc.c(Xb, N, this);
    return a(d(e, b, c), this.j);
  }
  return c === this.b[a + 1] ? this : y ? (b = B(this.b), b[a + 1] = c, new Gb(this.j, this.e, b, null)) : null;
};
g.t = function() {
  return 0 <= this.b.length - 2 ? new nd(this.b, 0, null) : null;
};
g.M = function(a, b) {
  return new Gb(b, this.e, this.b, this.h);
};
g.C = function(a, b) {
  return ic(b) ? bb(this, C.a(b, 0), C.a(b, 1)) : nc.c(Xa, this, b);
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.G(null, c);
      case 3:
        return this.H(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(B(b)));
};
g.d = function(a) {
  return this.G(null, a);
};
g.a = function(a, b) {
  return this.H(null, a, b);
};
var pd = 8;
function od(a, b, c) {
  this.la = a;
  this.da = b;
  this.b = c;
  this.n = 56;
  this.f = 258;
}
g = od.prototype;
g.ta = function(a, b, c) {
  if (u(this.la)) {
    a = md(this, b);
    if (-1 === a) {
      return this.da + 2 <= 2 * pd ? (this.da += 2, this.b.push(b), this.b.push(c), this) : Ic.c(rd.a ? rd.a(this.da, this.b) : rd.call(null, this.da, this.b), b, c);
    }
    c !== this.b[a + 1] && (this.b[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
g.Ba = function(a, b) {
  if (u(this.la)) {
    if (b ? b.f & 2048 || b.sb || (b.f ? 0 : x(db, b)) : x(db, b)) {
      return xb(this, W.d ? W.d(b) : W.call(null, b), X.d ? X.d(b) : X.call(null, b));
    }
    for (var c = K(b), d = this;;) {
      var e = L(c);
      if (u(e)) {
        c = O(c), d = xb(d, W.d ? W.d(e) : W.call(null, e), X.d ? X.d(e) : X.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
g.Ca = function() {
  if (u(this.la)) {
    return this.la = !1, new Gb(null, oc((this.da - this.da % 2) / 2), this.b, null);
  }
  throw Error("persistent! called twice");
};
g.G = function(a, b) {
  return ab.c(this, b, null);
};
g.H = function(a, b, c) {
  if (u(this.la)) {
    return a = md(this, b), -1 === a ? c : this.b[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.u = function() {
  if (u(this.la)) {
    return oc((this.da - this.da % 2) / 2);
  }
  throw Error("count after persistent!");
};
function rd(a, b) {
  for (var c = ub(qd), d = 0;;) {
    if (d < a) {
      c = Ic.c(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function sd() {
  this.$ = !1;
}
function td(a, b) {
  return a === b ? !0 : a === b || a instanceof Y && b instanceof Y && a.ha === b.ha ? !0 : y ? Nb.a(a, b) : null;
}
var ud = function() {
  function a(a, b, c, h, k) {
    a = B(a);
    a[b] = c;
    a[h] = k;
    return a;
  }
  function b(a, b, c) {
    a = B(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.D = a;
  return c;
}(), vd = function() {
  function a(a, b, c, h, k, l) {
    a = a.na(b);
    a.b[c] = h;
    a.b[k] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.na(b);
    a.b[c] = h;
    return a;
  }
  var c = null, c = function(c, e, f, h, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, h);
      case 6:
        return a.call(this, c, e, f, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.ca = a;
  return c;
}();
function wd(a, b, c) {
  this.m = a;
  this.s = b;
  this.b = c;
}
g = wd.prototype;
g.na = function(a) {
  if (a === this.m) {
    return this;
  }
  var b = pc(this.s), c = Array(0 > b ? 4 : 2 * (b + 1));
  kc(this.b, 0, c, 0, 2 * b);
  return new wd(a, this.s, c);
};
g.wa = function() {
  return xd.d ? xd.d(this.b) : xd.call(null, this.b);
};
g.ia = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.s & e)) {
    return d;
  }
  var f = pc(this.s & e - 1), e = this.b[2 * f], f = this.b[2 * f + 1];
  return null == e ? f.ia(a + 5, b, c, d) : td(c, e) ? f : y ? d : null;
};
g.V = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = pc(this.s & h - 1);
  if (0 === (this.s & h)) {
    var l = pc(this.s);
    if (2 * l < this.b.length) {
      a = this.na(a);
      b = a.b;
      f.$ = !0;
      a: {
        for (c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          l -= 1;
          c -= 1;
          f -= 1;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.s |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = yd.V(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.s >>> d & 1) && (k[d] = null != this.b[e] ? yd.V(a, b + 5, U(this.b[e]), this.b[e], this.b[e + 1], f) : this.b[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Fd(a, l + 1, k);
    }
    return y ? (b = Array(2 * (l + 4)), kc(this.b, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, kc(this.b, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.$ = !0, a = this.na(a), a.b = b, a.s |= h, a) : null;
  }
  l = this.b[2 * k];
  h = this.b[2 * k + 1];
  return null == l ? (l = h.V(a, b + 5, c, d, e, f), l === h ? this : vd.i(this, a, 2 * k + 1, l)) : td(d, l) ? e === h ? this : vd.i(this, a, 2 * k + 1, e) : y ? (f.$ = !0, vd.ca(this, a, 2 * k, null, 2 * k + 1, Gd.ka ? Gd.ka(a, b + 5, l, h, c, d, e) : Gd.call(null, a, b + 5, l, h, c, d, e))) : null;
};
g.U = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = pc(this.s & f - 1);
  if (0 === (this.s & f)) {
    var k = pc(this.s);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = yd.U(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.s >>> c & 1) && (h[c] = null != this.b[d] ? yd.U(a + 5, U(this.b[d]), this.b[d], this.b[d + 1], e) : this.b[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Fd(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    kc(this.b, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    kc(this.b, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.$ = !0;
    return new wd(null, this.s | f, a);
  }
  k = this.b[2 * h];
  f = this.b[2 * h + 1];
  return null == k ? (k = f.U(a + 5, b, c, d, e), k === f ? this : new wd(null, this.s, ud.c(this.b, 2 * h + 1, k))) : td(c, k) ? d === f ? this : new wd(null, this.s, ud.c(this.b, 2 * h + 1, d)) : y ? (e.$ = !0, new wd(null, this.s, ud.D(this.b, 2 * h, null, 2 * h + 1, Gd.ca ? Gd.ca(a + 5, k, f, b, c, d) : Gd.call(null, a + 5, k, f, b, c, d)))) : null;
};
var yd = new wd(null, 0, []);
function Fd(a, b, c) {
  this.m = a;
  this.e = b;
  this.b = c;
}
g = Fd.prototype;
g.na = function(a) {
  return a === this.m ? this : new Fd(a, this.e, B(this.b));
};
g.wa = function() {
  return Hd.d ? Hd.d(this.b) : Hd.call(null, this.b);
};
g.ia = function(a, b, c, d) {
  var e = this.b[b >>> a & 31];
  return null != e ? e.ia(a + 5, b, c, d) : d;
};
g.V = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.b[h];
  if (null == k) {
    return a = vd.i(this, a, h, yd.V(a, b + 5, c, d, e, f)), a.e += 1, a;
  }
  b = k.V(a, b + 5, c, d, e, f);
  return b === k ? this : vd.i(this, a, h, b);
};
g.U = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.b[f];
  if (null == h) {
    return new Fd(null, this.e + 1, ud.c(this.b, f, yd.U(a + 5, b, c, d, e)));
  }
  a = h.U(a + 5, b, c, d, e);
  return a === h ? this : new Fd(null, this.e, ud.c(this.b, f, a));
};
function Id(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (td(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Jd(a, b, c, d) {
  this.m = a;
  this.ga = b;
  this.e = c;
  this.b = d;
}
g = Jd.prototype;
g.na = function(a) {
  if (a === this.m) {
    return this;
  }
  var b = Array(2 * (this.e + 1));
  kc(this.b, 0, b, 0, 2 * this.e);
  return new Jd(a, this.ga, this.e, b);
};
g.wa = function() {
  return xd.d ? xd.d(this.b) : xd.call(null, this.b);
};
g.ia = function(a, b, c, d) {
  a = Id(this.b, this.e, c);
  return 0 > a ? d : td(c, this.b[a]) ? this.b[a + 1] : y ? d : null;
};
g.V = function(a, b, c, d, e, f) {
  if (c === this.ga) {
    b = Id(this.b, this.e, d);
    if (-1 === b) {
      if (this.b.length > 2 * this.e) {
        return a = vd.ca(this, a, 2 * this.e, d, 2 * this.e + 1, e), f.$ = !0, a.e += 1, a;
      }
      c = this.b.length;
      b = Array(c + 2);
      kc(this.b, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.$ = !0;
      f = this.e + 1;
      a === this.m ? (this.b = b, this.e = f, a = this) : a = new Jd(this.m, this.ga, f, b);
      return a;
    }
    return this.b[b + 1] === e ? this : vd.i(this, a, b + 1, e);
  }
  return(new wd(a, 1 << (this.ga >>> b & 31), [null, this, null, null])).V(a, b, c, d, e, f);
};
g.U = function(a, b, c, d, e) {
  return b === this.ga ? (a = Id(this.b, this.e, c), -1 === a ? (a = 2 * this.e, b = Array(a + 2), kc(this.b, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.$ = !0, new Jd(null, this.ga, this.e + 1, b)) : Nb.a(this.b[a], d) ? this : new Jd(null, this.ga, this.e, ud.c(this.b, a + 1, d))) : (new wd(null, 1 << (this.ga >>> a & 31), [null, this])).U(a, b, c, d, e);
};
var Gd = function() {
  function a(a, b, c, h, k, l, m) {
    var n = U(c);
    if (n === k) {
      return new Jd(null, n, 2, [c, h, l, m]);
    }
    var q = new sd;
    return yd.V(a, b, n, c, h, q).V(a, b, k, l, m, q);
  }
  function b(a, b, c, h, k, l) {
    var m = U(b);
    if (m === h) {
      return new Jd(null, m, 2, [b, c, k, l]);
    }
    var n = new sd;
    return yd.U(a, m, b, c, n).U(a, h, k, l, n);
  }
  var c = null, c = function(c, e, f, h, k, l, m) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, h, k, l);
      case 7:
        return a.call(this, c, e, f, h, k, l, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.ca = b;
  c.ka = a;
  return c;
}();
function Kd(a, b, c, d, e) {
  this.j = a;
  this.W = b;
  this.g = c;
  this.o = d;
  this.h = e;
  this.n = 0;
  this.f = 32374860;
}
g = Kd.prototype;
g.toString = function() {
  return J(this);
};
g.O = function() {
  return this.j;
};
g.A = function() {
  var a = this.h;
  return null != a ? a : this.h = a = Vb(this);
};
g.v = function(a, b) {
  return S(this, b);
};
g.K = function(a, b) {
  return V.a(b, this);
};
g.L = function(a, b, c) {
  return V.c(b, c, this);
};
g.Q = function() {
  return null == this.o ? new Z(null, 2, 5, cd, [this.W[this.g], this.W[this.g + 1]], null) : L(this.o);
};
g.R = function() {
  return null == this.o ? xd.c ? xd.c(this.W, this.g + 2, null) : xd.call(null, this.W, this.g + 2, null) : xd.c ? xd.c(this.W, this.g, O(this.o)) : xd.call(null, this.W, this.g, O(this.o));
};
g.t = function() {
  return this;
};
g.M = function(a, b) {
  return new Kd(b, this.W, this.g, this.o, this.h);
};
g.C = function(a, b) {
  return T(b, this);
};
var xd = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new Kd(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (u(h) && (h = h.wa(), u(h))) {
            return new Kd(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new Kd(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.c(a, 0, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.c = a;
  return c;
}();
function Ld(a, b, c, d, e) {
  this.j = a;
  this.W = b;
  this.g = c;
  this.o = d;
  this.h = e;
  this.n = 0;
  this.f = 32374860;
}
g = Ld.prototype;
g.toString = function() {
  return J(this);
};
g.O = function() {
  return this.j;
};
g.A = function() {
  var a = this.h;
  return null != a ? a : this.h = a = Vb(this);
};
g.v = function(a, b) {
  return S(this, b);
};
g.K = function(a, b) {
  return V.a(b, this);
};
g.L = function(a, b, c) {
  return V.c(b, c, this);
};
g.Q = function() {
  return L(this.o);
};
g.R = function() {
  return Hd.i ? Hd.i(null, this.W, this.g, O(this.o)) : Hd.call(null, null, this.W, this.g, O(this.o));
};
g.t = function() {
  return this;
};
g.M = function(a, b) {
  return new Ld(b, this.W, this.g, this.o, this.h);
};
g.C = function(a, b) {
  return T(b, this);
};
var Hd = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var k = b[c];
          if (u(k) && (k = k.wa(), u(k))) {
            return new Ld(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Ld(a, b, c, h, null);
    }
  }
  function b(a) {
    return c.i(null, a, 0, null);
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.i = a;
  return c;
}();
function Md(a, b, c, d, e, f) {
  this.j = a;
  this.e = b;
  this.root = c;
  this.P = d;
  this.S = e;
  this.h = f;
  this.f = 16123663;
  this.n = 8196;
}
g = Md.prototype;
g.toString = function() {
  return J(this);
};
g.G = function(a, b) {
  return ab.c(this, b, null);
};
g.H = function(a, b, c) {
  return null == b ? this.P ? this.S : c : null == this.root ? c : y ? this.root.ia(0, U(b), b, c) : null;
};
g.O = function() {
  return this.j;
};
g.u = function() {
  return this.e;
};
g.A = function() {
  var a = this.h;
  return null != a ? a : this.h = a = rc(this);
};
g.v = function(a, b) {
  return ld(this, b);
};
g.za = function() {
  return new Nd({}, this.root, this.e, this.P, this.S);
};
g.qa = function(a, b, c) {
  if (null == b) {
    return this.P && c === this.S ? this : new Md(this.j, this.P ? this.e : this.e + 1, this.root, !0, c, null);
  }
  a = new sd;
  b = (null == this.root ? yd : this.root).U(0, U(b), b, c, a);
  return b === this.root ? this : new Md(this.j, a.$ ? this.e + 1 : this.e, b, this.P, this.S, null);
};
g.t = function() {
  if (0 < this.e) {
    var a = null != this.root ? this.root.wa() : null;
    return this.P ? T(new Z(null, 2, 5, cd, [null, this.S], null), a) : a;
  }
  return null;
};
g.M = function(a, b) {
  return new Md(b, this.e, this.root, this.P, this.S, this.h);
};
g.C = function(a, b) {
  return ic(b) ? bb(this, C.a(b, 0), C.a(b, 1)) : nc.c(Xa, this, b);
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.G(null, c);
      case 3:
        return this.H(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(B(b)));
};
g.d = function(a) {
  return this.G(null, a);
};
g.a = function(a, b) {
  return this.H(null, a, b);
};
var qd = new Md(null, 0, null, !1, null, 0);
function bc(a, b) {
  for (var c = a.length, d = 0, e = ub(qd);;) {
    if (d < c) {
      var f = d + 1, e = e.ta(null, a[d], b[d]), d = f
    } else {
      return wb(e);
    }
  }
}
function Nd(a, b, c, d, e) {
  this.m = a;
  this.root = b;
  this.count = c;
  this.P = d;
  this.S = e;
  this.n = 56;
  this.f = 258;
}
g = Nd.prototype;
g.ta = function(a, b, c) {
  return Od(this, b, c);
};
g.Ba = function(a, b) {
  var c;
  a: {
    if (this.m) {
      if (b ? b.f & 2048 || b.sb || (b.f ? 0 : x(db, b)) : x(db, b)) {
        c = Od(this, W.d ? W.d(b) : W.call(null, b), X.d ? X.d(b) : X.call(null, b));
        break a;
      }
      c = K(b);
      for (var d = this;;) {
        var e = L(c);
        if (u(e)) {
          c = O(c), d = Od(d, W.d ? W.d(e) : W.call(null, e), X.d ? X.d(e) : X.call(null, e));
        } else {
          c = d;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    c = void 0;
  }
  return c;
};
g.Ca = function() {
  var a;
  if (this.m) {
    this.m = null, a = new Md(null, this.count, this.root, this.P, this.S, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.G = function(a, b) {
  return null == b ? this.P ? this.S : null : null == this.root ? null : this.root.ia(0, U(b), b);
};
g.H = function(a, b, c) {
  return null == b ? this.P ? this.S : c : null == this.root ? c : this.root.ia(0, U(b), b, c);
};
g.u = function() {
  if (this.m) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Od(a, b, c) {
  if (a.m) {
    if (null == b) {
      a.S !== c && (a.S = c), a.P || (a.count += 1, a.P = !0);
    } else {
      var d = new sd;
      b = (null == a.root ? yd : a.root).V(a.m, 0, U(b), b, c, d);
      b !== a.root && (a.root = b);
      d.$ && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
function W(a) {
  return eb(a);
}
function X(a) {
  return fb(a);
}
function Pd(a) {
  if (a && (a.n & 4096 || a.ub)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([A("Doesn't support name: "), A(a)].join(""));
}
function Qd(a, b, c, d, e, f, h) {
  var k = Ra;
  try {
    Ra = null == Ra ? null : Ra - 1;
    if (null != Ra && 0 > Ra) {
      return I(a, "#");
    }
    I(a, c);
    K(h) && (b.c ? b.c(L(h), a, f) : b.call(null, L(h), a, f));
    for (var l = O(h), m = Lb.d(f);l && (null == m || 0 !== m);) {
      I(a, d);
      b.c ? b.c(L(l), a, f) : b.call(null, L(l), a, f);
      var n = O(l);
      c = m - 1;
      l = n;
      m = c;
    }
    u(Lb.d(f)) && (I(a, d), b.c ? b.c("...", a, f) : b.call(null, "...", a, f));
    return I(a, e);
  } finally {
    Ra = k;
  }
}
var Rd = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = R(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = K(b), f = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = f.F(null, k);
        I(a, l);
        k += 1;
      } else {
        if (e = K(e)) {
          (f = e) && (f.n & 512 || f.qb) ? (e = Cb(f), h = Db(f), f = e, l = Yb(e), e = h, h = l) : (l = L(f), I(a, l), e = O(f), f = null, h = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.r = 1;
  a.l = function(a) {
    var d = L(a);
    a = M(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}(), Sd = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Td(a) {
  return[A('"'), A(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Sd[a];
  })), A('"')].join("");
}
var Wd = function Ud(b, c, d) {
  if (null == b) {
    return I(c, "nil");
  }
  if (void 0 === b) {
    return I(c, "#\x3cundefined\x3e");
  }
  if (y) {
    u(function() {
      var c = ac.a(d, Jb);
      return u(c) ? (c = b ? b.f & 131072 || b.tb ? !0 : b.f ? !1 : x(ib, b) : x(ib, b)) ? fc(b) : c : c;
    }()) && (I(c, "^"), Ud(fc(b), c, d), I(c, " "));
    if (null == b) {
      return I(c, "nil");
    }
    if (b.xb) {
      return b.Jb(c);
    }
    if (b && (b.f & 2147483648 || b.I)) {
      return b.w(null, c, d);
    }
    if (Sa(b) === Boolean || "number" === typeof b) {
      return I(c, "" + A(b));
    }
    if (null != b && b.constructor === Object) {
      return I(c, "#js "), Vd.i ? Vd.i(Nc.a(function(c) {
        return new Z(null, 2, 5, cd, [vc.d(c), b[c]], null);
      }, jc(b)), Ud, c, d) : Vd.call(null, Nc.a(function(c) {
        return new Z(null, 2, 5, cd, [vc.d(c), b[c]], null);
      }, jc(b)), Ud, c, d);
    }
    if (b instanceof Array) {
      return Qd(c, Ud, "#js [", " ", "]", d, b);
    }
    if (da(b)) {
      return u(Ib.d(d)) ? I(c, Td(b)) : I(c, b);
    }
    if (ec(b)) {
      return Rd.k(c, R(["#\x3c", "" + A(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + A(b);;) {
          if (Yb(d) < c) {
            d = [A("0"), A(d)].join("");
          } else {
            return d;
          }
        }
      };
      return Rd.k(c, R(['#inst "', "" + A(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? Rd.k(c, R(['#"', b.source, '"'], 0)) : (b ? b.f & 2147483648 || b.I || (b.f ? 0 : x(sb, b)) : x(sb, b)) ? tb(b, c, d) : y ? Rd.k(c, R(["#\x3c", "" + A(b), "\x3e"], 0)) : null;
  }
  return null;
};
function Vd(a, b, c, d) {
  return Qd(c, function(a, c, d) {
    b.c ? b.c(eb(a), c, d) : b.call(null, eb(a), c, d);
    I(c, " ");
    return b.c ? b.c(fb(a), c, d) : b.call(null, fb(a), c, d);
  }, "{", ", ", "}", d, K(a));
}
Qb.prototype.I = !0;
Qb.prototype.w = function(a, b, c) {
  return Qd(b, Wd, "(", " ", ")", c, this);
};
wc.prototype.I = !0;
wc.prototype.w = function(a, b, c) {
  return Qd(b, Wd, "(", " ", ")", c, this);
};
Kd.prototype.I = !0;
Kd.prototype.w = function(a, b, c) {
  return Qd(b, Wd, "(", " ", ")", c, this);
};
nd.prototype.I = !0;
nd.prototype.w = function(a, b, c) {
  return Qd(b, Wd, "(", " ", ")", c, this);
};
dd.prototype.I = !0;
dd.prototype.w = function(a, b, c) {
  return Qd(b, Wd, "(", " ", ")", c, this);
};
uc.prototype.I = !0;
uc.prototype.w = function(a, b, c) {
  return Qd(b, Wd, "(", " ", ")", c, this);
};
Md.prototype.I = !0;
Md.prototype.w = function(a, b, c) {
  return Vd(this, Wd, b, c);
};
Ld.prototype.I = !0;
Ld.prototype.w = function(a, b, c) {
  return Qd(b, Wd, "(", " ", ")", c, this);
};
fd.prototype.I = !0;
fd.prototype.w = function(a, b, c) {
  return Qd(b, Wd, "[", " ", "]", c, this);
};
Cc.prototype.I = !0;
Cc.prototype.w = function(a, b, c) {
  return Qd(b, Wd, "(", " ", ")", c, this);
};
Z.prototype.I = !0;
Z.prototype.w = function(a, b, c) {
  return Qd(b, Wd, "[", " ", "]", c, this);
};
tc.prototype.I = !0;
tc.prototype.w = function(a, b) {
  return I(b, "()");
};
Gb.prototype.I = !0;
Gb.prototype.w = function(a, b, c) {
  return Vd(this, Wd, b, c);
};
sc.prototype.I = !0;
sc.prototype.w = function(a, b, c) {
  return Qd(b, Wd, "(", " ", ")", c, this);
};
Z.prototype.Ma = !0;
Z.prototype.Na = function(a, b) {
  return mc.a(this, b);
};
fd.prototype.Ma = !0;
fd.prototype.Na = function(a, b) {
  return mc.a(this, b);
};
Y.prototype.Ma = !0;
Y.prototype.Na = function(a, b) {
  return Mb(this, b);
};
var Jb = new Y(null, "meta", "meta"), Kb = new Y(null, "dup", "dup"), y = new Y(null, "else", "else"), Pb = new Y(null, "default", "default"), Hb = new Y(null, "flush-on-newline", "flush-on-newline"), Ib = new Y(null, "readably", "readably"), Lb = new Y(null, "print-length", "print-length");
var Xd = t && !Ia("9");
!xa || Ia("528");
wa && Ia("1.9b") || t && Ia("8") || va && Ia("9.5") || xa && Ia("528");
wa && !Ia("8") || t && Ia("9");
function Yd(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = !1;
}
Yd.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
};
function Zd(a) {
  Zd[" "](a);
  return a;
}
Zd[" "] = function() {
};
function $d(a, b) {
  $d.pb(this, "constructor", a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.lb = this.state = null;
  if (a) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
      if (wa) {
        var e;
        a: {
          try {
            Zd(d.nodeName);
            e = !0;
            break a;
          } catch (f) {
          }
          e = !1;
        }
        e || (d = null);
      }
    } else {
      "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    }
    this.relatedTarget = d;
    this.offsetX = xa || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = xa || void 0 !== a.offsetY ? a.offsetY : a.layerY;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.state = a.state;
    this.lb = a;
    a.defaultPrevented && this.preventDefault();
  }
}
(function() {
  var a = $d;
  function b() {
  }
  b.prototype = Yd.prototype;
  a.Bb = Yd.prototype;
  a.prototype = new b;
  a.prototype.constructor = a;
  a.pb = function(a, b, e) {
    var f = Array.prototype.slice.call(arguments, 2);
    Yd.prototype[b].apply(a, f);
  };
})();
$d.prototype.preventDefault = function() {
  $d.Bb.preventDefault.call(this);
  var a = this.lb;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Xd) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var ae = document.createElement("div");
ae.innerHTML = "   \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a' style\x3d'top:1px;float:left;opacity:.55;'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
Nb.a(ae.firstChild.nodeType, 3);
Nb.a(ae.getElementsByTagName("tbody").length, 0);
Nb.a(ae.getElementsByTagName("link").length, 0);
var be = new Z(null, 3, 5, cd, [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"], null), ce = new Z(null, 3, 5, cd, [1, "\x3ctable\x3e", "\x3c/table\x3e"], null), de = new Z(null, 3, 5, cd, [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"], null);
bc(["td", "optgroup", "tfoot", "tr", "area", Pb, "option", "legend", "thead", "col", "caption", "th", "colgroup", "tbody"], [de, be, ce, new Z(null, 3, 5, cd, [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"], null), new Z(null, 3, 5, cd, [1, "\x3cmap\x3e", "\x3c/map\x3e"], null), new Z(null, 3, 5, cd, [0, "", ""], null), be, new Z(null, 3, 5, cd, [1, "\x3cfieldset\x3e", "\x3c/fieldset\x3e"], null), ce, new Z(null, 3, 5, cd, [2, "\x3ctable\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3ccolgroup\x3e", 
"\x3c/colgroup\x3e\x3c/table\x3e"], null), ce, de, ce, ce]);
var ee = function() {
  function a(a, b) {
    return b < a.length ? new wc(null, function() {
      return T(a.item(b), c.a(a, b + 1));
    }, null, null) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}(), fe = function() {
  function a(a, b) {
    return b < a.length ? new wc(null, function() {
      return T(a[b], c.a(a, b + 1));
    }, null, null) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}();
function ge(a) {
  return u(a.item) ? ee.d(a) : fe.d(a);
}
u("undefined" != typeof NodeList) && (g = NodeList.prototype, g.ab = !0, g.t = function() {
  return ge(this);
}, g.sa = !0, g.F = function(a, b) {
  return this.item(b);
}, g.J = function(a, b, c) {
  return this.length <= b ? c : $b.a(this, b);
}, g.ya = !0, g.u = function() {
  return this.length;
});
u("undefined" != typeof StaticNodeList) && (g = StaticNodeList.prototype, g.ab = !0, g.t = function() {
  return ge(this);
}, g.sa = !0, g.F = function(a, b) {
  return this.item(b);
}, g.J = function(a, b, c) {
  return this.length <= b ? c : $b.a(this, b);
}, g.ya = !0, g.u = function() {
  return this.length;
});
u("undefined" != typeof HTMLCollection) && (g = HTMLCollection.prototype, g.ab = !0, g.t = function() {
  return ge(this);
}, g.sa = !0, g.F = function(a, b) {
  return this.item(b);
}, g.J = function(a, b, c) {
  return this.length <= b ? c : $b.a(this, b);
}, g.ya = !0, g.u = function() {
  return this.length;
});
/*
 Portions of this code are from the Dojo Toolkit, received by
 The Closure Library Authors under the BSD license. All other code is
 Copyright 2005-2009 The Closure Library Authors. All Rights Reserved.

The "New" BSD License:

Copyright (c) 2005-2009, The Dojo Foundation
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.
 Neither the name of the Dojo Foundation nor the names of its contributors
    may be used to endorse or promote products derived from this software
    without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
var ke = function() {
  function a(a, c) {
    if (!a) {
      return[];
    }
    if (a.constructor == Array) {
      return a;
    }
    if (!da(a)) {
      return[a];
    }
    if (da(c) && (c = da(c) ? document.getElementById(c) : c, !c)) {
      return[];
    }
    c = c || document;
    var e = c.ownerDocument || c.documentElement;
    pa = c.contentType && "application/xml" == c.contentType || va && (c.doctype || "[object XMLDocument]" == e.toString()) || !!e && (t ? e.xml : c.xmlVersion || e.xmlVersion);
    return(e = d(a)(c)) && e.Da ? e : b(e);
  }
  function b(a) {
    if (a && a.Da) {
      return a;
    }
    var b = [];
    if (!a || !a.length) {
      return b;
    }
    a[0] && b.push(a[0]);
    if (2 > a.length) {
      return b;
    }
    Ca++;
    if (t && pa) {
      var c = Ca + "";
      a[0].setAttribute("_zipIdx", c);
      for (var d = 1, e;e = a[d];d++) {
        a[d].getAttribute("_zipIdx") != c && b.push(e), e.setAttribute("_zipIdx", c);
      }
    } else {
      if (t && a.yb) {
        try {
          for (d = 1;e = a[d];d++) {
            v(e) && b.push(e);
          }
        } catch (f) {
        }
      } else {
        for (a[0] && (a[0]._zipIdx = Ca), d = 1;e = a[d];d++) {
          a[d]._zipIdx != Ca && b.push(e), e._zipIdx = Ca;
        }
      }
    }
    return b;
  }
  function c(a, b) {
    if (!b) {
      return 1;
    }
    var c = he(a);
    return b[c] ? 0 : b[c] = 1;
  }
  function d(a, b) {
    if (Ad) {
      var c = Bd[a];
      if (c && !b) {
        return c;
      }
    }
    if (c = Cd[a]) {
      return c;
    }
    var c = a.charAt(0), f = -1 == a.indexOf(" ");
    0 <= a.indexOf("#") && f && (b = !0);
    if (!Ad || b || -1 != "\x3e~+".indexOf(c) || t && -1 != a.indexOf(":") || ia && 0 <= a.indexOf(".") || -1 != a.indexOf(":contains") || -1 != a.indexOf("|\x3d")) {
      var h = a.split(/\s*,\s*/);
      return Cd[a] = 2 > h.length ? e(a) : function(a) {
        for (var b = 0, c = [], d;d = h[b++];) {
          c = c.concat(e(d)(a));
        }
        return c;
      };
    }
    var k = 0 <= "\x3e~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
    return Bd[a] = function(b) {
      try {
        if (9 != b.nodeType && !f) {
          throw "";
        }
        var c = b.querySelectorAll(k);
        t ? c.yb = !0 : c.Da = !0;
        return c;
      } catch (e) {
        return d(a, !0)(b);
      }
    };
  }
  function e(a) {
    var b = P(ja(a));
    if (1 == b.length) {
      var c = f(b[0]);
      return function(a) {
        if (a = c(a, [])) {
          a.Da = !0;
        }
        return a;
      };
    }
    return function(a) {
      a = Q(a);
      for (var c, d, e = b.length, h, k, l = 0;l < e;l++) {
        k = [];
        c = b[l];
        d = a.length - 1;
        0 < d && (h = {}, k.Da = !0);
        d = f(c);
        for (var zd = 0;c = a[zd];zd++) {
          d(c, k, h);
        }
        if (!k.length) {
          break;
        }
        a = k;
      }
      return k;
    };
  }
  function f(a) {
    var b = Dd[a.oa];
    if (b) {
      return b;
    }
    var c = a.mb, c = c ? c.Ea : "", d = m(a, {ma:1}), e = "*" == a.N, f = document.getElementsByClassName;
    if (c) {
      f = {ma:1}, e && (f.N = 1), d = m(a, f), "+" == c ? b = l(d) : "~" == c ? b = k(d) : "\x3e" == c && (b = h(d));
    } else {
      if (a.id) {
        d = !a.nb && e ? La : m(a, {ma:1, id:1}), b = function(b, c) {
          var e;
          e = b ? new Pa(9 == b.nodeType ? b : b.ownerDocument || b.document) : ha || (ha = new Pa);
          e = da(a.id) ? e.cb.getElementById(a.id) : a.id;
          var f;
          if ((f = e && d(e)) && !(f = 9 == b.nodeType)) {
            for (f = e.parentNode;f && f != b;) {
              f = f.parentNode;
            }
            f = !!f;
          }
          if (f) {
            return Q(e, c);
          }
        };
      } else {
        if (f && /\{\s*\[native code\]\s*\}/.test(String(f)) && a.ba.length && !ia) {
          var d = m(a, {ma:1, ba:1, id:1}), n = a.ba.join(" "), b = function(a, b) {
            for (var c = Q(0, b), e, f = 0, h = a.getElementsByClassName(n);e = h[f++];) {
              d(e, a) && c.push(e);
            }
            return c;
          }
        } else {
          e || a.nb ? (d = m(a, {ma:1, N:1, id:1}), b = function(b, c) {
            for (var e = Q(0, c), f, h = 0, k = b.getElementsByTagName(a.eb());f = k[h++];) {
              d(f, b) && e.push(f);
            }
            return e;
          }) : b = function(b, c) {
            for (var d = Q(0, c), e, f = 0, h = b.getElementsByTagName(a.eb());e = h[f++];) {
              d.push(e);
            }
            return d;
          };
        }
      }
    }
    return Dd[a.oa] = b;
  }
  function h(a) {
    a = a || La;
    return function(b, d, e) {
      for (var f = 0, h = b[Aa];b = h[f++];) {
        Ab(b) && (!e || c(b, e)) && a(b, f) && d.push(b);
      }
      return d;
    };
  }
  function k(a) {
    return function(b, d, e) {
      for (b = b[Bb];b;) {
        if (Ab(b)) {
          if (e && !c(b, e)) {
            break;
          }
          a(b) && d.push(b);
        }
        b = b[Bb];
      }
      return d;
    };
  }
  function l(a) {
    return function(b, d, e) {
      for (;b = b[Bb];) {
        if (!cc || v(b)) {
          e && !c(b, e) || !a(b) || d.push(b);
          break;
        }
      }
      return d;
    };
  }
  function m(a, b) {
    if (!a) {
      return La;
    }
    b = b || {};
    var c = null;
    b.ma || (c = H(c, v));
    b.N || "*" != a.N && (c = H(c, function(b) {
      return b && b.tagName == a.eb();
    }));
    b.ba || la(a.ba, function(a, b) {
      var d = RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
      c = H(c, function(a) {
        return d.test(a.className);
      });
      c.count = b;
    });
    b.ja || la(a.ja, function(a) {
      var b = a.name;
      zc[b] && (c = H(c, zc[b](b, a.value)));
    });
    b.xa || la(a.xa, function(a) {
      var b, d = a.Ha;
      a.type && Ed[a.type] ? b = Ed[a.type](d, a.fb) : d.length && (b = ie(d));
      b && (c = H(c, b));
    });
    b.id || a.id && (c = H(c, function(b) {
      return!!b && b.id == a.id;
    }));
    c || "default" in b || (c = La);
    return c;
  }
  function n(a) {
    return r(a) % 2;
  }
  function q(a) {
    return!(r(a) % 2);
  }
  function r(a) {
    var b = a.parentNode, c = 0, d = b[Aa], e = a._i || -1, f = b._l || -1;
    if (!d) {
      return-1;
    }
    d = d.length;
    if (f == d && 0 <= e && 0 <= f) {
      return e;
    }
    b._l = d;
    e = -1;
    for (b = b.firstElementChild || b.firstChild;b;b = b[Bb]) {
      Ab(b) && (b._i = ++c, a === b && (e = c));
    }
    return e;
  }
  function s(a) {
    for (;a = a[Bb];) {
      if (Ab(a)) {
        return!1;
      }
    }
    return!0;
  }
  function w(a) {
    for (;a = a[je];) {
      if (Ab(a)) {
        return!1;
      }
    }
    return!0;
  }
  function D(a, b) {
    return a ? "class" == b ? a.className || "" : "for" == b ? a.htmlFor || "" : "style" == b ? a.style.cssText || "" : (pa ? a.getAttribute(b) : a.getAttribute(b, 2)) || "" : "";
  }
  function v(a) {
    return 1 == a.nodeType;
  }
  function H(a, b) {
    return a ? b ? function() {
      return a.apply(window, arguments) && b.apply(window, arguments);
    } : a : b;
  }
  function P(a) {
    function b() {
      0 <= m && (G.id = c(m, s).replace(/\\/g, ""), m = -1);
      if (0 <= n) {
        var a = n == s ? null : c(n, s);
        0 > "\x3e~+".indexOf(a) ? G.N = a : G.Ea = a;
        n = -1;
      }
      0 <= l && (G.ba.push(c(l + 1, s).replace(/\\/g, "")), l = -1);
    }
    function c(b, d) {
      return ja(a.slice(b, d));
    }
    a = 0 <= "\x3e~+".indexOf(a.slice(-1)) ? a + " * " : a + " ";
    for (var d = [], e = -1, f = -1, h = -1, k = -1, l = -1, m = -1, n = -1, q = "", r = "", w, s = 0, D = a.length, G = null, v = null;q = r, r = a.charAt(s), s < D;s++) {
      "\\" != q && (G || (w = s, G = {oa:null, ja:[], xa:[], ba:[], N:null, Ea:null, id:null, eb:function() {
        return pa ? this.zb : this.N;
      }}, n = s), 0 <= e ? "]" == r ? (v.Ha ? v.fb = c(h || e + 1, s) : v.Ha = c(e + 1, s), !(e = v.fb) || '"' != e.charAt(0) && "'" != e.charAt(0) || (v.fb = e.slice(1, -1)), G.xa.push(v), v = null, e = h = -1) : "\x3d" == r && (h = 0 <= "|~^$*".indexOf(q) ? q : "", v.type = h + r, v.Ha = c(e + 1, s - h.length), h = s + 1) : 0 <= f ? ")" == r && (0 <= k && (v.value = c(f + 1, s)), k = f = -1) : "#" == r ? (b(), m = s + 1) : "." == r ? (b(), l = s) : ":" == r ? (b(), k = s) : "[" == r ? (b(), e = 
      s, v = {}) : "(" == r ? (0 <= k && (v = {name:c(k + 1, s), value:null}, G.ja.push(v)), f = s) : " " == r && q != r && (b(), 0 <= k && G.ja.push({name:c(k + 1, s)}), G.nb = G.ja.length || G.xa.length || G.ba.length, G.Lb = G.oa = c(w, s), G.zb = G.N = G.Ea ? null : G.N || "*", G.N && (G.N = G.N.toUpperCase()), d.length && d[d.length - 1].Ea && (G.mb = d.pop(), G.oa = G.mb.oa + " " + G.oa), d.push(G), G = null));
    }
    return d;
  }
  function Q(a, b) {
    var c = b || [];
    a && c.push(a);
    return c;
  }
  var ia = xa && "BackCompat" == document.compatMode, Aa = document.firstChild.children ? "children" : "childNodes", pa = !1, Ed = {"*\x3d":function(a, b) {
    return function(c) {
      return 0 <= D(c, a).indexOf(b);
    };
  }, "^\x3d":function(a, b) {
    return function(c) {
      return 0 == D(c, a).indexOf(b);
    };
  }, "$\x3d":function(a, b) {
    return function(c) {
      c = " " + D(c, a);
      return c.lastIndexOf(b) == c.length - b.length;
    };
  }, "~\x3d":function(a, b) {
    var c = " " + b + " ";
    return function(b) {
      return 0 <= (" " + D(b, a) + " ").indexOf(c);
    };
  }, "|\x3d":function(a, b) {
    b = " " + b;
    return function(c) {
      c = " " + D(c, a);
      return c == b || 0 == c.indexOf(b + "-");
    };
  }, "\x3d":function(a, b) {
    return function(c) {
      return D(c, a) == b;
    };
  }}, cc = "undefined" == typeof document.firstChild.nextElementSibling, Bb = cc ? "nextSibling" : "nextElementSibling", je = cc ? "previousSibling" : "previousElementSibling", Ab = cc ? v : La, zc = {checked:function() {
    return function(a) {
      return a.checked || a.attributes.checked;
    };
  }, "first-child":function() {
    return w;
  }, "last-child":function() {
    return s;
  }, "only-child":function() {
    return function(a) {
      return w(a) && s(a) ? !0 : !1;
    };
  }, empty:function() {
    return function(a) {
      var b = a.childNodes;
      for (a = a.childNodes.length - 1;0 <= a;a--) {
        var c = b[a].nodeType;
        if (1 === c || 3 == c) {
          return!1;
        }
      }
      return!0;
    };
  }, contains:function(a, b) {
    var c = b.charAt(0);
    if ('"' == c || "'" == c) {
      b = b.slice(1, -1);
    }
    return function(a) {
      return 0 <= a.innerHTML.indexOf(b);
    };
  }, not:function(a, b) {
    var c = P(b)[0], d = {ma:1};
    "*" != c.N && (d.N = 1);
    c.ba.length || (d.ba = 1);
    var e = m(c, d);
    return function(a) {
      return!e(a);
    };
  }, "nth-child":function(a, b) {
    if ("odd" == b) {
      return n;
    }
    if ("even" == b) {
      return q;
    }
    if (-1 != b.indexOf("n")) {
      var c = b.split("n", 2), d = c[0] ? "-" == c[0] ? -1 : parseInt(c[0], 10) : 1, e = c[1] ? parseInt(c[1], 10) : 0, f = 0, h = -1;
      0 < d ? 0 > e ? e = e % d && d + e % d : 0 < e && (e >= d && (f = e - e % d), e %= d) : 0 > d && (d *= -1, 0 < e && (h = e, e %= d));
      if (0 < d) {
        return function(a) {
          a = r(a);
          return a >= f && (0 > h || a <= h) && a % d == e;
        };
      }
      b = e;
    }
    var k = parseInt(b, 10);
    return function(a) {
      return r(a) == k;
    };
  }}, ie = t ? function(a) {
    var b = a.toLowerCase();
    "class" == b && (a = "className");
    return function(c) {
      return pa ? c.getAttribute(a) : c[a] || c[b];
    };
  } : function(a) {
    return function(b) {
      return b && b.getAttribute && b.hasAttribute(a);
    };
  }, Dd = {}, Cd = {}, Bd = {}, Ad = !!document.querySelectorAll && (!xa || Ia("526")), Ca = 0, he = t ? function(a) {
    return pa ? a.getAttribute("_uid") || a.setAttribute("_uid", ++Ca) || Ca : a.uniqueID;
  } : function(a) {
    return a._uid || (a._uid = ++Ca);
  };
  a.ja = zc;
  return a;
}();
ba("goog.dom.query", ke);
ba("goog.dom.query.pseudos", ke.ja);
ba("site.init", function() {
  return console.log("hello world");
});

})();
