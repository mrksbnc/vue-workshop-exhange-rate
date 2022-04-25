<template>
    <button class="badge" @click="openCard()" >
        {{name}}
    </button>
</template>

<script>
export default {
    name: "Badge",
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    methods: {
        openCard(){
            this.$emit('open-card', this.name);
        }
    },
}
</script>

<style scoped>
.badge {
    border: 1px solid black;
    width: 40px;
}

</style>
