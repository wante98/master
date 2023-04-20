<template>
    <div> <p>{{ data }}</p>
        <button @click="updateData('Hello world!')">Update Data</button>
</div> 
</template> 
<script>
import { mapState, mapMutations } from 'vuex'
export default
    {
        computed: 
            { 
                ...mapState(['data']) 
            }, 
        methods:
            { 
                ...mapMutations(['updateData']) 
            }
    }
</script>