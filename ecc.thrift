struct InitParame {
  1: string L,
  2: i16 N
}


struct ProtocolOne {
  1: string t1,
  2: string t2,
  3: string t3,
  4: string t4,
  5: string t5,
  6: string gamma,
  7: string sz1,
  8: string sz,
  9: string sa,
  10: string sb1,
  11: string sb2,
  12: string sg,
  13: string sh,
  14: string sy,
  15: string M,
  16: string L,
  17: string d,
  18: string u,
  19: string x,
  20: string s1,
  21: string s2,
  22: string v,
  23: string sxi
}

struct ReturnOne {
  1: string zeta1,
  2: string zeta2,
  3: string alpha,
  4: string beta1,
  5: string beta2,
  6: string epsilon,
  7: string e,
  8: string c,
  9: string r,
  10: string roi,
  11: string omega,
  12: string sigma1,
  13: string sigma2,
  14: string delta,
  15: string xiv,
  16: string sxiv,
  17: string szeta1,
  18: string szeta2
}

struct ReturnTwo {
  1: string omdelta
  2: string hashres
}

struct ProtocolTwo {
  1: string omega,
  2: string delta,
  3: string L,
  4: string sg,
  5: string roi,
  6: string sy,
  7: string sigma1,
  8: string sigma2,
  9: string szeta1,
  10: string szeta2,
  11: string sh,
  12: string m
}

struct PublicParame {
  1: string p,
  2: string g,
  3: string h,
  4: string x,
  5: string y,
  6: string gamma,
  7: string xi,
  8: string z,
  9: string zu,
  10: string v,
  11: string u,
  12: string d,
  13: string s1,
  14: string s2,
  15: string t1,
  16: string t2,
  17: string t3,
  18: string t4,
  19: string t5,
  20: string z1,
  21: string z2,
  22: string a,
  23: string b1,
  24: string b2
  25: string sg,
  26: string sh,
  27: string sy,
  28: string sxi,
  29: string sz,
  30: string szu,
  31: string sz1,
  32: string sz2,
  33: string sa,
  34: string sb1,
  35: string sb2
}

service setup {
  string sayHello()
  PublicParame init(1: InitParame initParame)
  ReturnOne execOne(1: ProtocolOne protocolone)
  ReturnTwo execTwo(1: ProtocolTwo protocoltwo)
}