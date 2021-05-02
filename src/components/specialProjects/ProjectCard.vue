<template>
    <div>
        <b-container > 
        <b-row>
            <!-- PROJECT CONTAINER -->
            <b-col :key="project.id" v-for="project in projects" cols="12" md="6" >
                <b-container class="project-container mt-5 mb-5" >
                    <b-row >
                    <b-col cols="4">
                        <b-img :src="project.img" alt="common planet logo" class="project-img" ></b-img>
                    </b-col>

                    <b-col cols="8">
                        <h3>{{project.title}}</h3>
                        <p>{{project.text}}</p>
                        <b-link>{{project.link}}</b-link>
                    </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
        </b-container>
    </div>
   
</template>


<script>
export default {
    props:{
        projects: Array
    },
}
</script>
console.log(projects);

<style lang="sass" scoped>
.project-container
  border: 2px solid #3dffc5
  padding: 30px
  box-shadow: 0px 0px 15px grey
  

.project-img
    border-radius: 50%
    width: 100%
</style>