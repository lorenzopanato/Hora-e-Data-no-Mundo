let divData = document.getElementById("data");

atualizar();
setInterval(atualizar, 1000);

function atualizar() {

    let dataLocal = new Date();
    divData.innerHTML = definirData(dataLocal);

    function definirData(data) {
        let dia = data.getDate();
        let ano = data.getFullYear();
 
        return `${definirDiaSemana(data)}, ${dia} de ${definirMes(data)} de ${ano}`;
    }

    function definirDiaSemana(data) {
        let diaSemana = data.getDay();

        switch(diaSemana) {
            case 0:
                diaSemana = "Domingo";
                break;
            case 1:
                diaSemana = "Segunda-Feira";
                break;
            case 2:
                diaSemana = "Terça-Feira";
                break;
            case 3:
                diaSemana = "Quarta-Feira";
                break;
            case 4:
                diaSemana = "Quinta-Feira";
                break;
            case 5:
                diaSemana = "Sexta-Feira";
                break;
            case 6:
                diaSemana = "Sábado";
                break;
        }
        return diaSemana;
    }

    function definirMes(data) {
        let mes = data.getMonth();

        switch(mes) {
            case 0:
                mes = "janeiro";
                break;
            case 1:
                mes = "fevereiro";
                break;
            case 2:
                mes = "março";
                break;
            case 3:
                mes = "abril";
                break;
            case 4:
                mes = "maio";
                break;
            case 5:
                mes = "junho";
                break;
            case 6:
                mes = "julho";
                break;
            case 7:
                mes = "agosto";
                break;
            case 8:
                mes = "setembro";
                break;
            case 9:
                mes = "outubro";
                break;
            case 10:
                mes = "novembro";
                break;
            case 11:
                mes = "dezembro";
                break;
        }
        return mes;
    }
}
