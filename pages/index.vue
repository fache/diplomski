<template>
  <div>
      <Headline />
      <Navigacija />
      <section class="container sekcija" v-bind:class="sidebar">
        <div class="wrapper">
            <div class="ui large header center aligned">Svi Vaši predmeti</div>
          <div class="ui four column doubling stackable grid">
            <div v-for="predmet in predmeti" :key="predmet.id" class="column">
              <div class="ui segment">
                <div class="ui small header center aligned">{{predmet.naziv}}</div>                
                <div class="ui tiny header right aligned"><nuxt-link :to="{path:'/opcijepredmeta/'+predmet.id, query: { id: predmet.id }}"><button class="mini ui yellow button">Uredi predmet</button></nuxt-link></div>
                <nuxt-link v-for="grupa in predmet.grupe" :key="grupa.id" :to="{path:'/grupa/'+grupa.id, query: { svi: false, id: grupa.id }}"><div>{{grupa.nazivGrupe}}</div></nuxt-link>
                <nuxt-link :to="{path:'/grupa/'+0, query: { svi: true, predmetid: predmet.id }}">Svi studenti</nuxt-link>
              </div>
            </div>
          </div>
        </div>

        <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
      </section>
  </div>
</template>
<script>
import Headline from '@/components/Headline'
import Navigacija from '@/components/Navigacija'
export default {
    data() {
      return {
        predmeti: []
      }
    },
    methods: {
      
    },
    computed: {
      sidebar: function () {
        if(this.$store.state.showSidebar) return "lijeviPaddingSidebar";
        else return "lijeviPadding";
      }
    },
    mounted (){
      //TODO smisliti nacin za redirect u slucaju da je korisnik logiran
        if(this.$store.state.active=="aktivan")console.log(this.$store.state.active);
        else{
          console.log("neaktivan");
          this.$router.push('/login');
        } 
        // console.log(this.predmeti);
        this.predmeti=this.$store.state.predmeti;
    },
    components: {
      Headline, Navigacija
    }
  }
</script>
<style scoped>
</style>