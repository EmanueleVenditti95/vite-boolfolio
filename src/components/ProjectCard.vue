<template>
    <div class="card">
        <div class="content">
            <h3 v-if="project.type" class="type">{{ project.type.name }}</h3>
            <h2>{{ project.title }}</h2>
            <div class="technologies">
                <span v-for="technology in project.technologies">
                    -{{ technology.name }}
                </span>
            </div>
            <p>{{ project.description }}</p> 
            <p>
                <router-link :to="{ name:'show.project', params: { slug: project.slug }}">Vedi progetto</router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss">
.card {
    padding: 10px;
    flex-basis: calc(100%/4);
    .content {
        padding: 20px;
        background-color: rgb(205, 202, 202,0.5);
        border-radius: 10px;
    }
    .type {
        color: red;
    }
    .technologies {
        margin: 10px 0;
        font-style: italic;
    }
}
</style>