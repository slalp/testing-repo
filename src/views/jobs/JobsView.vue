<template>
  <h1>Jobs</h1>
  <div v-for='job in jobs' :key="job.id">
    <router-link :to="{name : 'details', params: {id: job.id}}">
      <h2>{{job.title}}</h2>
    </router-link>
  </div>
 
</template>

<script>

export default {
 
 data(){
    return{
        jobs:[
            {title:'barber', id: 1, details:'lorem'},
            {title:'designer', id: 2, details:'lorem'},
            {title:'developer', id: 3, details:'lorem'},
        ]
    }
 }
}

</script>

<style>

</style>