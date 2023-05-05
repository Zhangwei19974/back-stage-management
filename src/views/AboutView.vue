<template>
  <div class="">
    <h1>This is an about page</h1>
    {{ name }}
  </div>
</template>
<script lang="ts">

export default {
  data: () => {
    return {
      name: 'asdasd',
    };
  },
  destroyed() {
  }
};
</script>
