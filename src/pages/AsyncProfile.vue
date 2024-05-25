<template>
  <div>
    <h1>{{ name }}</h1>
    <p>{{ bio }}</p>
    <p>{{ location }}</p>
    <p>{{ random }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'John Doe',
      bio: 'Software Developer',
      location: 'San Francisco, CA',
      random: Math.random()
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 24px;
  font-weight: bold;
}

p {
  margin-bottom: 10px;
}
</style>
