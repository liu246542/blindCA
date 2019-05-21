#
# Autogenerated by Thrift Compiler (0.12.0)
#
# DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
#
#  options string: py
#

from thrift.Thrift import TType, TMessageType, TFrozenDict, TException, TApplicationException
from thrift.protocol.TProtocol import TProtocolException
from thrift.TRecursive import fix_spec

import sys

from thrift.transport import TTransport
all_structs = []


class InitParame(object):
    """
    Attributes:
     - L
     - N

    """


    def __init__(self, L=None, N=None,):
        self.L = L
        self.N = N

    def read(self, iprot):
        if iprot._fast_decode is not None and isinstance(iprot.trans, TTransport.CReadableTransport) and self.thrift_spec is not None:
            iprot._fast_decode(self, iprot, [self.__class__, self.thrift_spec])
            return
        iprot.readStructBegin()
        while True:
            (fname, ftype, fid) = iprot.readFieldBegin()
            if ftype == TType.STOP:
                break
            if fid == 1:
                if ftype == TType.STRING:
                    self.L = iprot.readString().decode('utf-8') if sys.version_info[0] == 2 else iprot.readString()
                else:
                    iprot.skip(ftype)
            elif fid == 2:
                if ftype == TType.I16:
                    self.N = iprot.readI16()
                else:
                    iprot.skip(ftype)
            else:
                iprot.skip(ftype)
            iprot.readFieldEnd()
        iprot.readStructEnd()

    def write(self, oprot):
        if oprot._fast_encode is not None and self.thrift_spec is not None:
            oprot.trans.write(oprot._fast_encode(self, [self.__class__, self.thrift_spec]))
            return
        oprot.writeStructBegin('InitParame')
        if self.L is not None:
            oprot.writeFieldBegin('L', TType.STRING, 1)
            oprot.writeString(self.L.encode('utf-8') if sys.version_info[0] == 2 else self.L)
            oprot.writeFieldEnd()
        if self.N is not None:
            oprot.writeFieldBegin('N', TType.I16, 2)
            oprot.writeI16(self.N)
            oprot.writeFieldEnd()
        oprot.writeFieldStop()
        oprot.writeStructEnd()

    def validate(self):
        return

    def __repr__(self):
        L = ['%s=%r' % (key, value)
             for key, value in self.__dict__.items()]
        return '%s(%s)' % (self.__class__.__name__, ', '.join(L))

    def __eq__(self, other):
        return isinstance(other, self.__class__) and self.__dict__ == other.__dict__

    def __ne__(self, other):
        return not (self == other)


