const path = require('path');
const db =require(path.join(__dirname, '../../BDD'));

//Valeur possible A_Category I_Category R_Category
function createCategory(category,nom,url){
  return new Promise((resolve,reject) =>{
      let sql="INSERT INTO "+category+" (NAME,URL) VALUES (?,?);";
      db.query(sql,[nom,url],(err,result)=>{
        if (err) {
          reject(err);
        } else {
          db.query("SELECT LAST_INSERT_ID() AS ID FROM "+category+" ;",(err,result)=>{
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          })

        }
      })
    }
  )
}
function getCategory(category){
  return new Promise((resolve,reject) =>{
      let sql="SELECT * from "+category+";"
      db.query(sql,(err,result)=>{
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      })
    }
  )
}
function updateCategory(category,id,nom,url){
  return new Promise((resolve,reject) =>{
      let sql="UPDATE "+category+" SET NAME = ? , URL = ? WHERE ID_Category= ?;";
      db.query(sql,[nom,url,id],(err,result)=>{
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      })
    }
  )
}
function deleteCategory(category,ID){
  return new Promise((resolve,reject) =>{
      let sql="DELETE FROM "+category+" WHERE ID_Category= ?;";
      db.query(sql,[ID],(err,result)=>{
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      })
    }
  )
}
module.exports={createCategory,getCategory,updateCategory,deleteCategory}
