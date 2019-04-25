var nessuno = {
  "name": "nessuno",
  "color": "rgb(255,255,255)",
  "votes": 0,
  "attackText": "",
}

var seguaciMinerva = {
  "name": "Seguaci della Minerva",
  "color": "rgb(218,167,164)",
  "votes": 0,
  "bonus":0,
  "attackText": "grazie all\'aiuto divino direttamente dall\'Olimpo",
}

module.exports = {
  "Aiuola 1":{
    "adjacents":[
      "Aiuola 2",
      "Astronomia",
      "Astrofisica",
      "Fisica",
      "Aiuola 3"
    ],
    "faction":nessuno
  },
  "Aiuola 2":{
    "adjacents":[
      "Chimica",
      "Aiuola 1",
      "Aiuola 4"
    ],
    "faction":nessuno
  },
  "Aiuola 3":{
    "adjacents":[
      "Aiuola 1",
      "Aiuola 4",
      "Igiene",
      "Infermieristica"
    ],
    "faction":nessuno
  },
  "Aiuola 4":{
    "adjacents":[
      "Medicina",
      "Aiuola 2",
      "Aiuola 3"
    ],
    "faction":nessuno
  },
  "Archeologia":{
    "adjacents":[
      "Architettura",
      "Geochimica",
      "Zoologia"
    ],
    "faction":{
      "name":"Archeologi",
      "color":"rgb(10,30,99)",
      "votes":0,
			"bonus":0,
      "attackText":"con il loro esercito di soldati fossili"
    }
  },
  "Architettura":{
    "adjacents":[
      "Biotecnologie",
      "Scienze Politiche",
      "Scienze statistiche",
      "Geochimica",
      "Archeologia"
    ],
    "faction":{
      "name":"Architetti",
      "color":"rgb(209,46,101)",
      "votes":0,
			"bonus":0,
      "attackText":"con un sofisticato sistema di specchi e leve"
    }
  },
  "Astrofisica":{
    "adjacents":[
      "Astronomia",
      "Aiuola 1",
      "Fisica",
      "Lingue"
    ],
    "faction":{
      "name":"Astrofisici",
      "color":"rgb(174,161,74)",
      "votes":0,
			"bonus":0,
      "attackText":"grazie all\'energia sprigionata da una super nova"
    }
  },
  "Astronomia":{
    "adjacents":[
      "Pratino",
      "Astrofisica",
      "Lingue",
      "Geologia",
      "Aiuola 1"
    ],
    "faction":{
      "name":"Astronomi",
      "color":"rgb(190,211,218)",
      "votes":0,
			"bonus":0,
      "attackText":"sfruttando l\'allineamento dei pianeti"
    }
  },
  "Bar":{
    "adjacents":[
      "Sociologia",
      "Economia",
      "Psicologia"
    ],
    "faction":{
      "name":"Baristi",
      "color":"rgb(47,64,147)",
      "votes":0,
			"bonus":0,
      "attackText":"distraendo la difesa avversaria con gli spritz gratis"
    }
  },
  "Biologia":{
    "adjacents":[
      "Ostetricia",
      "Psicologia",
      "Scienze Politiche",
      "Biotecnologie"
    ],
    "faction":{
      "name":"Biologi",
      "color":"rgb(29,220,131)",
      "votes":0,
			"bonus":0,
      "attackText":"inglobandola nel loro ecosistema"
    }
  },
  "Biotecnologie":{
    "adjacents":[
      "Biologia",
      "Scienze Politiche",
      "Architettura"
    ],
    "faction":{
      "name":"Studenti di Biotecnologie",
      "color":"rgb(10,231,205)",
      "votes":0,
			"bonus":0,
      "attackText":"attaccando con il loro esercito di microbatteri robotici"
    }
  },
  "Botanica":{
    "adjacents":[
      "Genetica",
      "Ingegneria Gestionale",
      "Orto Botanico",
      "Filosofia",
      "Lettere",
      "Pratone",
      "Ingegneria Chimica",
      "Economia"
    ],
    "faction":{
      "name":"Botanici",
      "color":"rgb(218,142,124)",
      "votes":0,
			"bonus":0,
      "attackText":"grazie alla loro orda di piante carnivore"
    }
  },
  "Chiesa":{
    "adjacents":[
      "Lingue",
      "Fisica",
      "Igiene",
      "Scienze della Formazione",
      "Neurologia"
    ],
    "faction":{
      "name":"Vaticano",
      "color":"rgb(148,211,201)",
      "votes":0,
			"bonus":0,
      "attackText":"organizzando l\'ennesima crociata"
    }
  },
  "Chimica":{
    "adjacents":[
      "Chimica Industriale",
      "Pratino Est 2",
      "Medicina",
      "Aiuola 2"
    ],
    "faction":{
      "name":"Chimici",
      "color":"rgb(15,84,107)",
      "votes":0,
			"bonus":0,
      "attackText":"rilasciando gas nervino"
    }
  },
  "Chimica Industriale":{
    "adjacents":[
      "Pratino Est 2",
      "Farmacologia",
      "Medicina",
      "Chimica",
      "Matematica"
    ],
    "faction":{
      "name":"Chimici Industriali",
      "color":"rgb(92,187,180)",
      "votes":0,
			"bonus":0,
      "attackText":"grazie alla potenza dei loro nuovi reattori"
    }
  },
  "Chimica analitica":{
    "adjacents":[
      "Mensa",
      "Storia",
      "Fisica applicata",
      "Robotica",
      "Medicina legale"
    ],
    "faction":{
      "name":"Studenti di Chimica Analitica",
      "color":"rgb(199,236,168)",
      "votes":0,
			"bonus":0,
      "attackText":"contaminando le difese con molecole altamente tossiche"
    }
  },
  "Chirurgia":{
    "adjacents":[
      "Farmacologia",
      "Scienze della Comunicazione",
      "Pratino Sud"
    ],
    "faction":{
      "name":"Chirurghi",
      "color":"rgb(68,89,1)",
      "votes":0,
			"bonus":0,
      "attackText":"con i loro soldati a quattro braccia, gambe e occhi"
    }
  },
  "Economia":{
    "adjacents":[
      "Bar",
      "Sociologia",
      "Ingegneria Gestionale",
      "Ingegneria Informatica",
      "Botanica",
      "Genetica",
      "Pratone",
      "Psicologia"
    ],
    "faction":{
      "name":"Economisti",
      "color":"rgb(147,210,119)",
      "votes":0,
			"bonus":0,
      "attackText":"comprando il loro territorio"
    }
  },
  "Farmacologia":{
    "adjacents":[
      "Matematica",
      "Storia",
      "Chirurgia",
      "Chimica Industriale",
      "Pratino Sud"
    ],
    "faction":{
      "name":"Farmacisti",
      "color":"rgb(16,78,235)",
      "votes":0,
			"bonus":0,
      "attackText":"somministrando di nascosto mix di psicofarmaci alla loro difesa"
    }
  },
  "Filosofia":{
    "adjacents":[
      "Botanica",
      "Orto Botanico",
      "Robotica",
      "Fisica applicata",
      "Matematica",
      "Pratino Est 1",
      "Lettere"
    ],
    "faction":{
      "name":"Filosofi",
      "color":"rgb(161,90,247)",
      "votes":0,
			"bonus":0,
      "attackText":"grazie alla nobile arte della retorica"
    }
  },
  "Fisica":{
    "adjacents":[
      "Astrofisica",
      "Aiuola 1",
      "Igiene",
      "Chiesa",
      "Lingue"
    ],
    "faction":{
      "name":"Fisici",
      "color":"rgb(89,67,173)",
      "votes":0,
			"bonus":0,
      "attackText":"attaccando con onde elettromagnetiche ad altissima frequenza"
    }
  },
  "Fisica applicata":{
    "adjacents":[
      "Robotica",
      "Chimica analitica",
      "Mensa",
      "Matematica",
      "Filosofia"
    ],
    "faction":{
      "name":"Studenti di Fisica Applicata",
      "color":"rgb(245,37,207)",
      "votes":0,
			"bonus":0,
      "attackText":"bombardandola di elettroni grazie al loro nuovo acceleratore di particelle"
    }
  },
  "Fontana della Minerva":{
    "adjacents":[
      "Statua della Minerva"
    ],
    "faction":seguaciMinerva
  },
  "Genetica":{
    "adjacents":[
      "Botanica",
      "Economia",
      "Pratone"
    ],
    "faction":{
      "name":"Studenti di Genetica",
      "color":"rgb(201,214,189)",
      "votes":0,
			"bonus":0,
      "attackText":"grazie all\'aiuto di un esercito di soldati OGM"
    }
  },
  "Geochimica":{
    "adjacents":[
      "Scienze statistiche",
      "Mineralogia",
      "Geologia",
      "Neurologia",
      "Zoologia",
      "Archeologia",
      "Architettura"
    ],
    "faction":{
      "name":"Geochimici",
      "color":"rgb(180,226,124)",
      "votes":0,
			"bonus":0,
      "attackText":"accelerando il loro decadimento radioattivo"
    }
  },
  "Geologia":{
    "adjacents":[
      "Mineralogia",
      "Pratino",
      "Astronomia",
      "Lingue",
      "Geochimica"
    ],
    "faction":{
      "name":"Geologi",
      "color":"rgb(162,188,113)",
      "votes":0,
			"bonus":0,
      "attackText":"con il loro generatore di scosse sismiche"
    }
  },
  "Giurisprudenza":{
    "adjacents":[
      "Scienze Politiche",
      "Rettorato",
      "Pratino",
      "Mineralogia",
      "Statua della Minerva"
    ],
    "faction":{
      "name":"Giuristi",
      "color":"rgb(89,38,222)",
      "votes":0,
			"bonus":0,
      "attackText":"facendogli causa e vincendo ovviamente"
    }
  },
  "Igiene":{
    "adjacents":[
      "Fisica",
      "Aiuola 3",
      "Infermieristica",
      "Chiesa"
    ],
    "faction":{
      "name":"Igienisti",
      "color":"rgb(36,118,33)",
      "votes":0,
			"bonus":0,
      "attackText":"infettando le loro difese, colpevoli di non aver fatto i vaccini"
    }
  },
  "Infermieristica":{
    "adjacents":[
      "Igiene",
      "Aiuola 3",
      "Informatica"
    ],
    "faction":{
      "name":"Infermieri",
      "color":"rgb(180,29,31)",
      "votes":0,
			"bonus":0,
      "attackText":"scagliando una pioggia di siringhe letali"
    }
  },
  "Informatica":{
    "adjacents":[
      "Infermieristica",
      "Scienze dello Spettacolo"
    ],
    "faction":{
      "name":"Informatici",
      "color":"rgb(200,54,230)",
      "votes":0,
			"bonus":0,
      "attackText":"01110000 01100101 01110010 01100011 01101000 01100101 00100111 00100000 01110011 01101001"
    }
  },
  "Ingegneria Chimica":{
    "adjacents":[
      "Ingegneria Gestionale",
      "Orto Botanico",
      "Storia dell\'arte",
      "Botanica",
      "Ingegneria Energetica"
    ],
    "faction":{
      "name":"Ingegneri Chimici",
      "color":"rgb(104,218,168)",
      "votes":0,
			"bonus":0,
      "attackText":"sparando fluidi altamente reattivi con i loro impianti"
    }
  },
  "Ingegneria Meccanica":{
    "adjacents":[
      "Ingegneria Informatica",
      "Ingegneria Aerospaziale",
      "Ingegneria Gestionale"
    ],
    "faction":{
      "name":"Ingegneri Civili",
      "color":"rgb(207,149,0)",
      "votes":0,
			"bonus":0,
      "attackText":"utilizzando le loro macchine da guerra di nuova generazione"
    }
  },
  "Ingegneria Energetica":{
    "adjacents":[
      "Ingegneria Aerospaziale",
      "Ingegneria Gestionale",
      "Ingegneria Chimica"
    ],
    "faction":{
      "name":"Ingegneri Energetici",
      "color":"rgb(73,104,181)",
      "votes":0,
			"bonus":0,
      "attackText":"grazie alle loro armi laser"
    }
  },
  "Ingegneria Gestionale":{
    "adjacents":[
      "Botanica",
      "Economia",
      "Ingegneria Informatica",
      "Ingegneria Meccanica",
      "Ingegneria Aerospaziale",
      "Ingegneria Energetica",
      "Ingegneria Chimica",
      "Orto Botanico",
      "Sociologia"
    ],
    "faction":{
      "name":"Ingegneri gestionali",
      "color":"rgb(162,169,229)",
      "votes":0,
			"bonus":0,
      "attackText":"tramite lo studio di tutti i possibili vantaggi"
    }
  },
  "Ingegneria Aerospaziale":{
    "adjacents":[
      "Ingegneria Meccanica",
      "Ingegneria Informatica",
      "Ingegneria Energetica",
      "Ingegneria Gestionale"
    ],
    "faction":{
      "name":"Ingegneri Industriali",
      "color":"rgb(242,87,60)",
      "votes":0,
			"bonus":0,
      "attackText":"bombardando con i loro razzi telecomandati"
    }
  },
  "Ingegneria Informatica":{
    "adjacents":[
      "Ingegneria Gestionale",
      "Sociologia",
      "Economia",
      "Ingegneria Meccanica",
      "Ingegneria Aerospaziale"
    ],
    "faction":{
      "name":"Ingegneri Informatici",
      "color":"rgb(96,11,134)",
      "votes":0,
			"bonus":0,
      "attackText":"con un software in grado di controllare ogni dispositivo elettronico avversario"
    }
  },
  "Lettere":{
    "adjacents":[
      "Botanica",
      "Filosofia",
      "Pratino Est 1",
      "Rettorato",
      "Pratone"
    ],
    "faction":{
      "name":"Letterati",
      "color":"rgb(210,210,11)",
      "votes":0,
			"bonus":0,
      "attackText":"perche\' a volte una parola fa piu\' male di una spada"
    }
  },
  "Lingue":{
    "adjacents":[
      "Geologia",
      "Astronomia",
      "Astrofisica",
      "Fisica",
      "Chiesa",
      "Neurologia",
      "Zoologia"
    ],
    "faction":{
      "name":"Linguisti",
      "color":"rgb(5,227,35)",
      "votes":0,
			"bonus":0,
      "attackText":"grazie ai loro alleati in tutto il mondo"
    }
  },
  "Matematica":{
    "adjacents":[
      "Fisica applicata",
      "Storia",
      "Farmacologia",
      "Chimica Industriale",
      "Pratino Est 2",
      "Pratino Est 1",
      "Filosofia",
      "Mensa"
    ],
    "faction":{
      "name":"Matematici",
      "color":"rgb(82,204,86)",
      "votes":0,
			"bonus":0,
      "attackText":"grazie ad un algoritmo che prevede le possibili mosse avversarie"
    }
  },
  "Medicina":{
    "adjacents":[
      "Chimica Industriale",
      "Chimica",
      "Aiuola 4",
      "Ortopedia"
    ],
    "faction":{
      "name":"Medici",
      "color":"rgb(219,157,37)",
      "votes":0,
			"bonus":0,
      "attackText":"diffondendo i vari virus incurabili"
    }
  },
  "Medicina legale":{
    "adjacents":[
      "Storia dell\'arte",
      "Orto Botanico",
      "Mensa",
      "Chimica analitica"
    ],
    "faction":{
      "name":"Medici Legali",
      "color":"rgb(149,221,75)",
      "votes":0,
			"bonus":0,
      "attackText":"con la loro orda di zombie"
    }
  },
  "Mensa":{
    "adjacents":[
      "Storia dell\'arte",
      "Medicina legale",
      "Chimica analitica",
      "Fisica applicata",
      "Matematica"
    ],
    "faction":{
      "name":"Addetti alla mensa",
      "color":"rgb(107,43,95)",
      "votes":0,
			"bonus":0,
      "attackText":"avvelenando il loro cibo, tratto da una storia vera"
    }
  },
  "Mineralogia":{
    "adjacents":[
      "Scienze statistiche",
      "Giurisprudenza",
      "Pratino",
      "Geologia",
      "Geochimica"
    ],
    "faction":{
      "name":"Minerologia",
      "color":"rgb(62,140,210)",
      "votes":0,
			"bonus":0,
      "attackText":"grazie alle loro indistruttibili armature di adamantio"
    }
  },
  "Neurologia":{
    "adjacents":[
      "Zoologia",
      "Lingue",
      "Chiesa",
      "Scienze della Formazione",
      "Geochimica"
    ],
    "faction":{
      "name":"Neurologi",
      "color":"rgb(244,166,186)",
      "votes":0,
			"bonus":0,
      "attackText":"bruciando le sinapsi avversarie"
    }
  },
  "Orto Botanico":{
    "adjacents":[
      "Botanica",
      "Storia dell\'arte",
      "Medicina legale",
      "Robotica",
      "Filosofia",
      "Ingegneria Chimica",
      "Ingegneria Gestionale"
    ],
    "faction":nessuno
  },
  "Ortopedia":{
    "adjacents":[
      "Pratino Sud",
      "Medicina"
    ],
    "faction":{
      "name":"Ortopedici",
      "color":"rgb(208,83,9)",
      "votes":0,
			"bonus":0,
      "attackText":"con i loro soldati dotati di un super apparato locomotore"
    }
  },
  "Ostetricia":{
    "adjacents":[
      "Psicologia",
      "Pratone",
      "Scienze Politiche",
      "Biologia"
    ],
    "faction":{
      "name":"Ostetrici",
      "color":"rgb(59,194,240)",
      "votes":0,
			"bonus":0,
      "attackText":"tramite il loro esercito di neonati mutanti"
    }
  },
  "Pratino":{
    "adjacents":[
      "Giurisprudenza",
      "Statua della Minerva",
      "Astronomia",
      "Geologia",
      "Mineralogia"
    ],
    "faction":nessuno
  },
  "Pratino Est 1":{
    "adjacents":[
      "Lettere",
      "Filosofia",
      "Matematica",
      "Pratino Est 2",
      "Statua della Minerva"
    ],
    "faction":nessuno
  },
  "Pratino Est 2":{
    "adjacents":[
      "Pratino Est 1",
      "Matematica",
      "Chimica Industriale",
      "Chimica",
      "Statua della Minerva"
    ],
    "faction":nessuno
  },
  "Pratino Sud":{
    "adjacents":[
      "Farmacologia",
      "Chirurgia",
      "Scienze della Comunicazione",
      "Ortopedia"
    ],
    "faction":nessuno
  },
  "Pratone":{
    "adjacents":[
      "Economia",
      "Genetica",
      "Botanica",
      "Lettere",
      "Rettorato",
      "Scienze Politiche",
      "Ostetricia",
      "Psicologia"
    ],
    "faction":{
      "name":"Fattoni",
      "color":"rgb(120,11,232)",
      "votes":0,
			"bonus":0,
      "attackText":"con l\'utilizzo delle loro famose \'bombe\'"
    }
  },
  "Psicologia":{
    "adjacents":[
      "Economia",
      "Pratone",
      "Ostetricia",
      "Biologia",
      "Bar"
    ],
    "faction":{
      "name":"Psicologi",
      "color":"rgb(174,169,17)",
      "votes":0,
			"bonus":0,
      "attackText":"leggendo nella mente degli avversari"
    }
  },
  "Rettorato":{
    "adjacents":[
      "Pratone",
      "Lettere",
      "Statua della Minerva",
      "Giurisprudenza",
      "Scienze Politiche"
    ],
    "faction":{
      "name":"Rettorato",
      "color":"rgb(213,195,208)",
      "votes":0,
			"bonus":0,
      "attackText":"esercitando il potere e l\'autorita\' del Magnifico Rettore"
    }
  },
  "Robotica":{
    "adjacents":[
      "Orto Botanico",
      "Chimica analitica",
      "Fisica applicata",
      "Filosofia"
    ],
    "faction":{
      "name":"Studenti di Robotica",
      "color":"rgb(134,171,105)",
      "votes":0,
			"bonus":0,
      "attackText":"attaccando con il loro esercito di robot umanoidi"
    }
  },
  "Scienze Politiche":{
    "adjacents":[
      "Ostetricia",
      "Biologia",
      "Biotecnologie",
      "Architettura",
      "Scienze statistiche",
      "Giurisprudenza",
      "Rettorato",
      "Pratone"
    ],
    "faction":{
      "name":"Studenti di Scienze Politiche",
      "color":"rgb(159,93,24)",
      "votes":0,
			"bonus":0,
      "attackText":"grazie a mazzette e tangenti"
    }
  },
  "Scienze della Comunicazione":{
    "adjacents":[
      "Chirurgia",
      "Pratino Sud"
    ],
    "faction":{
      "name":"Studenti di Scienze della Comunicazione",
      "color":"rgb(107,134,58)",
      "votes":0,
			"bonus":0,
      "attackText":"semplicemente trovando un accordo verbale"
    }
  },
  "Scienze della Formazione":{
    "adjacents":[
      "Chiesa",
      "Neurologia",
      "Scienze dello Spettacolo"
    ],
    "faction":{
      "name":"Scienze della Formazione",
      "color":"rgb(162,192,211)",
      "votes":0,
			"bonus":0,
      "attackText":"solamente grazie ai loro modi composti ed educati"
    }
  },
  "Scienze dello Spettacolo":{
    "adjacents":[
      "Informatica",
      "Scienze della Formazione"
    ],
    "faction":{
      "name":"Studenti di Scienze dello Spettacolo",
      "color":"rgb(206,180,84)",
      "votes":0,
			"bonus":0,
      "attackText":"organizzando un diversivo da premio Oscar"
    }
  },
  "Scienze statistiche":{
    "adjacents":[
      "Scienze Politiche",
      "Mineralogia",
      "Geochimica",
      "Architettura"
    ],
    "faction":{
      "name":"Statisti",
      "color":"rgb(212,194,125)",
      "votes":0,
			"bonus":0,
      "attackText":"perche\' avevano il 70% di possibilita\' di successo"
    }
  },
  "Sociologia":{
    "adjacents":[
      "Ingegneria Informatica",
      "Economia",
      "Bar",
      "Ingegneria Gestionale"
    ],
    "faction":{
      "name":"Sociologi",
      "color":"rgb(36,164,133)",
      "votes":0,
			"bonus":0,
      "attackText":"conoscendo perfettamente i loro comportamenti"
    }
  },
  "Statua della Minerva":{
    "adjacents":[
      "Rettorato",
      "Pratino Est 1",
      "Pratino Est 2",
      "Pratino",
      "Giurisprudenza",
      "Fontana della Minerva"
    ],
    "faction":seguaciMinerva
  },
  "Storia":{
    "adjacents":[
      "Chimica analitica",
      "Farmacologia",
      "Matematica"
    ],
    "faction":{
      "name":"Storici",
      "color":"rgb(180,160,122)",
      "votes":0,
			"bonus":0,
      "attackText":"con il loro esercito di legionari e spartani"
    }
  },
  "Storia dell\'arte":{
    "adjacents":[
      "Orto Botanico",
      "Medicina legale",
      "Mensa",
      "Ingegneria Chimica"
    ],
    "faction":{
      "name":"Storici dell\'Arte",
      "color":"rgb(246,79,111)",
      "votes":0,
			"bonus":0,
      "attackText":"utilizzando delle sculture animate molto agguerrite"
    }
  },
  "Zoologia":{
    "adjacents":[
      "Archeologia",
      "Geochimica",
      "Lingue",
      "Neurologia"
    ],
    "faction":{
      "name":"Zoologi",
      "color":"rgb(55,52,42)",
      "votes":0,
			"bonus":0,
      "attackText":"attaccando con animali pericolosi tenuti in cattivita\'"
    }
  }
}
