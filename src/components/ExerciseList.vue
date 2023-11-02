<template>
    <div class="bg-white grid grid-cols-6 gap-4">

        <exercise-item v-for="exercise in paginatedExercises" :key="exercise.id" :exercise="exercise" />
        <!-- PaginationNav Component -->
        <pagination-nav :current-page="currentPage" :total-pages="totalPages" @page-change="changePage" />
    </div>
</template>

<script>
import { fetchExercises } from '@/services/apiService';
import PaginationNav from '@/components/PaginationNav.vue'; // Ensure this path is correct
import ExerciseItem from '@/components/ExerciseItem.vue'; // Ensure this path is correct


export default {
    components: {
        PaginationNav,
        ExerciseItem
    },
    data() {
        return {
            exercises: [],
            pageSize: 36,
            currentPage: 1
        };
    },
    computed: {
        paginatedExercises() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.exercises.slice(start, end);
        },
        totalPages() {
            return Math.ceil(this.exercises.length / this.pageSize);
        }
    },
    methods: {
        async loadExercises() {
            try {
                this.exercises = await fetchExercises();
            } catch (error) {
                console.error('Failed to fetch exercises:', error);
            }
        },
        changePage(page) {
            this.currentPage = page;
            // Here you can add any additional logic you want to run when a page changes
        }
    },
    created() {
        this.loadExercises();
    }
};
</script>

<style>
/* Add some basic styling if needed */
</style>
