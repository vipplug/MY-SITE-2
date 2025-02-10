// Função para configurar os botões do PayPal para cada vídeo
function setupPaypalButton(previewNumber, price, redirectUrl) {
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: price
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('Transaction completed by ' + details.payer.name.given_name + '\nREDIRECTING YOU TO YOUR FOLDER...');
                // Redireciona para a URL após o pagamento
                window.location.href = redirectUrl;
            });
        }
    }).render(`#paypal-button-container-${previewNumber}`);
}

// Chamadas para configurar os botões do PayPal para cada vídeo
document.addEventListener('DOMContentLoaded', function () {
    // Para o primeiro vídeo, preço de $35 e link para o redirecionamento
    setupPaypalButton(1, '35.00', 'https://encurtador.com.br/jxFfy');

    // Para o segundo vídeo, preço de $45 e link para o redirecionamento
    setupPaypalButton(2, '45.00', 'https://mega.nz/folder/SjBiHZ5I#nyk27HZR_PB649wCB7uKMQ');

    // Para o terceiro vídeo, preço de $50 e link para o redirecionamento
    setupPaypalButton(3, '50.00', 'https://www.dropbox.com/scl/fo/ureoah8ximjpad1a04jh4/AG0aXC0YwYEdHOUTWV1XwNY?rlkey=h6enzgsw7azmcudzqjdl0cul1&e=2&dl=0');
});
