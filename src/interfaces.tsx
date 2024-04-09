export interface ITrip {
    id?: string,
    fromStation: string,
    toStation: string,
    startTime: string,
    seats: number,
    price: number,
    isBooked?: number,
    busHouseId: string,
    stations: string,
    busHouse?: IBusHouse
}

export interface IBusHouse {
    adress: string,
    id: string,
    name: string,
    phone: string,
}

