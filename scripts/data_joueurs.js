// si le joueur n'a pas jouer un match -> mettre : null

const joueursData = [

  {id: "LM1D",nom: "Montfort", prenom: "Lenny", age: 23, nationalite: "France", taille:"1.89 m", photo:"montfort_dfco.png",
    pied: "Droit", poste_general: ["Gardien"], contrat: "2026", poste:["gk"],
    tempsJeu: {"2024-2025": [
    	{ competition: "National", matchs: 6, titulaires: 6, minutes: 540, buts:0, passes:0 },
    	{ competition: "National 3", matchs: 6, titulaires: 6, minutes: 540, buts:0, passes:0 },
    	{ competition: "Coupe de France", matchs: 5, titulaires: 5, minutes: 450, buts:0, passes:0 }],
               "2025-2026": [
	{ competition: "National", matchs: 0, titulaires: 0, minutes: 0, buts:0, passes:0 },]},
    video: "",
    transferts: [{ club: "Dijon FCO", matchs: 16, dates: "2023-actuel", logo:"logo_dfco.png", prix:"Libre", stat:"9 clean sheet" },
	{ club: "FC Nantes B", matchs: 9, dates: "2022-2023", logo:"logo_fcn.png", prix:"Libre", stat:"1 clean sheet" },
	{ club: "AS Saint-Etienne B", matchs: 3, dates: "2019-2022", logo:"logo_asse.png", prix:"Non communiqué", stat:"1 clean sheet" },
	{ club: "FC Lorient B", matchs: 1, dates: "2018-2019", logo:"logo_fcl.png", prix:"Formation", stat:"0 clean sheet" }],},

  {id: "PD16D",nom: "Delecroix", prenom: "Paul", age: 36, nationalite: "France", taille:"1.84 m", photo:"delecroix_dfco.png",
    pied: "Droit", poste_general: ["Gardien"], contrat: "2026", poste:["gk"],
    tempsJeu: {"2024-2025": [
    	{ competition: "National", matchs: 26, titulaires: 26, minutes: 2340, buts:0, passes:0 },
    	{ competition: "Coupe de France", matchs: 0, titulaires: 0, minutes: 0, buts:0, passes:0 }],
               "2025-2026": [
	{ competition: "National", matchs: 0, titulaires: 0, minutes: 0, buts:0, passes:0 },]},
    video: "",
    transferts: [{ club: "Dijon FCO", matchs: 26, dates: "2024-actuel", logo:"logo_dfco.png", prix:"Libre", stat:"9 clean sheet" },
	{ club: "Chamois Niort", matchs: 34, dates: "2023-2024", logo:"logo_niort.png", prix:"Libre", stat:"10 clean sheet" },
	{ club: "LB Châteauroux", matchs: 65, dates: "2021-2023", logo:"logo_lbc.png", prix:"Libre", stat:"20 clean sheet" },
	{ club: "FC Annecy", matchs: 17, dates: "2021-2021", logo:"logo_fca.png", prix:"Libre", stat:"8 clean sheet" },
	{ club: "FC Metz", matchs: 18, dates: "2018-2021", logo:"logo_metz.png", prix:"Libre", stat:"7 clean sheet" },
	{ club: "FC Lorient", matchs: 12, dates: "2016-2018", logo:"logo_fcl.png", prix:"Libre", stat:"1 clean sheet" },
	{ club: "Chamois Niort", matchs: 162, dates: "2011-2016", logo:"logo_niort.png", prix:"Libre", stat:"52 clean sheet" },
	{ club: "Amiens SC", matchs: 14, dates: "2008-2011", logo:"logo_asc.png", prix:"Formation", stat:"6 clean sheet" }],},

  {id: "VP30D",nom: "Poisson", prenom: "Victor", age: 24, nationalite: "France", taille:"1.98 m", photo:"poisson_dfco.png",
    pied: "Droit", poste_general: ["Gardien"], contrat: "2026", poste:["gk"],
    tempsJeu: {"2024-2025": [
    	{ competition: "National 3", matchs: 10, titulaires: 10, minutes: 900, buts:0, passes:0 },
    	{ competition: "Coupe de France", matchs: 0, titulaires: 0, minutes: 0, buts:0, passes:0 }],
               "2025-2026": [
	{ competition: "National", matchs: 0, titulaires: 0, minutes: 0, buts:0, passes:0 },]},
    video: "",
    transferts: [{ club: "Dijon FCO B", matchs: 10, stat:"2 clean sheet", dates: "2024-actuel", logo:"logo_dfco.png", prix:"Libre" },
	{ club: "Montlouis", matchs: 27, stat:"15 clean sheet", dates: "2023-2024", logo:"logo_not.png", prix:"Libre" },
	{ club: "SO Romorantin", matchs: 2, stat:"0 clean sheet", dates: "2022-2023", logo:"logo_not.png", prix:"Libre" },
	{ club: "Pithiviers", matchs: 0, stat:"0 clean sheet", dates: "2020-2022", logo:"logo_not.png", prix:"Libre" }],},

  {id: "ID2D",nom: "Diallo", prenom: "Ismail", age: 21, nationalite: "France", taille:"1.82 m", photo:"diallo_dfco.png",
    pied: "Droit", poste_general: ["Défenseur"], contrat: "2026", poste:["dg_dd"],
    tempsJeu: {"2024-2025": [
    	{ competition: "National", matchs: 21, titulaires: 14, minutes: 1218, buts:0, passes:1 },
    	{ competition: "National 3", matchs: 4, titulaires: 4, minutes: 360, buts:0, passes:0 },
    	{ competition: "Coupe de France", matchs: 5, titulaires: 5, minutes: 429, buts:0, passes:1 }],
               "2025-2026": [
	{ competition: "National", matchs: 0, titulaires: 0, minutes: 0, buts:0, passes:0 },]},
    video: "",
    transferts: [{ club: "Dijon FCO", matchs: 30, stat:"0 buts", dates: "2024-actuel", logo:"logo_dfco.png", prix:"Libre" },
	{ club: "Paris 13 Atletico", matchs: 25, stat:"1 but", dates: "2019-2024", logo:"logo_p13a.png", prix:"Formation" }],},

  {id: "NT3D",nom: "Titebah", prenom: "Nassim", age: 27, nationalite: "Maroc", taille:"1.76 m", photo:"titebah_dfco.png",
    pied: "Droit", poste_general: ["Défenseur"], contrat: "2025", poste:["dg_dd"],
    tempsJeu: {"2024-2025": [
    	{ competition: "National", matchs: 21, titulaires: 15, minutes: 1455, buts:1, passes:2 },
    	{ competition: "National 3", matchs: 2, titulaires: 2, minutes: 168, buts:1, passes:0 },
    	{ competition: "Coupe de France", matchs: 2, titulaires: 1, minutes: 101, buts:0, passes:0 }],
               "2025-2026": [
	{ competition: "National", matchs: 0, titulaires: 0, minutes: 0, buts:0, passes:0 },]},
    video: "",
    transferts: [{ club: "Dijon FCO", matchs: 25, stat:"2 buts", dates: "2024-actuel", logo:"logo_dfco.png", prix:"Libre" },
	{ club: "Umraniyespor (turquie)", matchs: 3, stat:"0 buts", dates: "2024-2024", logo:"logo_not.png", prix:"Libre" },
	{ club: "FC Bulle (suisse)", matchs: 26, stat:"2 buts", dates: "2023-2024", logo:"logo_not.png", prix:"Libre" },
	{ club: "Schiltigheim", matchs: 20, stat:"3 buts", dates: "2021-2023", logo:"logo_not.png", prix:"Libre" },
	{ club: "Amiens SC B", matchs: 5, stat:"0 buts", dates: "2020-2021", logo:"logo_asc.png", prix:"Libre" },
	{ club: "FC Mulhouse", matchs: 40, stat:"3 buts", dates: "2017-2020", logo:"logo_not.png", prix:"Formation" }],},
  
];