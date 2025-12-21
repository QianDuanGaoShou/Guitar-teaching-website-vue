<template>
  <div>
    <h3>课程详情</h3>
    <router-link :to="`/student/video/${id}`">进入学习</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const id = useRoute().params.id
</script>
