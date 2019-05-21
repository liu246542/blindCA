struct InitParame {
  1: string L,
  2: i16 N
}

struct PublicParame {
  1: string p,
  2: string g,
  3: string h,
  4: string x,
  5: string y,
  6: string z,
  7: string gamma,
  8: string xi,
  9: string sg,
  10: string sh,
  11: string sy,
  12: string sz,
  13: string sxi
}

service setup {
  string sayHello()
  PublicParame init(1: InitParame initParame)
}