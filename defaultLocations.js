var nessuno = {
  "name": "nessuno",
  "color": "rgb(255,255,255)",
  "marks": 0
}

var seguaciMinerva = {
  "name": "Seguaci della Minerva",
  "color": "rgb(218,167,164)",
  "marks": 0
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "name":"Studenti di Botanica",
      "color":"rgb(218,142,124)",
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "name":"Studenti di Economia",
      "color":"rgb(147,210,119)",
      "marks":0,
      "attackText":""
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
      "name":"Studenti di Farmacologia",
      "color":"rgb(16,78,235)",
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "color":"rgb(121,38,246)",
      "marks":0,
      "attackText":""
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
      "name":"Studenti di Igiene",
      "color":"rgb(36,118,33)",
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
    }
  },
  "Ingegneria Chimica":{
    "adjacents":[
      "Ingegneria Gestionale",
      "Orto Botanico",
      "Storia dell'arte",
      "Botanica",
      "Ingegneria Edile"
    ],
    "faction":{
      "name":"Ingegneri Chimici",
      "color":"rgb(104,218,168)",
      "marks":0,
      "attackText":""
    }
  },
  "Ingegneria Civile":{
    "adjacents":[
      "Ingegneria Informatica",
      "Ingegneria Industriale",
      "Ingegneria Gestionale"
    ],
    "faction":{
      "name":"Ingegneri Civili",
      "color":"rgb(207,149,0)",
      "marks":0,
      "attackText":""
    }
  },
  "Ingegneria Edile":{
    "adjacents":[
      "Ingegneria Industriale",
      "Ingegneria Gestionale",
      "Ingegneria Chimica"
    ],
    "faction":{
      "name":"Ingegneri Edili",
      "color":"rgb(73,104,181)",
      "marks":0,
      "attackText":""
    }
  },
  "Ingegneria Gestionale":{
    "adjacents":[
      "Botanica",
      "Economia",
      "Ingegneria Informatica",
      "Ingegneria Civile",
      "Ingegneria Industriale",
      "Ingegneria Edile",
      "Ingegneria Chimica",
      "Orto Botanico",
      "Sociologia"
    ],
    "faction":{
      "name":"Studenti di Ingegneria gestionale",
      "color":"rgb(162,169,229)",
      "marks":0,
      "attackText":""
    }
  },
  "Ingegneria Industriale":{
    "adjacents":[
      "Ingegneria Civile",
      "Ingegneria Informatica",
      "Ingegneria Edile",
      "Ingegneria Gestionale"
    ],
    "faction":{
      "name":"Ingegneri Industriali",
      "color":"rgb(242,87,60)",
      "marks":0,
      "attackText":""
    }
  },
  "Ingegneria Informatica":{
    "adjacents":[
      "Ingegneria Gestionale",
      "Sociologia",
      "Economia",
      "Ingegneria Civile",
      "Ingegneria Industriale"
    ],
    "faction":{
      "name":"Ingegneri Informatici",
      "color":"rgb(96,11,134)",
      "marks":0,
      "attackText":""
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
      "name":"Studenti di Lettere",
      "color":"rgb(210,210,11)",
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
    }
  },
  "Medicina legale":{
    "adjacents":[
      "Storia dell'arte",
      "Orto Botanico",
      "Mensa",
      "Chimica analitica"
    ],
    "faction":{
      "name":"Medici Legali",
      "color":"rgb(149,221,75)",
      "marks":0,
      "attackText":""
    }
  },
  "Mensa":{
    "adjacents":[
      "Storia dell'arte",
      "Medicina legale",
      "Chimica analitica",
      "Fisica applicata",
      "Matematica"
    ],
    "faction":{
      "name":"Addetti alla mensa",
      "color":"rgb(107,43,95)",
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
    }
  },
  "Orto Botanico":{
    "adjacents":[
      "Botanica",
      "Storia dell'arte",
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "name":"Tossici",
      "color":"rgb(120,11,232)",
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "name":"Studenti di Scienze Statistiche",
      "color":"rgb(212,194,125)",
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
    }
  },
  "Storia dell'arte":{
    "adjacents":[
      "Orto Botanico",
      "Medicina legale",
      "Mensa",
      "Ingegneria Chimica"
    ],
    "faction":{
      "name":"Storici dell'Arte",
      "color":"rgb(246,79,111)",
      "marks":0,
      "attackText":""
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
      "marks":0,
      "attackText":""
    }
  }
}
