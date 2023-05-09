const {createApp} = Vue;

createApp ({
    data() {
        return{
            titolo: "Hello there!",
            message: "General Kenobi",
            percorsoImg: "https://www.swx.it/databank/images/thumb/4/47/Obi-wan_kenobi_27.jpg/300px-Obi-wan_kenobi_27.jpg"

        }
    },
    methods: {
        metodo() {
            // console.log("metodo che stampa un dato: ", this.message)
        }
    },
    getImagePath(){
        return this.percorsoImg;
    }
}).mount('#app');