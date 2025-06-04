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