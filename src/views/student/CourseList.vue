<template>
  <div>
    <h3>课程列表</h3>
    <ul>
      <li v-for="c in courses" :key="c.id">
        <router-link :to="`/student/course/${c.id}`">{{ c.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const courses = [
  { id: 1, name: '民谣吉他入门' },
  { id: 2, name: '电吉他进阶' }
]
</script>
