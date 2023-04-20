<template>
  <div class="hello">
    <h1>Wayne and Rebecca's Wedding</h1>

    <h3>WEDDING DAY DETAIL</h3>
    <ul>
      <li>Wedding details</li>
      <li>AUGUST 6, 2023</li>
      <li>上午10:00–下午2:30</li>
      <li>淡水將捷金鬱金香酒店</li>
      <li>淡水區中正路一段2-1號, 新北市, 25172, 台灣</li>
    </ul>
    <row>
      <div> 
        <Slider v-model="value" range />
      </div>
    </row>
  </div>
</template>

<script>
export default {
  data () {
            return {
                value: [20, 50]
            }
        },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
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
