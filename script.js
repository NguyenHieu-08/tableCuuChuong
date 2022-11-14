let text;
text = "<table border='1' width='300' cellspacing='0' cellpadding='3'>"

for(let i = 1; i < 10; i++) {
    text = text + '<tr>'
    for(let j = 2; j < 10 ; j++) {
        text = text + '<td>'+ j +'*'+ i +'='+ j*i + '</td>'
    }
    text = text + '</tr>'
}
text = text + "</table>"

document.getElementById('tbbangcuuchuong').innerHTML = text;