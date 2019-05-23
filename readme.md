## Introduction

This is a light-weight server for fair blind signature with privacy-preserving smart constract. You can find the complete project at [blockchain-crypto-lab](https://github.com/blockchain-crypto-lab). All rights reserved by [rjgeek](https://github.com/rjgeek).

## Quick Start

We suggest using docker to deploy.

```
docker pull aowatchsea/blindca
docker run -t -i -p 8080:8080 aowatchsea/blindca
./blindCA/start.sh
```

Then open http://localhost:8080 in your browser, just enjoy~!

> Firefox browser is recommended in this project.

---

If you want to use the source codes, please ensure that you have installed the following dependencies:

- [charm](https://github.com/JHUISI/charm)
- [metamask](https://metamask.io/)
- [thrift python version](https://github.com/apache/thrift)

```
git clone https://github.com/liu246542/blindCA
chmod +x ./start.sh
./start.sh
```