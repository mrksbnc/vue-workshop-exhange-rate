<template>
    <div class="card">
        <div class="card-header">
            <h1>{{ cardData.title }}</h1>
            <button class="close-button" @click="closeCard()">x</button>
        </div>
        <br>
        H: {{cardData.h}}
        <br>
        D: {{cardData.d}}
        <br>
        M: {{cardData.m}}
        <br>
        Y: {{cardData.y}}
        <br>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        cardData: {
            title: {
                type: String,
                required: true,
            },
            h: {
                type: Number,
                required: true,
            },
            d: {
                type: Number,
                required: true,
            },
            m: {
                type: Number,
                required: true,
            },
            y: {
                type: Number,
                required: true,
            },
        },
    },
    methods: {
        closeCard(){
            this.$emit('close-card', {name: this.cardData.title});
        }
    }
}
</script>

<style scoped>
.card {
    border: 1px solid black;
    width: 100px;
    margin: 5px;
    padding: 15px;
}
.card-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin: 10px;
}
.close-button {
    margin-left: 10px;
}
</style>
