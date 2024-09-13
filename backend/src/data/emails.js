const env = require('../environment');

function getEmailRoboticsRegistationFirstFew(body) {
  return {
    from: env.emailUser,
    to: String(body.email),
    subject: 'POTVRDA PRIJAVE ZA RADIONICU ROBOTIKE',
    text: `Poštovani/a ${body.fullNameCaretaker},\n\ns veseljem Vas obavještavamo da je ${body.fullNameStudent} primljen/a na radionicu robotike udruge Šou program. \n\nU privitku maila Vam šaljemo program koji objašnjava koji je cilj svake od devet radionica koje će biti održane. Po završetku radionice, svako dijete će imati vlastiti autić na daljinsko upravljanje koji zatim nosi sa sobom kući. U slučaju da iz nekog razloga autići na daljinsko upravljanje ne budu gotovi unutar devet termina, predviđen je i 10. termin nadoknade. Prva radionica bit će održana 19. listopada 2024. godine od 10:00 do 11:30 sati, na lokaciji u Rovinjskoj ulici 14. \n\nUz to, u privitku maila šaljemo dokumentaciju (Suglasnost o sudjelovanju, Suglasnost o slikanju) koja je potrebna kako bi Vaše dijete moglo sudjelovati na radionici. Molimo Vas da navedene dokumente ispunite te najkasnije do 12. listopada 2024. 00:00 povratno pošaljete na ovu e-mail adresu. \n\nU slučaju spriječenosti djeteta da sudjeluje u radionici, molimo Vas da nas na vrijeme obavijestite putem e-mail pošte. Na taj način, pružit ćemo priliku drugom polazniku da sudjeluje u radionici te izradi vlastiti autić. \n\nUkoliko imate dodatnih pitanja slobodno nas kontaktirajte!\n\nSrdačan pozdrav!`,
  };
}

function getEmailRoboticsRegistrationWaitingList(body) {
  return {
    from: env.emailUser,
    to: String(body.email),
    subject: 'OBAVIJEST O STATUSU PRIJAVE ZA RADIONICU ROBOTIKE',
    text: `Poštovani/a ${body.fullNameCaretaker},\n\nzahvaljujemo na Vašoj prijavi za radionicu robotike udruge Šou program. Želimo Vas obavijestiti da je, zbog velikog interesa, Vaše dijete trenutno na listi čekanja.\n\nU slučaju da se oslobodi mjesto, odmah ćemo Vas obavijestiti putem e-maila kako biste mogli potvrditi sudjelovanje. Molimo Vas za strpljenje, a u međuvremenu, slobodno nas kontaktirajte ako imate bilo kakva pitanja ili trebate dodatne informacije.\n\nHvala Vam na razumijevanju i interesu za našu radionicu!\n\nSrdačan pozdrav!`,
  };
}

function getEmailJoinSouProgram(body) {
  return {
    from: env.emailUser,
    to: String(body.email),
    subject: 'POTVRDA PRIJAVE ZA ČLANSTVO U UDRUZI ŠOU PROGRAM',
    text: `Dragi Šou programeru,\n\nZahvaljujemo se na tvojoj prijavi za članstvo u udruzi studenata informatike Šou program!\n\nKako bi proces prijave bio dovršen, molimo te da uplatiš godišnju članarinu u iznosu od 10 eura na sljedeći IBAN račun:\n\nIBAN: ${env.iban}\n\nPrimatelj: Udruga Šou program\n\nOpis plaćanja: Godišnja članarina - tvoje ime i prezime\n\nNakon što izvršiš uplatu, molimo te da nam povratno pošalješ potvrdu o uplati na ovaj e-mail. Po primitku potvrde, tvoje članstvo bit će aktivirano, a o daljnjim koracima i aktivnostima bit ćeš pravovremeno obaviješten.\n\nAko imaš bilo kakvih pitanja, slobodno nam se obrati.\n\nSrdačan pozdrav!`,
  };
}

module.exports = {
  getEmailRoboticsRegistationFirstFew,
  getEmailRoboticsRegistrationWaitingList,
  getEmailJoinSouProgram,
};
