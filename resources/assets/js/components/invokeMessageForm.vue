<template>
    <a class="dropdown-menu_item" id="openUserMessage" href="#" @click.prevent="invoke">Дать объевление</a>
</template>

<script>

    export const bus = new Vue();

    export default {
        name: "invokeMessageForm",
        data(){
            return {
                status: false
            }
        },
        methods: {
            invoke(){
                bus.$emit('invoke')
            }
        }
    }
</script>

<style scoped>

</style>