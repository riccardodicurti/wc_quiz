        var step = 0;
        var steps = [
            // Domanda 0
            {
                'domanda': 'E la prima volta che ti iscrivi ai corsi di Concete Moove?',
                'risposte': [
                    ['si', 1],
                    ['no', 9],
                ],
                'final': 0
            },
            // Domanda 1
            {
                'domanda': 'Hai frequentato dei corsi presso Jestion Academy?',
                'risposte': [
                    ['si', 2],
                    ['no', 8],
                ],
                'final': 0
            },
            // Domanda 2
            {
                'domanda': 'A quale corso hai partecipato?',
                'risposte': [
                    ['Corso estivo', 3],
                    ['Corso principianti', 4],
                    ['Corso avanzato', 7],
                ],
                'final': 0
            },
            // Domanda 3
            {
                'domanda': 'Quanti anni hai?',
                'risposte': [
                    ['6-9 anni', 'http://localhost:8888/concretemove.com/prodotto/corso-base-outdoor-bambini/'],
                    ['10-12 anni', 'http://localhost:8888/concretemove.com/prodotto/corso-base-outdoor-ragazzi/'],
                    ['13-15 anni', 'http://localhost:8888/concretemove.com/prodotto/corso-base-outdoor-giovani/'],
                    ['16+ anni', 'http://localhost:8888/concretemove.com/prodotto/corso-base-outdoor-adulti/'],
                ],
                'final': 1
            },
            // Domanda 4
            {
                'domanda': 'Dove ti sei allenato solitamente durane i corsi che hai frequentato?',
                'risposte': [
                    ['Solo in palestra di ginnastica', 5],
                    ['In palestra di ginnastica e in palestra di parkour con le strutture / all aperto', 6],
                ],
                'final': 0
            },
            // Domanda 5
            {
                'domanda': 'Quanti anni hai?',
                'risposte': [
                    ['10-12 anni', 'http://localhost:8888/concretemove.com/prodotto/abbonamento-outdoor-lv3-ragazzi/'],
                    ['13-15 anni', 'http://localhost:8888/concretemove.com/prodotto/abbonamento-outdoor-lv3-giovani/'],
                    ['16+ anni', 'http://localhost:8888/concretemove.com/prodotto/abbonamento-outdoor-lv3-adulti/'],
                ],
                'final': 1
            },
            // Domanda 6
            {
                'domanda': 'Quanti anni hai?',
                'risposte': [
                    ['10-12 anni', 'http://localhost:8888/concretemove.com/prodotto/abbonamento-outdoor-lv2-ragazzi/'],
                    ['13-15 anni', 'http://localhost:8888/concretemove.com/prodotto/abbonamento-outdoor-lv2-giovani/'],
                    ['16+ anni', 'http://localhost:8888/concretemove.com/prodotto/abbonamento-outdoor-lv2-adulti/'],
                ],
                'final': 1
            },
             // Domanda 7
             {
                 'domanda': 'Quanti anni hai?',
                 'risposte': [
                     ['10-12 anni', 'http://localhost:8888/concretemove.com/prodotto/abbonamento-outdoor-lv2-ragazzi/'],
                     ['13-15 anni', 'http://localhost:8888/concretemove.com/prodotto/abbonamento-outdoor-lv2-giovani/'],
                     ['16+ anni', 'http://localhost:8888/concretemove.com/prodotto/abbonamento-outdoor-lv2-adulti/'],
                 ],
                 'final': 1
             },
             // Domanda 8
             {
                 'domanda': 'Quanti anni hai?',
                 'risposte': [
                     ['6-9 anni', 'http://localhost:8888/concretemove.com/prodotto/corso-base-outdoor-bambini/'],
                     ['10-12 anni', 'http://localhost:8888/concretemove.com/prodotto/corso-base-outdoor-ragazzi/'],
                     ['13-15 anni', 'http://localhost:8888/concretemove.com/prodotto/corso-base-outdoor-giovani/'],
                     ['16+ anni', 'http://localhost:8888/concretemove.com/prodotto/corso-base-outdoor-adulti/'],
                 ],
                 'final': 1
             },
             // Domanda 9
             {
                 'domanda': 'Qual\'è l\'ultimo corso che hai frequentato?',
                 'risposte': [
                     ['corso base outdoor', 10],
                     ['abbonamento outdoor lv.1', 11],
                 ],
                 'final': 0
             },
             // Domanda 10
             {
                 'domanda': 'Quanti anni hai?',
                 'risposte': [
                     ['10-12 anni', 'http://localhost:8888/concretemove.com/prodotto/abbonamento-outdoor-lv3-ragazzi/'],
                     ['13-15 anni', 'http://localhost:8888/concretemove.com/prodotto/abbonamento-outdoor-lv3-giovani/'],
                     ['16+ anni', 'http://localhost:8888/concretemove.com/prodotto/abbonamento-outdoor-lv3-adulti/'],
                 ],
                 'final': 1
             },
               // Domanda 11
               {
                   'domanda': 'Quanti anni hai?',
                   'risposte': [
                       ['10-12 anni', 'http://localhost:8888/concretemove.com/prodotto/abbonamento-outdoor-lv2-ragazzi/'],
                       ['13-15 anni', 'http://localhost:8888/concretemove.com/prodotto/abbonamento-outdoor-lv2-giovani/'],
                       ['16+ anni', 'http://localhost:8888/concretemove.com/prodotto/abbonamento-outdoor-lv2-adulti/'],
                   ],
                   'final': 1
               },
        ];

        Alpine.data('quiz', () => ({
            step: step,
            steps: steps,
            get currentStep() {
                return this.steps[this.step];
            },
        }));
