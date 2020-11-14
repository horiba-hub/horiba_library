function get_cell(ss_id,sheet_name,cell) {  
  //cellの値の取得
  let text_ss = SpreadsheetApp.openById(ss_id);
  let sheet = text_ss.getSheetByName(sheet_name);
  let range = sheet.getRange(cell);
  let text1 = range.getValue();
  return text1
  
  /*
  使用例
  function myFunction() {
  let ss_id = "1R7cL8egelBldCu0CMw3fDiCHr2gZC2nn_dEtQTtJejk" ;
  let sheet_name = "template";
  let cell = "A6";
  
  let value = h_lib.get_cell(ss_id,sheet_name,cell);
    console.log(value);
  }
  
  */
  
}


function main(){
   let ans = get_cell("1ZGCndHHLy6DN2pyQKXWHJTcwQLnjJRnDK93BACXL1d8","シート1","A2");
   Logger.log(ans);
   console.log(ans);
}