function GreetingsViewModel() {
    this.name = ko.observable("World!");
}

ko.applyBindings(new GreetingsViewModel());