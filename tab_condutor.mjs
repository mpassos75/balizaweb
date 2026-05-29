import  {openDB} from './config_bd.mjs';


 export async function insertCondt(ncnh, tempo_cnh, inseg_est, sit_dif, coment_motivo, info_tel, email) {
  const db = await openDB();
  await db.run('INSERT INTO motorist_cnh (ncnh, tempo_cnh, inseg_est, sit_dif, coment_motivo, info_tel, email) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [ncnh, tempo_cnh, inseg_est, sit_dif, coment_motivo, info_tel, email])
}