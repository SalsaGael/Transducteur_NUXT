<template>
    <section>
        <div v-if="gaelou()">
            <h1 :class="{pop: gaelou()}">PR</h1>
       <span>{{text}}</span>
       <nuxt-link to="/">go to home </nuxt-link>
        </div>
        <div v-else>
            <h2>lol</h2>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
           text: "banane"     
        }
    },
    methods: {
        lol: function() {
            alert('pop')
        },
        gaelou: function() {
            return true
        }
    },
    computed: {
        gael: () => {

        }
    }
}
</script>

<style scoped>
.pop {
    color: red;
}
</style>