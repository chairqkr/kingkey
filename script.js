function doGet(e) {
    var sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getSheetByName('Sheet1'); // 시트 ID 입력
    var name = e.parameter.name;
    var response1 = e.parameter.response1;
    var response2 = e.parameter.response2;
    var date = e.parameter.date;
  
    sheet.appendRow([name, response1, response2, date, new Date()]);  // 응답 저장
  
    return ContentService.createTextOutput("Success");
  }
  