<template>
  <div id='loginPage'>
    <div class="ui middle aligned center aligned grid" style="height:100vh; background-color:#dadada; margin-top: 0;">
      <div class="column customSize">
        <h3 class="ui teal image header">
          <img src="../assets/etf-50x50.png" class="image" />
          <span class="content">
            Dobro došli na bolognaware <br />Elektrotehničkog fakulteta Sarajevo
          </span>
        </h3>
        <form class="ui large form" @submit.prevent="prijava" method="post">
          <div class="ui stacked segment">
            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input id="username" type="text" name="login" v-model="username" placeholder="User" />
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input id="password" type="password" name="pass" v-model="password" placeholder="Password" />
              </div>
            </div>
            <input type="submit" class="ui fluid large teal submit button" value="Prijavite se">
          </div>
          <div class="ui error message" v-bind:class="{ visible: errorMessage }">{{errorMessage}}</div>
        </form>

        <div class="ui message">
          Preuzmite <a href="https://zamger.etf.unsa.ba/static/doc/zamger-uputstva-42-nastavnik.pdf" target="_blank">uputstva za nastavnike</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        errorMessage: null,
        username: null,
        password: null,
        predmeti: []
      }
    },
    methods: {
      prijava: function () {
        this.errorMessage = null;

        axios.post('http://localhost/api_v5/auth', { login: this.username, pass: this.password })
          .then((res) => {
            if (res.data.success == "true")  {
              document.cookie ="PHPSESSID = " + res.data.sid+ "; path = /; domain=localhost; Expires=Tue, 19 Jan 2038 03:14:07 GMT;"
              this.$store.state.userId = res.data.userid;
              this.$store.state.sid = res.data.sid;
              this.$store.state.active = "aktivan";

              axios.get('http://localhost/api_v5/person', { withCredentials: true })
                  .then((res) => {
                    if (res.statusText == "OK") {
                      this.$store.state.userIme = res.data.name;
                      this.$store.state.userPrezime = res.data.surname;


                axios.get('http://localhost/api_v5/course/teacher/'+this.$store.state.userId, { withCredentials: true }).then((res) => {
                for(let i=0; i<res.data.results.length; i++){
                    let predmet={};
                    predmet.naziv=res.data.results[i].CourseUnit.name;
                    predmet.id=res.data.results[i].CourseUnit.id;                    
                    predmet.grupe=[];
                    axios.get('http://localhost/api_v5/group/course/'+predmet.id, { withCredentials: true }).then((res) => {
                        if(res.statusText="OK"){
                            for(let l=0; l<res.data.results.length; l++){
                                let grupa={};
                                grupa.id=res.data.results[l].id;
                                grupa.nazivGrupe=res.data.results[l].name;
                                predmet.grupe.push(grupa);
                            }
                            this.$router.push('/');     
                        }
                    }).catch((err, res) => {
                        console.log(err);
                    });
                    this.predmeti.push(predmet);
                }
                this.$store.state.predmeti=this.predmeti;
            }).catch((err, res) => {
            console.log(err);
            });


                             
                    }
                      else {
                      }
                    })       
            }
            else {
              this.errorMessage = "Nepoznat korisnik";
          }
        })
      }
    }
  }
  
  </script>

<style scoped>
  @media screen and (max-width: 768px) {
    .customSize {
      width: 85% !important;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    .customSize {
      width: 50% !important;
    }
  }

  @media screen and (min-width: 992px) {
    .customSize {
      width: 40% !important;
    }
  }
</style>
