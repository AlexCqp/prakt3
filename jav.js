var row_count = 1;
var col_count = 5;
async function ajt(){
    // if(!check) return;
    let url ='http://exercise.develop.maximaster.ru/service/products/';
    var tableBody=document.getElementById("#t");
    let response = await fetch(url);
    let commits = await response.json(); 

    for(var b = 0; b < 13; b++){
        row_count++;
    $('#t').append('<tr id = "'+row_count+'"></tr>');
    for(i = 0; i < col_count; i++){
        $('#' + row_count).append('<td id = "'+(i+1)+'s" ></td>');
    }
        var o=document.getElementById(row_count);
        o.cells[0].innerHTML = (b+1);
        o.cells[1].innerHTML = JSON.stringify(commits[b].name);
        o.cells[2].innerHTML = JSON.stringify(commits[b].quantity);
        o.cells[3].innerHTML = JSON.stringify(commits[b].price);
     }
    Get();
}
function Get(){
    for(var i = 0; i < 13; i++){
        var o=document.getElementById(i+2);
            var vals1=Number(o.cells[2].innerHTML);
            var vals2=Number(o.cells[3].innerHTML);
            var vals3=o.cells[4].innerHTML; 
            vals3 = vals1*vals2;
            o.cells[4].innerHTML = vals3;
        }
    
}
function refresh(){

    del();
    ajt();
}
function del(){

    for(var i = 0; i < 13; i++){
        try{
        var o=document.getElementById(i+2);
            o.parentNode.removeChild(o);
            row_count--;
        }catch{}
    }
}
function delIf(){
    var min = document.getElementById("#minPrice").value;
    var max = document.getElementById('#maxPrice').value;
    for(var i = 2; i < 15; i++){
        var o=document.getElementById(i);

        if(+o.cells[3].innerHTML < min || +o.cells[3].innerHTML > max){
            o.parentNode.removeChild(o);
            row_count--;
        }
    }
}