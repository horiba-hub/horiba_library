function get_cell(ss_id,sheet_name,cell) {  
  //cellの値の取得
  let text_ss = SpreadsheetApp.openById(ss_id);
  let sheet = text_ss.getSheetByName(sheet_name);
  let range = sheet.getRange(cell);
  let text1 = range.getValue();
  return text1

}

