document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reservation-form");
    const saveButton = document.getElementById("save-button");

    saveButton.addEventListener("click", function () {
        const placa = document.getElementById("placa").value;
        const proprietario = document.getElementById("proprietario").value;
        const apartamento = document.getElementById("apartamento").value;
        const bloco = document.getElementById("bloco").value;
        const modelo = document.getElementById("modelo").value;
        const cor = document.getElementById("cor").value;
        const vaga = document.getElementById("vaga").value;

        // Exibir informações no console
        console.log("Placa:", placa);
        console.log("Proprietário:", proprietario);
        console.log("Apartamento:", apartamento);
        console.log("Bloco:", bloco);
        console.log("Modelo do Veículo:", modelo);
        console.log("Cor do Veículo:", cor);
        console.log("Número da Vaga:", vaga);

        // Exibir mensagem de confirmação em um pop-up
        alert("Cadastro realizado com sucesso!");

        // Limpar o formulário após o envio
        form.reset();
    });
});