var oikea = Math.floor(Math.random()*10)+1;
var count = 0;
function getId(clicked) {
    var num = clicked;
    count +=1;
    if (count<4) {
        if (num == oikea) {
            alert('Oikein, käytit ' + count +' kertaa');
            window.location.reload(); 
        }else if (num<oikea) {
            alert(' Valitsit liian pienen numeron')
        }else{
            alert('Valitsit liian suuren numeron');
        }
    }
    else{
        alert('Käytit kaikki kertasi');
        window.location.reload(); 
    }
}   
