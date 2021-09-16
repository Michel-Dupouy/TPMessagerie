export class Personne {

  private _nom: string;
  private _id: number


  constructor(nom: string, id: number) {
    this._nom = nom;
    this._id = id;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}