class PublicParame(object):
    """
    Attributes:
     - p
     - g
     - h
     - x
     - y
     - z
     - gamma
     - xi
     - sg
     - sh
     - sy
     - sz
     - sxi

    """


    def __init__(self, p=None, g=None, h=None, x=None, y=None, z=None, gamma=None, xi=None, sg=None, sh=None, sy=None, sz=None, sxi=None,):
        self.p = p
        self.g = g
        self.h = h
        self.x = x
        self.y = y
        self.z = z
        self.gamma = gamma
        self.xi = xi
        self.sg = sg
        self.sh = sh
        self.sy = sy
        self.sz = sz
        self.sxi = sxi

    def read(self, iprot):
        if iprot._fast_decode is not None and isinstance(iprot.trans, TTransport.CReadableTransport) and self.thrift_spec is not None:
            iprot._fast_decode(self, iprot, [self.__class__, self.thrift_spec])
            return
        iprot.readStructBegin()
        while True:
            (fname, ftype, fid) = iprot.readFieldBegin()
            if ftype == TType.STOP:
                break
            if fid == 1:
                if ftype == TType.STRING:
                    self.p = iprot.readString().decode('utf-8') if sys.version_info[0] == 2 else iprot.readString()
                else:
                    iprot.skip(ftype)
            elif fid == 2:
                if ftype == TType.STRING:
                    self.g = iprot.readString().decode('utf-8') if sys.version_info[0] == 2 else iprot.readString()
                else:
                    iprot.skip(ftype)
            elif fid == 3:
                if ftype == TType.STRING:
                    self.h = iprot.readString().decode('utf-8') if sys.version_info[0] == 2 else iprot.readString()
                else:
                    iprot.skip(ftype)
            elif fid == 4:
                if ftype == TType.STRING:
                    self.x = iprot.readString().decode('utf-8') if sys.version_info[0] == 2 else iprot.readString()
                else:
                    iprot.skip(ftype)
            elif fid == 5:
                if ftype == TType.STRING:
                    self.y = iprot.readString().decode('utf-8') if sys.version_info[0] == 2 else iprot.readString()
                else:
                    iprot.skip(ftype)
            elif fid == 6:
                if ftype == TType.STRING:
                    self.z = iprot.readString().decode('utf-8') if sys.version_info[0] == 2 else iprot.readString()
                else:
                    iprot.skip(ftype)
            elif fid == 7:
                if ftype == TType.STRING:
                    self.gamma = iprot.readString().decode('utf-8') if sys.version_info[0] == 2 else iprot.readString()
                else:
                    iprot.skip(ftype)
            elif fid == 8:
                if ftype == TType.STRING:
                    self.xi = iprot.readString().decode('utf-8') if sys.version_info[0] == 2 else iprot.readString()
                else:
                    iprot.skip(ftype)
            elif fid == 9:
                if ftype == TType.STRING:
                    self.sg = iprot.readString().decode('utf-8') if sys.version_info[0] == 2 else iprot.readString()
                else:
                    iprot.skip(ftype)
            elif fid == 10:
                if ftype == TType.STRING:
                    self.sh = iprot.readString().decode('utf-8') if sys.version_info[0] == 2 else iprot.readString()
                else:
                    iprot.skip(ftype)
            elif fid == 11:
                if ftype == TType.STRING:
                    self.sy = iprot.readString().decode('utf-8') if sys.version_info[0] == 2 else iprot.readString()
                else:
                    iprot.skip(ftype)
            elif fid == 12:
                if ftype == TType.STRING:
                    self.sz = iprot.readString().decode('utf-8') if sys.version_info[0] == 2 else iprot.readString()
                else:
                    iprot.skip(ftype)
            elif fid == 13:
                if ftype == TType.STRING:
                    self.sxi = iprot.readString().decode('utf-8') if sys.version_info[0] == 2 else iprot.readString()
                else:
                    iprot.skip(ftype)
            else:
                iprot.skip(ftype)
            iprot.readFieldEnd()
        iprot.readStructEnd()

    def write(self, oprot):
        if oprot._fast_encode is not None and self.thrift_spec is not None:
            oprot.trans.write(oprot._fast_encode(self, [self.__class__, self.thrift_spec]))
            return
        oprot.writeStructBegin('PublicParame')
        if self.p is not None:
            oprot.writeFieldBegin('p', TType.STRING, 1)
            oprot.writeString(self.p.encode('utf-8') if sys.version_info[0] == 2 else self.p)
            oprot.writeFieldEnd()
        if self.g is not None:
            oprot.writeFieldBegin('g', TType.STRING, 2)
            oprot.writeString(self.g.encode('utf-8') if sys.version_info[0] == 2 else self.g)
            oprot.writeFieldEnd()
        if self.h is not None:
            oprot.writeFieldBegin('h', TType.STRING, 3)
            oprot.writeString(self.h.encode('utf-8') if sys.version_info[0] == 2 else self.h)
            oprot.writeFieldEnd()
        if self.x is not None:
            oprot.writeFieldBegin('x', TType.STRING, 4)
            oprot.writeString(self.x.encode('utf-8') if sys.version_info[0] == 2 else self.x)
            oprot.writeFieldEnd()
        if self.y is not None:
            oprot.writeFieldBegin('y', TType.STRING, 5)
            oprot.writeString(self.y.encode('utf-8') if sys.version_info[0] == 2 else self.y)
            oprot.writeFieldEnd()
        if self.z is not None:
            oprot.writeFieldBegin('z', TType.STRING, 6)
            oprot.writeString(self.z.encode('utf-8') if sys.version_info[0] == 2 else self.z)
            oprot.writeFieldEnd()
        if self.gamma is not None:
            oprot.writeFieldBegin('gamma', TType.STRING, 7)
            oprot.writeString(self.gamma.encode('utf-8') if sys.version_info[0] == 2 else self.gamma)
            oprot.writeFieldEnd()
        if self.xi is not None:
            oprot.writeFieldBegin('xi', TType.STRING, 8)
            oprot.writeString(self.xi.encode('utf-8') if sys.version_info[0] == 2 else self.xi)
            oprot.writeFieldEnd()
        if self.sg is not None:
            oprot.writeFieldBegin('sg', TType.STRING, 9)
            oprot.writeString(self.sg.encode('utf-8') if sys.version_info[0] == 2 else self.sg)
            oprot.writeFieldEnd()
        if self.sh is not None:
            oprot.writeFieldBegin('sh', TType.STRING, 10)
            oprot.writeString(self.sh.encode('utf-8') if sys.version_info[0] == 2 else self.sh)
            oprot.writeFieldEnd()
        if self.sy is not None:
            oprot.writeFieldBegin('sy', TType.STRING, 11)
            oprot.writeString(self.sy.encode('utf-8') if sys.version_info[0] == 2 else self.sy)
            oprot.writeFieldEnd()
        if self.sz is not None:
            oprot.writeFieldBegin('sz', TType.STRING, 12)
            oprot.writeString(self.sz.encode('utf-8') if sys.version_info[0] == 2 else self.sz)
            oprot.writeFieldEnd()
        if self.sxi is not None:
            oprot.writeFieldBegin('sxi', TType.STRING, 13)
            oprot.writeString(self.sxi.encode('utf-8') if sys.version_info[0] == 2 else self.sxi)
            oprot.writeFieldEnd()
        oprot.writeFieldStop()
        oprot.writeStructEnd()

    def validate(self):
        return

    def __repr__(self):
        L = ['%s=%r' % (key, value)
             for key, value in self.__dict__.items()]
        return '%s(%s)' % (self.__class__.__name__, ', '.join(L))

    def __eq__(self, other):
        return isinstance(other, self.__class__) and self.__dict__ == other.__dict__

    def __ne__(self, other):
        return not (self == other)
