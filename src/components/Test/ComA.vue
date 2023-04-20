<!-- 組件 A --> 
<template>
    <div> 
        <B :value="aValue"></B> 
        <C></C> 
        <!-- 在組件 A 的模板中，使用 v-bind 將需要傳遞的值綁定到 B 的 value 屬性上： -->

    </div>
</template> 
<script>
import B from './ComB.vue'
import C from './ComC.vue'
export
    default
    { name: 'A', components: { B, C }, data() { return { aValue: 'hello world' } } } 
</script>



