<template>
  <div>
      <Headline />
      <Navigacija />
      <section class="container sekcija" v-bind:class="sidebar">
            Prikaz grupe: 
            <span v-if="svistudenti">Svi studenti</span>
            <span v-else>{{grupa}}</span>
      </section>
  </div>
</template>
<script>
import Headline from '@/components/Headline'
import Navigacija from '@/components/Navigacija'
import axios from 'axios'
export default {
    data() {
      return {
        grupa:null,
        svistudenti:false,
        predmetId:null
      }
    },
    components: {
      Headline, Navigacija
    },
    beforeCreate(){
        //TODO smisliti nacin za redirect u slucaju da je korisnik logiran
        if(this.$store.state.active=="aktivan")console.log(this.$store.state.active);
        else{
          console.log("neaktivan");
          this.$router.push('/login');
        } 
    },
    mounted (){
        //prikazuje se virtualna grupa Svi studenti
        if(this.$route.query.svi==true){
            this.predmetId=this.$route.query.predmetid;
            this.svistudenti=true;
            axios.get('http://localhost/api_v5/group/course/'+this.predmetId+'/allStudents', { withCredentials: true }).then((res) => {
                if (res.statusText == "OK") {
                    console.log(res);
                    //res.data.members[i].Person.id
                }
                else{
                    console.log("greška pri pozivu svi studenti");
                }
                
            }).catch((err, res) => {
                console.log(err);
            });
        }
        //prikazuje se regularna grupa
        else{
            this.grupa=this.$route.query.id;        
            this.$store.state.aktivnaGrupa=this.grupa;
        }        
    },
    computed: {
      sidebar: function () {
        if(this.$store.state.showSidebar) return "lijeviPaddingSidebar";
        else return "lijeviPadding";
      }
    },
    beforeDestroy(){
      this.$store.state.aktivnaGrupa=null;
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