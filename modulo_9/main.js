$(document).ready(function() { 
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li><li/>')
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-image-link">
                <a href= "${enderecoDaNovaImagem}" target="_blank" title="Ver imagem no tamanho real">
                    Ver imagem no tamanho real
                </a> 
            </div>       
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#endereco-imagem-nova').val('')
    })
})
