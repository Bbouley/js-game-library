var libraryArray = [];
var libraryCounter = 0;

$(document).on('ready', function() {
  console.log('sanity check!');


    $('.submit-library').on('click', function(event){

      event.preventDefault();
      var library = new GameLibrary($('#gameLibraryTitle').val());
      libraryArray.push(library);

    });


  $('.submit-game').on('click', function(event){

    event.preventDefault();

    if(libraryArray[0] === undefined){
      alert('You have to make a library first!!!');
    } else{

    var game = new Game($('#gameTitle').val(), $('#gameGenre').val());

    (libraryArray[libraryCounter].games.push(game));

    game.render($('.show-games'));

    $('#gameTitle').val('');
    $('#gameGenre').val('');

   }

  });

  $('.show-library').on('click', function(event){

    event.preventDefault();

    libraryArray[libraryCounter].renderLibrary($('.show-games-library'));

  });

  $('.new-library').on('click', function(){

    $('#gameLibraryTitle').val('');

    libraryCounter +=1 ;
  });

});
