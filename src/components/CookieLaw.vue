<template>
  <transition appear :name="transitionName">
    <div class="Cookie" :class="[containerPosition, cookieTheme]" v-if="isOpen">
      <v-layout class="Cookie_header">
        <v-flex class="text-xs-left Cookie__content">
          <slot name="message" class="headline">{{ message }}</slot>
        </v-flex>
      </v-layout>
      <div class="Cookie_checkbox">
        <v-layout row class="Cookie__buttons">
          <!-- <div style="border-bottom: 1px solid white; height: 10px; position: absolute; top: 113px; width: 100%;"></div> -->
          <v-flex xs1><v-checkbox dark class="text--white" disabled label="Necessary" v-model="selected" value="Necessary"></v-checkbox></v-flex>
          <v-flex xs1><v-checkbox dark class="text--white" label="Statistics" v-model="selected" value="Statistics"></v-checkbox></v-flex>
          <v-flex xs1 class="mr-0"><v-checkbox dark class="text--white" label="Others" v-model="selected" value="Others"></v-checkbox></v-flex>
          <v-flex xs1 class="mt-3"><v-btn dark flat small @click.stop="showMore = !showMore">Show More<v-icon dark v-if="showMore">mdi-chevron-up</v-icon><v-icon dark v-else-if="!showMore">mdi-chevron-down</v-icon></v-btn></v-flex>
          <v-flex class="text-xs-right mt-3">
            <v-btn depressed :class="buttonClass" @click="accept" class="ma-0">{{ buttonText }}</v-btn>        
          </v-flex>
        </v-layout>
      </div>
        <v-layout row v-if="showMore" class="Cookie-show-more px-3">
          <v-flex class="px-3">
            <v-tabs class="Cookie-tab" v-model="showMoreTab" dark>
              <v-tab active-class="Cookie-active-tab" key="0" ripple>
                <strong>Cookie Declaration</strong>
              </v-tab>
              <v-tab active-class="Cookie-active-tab" key="1" ripple>
                <strong>About Cookie</strong>
              </v-tab>
              <v-tab-item key="0">
                <v-card flat class="d-flex" dark>
                  <v-flex xs1>
                    <v-list dense class="pt-0" >
                      <v-list-tile v-bind:class="{'Cookie-active-tab': (cookieTabClicked === item)}" v-for="item in cookieDecalration" :key="item" @click="cookieTab(item)" ripple> {{ item }} </v-list-tile>
                    </v-list>
                  </v-flex>
                  <v-flex class="text-xs-left pa-2 caption" v-if="cookieTabClicked === 'Necessary'">
                    These cookies are necessary for the Website to function and cannot be turned off in our systems. They are usually only set in response to actions made by you which amount to a request for information or services, such as logging in or filling in forms on our Website. You can set your browser to block or alert you about these cookies, but some parts of the Website will not then work. These cookies do not store any personally identifiable information.
                    <div class="py-2"></div>
                    <v-data-table hide-actions :headers="headers" :items="cookieLicenceJson.Necessary" class="elevation-5">
                      <template slot="items" slot-scope="props">
                        <!-- <td>{{ props.item.name }}</td> -->
                        <td>{{ props.item.Name }}</td>
                        <td>{{ props.item.Provider }}</td>
                        <td>{{ props.item.Purpose }}</td>
                        <td>{{ props.item.Expiry }}</td>
                        <td>{{ props.item.Type }}</td>
                      </template>
                    </v-data-table>

                  </v-flex>
                  <v-flex class="text-xs-left pa-2 caption" v-if="cookieTabClicked === 'Statistics'">
                    <p>
                      These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other websites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.
                    </p>

                    <div class="py-2"></div>
                    <v-data-table hide-actions :headers="headers" :items="cookieLicenceJson.Statistics" class="elevation-5">
                      <template slot="items" slot-scope="props">
                        <!-- <td>{{ props.item.name }}</td> -->
                        <td>{{ props.item.Name }}</td>
                        <td>{{ props.item.Provider }}</td>
                        <td>{{ props.item.Purpose }}</td>
                        <td>{{ props.item.Expiry }}</td>
                        <td>{{ props.item.Type }}</td>
                      </template>
                    </v-data-table>
                  </v-flex>
                  <v-flex class="text-xs-left pa-2 caption" v-if="cookieTabClicked === 'Others'">
                    <p>
                      Unclassified cookies are cookies that we are in the process of classifying, together with the providers of individual cookies.
                    </p>

                    <div class="py-2"></div>
                    <v-data-table  hide-actions :headers="headers" :items="cookieLicenceJson.Unclassified" class="elevation-5">
                      <template slot="items" slot-scope="props">
                        <!-- <td>{{ props.item.name }}</td> -->
                        <td>{{ props.item.Name }}</td>
                        <td>{{ props.item.Provider }}</td>
                        <td>{{ props.item.Purpose }}</td>
                        <td>{{ props.item.Expiry }}</td>
                        <td>{{ props.item.Type }}</td>
                      </template>
                    </v-data-table>
                  </v-flex>
                </v-card>
              </v-tab-item>
              <v-tab-item key="1">
                <v-card flat>
                  <v-card-text class="text-xs-left caption pt-0">
                    <v-flex class="py-2">
                      <p>Cookies are small text files that can be used by websites to make a user's experience more efficient.</p>
                      <p>The law states that we can store cookies on your device if they are strictly necessary for the operation of this site. For all other types of cookies we need your permission.</p>
                      <p>This site uses different types of cookies. Some cookies are placed by third party services that appear on our pages.</p>
                      <p>You can at any time change or withdraw your consent from the Cookie Declaration on our website.</p>
                      <p>Learn more about who we are, how you can contact us and how we process personal data in our Privacy Policy.</p>
                    </v-flex>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-flex>
        </v-layout>
      <slot :accept="accept" :close="close" :open="open">
        <div class="Cookie__content">
          <slot name="message">{{ message }}</slot>
        </div>
        <div class="Cookie__buttons">
          <a :target="target" :href="buttonLink" v-if="externalButtonLink" :class="buttonClass">{{ buttonLinkText }}</a>
          <router-link :to="buttonLink" v-if="internalButtonLink" :class="buttonClass">{{ buttonLinkText }}</router-link>
          <button :class="buttonClass" @click="accept">{{ buttonText }}</button>
        </div>
      </slot>
    </div>
  </transition>
