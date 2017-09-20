  

function busca(ingremark)
{   
    var rec=0;
//aqui faz um loop para ver receita por receita
                            for(a=0;a<banco_receitas.site.length;a++)
                            {
                                var verifica=0;
                                
                                var itemReceita=[];
                                var x=0;
                                //esse loop olha item por item inicia de 3 porque os 3 primeiros valores do json são nome url imagem
                                for(b=0;b<ingremark.length;b++)
                                {
                                    
                                    //se um dos itens for igual ao primeiro item marcado faz outro loop
                                    if(ingremark[b]==banco_receitas.site[a].receita[3].item)
                                    {
                                       
                                       
                                       for(c=3;c<banco_receitas.site[a].receita.length;c++)
                                       {   
                                        itemReceita[x]=banco_receitas.site[a].receita[c].item;
                                        x++
                                       }   
                                       for(d=0;d<itemReceita.length;d++)
                                       {
                                            for(e=0;e<ingremark.length;e++)
                                            {
                                                if (itemReceita[d]==ingremark[e]) 
                                                {
                                                    verifica++;

                                                }
                                            }
                                       }
                                    }
     
                        }
                        if (verifica==(banco_receitas.site[a].receita.length-3)) 
                                       {  

                                            var resultado = document.getElementById ("tela");
                                            var links ="";
                                            rec=1;

                                            links+="<div class='result'>";
                                            //coloca a imagem da receita
                                            links+="<img src='"+banco_receitas.site[a].receita[2].imagem+"''><p><a href='"+banco_receitas.site[a].receita[1].url+"''>"+banco_receitas.site[a].receita[0].nome+"</a></p></img>";
                                            //coloca o nome e o link
                                            links+="</div>";

                                            resultado.innerHTML += links;
                                            verifica=0;
                                            x=0;
                                       }
                                       

                    }
                    if(rec==0)
                                        {

                                            alert("Nenhuma Receita Encontrada");
                                        }
                                        else
                                        {   
                                            document.getElementById("apagar").style.display="none";

                                        }
                }


                          
            function estruturar()
            {
               

                //Checkboxes recebe todos os checkboxes os name dos checkboxes estão marcados com ingrediente
                var checkboxes = document.getElementsByName("ingrediente");
                var marcados= [];
                var c=0;
                //o loop for analisa todos os checkboxes
                for ( a=0;a<checkboxes.length;a++)
                {
                    //condição para verificar se há um checkbox marcado     
                    if (checkboxes[a].checked)
                    { 
                        marcados[c]=checkboxes[a].value;
                        c++;
                       
                    }
                }
                if(marcados.length==0)
                {
                    alert("Escolha algum ingrediente");
                    
                }
                else
                {

                    busca(marcados);

                }


                
            }

