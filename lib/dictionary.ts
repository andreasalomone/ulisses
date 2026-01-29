export const DICTIONARY = {
    common: {
        demoCta: "Richiedi una demo",
        expertCta: "Parla con un esperto",
        onePagerCta: "Scarica One-Pager",
        contactCta: "Richiedi una demo / assessment",
        learnMore: "Scopri di più",
        backToHome: "Torna alla Home",
        sending: "Invio in corso...",
    },
    navigation: {
        soluzioni: "Soluzioni",
        logistica: "Logistica",
        ferroviario: "Ferroviario",
        smartParking: "Smart Parking",
        tecnologia: "Tecnologia",
        azienda: "Azienda",
        contatti: "Contatti",
    },
    home: {
        hero: {
            h1: "Localizzazione di asset indoor/outdoor che genera dati operativi per ridurre sprechi e migliorare le decisioni.",
            h1Token: "indoor/outdoor",
            subheadline: "Ulisses è un’infrastruttura completa: rete + sensori + piattaforma + API, pronta per essere messa a terra in ambienti complessi.",
            subheadlineToken: "rete + sensori + piattaforma + API",
            proofs: [
                "Brevetto tecnologico",
                "Planning & commissioning integrati",
                "Integrazioni IT/OT con SLA end-to-end"
            ],
            expertLink: "Parla con un esperto"
        },
        selector: {
            title: "In quale scenario ti serve Ulisses?",
            subtitle: "Risoluzioni operative, risultati attesi e percorso di progetto.",
            cards: {
                logistica: {
                    title: "Logistica & Operations",
                    description: "Riduci tempi di ricerca asset, errori operativi e rischi in magazzino e yard.",
                    cta: "Scopri Logistica",
                    resolutions: ["Ricerca asset", "Geofencing", "KPI flussi"]
                },
                ferroviario: {
                    title: "Ferroviario",
                    description: "Controllo attrezzature e materiali in depositi e officine, con integrazione ai workflow di manutenzione.",
                    cta: "Scopri Ferroviario",
                    resolutions: ["Disponibilità attrezzature", "Storico eventi", "CMMS"]
                },
                parking: {
                    title: "Smart City — Smart Parking",
                    description: "Dati di occupazione e eventi operativi, rollout scalabile e OPEX controllabile con rete privata.",
                    cta: "Scopri Smart Parking",
                    resolutions: ["Occupancy", "Durata sosta", "Qualità dato"]
                }
            }
        },
        why: {
            title: "Perché Ulisses è diversa",
            intro: "Non forniamo “un singolo sensore” o “solo una dashboard”. Costruiamo un sistema completo che porta dati affidabili dal campo alle decisioni — e quando serve integriamo il dato nelle piattaforme già in uso (WMS/CMMS/ITS/BI) tramite API.",
            columns: [
                {
                    title: "Software gestionali",
                    text: "I gestionali organizzano dati e processi, ma non vedono il mondo fisico: posizione reale, eventi sul campo, dinamiche indoor/outdoor."
                },
                {
                    title: "Tracking tradizionale",
                    text: "Molte soluzioni funzionano bene in demo, ma faticano in ambienti reali: interferenze, scalabilità, manutenance, affidabilità del dato."
                },
                {
                    title: "Soluzioni frammentate",
                    text: "Quando sensori, rete e software non hanno una regia unica, aumentano complessità, integrazioni su misura e costi nel tempo. Ulisses è modulare: piattaforma opzionale e dato integrabile via API, con metodo e ownership chiara."
                }
            ],
            closure: "Ulisses unifica field, rete e dato: puoi usare la nostra piattaforma oppure integrare via API, riducendo complessità e tempi di messa a terra.",
            quote: "“Non siamo un prototipo, non siamo un PoC eterno. Siamo operativi nel mondo reale.”"
        },
        howItWorks: {
            title: "Come funziona, in pratica",
            subtitle: "Dalla rilevazione sul campo al dato operativo: un flusso semplice, industrializzabile, integrabile.",
            steps: [
                { title: "Field", text: "Sensori/tag/anchor rilevano eventi e presenza" },
                { title: "Rete", text: "La connettività porta i dati in modo robusto" },
                { title: "Piattaforma", text: "Normalizza, storicizza, abilita dashboard e regole" },
                { title: "API / Integrazioni", text: "Collega sistemi esistenti (WMS/MES/CMMS/ITS)" }
            ],
            deployment: {
                label: "Scegli il tuo deployment",
                title: "Deployment flessibile",
                text: "Cloud / On-prem / Edge: scegli la modalità più adatta a security, latenza e requisiti del settore.",
                tokens: "Cloud / On-prem / Edge"
            }
        },
        app: {
            label: "Web App / Dashboard",
            title: "La Web App: cosa vedi e cosa puoi fare",
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
            h1: "Soluzioni per Logistica, Ferroviario e Smart Parking",
            intro: "Ulisses porta dati affidabili dal campo alle decisioni nei contesti dove contano continuità, qualità del dato e integrazione con sistemi già esistenti. Puoi usare la piattaforma Ulisses oppure integrare eventi e misure nelle tue piattaforme tramite API."
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
            sub: "In magazzino e yard, Ulisses rende visibile ciò che oggi è “tempo perso”: ricerca, movimenti, anomalie e rischi.",
            cta: "Richiedi demo Logistica",
            onePager: "Scarica One-Pager Logistica"
        },
        process: [
            "Troppo tempo per trovare carrelli/roll/pallet speciali/attrezzature",
            "Dispersioni e utilizzo inefficiente degli asset",
            "Errori di allocazione, movimentazioni non tracciate",
            "Aree sensibili e rischi safety non monitorati",
            "Difficoltà a misurare performance reali per area/processo"
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
            text: "Ulisses non ti chiede di cambiare stack: genera eventi e dati operativi dal campo e li rende disponibili via API. Puoi usare la piattaforma Ulisses quando utile, oppure portare i dati direttamente nei sistemi già in uso.",
            bullets: [
                "Eventi e misure normalizzati (coerenti e riutilizzabili)",
                "Integrazione pulita (meno custom, meno manutenzione)",
                "Dato affidabile e governato (health, qualità dato, storico)"
            ],
            common: "WMS • MES • CMMS • ERP • ITS / Smart City • sistemi di sicurezza • BI / Data Lake"
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
                    title: "Pallet tracking in magazzino - ",
                    context: "Warehouse con pallet che si 'perdono' tra aree.",
                    challenge: "Spreco di tempo ricerca, scarsa precisione inventario.",
                    solution: "Pallet-tracking con posizione precisa e aggiornamenti operativi.",
                    impact: "Riduzione costi e inventario più snello."
                },
                {
                    title: "Carrelli e asset mobili - ",
                    context: "Asset mobili distribuiti su aree ampie.",
                    challenge: "Localizzare rapidamente asset critici e ridurre tempi improduttivi.",
                    solution: "Tag BLE + gateway per visualizzare posizione in app.",
                    impact: "Riduzione search-time e migliore utilizzo asset."
                },
                {
                    title: "Asset tracking in ambienti difficili - METIRIONIC",
                    context: "Magazzini con metallo e interferenze.",
                    challenge: "Mantenere precisione e stabilità.",
                    solution: "Bluetooth Channel Sounding per gestire multipath.",
                    impact: "Meno asset misplaced, audit rapidi."
                }
            ]
        }
    },
    ferroviario: {
        hero: {
            h1: "Ferroviario: controllo di attrezzature e materiali in depositi e officine",
            sub: "Riduci dispersioni e tempi improduttivi. Collega eventi sul campo ai workflow di manutenzione.",
            cta: "Richiedi demo Ferroviario",
            onePager: "Scarica One-Pager Ferroviario"
        },
        process: [
            "Attrezzature e materiali non rintracciabili quando servono",
            "Tempi di manutenzione allungati per logistica interna inefficiente",
            "Difficoltà nel dimostrare tracciabilità e auditabilità",
            "Ambienti complessi e regolati con requisiti di affidabilità"
        ],
        useCases: [
            { title: "Tracciamento attrezzature in officina", text: "Riduci tempi di ricerca e fermi: posizione + storico eventi." },
            { title: "Materiali e componenti critici", text: "Controllo aree, permanenze, alert su spostamenti non previsti." },
            { title: "Workflow manutenzione (integrazione CMMS)", text: "Eventi e disponibilità asset alimentano ticket e processi." },
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
        }
    },
    parking: {
        hero: {
            h1: "Smart Parking: occupazione stalli e eventi operativi, con rollout scalabile",
            sub: "Dati affidabili per gestione della sosta, enforcement, pianificazione e reportistica. Con rete privata: OPEX controllabile e indipendenza.",
            cta: "Richiedi demo Smart Parking",
            onePager: "Scarica One-Pager Smart Parking"
        },
        segments: [
            { title: "Per Comuni e PA", text: "Decisioni basate su dati, trasparenza e report." },
            { title: "Per concessionari", text: "Efficienza operativa ed enforcement mirato." },
            { title: "Per grandi aree private", text: "Ottimizzazione flussi e qualità del servizio." }
        ],
        useCases: [
            { title: "Occupancy & disponibilità", text: "Stato stalli in tempo reale + storico affidabile." },
            { title: "Eventi operativi", text: "Durata sosta, overstay, profili stallo e priorità intervento." },
            { title: "Qualità del dato e health", text: "Stalli “mute”, copertura, anomalie: controllo continuo e SLA." },
            { title: "Rollout scalabile", text: "Da pilot a città: rete privata/mesh, continuità operativa, crescita modulare." }
        ],
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
                    title: "Occupancy e durata sosta - ",
                    context: "Parcheggi ad alta rotazione con bisogno di dati affidabili.",
                    challenge: "Metodi manuali aumentano errori e ritardi.",
                    solution: "Sensori su singolo stallo per arrivo/partenza e calcolo durata.",
                    impact: "Dati tempestivi, riduzione errori, ottimizzazione gestione."
                },
                {
                    title: "Sensori dual detection - ",
                    context: "Parcheggi outdoor con pioggia e interferenze.",
                    challenge: "Mantenere alta accuratezza (99%) e ridurre manutenzione.",
                    solution: "Fusione radar + geomagnetico per stabilità del dato.",
                    impact: "Reportistica affidabile e confidenza nel sistema."
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
            text: "Gli standard radio più recenti, come il Bluetooth Channel Sounding (RTT + Phase-Based Ranging), aprono nuove possibilità di misura. Il valore però nasce quando quella misura diventa stabile e verificabile sul campo: ambienti complessi, interferenze, densità e vincoli operativi. Ulisses fa questo passaggio e rende il dato pronto da usare e integrabile via API e se serve, è disponibile anche la nostra piattaforma per dashboard e gestione operativa.",
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
            common: "API e connettori verso: WMS • MES • CMMS • ERP • ITS / Smart City • sistemi di sicurezza • BI / Data Lake"
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
    azienda: {
        hero: {
            h1: "Chi siamo",
            text: "Ulisses sviluppa soluzioni IoT industriali per localizzazione e dati operativi in contesti complessi. Uniamo competenze di campo e prodotto: dalla progettazione al go-live."
        },
        mission: {
            title: "Mission",
            text: "Semplificare la complessità operativa tramite dati di campo affidabili."
        },
        values: ["Affidabilità", "Scalabilità", "Integrazione"],
        cta: "Parla con noi"
    },
    legal: {
        privacy: "Privacy Policy",
        cookie: "Cookie Policy",
        rightsReserved: "Tutti i diritti riservati.",
        piva: "P.IVA 12345678901",
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
                                scenario: "In un magazzino con turni e flussi intensi, carrelli, roll e attrezzature non stanno mai “dove dovrebbero”. Si spostano tra corsie, baie, aree di picking e staging. Sulla carta sono presenti, ma nella realtà operativa diventano invisibili. Il team non perde solo minuti: perde continuità di processo.",
                                challenge: "Il problema non è semplicemente “trovare un oggetto”. È l’effetto domino: ritardi, micro-fermi, frizione tra reparti, errori di allocazione e KPI che peggiorano senza una causa chiara. Se il dato non è stabile e ripetibile, gli operatori smettono di usarlo.",
                                resolution: "Ulisses introduce una visibilità progettata per l’uso quotidiano: ricerca immediata dell’asset, stato e disponibilità per area, storico movimenti. La piattaforma restituisce dashboard operative, con filtri per turno/reparto.",
                                productionReady: "Si parte con una site survey per mappare aree e punti critici, poi commissioning per validare che l’esperienza sia coerente in campo. Si definisce un set minimo di regole e si allinea il modello “stati” a come lavora davvero l’Operations.",
                                result: "Meno tempo perso, riduzione dei micro-fermi, maggiore utilizzo degli asset e una base dati affidabile per miglioramento continuo.",
                                cta: "Vuoi misurare il “tempo nascosto”? Richiedi un assessment logistica."
                            }
                        },
                        {
                            title: "Geofencing e anomalie: quando il processo ha confini",
                            text: "Senza regole automatiche ci si accorge dei problemi troppo tardi. Ulisses abilita geofence e soglie temporali per un controllo proattivo.",
                            link: "/knowledge-hub/logistica/geofencing",
                            fullContent: {
                                scenario: "In logistica, alcune aree non sono semplici zone fisiche: sono confini di processo. Uscite, varchi, aree interdette, buffer temporanei. Senza un controllo operativo, ciò che dovrebbe essere eccezione diventa abitudine.",
                                challenge: "Senza regole automatiche ci si accorge dei problemi troppo tardi. Il costo non è solo economico: è anche sicurezza, conformità interna e perdita di controllo. Il rischio più grande è generare “rumore”: troppe notifiche e nessuna azione.",
                                resolution: "Ulisses abilita regole operative semplici ma robuste: geofence per aree sensibili, soglie temporali (permanenze anomale), alert mirati con priorità. L’obiettivo non è “avere più notifiche”: è creare un sistema che supporti decisioni.",
                                productionReady: "La parte critica è la governance: definire insieme a Operations/HSE le regole davvero utili, impostare escalation e ownership. Con l’osservabilità (health) eviti l’effetto “falsi allarmi”.",
                                result: "Riduzione dispersioni e non conformità, maggiore sicurezza, processi più stabili e tracciabilità utile anche per audit interni.",
                                cta: "Vuoi definire regole e alert senza allarmismo? Parla con un esperto."
                            }
                        },
                        {
                            title: "Ambienti difficili: la differenza è la qualità del dato",
                            text: "Strutture metalliche, interferenze, multipath. Ulisses lavora con approccio industriale per dati stabili.",
                            link: "/knowledge-hub/logistica/ambienti-difficili",
                            fullContent: {
                                scenario: "Strutture metalliche, interferenze, multipath: il contesto reale in cui molte soluzioni funzionano “a tratti”.",
                                challenge: "Non basta “rilevare”. Serve un dato che regga l’uso quotidiano: ripetibile, monitorabile, con una gestione chiara delle anomalie.",
                                resolution: "Ulisses lavora con un approccio industriale: progettazione, validazione sul campo, e piattaforma che misura anche la “salute” del sistema.",
                                result: "Meno falsi eventi, maggiore continuità, adozione reale da parte dei team.",
                                productionReady: "Validazione sul campo e monitoraggio health per garantire che la tecnologia diventi base affidabile.",
                                cta: "Parla con un esperto di contesti complessi."
                            }
                        }
                    ]
                },
                {
                    vertical: "Ferroviario",
                    items: [
                        {
                            title: "In officina la manutenzione si ferma…",
                            text: "Se un’attrezzatura critica non è disponibile, il piano si rompe. Ulisses rende tracciabili materiali e asset con stati operativi chiari.",
                            link: "/knowledge-hub/ferroviario/manutenzione",
                            fullContent: {
                                scenario: "In un deposito o officina, se un’attrezzatura critica non è disponibile, il piano si rompe: si aspetta, si improvvisa. In contesti ferroviari, questa inefficienza pesa su tempi e costi.",
                                challenge: "Il problema non è “sapere tutto sempre”, ma sapere dove sono gli elementi critici quando servono. Se il dato è instabile, gli operatori tornano al foglio o alla chat.",
                                resolution: "Ulisses rende tracciabili attrezzature e materiali: visibilità su posizione e disponibilità, gestione di stati operativi, timeline eventi. Il team smette di “cercare” e inizia a “gestire”.",
                                productionReady: "Mappa aree e flussi reali, commissioning e definizione degli stati che servono davvero. L’osservabilità garantisce continuità.",
                                result: "Riduzione tempi di ricerca, minori ritardi, maggiore controllo e auditabilità.",
                                cta: "Richiedi una demo Ferroviario."
                            }
                        },
                        {
                            title: "Quando l’evento diventa azione (CMMS)",
                            text: "Integrazione nativa API per collegare il campo ai workflow di manutenzione e ticketing.",
                            link: "/knowledge-hub/ferroviario/cmms",
                            fullContent: {
                                scenario: "Molte organizzazioni hanno un CMMS. Ma spesso il “campo” è scollegato: eventi e anomalie vengono scoperti tardi e segnalati in modo non strutturato.",
                                challenge: "Se il dato resta isolato, aumenta la complessità. Il valore arriva quando l’evento è affidabile, contestualizzato e integrato nel flusso di lavoro.",
                                resolution: "Ulisses produce eventi strutturati (posizione, stato, anomalie) integrabili via API nei workflow: ticketing, priorità, dispatch, audit trail.",
                                productionReady: "Serve mapping dei processi, commissioning che validi la qualità dell’evento, e governance SLA.",
                                result: "Interventi più rapidi e mirati, riduzione downtime e maggiore prevedibilità.",
                                cta: "Vuoi vedere un esempio di flusso evento -> ticket? Parla con un esperto."
                            }
                        },
                        {
                            title: "Materiali critici: controllo e storico",
                            text: "Alcuni componenti non possono 'girare liberi'. Tracciabilità eventi semplice ma rigorosa.",
                            link: "/knowledge-hub/ferroviario/materiali-critici",
                            fullContent: {
                                scenario: "Alcuni componenti o materiali non possono “girare liberi”. Serve controllo delle aree e tracciabilità degli spostamenti.",
                                challenge: "Mancanza di evidenza: chi ha spostato cosa, quando e dove.",
                                resolution: "Ulisses abilita tracciabilità eventi semplice: ingressi/uscite, permanenze, spostamenti anomali. Con alert mirati e report standard.",
                                productionReady: "Configurazione aree sensibili e reportistica di compliance.",
                                result: "Riduzione dispersioni e maggiore auditabilità senza appesantire il lavoro.",
                                cta: "Approfondisci la tracciabilità sicura."
                            }
                        }
                    ]
                },
                {
                    vertical: "Smart Parking",
                    items: [
                        {
                            title: "Occupancy affidabile: dati per decidere",
                            text: "La città smette di decidere a sensazione. Dati di occupazione reali per pianificazione, enforcement e reportistica.",
                            link: "/knowledge-hub/smart-parking/occupancy",
                            fullContent: {
                                scenario: "Una città deve governare la sosta con obiettivi concreti: disponibilità, rotazione, enforcement. Senza dati affidabili, la gestione resta reattiva.",
                                challenge: "Il punto non è avere una mappa “bella”, ma un dato affidabile. In outdoor, condizioni ambientali e degrado nel tempo sono la vera sfida.",
                                resolution: "Ulisses abilita occupancy per stallo e zona, con storico e trend. Dashboard con stato aree, anomalie, report per PA e indicatori di health.",
                                productionReady: "Zonizzazione corretta, commissioning iniziale e monitor continuo qualità dato. Il sistema è governato come servizio.",
                                result: "Decisioni basate su dati, report solidi, migliore servizio e trasparenza.",
                                cta: "Stai preparando un pilot? Parla con un esperto PA."
                            }
                        },
                        {
                            title: "Durata, overstay e qualità dato",
                            text: "Passare dal controllo a vista al controllo prioritizzato, con rete privata e OPEX controllabile.",
                            link: "/knowledge-hub/smart-parking/enforcement",
                            fullContent: {
                                scenario: "Gli operatori hanno tempo limitato. Se i controlli sono casuali, l’efficacia cala. Serve controllo guidato da dati.",
                                challenge: "Passare da “controllo a vista” a “controllo prioritizzato” senza creare rumore. E scalare da quartiere a città con costi sostenibili.",
                                resolution: "Ulisses produce eventi: durata sosta, overstay, priorità. L’architettura prevede opzioni per governare prestazioni e costi nel tempo.",
                                productionReady: "Regole condivise, workflow controlli, reportistica e soprattutto osservabilità (health monitoring).",
                                result: "Enforcement più efficace, migliore uso risorse, rollout prevedibile.",
                                cta: "Richiedi un assessment Smart Parking."
                            }
                        },
                        {
                            title: "Qualità dato & health: stalli 'mute'",
                            text: "Gestire la qualità del dato come un servizio. Osservabilità health per manutenzione mirata.",
                            link: "/knowledge-hub/smart-parking/health",
                            fullContent: {
                                scenario: "In un rollout reale, alcuni sensori possono degradare. Se non lo vedi, te ne accorgi dai cittadini (troppo tardi).",
                                challenge: "Gestire qualità e continuità come un servizio, non una tantum.",
                                resolution: "Ulisses introduce osservabilità: health rete/sensori, alert, report SLA. Manutenzione mirata e prevedibile.",
                                productionReady: "Dashboard di health e procedure di intervento.",
                                result: "Riduzione tempi di ripristino, meno disservizi, fiducia nel lungo periodo.",
                                cta: "Scopri come garantiamo la qualità del dato."
                            }
                        }
                    ]
                }
            ]
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
                { title: "Smart Parking", href: "/smart-parking" }
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
                options: ["Logistica", "Ferroviario", "Smart Parking", "Altro"]
            },
            objective: {
                label: "Obiettivo principale",
                options: [
                    "Ridurre tempi di ricerca asset",
                    "Geofencing / alert",
                    "Occupancy stalli",
                    "Durata / overstay",
                    "Tracciabilità materiali/attrezzature",
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
    }
};
