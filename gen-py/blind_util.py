from charm.toolbox.ecgroup import ECGroup,G,ZR
from charm.toolbox.eccurve import secp256k1, secp192k1, secp160k1

def initHandler(kappa):
  group = ECGroup(kappa);
  g, h = group.random(G), group.random(G)
  x, gamma = group.random(ZR), group.random(ZR)
  y, xi = g ** x, g ** gamma
  z = group.hash((g, h, y), G)

  #####-------------------------------#####
  zu = z ** (gamma ** -1)
  v, u, d, s1, s2 = (group.random(ZR) for i in range(5))
  t1, t2, t3, t4, t5 = (group.random(ZR) for i in range(5))
  # z1 = 
  #####-------------------------------#####

  return (str(k)  for k in [group.order(), g, h, x, y, gamma, xi, z, group.serialize(g), group.serialize(h), group.serialize(y), group.serialize(xi), group.serialize(z)])