export type DashboardResponseType={
    http_code:number;
    status:string;
    message:string;
    data:Array<{
        name:string;
    }>
}
export type PeopleResponseType={
    http_code:number;
    status:string;
    message:string;
    data:Array<{
        businessName:string;
    }>
}
export type ReportsResponseType={
    http_code:number;
    status:string;
    message:string;
    data:Array<{
        reportName:string;
    }>
}
export type Generic<T,M=string>={
    http_code:number;
    status:string;
    message:M;
    data:T
}

export type ReportsGenericResponseType=Generic<{
        reportName:string;
    }>

    const returnSameValue=<T>(a:T):T=>a

    returnSameValue(10)