let divHorarioNy = document.getElementById("horario-ny");

atualizar();
setInterval(atualizar, 1000);

function atualizar() {
    let dataLocal = new Date();
    divHorarioNy.innerHTML = definirHorario(dataLocal);

    function definirHorario(data) {
        let horas = estaNoHorarioDeVerao(data);
        let minutos = data.getMinutes();
        let segundos = data.getSeconds();

        horas = addZero(horas);
        minutos = addZero(minutos);
        segundos = addZero(segundos);

        return `${horas}:${minutos}:${segundos}`; 
    }

    function estaNoHorarioDeVerao(data) {
        if(returnMes(data) > 2 && returnMes(data) < 10) {
            data.setHours(data.getHours() - 1);
        }
        else {
            data.setHours(data.getHours() - 2)
        }
        return data.getHours();
    }

    function returnMes(data) {
        return data.getMonth();
    }

    function addZero(tempo) {
        tempo = tempo.toString();
        return tempo.length < 2 ? "0" + tempo : tempo;
    }
}