<template>
    <div class="container">
        <h1>Progetti :</h1>
        <div class="card">
            <ProjectCard v-for="project in projects" :project="project" :key="project.id"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ProjectCard from '../../components/ProjectCard.vue';

export default {
    data(){
        return {
            projects:[],
        }
    },
    components: {
        ProjectCard
    },
    methods: {
        fetchProjects() {
            axios.get('http://127.0.0.1:8000/api/projects')
            .then((response) => {
                console.log(response);
                this.projects = response.data.results.data;
            })
        }
    },
    created() {
       this.fetchProjects(); 
    }
}
</script>

<style lang="scss" scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    .card {
        display: flex;
        flex-wrap: wrap;
    }
}

</style>