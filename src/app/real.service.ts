import { Injectable } from '@angular/core';
import REAL_DATA from './real-data';

@Injectable({
  providedIn: 'root'
})
export class RealService {
  // Création d'une propriétés du service. Car REAL_DATA est un objet avec un tableau "reals"
  dataRealisation = REAL_DATA.reals;

  constructor() {
    console.log(REAL_DATA);
   }
}
