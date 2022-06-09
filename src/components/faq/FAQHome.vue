<template>
  <div>
    <Header>
      faq
    </Header>
    <b-container class="mt-5 f-body-container">
      <!-- MEMBERSHIP AND DATABASE -->
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1 main-card">
          <b-card-header
              class="accordion-container mb-3 accordion-button h5 py-2 px-4"
              role="tab"
              v-b-toggle.accordion-1
          >
            <b class="accordion-title">membership & database</b>
          </b-card-header>

          <b-collapse
              id="accordion-1"
              accordion="my-accordion"
              role="tabpanel"
              class="mb-3"
          >
            <p class="question-title mb-1">
              can anyone become a member of female:pressure ?
            </p>
            <p>
              If you identify as a woman*, AFAB [assigned female at birth], transgender, transfeminine, transmasculine,
              intersex [+gender optional], genderqueer, gender nonconforming, a-gender and/or non-binary, you are very
              welcome to join the network. From experience we can tell that people who are working in the realm of
              electronic music, the related visual arts, club culture, or digital arts benefit most from a membership
              because they share more common interests with the other members of the network than people from other
              fields. You don't have to be a musician or DJ. We welcome booking agents, promoters, curators, researchers,
              journalists, dancers and many more professionals whose work is centered around electronic music.
            </p>

            <p class="question-title mb-1">how can i join the network ?</p>
            <p>
              Please click on the "join the network" button and fill out the application form. Our admin team will
              review the application and you'll get a confirmation email when it has been processed. You will get your
              login if your application was approved and will be able to create your full profile.
            </p>

            <p class="question-title mb-1">
              what does it imply to be a member ?
            </p>
            <p>
              First and foremost it means that your name is listed in our online database and that people who search
              for matching criteria can find your name, links, and work field[s]. Secondly, you can choose to
              subscribe to the female:pressure mailing list which is our primary medium of communication within the
              network. About half the artists listed in the database are also subscribed to the mailing list.
            </p>

            <p class="question-title mb-1">can men become members, too ?</p>
            <p>
              Yes, transgender men are very welcome to join.
            </p>

            <p class="question-title mb-1">
              how much does the membership cost ?
            </p>
            <p>A membership with female:pressure is free of charge.</p>

            <p class="question-title mb-1">
              i know a dj who is not listed in the database, how can they be added ?
            </p>
            <p>
              Please tell them to fill out the application form using the "join the network" button. We only list
              people who explicitly want to be included in the database. We don't list artists whom we haven't
              been in touch with and who did not consent to being listed.
            </p>
            <p class="question-title mb-1">
              i am part of the female:pressure facebook group. why am i not listed in the database ?
            </p>
            <p>
              The database on femalepressure.net is not connected with any Facebook group. If you want to be listed in
              the official female:pressure database, please click on the "join the network" button and fill out the
              application form.
            </p>
            <p class="question-title mb-1">
              i don't want to be listed in the database anymore. what should i do ?
            </p>
            <p>
              You can login and delete your entry from the database. In case you can't remember your login credentials,
              please use the "forgot password ?" link.
            </p>
            <p class="question-title mb-1">
              why is [famous female dj] not listed in your database ?
            </p>
            <p>
              We only list people who consented to being listed. There are a lot of great women who dj and who are not
              part of this network. This might be because they don't know about female:pressure, they prefer not to be
              associated with it or they simply forgot about joining.
            </p>
            <p class="question-title mb-1">
              i want to contact an artist who is listed on your site but the links don't work.
            </p>
            <p>
              Unfortunately, many links become obsolete really quickly. If you come across a dead link, please let us
              know at info@femalepressure.net. We will try to find an updated link and contact information if applicable.
            </p>
            <p class="question-title mb-1">
              why do you list deceased djs ?
            </p>
            <p>
              The female:pressure project is continuously growing. Initially planned as a mere insight into the status
              quo, it now also serves an archival purpose with links to works of artists who are no longer active or
              who are sadly deceased.
            </p>
          </b-collapse>
        </b-card>
      </div>

      <!-- MAILING LIST -->
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1 main-card">
          <b-card-header
              class="accordion-container mb-3 accordion-button h5 py-2 px-4"
              role="tab"
              v-b-toggle.accordion-2
          >
            <b class="accordion-title">mailing list</b>
          </b-card-header>

          <b-collapse
              id="accordion-2"
              accordion="my-accordion"
              role="tabpanel"
              class="mb-3"
          >
            <p class="question-title mb-1">
              can i subscribe to your mailing list if i'm not a female:pressure member ?
            </p>
            <p>
              Usually, only people who are listed in the database are subscribed to the mailing list. We do make
              exceptions sometimes, though. If you want to subscribe to the list but don't want to have a profile
              on the website, please let us know why.
            </p>
            <p class="question-title mb-1">
              how do i send a message to the mailing list ?
            </p>
            <p>
              To send a message to all list subscribers, simply send an email to female_pressure@mailman.sil.at from
              your subscription address. Please don't add any attachments to your mail as the maximum message size is
              40 KB.
            </p>
            <p class="question-title mb-1">
              how can i unsubscribe from the female:pressure mailing list ?
            </p>
            <p>
              To unsubscribe or change the subscription mode please visit the
              <b-link class="f-link" href="http://mailman.sil.at/mailman/listinfo/female_pressure" target="_blank"
              >list info website</b-link> and scroll to the bottom of the page to submit your subscription email
              address. If you are having troubles unsubscribing you can also email info@femalepressure.net and ask for
              help.
            </p>
            <p class="question-title mb-1">
              if i unsubscribe from the mailing list, will I still be listed in the database ?
            </p>
            <p>
              Yes, the database and the mailing list work independently from each other. Unsubscribing from the mailing
              list does not affect your entry in the database. If you also want to delete your profile on
              femalepressure.net, please login there and delete your profile.
            </p>
            <p class="question-title mb-1">
              can i change my mailing list settings when i login on femalepressure.net ?
            </p>
            <p>
              <b-link class="f-link" href="http://femalepressure.net" target="_blank">female:pressure</b-link> works
              independently from the Mailman mailing list. Therefore, you can't change your mailing list settings in
              your femalepressure.net profile. To change your subscription settings, please go to the
              <b-link class="f-link" href="http://mailman.sil.at/mailman/listinfo/female_pressure" target="_blank"
              >list info website</b-link> and scroll to the bottom of the page, enter your subscription email address
              and click on the "Unsubscribe and edit options".
            </p>
            <p class="question-title mb-1">
              how can I retrieve my login credentials for the mailman mailing list ?
            </p>
            <p>
              Please go to the
              <b-link class="f-link" href="http://mailman.sil.at/mailman/listinfo/female_pressure" target="_blank"
              >list info website</b-link> and scroll to the bottom of the page, enter your subscription email address
              and click on the "Unsubscribe and edit options" which will lead you to a page where you can click on a
              "Email My Password To Me" button.
            </p>
            <p class="question-title mb-1">
              are there rules for the mailing list ?
            </p>
            <p>
              Yes, you can find the mailing list netiquette in our
              <b-link class="f-link" href="http://femalepressure.net/coc.html#netiquette" target="_blank"
              >code of conduct</b-link>.
            </p>
          </b-collapse>
        </b-card>
      </div>

      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1 main-card">
          <b-card-header
              class="accordion-container mb-3 accordion-button h5 py-2 px-4"
              role="tab"
              v-b-toggle.accordion-3
          >
            <b class="accordion-title">login and public artist profile</b>
          </b-card-header>

          <b-collapse
              id="accordion-3"
              accordion="my-accordion"
              role="tabpanel"
              class="mb-3"
          >
            <p class="question-title mb-1">
              how can i retrieve my login credentials for femalepressure.net ?
            </p>
            <p>
              Please click on the "forgot password ?" link in the login menu item and follow the instructions.
            </p>
            <p class="question-title mb-1">
              i think i signed up many years ago. how can i get back my login ?
            </p>
            <p>
              You can either use the "forgot password?" link to retrieve your login information or, if need be, you can
              also contact info@femalepressure.net and ask for help.
            </p>
            <p class="question-title mb-1">
              my entry in the database contains outdated information. can i update my profile ?
            </p>
            <p>
              Yes, every member listed in the database can login and update their profile. Please use the "login" link
              from the main menu.
            </p>
          </b-collapse>
        </b-card>
      </div>

      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1 main-card">
          <b-card-header
              class="accordion-container mb-3 accordion-button h5 py-2 px-4"
              role="tab"
              v-b-toggle.accordion-4
          >
            <b class="accordion-title"
            >participation in female:pressure projects</b
            >
          </b-card-header>

          <b-collapse
              id="accordion-4"
              accordion="my-accordion"
              role="tabpanel"
              class="mb-3"
          >
            <p class="question-title mb-1">
              i want to play at female:pressure events. what should i do?
            </p>
            <p>
              We don't have a centralized organization for female:pressure events. They all happen on initiative of
              proactive members of this decentralized network. To reach out to the organizer of an event, we can
              recommend posting a message to our mailing list asking for the person responsible with a link to your work.
            </p>
            <p class="question-title mb-1">
              i want to make a mix for the female:pressure podcast series. what should I do ?
            </p>
            <p>
              Please send an application to podcast@femalepressure.net with links to recent mixes and a bio.
            </p>
            <p class="question-title mb-1">
              i want to be featured in a female:pressure radio show. what should i do ?
            </p>
            <p>
              The various female:pressure radio shows are created independently by different hosts. We recommend
              reaching out to them via our mailing list with links to your work and a specification in which
              broadcast you would like to be included.
            </p>
          </b-collapse>
        </b-card>
      </div>

      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1 main-card">
          <b-card-header
              class="accordion-container mb-3 accordion-button h5 py-2 px-4"
              role="tab"
              v-b-toggle.accordion-5
          >
            <b class="accordion-title">female:pressure community</b>
          </b-card-header>

          <b-collapse
              id="accordion-5"
              accordion="my-accordion"
              role="tabpanel"
              class="mb-3"
          >
            <p class="question-title mb-1">
              which languages do you use within the network ?
            </p>

            <p>
              Our common language is English. We sometimes have conversations in German and occasionally in Spanish,
              too. Overcoming the language barriers in this wide-spread network is one of our biggest challenges since
              we have many members who are not very confident in using English. We therefore recommend the
              <b-link class="f-link" href="https://www.deepl.com/translator" target="_blank">DeepL translator</b-link>.
              It works in 26 languages and is said to be pretty reliable and [one of] the best free service[s].
            </p>
            <p class="question-title mb-1">
              what is the "member area" on femalepressure.net ?
            </p>
            <p>
              female:pressure members can make certain information available to other logged in members. This includes
              preferred pronouns, telephone number, a blurb / a short text, an email address. If you are logged in, you
              can change the level of disclosure for some information. For example, you can choose whether your email
              address is shown on your public profile, or whether only other logged in members can see it or whether it
              is private and just used for your login.
            </p>
            <p class="question-title mb-1">do you have a code of conduct ?</p>
            <p>
              Yes, this is our <b-link class="f-link" href="http://femalepressure.net/coc.html" target="_blank"
            >code of conduct</b-link>.
            </p>

            <p class="question-title mb-1">
              i have a conflict with a female:pressure member. can you help me with that ?
            </p>
            <p>
              If a member of female:pressure violated our code of conduct, please let us know at
              concierge@femalepressure.net.
            </p>
            <p class="question-title mb-1">
              how is female:pressure governed ?
            </p>
            <p>
              female:pressure is a loose, non-hierarchical, collegial D.I.Y. network. We tried to figure out how the
              community usually works and came up with
              <b-link class="f-link" href="https://communityrule.info/create/?r=1622136758831" target="_blank"
              >these rules</b-link> as a basis for discussion.
            </p>
            <p class="question-title mb-1">
              does female:pressure have a boss or a steering group ?
            </p>
            <p>
              No, we don't have a boss. But we have people who step up and do voluntary work for the community. People
              who either take care of one or several of our social media channels, who initiate or operate our projects.
              Power in decision-making is often proportionate to a participant's labor for the community.
            </p>
            <p class="question-title mb-1">
              i need more bookings. can female:pressure help me get gigs ?
            </p>
            <p>
              female:pressure consists of other artists in large parts. All activities of the community are based on
              proactive, voluntary D.I.Y. work of individual members. We are not a booking agency. However, since we
              are into mutual support it can happen that you will find opportunities to play through the network.
            </p>
            <p class="question-title mb-1">
              i have a new record / video out. will you promote my music ?
            </p>
            <p>
              We have a monthly "new releases" playlist channel on
              <b-link class="f-link" href="https://a.currents.fm/c/femalepresure" target="_blank"
              >Currents.fm</b-link> for our members' music. We link tracks and albums on Bandcamp, SoundCloud and
              sometimes YouTube on these playlists. If you are a member of our network, please notify our curation team
              about your new release at currents@femalepressure.net. Of course, you are also welcome to post news about
              your music to our mailing list.
            </p>
            <p class="question-title mb-1">
              what is the business model of female:pressure ?
            </p>
            <p>
              There is none. Running costs are covered by the founder,
              <b-link class="f-link" href="http://indigo-inc.at/" target="_blank">Electric Indigo</b-link>, and they
              are relatively low. There is no membership fee, no funding, no office, no legal entity like an association
              or similar form of organization. We were awarded with a nice prize from the
              <b-link class="f-link" href="https://tagderclubkultur.berlin/" target="_blank">Tag der Clubkultur</b-link>
              in 2020 and finally had some money to spend on redesigning our website and database.
            </p>
          </b-collapse>
        </b-card>
      </div>

      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1 main-card">
          <b-card-header
              class="accordion-container mb-3 accordion-button h5 py-2 px-4"
              role="tab"
              v-b-toggle.accordion-6
          >
            <b class="accordion-title"
            >similar projects and third party involvement</b
            >
          </b-card-header>

          <b-collapse
              id="accordion-6"
              accordion="my-accordion"
              role="tabpanel"
              class="mb-3"
          >
            <p class="question-title mb-1">
              are there similar indices and networks also for other fields than electronic music ?
            </p>
            <p>
              Yes, there are many! Some are local, others international, some genre-specific, others are intersectional.
              Please see our link collection item "networks, collectives and indices". If you know a
              network or index or collective that is not listed, please email us the link at info@femalepressure.net.
            </p>
            <p class="question-title mb-1">
              we run a comparable project and want to be listed in your links section. can you add us ?
            </p>
            <p>
              Yes, sure, the more, the better! We love to extend our links section. Please send your link and a short
              description to info@femalepressure.net.
            </p>
            <p class="question-title mb-1">
              i want to invite female:pressure to participate in my event. whom do I contact ?
            </p>
            <p>
              Please send details of your event including location, date, budget, and what exactly you want us to
              present or talk about to info@femalepressure.net.
            </p>
            <p class="question-title mb-1">
              does female:pressure form partnerships with outside organizations?
            </p>
            <p>
              Yes, we occasionally do if we see a mutual benefit. Please send your proposal to info@femalepressure.net.
            </p>
          </b-collapse>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
import Header from "../header/HeaderComp";

export default {
  components: {
    Header
  }
}
</script>

<style lang="sass" scoped>
.accordion-container
  border: 2px solid rgba(153, 252, 198, 0.5)
  background-color: white
  display: flex
  align-items: center
  cursor: pointer

  &:hover
    background-color: #99fcc6

.accordion-button
  display: flex
  align-items: center

.main-card
  border: none
  background: none
  border-radius: 0


.accordion-title
  cursor: pointer

.question-title
  color: #00BB9E
  text-transform: lowercase

.link
  color: black

.link:hover
  color: black
  text-decoration: none
</style>