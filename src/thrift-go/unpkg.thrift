namespace go unpkg
namespace py unpkg

struct PublishRequest {
    1: required string name = "koa-thrift"
    2: required i32 version
}

struct PublishResponse {
    1: required i16 code
    2: optional string message
}


struct FindOneRequest {
    1: optional string name = "koa-thrift"
}


struct Repository {
    1: optional string type
    2: optional string url
}

struct FindOneResponse {
    1: optional string name
    2: optional string version
    3: optional string description
    4: optional string main
    5: optional Repository repository
    6: optional string author
    7: optional string license
}

service UnpkgService {
    PublishResponse Publish(1: PublishRequest req)

    // query detail
    FindOneResponse FindOne(1: FindOneRequest req)
}
