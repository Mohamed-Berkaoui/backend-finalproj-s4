class AppSuccess{
    constructor(data){
        this.status="SUCCESS"
        this.data=data
    }
}

class AppFail{
    constructor(data){
        this.status="FAIL"
        this.data=data
    }
}
class AppError {
    constructor(data){
        this.message=data
        this.status="ERROR"
       
    }
}

module.exports={AppError,AppFail,AppSuccess}