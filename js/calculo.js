// This is a JavaScript file
$(function(){
    
    var v1, v2, op;
    
    $("input[name=btn]").click(function(){
        $("#resultado").val($("#resultado").val() + $(this).val());
    })
    
    $("input[name=ce]").click(function(){
        $("#resultado").val("");
    })
    
    $("input[name=c]").click(function(){
        var len = $("#resultado").val().length;

        //vai contar quantos caracteres tem o valor
        var valor = $("#resultado").val();
        
        valor = valor.replace(valor.charAt(len - 1), "");
        //vai substituir o ultimo caracter como vazio
        $("#resultado").val(valor);
    })
    
    $("input[name=soma]").click(function(){
        if($("#resultado").val() != ""){
            v1 = parseFloat($("#resultado").val());
            $("#resultado").val("");
            op = "soma";
        }else{
            alert("Tem que digitar um valor para somar");
        }
    })
    
    $("input[name=subtracao]").click(function(){
        if($("#resultado").val() != ""){
            v1 = parseFloat($("#resultado").val());
            $("#resultado").val("");
            op = "subtracao";
        }else{
            alert("Tem que digitar um valor para subtrair");
        }
    })
    
    $("input[name=multiplicacao]").click(function(){
        if($("#resultado").val() != ""){
            v1 = parseFloat($("#resultado").val());
            $("#resultado").val("");
            op = "multiplicacao";
        }else{
            alert("Tem que digitar um valor para multiplicar");
        }
    })
    
    $("input[name=divisao]").click(function(){
        if($("#resultado").val() != ""){
            v1 = parseFloat($("#resultado").val());
            $("#resultado").val("");
            op = "divisao";
        }else{
            alert("Tem que digitar um valor para dividir");
        }
    })
    
    $("input[name=igual]").click(function(){
        if($("#resultado").val() != ""){
            v2 = parseFloat($("#resultado").val());
            $("#resultado").val("");
            
            if(op == "soma"){
                $("#resultado").val(v1+v2);
            }
            
            if(op == "subtracao"){
                $("#resultado").val(v1-v2);
            }
            
            if(op == "multiplicacao"){
                $("#resultado").val(v1*v2);
            }
            
            if(op == "divisao"){
                $("#resultado").val(v1/v2);
            }
            
            
        }else{
            alert("Tem que digitar outro valor para calcular");
        }
    })
    
});