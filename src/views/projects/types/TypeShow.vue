<script>
import axios from 'axios';

export default {
    data(){
        return {
            type:'',
            projects:[]
        }
    },
    methods: {
        fetchTypedProjects() {
            axios.get(`http://127.0.0.1:8000/api/types/${this.$route.params.name}`)
            .then((response) => {
                this.projects = response.data.results.data;
                this.type = this.$route.params.name;
            })
        }
    },
    created() {
        this.fetchTypedProjects();
    }
}
</script>

<template>
    <div class="container">
        <h1>{{ type }} :</h1>
        <ol>
            <li v-for="project in this.projects">
                {{ project.title }}
            </li>
        </ol>
    </div>
</template>

<style>
</style>