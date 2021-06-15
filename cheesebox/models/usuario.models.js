const create = ({
  nombre, apellidos, username, email, password
}) => {
  return new Promise((resolve, reject) => {
      db.query('insert into usuarios (nombre, apellidos, username, email, password) values (?, ?, ?, ?, ?)', [ nombre, apellidos, username, email, password], (err, result) => {
          if (err) reject(err);
          resolve(result);
      });
  });
}

const getById = (pUsuarioId) => {
  return new Promise((resolve, reject) => {
      db.query('select * from usuarios where id = ?', [pUsuarioId], (err, rows) => {
          if (err) reject(err);
          // if (rows.length !== 1) resolve(null);
          resolve(rows[0]);
      })
  });
}


const deleteById = (pUsuarioId) => {

  return new Promise((resolve, reject) => {
      
      db.query('delete from usuarios where id = ?', [pUsuarioId], (err, result) => {
          
          if (err) reject(err);
          resolve(result)
      });
  });
  
}
const update = (pUsuarioId, { nombre, apellidos, username, email, password }) => {
   console.log('Algo me da igual') 
  return new Promise((resolve, reject) => {
      db.query(
          'UPDATE usuarios SET nombre = ?, apellidos = ?, username = ?, email = ?, password = ? where id = ?',
          [nombre, apellidos, username, email, password, pUsuarioId],
          (err, result) => {
            if (err) reject(err);
            console.log(result)
              resolve(result);
          });
  });
}


module.exports = { create, getById, deleteById, update };