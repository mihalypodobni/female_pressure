<template>
  <b-container
    :class="
      $store.state.isMobile ? 'body-container mt-5 p-0' : 'body-container mt-5'
    "
  >
    <div class="mb-4">
      <h3>visibility</h3>
      <p>
        female:pressure is a transnational online database and network of
        women*, AFAB, transgender, transfeminine, transmasculine, intersex
        [+gender optional], genderqueer, gender nonconforming, a-gender and/or
        non-binary DJs, musicians, composers, producers, visual artists, agents,
        journalists and researchers working in the realms of electronic music
        and visual arts. It is a publicly accessible source of information, a
        means of communication and a tool to disclose the existence and the work
        of women*, non-binary, transgender and gender fluid people in this
        seemingly cis-male dominated field. In 2021, female:pressure celebrates
        its 23rd anniversary.
      </p>

      <p>
        Founded by Vienna based Electric Indigo in 1998, female:pressure is the
        technological answer to the recurring assertions of an alleged lack of
        female* artists in this field. The project started out as a simple html
        list until Viennese media artist and open source expert Andrea Mayr
        programmed the database in 2001. With about 180 listed artists from 19
        countries 20 years ago, female:pressure can now be proud of including
        over 2700 members from 82 countries [May 2021]. Members can log in and
        update their individual profile, most of the profiles link to the
        artists' web pages and contain contact information.
      </p>

      <p>
        "Why are there so few women in the electronic music scene?" We have
        heard this question countless times. While we think that the perceived
        lack of gender diversity is caused by a complex combination of societal
        factors, experience shows that women* are hardly less active. In fact,
        their activities are less recognised and additionally often forgotten in
        historiography. Raising visibility [and audibility] of players in the
        electronic music scenes is therefore one of our main goals.
      </p>
    </div>

    <div class="mb-4">
      <h3>vision</h3>
      <p>
        The female:pressure project is continuously growing and advancing.
        Initially planned as a mere insight into the status quo, it now also
        serves an archival purpose with links to works of artists who are no
        longer active or who are sadly deceased. Over the years, we broadened
        the simple focus on women in favour of an explicit inclusion of
        transgender and non-binary members. We practice an intersectional and
        anti-racist approach to our work and try to listen to and learn from
        each other on the female:pressure mailing list.
      </p>

      <p>
        The mailing list has been the primary medium of communication within the
        network since 2004 and about half of the artists listed in the database
        are subscribed to it. Important results of the list's activities are our
        FACTS Surveys [2013, 2015, 2017 and 2020], a call for diversity
        #female:pressure [2013], our Perspectives Festival in Berlin [2013,
        2015], the VISIBILITY tumblr [2015-2019], our #Rojava awareness &
        solidarity campaign [2016] and the female:pressure podcast series [since
        2018].
      </p>

      <p>You never walk alone!</p>
    </div>

    <div class="mb-4">
      <h3>Press</h3>
      <b><b-link class="link">our press review </b-link></b>[as of 2013]
      <p><b>download the logos and some pictures</b></p>
    </div>

    <div class="mb-4">
      <h3>Credits</h3>
    </div>

    <div>
      <h3>contact</h3>
      <p>info@femalepressure.net</p>
    </div>
  </b-container>
</template>

<style lang="sass" scoped>
.link
  @include link
</style>
