<template>
    <span>{{ formattedDateTime }}</span>
  </template>
  
  <script>
  export default {
    name: 'DateTimeComponent',
    data() {
      return {
        formattedDateTime: ''
      };
    },
    methods: {
      updateDateTime() {
        const date = new Date();
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        this.formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      }
    },
    mounted() {
      this.updateDateTime();
      setInterval(this.updateDateTime, 1000);
    }
  };
  </script>