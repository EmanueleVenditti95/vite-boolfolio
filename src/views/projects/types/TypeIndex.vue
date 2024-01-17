<script>
import axios from 'axios';

export default {
    data() {
        return {
            types:[]
        }
    },
    methods: {
        fetchTypes() {
            axios.get('http://127.0.0.1:8000/api/types')
                .then((response) => {
                    this.types = response.data.results;
                })
        }
    },
    created() {
        this.fetchTypes();
    }
}        
</script>

<template>
    <div class="container">
        <h1>Categorie :</h1>
        <ul>
            <li v-for="type in types">
                {{ type.name }}
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    li {
        font-size: large;
        margin: 10px 0;
    }
</style>