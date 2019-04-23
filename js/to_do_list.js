$(document).ready(function (){
    var compteur = 1; 
              
    $(".btn").button().click(function (event) {
        event.preventDefault();
    });

     $("#btn-list").click(function (event) {
        event.preventDefault();
        add_list(compteur);
        compteur++;
        $('#modal_liste').modal('hide');
                    
      });
                
      $('#btn-tache').click(function (event){
        event.preventDefault();
        add_tache(compteur);
        //on incremente apres les operations
        compteur ++; 
        $('#modal_tache').modal('hide');
      });

      $('.fa-trash').click(function (event){
        event.preventDefault();
        effacer(compteur);
      });  

      $('.btn-sup').click(function (event){
        event.preventDefault();
        effacer(compteur);
      });    
});

    function add_list(compteur) {
          //création toutes les variables qu'on aura besoin
          var div_main = document.createElement('div');
          var div_card = document.createElement('div');
          var div_body = document.createElement('div');
          var plus = document.createElement('i');
          var titre = document.createElement('h5');
          var div_btn = document.createElement('div');

          //ajout des class aux éléments créés
          $(div_main).addClass('col-md-4 p-4');
          $(div_card).addClass('card');
          $(div_body).addClass('card-body');
          $(plus).addClass('fas fa-plus-circle');
          $(titre).addClass('card-title text-center');
          $(div_btn).addClass('container text-center my-2');
          
    
          // on récupère le nom de la liste                 
            var list_name = $('#listname').val();
            var idatr = $('.modal-liste').val();
          //ajout des attributes 
          $(plus).attr('data-toggle', 'modal');
          $(plus).attr('data-target', '#modal_tache');
          $(div_body).attr('data-title', list_name);
          $(div_body).attr('data-id', idatr);

          //ajout id aux card
          $(div_main).attr('id', + compteur);
          
          //créer le text contenu par la variable data 
          $(titre).append(document.createTextNode(list_name));

          console.log(plus);

          //créations des éléments 
          $('.row').append(div_main);
          $(div_main).append(div_card);
          $(div_main).append(div_btn);
          $(div_card).append(div_body);
          $(div_body).append(plus);
          $(div_body).append(titre);
                     

        $(div_main).append("<button class='btn btn-sup' onclick='effacer("+compteur+")'>Supprimer</button>");

        //on crée l'option avec la valeur de la liste
        $('#list').append('<option value="' + list_name + '" selected="selected">' + idatr+ '</option>');
              
    }
    function add_tache(compteur) {

    var selectedList = $('#list').find(":selected").text();
    //on recherche les div ayant data-title pour insérer le nom de la var selectedList
    var box = $('div').find("[data-title='" + selectedList + "']");
    //on recherche ul de les div ayant comme attribut data-title

    // on créer les éléments 
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const trash = document.createElement('i');

    //on récupère les valeurs de la tache et son description
    var ajout_tache = $('#ajout_tache').val();
    var description= $('#description').val();

    //on ajoute les classes
    $(ul).addClass('card-text');
    $(li).addClass('list-group-item d-flex  justify-content-between align-items-center');
    $(trash).addClass('fas fa-trash');
    
    //incrémentation du li
    $(li).attr('id', +compteur);

    //on créee la tache + sa descritpion à l'endroit où on a sélectionné 
    $(li).append(document.createTextNode(ajout_tache + " - " + description));
    box.append(ul);
    $(ul).append(li);
    $('#'+compteur).append('<i class=" fas fa-trash" onclick="effacer('+compteur+')"></i>');
 
  
  }

   function effacer(compteur){
    //console.log(compteur);
    //syntaxe => $('#id')
    $('#'+compteur).remove();
    } 