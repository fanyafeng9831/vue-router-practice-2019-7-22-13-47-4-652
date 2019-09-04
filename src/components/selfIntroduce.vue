<template>
  <div id="HelloWorld">
    <!-- <img alt="Vue logo" src="./assets/logo.png"/> -->
    <div>
      <h1>{{$store.getters.getAllMessage.msg1}}</h1>
    </div>
    <div>
      <h1>{{$store.getters.getAllMessage.msg2}}</h1>
    </div>
    <button @click="allClick">all</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function() {
    return {
      msg1: "msg1",
      msg2: "msg2"
    };
  },
  methods: {
    allClick: function() {
      this.$store.dispatch("updateMsg");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
