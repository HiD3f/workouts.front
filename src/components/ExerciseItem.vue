<template>
    <div class="exercise-item">
        <h3>{{ exercise.title }}</h3>
        <p>{{ exercise.description }}</p>
        <!-- Add more exercise properties here as needed -->
    </div>
</template>

<script>
export default {
    props: {
        exercise: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
.exercise-item {
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>
