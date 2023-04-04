/* 

Milestone 1
-Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse

-Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

Milestone 2
-Visualizzazione dinamica dei messaggi: 
tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione

-Click sul contatto mostra la conversazione del contatto cliccato
*/

const { createApp } = Vue

createApp({
   data() {
      return {
         activeContact: 0,
         newMessage: "",
         searchInput: "",
         contacts: [
            {
               name: 'Michele',
               avatar: '/img/avatar_1.jpg',
               visible: true,
               messages: [
                  {
                     date: '10/01/2020 15:30:55',
                     message: 'Hai portato a spasso il cane?',
                     status: 'sent'
                  },
                  {
                     date: '10/01/2020 15:50:00',
                     message: 'Ricordati di stendere i panni',
                     status: 'sent'
                  },
                  {
                     date: '10/01/2020 16:15:22',
                     message: 'Tutto fatto!',
                     status: 'received'
                  }
               ],
            },
            {
               name: 'Fabio',
               avatar: '/img/avatar_2.jpg',
               visible: true,
               messages: [
                  {
                     date: '20/03/2020 16:30:00',
                     message: 'Ciao come stai?',
                     status: 'sent'
                  },
                  {
                     date: '20/03/2020 16:30:55',
                     message: 'Bene grazie! Stasera ci vediamo?',
                     status: 'received'
                  },
                  {
                     date: '20/03/2020 16:35:00',
                     message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                     status: 'sent'
                  }
               ],
            },
            {
               name: 'Samuele',
               avatar: '/img/avatar_3.jpg',
               visible: true,
               messages: [
                  {
                     date: '28/03/2020 10:10:40',
                     message: 'La Marianna va in campagna',
                     status: 'received'
                  },
                  {
                     date: '28/03/2020 10:20:10',
                     message: 'Sicuro di non aver sbagliato chat?',
                     status: 'sent'
                  },
                  {
                     date: '28/03/2020 16:15:22',
                     message: 'Ah scusa!',
                     status: 'received'
                  }
               ],
            },
            {
               name: 'Alessandro B.',
               avatar: '/img/avatar_4.jpg',
               visible: true,
               messages: [
                  {
                     date: '10/01/2020 15:30:55',
                     message: 'Lo sai che ha aperto una nuova pizzeria?',
                     status: 'sent'
                  },
                  {
                     date: '10/01/2020 15:50:00',
                     message: 'Si, ma preferirei andare al cinema',
                     status: 'received'
                  }
               ],
            },
            {
               name: 'Alessandro L.',
               avatar: '/img/avatar_5.jpg',
               visible: true,
               messages: [
                  {
                     date: '10/01/2020 15:30:55',
                     message: 'Ricordati di chiamare la nonna',
                     status: 'sent'
                  },
                  {
                     date: '10/01/2020 15:50:00',
                     message: 'Va bene, stasera la sento',
                     status: 'received'
                  }
               ],
            },
            {
               name: 'Claudia',
               avatar: '/img/avatar_5.jpg',
               visible: true,
               messages: [
                  {
                     date: '10/01/2020 15:30:55',
                     message: 'Ciao Claudia, hai novità?',
                     status: 'sent'
                  },
                  {
                     date: '10/01/2020 15:50:00',
                     message: 'Non ancora',
                     status: 'received'
                  },
                  {
                     date: '10/01/2020 15:51:00',
                     message: 'Nessuna nuova, buona nuova',
                     status: 'sent'
                  }
               ],
            },
            {
               name: 'Federico',
               avatar: '/img/avatar_7.jpg',
               visible: true,
               messages: [
                  {
                     date: '10/01/2020 15:30:55',
                     message: 'Fai gli auguri a Martina che è il suo compleanno!',
                     status: 'sent'
                  },
                  {
                     date: '10/01/2020 15:50:00',
                     message: 'Grazie per avermelo ricordato, le scrivo subito!',
                     status: 'received'
                  }
               ],
            },
            {
               name: 'Davide',
               avatar: '/img/avatar_8.jpg',
               visible: true,
               messages: [
                  {
                     date: '10/01/2020 15:30:55',
                     message: 'Ciao, andiamo a mangiare la pizza stasera?',
                     status: 'received'
                  },
                  {
                     date: '10/01/2020 15:50:00',
                     message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                     status: 'sent'
                  },
                  {
                     date: '10/01/2020 15:51:00',
                     message: 'OK!!',
                     status: 'received'
                  }
               ],
            },
         ]
      }
   },
   methods: {
      /* getRndInteger(min, max) {
         return Math.floor(Math.random() * (max - min + 1)) + min;
      }, */
      /* removed rndm integer for last log usage */
      /* get time for last log */
      getTime() {
         let time = new Date();
         time = time.toLocaleTimeString();
         time = time.slice(0, 5)
         console.log(time);
         return time;
      },
      /* get date + time and convert to string for message object */
      getDateAndTime() {
         const now = new Date();
         const date = now.toLocaleDateString('it-IT', {
            day: '2-digit', month: '2-digit', year: 'numeric',
         });
         let h = now.getHours();
         if (h < 10) {
            h = `0${h.toString()}`;
         }
         let min = now.getMinutes();
         if (min < 10) {
            min = `0${min.toString()}`;
         }
         let sec = now.getSeconds();
         if (sec < 10) {
            sec = `0${sec.toString()}`;
         }
         return `${date} ${h}:${min}:${sec}`;
      },
      /* create object w new writted messsage, capitalize it and push it to the messages array of active contact */
      newMsg() {
         if (this.newMessage == '') {
            return;
         } else {
            const myMessage = {
               date: this.getDateAndTime(),
               message: this.newMessage.charAt(0).toUpperCase() + this.newMessage.slice(1),
               status: 'sent',
            }
            this.contacts[this.activeContact].messages.push(myMessage);
            this.newMessage = '';

            this.receivedMsg();
         }

      },
      receivedMsg() {
         setTimeout(() => {
            const receivedMessage = {
               date: this.getDateAndTime(),
               message: 'OK!',
               status: 'received',
            }
            this.contacts[this.activeContact].messages.push(receivedMessage);
         }, 1000);
      },
   }
}).mount('#app');