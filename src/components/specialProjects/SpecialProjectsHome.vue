<template>
 <main>
   <b-container class="mt-3"> 
    <h1>Special projects</h1>
    <ProjectCard :projects="projectsData"/>
   </b-container>
    
  </main>
</template>

<script>
import ProjectCard from "./ProjectCard"
export default {
  name:"SpecialProjectsHome",
  components:{
    ProjectCard
  },

  data() {
    return{
    projectsData:[
      {
        img:"https://picsum.photos/200", 
        title:"common planet",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum esse nam aliquid exercitationem tempore architecto? Itaque nostrum impedit fugit asperiores.",
        link:"https://open.currents.fm/g/femalepressure",
        socialMedia: [
        {icon: "twitter", link: "https://twitter.com/female_pressure"},
        {icon: "facebook", link: "https://www.facebook.com/femalepressure"},
        {icon: "soundcloud", link: "https://soundcloud.com/femalepressure"},
        ]
      },
      {
        img:"https://picsum.photos/200", 
        title:"female:pressure podcast",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum esse nam aliquid exercitationem tempore architecto? Itaque nostrum impedit fugit asperiores.",
        link:"https://open.currents.fm/g/femalepressure",
        socialMedia: [
        {icon: "twitter", link: "https://twitter.com/female_pressure"},
        {icon: "facebook", link: "https://www.facebook.com/femalepressure"},
        {icon: "soundcloud", link: "https://soundcloud.com/femalepressure"},
        ]
      },
      {
        img:"https://picsum.photos/200", 
        title:"rojava compilation",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum esse nam aliquid exercitationem tempore architecto? Itaque nostrum impedit fugit asperiores.",
        link:"https://open.currents.fm/g/femalepressure",
        socialMedia: [
        {icon: "twitter", link: "https://twitter.com/female_pressure"},
        {icon: "facebook", link: "https://www.facebook.com/femalepressure"},
        {icon: "soundcloud", link: "https://soundcloud.com/femalepressure"},
        ]
      },
      {
        img:"https://picsum.photos/200", 
        title:"facts",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum esse nam aliquid exercitationem tempore architecto? Itaque nostrum impedit fugit asperiores.",
        link:"https://open.currents.fm/g/femalepressure",
        socialMedia: [
        {icon: "twitter", link: "https://twitter.com/female_pressure"},
        {icon: "facebook", link: "https://www.facebook.com/femalepressure"},
        {icon: "soundcloud", link: "https://soundcloud.com/femalepressure"},
        ]
      },
      {
        img:"https://picsum.photos/200", 
        title:"visibility blog",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum esse nam aliquid exercitationem tempore architecto? Itaque nostrum impedit fugit asperiores.",
        link:"https://open.currents.fm/g/femalepressure",
        socialMedia: [
        {icon: "twitter", link: "https://twitter.com/female_pressure"},
        {icon: "facebook", link: "https://www.facebook.com/femalepressure"},
        {icon: "soundcloud", link: "https://soundcloud.com/femalepressure"},
        ]
      },
      {
        img:"https://picsum.photos/200", 
        title:"pussy riot freedom compilation",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum esse nam aliquid exercitationem tempore architecto? Itaque nostrum impedit fugit asperiores.",
        link:"https://open.currents.fm/g/femalepressure",
        socialMedia: [
        {icon: "twitter", link: "https://twitter.com/female_pressure"},
        {icon: "facebook", link: "https://www.facebook.com/femalepressure"},
        {icon: "soundcloud", link: "https://soundcloud.com/femalepressure"},
        ]
      }
    ]
    }
  },
}
</script>

