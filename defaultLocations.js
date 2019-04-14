const DEFAULT_SCORE = 50;

var nessuno = {
  "name": "nessuno",
  "color": "rgb(255,255,255)",
  "voti": DEFAULT_SCORE
}

var seguaciMinerva = {
  "name": "Seguaci della Minerva",
  "color": "rgb(218,167,164)",
  "voti": DEFAULT_SCORE
}

module.exports = {
  "Aiuola 1": {
    "adjacents": [
      "Aiuola 2",
      "Astronomia",
      "Astrofisica",
      "Fisica",
      "Aiuola 3"
    ],
    "owner": nessuno
  },
  "Aiuola 2": {
    "adjacents": [
      "Chimica",
      "Aiuola 1",
      "Aiuola 4"
    ],
    "owner": nessuno
  },
  "Aiuola 3": {
    "adjacents": [
      "Aiuola 1",
      "Aiuola 4",
      "Igiene",
      "Infermieristica"
    ],
    "owner": nessuno
  },
  "Aiuola 4": {
    "adjacents": [
      "Medicina",
      "Aiuola 2",
      "Aiuola 3"
    ],
    "owner": nessuno
  },
  "Archeologia": {
    "adjacents": [
      "Architettura",
      "Geochimica",
      "Zoologia"
    ],
    "owner": {
      "name": "Archeologi",
      "color": "rgb(10,30,99)",
      "voti": DEFAULT_SCORE
    }
  },
  "Architettura": {
    "adjacents": [
      "Biotecnologie",
      "Scienze Politiche",
      "Scienze statistiche",
      "Geochimica",
      "Archeologia"
    ],
    "owner": {
      "name": "Architetti",
      "color": "rgb(209,46,101)",
      "voti": DEFAULT_SCORE
    }
  },
  "Astrofisica": {
    "adjacents": [
      "Astronomia",
      "Aiuola 1",
      "Fisica",
      "Lingue"
    ],
    "owner": {
      "name": "Astrofisici",
      "color": "rgb(174,161,74)",
      "voti": DEFAULT_SCORE
    }
  },
  "Astronomia": {
    "adjacents": [
      "Pratino",
      "Astrofisica",
      "Lingue",
      "Geologia",
      "Aiuola 1"
    ],
    "owner": {
      "name": "Astronomi",
      "color": "rgb(190,211,218)",
      "voti": DEFAULT_SCORE
    }
  },
  "Bar": {
    "adjacents": [
      "Sociologia",
      "Economia",
      "Psicologia"
    ],
    "owner": {
      "name": "Baristi",
      "color": "rgb(47,214,147)",
      "voti": DEFAULT_SCORE
    }
  },
  "Biologia": {
    "adjacents": [
      "Ostetricia",
      "Psicologia",
      "Scienze Politiche",
      "Biotecnologie"
    ],
    "owner": {
      "name": "Biologi",
      "color": "rgb(29,220,131)",
      "voti": DEFAULT_SCORE
    }
  },
  "Biotecnologie": {
    "adjacents": [
      "Biologia",
      "Scienze Politiche",
      "Architettura"
    ],
    "owner": {
      "name": "Studenti di Biotecnologie",
      "color": "rgb(10,231,205)",
      "voti": DEFAULT_SCORE
    }
  },
  "Botanica": {
    "adjacents": [
      "Genetica",
      "Ingegneria Gestionale",
      "Orto Botanico",
      "Filosofia",
      "Lettere",
      "Pratone",
      "Ingegneria Chimica",
      "Economia"
    ],
    "owner": {
      "name": "Studenti di Botanica",
      "color": "rgb(218,142,124)",
      "voti": DEFAULT_SCORE
    }
  },
  "Chiesa": {
    "adjacents": [
      "Lingue",
      "Fisica",
      "Igiene",
      "Scienze della Formazione",
      "Neurologia"
    ],
    "owner": {
      "name": "Vaticano",
      "color": "rgb(148,211,201)",
      "voti": DEFAULT_SCORE
    }
  },
  "Chimica": {
    "adjacents": [
      "Chimica Industriale",
      "Pratino Est 2",
      "Medicina",
      "Aiuola 2"
    ],
    "owner": {
      "name": "Chimici",
      "color": "rgb(15,84,107)",
      "voti": DEFAULT_SCORE
    }
  },
  "Chimica Industriale": {
    "adjacents": [
      "Pratino Est 2",
      "Farmacologia",
      "Medicina",
      "Chimica",
      "Matematica"
    ],
    "owner": {
      "name": "Chimici Industriali",
      "color": "rgb(92,187,180)",
      "voti": DEFAULT_SCORE
    }
  },
  "Chimica analitica": {
    "adjacents": [
      "Mensa",
      "Storia",
      "Fisica applicata",
      "Robotica",
      "Medicina legale"
    ],
    "owner": {
      "name": "Studenti di Chimica Analitica",
      "color": "rgb(199,236,168)",
      "voti": DEFAULT_SCORE
    }
  },
  "Chirurgia": {
    "adjacents": [
      "Farmacologia",
      "Scienze della Comunicazione",
      "Pratino Sud"
    ],
    "owner": {
      "name": "Chirurghi",
      "color": "rgb(68,89,1)",
      "voti": DEFAULT_SCORE
    }
  },
  "Economia": {
    "adjacents": [
      "Bar",
      "Sociologia",
      "Ingegneria Gestionale",
      "Ingegneria Informatica",
      "Botanica",
      "Genetica",
      "Pratone",
      "Psicologia"
    ],
    "owner": {
      "name": "Studenti di Economia",
      "color": "rgb(147,210,119)",
      "voti": DEFAULT_SCORE
    }
  },
  "Farmacologia": {
    "adjacents": [
      "Matematica",
      "Storia",
      "Chirurgia",
      "Chimica Industriale",
      "Pratino Sud"
    ],
    "owner": {
      "name": "Studenti di Farmacologia",
      "color": "rgb(16,78,235)",
      "voti": DEFAULT_SCORE
    }
  },
  "Filosofia": {
    "adjacents": [
      "Botanica",
      "Orto Botanico",
      "Robotica",
      "Fisica applicata",
      "Matematica",
      "Pratino Est 1",
      "Lettere"
    ],
    "owner": {
      "name": "Filosofi",
      "color": "rgb(161,90,247)",
      "voti": DEFAULT_SCORE
    }
  },
  "Fisica": {
    "adjacents": [
      "Astrofisica",
      "Aiuola 1",
      "Igiene",
      "Chiesa",
      "Lingue"
    ],
    "owner": {
      "name": "Fisici",
      "color": "rgb(89,67,173)",
      "voti": DEFAULT_SCORE
    }
  },
  "Fisica applicata": {
    "adjacents": [
      "Robotica",
      "Chimica analitica",
      "Mensa",
      "Matematica",
      "Filosofia"
    ],
    "owner": {
      "name": "Studenti di Fisica Applicata",
      "color": "rgb(245,37,207)",
      "voti": DEFAULT_SCORE
    }
  },
  "Fontana della Minerva": {
    "adjacents": [
      "Statua della Minerva"
    ],
    "owner": seguaciMinerva
  },
  "Genetica": {
    "adjacents": [
      "Botanica",
      "Economia",
      "Pratone"
    ],
    "owner": {
      "name": "Studenti di Genetica",
      "color": "rgb(201,214,189)",
      "voti": DEFAULT_SCORE
    }
  },
  "Geochimica": {
    "adjacents": [
      "Scienze statistiche",
      "Mineralogia",
      "Geologia",
      "Neurologia",
      "Zoologia",
      "Archeologia",
      "Architettura"
    ],
    "owner": {
      "name": "Geochimici",
      "color": "rgb(180,226,124)",
      "voti": DEFAULT_SCORE
    }
  },
  "Geologia": {
    "adjacents": [
      "Mineralogia",
      "Pratino",
      "Astronomia",
      "Lingue",
      "Geochimica"
    ],
    "owner": {
      "name": "Geologi",
      "color": "rgb(162,188,113)",
      "voti": DEFAULT_SCORE
    }
  },
  "Giurisprudenza": {
    "adjacents": [
      "Scienze Politiche",
      "Rettorato",
      "Pratino",
      "Mineralogia",
      "Statua della Minerva"
    ],
    "owner": {
      "name": "Giuristi",
      "color": "rgb(121,38,246)",
      "voti": DEFAULT_SCORE
    }
  },
  "Igiene": {
    "adjacents": [
      "Fisica",
      "Aiuola 3",
      "Infermieristica",
      "Chiesa"
    ],
    "owner": {
      "name": "Studenti di Igene",
      "color": "rgb(36,118,33)",
      "voti": DEFAULT_SCORE
    }
  },
  "Infermieristica": {
    "adjacents": [
      "Igiene",
      "Aiuola 3",
      "Informatica"
    ],
    "owner": {
      "name": "Infermieri",
      "color": "rgb(180,29,31)",
      "voti": DEFAULT_SCORE
    }
  },
  "Informatica": {
    "adjacents": [
      "Infermieristica",
      "Scienze dello Spettacolo"
    ],
    "owner": {
      "name": "Informatici",
      "color": "rgb(200,54,230)",
      "voti": DEFAULT_SCORE
    }
  },
  "Ingegneria Chimica": {
    "adjacents": [
      "Ingegneria Gestionale",
      "Orto Botanico",
      "Storia dell'arte",
      "Botanica",
      "Ingegneria Edile"
    ],
    "owner": {
      "name": "Ingegneri Chimici",
      "color": "rgb(104,218,168)",
      "voti": DEFAULT_SCORE
    }
  },
  "Ingegneria Civile": {
    "adjacents": [
      "Ingegneria Informatica",
      "Ingegneria Industriale",
      "Ingegneria Gestionale"
    ],
    "owner": {
      "name": "Ingegneri Civili",
      "color": "rgb(207,149,0)",
      "voti": DEFAULT_SCORE
    }
  },
  "Ingegneria Edile": {
    "adjacents": [
      "Ingegneria Industriale",
      "Ingegneria Gestionale",
      "Ingegneria Chimica"
    ],
    "owner": {
      "name": "Ingegneri Edili",
      "color": "rgb(73,104,181)",
      "voti": DEFAULT_SCORE
    }
  },
  "Ingegneria Gestionale": {
    "adjacents": [
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
    "owner": {
      "name": "Studenti di Ingegneria gestionale",
      "color": "rgb(162,169,229)",
      "voti": DEFAULT_SCORE
    }
  },
  "Ingegneria Industriale": {
    "adjacents": [
      "Ingegneria Civile",
      "Ingegneria Informatica",
      "Ingegneria Edile",
      "Ingegneria Gestionale"
    ],
    "owner": {
      "name": "Ingegneri Industriali",
      "color": "rgb(242,87,60)",
      "voti": DEFAULT_SCORE
    }
  },
  "Ingegneria Informatica": {
    "adjacents": [
      "Ingegneria Gestionale",
      "Sociologia",
      "Economia",
      "Ingegneria Civile",
      "Ingegneria Industriale"
    ],
    "owner": {
      "name": "Ingegneri Informatici",
      "color": "rgb(21,171,54)",
      "voti": DEFAULT_SCORE
    }
  },
  "Lettere": {
    "adjacents": [
      "Botanica",
      "Filosofia",
      "Pratino Est 1",
      "Rettorato",
      "Pratone"
    ],
    "owner": {
      "name": "Studenti di Lettere",
      "color": "rgb(210,210,11)",
      "voti": DEFAULT_SCORE
    }
  },
  "Lingue": {
    "adjacents": [
      "Geologia",
      "Astronomia",
      "Astrofisica",
      "Fisica",
      "Chiesa",
      "Neurologia",
      "Zoologia"
    ],
    "owner": {
      "name": "Linguisti",
      "color": "rgb(5,227,35)",
      "voti": DEFAULT_SCORE
    }
  },
  "Matematica": {
    "adjacents": [
      "Fisica applicata",
      "Storia",
      "Farmacologia",
      "Chimica Industriale",
      "Pratino Est 2",
      "Pratino Est 1",
      "Filosofia",
      "Mensa"
    ],
    "owner": {
      "name": "Matematici",
      "color": "rgb(82,204,86)",
      "voti": DEFAULT_SCORE
    }
  },
  "Medicina": {
    "adjacents": [
      "Chimica Industriale",
      "Chimica",
      "Aiuola 4",
      "Ortopedia"
    ],
    "owner": {
      "name": "Medici",
      "color": "rgb(219,157,37)",
      "voti": DEFAULT_SCORE
    }
  },
  "Medicina legale": {
    "adjacents": [
      "Storia dell'arte",
      "Orto Botanico",
      "Mensa",
      "Chimica analitica"
    ],
    "owner": {
      "name": "Medici Legali",
      "color": "rgb(149,221,75)",
      "voti": DEFAULT_SCORE
    }
  },
  "Mensa": {
    "adjacents": [
      "Storia dell'arte",
      "Medicina legale",
      "Chimica analitica",
      "Fisica applicata",
      "Matematica"
    ],
    "owner": {
      "name": "Addetti alla mensa",
      "color": "rgb(107,43,95)",
      "voti": DEFAULT_SCORE
    }
  },
  "Mineralogia": {
    "adjacents": [
      "Scienze statistiche",
      "Giurisprudenza",
      "Pratino",
      "Geologia",
      "Geochimica"
    ],
    "owner": {
      "name": "Minerologia",
      "color": "rgb(62,140,210)",
      "voti": DEFAULT_SCORE
    }
  },
  "Neurologia": {
    "adjacents": [
      "Zoologia",
      "Lingue",
      "Chiesa",
      "Scienze della Formazione",
      "Geochimica"
    ],
    "owner": {
      "name": "Neurologi",
      "color": "rgb(244,166,186)",
      "voti": DEFAULT_SCORE
    }
  },
  "Orto Botanico": {
    "adjacents": [
      "Botanica",
      "Storia dell'arte",
      "Medicina legale",
      "Robotica",
      "Filosofia",
      "Ingegneria Chimica",
      "Ingegneria Gestionale"
    ],
    "owner": nessuno
  },
  "Ortopedia": {
    "adjacents": [
      "Pratino Sud",
      "Medicina"
    ],
    "owner": {
      "name": "Ortopedici",
      "color": "rgb(208,83,9)",
      "voti": DEFAULT_SCORE
    }
  },
  "Ostetricia": {
    "adjacents": [
      "Psicologia",
      "Pratone",
      "Scienze Politiche",
      "Biologia"
    ],
    "owner": {
      "name": "Ostetrici",
      "color": "rgb(59,194,240)",
      "voti": DEFAULT_SCORE
    }
  },
  "Pratino": {
    "adjacents": [
      "Giurisprudenza",
      "Statua della Minerva",
      "Astronomia",
      "Geologia",
      "Mineralogia"
    ],
    "owner": nessuno
  },
  "Pratino Est 1": {
    "adjacents": [
      "Lettere",
      "Filosofia",
      "Matematica",
      "Pratino Est 2",
      "Statua della Minerva"
    ],
    "owner": nessuno
  },
  "Pratino Est 2": {
    "adjacents": [
      "Pratino Est 1",
      "Matematica",
      "Chimica Industriale",
      "Chimica",
      "Statua della Minerva"
    ],
    "owner": nessuno
  },
  "Pratino Sud": {
    "adjacents": [
      "Farmacologia",
      "Chirurgia",
      "Scienze della Comunicazione",
      "Ortopedia"
    ],
    "owner": nessuno
  },
  "Pratone": {
    "adjacents": [
      "Economia",
      "Genetica",
      "Botanica",
      "Lettere",
      "Rettorato",
      "Scienze Politiche",
      "Ostetricia",
      "Psicologia"
    ],
    "owner": {
      "name": "Tossici",
      "color": "rgb(120,11,232)",
      "voti": DEFAULT_SCORE
    }
  },
  "Psicologia": {
    "adjacents": [
      "Economia",
      "Pratone",
      "Ostetricia",
      "Biologia",
      "Bar"
    ],
    "owner": {
      "name": "Psicologi",
      "color": "rgb(174,169,17)",
      "voti": DEFAULT_SCORE
    }
  },
  "Rettorato": {
    "adjacents": [
      "Pratone",
      "Lettere",
      "Statua della Minerva",
      "Giurisprudenza",
      "Scienze Politiche"
    ],
    "owner": {
      "name": "Rettorato",
      "color": "rgb(213,195,208)",
      "voti": DEFAULT_SCORE
    }
  },
  "Robotica": {
    "adjacents": [
      "Orto Botanico",
      "Chimica analitica",
      "Fisica applicata",
      "Filosofia"
    ],
    "owner": {
      "name": "Studenti di Robotica",
      "color": "rgb(134,171,105)",
      "voti": DEFAULT_SCORE
    }
  },
  "Scienze Politiche": {
    "adjacents": [
      "Ostetricia",
      "Biologia",
      "Biotecnologie",
      "Architettura",
      "Scienze statistiche",
      "Giurisprudenza",
      "Rettorato",
      "Pratone"
    ],
    "owner": {
      "name": "Studenti di Scienze Politiche",
      "color": "rgb(219,3,244)",
      "voti": DEFAULT_SCORE
    }
  },
  "Scienze della Comunicazione": {
    "adjacents": [
      "Chirurgia",
      "Pratino Sud"
    ],
    "owner": {
      "name": "Studenti di Scienze della Comunicazione",
      "color": "rgb(107,134,58)",
      "voti": DEFAULT_SCORE
    }
  },
  "Scienze della Formazione": {
    "adjacents": [
      "Chiesa",
      "Neurologia",
      "Scienze dello Spettacolo"
    ],
    "owner": {
      "name": "Scienze della Formazione",
      "color": "rgb(162,192,211)",
      "voti": DEFAULT_SCORE
    }
  },
  "Scienze dello Spettacolo": {
    "adjacents": [
      "Informatica",
      "Scienze della Formazione"
    ],
    "owner": {
      "name": "Studenti di Scienze dello Spettacolo",
      "color": "rgb(206,180,84)",
      "voti": DEFAULT_SCORE
    }
  },
  "Scienze statistiche": {
    "adjacents": [
      "Scienze Politiche",
      "Mineralogia",
      "Geochimica",
      "Architettura"
    ],
    "owner": {
      "name": "Studenti di Scienze Statistiche",
      "color": "rgb(212,194,125)",
      "voti": DEFAULT_SCORE
    }
  },
  "Sociologia": {
    "adjacents": [
      "Ingegneria Informatica",
      "Economia",
      "Bar",
      "Ingegneria Gestionale"
    ],
    "owner": {
      "name": "Sociologi",
      "color": "rgb(36,164,133)",
      "voti": DEFAULT_SCORE
    }
  },
  "Statua della Minerva": {
    "adjacents": [
      "Rettorato",
      "Pratino Est 1",
      "Pratino Est 2",
      "Pratino",
      "Giurisprudenza",
      "Fontana della Minerva"
    ],
    "owner": seguaciMinerva
  },
  "Storia": {
    "adjacents": [
      "Chimica analitica",
      "Farmacologia",
      "Matematica"
    ],
    "owner": {
      "name": "Storici",
      "color": "rgb(207,83,53)",
      "voti": DEFAULT_SCORE
    }
  },
  "Storia dell'arte": {
    "adjacents": [
      "Orto Botanico",
      "Medicina legale",
      "Mensa",
      "Ingegneria Chimica"
    ],
    "owner": {
      "name": "Storici dell'Arte",
      "color": "rgb(246,79,111)",
      "voti": DEFAULT_SCORE
    }
  },
  "Zoologia": {
    "adjacents": [
      "Archeologia",
      "Geochimica",
      "Lingue",
      "Neurologia"
    ],
    "owner": {
      "name": "Zoologi",
      "color": "rgb(55,52,42)",
      "voti": DEFAULT_SCORE
    }
  }
}
