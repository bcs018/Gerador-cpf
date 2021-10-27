<?php 

function calc_cpf($cpf){
    // Extrai somente os números
    $cpf = preg_replace( '/[^0-9]/is', '', $cpf );
            
    // Verifica se foi informado todos os digitos corretamente
    if (strlen($cpf) != 11) {
        return false;
    }

    // Verifica se foi informada uma sequência de digitos repetidos. Ex: 111.111.111-11
    if (preg_match('/(\d)\1{10}/', $cpf)) {
        return false;
    }

    // Faz o calculo para validar o CPF
    for ($t = 9; $t < 11; $t++) {
        for ($d = 0, $c = 0; $c < $t; $c++) {
            $d += $cpf[$c] * (($t + 1) - $c);
        }
        $d = ((10 * $d) % 11) % 10;
        if ($cpf[$c] != $d) {
            return false;
        }
    }
    return true;
}

$qtd = addslashes($_POST['qtd']);

$html = '';
$i = 0;

while($i < $qtd){
    $new_cpf = rand(11111111111,99999999999);

    if(calc_cpf($new_cpf)){
        $i++;
        $html .= $new_cpf.'<br>';
    }
}

echo json_encode(['cpf'=>$html]);
exit;

