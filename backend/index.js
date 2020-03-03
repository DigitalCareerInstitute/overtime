
const { GoogleSpreadsheet } = require('google-spreadsheet');
const express = require('express');

async function loadDocument(id){
  const doc = new GoogleSpreadsheet(id);
  await doc.useServiceAccountAuth(require('../google_api.json'));
  await doc.loadInfo();
  console.log('loaded',doc.title);
  return doc;
}

//const app = express();
//
//app.get('/doc/read/',async function(req,res){
(async function(){
  const doc = await loadDocument('1_XDWs0qCuwR6zCZMxh3i1Rpu9fhJCRjpgeNt8RTARG4/');
  const sht = doc.sheetsByIndex[1];
  await sht.loadCells();
  sht.getCell(0,0).value = 2
  await sht.saveUpdatedCells()
  console.log('sheet',sht.getCell(0,0).value);
})()
//});

//app.listen(4000);

//await doc.updateProperties({ title: 'renamed doc' });
// const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
// console.log(sheet.title);
// console.log(sheet.rowCount);
// adding / removing sheets
// const newSheet = await doc.addSheet({ title: 'hot new sheet!' });
// await newSheet.delete();
