import {Personne} from "./Personne";

export class Message {
  private _id:number;
  private _auteur: Personne;
  private _date : Date;
  private _corps : string;


  constructor(id: number, auteur: Personne, date: Date, corps: string) {
    this._id = id;
    this._auteur = auteur;
    this._date = date;
    this._corps = corps;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get auteur(): Personne {
    return this._auteur;
  }

  set auteur(value: Personne) {
    this._auteur = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get corps(): string {
    return this._corps;
  }

  set corps(value: string) {
    this._corps = value;
  }
}
