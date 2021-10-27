$(function(){
    $('#enviar').on('click', function(){

        qtd = $('input[name=qtd]').val();

        if(qtd == ''){
            $('#message').html('Quantidade em branco');
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
                $('#message').html(r.cpf);
                $('#loading').html('');
            }
        })

    })
})