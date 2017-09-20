function alfabetica()
{
    //elemento tela recebe a div de nome checkboxes
    var elementoTela = document.getElementById ("categoria");
    var codigoHTML = "";
    elementoTela.innerHTML = "";
    elementoTela = document.getElementById ("alfabetica");

    codigoHTML="<div class='coluna'>"
            for( var i=0;i < 16;i++) 
    {
        //aqui são distribuidos checkboxes para toda a div
        codigoHTML += "<div class='box'><input  name='ingrediente' value='" + dados.ingre[i].item + "' type='checkbox'>"+dados.ingre[i].item+"</div>";
    
   
    }  
    codigoHTML+="</div>";
    codigoHTML+="<div class='coluna'>";
            for( i=16;i < 31;i++) 
    {
        //aqui são distribuidos checkboxes para toda a div
        codigoHTML += "<div class='box'><input  name='ingrediente' value='" + dados.ingre[i].item + "' type='checkbox'>"+dados.ingre[i].item+"</div>";
    
   
    }  
    codigoHTML+="</div>";
    codigoHTML+="<div class='coluna'>";
            for( i=31;i < 46;i++) 
    {
        //aqui são distribuidos checkboxes para toda a div
        codigoHTML += "<div class='box'><input  name='ingrediente' value='" + dados.ingre[i].item + "' type='checkbox'>"+dados.ingre[i].item+"</div>";
    
   
    }  
    codigoHTML+="</div>";
    codigoHTML+="<div class='coluna'>";
            for( i=46;i < 61;i++) 
    {
        //aqui são distribuidos checkboxes para toda a div
        codigoHTML += "<div class='box'><input  name='ingrediente' value='" + dados.ingre[i].item + "' type='checkbox'>"+dados.ingre[i].item+"</div>";
    
   
    }  
    codigoHTML+="</div>";
    codigoHTML+="<div class='coluna'>";
            for( i=61;i < 76;i++) 
    {
        //aqui são distribuidos checkboxes para toda a div
        codigoHTML += "<div class='box'><input  name='ingrediente' value='" + dados.ingre[i].item + "' type='checkbox'>"+dados.ingre[i].item+"</div>";
    
   
    }  
    codigoHTML+="</div>";
    elementoTela.innerHTML = codigoHTML;
    elementoTela=document.getElementById("enviar");
    elementoTela.innerHTML="<input type='button' value ='Buscar receita' onclick='estruturar();'>";

 
}
function categoria(){
    var elementoTela = document.getElementById ("alfabetica");
    var codigoHTML = "";
    elementoTela.innerHTML = "";
    elementoTela = document.getElementById ("categoria");
    codigoHTML+="<div class='coluna'>";
    codigoHTML+="<p id='titulo_categoria'>Carnes, Ovos<br> e Leguminosas</p>";
    for(i=0;i<dados.ingre.length;i++)
    {
        if(dados.ingre[i].categoria=="Carnes Ovos e Leguminosas")
        {
        codigoHTML += "<div class='box'><input  name='ingrediente' value='" + dados.ingre[i].item + "' type='checkbox'>"+dados.ingre[i].item+"</div>";
        }
    }
	codigoHTML+="</div>";
	
    codigoHTML+="<div class='coluna'>";
    codigoHTML+="<p id='titulo_categoria'>Cereais, Pães,<br>  Raízes e Massas</p>";
    for(i=0;i<dados.ingre.length;i++)
    {
        if(dados.ingre[i].categoria=="Cereais Pães Tubérculos Raízes e Massas")
        {
        codigoHTML += "<div class='box'><input  name='ingrediente' value='" + dados.ingre[i].item + "' type='checkbox'>"+dados.ingre[i].item+"</div>";
        }
    }
	
    codigoHTML+="<p id='titulo_categoria'>Temperos e <br>Condimentos</p>";
     for(i=0;i<dados.ingre.length;i++)
    {
        if(dados.ingre[i].categoria=="Temperos e Condimentos")
        {
        codigoHTML += "<div class='box'><input  name='ingrediente' value='" + dados.ingre[i].item + "' type='checkbox'>"+dados.ingre[i].item+"</div>";
        }
    }
    codigoHTML+="</div>";
	
    codigoHTML+="<div class='coluna'>";
    codigoHTML+="<p id='titulo_categoria'>Hortaliças</p>";
    for(i=0;i<dados.ingre.length;i++)
    {
        if(dados.ingre[i].categoria=="Hortaliças")
        {
        codigoHTML += "<div class='box'><input  name='ingrediente' value='" + dados.ingre[i].item + "' type='checkbox'>"+dados.ingre[i].item+"</div>";
        }
    }
	
    codigoHTML+="<p id='titulo_categoria'>Açúcares<br> e Doces</p>";
    for(i=0;i<dados.ingre.length;i++)
    {
        if(dados.ingre[i].categoria=="Açúcares e Doces")
        {
        codigoHTML += "<div class='box'><input  name='ingrediente' value='" + dados.ingre[i].item + "' type='checkbox'>"+dados.ingre[i].item+"</div>";
        }
    }
    codigoHTML+="</div>";
	
    codigoHTML+="<div class='coluna'>";
    codigoHTML+="<p id='titulo_categoria'>Leites e Derivados</p>";
    for(i=0;i<dados.ingre.length;i++)
    {
        if(dados.ingre[i].categoria=="Leites e Derivados")
        {
        codigoHTML += "<div class='box'><input  name='ingrediente' value='" + dados.ingre[i].item + "' type='checkbox'>"+dados.ingre[i].item+"</div>";
        }
    }

    codigoHTML+="<p id='titulo_categoria'>Frutas</p>";
    for(i=0;i<dados.ingre.length;i++)
    {
        if(dados.ingre[i].categoria=="Frutas")
        {
        codigoHTML += "<div class='box'><input  name='ingrediente' value='" + dados.ingre[i].item + "' type='checkbox'>"+dados.ingre[i].item+"</div>";
        }
    }

    codigoHTML+="<p id='titulo_categoria'>Óleos<br> e Gorduras</p>";
    for(i=0;i<dados.ingre.length;i++)
    {
        if(dados.ingre[i].categoria=="Óleos e Gorduras")
        {
        codigoHTML += "<div class='box'><input  name='ingrediente' value='" + dados.ingre[i].item + "' type='checkbox'>"+dados.ingre[i].item+"</div>";
        }
    }
    codigoHTML+="</div>";
        
   elementoTela.innerHTML=codigoHTML;
   elementoTela=document.getElementById("enviar");
   elementoTela.innerHTML="<input type='button' value ='Buscar receita' onclick='estruturar();'>";
    
}
