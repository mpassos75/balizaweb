import sqlite3 from 'sqlite3'
import { open } from 'sqlite';
//import express from 'express';

export async function openDB () {
  
   return open({
        filename: './mydados/db_baltran.db',
        driver: sqlite3.Database
    });
  }
   (async () => { 
    const db = await openDB();
 await db.exec(`
  CREATE TABLE IF NOT EXISTS motorist_cnh (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ncnh TEXT,
    tempo_cnh TEXT,
    inseg_est TEXT,
    sit_dif TEXT,
    coment_motivo TEXT,
    info_tel INT,
    email TEXT
  )`);
    }) (); 
    