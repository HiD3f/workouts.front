<template>
    <nav aria-label="Pagination navigation">
        <ul class="pagination flex flex-row bg-red-100">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <button class="page-link" @click="gotoPage(1)">First</button>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <button class="page-link" @click="gotoPage(currentPage - 1)">Prev</button>
            </li>
            <li v-for="page in pages" :key="page" :class="{ active: currentPage === page }" class="page-item">
                <button class="page-link" @click="gotoPage(page)">{{ page }}</button>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                <button class="page-link" @click="gotoPage(currentPage + 1)">Next</button>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                <button class="page-link" @click="gotoPage(totalPages)">Last</button>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        currentPage: {
            type: Number,
            required: true
        },
        totalPages: {
            type: Number,
            required: true
        }
    },
    computed: {
        // Create an array of page numbers for rendering the pagination buttons
        pages() {
            let pages = [];
            for (let i = 1; i <= this.totalPages; i++) {
                pages.push(i);
            }
            return pages;
        }
    },
    methods: {
        gotoPage(page) {
            if (page !== this.currentPage && page > 0 && page <= this.totalPages) {
                this.$emit('page-change', page);
            }
        }
    }
};
</script>

<style>
/* Your pagination styling */
</style>
