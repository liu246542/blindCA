import json

from ecc import setup
from blind_util import initHandler, oneHandler, twoHandler
from charm.toolbox.eccurve import secp256k1, secp192k1, secp160k1

# from thrift.transport import TSocket
# from thrift.transport import TTransport
from thrift.protocol import TJSONProtocol
from thrift.server import THttpServer

stus = {}

security_dict = {
  '256' : secp256k1,
  '192' : secp192k1,
  '160' : secp160k1
}

class TestHandler:
  def sayHello(self):
    print('Hello world!!')
    return 'hello from python'

  def init(self, initList):
    params = initHandler(security_dict[initList.L])
    ret = setup.PublicParame(*params)
    return ret

  def execOne(self, paraOne):
    handret = oneHandler(paraOne)
    # ret = setup.ReturnOne()
    return setup.ReturnOne(*handret)

  def execTwo(self, paratwo):
    handret = twoHandler(paratwo)
    return setup.ReturnTwo(*handret)
    


# 创建服务端
processor = setup.Processor(TestHandler())
# 监听端口
# transport = TSocket.TServerSocket("127.0.0.1", 3000)
# 选择传输层
# tfactory = TTransport.TBufferedTransportFactory()
# 选择传输协议
pfactory = TJSONProtocol.TJSONProtocolFactory()
# 创建服务端
server = THttpServer.THttpServer(processor, ("127.0.0.1", 2333), pfactory)
print("Starting thrift server in python...")
server.serve()