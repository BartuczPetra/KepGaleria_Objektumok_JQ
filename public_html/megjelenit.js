var kep1 = {
    eleresiut: "kkepek/Bobby.jpg",
    cim: "1. képcím",
    leiras: "1. leírás"
};

var kep2 = {
    eleresiut: "kkepek/Bobby3.jpg",
    cim: "2. képcím",
    leiras: "3. leírás"
};

var kep3 = {
    eleresiut: "kkepek/Bobby1.jpg",
    cim: "3. képcím",
    leiras: "3. leírás"
};

var kepTomb = [kep1, kep2, kep3];

var index=0;

$(function () {
    kepHozzaadas();
    $("article img").click(kepCsere);
    $("#bal").click(balralapozas);
    $("#jobb").click(jobbralapozas);

});


function kepHozzaadas() {
    for (var i = 0; i < kepTomb.length; i++) {
        $("article").append('<div><h3>'+kepTomb[i].cim+'</h3><img id="'+i+'" src="'+kepTomb[i].eleresiut+'" alt=""/><p>'+kepTomb[i].leiras+'</p></div>');
    }
}
function kepCsere(){
    var i = this.id;
    $("#nagykepTarolo img").attr("src",kepTomb[i].eleresiut);
    $("#nagykepTarolo h3").html(kepTomb[i].cim);
    $("#nagykepTarolo p").html(kepTomb[i].leiras);
}

function balralapozas(){
    index--;
    if(index<0){
        index=kepTomb.length-1;
    }
    $("#nagykepTarolo img").attr("src", kepTomb[index].eleresiut);
    $("#nagykepTarolo h3").html(kepTomb[index].cim);
    $("#nagykepTarolo p").html(kepTomb[index].leiras);
}
function jobbralapozas(){
    index++;
    if(index>kepTomb.length-1){
        index=0;
    }
    $("#nagykepTarolo img").attr("src", kepTomb[index].eleresiut);
    $("#nagykepTarolo h3").html(kepTomb[index].cim);
    $("#nagykepTarolo p").html(kepTomb[index].leiras);
}