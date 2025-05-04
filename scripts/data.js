// ID = initiales + numero maillot + initiale club 
// exemple avec Lenny Montfort, 1, Dijon : LM1D

const clubsData = {
  "2024-2025": [ 
    {
      nom: "Dijon FCO",
      logo: "logo_dfco.png",
      joueurs: [
        { nom: "Montfort",prenom: "Lenny", numero: 1, poste: "Gardien", photo: "montfort_dfco.png", photoMatch:"montfort2_dfco.png", id:"LM1D"},
        { nom: "Delecroix",prenom: "Paul", numero: 16, poste: "Gardien", photo: "delecroix_dfco.png", photoMatch:"delecroix2_dfco.png", id:"PD16D"},
        { nom: "Poisson",prenom: "Victor", numero: 30, poste: "Gardien", photo: "poisson_dfco.png", photoMatch:"poisson2_dfco.png", id:"VP30D"},
        { nom: "Diallo",prenom: "Ismail", numero: 2, poste: "Défenseur", photo: "diallo_dfco.png", photoMatch:"diallo2_dfco.png", id:"ID2D"},
        { nom: "Titebah",prenom: "Nassim", numero: 3, poste: "Défenseur", photo: "titebah_dfco.png", photoMatch:"titebah2_dfco.png", id:"NT3D"},
        { nom: "Mendy",prenom: "Elydjah", numero: 4, poste: "Défenseur", photo: "mendy_dfco.png", photoMatch:"mendy2_dfco.png", id:"EM4D"},
        { nom: "Bernard",prenom: "Quentin", numero: 5, poste: "Défenseur", photo: "bernard_dfco.png", photoMatch:"bernard2_dfco.png", id:"QB5D"},
        { nom: "Cissé",prenom: "Souleymane", numero: 13, poste: "Défenseur", photo: "cisse_dfco.png", photoMatch:"cisse2_dfco.png", id:"SC13D"},
        { nom: "Sylla",prenom: "Mohamed", numero: 21, poste: "Défenseur", photo: "sylla_dfco.png", photoMatch:"sylla2_dfco.png", id:"MS21D"},
        { nom: "Makutungu",prenom: "Cédric", numero: 23, poste: "Défenseur", photo: "makutungu_dfco.png", photoMatch:"makutungu2_dfco.png", id:"CM23D"},
        { nom: "Souici",prenom: "Rayan", numero: 6, poste: "Milieu", photo: "souici_dfco.png", photoMatch:"souici2_dfco.png", id:"RS6D"},
        { nom: "Hamada",prenom: "Ben-Chayeel", numero: 7, poste: "Milieu", photo: "hamada_dfco.png", photoMatch:"hamada2_dfco.png", id:"BH7D"},
        { nom: "Lembezat",prenom: "Adel", numero: 11, poste: "Milieu", photo: "lembezat_dfco.png", photoMatch:"lembezat2_dfco.png", id:"AL11D"},
        { nom: "Camara",prenom: "Issiaga", numero: 12, poste: "Milieu", photo: "camara_dfco.png", photoMatch:"camara2_dfco.png", id:"IC12D"},
        { nom: "Marié",prenom: "Jordan", numero: 14, poste: "Milieu", photo: "marie_dfco.png", photoMatch:"marie2_dfco.png", id:"JM14D"},
        { nom: "Chahid",prenom: "Yanis", numero: 17, poste: "Milieu", photo: "chahid_dfco.png", photoMatch:"chahid2_dfco.png", id:"YC17D"},
        { nom: "Vargas-Rios",prenom: "Hugo", numero: 20, poste: "Milieu", photo: "vargasrios_dfco.png", photoMatch:"vargasrios2_dfco.png", id:"HV20D"},
        { nom: "Meyer",prenom: "Jules", numero: 26, poste: "Milieu", photo: "meyer_dfco.png", photoMatch:"meyer2_dfco.png", id:"JM26D"},
        { nom: "Moco",prenom: "Zoran", numero: 27, poste: "Milieu", photo: "moco_dfco.png", photoMatch:"moco2_dfco.png", id:"ZM27D"},
        { nom: "Schur",prenom: "Kévin", numero: 8, poste: "Attaquant", photo: "schur_dfco.png", photoMatch:"schur2_dfco.png", id:"KS8D"},
        { nom: "Barka",prenom: "Yanis", numero: 9, poste: "Attaquant", photo: "barka_dfco.png", photoMatch:"barka2_dfco.png", id:"YB9D"},
        { nom: "Ikanga",prenom: "Jovanny", numero: 10, poste: "Attaquant", photo: "ikanga_dfco.png", photoMatch:"ikanga2_dfco.png", id:"JI10D"},
        { nom: "Mendes",prenom: "Joseph", numero: 19, poste: "Attaquant", photo: "mendes_dfco.png", photoMatch:"mendes2_dfco.png", id:"JM19D"},
        { nom: "Parsemain",prenom: "Alexandre", numero: 25, poste: "Attaquant", photo: "parsemain_dfco.png", photoMatch:"parsemain2_dfco.png", id:"AP25D"},
        { nom: "Djaé",prenom: "Abd-Elmajid", numero: 37, poste: "Attaquant", photo: "djae_dfco.png", photoMatch:"djae2_dfco.png", id:"AD37D"},
      ]
    },
    {
      nom: "FC Sochaux Montbélliard",
      logo: "logo_fcsm.png",
      joueurs: [
        { nom: "Patouillet",prenom: "Mathieu", numero: 1, poste: "Gardien", photo: "patouillet_fcsm.png", photoMatch:"patouillet2_fcsm.png", id:"MP1S" },
        { nom: "Valette",prenom: "Baptiste", numero: 16, poste: "Gardien", photo: "valette_fcsm.png", photoMatch:"valette2_fcsm.png", id:"BV16S" },
        { nom: "Pierre",prenom: "Alexandre", numero: 30, poste: "Gardien", photo: "pierre_fcsm.png", photoMatch:"pierre2_fcsm.png", id:"AP30S" },
      ]
    },
    {
      nom: "FC Versailles",
      logo: "logo_fcv.png",
      joueurs: [
        { nom: "Raux",prenom: "Jules", numero: 1, poste: "Gardien", photo: "raux_fcv.png", photoMatch:"raux2_fcv.png", id:"JR1V" },
        { nom: "Kouassi",prenom: "Wilfried", numero: 16, poste: "Gardien", photo: "kouassi_fcv.png", photoMatch:"kouassi_fcv.png", id:"WK16V" },
        { nom: "Rénot",prenom: "Sébastien", numero: 40, poste: "Gardien", photo: "renot_fcv.png", photoMatch:"renot2_fcv.png", id:"SR40V" },
        { nom: "Sallard",prenom: "Romain", numero: 0, poste: "Gardien", photo: "sallard_fcv.png", photoMatch:"sallard_fcv.png", id:"RSV" },
        { nom: "Mahop",prenom: "Moïse", numero: 2, poste: "Défenseur", photo: "mahop_fcv.png", photoMatch:"mahop2_fcv.png", id:"MM2V" },
        { nom: "Mbone",prenom: "Yannick", numero: 3, poste: "Défenseur", photo: "mbone_fcv.png", photoMatch:"mbone_fcv.png", id:"YM3V" },
        { nom: "Calvet",prenom: "Raphaël", numero: 5, poste: "Défenseur", photo: "calvet_fcv.png", photoMatch:"calvet2_fcv.png", id:"RC5V" },
        { nom: "Diakhaby",prenom: "Lassana", numero: 6, poste: "Défenseur", photo: "diakhaby_fcv.png", photoMatch:"diakhaby2_fcv.png", id:"LD6V" },
        { nom: "Altikulac",prenom: "Melih", numero: 12, poste: "Défenseur", photo: "altikulac_fcv.png", photoMatch:"altikulac2_fcv.png", id:"MA12V" },
        { nom: "Santini",prenom: "Jérémi", numero: 17, poste: "Défenseur", photo: "santini_fcv.png", photoMatch:"santini_fcv.png", id:"JS17V" },
        { nom: "Moussadek",prenom: "Djamal", numero: 22, poste: "Défenseur", photo: "moussadek_fcv.png", photoMatch:"moussadek_fcv.png", id:"DM22V" },
        { nom: "Tchato",prenom: "Ryan", numero: 23, poste: "Défenseur", photo: "tchato_fcv.png", photoMatch:"tchato2_fcv.png", id:"RT23V" },
        { nom: "Karamoko",prenom: "Ibrahim", numero: 4, poste: "Milieu", photo: "karamoko_fcv.png", photoMatch:"karamoko2_fcv.png", id:"IK4V" },
        { nom: "Raux Yao",prenom: "Charles André", numero: 8, poste: "Milieu", photo: "raux_yao_fcv.png", photoMatch:"raux_yao2_fcv.png", id:"CR8V" },
        { nom: "Hend",prenom: "Bilal", numero: 11, poste: "Milieu", photo: "hend_fcv.png", photoMatch:"hend2_fcv.png", id:"BH11V" },
        { nom: "Basque",prenom: "Romain", numero: 14, poste: "Milieu", photo: "basque_fcv.png", photoMatch:"basque2_fcv.png", id:"RB14V" },
        { nom: "Renaud",prenom: "Tom", numero: 20, poste: "Milieu", photo: "renaud_fcv.png", photoMatch:"renaud2_fcv.png", id:"TR20V" },
        { nom: "Mendes",prenom: "Jordan", numero: 29, poste: "Milieu", photo: "mendes_fcv.png", photoMatch:"mendes2_fcv.png", id:"JM29V" },
        { nom: "Chadet",prenom: "Kurtis", numero: 32, poste: "Milieu", photo: "chadet_fcv.png", photoMatch:"chadet_fcv.png", id:"KC32V" },
        { nom: "Mbemba",prenom: "Freddy", numero: 7, poste: "Attaquant", photo: "mbemba_fcv.png", photoMatch:"mbemba2_fcv.png", id:"FM7V" },
        { nom: "Bangoura",prenom: "Djibril", numero: 9, poste: "Attaquant", photo: "bangoura_fcv.png", photoMatch:"bangoura2_fcv.png", id:"DB9V" },
        { nom: "Baghdadi",prenom: "Samy", numero: 10, poste: "Attaquant", photo: "baghdadi_fcv.png", photoMatch:"baghdadi2_fcv.png", id:"SB10V" },
        { nom: "Guirassy",prenom: "Fodé", numero: 13, poste: "Attaquant", photo: "guirassy_fcv.png", photoMatch:"guirassy2_fcv.png", id:"FG13V" },
        { nom: "Duku",prenom: "Modeste", numero: 19, poste: "Attaquant", photo: "duku_fcv.png", photoMatch:"duku2_fcv.png", id:"MD19V" },
        { nom: "Mbala",prenom: "Kevin", numero: 25, poste: "Attaquant", photo: "mbala_fcv.png", photoMatch:"mbala2_fcv.png", id:"KM25V" },
        { nom: "Kodjia",prenom: "Jonathan", numero: 26, poste: "Attaquant", photo: "kodjia_fcv.png", photoMatch:"kodjia2_fcv.png", id:"JK26V" },
        { nom: "Agoro",prenom: "Abulakeem", numero: 27, poste: "Attaquant", photo: "agoro_fcv.png", photoMatch:"agoro_fcv.png", id:"AA27V" },
      ]
    }
  ],
  "2025-2026": [
    {
      nom: "Bientot disponible",
      logo: "",
      joueurs: []}
  ]
};