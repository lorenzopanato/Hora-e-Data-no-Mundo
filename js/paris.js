let divHorarioParis = document.getElementById("horario-paris");

atualizar();
setInterval(atualizar, 1000);

function atualizar() {
    let dataLocal = new Date();
    divHorarioParis.innerHTML = definirHorario(dataLocal);

    function definirHorario(data) {
        data.setHours(data.getHours() + 5);

        let horas = data.getHours();
        let minutos = data.getMinutes();
        let segundos = data.getSeconds();

        horas = addZero(horas);
        minutos = addZero(minutos);
        segundos = addZero(segundos);

        return `${horas}:${minutos}:${segundos}`; 
    }

    function addZero(tempo) {
        tempo = tempo.toString();
        return tempo.length < 2 ? "0" + tempo : tempo;
    }
}