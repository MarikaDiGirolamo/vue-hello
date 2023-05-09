const {createApp} = Vue;

createApp ({
    data() {
        return{
            titolo: "Hello there!",
            chiave: "General Kenobi",
            percorsoImg: "https://w7.pngwing.com/pngs/275/235/png-transparent-star-wars-rebel-alliance-logo-star-wars-rebellion-rebel-alliance-senator-bail-organa-galactic-civil-war-star-wars-logo-smiley-sign-thumbnail.png"

        }
    },
    methods: {
        metodo() {
            console.log("metodo che stampa un dato:", this.chiave)
        }
    },
    getImagePath(){
        return this.percorsoImg;
    }
}).mount('#app');