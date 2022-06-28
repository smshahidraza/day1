
export class FlightInfoModel {
    id: string;
    logo: string;
    flightNumber: string;
    originAirport?: string;
    destAirport?: string;
    departureTime?: Date;
    arrivalTime?: Date;
    origin: string;
    destination: string
    cost: number;
    status: string;
}
