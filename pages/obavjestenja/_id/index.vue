<template>
  <div>
      <Headline />
      <UrediPredmet />
      <section class="container sekcija">
          <div>{{nazivPredmeta}} - Obavještenja za studente</div>

        <h3 class="ui header">Prethodna obavještenja</h3>
        <div class="ui section divider"></div>
        <h3 class="ui header">Unos novog obavještenja</h3>

        <div class="ui form">
            <div class="ui segment">
                <div class="two fields">
                    <div class="field">
                        <select id="izborGrupe" class="ui fluid search dropdown">
                            <option value="0">Sve grupe</option>
                            <option v-for="grupa in predmetObjekat.grupe" v-bind:key="grupa.id" value="grupa.id">{{grupa.nazivGrupe}}</option>
                        </select>
                    </div>            
                    <div class="field">
                        <div class="ui toggle checkbox">
                            <input id="email" type="checkbox" name="gift" tabindex="0">
                            <label>Slanje e-maila</label>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label>Kraći tekst (2-3 rečenice):</label>
                    <textarea id="kratkiTekst" rows="2"></textarea>
                </div>
                <div class="field">
                    <label>Detaljan tekst (nije obavezan):</label>
                    <textarea id="detaljniTekst" rows="4"></textarea>
                </div>
                <button class="ui primary button" type="submit">Pošalji</button>
                <button class="ui button" type="submit" v-on:click="ponistiFormu">Poništi</button>
            </div>
        </div>
      </section>
  </div>
</template>
<script>

import Headline from '@/components/Headline'
import UrediPredmet from '@/components/UrediPredmet'
export default {
    data() {
        return {
            predmet:null,
            nazivPredmeta:null,
            predmetObjekat:null
        }
    },
    methods:{
        ponistiFormu: function(){
            $('#izborGrupe').prop('selectedIndex', 0);
            document.getElementById("email").checked=false;
            $("#kratkiTekst").val("");
            $("#detaljniTekst").val("");
        }
    },
    components: {
    Headline, UrediPredmet
    },
    beforeCreate(){
        //TODO smisliti nacin za redirect u slucaju da je korisnik logiran
        if(this.$store.state.active=="aktivan")console.log(this.$store.state.active);
        else{console.log("neaktivan"); this.$router.push('/login');} 
        

    },
    beforeMount (){
        this.predmet=this.$route.query.id;
        this.$store.state.predmetZaUredivanje=this.predmet;
        this.$store.state.uredivanjePredmeta="obavjestenja";

        for(let i =0; i<this.$store.state.predmeti.length; i++){
            if(this.predmet==this.$store.state.predmeti[i].id){
                this.nazivPredmeta=this.$store.state.predmeti[i].naziv;
                this.predmetObjekat=this.$store.state.predmeti[i];
                break;
            }
        }



    },
    beforeDestroy(){
      this.$store.state.predmetZaUredivanje=null;
      this.$store.state.uredivanjePredmeta=null;
    }
}
</script>
<style scoped>
@media screen and (min-width: 500px) {
    .sekcija {
        padding-left: calc(240px + 3em);
        padding-right: 3em;
    }
}
</style>