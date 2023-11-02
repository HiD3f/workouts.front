<template>
    <div class="exercise-item bg-slate-800 text-white shadow-sm">
        <img :src="getImageUrl(exercise.images[0])" :alt="exercise.name" />
        <h3>{{ exercise.name }}</h3>
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
    methods: {
        getImageUrl(imagePath) {
            // You may need to adjust this base URL to match where your images are served from
            const baseUrl = 'http://localhost:3000/exercises/';
            return `${baseUrl}${imagePath}`;
        }
    }
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
