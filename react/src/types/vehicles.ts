export interface Vehicle {
  type: TolledVehicles | TollFreeVehicles;
}

//Maybe allow any value here instead of an enum, and
//avoiding "whitelisting" vehicle types that should pay a toll
export enum TolledVehicles {
  Car = 'Car',
  // Truck = 'Truck',
  // Bus = 'Bus',
  // Van = 'Van',
  // Trailer = 'Trailer',
}

export enum TollFreeVehicles {
  Motorbike = 'Motorbike',
  Tractor = 'Tractor',
  Emergency = 'Emergency',
  Diplomat = 'Diplomat',
  Foreign = 'Foreign',
  Military = 'Military',
}
