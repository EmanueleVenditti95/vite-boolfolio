<template>
    <div class="card">
        <div class="content">
            <h2>{{ project.title }}</h2>
            <p>{{ project.description }}</p> 
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

<style lang="scss" scoped>
.card {
    padding: 10px;
    flex-basis: calc(100%/4);
    .content {
        padding: 20px;
        background-color: rgb(205, 202, 202,0.5);
        border-radius: 10px;
    }
}
</style>