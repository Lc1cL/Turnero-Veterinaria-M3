export enum turnoStatus{
    ACTIVE = "active",
    CANCELLED = "cancelled",
}


interface ITurnos{
    Id: number,
    date: string,
    time: string,
    userID: number,
    status: turnoStatus
    description: string,
}

export default ITurnos;