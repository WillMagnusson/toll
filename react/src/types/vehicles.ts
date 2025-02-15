export interface Vehicle {
  type: TollFreeVehicles;
}

export enum TollFreeVehicles {
  Motorbike = 'Motorbike',
  Tractor = 'Tractor',
  Emergency = 'Emergency',
  Diplomat = 'Diplomat',
  Foreign = 'Foreign',
  Military = 'Military',
}
