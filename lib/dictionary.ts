export const DICTIONARY = {
    common: {
        demoCta: "Parla con un esperto",
        expertCta: "Parla con un esperto",
        onePagerCta: "Scarica One-Pager",
        contactCta: "Richiedi un'assessment",
        learnMore: "Scopri di più",
        backToHome: "Torna alla Home",
        sending: "Invio in corso...",
    },
    navigation: {
        soluzioni: "Soluzioni",
        nautica: "Nautica",
        logistica: "Logistica",
        ferroviario: "Ferroviario",
        smartParking: "Smart City",
        tecnologia: "Tecnologia",
        risorse: "Risorse",
        azienda: "Chi Siamo",
        contatti: "Contatti",
    },
    home: {
        hero: {
            h1: "Localizza i tuoi asset, ovunque essi siano",
            h1Token: "Localizza",
            subheadline: "Con Ulisses hai il controllo totale: una soluzione completa di rete, sensori, dashboard e API pronta per gli ambienti più complessi, indoor e outdoor.",
            subheadlineToken: "dashboard, rete, sensori e API",
            proofs: [
                "Brevetto tecnologico",
                "Planning & commissioning integrati",
                "Integrazioni IT/OT con SLA end-to-end"
            ],
            expertLink: "Parla con un esperto"
        },
        technologyPillars: {
            title: "I pilastri della nostra tecnologia brevettata",
            cards: [
                {
                    title: "Scalabilità Unica",
                    subtitle: "Servizio affidabile e garantito su +100,000 dispositivi connessi senza interruzioni",
                    icon: "Scale"
                },
                {
                    title: "Precisione Estrema",
                    subtitle: "Grazie alla nostra tecnologia proprietaria, garantiamo un'accuratezza <10cm",
                    icon: "Target"
                },
                {
                    title: "Wireless",
                    subtitle: "I nostri devices sono alimentati a batteria e funzionano fino a 5 anni senza manutenzione",
                    icon: "BatteryCharging"
                }
            ]
        },
        partners: {
            title: "I Nostri Partner"
        },
        selector: {
            title: "In quale scenario ti serve Ulisses?",
            subtitle: "Risoluzioni operative, risultati attesi e percorso di progetto.",
            cards: {
                logistica: {
                    title: "Logistica & Operations",
                    description: "Riduci i tempi di ricerca dei tuoi asset, errori operativi, e rischi in magazzino.",
                    cta: "Scopri Logistica",
                    resolutions: ["Ricerca asset", "Geofencing", "KPI flussi"]
                },
                ferroviario: {
                    title: "Ferroviario",
                    description: "Controllo materiali in depositi, con integrazione ai workflow di manutenzione.",
                    cta: "Scopri Ferroviario",
                    resolutions: ["Disponibilità attrezzature", "Storico eventi", "CMMS"]
                },
                parking: {
                    title: "Smart City",
                    description: "Dati di occupazione e eventi operativi, rollout scalabile e OPEX con rete privata.",
                    cta: "Scopri Smart City",
                    resolutions: ["Occupancy", "Durata sosta", "Qualità dato"]
                }
            }
        },
        why: {
            title: "Perché Ulisses è diversa",
            intro: "Oltre il singolo sensore: un sistema completo che porta dati certi dal campo alle decisioni, integrandosi via API con i tuoi sistemi (WMS/CMMS/ITS/BI).",
            columns: [
                {
                    title: "Software gestionali",
                    problem: "Organizzano processi, ma restano ciechi sul mondo fisico.",
                    solution: "Ulisses porta la verità del campo direttamente nei tuoi sistemi, migliorando efficienza e precisione."
                },
                {
                    title: "Tracking tradizionale",
                    problem: "La demo funziona, ma fatica in ambienti reali e ritorna dati inaffidabili.",
                    solution: "Ulisses è ingegneria industriale nata per vincere interferenze e scalare a centinaia di migliaia di sensori senza fatica."
                },
                {
                    title: "Soluzioni frammentate",
                    problem: "Un puzzle di vendor diversi è un incubo di manutenzione.",
                    solution: "Ulisses è regia unica. Dalla survey alle API, una soluzione completa per tutto il ciclo di vita del dato."
                }
            ],
            closure: "Ulisses è modulare: piattaforma opzionale e dato integrabile via API, con metodo e ownership chiara. Unifica field, rete e dato: puoi usare la nostra piattaforma oppure integrare via API, riducendo complessità e tempi di messa a terra.",
            quote: "“Non siamo un prototipo, non siamo un PoC eterno. Siamo operativi nel mondo reale.”"
        },
        howItWorks: {
            title: "Come funziona, in pratica",
            subtitle: "Dalla rilevazione sul campo al dato operativo: un flusso semplice, industrializzabile, integrabile.",
            steps: [
                { title: "Field", text: "Sensori/tag/anchor rilevano eventi e presenza" },
                { title: "Rete", text: "La connettività porta i dati in modo robusto" },
                { title: "Piattaforma", text: "Normalizza, storicizza, abilita dashboard e regole" },
                { title: "Integrazioni", text: "Collega sistemi esistenti (WMS/MES/CMMS/ITS)" }
            ],
            deployment: {
                label: "Scegli il tuo deployment",
                title: "Deployment flessibile",
                text: "Cloud / On-prem / Edge: scegli la modalità più adatta a security, latenza e requisiti del settore.",
                tokens: "Cloud / On-prem / Edge"
            }
        },
        app: {
            label: "Dashboard",
            title: "La Dashboard: cosa vedi e cosa puoi fare",
            intro: "Non solo “tracking”: trasformiamo segnali ed eventi in decisioni operative.",
            features: [
                { title: "Monitori", text: "Posizione, eventi, occupancy, health del sistema" },
                { title: "Analizzi", text: "Storico, trend, anomalie, performance per area/sito" },
                { title: "Agisci", text: "Con alert, regole, report, integrazioni ai workflow" }
            ],
            cta: "Guarda esempi di dashboard"
        },
        proof: {
            title: "Pronta per la produzione",
            subtitle: "Ulisses è progettata per funzionare con continuità in contesti complessi. Non solo tecnologia: un metodo completo per ridurre rischi, tempi e costi di progetto.",
            items: [
                { title: "Site Survey & Design", text: "Partiamo dai vincoli reali (copertura, interferenze, layout, processi)." },
                { title: "Commissioning", text: "Validiamo sul campo qualità del dato e performance prima del go-live." },
                { title: "Integrazioni IT/OT via API", text: "Portiamo eventi e dati nei sistemi già in uso (WMS/CMMS/ITS/BI)." },
                { title: "SLA & Supporto", text: "Osservabilità, alert, report qualità dato e continuità operativa." }
            ],
            cta: "Approfondisci il Metodo",
            closure: "Il risultato è una soluzione adottabile: dati affidabili, governance chiara e rollout scalabile."
        },
        cta: {
            title: "Valutiamo insieme la fattibilità del tuo scenario",
            formMicrocopy: "Compila 6 campi: ci aiuta a darti una risposta utile, non generica.",
            bullets: [
                "Analisi gratuita dello scenario operativo",
                "Proposta di architettura (Cloud/Edge/On-prem)",
                "Piano di roll-out e stima del ROI"
            ],
            scenariosTitle: "Scenario",
            objectivesTitle: "Obiettivo principale",
            objectives: [
                "Ridurre tempi di ricerca asset",
                "Geofencing / alert",
                "Occupancy stalli",
                "Durata / overstay",
                "Tracciabilità materiali/attrezzature",
                "Integrazione con sistemi esistenti",
                "Altro"
            ],
            timingTitle: "Timing",
            timing: [
                "0–3 mesi",
                "3–6 mesi",
                "6–12 mesi",
                "Esplorazione"
            ],
            contactLabel: "Email Aziendale",
            phoneLabel: "Telefono (opzionale)",
            sizeLabel: "Dimensione scenario (# asset / # siti)",
            sizePlaceholder: "es: 200 carrelli, 3 magazzini",
            privacyNotice: "Nessuna spam. Usiamo i dati solo per rispondere alla tua richiesta operativa.",
            button: "Parla con un esperto Ulisses",
            success: "Successo!",
            error: "Errore durante l'invio.",
            networkError: "Si è verificato un errore di rete."
        }
    },
    solutions: {
        hero: {
            h1: "Soluzioni per Logistica, Ferroviario e Smart City",
            intro: "Ulisses porta dati affidabili dal campo alle decisioni nei contesti dove contano continuità, qualità del dato e integrazione con sistemi già esistenti."
        },
        method: {
            title: "Dal primo sito al rollout: un percorso chiaro",
            intro: "Una soluzione funziona davvero quando qualità del dato e continuità sono governate. Per questo seguiamo un metodo che riduce rischi, tempi e sorprese di progetto.",
            steps: [
                { title: "Obiettivi e KPI", text: "Allineiamo obiettivo operativo, KPI e vincoli (processo, aree, utenti, requisiti)." },
                { title: "Site survey & design", text: "Disegniamo copertura e architettura in base a layout, interferenze e punti critici." },
                { title: "Installazione & messa a servizio", text: "Mettiamo in servizio e validiamo sul campo: qualità del dato, eventi, performance." },
                { title: "Dashboard o integrazione nei sistemi già in uso", text: "Piattaforma Ulisses quando utile, oppure eventi e dati nelle piattaforme esistenti via API (WMS/CMMS/ITS/BI)." },
                { title: "Go-live e continuità", text: "Monitor health, report qualità dato, supporto e SLA quando richiesto." }
            ]
        }
    },
    logistica: {
        hero: {
            h1: "Logistica: localizzazione asset e dati operativi per ridurre tempi ed errori",
            h1Highlight: "Logistica",
            sub: "In magazzino e yard, Ulisses rende visibile ciò che oggi è “tempo perso”: ricerca, movimenti, anomalie e rischi.",
            cta: "Richiedi demo Logistica",
            onePager: "Scarica One-Pager Logistica",
            unlockTitle: "Cosa sblocchiamo nel processo",
            unlockSubtitle: "Trasformiamo le frizioni operative in flussi di dati certi, eliminando i colli di bottiglia che frenano la tua logistica.",
            radarStatus: "Live Signal: Authenticated"
        },
        process: [
            {
                problem: "Troppo tempo per trovare carrelli/roll/pallet speciali/attrezzature",
                solution: "Localizzazione istantanea con precisione <10 cm."
            },
            {
                problem: "Dispersioni e utilizzo inefficiente degli asset",
                solution: "Ottimizzazione dei flussi basata su dati di utilizzo reali."
            },
            {
                problem: "Errori di allocazione, movimentazioni non tracciate",
                solution: "Tracciabilità automatica di ogni movimento indoor e outdoor."
            },
            {
                problem: "Aree sensibili e rischi safety non monitorati",
                solution: "Geofencing attivo e alert in tempo reale su aree di rischio."
            },
            {
                problem: "Difficoltà a misurare performance reali per area/processo",
                solution: "Dashboard con KPI certi e reportistica automatizzata."
            }
        ],
        useCases: [
            { title: "Ricerca asset in tempo reale", text: "Riduci tempi di ricerca e fermi operativi con posizione e storico." },
            { title: "Geofencing & alert", text: "Allerta su uscite non autorizzate, aree interdette, permanenze anomale." },
            { title: "Safety operativa", text: "Eventi e regole su aree di rischio, presenza e anomalie." },
            { title: "KPI operativi", text: "Report su utilizzo asset, colli di bottiglia, aree con inefficienze ricorrenti." }
        ],
        dashboard: {
            title: "Dashboard logistica: decisioni rapide, dati affidabili",
            bullets: [
                "Ricerca asset per nome/ID/area",
                "Mappa aree + heatmap utilizzo",
                "Eventi e alert con priorità",
                "Report settimanali/mensili (utilizzo, anomalie, tempi)"
            ]
        },
        integration: {
            title: "Come si inserisce nei tuoi sistemi",
            text: "Ulisses non ti chiede di cambiare stack: genera eventi e dati operativi dal campo e li rende disponibili via dashboard oAPI.",
            bullets: [
                "Eventi e misure normalizzati (coerenti e riutilizzabili)",
                "Integrazione pulita (meno custom, meno manutenzione)",
                "Dato affidabile e governato (health, qualità dato, storico)"
            ],
            common: "WMS • MES • CMMS • ERP • ITS / Smart City • BI / Data Lake"
        },
        finalCta: {
            title: "Valutiamo insieme la fattibilità sul tuo scenario",
            subtitle: "Definiamo area, KPI e tempi. Ti proponiamo architettura e piano di rollout.",
            ctaPilot: "Richiedi un pilot",
            ctaExpert: "Parla con un esperto",
            ctaOnePager: "Scarica One-Pager"
        },
        benchmarks: {
            title: "Esempi dal mercato",
            items: [
                {
                    title: "Pallet tracking in magazzino",
                    context: "Warehouse con pallet che si 'perdono' tra aree.",
                    challenge: "Spreco di tempo ricerca, scarsa precisione inventario.",
                    solution: "Pallet-tracking con posizione precisa e aggiornamenti operativi.",
                    impact: "Riduzione costi e inventario più snello.",
                    link: "/knowledge-hub/logistica/geofencing"
                },
                {
                    title: "Carrelli e asset mobili",
                    context: "Asset mobili distribuiti su aree ampie.",
                    challenge: "Localizzare rapidamente asset critici e ridurre tempi improduttivi.",
                    solution: "Tag BLE + gateway per visualizzare posizione in app.",
                    impact: "Riduzione search-time e migliore utilizzo asset.",
                    link: "/knowledge-hub/logistica/carrelli"
                },
                {
                    title: "Asset tracking in ambienti difficili",
                    context: "Magazzini con metallo e interferenze.",
                    challenge: "Mantenere precisione e stabilità.",
                    solution: "Bluetooth Channel Sounding per gestire multipath.",
                    impact: "Meno asset misplaced, audit rapidi.",
                    link: "/knowledge-hub/logistica/ambienti-difficili"
                }
            ]
        }
    },
    ferroviario: {
        hero: {
            h1: "Ferroviario: controllo di attrezzature e materiali in depositi",
            h1Highlight: "Ferroviario",
            sub: "Riduci dispersioni e tempi improduttivi. Collega eventi sul campo ai workflow di manutenzione.",
            cta: "Richiedi Demo Ferroviario",
            onePager: "Scarica One-Pager Ferroviario",
            unlockTitle: "Cosa sblocchiamo nel processo",
            unlockSubtitle: "Ottimizziamo la manutenzione e la gestione materiali nei depositi ferroviari, trasformando la ricerca manuale in dati operativi."
        },
        featuredStory: {
            title: "Con Trenord, rendere visibile ciò che accade in deposito",
            text: "In collaborazione con Trenord, prima azienda ferroviaria regionale in Italia, Ulisses ha realizzato un Proof of Concept per la localizzazione dei convogli all’interno del deposito di Milano Fiorenza, il più grande d’Europa.",
            cta: "Scopri di più",
            link: "/knowledge-hub/ferroviario/trenord"
        },
        process: [
            {
                problem: "Attrezzature e materiali non rintracciabili quando servono",
                solution: "Posizione real-time e ricerca istantanea in deposito."
            },
            {
                problem: "Difficoltà nel dimostrare tracciabilità e auditabilità",
                solution: "Storico eventi immutabile e report per compliance."
            },
            {
                problem: "Tempi di manutenzione allungati per logistica inefficiente",
                solution: "Ottimizzazione dei flussi basata su dati di campo certi."
            },
            {
                problem: "Workflow scollegato tra campo e sistemi gestionali",
                solution: "Integrazione nativa API per alimentare CMMS e ticketing."
            },
            {
                problem: "Mancanza di dati certi sull'utilizzo delle attrezzature",
                solution: "Dashboard con KPI di utilizzo e saturation rate degli asset."
            }
        ],
        useCases: [
            { title: "Tracciamento attrezzature", text: "Riduci tempi di ricerca e fermi: posizione + storico eventi." },
            { title: "Materiali e componenti critici", text: "Controllo aree, permanenze, alert su spostamenti non previsti." },
            { title: "Workflow manutenzione", text: "Integrazione CMMS: Eventi e disponibilità asset alimentano ticket e processi." },
            { title: "Report per audit", text: "Storico e KPI a supporto di compliance e controllo." }
        ],
        dashboard: {
            bullets: [
                "Mappa aree + stato asset per categoria",
                "Eventi e anomalie con timeline",
                "Report disponibilità e utilizzo",
                "Health del sistema e SLA"
            ]
        },
        delivery: {
            title: "Integrazioni e Delivery",
            text: "La differenza non è solo tecnologica: è la capacità di messa a terra.",
            steps: "Site survey → Design → Commissioning → Integrazione → Go-live con SLA.",
            cta: "Richiedi una demo"
        },
        finalCta: {
            title: "Valutiamo insieme la fattibilità sul tuo scenario",
            subtitle: "Definiamo area, KPI e tempi. Ti proponiamo architettura e piano di rollout.",
            ctaPilot: "Richiedi un pilot",
            ctaExpert: "Parla con un esperto"
        }
    },
    parking: {
        hero: {
            h1: "Smart Parking: occupazione stalli e eventi operativi, con rollout scalabile",
            h1Highlight: "Smart Parking",
            sub: "Dati affidabili per gestione della sosta, enforcement, pianificazione e reportistica. Con rete privata: OPEX controllabile e indipendenza.",
            cta: "Richiedi demo Smart Parking",
            onePager: "Scarica One-Pager Smart Parking"
        },
        segments: [
            { id: "pa", title: "Per Comuni e PA", text: "Decisioni basate su dati, trasparenza e report." },
            { id: "concessionari", title: "Per concessionari", text: "Efficienza operativa ed enforcement mirato." },
            { id: "private", title: "Per grandi aree private", text: "Ottimizzazione flussi e qualità del servizio." }
        ],
        useCases: [
            { id: "occupancy", title: "Occupancy & disponibilità", text: "Stato stalli in tempo reale + storico affidabile." },
            { id: "events", title: "Eventi operativi", text: "Durata sosta, overstay, profili stallo e priorità intervento." },
            { id: "quality", title: "Qualità del dato e health", text: "Stalli “mute”, copertura, anomalie: controllo continuo e SLA." },
            { id: "rollout", title: "Rollout scalabile", text: "Da pilot a città: rete privata/mesh, continuità operativa, crescita modulare." }
        ],
        useCaseMapping: {
            pa: ["occupancy", "quality", "rollout"],
            concessionari: ["occupancy", "events", "quality"],
            private: ["occupancy", "events"]
        },
        privateNetwork: {
            title: "Perché rete privata (senza SIM) cambia il conto economico",
            bullets: [
                "Riduce dipendenza da operatori e costi ricorrenti per connettività",
                "Maggiore controllo su prestazioni e continuità",
                "Rollout più prevedibile e scalabile"
            ]
        },
        dashboard: {
            bullets: [
                "Mappa zone + occupancy per area",
                "Eventi e anomalie (overstay, stalli critici)",
                "Report per PA (utilizzo, rotazione, KPI)",
                "Monitor health rete/sensori"
            ]
        },
        benchmarks: {
            title: "Esempi dal mercato",
            items: [
                {
                    title: "Occupancy e durata sosta",
                    context: "Parcheggi ad alta rotazione con bisogno di dati affidabili.",
                    challenge: "Metodi manuali aumentano errori e ritardi.",
                    solution: "Sensori su singolo stallo per arrivo/partenza e calcolo durata.",
                    impact: "Dati tempestivi, riduzione errori, ottimizzazione gestione.",
                    link: "/knowledge-hub/smart-parking/occupancy"
                },
                {
                    title: "Sensori dual detection",
                    context: "Parcheggi outdoor con pioggia e interferenze.",
                    challenge: "Mantenere alta accuratezza (99%) e ridurre manutenzione.",
                    solution: "Sensori dual detection (Radar + Magnetic).",
                    impact: "Affidabilità del dato anche in condizioni meteorologiche avverse.",
                    link: "/knowledge-hub/smart-parking/enforcement"
                }
            ],
            extra: {
                title: "Perché “qualità del dato” è il vero differenziante",
                text: "Uno smart parking non vale per “avere una mappa”, ma per avere dati affidabili: occupancy corretta, tempi corretti, stalli “mute” identificati. È qui che si misura il ROI."
            }
        },
        paCta: {
            title: "Stai preparando un bando o un pilot?",
            text: "Ti supportiamo nel definire KPI, architettura e piano di rollout.",
            ctaExpert: "Parla con un esperto PA",
            ctaDemo: "Richiedi demo",
            ctaOnePager: "Scarica One-Pager"
        },
        finalCta: {
            title: "Stai preparando un bando o un pilot?",
            subtitle: "Ti supportiamo nel definire KPI, architettura e piano di rollout.",
            ctaExpert: "Parla con un esperto PA",
            ctaDemo: "Richiedi demo",
            ctaOnePager: "Scarica One-Pager"
        }
    },
    tecnologia: {
        hero: {
            h1: "Tecnologia Ulisses: dal segnale al dato affidabile, sul campo",
            sub: "Siamo l’evoluzione dell’ecosistema Bluetooth: non perché è nuovo, ma perché lo rendiamo affidabile, misurabile e pronto per l’uso sul campo.",
            ctaDemo: "Richiedi demo",
            ctaSheet: "Scarica scheda tecnica"
        },
        pillars: {
            title: "La differenza è trasformare lo standard in dato affidabile",
            text: "Sfruttiamo l'evoluzione degli standard radio, come il Bluetooth Channel Sounding (RTT + Phase-Based Ranging), per sbloccare nuove possibilità.\n\nLa tecnologia Ulisses garantisce precisione, stabilità e affidabilità anche in contesti critici: ambienti complessi, interferenze e alta densità.\n\nTrasformiamo il segnale in un dato pronto all'uso, integrabile via API o gestibile tramite la nostra piattaforma operativa.",
            items: [
                "Stack e algoritmi per trasformare il segnale in un dato stabile e verificabile sul campo.",
                "Tool di planning e commissioning per una messa a terra ripetibile: progettazione, validazione e qualità del dato.",
                "Piattaforma e integrazioni per portare eventi e misure in dashboard, workflow e sistemi esistenti via API."
            ]
        },
        infrastructure: {
            title: "Un’infrastruttura completa",
            subtitle: "Dalla rilevazione sul campo al dato operativo: componenti modulari, stesso obiettivo — dati affidabili e integrabili.",
            items: [
                { title: "Field", text: "Sensori / Tag / Anchor per rilevare eventi e presenza" },
                { title: "Rete", text: "Connettività robusta e scalabile per trasportare i dati" },
                { title: "Piattaforma", text: "Dashboard, regole, storicizzazione e gestione operativa (quando utile)" },
                { title: "API", text: "Integrazione con i sistemi esistenti e con i workflow" }
            ]
        },
        itArchitecture: {
            title: "Scegli l’architettura che facilita il progetto",
            subtitle: "Supportiamo diverse modalità, in base a requisiti di sicurezza, latenza e governance del dato.",
            items: [
                { title: "Cloud", text: "avvio più rapido, aggiornamenti centralizzati, gestione multi-sito" },
                { title: "On-prem", text: "requisiti security/compliance, dati in sito, controllo completo" },
                { title: "Edge / Ibrido", text: "bassa latenza, continuità anche con connettività limitata, gestione locale + sincronizzazione" }
            ]
        },
        integrations: {
            title: "Integrazione nativa, non adattamenti “su misura”",
            subtitle: "Ulisses espone eventi e misure con un modello dati coerente, così l’integrazione resta pulita e manutenibile nel tempo.",
            common: "API e connettori verso: WMS • MES • CMMS • ERP • ITS / Smart City • BI / Data Lake"
        },
        observability: {
            title: "Continuità e qualità del dato nel tempo",
            subtitle: "Un sistema è utile solo se il dato resta affidabile. Per questo includiamo osservabilità, controllo qualità e supporto operativo.",
            items: [
                "Health monitoring di rete e dispositivi",
                "Alert su anomalie e degrado prestazioni",
                "Report qualità dato (copertura, stalli/asset “mute”, trend)",
                "Supporto e SLA (quando richiesto) per continuità operativa"
            ]
        }
    },
    ricercaIp: {
        hero: {
            h1: "R&D: innovazione che diventa soluzione sul campo",
            sub: "Investiamo per mantenere un vantaggio nel tempo: robustezza radio, qualità del dato e messa a terra ripetibile. Per noi R&D significa trasformare standard e componenti in un sistema stabile, misurabile e integrabile.",
            ctaTalk: "Parla con noi",
            ctaSheet: "Scarica scheda “Ricerca & IP”"
        },
        collaborations: {
            title: "Collaborazioni che accelerano l’innovazione",
            text: "Collaboriamo con partner tecnici e accademici per validare approcci e trasformarli in soluzioni applicabili sul campo.",
            partner: { name: "Politecnico di Milano — IoT Lab", link: "#" }
        },
        ip: {
            title: "IP che protegge il vantaggio",
            text: "Parte del valore Ulisses è protetto da proprietà intellettuale e know-how su algoritmi, stack radio e tooling di commissioning."
        },
        awards: {
            title: "Riconoscimenti e citazioni",
            text: "Selezione di premi, articoli e contributi pubblici che rafforzano credibilità e solidità."
        }
    },
    nautica: {
        hero: {
            h1: "Nautica: localizzazione, occupazione e dati operativi per gestire il tuo marina in tempo reale",
            h1Highlight: "Nautica",
            sub: "Nei porti turistici, Ulisses rende visibile ciò che oggi è frammentato: imbarcazioni, mezzi di servizio, accessi, occupazione dei posti barca e presenze.",
            cta: "Richiedi demo Nautica",
            unlockTitle: "Cosa sblocchiamo nel processo",
            unlockSubtitle: "Trasformiamo la gestione del marina portando visibilità in tempo reale su occupazione, accessi e utilizzo delle risorse."
        },
        process: [
            {
                problem: "Difficoltà nel conoscere in tempo reale posti barca occupati e disponibili",
                solution: "Occupancy monitoring in tempo reale per ogni singolo posto barca."
            },
            {
                problem: "Tracciamento manuale o parziale di imbarcazioni e mezzi di servizio",
                solution: "Localizzazione automatica di natanti e asset di servizio."
            },
            {
                problem: "Accessi e presenze non automatizzati, con impatti su sicurezza e controllo",
                solution: "Controllo accessi digitalizzato e storico presenze."
            },
            {
                problem: "Utilizzo inefficiente delle risorse portuali (banchine, spazi, personale)",
                solution: "Ottimizzazione spazi e risorse basata su dati reali."
            },
            {
                problem: "Dati dispersi che non supportano decisioni operative né pianificazione",
                solution: "Dashboard unificata per decisioni data-driven."
            }
        ],
        featuredStory: {
            title: "Con il Ministero del Turismo, digitalizzare la gestione dei porti turistici",
            text: "In collaborazione con il Ministero del Turismo, Ulisses sta contribuendo alla digitalizzazione dei porti turistici italiani, abilitando la raccolta e l’analisi di dati operativi su occupazione dei posti barca, accessi e presenze, a supporto di una gestione più efficiente, sicura e data-driven dei marina.",
            cta: "Scopri di più",
            link: "/knowledge-hub/nautica/ministero-turismo"
        },
        diportistaCta: {
            title: "Sei un diportista?",
            subtitle: "Scopri come Ulisses può migliorare la tua esperienza in porto.",
            cta: "Scopri la nostra web app"
        }
    },
    azienda: {
        hero: {
            label: "About Us",
            h1: "Costruiamo l'intelligenza che muove il mondo fisico.",
            text: "Non siamo solo dev. Siamo ingegneri del campo. Trasformiamo il caos di magazzini e città in dati certi, stabili e pronti per decidere."
        },
        mission: {
            title: "La nostra Mission",
            text: "Trasformiamo il caos delle operazioni reali in dati puliti, affidabili e azionabili, restituendo il controllo a chi gestisce processi complessi."
        },
        story: {
            title: "La genesi",
            acts: [
                {
                    label: "Il Problema",
                    title: "Il tracking tradizionale mente.",
                    text: "Nel 2021 abbiamo notato un pattern: le demo in ufficio erano perfette. Ma in acciaieria, tra i container o nei depositi ferroviari, il segnale spariva. I clienti compravano promesse e si ritrovavano con 'puntini a caso' sulla mappa."
                },
                {
                    label: "La Svolta",
                    title: "Dati, non solo segnali.",
                    text: "Abbiamo capito che l'hardware da solo non bastava. Serviva un layer di intelligenza capace di filtrare il rumore industriale. Abbiamo smesso di cercare il sensore perfetto e abbiamo costruito l'algoritmo che lo corregge."
                },
                {
                    label: "Oggi",
                    title: "Operating System for the Field.",
                    text: "Oggi Ulisses non è un tracker. È l'infrastruttura di verità per aziende che muovono il mondo reale. Dalla logistica alla smart city."
                }
            ]
        },
        values: {
            title: "Il nostro Codice Operativo",
            items: [
                { title: "Field First", text: "Il codice si scrive in ufficio, ma la verità si trova nel fango. Non ci fidiamo finché non lo vediamo funzionare tra metallo e cemento." },
                { title: "Radical Truth", text: "Vendiamo dati certi. Se un dato è incerto, lo dichiariamo. Non mascheriamo mai l'errore." },
                { title: "Ship & Iterate", text: "La perfezione è nemica dell'operatività. Consegniamo valore subito, poi raffiniamo." }
            ]
        },
        engineRoom: {
            title: "Come lavoriamo",
            stack: [
                { key: "Method", val: "Agile / Field-Test Driven" },
                { key: "Stack", val: "Next.js / Rust / Python / Embedded C" },
                { key: "Infra", val: "Edge Native + Cloud Agnostic" }
            ],
            text: "Siamo un team di prodotto, non una software house a progetto. Ogni riga di codice entra in un sistema condiviso che migliora per tutti i clienti ogni settimana."
        },
        stats: {
            title: "I numeri che contano",
            items: [
                { value: "2021", label: "Anno di fondazione" },
                { value: "100k+", label: "Asset gestiti" },
                { value: "99.9%", label: "Uptime medio" },
                { value: "3", label: "Verticali industriali" }
            ]
        },
        review: {
            text: "La sperimentazione ha coinvolto diverse aree aziendali, dalla funzione IT alla Manutenzione, mettendo in campo un grande spirito di squadra e una collaborazione proattiva",
            author: "Massimo Pasquini",
            role: "Innovation Manager di Trenord",
            logo: "/partners/Trenord_Logo.png",
            label: "Testimonial"
        },
        team: {
            title: "Il Nostro Team",
            members: [
                { name: "Mattia Tartaglia", role: "Founder & CEO", image: "/team/mattia-tartaglia.png", stack: "Ex-Strategy | IoT Architecture | Product Vision", linkedin: "https://www.linkedin.com/in/mattia-tartaglia-88510351/" },
                { name: "Alessandro Spadaro", role: "CTO", image: "/team/AlessandroSpadaro.jpeg", stack: "Full-Stack Arch | Embedded Systems | Signal Processing", linkedin: "https://www.linkedin.com/in/alessandrospadaro/" },
                { name: "Stefano Nordio", role: "VP Sales & Growth", image: "/team/Stefano Nordio.jpeg", stack: "Enterprise Sales | Market Strategy", linkedin: "https://www.linkedin.com/in/stefanonordio/" },
                { name: "Francesco Dell’Onze", role: "Sales Manager", image: "/team/Francesco Dell_Onze.jpeg", stack: "Tech Sales | Client Success", linkedin: "https://www.linkedin.com/in/dell-onze-francesco/" },
                { name: "Giulia Mora", role: "Account Sales Manager", image: "/team/GiuliaMora.jpeg", stack: "Account Mgmt | Customer Relations", linkedin: "https://www.linkedin.com/in/giulia-m-5a718314a/" },
                { name: "Jessica Faicchio", role: "Operations Manager", image: "/team/JessicaFaicchio.jpeg", stack: "Ops Excellence | Agile PM", linkedin: "https://www.linkedin.com/in/jessica-faicchio-7b8996150/" }
            ]
        },
        board: {
            title: "Board & Advisors",
            members: [
                { name: "Stefano Ceci", role: "Presidente", image: "/team/StefanoCeci.jpeg", linkedin: "https://www.linkedin.com/in/cecistefano/" },
                { name: "Teresa Trivisonno", role: "Vice Presidente", image: "/team/Teresa Trivisonno.jpeg", linkedin: "https://www.linkedin.com/in/teresa-trivisonno-3949a86/" },
                { name: "Mattia Tartaglia", role: "Amministratore Delegato", image: "/team/MattiaTartaglia.jpeg", linkedin: "https://www.linkedin.com/in/mattia-tartaglia-88510351/" },
                { name: "Gabriele Benedetto", role: "Consigliere", image: "/team/GabrieleBenedetto.jpeg", linkedin: "https://www.linkedin.com/in/gabrielebenedetto/" },
                { name: "Luca Palermo", role: "Consigliere", image: "/team/LucaPalermo.jpeg", linkedin: "https://www.linkedin.com/in/lucapalermo/?originalSubdomain=it" }
            ]
        },
        cta: {
            title: "Hai un problema complesso? Ci piace.",
            text: "Se la tua sfida operativa sembra complicata, probabilmente è perfetta per Ulisses.",
            button: "Parla con il team Engineering"
        },
        awards: {
            title: "Eccellenza Riconosciuta",
            text: "Non cerchiamo i premi, ma siamo orgogliosi quando il mercato riconosce la solidità del nostro approccio e l'impatto delle nostre soluzioni.",
            label: "Certificazioni & Riconoscimenti",
            items: [
                { title: "Premio Innovazione SMAU", year: "2025", image: "/premi/premio innovazione smau.png" },
                { title: "IoMobility Awards", year: "2024", image: "/premi/Iomobility-awards-2024-1030x295.png" },
                { title: "Top of the PID", year: "2024", image: "/premi/topofthepid24.png" },
                { title: "InnovAzioni", year: "2024", image: "/premi/innovazionilogo.svg" },
                { title: "Paperless & Digital Awards", year: "2023", image: "/premi/paperless & digital award.jpg" },
                { title: "Visionaria", year: "2023", image: "/premi/Logo-Visionaria-def-col.png" }
            ]
        }
    },
    legal: {
        privacy: "Privacy Policy",
        cookie: "Cookie Policy",
        terms: "Termini e Condizioni",
        rightsReserved: "Tutti i diritti riservati.",
        piva: "P. Iva 02718490697 – REA MI-2746967 – SDI USAL8PV",
        menuHeader: "Menu",
        legalHeader: "Legal"
    },
    knowledgeHub: {
        hero: {
            h1: "Knowledge Hub",
            sub: "Materiali pratici per orientarti sul tuo scenario: storie tipiche, documenti e FAQ su architettura, integrazioni e continuità del dato."
        },
        stories: {
            title: "Scenari tipici e storie",
            text: "Risoluzioni operative basate su sfide reali di magazzino, officina e Smart City.",
            sections: [

                {
                    vertical: "Logistica",
                    items: [
                        {
                            title: "I carrelli ci sono… ma ogni turno riparte da zero",
                            text: "In un magazzino con turni e flussi intensi, carrelli e roll non stanno mai dove dovrebbero. Ulisses introduce visibilità per turni e reparti.",
                            link: "/knowledge-hub/logistica/carrelli",
                            fullContent: {
                                scenario: "In un magazzino con turni e flussi intensi, carrelli, roll e attrezzature non stanno mai “dove dovrebbero”. Si spostano tra corsie, baie, aree di picking e staging. Sulla carta sono presenti, ma nella realtà operativa diventano invisibili. Il team non perde solo minuti: perde continuità di processo. E quando la pressione sale, la soluzione più comune è comprare altro materiale per “coprire” la mancanza.",
                                challenge: "Il problema non è semplicemente “trovare un oggetto”. È l’effetto domino: ritardi, micro-fermi, frizione tra reparti, errori di allocazione e KPI che peggiorano senza una causa chiara. E quando provi a digitalizzare con soluzioni semplici, emerge la verità: se il dato non è stabile e ripetibile, gli operatori smettono di usarlo dopo una settimana.",
                                resolution: "Ulisses introduce una visibilità progettata per l’uso quotidiano: ricerca immediata dell’asset (ID/nome/categoria), stato e disponibilità per area (es. “in uso”, “disponibile”, “fermo”, “fuori area”), storico movimenti/eventi per capire cosa è successo. La piattaforma restituisce dashboard operative, con filtri per turno/reparto e un livello di semplicità che aiuta l’adozione.",
                                productionReady: "Si parte con una site survey per mappare aree e punti critici (non solo planimetrie), poi commissioning per validare che l’esperienza sia coerente in campo. Si definisce un set minimo di regole (ingresso/uscita/sosta) e si allinea il modello “stati” a come lavora davvero l’Operations (non a come “dovrebbe” lavorare).",
                                result: "Meno tempo perso, riduzione dei micro-fermi, maggiore utilizzo degli asset e una base dati affidabile per miglioramento continuo.",
                                introCTA: "Vuoi misurare il “tempo nascosto” oggi speso a cercare asset?",
                                cta: "Richiedi un'assessment"
                            }
                        },
                        {
                            title: "Geofencing e anomalie: quando il processo ha confini",
                            text: "Senza regole automatiche ci si accorge dei problemi troppo tardi. Ulisses abilita geofence e soglie temporali per un controllo proattivo.",
                            link: "/knowledge-hub/logistica/geofencing",
                            fullContent: {
                                scenario: "In logistica, alcune aree non sono semplici zone fisiche: sono confini di processo. Uscite, varchi, aree interdette, zone HSE, buffer temporanei che non devono trasformarsi in stoccaggi permanenti. Senza un controllo operativo, ciò che dovrebbe essere eccezione diventa abitudine.",
                                challenge: "Senza regole automatiche ci si accorge dei problemi troppo tardi: un asset esce e sparisce, un pallet resta in un’area critica oltre la soglia, un’attrezzatura entra dove non dovrebbe. Il costo non è solo economico: è anche sicurezza, conformità interna e perdita di controllo. Il rischio più grande è generare “rumore”: troppe notifiche e nessuna azione.",
                                resolution: "Ulisses abilita regole operative semplici ma robuste: geofence per aree sensibili e perimetri di processo, soglie temporali (permanenze anomale, tempi massimi in area), alert mirati con priorità e log consultabile (chi, cosa, quando, dove). L’obiettivo non è “avere più notifiche”: è creare un sistema che supporti decisioni e responsabilità operative.",
                                productionReady: "La parte critica è la governance: definire insieme a Operations/HSE le regole davvero utili, impostare escalation e ownership (chi riceve cosa), e dare una dashboard che mostri trend e ripetitività (non solo l’evento singolo). Con l’osservabilità (health) eviti l’effetto “falsi allarmi” che distrugge la fiducia.",
                                result: "Riduzione dispersioni e non conformità, maggiore sicurezza, processi più stabili e tracciabilità utile anche per audit interni.",
                                introCTA: "Vuoi definire regole e alert senza creare allarmismo?",
                                cta: "Parla con un esperto"
                            }
                        },
                        {
                            title: "Ambienti difficili: la differenza è la qualità del dato",
                            text: "Strutture metalliche, interferenze, multipath. Ulisses lavora con approccio industriale per dati stabili.",
                            link: "/knowledge-hub/logistica/ambienti-difficili",
                            fullContent: {
                                scenario: "Strutture metalliche, interferenze, multipath: il contesto reale in cui molte soluzioni funzionano “a tratti”. E quando il dato non è stabile, gli operatori smettono di fidarsi.",
                                challenge: "Non basta “rilevare”. Serve un dato che regga l’uso quotidiano: ripetibile, monitorabile, con una gestione chiara delle anomalie.",
                                resolution: "Ulisses lavora con un approccio industriale: progettazione, validazione sul campo, e piattaforma che misura anche la “salute” del sistema. In questo modo la tecnologia non resta “promessa”: diventa una base affidabile per processi e KPI.",
                                productionReady: "Si parte con progettazione e validazione sul campo. L'osservabilità (health) garantisce continuità: se qualcosa degrada, lo vedi prima che diventi disservizio.",
                                result: "Meno falsi eventi, maggiore continuità, adozione reale da parte dei team.",
                                introCTA: "Vuoi approfondire come gestiamo gli ambienti difficili?",
                                cta: "Parla con un esperto"
                            }
                        }
                    ]
                },
                {
                    vertical: "Ferroviario",
                    items: [
                        {
                            title: "Con Trenord, portiamo la localizzazione dei treni in deposito",
                            text: "In un grande deposito ferroviario, abbiamo realizzato un PoC per la localizzazione di precisione di 50 convogli su 12 binari.",
                            link: "/knowledge-hub/ferroviario/trenord",
                            fullContent: {
                                scenario: "In un grande deposito ferroviario, la manutenzione è una macchina complessa fatta di movimentazioni continue, vincoli fisici e sequenze precise. Per Trenord, conoscere con precisione la posizione dei convogli in deposito è un prerequisito per garantire efficienza e affidabilità.",
                                challenge: "La sfida non era 'sapere dove sono i treni' in astratto, ma ottenere un dato affidabile, preciso e utilizzabile nei processi reali. Le tecnologie tradizionali risultavano poco efficaci in ambienti indoor complessi o troppo invasive per la scala industriale.",
                                resolution: "Ulisses ha realizzato un Proof of Concept operativo: installazione di transponder su 50 convogli, copertura di 12 binari a Milano Fiorenza e tracciamento continuo con visualizzazione tramite Digital Twin dell’impianto.",
                                productionReady: "Precisione di localizzazione inferiore al metro, dispositivi autoalimentati e resistenti, integrazione nativa via API REST per la condivisione dei dati e scalabilità pronta per l'estensione all'intero sito.",
                                result: "Ottimizzazione dei flussi manutentivi, migliore pianificazione delle attività in deposito e creazione di un layer dati centralizzato per modelli predittivi e future integrazioni AI.",
                                introCTA: "Vuoi replicare un Proof of Concept simile?",
                                cta: "Parla con un esperto"
                            }
                        },
                        {
                            title: "In officina la manutenzione si ferma… perché manca un’attrezzatura",
                            text: "Se un’attrezzatura critica non è disponibile, il piano si rompe. Ulisses rende tracciabili materiali e asset con stati operativi chiari.",
                            link: "/knowledge-hub/ferroviario/manutenzione",
                            fullContent: {
                                scenario: "In un deposito o in officina, la manutenzione vive di sequenze. Se un’attrezzatura critica non è disponibile nel momento giusto, il piano si rompe: si aspetta, si improvvisa, si spostano persone e mezzi, si rinvia. In contesti ferroviari, questa inefficienza pesa perché impatta tempi, costi e affidabilità del servizio.",
                                challenge: "Il problema non è “sapere tutto sempre”. È sapere dove sono gli elementi critici quando servono e poter ricostruire cosa è successo quando si verifica un’anomalia. E in ambienti complessi, la tecnologia deve reggere: se il dato è instabile o difficile da interpretare, gli operatori non lo adottano e torna il foglio o la chat.",
                                resolution: "Ulisses rende tracciabili attrezzature e materiali con un approccio orientato alla manutenzione: visibilità su posizione e disponibilità per categoria/area, gestione di stati operativi (disponibile / in uso / fermo / in manutenzione), timeline eventi e report consultabili per verifiche. In questo modo il team smette di “cercare” e inizia a “gestire”.",
                                productionReady: "La differenza la fa la messa a terra: mappa aree e flussi reali, commissioning e definizione degli stati che servono davvero al team (pochi, chiari, utili). L’osservabilità (health) garantisce continuità: se qualcosa degrada, lo vedi prima che diventi disservizio.",
                                result: "Riduzione tempi di ricerca, minori ritardi, maggiore controllo su ciò che impatta la disponibilità operativa e maggiore auditabilità.",
                                introCTA: "Vuoi definire un pilot in officina/deposito con KPI chiari?",
                                cta: "Richiedi una demo"
                            }
                        },
                        {
                            title: "Quando l’evento diventa azione: collegare il campo ai workflow (CMMS)",
                            text: "Integrazione nativa API per collegare il campo ai workflow di manutenzione e ticketing.",
                            link: "/knowledge-hub/ferroviario/cmms",
                            fullContent: {
                                scenario: "Molte organizzazioni hanno un CMMS e procedure consolidate. Ma spesso il “campo” è scollegato: eventi e anomalie vengono scoperti tardi, segnalati in modo non strutturato, e trasformati in ticket con ritardo o senza contesto.",
                                challenge: "Se il dato resta isolato, non cambia il processo: aumenta solo la complessità. Il valore arriva quando l’evento è affidabile, contestualizzato e integrato nel flusso di lavoro. In contesti regolati, serve anche uno storico robusto per ricostruire decisioni e interventi.",
                                resolution: "Ulisses produce eventi strutturati (posizione, stato, anomalie, soglie) e li rende integrabili via API nei workflow: ticketing e assegnazione, priorità e dispatch, report e audit trail. Così campo e ufficio tornano coerenti: il dato genera un’azione, non solo un report.",
                                productionReady: "Serve mapping dei processi (cosa scatena cosa), un commissioning che validi la qualità dell’evento, e una governance SLA: chi gestisce gli alert, quali tempi, quali livelli di priorità. L’integrazione diventa “pulita” perché l’evento è già progettato per essere consumato.",
                                result: "Interventi più rapidi e mirati, riduzione downtime e maggiore prevedibilità nella manutenzione.",
                                introCTA: "Vuoi vedere un esempio di flusso evento→ticket→intervento?",
                                cta: "Parla con un esperto"
                            }
                        },
                        {
                            title: "Materiali critici: controllo, permessi, storico",
                            text: "Alcuni componenti non possono 'girare liberi'. Tracciabilità eventi semplice ma rigorosa.",
                            link: "/knowledge-hub/ferroviario/materiali-critici",
                            fullContent: {
                                scenario: "Alcuni componenti o materiali non possono “girare liberi”. Serve controllo delle aree e tracciabilità degli spostamenti.",
                                challenge: "Il problema non è solo la perdita. È la mancanza di evidenza: chi ha spostato cosa, quando e dove.",
                                resolution: "Ulisses abilita una tracciabilità eventi semplice: ingressi/uscite, permanenze, spostamenti anomali. Con alert mirati e report standard, la tracciabilità diventa parte del processo.",
                                productionReady: "Configurazione aree sensibili e reportistica di compliance per garantire che ogni spostamento sia tracciato e autorizzabile.",
                                result: "Riduzione dispersioni e maggiore auditabilità senza appesantire il lavoro degli operatori.",
                                introCTA: "Vuoi approfondire la tracciabilità sicura per materiali critici?",
                                cta: "Parla con un esperto"
                            }
                        }
                    ]
                },
                {
                    vertical: "Smart Parking",
                    items: [
                        {
                            title: "Occupancy affidabile: la città smette di decidere a sensazione",
                            text: "La città smette di decidere a sensazione. Dati di occupazione reali per pianificazione, enforcement e reportistica.",
                            link: "/knowledge-hub/smart-parking/occupancy",
                            fullContent: {
                                scenario: "Una città (o un concessionario) deve governare la sosta con obiettivi concreti: disponibilità percepita, rotazione, enforcement efficiente, report verso stakeholder e cittadini. Il problema è che, senza dati affidabili, la gestione resta reattiva e basata su percezioni.",
                                challenge: "Il punto non è avere una mappa “bella”. È avere un dato affidabile. Se l’occupazione non è credibile, crollano report, pianificazione, controlli, fiducia. E in outdoor, la qualità del dato è la vera sfida: condizioni ambientali, installazione, degrado nel tempo.",
                                resolution: "Ulisses abilita occupancy per stallo e per zona, con storico e trend. La dashboard rende immediata la lettura operativa: stato per area e priorità operative, anomalie e variazioni, report periodici utilizzabili da PA e concessionari. In parallelo, la piattaforma include indicatori di “health” per non perdere qualità nel tempo.",
                                productionReady: "Zonizzazione corretta, commissioning iniziale e monitor continuo qualità dato: stalli “mute”, degrado prestazioni, anomalie ripetitive. Il sistema non è solo installato: è governato come servizio, con KPI e responsabilità chiare.",
                                result: "Decisioni basate su dati, report solidi, migliore servizio e trasparenza.",
                                introCTA: "Stai preparando un pilot o un bando?",
                                cta: "Parla con un esperto PA / Smart Parking"
                            }
                        },
                        {
                            title: "Durata, overstay e qualità dato: enforcement mirato e OPEX sotto controllo",
                            text: "Passare dal controllo a vista al controllo prioritizzato, con rete privata e OPEX controllabile.",
                            link: "/knowledge-hub/smart-parking/enforcement",
                            fullContent: {
                                scenario: "Gli operatori sul territorio hanno tempo limitato. Se i controlli sono casuali, l’efficacia cala. Quando invece i controlli sono guidati da dati (durata, overstay, priorità), la gestione diventa più efficiente e misurabile.",
                                challenge: "Il salto di qualità è passare da “controllo a vista” a “controllo prioritizzato”, senza creare rumore. E quando lo scenario scala (da quartiere a città), entrano in gioco sostenibilità e costi ricorrenti: serve un rollout prevedibile, con governance e continuità.",
                                resolution: "Ulisses produce eventi operativi: durata sosta, overstay, profili di stallo e priorità. La dashboard mette in evidenza cosa richiede attenzione adesso e cosa è trend. In progetti che devono scalare, l’architettura prevede opzioni per governare prestazioni e costi nel tempo (inclusa rete privata dove opportuno), riducendo dipendenze e rendendo il rollout più sostenibile.",
                                productionReady: "Regole condivise, workflow controlli, reportistica e soprattutto osservabilità: se un sensore degrada o diventa silenzioso, lo vedi prima che diventi disservizio. La differenza è trattare il sistema come servizio: KPI, SLA e manutenzione mirata.",
                                result: "Enforcement più efficace, migliore uso delle risorse, qualità dato mantenuta nel tempo e rollout più prevedibile.",
                                introCTA: "Vuoi impostare un rollout per lotti con KPI e SLA chiari?",
                                cta: "Richiedi un assessment Smart Parking"
                            }
                        },
                        {
                            title: "Qualità dato & health: stalli ‘mute’ sotto controllo",
                            text: "Gestire la qualità del dato come un servizio. Osservabilità health per manutenzione mirata.",
                            link: "/knowledge-hub/smart-parking/health",
                            fullContent: {
                                scenario: "In un rollout reale, una parte dei sensori può degradare, cambiare comportamento o diventare silenziosa. Se non lo vedi, te ne accorgi dai cittadini (troppo tardi).",
                                challenge: "Gestire qualità del dato e continuità come un servizio: non come un progetto “una tantum”.",
                                resolution: "Ulisses introduce osservabilità: health rete/sensori, alert, indicatori di qualità dato, report SLA. Così la manutenzione diventa mirata e prevedibile.",
                                productionReady: "In un rollout reale, monitoraggio health e procedure di intervento garantiscono fiducia nel sistema nel lungo periodo.",
                                result: "Riduzione tempi di ripristino, meno disservizi, fiducia nel sistema nel lungo periodo.",
                                introCTA: "Vuoi scoprire come garantiamo la qualità del dato nel tempo?",
                                cta: "Parla con un esperto Ulisses"
                            }
                        }
                    ]
                },
                {
                    vertical: "Nautica",
                    items: [
                        {
                            title: "Con il Ministero del Turismo, risolviamo la gestione dei marina",
                            text: "In collaborazione con il Ministero del Turismo, Ulisses sta contribuendo alla digitalizzazione dei porti turistici italiani.",
                            link: "/knowledge-hub/nautica/ministero-turismo",
                            fullContent: {
                                scenario: "In un porto turistico, la gestione quotidiana è fatta di arrivi e partenze, occupazione dei posti barca, accessi, mezzi di servizio e presenze da monitorare in tempo reale. Per i gestori di marina e per il Ministero del Turismo, avere una visione affidabile di ciò che accade in porto è un prerequisito per migliorare efficienza operativa, sicurezza e qualità dell’accoglienza.",
                                challenge: "In contesti complessi come i porti turistici italiani, anche piccole inefficienze nella gestione dell’occupazione e delle presenze si traducono in perdite di tempo, utilizzo inefficiente delle risorse e difficoltà nel garantire controllo e tracciabilità.",
                                resolution: "Nell’ambito della collaborazione con il Ministero del Turismo, Ulisses ha avviato un progetto di digitalizzazione basato sulla localizzazione operativa. Il progetto ha previsto: raccolta e analisi dati, piattaforma gestione prenotazioni, sensori di localizzazione, monitoraggio occupazione real-time e analisi presenza.",
                                productionReady: "La soluzione consente ai gestori di marina di conoscere in tempo reale lo stato occupazionale del porto, senza interventi invasivi sull’infrastruttura e con dati pronti per l’integrazione nei sistemi esistenti.",
                                result: "Migliore efficienza operativa, sicurezza e qualità dell'accoglienza, oltre al supporto alla digitalizzazione del settore nautico.",
                                introCTA: "Sei un gestore di porto turistico?",
                                cta: "Parla con un esperto"
                            }
                        }
                    ]
                }
            ],
        },
        documents: {
            title: "Documenti e One-Pager",
            items: [
                "One-pager Ulisses (generale)",
                "One-pager Logistica",
                "One-pager Ferroviario",
                "One-pager Smart Parking",
                "Scheda “Tecnologia & integrazioni”",
                "Scheda “Metodo di progetto (pilot → rollout)”"
            ]
        },
        faq: {
            title: "Domande frequenti",
            items: [
                { q: "Possiamo integrare nei sistemi già in uso?", a: "Sì, Ulisses espone API robuste e modelli dati normalizzati per WMS, CMMS, ERP e altre piattaforme." },
                { q: "È necessario usare la piattaforma Ulisses?", a: "No, la piattaforma è opzionale. Puoi consumare il dato direttamente via API nei tuoi sistemi." },
                { q: "Indoor e outdoor: cosa cambia?", a: "Ulisses gestisce entrambi con tecnologie ottimizzate per ogni contesto, garantendo continuità nel passaggio tra aree." },
                { q: "Come garantite qualità del dato nel tempo?", a: "Attraverso monitoraggio della salute (health) di rete e dispositivi, con alert proattivi e report di qualità." },
                { q: "Quali sono tempi tipici per un pilot?", a: "Un pilot tipico richiede dalle 4 alle 8 settimane, a seconda della complessità e dell'integrazione richiesta." }
            ]
        },
        deepDive: {
            title: "Approfondisci per scenario",
            intro: "Se vuoi entrare nel dettaglio, vai alle pagine dedicate con architettura, integrazioni e percorso.",
            cards: [
                { title: "Logistica", href: "/logistica" },
                { title: "Ferroviario", href: "/ferroviario" },
                { title: "Smart City", href: "/smart-city" }
            ]
        }
    },
    contactForm: {
        title: "Richiedi una demo / assessment",
        intro: "Raccontaci scenario e obiettivi: ti proponiamo un percorso chiaro (pilot → rollout).",
        microcopy: "Compila 6 campi: ci aiuta a darti una risposta utile, non generica.",
        fields: {
            scenario: {
                label: "In quale scenario ti serve Ulisses?",
                options: ["Logistica", "Ferroviario", "Smart Parking", "Smart Building", "Altro"]
            },
            objective: {
                label: "Obiettivo principale",
                options: [
                    "Ridurre tempi di ricerca asset",
                    "Geofencing / alert",
                    "Occupancy stalli",
                    "Durata / overstay",
                    "Tracciabilità materiali/attrezzature",
                    "Monitoraggio ingressi/flussi",
                    "Integrazione con sistemi esistenti",
                    "Altro"
                ]
            },
            size: {
                label: "Dimensione dello scenario",
                placeholder: "Es: # asset / # stalli / # siti"
            },
            platforms: {
                label: "Piattaforme già in uso",
                options: ["WMS", "CMMS", "ITS", "BI", "ERP", "Nessuna", "Altro"]
            },
            timing: {
                label: "Timing stimato",
                options: ["0–3 mesi", "3–6 mesi", "6–12 mesi", "Esplorazione"]
            }
        },
        noSpam: "Nessuna spam. Usiamo i dati solo per rispondere alla tua richiesta."
    },
    smartCity: {
        cards: {
            building: {
                subtitle: "Visibilità asset, accessi e flussi in ospedali e campus"
            },
            parking: {
                subtitle: "Occupancy, enforcement e gestione sosta su larga scala"
            }
        }
    },
    smartBuilding: {
        hero: {
            h1: "Smart Building: visibilità su asset, accessi e flussi all’interno di edifici critici",
            h1Highlight: "Smart Building",
            sub: "Dati affidabili per rintracciare asset, monitorare ingressi/uscite e ottimizzare i flussi in edifici complessi come ospedali, campus e grandi strutture.",
            cta: "Parla con un esperto",
            onePager: "Scarica One-Pager Smart Building"
        },
        segments: [
            { id: "hospital", title: "Smart Hospital", text: "Sicurezza dei percorsi, asset sanitari tracciati, prevenzione perdita dispositivi" },
            { id: "campus", title: "Smart Campus", text: "Controllo automazioni, gestione edifici, ottimizzazione spazi e persone" },
            { id: "facility", title: "Smart Facility / Large Buildings", text: "Visibilità su accessi, log asset, supporto alla manutenzione" }
        ],
        useCases: [
            { id: "asset", title: "Asset Tracking in tempo reale", text: "Identifica e monitora dove si trovano dispositivi critici, macchine e strumenti." },
            { id: "access", title: "Monitoraggio ingressi/uscite", text: "Controlla ingressi e usciti per una maggiore compliance e sicurezza antintrusione." },
            { id: "events", title: "Eventi operativi e anomalie", text: "Allarmi per utilizzi non autorizzati, asset fuori area, accessi sospetti." },
            { id: "quality", title: "Qualità del dato & osservabilità", text: "Sensori con health monitoring per continuità e affidabilità delle tracce." }
        ],
        useCaseMapping: {
            hospital: ["asset", "events", "quality", "access"],
            campus: ["access", "events", "quality"],
            facility: ["asset", "access", "events", "quality"]
        },
        dashboard: {
            title: "Dashboard & Insights",
            bullets: [
                "Mappa dell’edificio con asset e presenze",
                "Timeline eventi (ingressi, spostamenti, warning)",
                "Report operativi per reparto/area",
                "Health rete sensori & SLA"
            ]
        },
        benchmarks: {
            title: "Esempi dal mercato",
            items: [] // No benchmarks provided in prompt, leaving empty or I can infer/omit
        }
    }
};
