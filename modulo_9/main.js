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
        const novoItem = $('<li style="display: none"><li/>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-image-link">
                <a href= "${enderecoDaNovaImagem}" target="_blank" title="Ver imagem no tamanho real">
                    Ver imagem no tamanho real
                </a> 
            </div>       
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(5000)
        $('#endereco-imagem-nova').val('')
    })
})
