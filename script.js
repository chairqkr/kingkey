function doGet(e) {
    var sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getSheetByName('Sheet1'); // 시트 ID 입력

    // 요청된 데이터 가져오기 (파라미터 확인)
    var name = e.parameter.name || "이름 없음";   // 기본값 설정: 이름이 없으면 "이름 없음"으로 설정
    var response1 = e.parameter.response1 || ""; // 첫 번째 응답이 없으면 빈 문자열
    var response2 = e.parameter.response2 || ""; // 두 번째 응답이 없으면 빈 문자열
    var date = e.parameter.date || "";  // 날짜가 없으면 빈 문자열

    // 현재 시간 추가
    var timestamp = new Date();

    // 스프레드시트에 데이터 추가
    sheet.appendRow([name, response1, response2, date, timestamp]);

    // 성공 응답
    return ContentService.createTextOutput("Success");
}
