<template>
    <div>
        <div>toogle sidebar</div>
        <div class="ui sidebar inverted vertical menu" v-bind:class="{visible:sidebarMenuVisible}">
            <nuxt-link :to="{path:'/'}">
                <div class="item" v-bind:style="{borderBottom: '1px solid #2d2e2f'}">
                    Dobro došli,<br>{{this.$store.state.userIme}} {{this.$store.state.userPrezime}}
                </div>
            </nuxt-link>
            <a class="item">
                Poruke (0)
            </a>              
            <span v-for="(predmet,index) in predmeti" :key="index">
                <a class="item" v-bind:style="{borderBottom: '1px solid #2d2e2f'}">
                    {{predmet.naziv}}
                </a>    
                <nuxt-link v-for="grupa in predmet.grupe" :key="grupa.id" :to="{path:'/grupa/'+grupa.id, query: { id: grupa.id }}">
                    <div class="item grupaSidebar" v-bind:class="{active:grupa.id==$store.state.aktivnaGrupa}" v-bind:style="{paddingLeft: '40px', color:'goldenrod', borderBottom: '1px solid #2d2e2f'}">
                        {{grupa.nazivGrupe}}
                    </div>                
                </nuxt-link>
            </span>            
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    
    export default {
        data() {
            return {
                sidebarMenuVisible: true,
                predmeti: []
            }
        },
        mounted (){
            this.predmeti=this.$store.state.predmeti;
        }
    };
</script>
<style scoped>
.ui.sidebar{
    top:50px;
    height: calc(100% - 50px)!important;
}
.grupaSidebar:hover{
    background-color:#ffffff14!important;
}
</style>