<script setup>
import { ref } from 'vue';
import MenuBar from './components/MenuBar.vue';

const tabs = ref([
	{ title: 'Title 1', content: 'Content 1', value: '0' },
	{ title: 'Title 2', content: 'Content 2', value: '1' },
	{ title: 'Title 3', content: 'Content 3', value: '2' },
]);
</script>

<template>
	<MenuBar />
</template>
