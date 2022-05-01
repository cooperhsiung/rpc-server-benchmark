package main

import (
  "context"
  "crypto/tls"
  "fmt"
  "github.com/apache/thrift/lib/go/thrift"
  "rpc-server-benchmark/gen-go/unpkg"
)

type CalculatorHandler struct {
}

func NewCalculatorHandler() *CalculatorHandler {
  return &CalculatorHandler{}
}

func (p *CalculatorHandler) Publish(ctx context.Context, req *unpkg.PublishRequest) (res *unpkg.PublishResponse, err error) {
  return &unpkg.PublishResponse{
    Code:    0,
    Message: toPtr("hello go"),
  }, nil
}

func (p *CalculatorHandler) FindOne(ctx context.Context, req *unpkg.FindOneRequest) (res *unpkg.FindOneResponse, err error) {
  return &unpkg.FindOneResponse{
    Name:        toPtr("rpc-server-benchmark"),
    Version:     toPtr("1.0.0"),
    Description: toPtr("Performance testing of rpc servers."),
    Main:        toPtr("index.js"),
    Repository: &unpkg.Repository{
      Type: toPtr("git"),
      URL:  toPtr("git+https://github.com/cooperhsiung/rpc-server-benchmark.git"),
    },
    Author:  toPtr("CooperHsiung"),
    License: toPtr("MIT"),
  }, nil
}

func toPtr(string2 string) *string {
  return &string2
}

func runServer(transportFactory thrift.TTransportFactory, protocolFactory thrift.TProtocolFactory, addr string, secure bool) error {
  var transport thrift.TServerTransport
  var err error
  if secure {
    cfg := new(tls.Config)
    if cert, err := tls.LoadX509KeyPair("server.crt", "server.key"); err == nil {
      cfg.Certificates = append(cfg.Certificates, cert)
    } else {
      return err
    }
    transport, err = thrift.NewTSSLServerSocket(addr, cfg)
  } else {
    transport, err = thrift.NewTServerSocket(addr)
  }

  if err != nil {
    return err
  }
  fmt.Printf("%T\n", transport)
  handler := NewCalculatorHandler()
  processor := unpkg.NewUnpkgServiceProcessor(handler)
  server := thrift.NewTSimpleServer4(processor, transport, transportFactory, protocolFactory)

  fmt.Println("Starting the simple server... on ", addr)
  return server.Serve()
}

func main() {

  var protocolFactory = thrift.NewTBinaryProtocolFactory(false, false)
  var transportFactory = thrift.NewTTransportFactory()
  if err := runServer(transportFactory, protocolFactory, "localhost:4004", false); err != nil {
    fmt.Println("error running server:", err)
  }
  fmt.Println("go run at localhost:4004")
}