</template>

<script>
  import * as Cookie from 'tiny-cookie'
  import json from '../koireader-cookie-licence.json'
  // import '@mdi/font/css/materialdesignicons.min.css'

  const STORAGE_TYPES = {
    local: 'localStorage',
    cookies: 'cookies'
  }

  export default {
    name: 'VueCookieLaw',
    props: {
      buttonText: {
        type: String,
        default: 'Got it!'
      },
      buttonLink: {
        type: [String, Object],
        required: false
      },
      buttonLinkText: {
        type: String,
        default: 'More info'
      },
      buttonLinkNewTab: {
        type: Boolean,
        default: false
      },
      message: {
        type: String,
        default: 'We use technologies, such as cookies, to customise content and advertising, to provide social media features and to analyse traffic to the site. We also share information about your use of our site with our trusted social media, advertising and analytics partners.'
      },
      theme: {
        type: String,
        default: 'base'
      },
      /**
       * Cookie Container position
       * bottom, top
       * @type {Object}
       */
      position: {
        type: String,
        default: 'bottom'
      },
      /**
       * Transition name has following possibilities
       * slideFromBottom
       * slideFromTop
       * fade
       * @type {Object}
       */
      transitionName: {
        type: String,
        default: 'slideFromBottom'
      },
      buttonClass: {
        type: String,
        default: 'Cookie__button'
      },
      storageName: {
        type: String,
        default: 'cookie:accepted'
      },
      storageType: {
        type: String,
        default: STORAGE_TYPES.local
      }
    },
    data () {
      return {
        supportsLocalStorage: true,
        isOpen: false,
        selected: ['Necessary'],
        showMore: false,
        showMoreTab: 0,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        cookieDecalration: ['Necessary', 'Statistics', 'Others'],
        cookieTabClicked: 'Necessary',
        cookieLicenceJson: json,
        headers: [
          { text: 'Name', value: 'name' },
          { text: 'Provider', value: 'provider' },
          { text: 'Purpose', value: 'purpose' },
          { text: 'Expiry', value: 'expiry' },
          { text: 'Type', value: 'type' }
        ]

      }
    },
    mounted () {
      console.log('mounted')
      console.log(this.cookieLicenceJson)
    },
    computed: {
      containerPosition () {
        return `Cookie--${this.position}`
      },
      cookieTheme () {
        return `Cookie--${this.theme}`
      },
      externalButtonLink () {
        return typeof this.buttonLink === 'string' && this.buttonLink.length
      },
      internalButtonLink () {
        return typeof this.buttonLink === 'object' && this.buttonLink != null && Object.keys(this.buttonLink).length
      },
      target () {
        return this.buttonLinkNewTab ? '_blank' : '_self'
      },
      canUseLocalStorage () {
        return this.storageType === STORAGE_TYPES.local && this.supportsLocalStorage
      }
    },
    created () {
      if (this.storageType === STORAGE_TYPES.local) {
        // Check for availability of localStorage
        try {
          const test = '__vue-cookielaw-check-localStorage'

          window.localStorage.setItem(test, test)
          window.localStorage.removeItem(test)
        } catch (e) {
          console.info('Local storage is not supported, falling back to cookie use')
          this.supportsLocalStorage = false
        }
      }

      if (!this.getVisited() === true) {
        this.isOpen = true
      }
    },
    methods: {
      setVisited () {
        if (this.canUseLocalStorage) {
          localStorage.setItem(this.storageName, true)
        } else {
          Cookie.set(this.storageName, true)
        }
      },
      getVisited () {
        if (this.canUseLocalStorage) {
          return localStorage.getItem(this.storageName)
        } else {
          return Cookie.get(this.storageName)
        }
      },
      accept () {
        this.setVisited(this.selected)
        this.isOpen = false
        this.$emit('accept')
      },
      close () {
        this.isOpen = false
      },
      open () {
        if (!this.getVisited() === true) {
          this.isOpen = true
        }
      }
    }
  }
