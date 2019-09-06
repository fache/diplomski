<template>
  <div>
    <nuxt/>
  </div>
</template>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
@media screen and (max-width: 500px) {
  #etfIkona{
    display:none;
  }
  .sekcija {
    padding-right: 1.5em;
    padding-top: 15px;
    padding-bottom:15px;
  }
  .checkboxPadding{
    padding-top:15px;
  }
  .lijeviPaddingSidebar{
    padding-left: 1.5em;
  }
  .lijeviPadding{
    padding-left: 1.5em;
  }
}
@media screen and (min-width: 500px) {
    .sekcija {
      padding-right: 3em;
      padding-top: 30px;
      padding-bottom:30px;
    }
    .checkboxPadding{
      padding-top:25px;
    }
    .lijeviPaddingSidebar{
      padding-left: calc(240px + 3em);
    }
    .lijeviPadding{
      padding-left: 3em;
    }
}
.uredivanjeSidebar:hover{
  background-color:#ffffff14!important;
}
#toogleSidebarOn{
  position: absolute;
  top:15px;
  left:70px;
  font-size: 2em;
  cursor:pointer;
}
#toogleSidebarOff{
  font-size: 2em;
  cursor:pointer;
}
#home{
  font-size: 2em;
  cursor:pointer;
  display:contents;
}
#home2{
  position: absolute;
  top:15px;
  left:20px;
  font-size: 2em;
  cursor:pointer;
}
</style>
