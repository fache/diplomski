<template>
    <div>
        <div class="ui sidebar visible inverted vertical menu">
            <nuxt-link :to="{path:'/'}">
                <div class="item" v-bind:style="{borderBottom: '1px solid #2d2e2f'}">
                    Dobro došli,<br>{{this.$store.state.userIme}} {{this.$store.state.userPrezime}}
                </div>
            </nuxt-link>
            <a class="item">
                Poruke (0)
            </a>    
            <div class="item">
                Uredite predmet
            </div>         
            <nuxt-link  :to="{path:'/opcijepredmeta/'+predmet, query: { id: predmet }}">
                <div class="item uredivanjeSidebar" v-bind:class="{active:$store.state.uredivanjePredmeta=='opcijepredmeta'}" v-bind:style="{paddingLeft: '40px', color:'goldenrod', borderBottom: '1px solid #2d2e2f'}">
                    Opcije predmeta
                </div>                
            </nuxt-link>
            <nuxt-link  :to="{path:'/obavjestenja/'+predmet, query: { id: predmet }}">
                <div class="item uredivanjeSidebar" v-bind:class="{active:$store.state.uredivanjePredmeta=='obavjestenja'}" v-bind:style="{paddingLeft: '40px', color:'goldenrod', borderBottom: '1px solid #2d2e2f'}">
                    Obavještenja za studente
                </div>                
            </nuxt-link>
            <nuxt-link  :to="{path:'/raspored/'+predmet, query: { id: predmet }}">
                <div class="item uredivanjeSidebar" v-bind:class="{active:$store.state.uredivanjePredmeta=='raspored'}" v-bind:style="{paddingLeft: '40px', color:'goldenrod', borderBottom: '1px solid #2d2e2f'}">
                    Raspored
                </div>                
            </nuxt-link>
            <nuxt-link  :to="{path:'/uredigrupe/'+predmet, query: { id: predmet }}">
                <div class="item uredivanjeSidebar" v-bind:class="{active:$store.state.uredivanjePredmeta=='uredigrupe'}" v-bind:style="{paddingLeft: '40px', color:'goldenrod', borderBottom: '1px solid #2d2e2f'}">
                    Grupe za predavanja i vježbe
                </div>                
            </nuxt-link>
            <nuxt-link  :to="{path:'/ispiti/'+predmet, query: { id: predmet }}">
                <div class="item uredivanjeSidebar" v-bind:class="{active:$store.state.uredivanjePredmeta=='ispiti'}" v-bind:style="{paddingLeft: '40px', color:'goldenrod', borderBottom: '1px solid #2d2e2f'}">
                    Ispiti
                </div>                
            </nuxt-link>
            <nuxt-link  :to="{path:'/zadace/'+predmet, query: { id: predmet }}">
                <div class="item uredivanjeSidebar" v-bind:class="{active:$store.state.uredivanjePredmeta=='zadace'}" v-bind:style="{paddingLeft: '40px', color:'goldenrod', borderBottom: '1px solid #2d2e2f'}">
                   Kreiranje i unos zadaća
                </div>                
            </nuxt-link>
            <nuxt-link  :to="{path:'/konacnaocjena/'+predmet, query: { id: predmet }}">
                <div class="item uredivanjeSidebar" v-bind:class="{active:$store.state.uredivanjePredmeta=='konacnaocjena'}" v-bind:style="{paddingLeft: '40px', color:'goldenrod', borderBottom: '1px solid #2d2e2f'}">
                    Konačna ocjena
                </div>                
            </nuxt-link>
            <nuxt-link  :to="{path:'/izvjestaji/'+predmet, query: { id: predmet }}">
                <div class="item uredivanjeSidebar" v-bind:class="{active:$store.state.uredivanjePredmeta=='izvjestaji'}" v-bind:style="{paddingLeft: '40px', color:'goldenrod', borderBottom: '1px solid #2d2e2f'}">
                    Izvještaji
                </div>                
            </nuxt-link>
            <nuxt-link  :to="{path:'/sistembodovanja/'+predmet, query: { id: predmet }}">
                <div class="item uredivanjeSidebar" v-bind:class="{active:$store.state.uredivanjePredmeta=='sistembodovanja'}" v-bind:style="{paddingLeft: '40px', color:'goldenrod', borderBottom: '1px solid #2d2e2f'}">
                    Sistem bodovanja
                </div>                
            </nuxt-link>
            <nuxt-link  :to="{path:'/kvizovi/'+predmet, query: { id: predmet }}">
                <div class="item uredivanjeSidebar" v-bind:class="{active:$store.state.uredivanjePredmeta=='kvizovi'}" v-bind:style="{paddingLeft: '40px', color:'goldenrod', borderBottom: '1px solid #2d2e2f'}">
                    Kvizovi (beta)
                </div>                
            </nuxt-link>
            <nuxt-link  :to="{path:'/projekti/'+predmet, query: { id: predmet }}">
                <div class="item uredivanjeSidebar" v-bind:class="{active:$store.state.uredivanjePredmeta=='projekti'}" v-bind:style="{paddingLeft: '40px', color:'goldenrod', borderBottom: '1px solid #2d2e2f'}">
                    Projekti
                </div>                
            </nuxt-link>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    
    export default {
        data() {
            return {
                predmet:null
            }
        },
        mounted (){
            this.predmet=this.$route.query.id;
        }
    };
</script>
<style scoped>
.ui.sidebar{
    top:50px;
    height: calc(100% - 50px)!important;
}
.uredivanjeSidebar:hover{
    background-color:#ffffff14!important;
}
</style>