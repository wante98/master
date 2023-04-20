<!-- 組件 B -->
<template>
    <div>
        <p>{{ value }}</p>
        <C :value="value"></C>
        <!-- 在組件 B 中，可以通過 this.value 獲取到父組件傳遞過來的值，然後在模板中進一步將它傳遞給組件 C： -->
    </div>
</template>
<script>
import C from './ComC.vue'
export
    default { name: 'B', props: ['value'], components: { C } }
</script>