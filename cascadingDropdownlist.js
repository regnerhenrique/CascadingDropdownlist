$(document).ready(function () {
    $.getJSON("Json/estados-cidades.json", function (data) {
        for (var estado in data.estados) {
            var nomeEstado = data.estados[estado].nome;
            $("#estado select").append("<option value=" + nomeEstado.split(" ").join("") + ">" + nomeEstado + "</option>")
        }
    });

    $("#estado").change(function () {
        var estadoSelecionado = $("#estado select option:selected").text();
        $.getJSON("Json/estados-cidades.json", function (data) {
            for (var estado in data.estados) {
                if (estadoSelecionado == data.estados[estado].nome) {
                    $("#cidade select").empty();
                    for (var cidade in data.estados[estado].cidades) {
                        var nomeCidade = data.estados[estado].cidades[cidade];
                        $("#cidade select").append("<option value=" + nomeCidade.split(" ").join("") + ">" + nomeCidade + "</option>")
                    }
                }
            }
        })
    });
});

// Régner Henrique - regnerhenrique@hotmail.com