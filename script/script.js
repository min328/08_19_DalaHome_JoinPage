function fnPopUp(num){
    //winodw.open(A,B,C)
    // A: 사용할 HTML파일(url기재)
    // B: 사용할 HTML파일을 지칭하는 명칭 - "팝업명"
    // C: 팝업과 관련된 속성, 가로폭, 세로높이, 가로위치, 세로위치 
    let url;
    if(num == 1) {
        url = "bookmark.html";
    } else if (num == 2) {
        url = "shortcut.html";
    }
    let fileAlias = "bookmark";
    let property = "width=450 height=390 left=600 top=300";
    window.open(url, fileAlias, property);
}

function fnAdd(){
    let msg = "이용하시는 브라우저에서는 기능이 지원되지 않습니다. \n"
    alert(msg);
    window.self.close();
}

function fnCancle(){
    window.self.close();
}