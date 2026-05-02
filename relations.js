export const relations = [

    // =========================
    // VIDA
    // =========================
    //["", ""],
    ["Vida", "Bactéria"],
    ["Vida", "Archaea"],
    ["Vida", "Eukarya"],

    // =========================
    // BACTÉRIA
    // =========================
    ["Bactéria", "Eubacteria"],
    ["Bactéria", "Cyanobacteria"],

    // bacteria/ cyanobacteria
    ["Cyanobacteria", "Chroococcales"],   // formas unicelulares
    ["Cyanobacteria", "Nostocales"],      // filamentosas com heterocistos
    ["Cyanobacteria", "Oscillatoriales"], // filamentosas sem heterocistos
    ["Cyanobacteria", "Stigonematales"],  // filamentosas ramificadas
    ["Cyanobacteria", "Pleurocapsales"],  // formas multicelulares simples
    ["Cyanobacteria", "Gloeobacterales"], // grupo basal, sem tilacóides


    ["Eubacteria", "Proteobacteria"],
    ["Eubacteria", "Firmicutes"],

    // Proteobacteria
    ["Proteobacteria", "Gammaproteobacteria"],
    ["Proteobacteria", "Alphaproteobacteria"],

    ["Gammaproteobacteria", "Enterobacterales"],
    ["Gammaproteobacteria", "Pseudomonadales"],

    ["Enterobacterales", "Enterobacteriaceae"],
    ["Enterobacterales", "Yersiniaceae"],

    ["Enterobacteriaceae", "Escherichia"],
    ["Enterobacteriaceae", "Salmonella"],

    ["Escherichia", "E. coli"],
    ["Escherichia", "E. albertii"],

    ["Salmonella", "S. enterica"],
    ["Salmonella", "S. bongori"],

    ["Pseudomonadales", "Pseudomonadaceae"],
    ["Pseudomonadaceae", "Pseudomonas"],
    ["Pseudomonas", "P. aeruginosa"],
    ["Pseudomonas", "P. fluorescens"],

    // Firmicutes
    ["Firmicutes", "Bacilli"],
    ["Firmicutes", "Clostridia"],

    ["Bacilli", "Lactobacillales"],
    ["Bacilli", "Bacillales"],

    ["Lactobacillales", "Streptococcaceae"],
    ["Lactobacillales", "Lactobacillaceae"],

    ["Streptococcaceae", "Streptococcus"],
    ["Streptococcus", "S. pneumoniae"],
    ["Streptococcus", "S. pyogenes"],

    ["Lactobacillaceae", "Lactobacillus"],
    ["Lactobacillus", "L. acidophilus"],
    ["Lactobacillus", "L. casei"],

    // =========================
    // ARCHAEA
    // =========================
    ["Archaea", "Archaebacteria"],
    ["Archaebacteria", "Euryarchaeota"],
    ["Archaebacteria", "Crenarchaeota"],

    ["Euryarchaeota", "Methanobacteria"],
    ["Euryarchaeota", "Halobacteria"],

    ["Methanobacteria", "Methanobacteriales"],
    ["Methanobacteriales", "Methanobacteriaceae"],
    ["Methanobacteriaceae", "Methanobrevibacter"],
    ["Methanobrevibacter", "M. smithii"],
    ["Methanobrevibacter", "M. ruminantium"],

    ["Halobacteria", "Halobacteriales"],
    ["Halobacteriales", "Halobacteriaceae"],
    ["Halobacteriaceae", "Halobacterium"],
    ["Halobacterium", "H. salinarum"],
    ["Halobacterium", "H. volcanii"],

    ["Crenarchaeota", "Thermoprotei"],
    ["Thermoprotei", "Sulfolobales"],
    ["Sulfolobales", "Sulfolobaceae"],
    ["Sulfolobaceae", "Sulfolobus"],
    ["Sulfolobus", "S. solfataricus"],
    ["Sulfolobus", "S. acidocaldarius"],

    // =========================
    // EUKARYA
    // =========================
    ["Eukarya", "Animalia"],
    ["Eukarya", "Plantae"],
    ["Eukarya", "Fungi"],
    ["Eukarya", "Protista"],

    // -------- ANIMALIA --------
    ["Animalia", "Porifera"],
    ["Animalia", "Cnidaria"],
    ["Animalia", "Ctenophora"],
    ["Animalia", "Platyhelminthes"],
    ["Animalia", "Nematoda"],
    ["Animalia", "Annelida"],
    ["Animalia", "Mollusca"],
    ["Animalia", "Echinodermata"],
    ["Animalia", "Chordata"],
    ["Animalia", "Arthropoda"],

    // eukarya/ animalia/ porifera
    ["Porifera", "Calcarea"],       // esponjas calcárias
    ["Porifera", "Demospongiae"],   // esponjas comuns (maior diversidade)
    ["Porifera", "Hexactinellida"], // esponjas vítreas

    // eukarya/ animalia/ cnidaria
    ["Cnidaria", "Anthozoa"],     // corais e anêmonas
    ["Cnidaria", "Medusozoa"],    // águas-vivas e hidras
    ["Cnidaria", "Endocnidozoa"], // parasitas microscópicos

    // eukarya/ animalia/ ctenophora
    ["Ctenophora", "Tentaculata"], // maioria dos ctenóforos, com tentáculos
    ["Ctenophora", "Nuda"],        // sem tentáculos, como Beroe

    // eukarya/ animalia/ annelida
    ["Annelida", "Polychaeta"],     // poliquetas marinhos
    ["Annelida", "Clitellata"],     // inclui oligoquetas e sanguessugas
    ["Annelida", "Sipuncula"],      // sipúnculos (às vezes tratados à parte)

    // eukarya/ animalia/ nematoda
    ["Nematoda", "Enoplea"],        // nematódeos primitivos
    ["Nematoda", "Chromadorea"],    // maioria dos nematódeos modernos

    // eukarya/ animalia/ platyhelminthes
    ["Platyhelminthes", "Turbellaria"],   // planárias de vida livre
    ["Platyhelminthes", "Monogenea"],     // parasitas externos de peixes
    ["Platyhelminthes", "Trematoda"],     // vermes parasitas (duelas)
    ["Platyhelminthes", "Cestoda"],       // tênias



    // eukarya / animalia/ echinodermata
    ["Echinodermata", "Asteroidea"],
    ["Echinodermata", "Ophiuroidea"],
    ["Echinodermata", "Echinoidea"],
    ["Echinodermata", "Holothuroidea"],
    ["Echinodermata", "Crinoidea"],

    // =========================
    // ARTHROPODA
    // =========================
    ["Arthropoda", "Insecta"],
    ["Arthropoda", "Arachnida"],
    ["Arthropoda", "Crustacea"],
    ["Arthropoda", "Chilopoda"],
    ["Arthropoda", "Diplopoda"],

    // =========================
    // INSECTA
    // Eukarya/ Animalia/ Arthropoda/ Insecta
    ["Insecta", "Coleoptera"],
    ["Insecta", "Lepidoptera"],
    ["Insecta", "Diptera"],
    ["Insecta", "Hymenoptera"],
    ["Insecta", "Hemiptera"],
    ["Insecta", "Orthoptera"],
    ["Insecta", "Odonata"],
    ["Insecta", "Blattodea"],

    // Eukarya/ Animalia/ Arthropoda/ Insecta/ hemiptera
    ["Hemiptera", "Heteroptera"],     // percevejos, barbeiros, corós
    ["Hemiptera", "Auchenorrhyncha"], // cigarras, cigarrinhas, froghoppers
    ["Hemiptera", "Sternorrhyncha"],  // pulgões, moscas-brancas, cochonilhas
    ["Hemiptera", "Coleorrhyncha"],   // grupo raro, como Peloridiidae


    // Eukarya/ Animalia/ Arthropoda/ Insecta/ Coleoptera (besouros)
    ["Coleoptera", "Coccinellidae"],
    ["Coleoptera", "Archostemata"],
    ["Coleoptera", "Myxophaga"],
    ["Coleoptera", "Adephaga"],
    ["Coleoptera", "Polyphaga"],

    ["Polyphaga", "Staphyliniformia"],
    ["Polyphaga", "Scarabaeiformia"],
    ["Polyphaga", "Elateriformia"],
    ["Polyphaga", "Bostrichiformia"],
    ["Polyphaga", "Cucujiformia"],

    ["Coccinellidae", "Coccinella"],
    ["Coccinella", "C. septempunctata"],
    ["Coccinella", "C. undecimpunctata"],

    // Eukarya/ Animalia/ Arthropoda/ Insecta/ Lepidoptera (borboletas e mariposas)
    ["Lepidoptera", "Nymphalidae"],
    ["Lepidoptera", "Micropterigoidea"],
    ["Lepidoptera", "Agathiphagoidea"],
    ["Lepidoptera", "Heterobathmioidea"],
    ["Lepidoptera", "Eriocranioidea"],
    ["Lepidoptera", "Acanthopteroctetoidea"],
    ["Lepidoptera", "Neopseustoidea"],
    ["Lepidoptera", "Lophocoronoidea"],
    ["Lepidoptera", "Adeloidea"],
    ["Lepidoptera", "Tischerioidea"],
    ["Lepidoptera", "Palaephatoidea"],
    ["Lepidoptera", "Nepticuloidea"],
    ["Lepidoptera", "Incurvarioidea"],
    ["Lepidoptera", "Andesianidae"],
    ["Lepidoptera", "Tineoidea"],
    ["Lepidoptera", "Gracillarioidea"],
    ["Lepidoptera", "Yponomeutoidea"],
    ["Lepidoptera", "Gelechioidea"],
    ["Lepidoptera", "Zygaenoidea"],
    ["Lepidoptera", "Cossoidea"],
    ["Lepidoptera", "Tortricoidea"],
    ["Lepidoptera", "Urodoidea"],
    ["Lepidoptera", "Schreckensteinioidea"],
    ["Lepidoptera", "Epermenioidea"],
    ["Lepidoptera", "Alucitoidea"],
    ["Lepidoptera", "Pterophoroidea"],
    ["Lepidoptera", "Choreutoidea"],
    ["Lepidoptera", "Sesioidea"],
    ["Lepidoptera", "Galacticoidea"],
    ["Lepidoptera", "Hyblaeoidea"],
    ["Lepidoptera", "Thyridoidea"],
    ["Lepidoptera", "Pyraloidea"],
    ["Lepidoptera", "Mimallonoidea"],
    ["Lepidoptera", "Drepanoidea"],
    ["Lepidoptera", "Geometroidea"],
    ["Lepidoptera", "Noctuoidea"],
    ["Lepidoptera", "Bombycoidea"],
    ["Lepidoptera", "Lasiocampoidea"],

    ["Lepidoptera", "Hesperioidea"],
    ["Lepidoptera", "Papilionoidea"],
    ["Nymphalidae", "Danaus"],
    ["Danaus", "D. plexippus"],
    ["Danaus", "D. chrysippus"],

    // Eukarya/ Animalia/ Arthropoda/ Insecta/ Diptera (Moscas)
    ["Diptera", "Culicidae"],
    ["Diptera", "Muscidae"],
    ["Diptera", "Drosophilidae"],
    ["Diptera", "Calliphoridae"],
    ["Diptera", "Sarcophagidae"],
    ["Diptera", "Tipulidae"],
    ["Diptera", "Tabanidae"],
    ["Diptera", "Simuliidae"],
    ["Diptera", "Chironomidae"],
    ["Diptera", "Tephritidae"],
    ["Diptera", "Asilidae"],
    ["Diptera", "Stratiomyidae"],
    ["Diptera", "Bombyliidae"],
    ["Diptera", "Dolichopodidae"],
    ["Diptera", "Empididae"],
    ["Diptera", "Phoridae"],
    ["Diptera", "Psychodidae"],
    ["Diptera", "Sciaridae"],
    ["Diptera", "Cecidomyiidae"],
    ["Diptera", "Bibionidae"],

    // Eukarya/ Animalia/ Arthropoda/ Insecta/ Diptera/ culicidae (mosquitos e pernilongos)
    ["Culicidae", "Anophelinae"],   // inclui Anopheles
    ["Culicidae", "Culicinae"],     // inclui Aedes, Culex, etc.


    // Eukarya/ Animalia/ Arthropoda/ Insecta/ Diptera/ muscidae
    ["Muscidae", "Musca"],
    ["Musca", "M. domestica"],

    // HYMENOPTERA (abelhas, formigas)
    ["Hymenoptera", "Apidae"],
    ["Hymenoptera", "Formicidae"],


    // Apidae
    ["Apidae", "Apis"],
    ["Apidae", "Bombus"],
    ["Apidae", "Melipona"],
    ["Apidae", "Trigona"],
    ["Apidae", "Scaptotrigona"],
    ["Apidae", "Plebeia"],
    ["Apidae", "Xylocopa"],
    ["Apidae", "Eulaema"],
    ["Apidae", "Euglossa"],
    ["Apidae", "Centris"],
    ["Apidae", "Epicharis"],
    ["Apidae", "Exaerete"],
    ["Apidae", "Nomada"],
    ["Apidae", "Tetrapedia"],
    ["Apidae", "Florilegus"],

    ["Apis", "A. mellifera"],

    // Formicidae
    ["Formicidae", "Atta"],
    ["Formicidae", "Acromyrmex"],
    ["Formicidae", "Solenopsis"],
    ["Formicidae", "Camponotus"],
    ["Formicidae", "Pheidole"],
    ["Formicidae", "Linepithema"],
    ["Formicidae", "Eciton"],
    ["Formicidae", "Dorylus"],
    ["Formicidae", "Paraponera"],
    ["Formicidae", "Dinoponera"],
    ["Formicidae", "Odontomachus"],
    ["Formicidae", "Ectatomma"],
    ["Formicidae", "Cephalotes"],
    ["Formicidae", "Azteca"],
    ["Formicidae", "Tapinoma"],
    ["Formicidae", "Crematogaster"],
    ["Formicidae", "Lasius"],
    ["Formicidae", "Formica"],
    ["Formicidae", "Myrmica"],
    ["Formicidae", "Tetramorium"],

    ["Atta", "A. cephalotes"],

    // =========================
    // ARACHNIDA
    // =========================
    ["Arachnida", "Araneae"],
    ["Arachnida", "Scorpiones"],
    ["Arachnida", "Acari"],
    ["Arachnida", "Opiliones"],
    ["Arachnida", "Pseudoscorpiones"],
    ["Arachnida", "Solifugae"],
    ["Arachnida", "Amblypygi"],
    ["Arachnida", "Uropygi"],
    ["Arachnida", "Schizomida"],
    ["Arachnida", "Palpigradi"],
    ["Arachnida", "Ricinulei"],
    ["Arachnida", "Haptopoda"],

    // eukarya/ animalia/ arthropoda/ arachnida/ araneae (aranhas)
    ["Araneae", "Theraphosidae"],
    ["Araneae", "Mesothelae"],
    ["Araneae", "Mygalomorphae"],
    ["Araneae", "Araneomorphae"],

    // eukarya/ animalia/ arthropoda/ arachnida/ scorpiones (escorpiões)
    ["Scorpiones", "Buthidae"],
    ["Scorpiones", "Scorpionidae"],
    ["Scorpiones", "Bothriuridae"],
    ["Scorpiones", "Chactidae"],
    ["Scorpiones", "Diplocentridae"],
    ["Scorpiones", "Euscorpiidae"],
    ["Scorpiones", "Hemiscorpiidae"],
    ["Scorpiones", "Iuridae"],
    ["Scorpiones", "Liochelidae"],
    ["Scorpiones", "Superstitioniidae"],
    ["Scorpiones", "Urodacidae"],
    ["Scorpiones", "Vaejovidae"],

    // eukarya/ animalia/ arthropoda/ arachnida/ palpigradi
    ["Palpigradi", "Eukoeneniidae"],
    ["Palpigradi", "Prokoeneniidae"],

    // eukarya/ animalia/ arthropoda/ arachnida/ palpigradi/ eukoeneniidae
    ["Eukoeneniidae", "Eukoenenia"],
    ["Eukoeneniidae", "Allokoenenia"],
    ["Eukoeneniidae", "Leptokoenenia"],

    // eukarya/ animalia/ arthropoda/ arachnida/ palpigradi/ prokoeneniidae
    ["Prokoeneniidae", "Prokoenenia"],
    ["Prokoeneniidae", "Triadokoenenia"],

    ["Theraphosidae", "Grammostola"],
    ["Grammostola", "G. rosea"],

    ["Buthidae", "Tityus"],
    ["Tityus", "T. serrulatus"],
    ["Tityus", "T. bahiensis"],

    // ACARI (ácaros e carrapatos)
    ["Acari", "Ixodidae"],
    ["Ixodidae", "Amblyomma"],
    ["Amblyomma", "A. cajennense"],

    // =========================
    // CRUSTACEA
    // =========================
    ["Crustacea", "Decapoda"],
    ["Crustacea", "Isopoda"],
    ["Crustacea", "Malacostraca"],
    ["Crustacea", "Branchiopoda"],
    ["Crustacea", "Maxillopoda"],
    ["Crustacea", "Ostracoda"],
    ["Crustacea", "Remipedia"],
    ["Crustacea", "Cephalocarida"],

    // DECAPODA (caranguejos, camarões)
    ["Decapoda", "Portunidae"],
    ["Portunidae", "Callinectes"],
    ["Callinectes", "C. sapidus"],

    // ISOPODA
    ["Isopoda", "Armadillidiidae"],
    ["Armadillidiidae", "Armadillidium"],
    ["Armadillidium", "A. vulgare"],

    // eukarya/ animalia/ arthropoda/ chilopoda (lacraias)
    ["Chilopoda", "Scolopendromorpha"],
    ["Chilopoda", "Scutigeromorpha"],
    ["Chilopoda", "Lithobiomorpha"],
    ["Chilopoda", "Geophilomorpha"],
    ["Chilopoda", "Craterostigmomorpha"],

    ["Scolopendromorpha", "Scolopendridae"],
    ["Scolopendridae", "Scolopendra"],
    ["Scolopendra", "S. gigantea"],

    // =========================
    // DIPLOPODA (piolhos-de-cobra)
    // =========================
    ["Diplopoda", "Julida"],
    ["Julida", "Julidae"],
    ["Julidae", "Julus"],
    ["Julus", "J. terrestris"],

    // Chordata
    ["Chordata", "Mammalia"],
    ["Chordata", "Aves"],
    ["Chordata", "Reptilia"],
    ["Chordata", "Amphibia"],
    ["Chordata", "Actinopterygii"],
    ["Chordata", "Chondrichthyes"],
    ["Chordata", "Sarcopterygii"],
    ["Chordata", "Myxini"],
    ["Chordata", "Petromyzontida"],

    // eukarya/ animalia/ chordata/ myxini
    ["Myxini", "Myxinidae"],     // única família viva

    // eukarya/ animalia/ chordata/ myxini/ myxinidae
    ["Myxinidae", "Eptatretus"], // gênero de peixes-bruxas
    ["Myxinidae", "Myxine"],     // outro gênero de peixes-bruxas


    // Eukarya/ Animalia/ Chordata/ Reptilia
    ["Reptilia", "Testudines"],
    ["Reptilia", "Squamata"],
    ["Reptilia", "Crocodylia"],
    ["Reptilia", "Lepidosauria"],
    ["Reptilia", "Saurischia"],

    // Eukarya/ Animalia/ Chordata/ Reptilia/ saurichia
    ["Saurischia", "Sauropodomorpha"],   // dinossauros pescoçudos, herbívoros gigantes
    ["Saurischia", "Theropoda"],         // dinossauros bípedes, carnívoros e aves


    // Eukarya/ Animalia/ Chordata/ Reptilia/ saurichia/ theropoda
    ["Theropoda", "Tyrannosauridae"],
    ["Theropoda", "Herrerasauridae"],       // grupo basal
    ["Theropoda", "Ceratosauria"],          // inclui Carnotaurus
    ["Theropoda", "Megalosauridae"],        // predadores jurássicos
    ["Theropoda", "Allosauridae"],          // inclui Allosaurus
    ["Theropoda", "Carcharodontosauridae"], // predadores gigantes como Giganotosaurus
    ["Theropoda", "Spinosauridae"],         // inclui Spinosaurus
    ["Theropoda", "Ornithomimidae"],        // "dinossauros avestruz"
    ["Theropoda", "Troodontidae"],          // pequenos terópodes inteligentes
    ["Theropoda", "Dromaeosauridae"],       // inclui Velociraptor e Deinonychus
    ["Theropoda", "Avialae"],               // aves e seus ancestrais imediatos

    // Eukarya/ Animalia/ Chordata/ Reptilia/ saurichia/ theropoda/ tyrannosauridae
    ["Tyrannosauridae", "Tyrannosaurus"],



    ["Lepidosauria", "Rhynchocephalia"],


    // Eukarya/ Animalia/ Chordata/ Reptilia/ Lepidosauria/ rhynchocephalia
    ["Rhynchocephalia", "Sphenodontidae"],
    ["Rhynchocephalia", "Pleurosauridae"],
    ["Rhynchocephalia", "Eilenodontidae"],
    ["Rhynchocephalia", "Opisthodontidae"],
    ["Rhynchocephalia", "Homoeosauridae"],
    ["Rhynchocephalia", "Planocephalosauridae"],


    // Eukarya/ Animalia/ Chordata/ Reptilia/ Lepidosauria/ rhynchocephalia/ phenodontida
    ["Sphenodontidae", "S. guntheri"],
    ["Sphenodontidae", "S. punctatus"],


    // Eukarya/ Animalia/ Chordata/ Reptilia/ Testudines (tartarugas, cágados e jabutis)
    ["Testudines", "Cheloniidae"],
    ["Testudines", "Dermochelyidae"],
    ["Testudines", "Testudinidae"],
    ["Testudines", "Emydidae"],
    ["Testudines", "Geoemydidae"],
    ["Testudines", "Chelydridae"],
    ["Testudines", "Kinosternidae"],
    ["Testudines", "Platysternidae"],
    ["Testudines", "Trionychidae"],
    ["Testudines", "Carettochelyidae"],
    ["Testudines", "Pelomedusidae"],
    ["Testudines", "Podocnemididae"],
    ["Testudines", "Chelidae"],

    // Eukarya/ Animalia/ Chordata/ Reptilia/ Squamata (lagartos, serpentes e anfisbenas)
    ["Squamata", "Colubridae"],
    ["Squamata", "Viperidae"],
    ["Squamata", "Elapidae"],
    ["Squamata", "Boidae"],
    ["Squamata", "Pythonidae"],
    ["Squamata", "Dipsadidae"],
    ["Squamata", "Leptotyphlopidae"],
    ["Squamata", "Typhlopidae"],
    ["Squamata", "Amphisbaenidae"],
    ["Squamata", "Agamidae"],
    ["Squamata", "Iguanidae"],
    ["Squamata", "Teiidae"],
    ["Squamata", "Gymnophthalmidae"],
    ["Squamata", "Scincidae"],
    ["Squamata", "Gekkonidae"],
    ["Squamata", "Phyllodactylidae"],
    ["Squamata", "Sphaerodactylidae"],
    ["Squamata", "Varanidae"],
    ["Squamata", "Helodermatidae"],
    ["Squamata", "Chamaeleonidae"],

    // Eukarya/ Animalia/ Chordata/ Reptilia/ Crocodylia (crocodilos, jacarés e gaviais)
    ["Crocodylia", "Crocodylidae"],
    ["Crocodylia", "Alligatoridae"],
    ["Crocodylia", "Gavialidae"],

    // Eukarya/ Animalia/ Chordata/ Amphibia
    ["Amphibia", "Anura"],
    ["Amphibia", "Caudata"],
    ["Amphibia", "Gymnophiona"],

    // Eukarya/ Animalia/ Chordata/ Amphibia/ Caudata
    ["Caudata", "Ambystomatidae"],
    ["Caudata", "Amphiumidae"],
    ["Caudata", "Cryptobranchidae"],
    ["Caudata", "Hynobiidae"],
    ["Caudata", "Plethodontidae"],
    ["Caudata", "Proteidae"],
    ["Caudata", "Rhyacotritonidae"],
    ["Caudata", "Salamandridae"],
    ["Caudata", "Sirenidae"],


    // Eukarya/ Animalia/ Chordata/ Amphibia/ Anura (sapos, rãs e pererecas)
    ["Anura", "Bufonidae"],
    ["Anura", "Hylidae"],
    ["Anura", "Ranidae"],
    ["Anura", "Leptodactylidae"],
    ["Anura", "Dendrobatidae"],
    ["Anura", "Microhylidae"],
    ["Anura", "Ceratophryidae"],
    ["Anura", "Pipidae"],
    ["Anura", "Aromobatidae"],
    ["Anura", "Eleutherodactylidae"],
    ["Anura", "Craugastoridae"],
    ["Anura", "Hemiphractidae"],
    ["Anura", "Phyllomedusidae"],
    ["Anura", "Pelodryadidae"],
    ["Anura", "Hyperoliidae"],
    ["Anura", "Mantellidae"],
    ["Anura", "Rhinodermatidae"],
    ["Anura", "Scaphiopodidae"],
    ["Anura", "Megophryidae"],
    ["Anura", "Bombinatoridae"],

    // Mollusca
    ["Mollusca", "Aplacophora"],
    ["Mollusca", "Polyplacophora"],
    ["Mollusca", "Monoplacophora"],
    ["Mollusca", "Gastropoda"],
    ["Mollusca", "Bivalvia"],
    ["Mollusca", "Cephalopoda"],
    ["Mollusca", "Scaphopoda"],

    // Eukarya/ Animalia/ Chordata/ Aves
    ["Aves", "Passeriformes"],
    ["Aves", "Accipitriformes"],
    ["Aves", "Falconiformes"],
    ["Aves", "Strigiformes"],
    ["Aves", "Psittaciformes"],
    ["Aves", "Piciformes"],
    ["Aves", "Anseriformes"],
    ["Aves", "Galliformes"],
    ["Aves", "Columbiformes"],
    ["Aves", "Apodiformes"],
    ["Aves", "Charadriiformes"],
    ["Aves", "Pelecaniformes"],
    ["Aves", "Sphenisciformes"],
    ["Aves", "Gruiformes"],
    ["Aves", "Cuculiformes"],
    ["Aves", "Struthioniformes"],
    ["Aves", "Tinamiformes"],
    ["Aves", "Coraciiformes"],
    ["Aves", "Bucerotiformes"],
    ["Aves", "Caprimulgiformes"],
    ["Aves", "Podicipediformes"],
    ["Aves", "Procellariiformes"],
    ["Aves", "Gaviiformes"],
    ["Aves", "Suliformes"],
    ["Aves", "Ciconiiformes"],
    ["Aves", "Phoenicopteriformes"],
    ["Aves", "Coliiformes"],
    ["Aves", "Musophagiformes"],
    ["Aves", "Opisthocomiformes"],
    ["Aves", "Pteroclidiformes"],
    ["Aves", "Mesitornithiformes"],
    ["Aves", "Eurypygiformes"],
    ["Aves", "Leptosomiformes"],

    // PASSERIFORMES
    ["Passeriformes", "Turdidae"],
    ["Passeriformes", "Thraupidae"],

    ["Turdidae", "Turdus"],
    ["Turdus", "T. rufiventris"],
    ["Turdus", "T. merula"],

    ["Thraupidae", "Tangara"],
    ["Tangara", "T. seledon"],
    ["Tangara", "T. sayaca"],

    // ACCIPITRIFORMES
    ["Accipitriformes", "Accipitridae"],
    ["Accipitridae", "Buteo"],
    ["Buteo", "B. jamaicensis"],
    ["Buteo", "B. buteo"],

    // FALCONIFORMES
    ["Falconiformes", "Falconidae"],

    ["Falconidae", "Falco"],
    ["Falconidae", "Caracara"],
    ["Falconidae", "Milvago"],
    ["Falconidae", "Daptrius"],
    ["Falconidae", "Phalcoboenus"],
    ["Falconidae", "Herpetotheres"],
    ["Falconidae", "Micrastur"],
    ["Falconidae", "Spiziapteryx"],
    ["Falconidae", "Ibycter"],
    ["Falconidae", "Polyborus"],

    ["Falco", "F. peregrinus"],
    ["Falco", "F. sparverius"],

    // STRIGIFORMES
    ["Strigiformes", "Strigidae"],
    ["Strigidae", "Bubo"],
    ["Bubo", "B. bubo"],
    ["Bubo", "B. virginianus"],

    // PSITTACIFORMES
    ["Psittaciformes", "Psittacidae"],
    ["Psittacidae", "Ara"],
    ["Ara", "A. ararauna"],
    ["Ara", "A. macao"],

    // PICIFORMES
    ["Piciformes", "Ramphastidae"],
    ["Ramphastidae", "Ramphastos"],
    ["Ramphastos", "R. toco"],
    ["Ramphastos", "R. dicolorus"],

    // ANSERIFORMES
    ["Anseriformes", "Anatidae"],
    ["Anatidae", "Anas"],
    ["Anas", "A. platyrhynchos"],
    ["Anas", "A. acuta"],

    // GALLIFORMES
    ["Galliformes", "Phasianidae"],
    ["Galliformes", "Numididae"],
    ["Galliformes", "Odontophoridae"],

    ["Phasianidae", "Gallus"],
    ["Gallus", "G. gallus"],
    ["Gallus", "G. gallus domesticus"],

    // COLUMBIFORMES
    ["Columbiformes", "Columbidae"],
    ["Columbidae", "Columba"],
    ["Columba", "C. livia"],
    ["Columba", "C. palumbus"],

    // APODIFORMES
    ["Apodiformes", "Trochilidae"],
    ["Trochilidae", "Archilochus"],
    ["Archilochus", "A. colubris"],
    ["Archilochus", "A. alexandri"],

    // SPHENISCIFORMES
    ["Sphenisciformes", "Spheniscidae"],
    ["Spheniscidae", "Aptenodytes"],
    ["Aptenodytes", "A. forsteri"],
    ["Aptenodytes", "A. patagonicus"],

    // Eukarya/ Animalia/ Chordata/ Mammalia
    ["Mammalia", "Primates"],
    ["Mammalia", "Carnivora"],
    ["Mammalia", "Rodentia"],
    ["Mammalia", "Chiroptera"],
    ["Mammalia", "Cetacea"],
    ["Mammalia", "Artiodactyla"],
    ["Mammalia", "Perissodactyla"],
    ["Mammalia", "Lagomorpha"],
    ["Mammalia", "Didelphimorphia"],
    ["Mammalia", "Diprotodontia"],
    ["Mammalia", "Monotremata"],

    // =========================
    // RODENTIA
    // =========================
    ["Rodentia", "Muridae"],
    ["Rodentia", "Sciuridae"],
    ["Rodentia", "Anomaluromorpha"],
    ["Rodentia", "Castorimorpha"],
    ["Rodentia", "Hystricomorpha"],
    ["Rodentia", "Myomorpha"],
    ["Rodentia", "Sciuromorpha"],

    ["Muridae", "Mus"],
    ["Muridae", "Rattus"],

    ["Mus", "M. musculus"],
    ["Mus", "M. domesticus"],

    ["Rattus", "R. norvegicus"],
    ["Rattus", "R. rattus"],

    ["Sciuridae", "Sciurus"],

    // eukarya/ animalia/ chordata/ mammalia/ rodentia/ sciuridae/ ciurus
    ["Sciurus", "S. aberti"],
    ["Sciurus", "S. niger"],
    ["Sciurus", "S. vulgaris"],
    ["Sciurus", "S. carolinensis"],
    ["Sciurus", "S. granatensis"],
    ["Sciurus", "S. lis"],
    ["Sciurus", "S. ignitus"],
    ["Sciurus", "S. anomalus"],

    // =========================
    // CHIROPTERA
    // =========================
    ["Chiroptera", "Pteropodidae"],
    ["Chiroptera", "Vespertilionidae"],

    ["Pteropodidae", "Pteropus"],
    ["Pteropus", "P. vampyrus"],
    ["Pteropus", "P. giganteus"],

    ["Vespertilionidae", "Myotis"],
    ["Myotis", "M. lucifugus"],
    ["Myotis", "M. myotis"],

    // =========================
    // CETACEA
    // =========================
    ["Cetacea", "Balaenopteridae"],
    ["Cetacea", "Delphinidae"],

    ["Balaenopteridae", "Balaenoptera"],
    ["Balaenoptera", "B. musculus"],
    ["Balaenoptera", "B. physalus"],

    ["Delphinidae", "Delphinus"],
    ["Delphinidae", "Tursiops"],

    ["Delphinus", "D. delphis"],
    ["Tursiops", "T. truncatus"],

    // =========================
    // ARTIODACTYLA
    // =========================
    ["Artiodactyla", "Bovidae"],
    ["Artiodactyla", "Suidae"],

    ["Bovidae", "Bos"],
    ["Bovidae", "Capra"],

    ["Bos", "B. taurus"],
    ["Bos", "B. indicus"],

    ["Capra", "C. hircus"],
    ["Capra", "C. ibex"],

    ["Suidae", "Sus"],
    ["Sus", "S. scrofa"],

    // =========================
    // PERISSODACTYLA
    // =========================
    ["Perissodactyla", "Equidae"],
    ["Perissodactyla", "Rhinocerotidae"],

    ["Equidae", "Equus"],
    ["Equus", "E. ferus"],
    ["Equus", "E. zebra"],

    ["Rhinocerotidae", "Rhinoceros"],
    ["Rhinoceros", "R. unicornis"],

    // =========================
    // LAGOMORPHA
    // =========================
    ["Lagomorpha", "Leporidae"],

    ["Leporidae", "Lepus"],
    ["Leporidae", "Oryctolagus"],

    ["Lepus", "L. europaeus"],
    ["Oryctolagus", "O. cuniculus"],

    // =========================
    // DIDELPHIMORPHIA (marsupiais)
    // =========================
    ["Didelphimorphia", "Didelphidae"],

    ["Didelphidae", "Didelphis"],
    ["Didelphis", "D. marsupialis"],
    ["Didelphis", "D. virginiana"],

    // =========================
    // DIPROTODONTIA (marsupiais)
    // =========================
    ["Diprotodontia", "Macropodidae"],

    ["Macropodidae", "Macropus"],
    ["Macropus", "M. rufus"],
    ["Macropus", "M. giganteus"],

    // =========================
    // MONOTREMATA (monotremados)
    // =========================
    ["Monotremata", "Ornithorhynchidae"],
    ["Monotremata", "Tachyglossidae"],

    ["Ornithorhynchidae", "Ornithorhynchus"],
    ["Ornithorhynchus", "O. anatinus"],

    ["Tachyglossidae", "Tachyglossus"],
    ["Tachyglossus", "T. aculeatus"],

    // =========================
    // PRIMATES
    // =========================
    ["Primates", "Hominidae"],
    ["Primates", "Cebidae"],
    ["Primates", "Callitrichidae"],
    ["Primates", "Atelidae"],
    ["Primates", "Cercopithecidae"],

    // Hominidae
    ["Hominidae", "Homo"],
    ["Hominidae", "Pan"],
    ["Hominidae", "Gorilla"],

    ["Homo", "H. sapiens"],
    ["Homo", "H. neanderthalensis"],

    ["Pan", "P. troglodytes"],
    ["Pan", "P. paniscus"],

    ["Gorilla", "G. gorilla"],
    ["Gorilla", "G. beringei"],

    // Cebidae
    ["Cebidae", "Cebus"],
    ["Cebidae", "Sapajus"],

    ["Cebus", "C. capucinus"],
    ["Cebus", "C. albifrons"],
    ["Cebus", "C. apella"],

    ["Sapajus", "S. apella"],
    ["Sapajus", "S. libidinosus"],

    // Callitrichidae
    ["Callitrichidae", "Callithrix"],
    ["Callitrichidae", "Saguinus"],

    ["Callithrix", "C. jacchus"],
    ["Callithrix", "C. penicillata"],

    ["Saguinus", "S. oedipus"],
    ["Saguinus", "S. mystax"],

    // Atelidae
    ["Atelidae", "Ateles"],
    ["Atelidae", "Alouatta"],

    ["Ateles", "A. geoffroyi"],
    ["Ateles", "A. paniscus"],

    ["Alouatta", "A. guariba"],
    ["Alouatta", "A. caraya"],

    // Cercopithecidae
    ["Cercopithecidae", "Macaca"],
    ["Cercopithecidae", "Papio"],

    ["Macaca", "M. mulatta"],
    ["Macaca", "M. fascicularis"],

    ["Papio", "P. anubis"],
    ["Papio", "P. hamadryas"],

    // =========================
    // CARNIVORA
    // =========================
    ["Carnivora", "Felidae"],
    ["Carnivora", "Canidae"],
    ["Carnivora", "Ursidae"],
    ["Carnivora", "Mustelidae"],
    ["Carnivora", "Otariidae"],
    ["Carnivora", "Phocidae"],

    // Felidae
    ["Felidae", "Panthera"],
    ["Felidae", "Felis"],
    ["Felidae", "Puma"],
    ["Felidae", "Acinonyx"],
    ["Felidae", "Leopardus"],
    ["Felidae", "Lynx"],
    ["Felidae", "Caracal"],
    ["Felidae", "Prionailurus"],
    ["Felidae", "Catopuma"],
    ["Felidae", "Herpailurus"],
    ["Felidae", "Neofelis"],
    ["Felidae", "Otocolobus"],

    ["Panthera", "P. leo"],
    ["Panthera", "P. tigris"],
    ["Panthera", "P. onca"],

    ["Felis", "F. catus"],
    ["Felis", "F. silvestris"],

    // eukarya/ animalia/ chordata/ mammalia/ carnivora/ canidae
    ["Canidae", "Canis"],        // cães, lobos, chacais
    ["Canidae", "Vulpes"],       // raposas
    ["Canidae", "Lycaon"],       // cão-selvagem-africano
    ["Canidae", "Cuon"],         // cão-vermelho (dhole)
    ["Canidae", "Urocyon"],      // raposa-cinzenta
    ["Canidae", "Otocyon"],      // raposa-orelhuda
    ["Canidae", "Chrysocyon"],   // lobo-guará
    ["Canidae", "Cerdocyon"],    // cachorro-do-mato
    ["Canidae", "Speothos"],     // cachorro-vinagre
    ["Canidae", "Nyctereutes"],  // cão-guaxinim


    ["Canis", "C. lupus"],
    ["Canis", "C. familiaris"],
    ["Canis", "C. latrans"],

    ["Vulpes", "V. vulpes"],
    ["Vulpes", "V. zerda"],

    // Ursidae
    ["Ursidae", "Ursus"],
    ["Ursidae", "Ailuropoda"],

    ["Ursus", "U. arctos"],
    ["Ursus", "U. maritimus"],

    ["Ailuropoda", "A. melanoleuca"],

    // Mustelidae
    ["Mustelidae", "Mustela"],
    ["Mustelidae", "Lontra"],

    ["Mustela", "M. putorius"],
    ["Mustela", "M. erminea"],

    ["Lontra", "L. longicaudis"],
    ["Lontra", "L. canadensis"],

    // Otariidae
    ["Otariidae", "Otaria"],
    ["Otariidae", "Zalophus"],

    ["Otaria", "O. flavescens"],

    ["Zalophus", "Z. californianus"],

    // Phocidae
    ["Phocidae", "Phoca"],
    ["Phocidae", "Mirounga"],

    ["Phoca", "P. vitulina"],

    ["Mirounga", "M. leonina"],
    ["Mirounga", "M. angustirostris"],

    // -------- PLANTAE --------
    ["Plantae", "Angiospermae"],
    ["Plantae", "Bryophyta"],
    ["Plantae", "Chlorophyta"],
    ["Plantae", "Charophyta"],
    ["Plantae", "Marchantiophyta"],
    ["Plantae", "Anthocerotophyta"],
    ["Plantae", "Lycopodiophyta"],
    ["Plantae", "Monilophyta"],
    ["Plantae", "Cycadophyta"],
    ["Plantae", "Ginkgophyta"],
    ["Plantae", "Gnetophyta"],
    ["Plantae", "Pinophyta"],

    // eukarya/ plantae/ angiospermae
    ["Angiospermae", "Eudicotyledoneae"],
    ["Angiospermae", "Monocotyledoneae"],

    // eukarya/ plantae/ bryophyta
    ["Bryophyta", "Bryopsida"],       // musgos verdadeiros
    ["Bryophyta", "Sphagnopsida"],    // esfagnos
    ["Bryophyta", "Andreaeopsida"],   // musgos de granito

    // eukarya/ plantae/ chlorophyta
    ["Chlorophyta", "Chlorophyceae"],
    ["Chlorophyta", "Ulvophyceae"],
    ["Chlorophyta", "Trebouxiophyceae"],

    // eukarya/ plantae/ charophyta
    ["Charophyta", "Charophyceae"],   // carófitas (algas verdes próximas das plantas terrestres)

    // eukarya/ plantae/ marchantiophyta
    ["Marchantiophyta", "Marchantiopsida"],   // hepáticas complexas
    ["Marchantiophyta", "Jungermanniopsida"], // hepáticas folhosas
    ["Marchantiophyta", "Haplomitriales"],    // grupo basal

    // eukarya/ plantae/ anthocerotophyta
    ["Anthocerotophyta", "Anthocerotopsida"], // antóceros

    // eukarya/ plantae/ lycopodiophyta
    ["Lycopodiophyta", "Lycopodiopsida"],     // licopódios
    ["Lycopodiophyta", "Isoetopsida"],        // quillworts
    ["Lycopodiophyta", "Selaginellopsida"],   // selaginelas

    // eukarya/ plantae/ monilophyta
    ["Monilophyta", "Polypodiopsida"],        // samambaias
    ["Monilophyta", "Equisetopsida"],         // cavalinhas
    ["Monilophyta", "Psilotopsida"],          // psilotas
    ["Monilophyta", "Marattiopsida"],         // samambaias primitivas

    // eukarya/ plantae/ cycadophyta
    ["Cycadophyta", "Cycadaceae"],
    ["Cycadophyta", "Zamiaceae"],
    ["Cycadophyta", "Stangeriaceae"],

    // eukarya/ plantae/ ginkgophyta
    ["Ginkgophyta", "Ginkgoaceae"],          // apenas Ginkgo biloba

    // eukarya/ plantae/ gnetophyta
    ["Gnetophyta", "Gnetaceae"],
    ["Gnetophyta", "Ephedraceae"],
    ["Gnetophyta", "Welwitschiaceae"],

    // eukarya/ plantae/ pinophyta
    ["Pinophyta", "Pinaceae"],        // pinheiros, abetos
    ["Pinophyta", "Cupressaceae"],    // ciprestes
    ["Pinophyta", "Araucariaceae"],   // araucárias
    ["Pinophyta", "Podocarpaceae"],   // podocarpos
    ["Pinophyta", "Taxaceae"],        // teixos
    ["Pinophyta", "Sciadopityaceae"], // pinheiro-guarda-chuva
    ["Pinophyta", "Cephalotaxaceae"], // teixos-cabeça

    ["Eudicotyledoneae", "Rosales"],
    ["Rosales", "Rosaceae"],
    ["Rosaceae", "Rosa"],
    ["Rosa", "R. rubiginosa"],
    ["Rosa", "R. canina"],

    ["Monocotyledoneae", "Poales"],
    ["Poales", "Poaceae"],
    ["Poaceae", "Zea"],
    ["Zea", "Z. mays"],
    ["Zea", "Z. diploperennis"],

    // -------- FUNGI --------
    ["Fungi", "Ascomycota"],
    ["Fungi", "Basidiomycota"],
    ["Fungi", "Chytridiomycota"],
    ["Fungi", "Zygomycota"],
    ["Fungi", "Glomeromycota"],
    ["Fungi", "Microsporidia"],

    ["Ascomycota", "Saccharomycetes"],
    ["Ascomycota", "Eurotiomycetes"],

    ["Saccharomycetes", "Saccharomycetales"],
    ["Saccharomycetales", "Saccharomycetaceae"],
    ["Saccharomycetaceae", "Saccharomyces"],
    ["Saccharomyces", "S. cerevisiae"],
    ["Saccharomyces", "S. boulardii"],

    ["Eurotiomycetes", "Eurotiales"],
    ["Eurotiales", "Trichocomaceae"],
    ["Trichocomaceae", "Aspergillus"],
    ["Aspergillus", "A. niger"],
    ["Aspergillus", "A. flavus"],

    ["Basidiomycota", "Agaricomycetes"],
    ["Agaricomycetes", "Agaricales"],
    ["Agaricales", "Agaricaceae"],
    ["Agaricaceae", "Agaricus"],
    ["Agaricus", "A. bisporus"],
    ["Agaricus", "A. campestris"],

    // -------- PROTISTA --------
    ["Protista", "Amoebozoa"],
    ["Protista", "Euglenozoa"],
    ["Protista", "Alveolata"],
    ["Protista", "Stramenopiles"],
    ["Protista", "Rhizaria"],
    ["Protista", "Excavata"],

    ["Amoebozoa", "Tubulinea"],
    ["Tubulinea", "Euamoebida"],
    ["Euamoebida", "Amoebidae"],
    ["Amoebidae", "Amoeba"],
    ["Amoeba", "A. proteus"],
    ["Amoeba", "A. dubia"],

    ["Euglenozoa", "Euglenida"],
    ["Euglenida", "Euglenales"],
    ["Euglenales", "Euglenaceae"],
    ["Euglenaceae", "Euglena"],
    ["Euglena", "E. gracilis"],
    ["Euglena", "E. viridis"],

];