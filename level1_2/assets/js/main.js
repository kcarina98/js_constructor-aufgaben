let person = {
  vorname: "Anton",
  nachname: "Nüssler",
  alter: 34,
  familienstand: "ledig",
  groesse: "178cm",
  profil: function () {
    return `Name: ${this.vorname} ${this.nachname} <br> Alter: ${this.alter} Jahre <br> Körpergröße: ${this.groesse} <br> Familienstand: ${this.familienstand}`;
  },
};

//gib das Profil von Anton mit diesem Code im Element mit der "person" aus.
document.getElementById("person").innerHTML = person.profil();
