   var compteur = 1;

 //fonction pour ajouter des listes
        function add_list(){
          //création toutes les variables qu'on aura besoin 
          var section = document.querySelector('main > section>.row');
          var div_main = document.createElement('div');
          var div_card = document.createElement('div');
          var div_body = document.createElement('div');
          var plus = document.createElement('i');
          var titre = document.createElement('h5');
          var input = document.getElementById("add_input_list");
          
          // var data Stock la valeur H5
          var data = input.value;

          //ajout des class aux éléments créés
          div_main.classList.add('col-md-4', 'listes');
          div_card.classList.add('card');
          div_body.classList.add('card-body');
          plus.classList.add('fas', 'fa-plus-circle');
          titre.classList.add('card-title', 'text-center');
          

		
		  //ajout l'attribut modal 
          plus.setAttribute('data-toggle', 'modal');
          plus.setAttribute('data-target', '#modal_tache');

          //ajout id aux card
          div_main.id =this.compteur;

          //créer le text contenu par la variable data 
          titre.appendChild(document.createTextNode(data));

          

          //créations des éléments 
          section.appendChild(div_main);
          div_main.appendChild(div_card);
          div_card.appendChild(div_body);
          div_body.appendChild(plus);
          div_body.appendChild(titre);	         

        div_main.innerHTML += "<div class='container text-center my-2'><button class='btn' onclick='effacer("+compteur+")'>Supprimer</button></div>";
			
		this.compteur = this.compteur +1;
          console.log(data);
          console.log(div_main.id);
        }