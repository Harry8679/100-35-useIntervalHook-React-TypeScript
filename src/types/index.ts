// Types pour interval - AUCUN ANY

export interface DataPoint {
  id: string;
  timestamp: Date;
  value: number;
}

export interface Racer {
  id: string;
  name: string;
  position: number;
  speed: number;
  color: string;
}