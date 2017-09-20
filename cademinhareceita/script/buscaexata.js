function exato(ingremark)
{  
    //aqui faz um loop para ver receita por receita
    for(a=0;a<banco_receitas.site.length;a++)
    {
                                var contador=0;
                                //esse loop olha item por item inicia de 3 porque os 3 primeiros valores do json são nome url imagem
                                for(b=3;b<banco_receitas.site[a].receita.length;b++)
                                {
                                    //se um dos itens for igual ao primeiro item marcado faz outro loop
                                    if(ingremark[0]==banco_receitas.site[a].receita[b].item)
                                    {
                                        //loop novamente para ir de item por item 
                                        for(d=3;d<banco_receitas.site[a].receita.length;d++)
                                        {   
                                            //loop para ir item por item marcado 
                                            for(c=0;c<ingremark.length;c++)
                                            {
                                                //depois dos dois loops é verificado se o item marcado existe na receita se sim o contador aumenta
                                                if (ingremark[c]==banco_receitas.site[a].receita[d].item) 
                                                {
                                                    contador++;

                                                }
                                            }
                                        }   
                                    }
                                }

                                //se o contador for igual ao número de itens que estão na receita significa que há todos os ingredientes é diminuido 3 porque o vetor tem 3 itens que não sao ingredientes um é nome da receita e o outro a uri dela.O contador tambem deve ser igual ao tamanho dos itens marcados.

                                if ((contador==(banco_receitas.site[a].receita.length-3))&&(contador==ingremark.length)) 
                                {
                                    
                                    var resultado = document.getElementById ("tela");
                                    var links ="<h1>Receita Exata</h1>";
                                    
                                    links+="<div class='result'>";
                                    //coloca a imagem da receita
                                    links+="<img src='"+banco_receitas.site[a].receita[2].imagem+"''>"
                                    //coloca o nome e o link
                                    

                                    links+="<br><a href='"+banco_receitas.site[a].receita[1].url+"''>"+banco_receitas.site[a].receita[0].nome+"</a>"
                                    links+="</div>";

                                    resultado.innerHTML += links;
                                    
                                }   
    }
                            
                               
                                document.getElementById("apagar").style.display="none";

                            



}