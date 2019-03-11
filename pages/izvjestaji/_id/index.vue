<template>
  <div>
      <Headline />
      <UrediPredmet />
      <section class="container sekcija">
          Izvjestaj za: {{predmet}}
      </section>
  </div>
</template>
<script>
import Headline from '@/components/Headline'
import UrediPredmet from '@/components/UrediPredmet'
export default {
    data() {
        return {
            predmet:null
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
    mounted (){
        this.predmet=this.$route.query.id;
        this.$store.state.predmetZaUredivanje=this.predmet;
        this.$store.state.uredivanjePredmeta="izvjestaji";
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