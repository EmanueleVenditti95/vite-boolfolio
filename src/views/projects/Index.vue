<template>
    <div class="container">
        <h1>Progetti</h1>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            projects:[],
        }
    },
    methods: {
        fetchProjects() {
            axios.get('http://127.0.0.1:8000/api/projects')
            .then((response) => {
                console.log(response);
            })
        }
    },
    created() {
       this.fetchProjects(); 
    }
}
</script>

<style lang="scss" scoped>

</style>