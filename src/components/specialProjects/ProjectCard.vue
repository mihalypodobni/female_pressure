<template>
    <div>
        <b-row>
            <!-- PROJECT CONTAINER -->
            <b-col :key="project.id" v-for="project in projects" cols="12" md="6" >
                <b-container class="project-container mt-4" value="200px">
                    <b-row >
                    <b-col cols="4">
                        <b-img :src="project.img" alt="common planet logo" class="project-img" ></b-img>
                    </b-col>

              <b-col cols="8">
                <h3>{{ project.title }}</h3>
                <p>{{ project.text }}</p>
                <b-link :src="project.link" class="link" target="_blank">{{ project.link }}</b-link>

                <!-- SOCIAL MEDIA LINKS -->
                <b-row>
                  <b-button variant="link"
                            :href="link.link"
                            target="_blank"
                            v-for="(link,idx) in project.socialMedia"
                            :key="link.icon + idx"
                            class="p-1 link">
                    <font-awesome-icon :icon="['fab', link.icon]" size="lg" class="mx-2 my-2"/>
                  </b-button>
                </b-row>

              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>

<<<<<<< HEAD
                        <!-- SOCIAL MEDIA LINKS -->
                            <b-row>
                                <b-button variant="link" 
                                :href="link.link" 
                                target="_blank" 
                                v-for="(link,idx) in project.socialMedia" 
                                :key="link.icon + idx"
                                class="p-1 link">
                                    <font-awesome-icon :icon="['fab', link.icon]" size="lg" class="mx-2 my-2"/>
                                </b-button>
                            </b-row>
                        
                    </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
    </div>
   
=======
>>>>>>> d60ff94048c7b5e03cf1ce0e108d0c3acb2948b0
</template>


<script>
export default {
  props: {
    projects: Array
  },
  computed: {
    console: () => console,
  }
}
</script>

<style lang="sass" scoped>
.project-container
  border: 2px solid $borderlink
  padding: 30px
  box-shadow: 0px 0px 15px grey
<<<<<<< HEAD
  height: 300px
  
=======

>>>>>>> d60ff94048c7b5e03cf1ce0e108d0c3acb2948b0
.link
  @include blue-link

.project-img
  border-radius: 50%
  width: 100%
</style>