var Game = function (title, genre){
  this.title = title || undefined;
  this.genre = genre || undefined;
};

Game.prototype.render = function(DOMElement){
  DOMElement.append('<p>Title : ' + this.title + '<br>Genre : ' +this.genre);
};

var GameLibrary = function(librarytitle){
  this.librarytitle = librarytitle || undefined;
  this.games = [];
};

GameLibrary.prototype.deleteGame = function(index){
  this.games.splice(index, 1);
};

GameLibrary.prototype.addGame = function(game) {
  this.games.push(game);
};

GameLibrary.prototype.renderLibrary = function(DOMElement){
  DOMElement.html('');
  DOMElement.append('<h3>' + this.librarytitle + '</h3><br>');
  for (var i = 0; i < this.games.length; i++) {
    DOMElement.append('<p>Title : ' + this.games[i].title + '<br>Genre : ' +this.games[i].genre);
  }
};

GameLibrary.prototype.renderTitle = function(DOMElement, tag){
  DOMElement.append('<' +tag+ '>' + this.librarytitle + '</'+tag+'>');
};

