import * as SQLite from 'expo-sqlite';
import { IPlaceModel } from '../models/store/places/place';

const db = SQLite.openDatabase('places.db');

export const init = (): Promise<void> => {
  const promise = new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);',
        [],
        () => {
          resolve();
        }
      );
    });
  });
  return promise;
};

export const insertPlace = (place: IPlaceModel): Promise<any> => {
  const promise = new Promise<any>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?);`,
        [place.title, place.imageUri, place.address, place.lat, place.lng],
        (_, result) => {
          resolve(result);
        }
      );
    });
  });
  return promise;
};

export const fetchPlaces = (): Promise<any> => {
  const promise = new Promise<any>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(`SELECT * FROM places;`, [], (_, result) => {
        resolve(result);
      });
    });
  });
  return promise;
};
