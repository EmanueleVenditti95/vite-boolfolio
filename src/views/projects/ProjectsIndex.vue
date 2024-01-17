<template>
    <div class="container">
        <h1>Progetti :</h1>
        <div class="card">
            <ProjectCard v-for="project in projects" :project="project" :key="project.id" />
        </div>
        <ul class="pages">
            <li :class="currentPage===n ? 'active' : ''"
                v-for="n in lastPage" @click="changePage(n)">
                {{ n }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
import ProjectCard from '../../components/ProjectCard.vue';

export default {
    data() {
        return {
            projects: [],
            lastPage: 0,
            currentPage: 1
        }
    },
    components: {
        ProjectCard
    },
    methods: {
        fetchProjects() {
            axios.get('http://127.0.0.1:8000/api/projects', {
                params: {
                    page: this.currentPage
                }
            })
                .then((response) => {
                    console.log(response);
                    this.projects = response.data.results.data;
                    this.lastPage = response.data.results.last_page;
                })
        },
        changePage(n) {
            this.currentPage = n;
            this.projects = [];
            this.fetchProjects();
        }
    },
    created() {
        this.fetchProjects();
    }
}
</script>

<style lang="scss">
.container {
    max-width: 1200px;
    margin: 0 auto;

    .card {
        display: flex;
        flex-wrap: wrap;
    }
}

.pages {
    justify-content: center;
    display: flex;
    gap: 20px;
    li{
        cursor: pointer;
        font-size: large;
    }
    .active {
        text-decoration: underline;
        color: red;
    }
}
</style>