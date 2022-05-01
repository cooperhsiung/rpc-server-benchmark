include "./base.thrift"

namespace go unpkg
namespace py unpkg

struct UserBaseInfoStruct {
    1: required string username
    2: optional string email;
}

struct ProjectStruct {
    1: required i64 uid;
    2: required string name
    3: required string repo;
    4: required list<string> maintainers;
}

struct GetUserBaseInfoRequest {
    1: required string username
    255: optional base.Base Base
}

struct GetUserBaseInfoResponse {
    1: UserBaseInfoStruct info;
    255: base.BaseResp BaseResp
}

struct GetUserProjectListRequest {
    1: i64 uid;
    255: optional base.Base Base
}

struct GetUserProjectListResponse {
    1: list<ProjectStruct> projects;
    255: base.BaseResp BaseResp
}

service UserService {
    GetUserBaseInfoResponse GetUserBaseInfo(1: GetUserBaseInfoRequest req)
    GetUserProjectListResponse GetUserProjectList(1: GetUserProjectListRequest req)
}
