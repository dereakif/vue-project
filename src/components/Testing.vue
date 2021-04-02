<template>
    <div class="test-class" style="font-size:30px">good bye<h1>{{text}}</h1></div>
</template>
<script>
export default {
    name: 'Testing',
    props:{
        text: String
    }
}
</script>
<style scoped>
.test-class{
    background-color: red;
    height: 100px;
}
</style>