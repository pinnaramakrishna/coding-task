function  d(){
    var today =new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yy = today.getFullYear();
    if(dd<10) add = '0'+dd;
    if(mm<10) add = '0'+mm;
    return (dd+"/"+mm+"/"+yy);

}
console.log(d());
