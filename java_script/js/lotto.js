var num = [];

for(var i = 0; i <6; i++){
    num[i] = Math.floor((Math.random() * 50) + 1);
    for(var k = 0; k < i; k++){
        if(num[i] == num[k]){
        i--;
        }
        if(num[i]<num[k]){
            var renew = num[i];
            num[i] = num[k];
            num[k] = renew;
        }
    }
}

var lottoNum = {
    showNum: function(){
        document.querySelector("#result").innerHTML = num[0]+" "+num[1]+" "+num[2]+" "+num[3]+" "+num[4]+" "+num[5];
    }
}

lottoNum.showNum();
