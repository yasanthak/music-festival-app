export class Festivals {
  recordLabel: string;
  bands: Bands[] = [];
}

export class Bands {
  name: string;
  festivalName: string[];

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}