all_structs.append(InitParame)
InitParame.thrift_spec = (
    None,  # 0
    (1, TType.STRING, 'L', 'UTF8', None, ),  # 1
    (2, TType.I16, 'N', None, None, ),  # 2
)
all_structs.append(PublicParame)
PublicParame.thrift_spec = (
    None,  # 0
    (1, TType.STRING, 'p', 'UTF8', None, ),  # 1
    (2, TType.STRING, 'g', 'UTF8', None, ),  # 2
    (3, TType.STRING, 'h', 'UTF8', None, ),  # 3
    (4, TType.STRING, 'x', 'UTF8', None, ),  # 4
    (5, TType.STRING, 'y', 'UTF8', None, ),  # 5
    (6, TType.STRING, 'z', 'UTF8', None, ),  # 6
    (7, TType.STRING, 'gamma', 'UTF8', None, ),  # 7
    (8, TType.STRING, 'xi', 'UTF8', None, ),  # 8
    (9, TType.STRING, 'sg', 'UTF8', None, ),  # 9
    (10, TType.STRING, 'sh', 'UTF8', None, ),  # 10
    (11, TType.STRING, 'sy', 'UTF8', None, ),  # 11
    (12, TType.STRING, 'sz', 'UTF8', None, ),  # 12
    (13, TType.STRING, 'sxi', 'UTF8', None, ),  # 13
)
fix_spec(all_structs)
del all_structs
