var Game = function (title, genre){
  this.title = title;
  this.genre = genre;
};

Game.prototype.render = function(DOMElement){
  DOMElement.append('<p>Title : ' + this.title + '<br>Genre : ' +this.genre);
};

var GameLibrary = function(librarytitle){
  this.librarytitle = librarytitle;
  this.games = [];
};

GameLibrary.prototype.addGame = function(game) {
  this.games.push(game);
};

GameLibrary.prototype.renderLibrary = function(DOMElement){
  DOMElement.append('<h3>' + this.librarytitle + '</h3><br>');
  for (var i = 0; i < this.games.length; i++) {
    DOMElement.append('<p>Title : ' + this.games[i].title + '<br>Genre : ' +this.games[i].genre);
  }
};