</script>

<style lang="scss">
@import "~@nextindex/next-scss/next-scss.scss";
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.Cookie {
  position: fixed;
  overflow: hidden;
  box-sizing: border-box;
  z-index: 9999;
  width: 100%;
  flex-direction: column;

  > * {
    margin: rem(15) 0;
    align-self: center;
  }

  @include media($sm-up) {
    flex-flow: row;

    > * {
      margin: 0;
    }
  }

  .Cookie--top {
    top: 0;
    left: 0;
    right: 0;
  }

  .Cookie--bottom {
    bottom: 0;
    left: 0;
    right: 0;
  }

  .Cookie__button {
    cursor: pointer;
    align-self: center;
    white-space: nowrap;
  }

  @mixin generateTheme($theme, $backgroundColor, $fontColor, $buttonBackgroundColor, $buttonFontColor: #fff, $buttonRadius: 0) {
    .Cookie--#{$theme} {
      background: $backgroundColor;
      color: $fontColor;
      padding: 1.250em;

        .Cookie__button {
          background: $buttonBackgroundColor;
          padding: 0.625em 3.125em;
          color: $buttonFontColor;
          border-radius: $buttonRadius;
          border: 0;
          font-size: 1em;

          &:hover {
            background: darken($buttonBackgroundColor, 10%);
          }
      }
    }
  }
}
.Cookie__buttons > div:nth-child(4) > button {
    margin: 0 !important;
}

.Cookie__button {
  cursor: pointer;
  align-self: center;
}
.Cookie_checkbox {
  display: flex;
}
.Cookie_header {
  display: flex;
  padding: 20px 0;
  // justify-content: space-between;
  align-items: baseline;
}

.Cookie-tab a {
  font-size: 12px !important;
  height: 40px;
}

.Cookie-show-more {
    position: relative;
    bottom: 10px;
}

.Cookie-tab .tabs__items {
    overflow-y: visible;
    height: 100px;
}

.Cookie-active-tab {
    background-color: rgba(0,0,0,.12) !important;
    text-shadow: none;
}

@mixin generateTheme(
  $theme,
  $backgroundColor,
  $fontColor,
  $buttonBackgroundColor,
  $buttonFontColor: #fff,
  $buttonRadius: 0
) {
  .Cookie--#{$theme} {
    background: $backgroundColor;
    color: $fontColor;
    padding: 1.25em;
    .Cookie__button {
      background: $buttonBackgroundColor !important;
      padding: 0 3.125em;
      color: $buttonFontColor;
      border-radius: $buttonRadius;
      &:hover {
        background: darken($buttonBackgroundColor, 10%);
      }
    }
  }
}
@include generateTheme("base", #f1f1f1, #232323, #97d058);
@include generateTheme("base--rounded", #f1f1f1, #232323, #97d058, #fff, 20px);
@include generateTheme("blood-orange", #424851, #fff, #ad2624);
@include generateTheme(
  "blood-orange--rounded",
  #424851,
  #fff,
  #e76a68,
  #fff,
  20px
);
@include generateTheme("dark-lime", #424851, #fff, #97d058);
@include generateTheme(
  "dark-lime--rounded",
  #424851,
  #fff,
  #97d058,
  #fff,
  20px
);
@include generateTheme("royal", #fbc227, #232323, #726cea, #fff);
@include generateTheme("royal--rounded", #fbc227, #232323, #726cea, #fff, 20px);
.slideFromTop-enter,
.slideFromTop-leave-to {
  transform: translate(0px, -12.5em);
}
.slideFromTop-enter-to,
.slideFromTop-leave {
  transform: translate(0px, 0px);
}
.slideFromBottom-enter,
.slideFromBottom-leave-to {
  transform: translate(0px, 12.5em);
}
.slideFromBottom-enter-to,
.slideFromBottom-leave {
  transform: translate(0px, 0px);
}
.slideFromBottom-enter-active,
.slideFromBottom-leave-active,
.slideFromTop-enter-active,
.slideFromTop-leave-active {
  transition: transform 0.4s ease-in;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>