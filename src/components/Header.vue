<script>
</script>

<template>
    <div class="container">
        <ul class="d-flex">
            <li>
                <router-link :to="{ name : 'home'}">Home</router-link>
            </li>
            <li>
                <router-link :to="{ name : 'projects'}">Progetti</router-link>
            </li>
            <li>
                <router-link :to="{ name : 'types'}">Categorie</router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .d-flex {
        display: flex;
        gap: 10px;
    }
</style>