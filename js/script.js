$(function(){
    $('#enviar').on('click', function(){

        qtd = $('input[name=qtd]').val();

        if(qtd == '' || qtd <= 0){
            $('#message').html("<br><div class='alert alert-danger' role='alert'>" +
                                    "Quantidade não preenchido ou igual a zero!"   +
                                "</div>");
            $('#result').html('');
            $('#curiosidade').html('');

            return;
        }

        $('#message').html('');
        $('#result').html('');
        $('#curiosidade').html('');

        $.ajax({
            url: '../calc_cpf.php',
            type: 'POST',
            dataType: 'JSON',
            data:{ qtd:qtd },
            beforeSend:function(){
                $('#loading').html('<br><div class="spinner-grow text-dark" style="width: 1.5rem; height: 1.5rem;" role="status">'  +
                                        '<span class="sr-only">Carregando...</span>'                                                +
                                    '</div>'                                                                                        +
                                    '<div class="spinner-grow text-dark" style="width: 1.5rem; height: 1.5rem;" role="status">'     +
                                        '<span class="sr-only">Carregando...</span>'                                                +
                                    '</div>'                                                                                        +
                                    '<div class="spinner-grow text-dark" style="width: 1.5rem; height: 1.5rem;" role="status">'     +
                                        '<span class="sr-only">Carregando...</span>'                                                +
                                    '</div>'                                                                                        +
                                    '<div class="spinner-grow text-dark" style="width: 1.5rem; height: 1.5rem;" role="status">'     +
                                        '<span class="sr-only">Carregando...</span>'                                                +
                                    '</div>');
            },
            success:function(r){
                html = '<table class="table table-striped">'            +
                            '<thead>'                                   +
                                '<tr>'                                  +
                                    '<th scope="col">Números CPFs</th>' +
                                '</tr>'                                 +
                            '</thead>'                                  +
                            '<tbody>'                                   +
                                '<tr>'                                  +
                                    r.cpf                               +
                                '</tr>'                                 +
                            '</tbody>'                                  +
                        '</table>';

                curi = '<div class="row">'                                                                                                                     +
                            '<div class="col">'                                                                                                                +
                                '<h4>Curiosidade:</h4>'                                                                                                        +
                                '<h5>O programa gerou e testou ' +r.qtd_ger+ ' números aleatórios até encontrar a quantidade de CPFs válidos solicitado.</h5>' +
                            '</div>'                                                                                                                           +
                        '</div>';

                $('#result').html(html);
                $('#curiosidade').html(curi);
                $('#loading').html('');
            }
        })
    })
})