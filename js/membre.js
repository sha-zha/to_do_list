	var compteur = 1;
		
		function add_membre(){
              
                const section = document.querySelector('section');
                const div_card = document.createElement('div');
                const img = document.createElement('img');
                const div_text = document.createElement('div');
                const article = document.createElement('article');
                const p = document.createElement('p');
                const button = document.createElement('button');
                
                if(this.compteur === 5){
                
                    alert('Vous ne pouvez plus ajouter de membre');
                
                }else{
                     //value input stocker dans une var
                var pseudo = "Toto";

                //ajout de class aux éléments créés 
                article.classList.add('p-2');
                div_card.classList.add('card');
                img.classList.add('card-img-top'); 
                button.classList.add('btn');
                div_text.classList.add('card-body', 'text-center');

                //permet d'injecter du style dans du html équivalent style=""
                div_card.style.width ="18rem";
                

                
                //permet d'injecter une src dans une image
                img.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe0ub78kIqvmA13W9Sr6VdDcu0ciXwScvgKgDKQuitqLAQoUxJng";
                
                article.id= this.compteur;

                p.appendChild(document.createTextNode(pseudo));
                
           
                section.appendChild(article);
                article.appendChild(div_card);
                div_card.appendChild(img);
                div_card.appendChild(div_text);
                div_text.appendChild(p);
                
                div_text.innerHTML += "<button class='btn' onclick='effacer("+compteur+")'>Supprimer</button>";
                
                
                this.compteur = this.compteur +1;
                }
               
     
            }	

         function effacer(compteur){
        //demande confirmation
        confirm('Are you sure?');

        document.getElementById(compteur).remove();
        }