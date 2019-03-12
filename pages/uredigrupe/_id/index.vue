<template>
  <div>
      <Headline />
      <UrediPredmet />
      <section class="container sekcija">
        <h3>{{nazivPredmeta}} - Grupe za predavanja i vježbe</h3>

        <h4 class="ui horizontal divider header">
            <i class="user icon"></i>
            Spisak grupa
        </h4>
        <div class="ui segment">

        </div>
        <h4 class="ui horizontal divider header">
            <i class="user plus icon"></i>
            Dodavanje grupe
        </h4>
        <div class="ui segment">

        </div>
        <h4 class="ui horizontal divider header">
            <i class="users icon"></i>
            Masovni upis studenata
        </h4>
        <div class="ui segment">

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
            nazivPredmeta:null
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
        this.$store.state.uredivanjePredmeta="uredigrupe";

        for(let i =0; i<this.$store.state.predmeti.length; i++){
            if(this.predmet==this.$store.state.predmeti[i].id){
                this.nazivPredmeta=this.$store.state.predmeti[i].naziv;
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