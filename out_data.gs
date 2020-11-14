function out_cell(ss_id,sheet_name,cell,word) {  
  //cellの値の取得
  let text_ss = SpreadsheetApp.openById(ss_id);
  let sheet = text_ss.getSheetByName(sheet_name);
  let range = sheet.getRange(cell);
  range.setValue(word);
}