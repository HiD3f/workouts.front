
<template>
    <div class="bg-white">
        <div v-for="exercise in exercises" :key="exercise.id">{{ exercise.title }}</div>
    </div>
</template>

<script>
import { fetchExercises } from '@/services/apiService'

export default {
    data() {
        return {
            exercises: []
        }
    },
    async created() {
        try {
            this.exercises = await fetchExercises()
        } catch (error) {
            console.error('Failed to fetch exercises:', error)
        }
    }
}
</script>