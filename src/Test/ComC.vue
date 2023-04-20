<!-- 組件 C -->
<template>
    <div> 
        <p>{{ value }}</p> 
        <!-- 這樣，組件 C 就可以通過 props 獲取到從組件 A 傳遞過來的值了。 -->

    </div>
 </template>
<script>
export
    default
    { name: 'C', props: ['value'] }

</script>