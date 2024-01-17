<script>
import axios from 'axios';

export default {
    data(){
        return {
            project:{},
        }
    },
    methods: {
        fetchProject() {
            axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
            .then((response) => {
                this.project = response.data.results;
            }).catch((error) => {
                if(error.response.status === 404) {
                this.$router.push({ name: 'not-found' });
                }
            })
        }
    },
    created() {
       this.fetchProject(); 
    }
}
</script>

<template>
    <div class="container">
        <ul>
            <li><h2 class="type">{{ project.type?.name }}</h2></li>
            <li><h1>{{ project.title }}</h1></li>
            <li class="technologies">
                <span v-for="technology in project.technologies">
                    -{{ technology.name }}
                </span>
            </li>
            <li><p>{{ project.description }}</p></li>
        </ul>
    </div>
</template>

<style lang="scss">
   .type {
        color: red;
    }
    .technologies {
        margin: 10px 0;
        font-style: italic;
    }
</style>