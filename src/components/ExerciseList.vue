<template>
    <div class="exercise-list">
        <h1>Exercise List</h1>
        <div v-if="exercises.length > 0">
            <ExerciseItem v-for="exercise in exercises" :key="exercise.id" :exercise="exercise"></ExerciseItem>
        </div>
        <div v-else>
            <p>No exercises found.</p>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import ExerciseItem from "./ExerciseItem.vue";

export default {
    data() {
        return {
            exercises: [],
        };
    },
    components: {
        ExerciseItem,
    },
    async created() {
        try {
            const response = await axios.get("http://localhost:3001/exercises");
            this.exercises = response.data;
        } catch (error) {
            console.error("An error occurred while fetching the exercises:", error);
        }
    },
};
</script>

<style scoped>
.exercise-list {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}
</style>