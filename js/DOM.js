var libraryArray = [];
var libraryCounter = 0;

$(document).on('ready', function() {
  console.log('sanity check!');

  $('.submit-library').on('click', function(event){

    event.preventDefault();

    var library = new GameLibrary($('#gameLibraryTitle').val());

    libraryArray.push(library);

    $('#gameLibraryTitle').val('');

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

    console.log(game);
    console.log(libraryArray[libraryCounter].games);

   }

  });

  $('.show-library').on('click', function(event){

    event.preventDefault();

    libraryArray[0].renderLibrary($('.show-games-library'));

  });

});
