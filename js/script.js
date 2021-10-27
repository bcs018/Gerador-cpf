$(function(){
    $('#enviar').on('click', function(){

        qtd = $('input[name=qtd]').val();

        if(qtd == ''){
            $('#message').html("<br><div class='alert alert-danger' role='alert'>"+
                                    "Quantidade não preenchido!"+
                                "</div>");
            $('#result').html('');
            
            return;
        }

        $.ajax({
            url: '../calc_cpf.php',
            type: 'POST',
            dataType: 'JSON',
            data:{ qtd:qtd },
            beforeSend:function(){
                $('#loading').html('aguarde...');
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

                $('#result').html(html);
                $('#loading').html('');
                $('#message').html('');
            }
        })

    })
})