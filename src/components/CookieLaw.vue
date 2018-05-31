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
          <v-flex xs1><v-checkbox dark class="text--white" disabled label="Necessary" v-model="selected" value="Necessary"></v-checkbox></v-flex>
          <v-flex xs1><v-checkbox dark class="text--white" label="Statistics" v-model="selected" value="Statistics"></v-checkbox></v-flex>
          <v-flex xs1><v-checkbox dark class="text--white" label="Others" v-model="selected" value="Others"></v-checkbox></v-flex>
          <v-flex class="text-xs-right">
            <!-- <a :target="target" :href="buttonLink" v-if="externalButtonLink" :class="buttonClass">{{ buttonLinkText }}</a>
            <router-link :to="buttonLink" v-if="internalButtonLink" :class="buttonClass">{{ buttonLinkText }}</router-link> -->
            <v-btn depressed :class="buttonClass" @click="accept">{{ buttonText }}</v-btn>        
          </v-flex>
        </v-layout>
      </div>
    </div>
  </transition>
</template>

<script>
  import * as Cookie from 'tiny-cookie'
  export default {
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
      }
    },
    data () {
      return {
        supportsLocalStorage: true,
        isOpen: false,
        selected: ['Necessary']
      }
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
      }
    },
    created () {
      // Check for availability of localStorage
      try {
        const test = '__vue-cookielaw-check-localStorage'

        window.localStorage.setItem(test, test)
        window.localStorage.removeItem(test)
      } catch (e) {
        console.error('Local storage is not supported, falling back to cookie use')
        this.supportsLocalStorage = false
      }

      if (!this.getVisited() === true) {
        this.isOpen = true
      }
    },
    methods: {
      setVisited (data) {
        if (this.supportsLocalStorage) {
          localStorage.setItem('cookie:accepted', JSON.stringify(data))
        } else {
          Cookie.set('cookie:accepted', JSON.stringify(data))
        }
      },
      getVisited () {
        if (this.supportsLocalStorage) {
          return JSON.parse(localStorage.getItem('cookie:accepted'))
        } else {
          return JSON.parse(Cookie.get('cookie:accepted'))
        }
      },
      accept () {
        this.setVisited(this.selected)
        this.isOpen = false
        this.$emit('accept', this.selected)
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
.Cookie__buttons {
  display: flex;
  flex-direction: column;

  > * {
    margin: rem(5) 0;
  }

  @include media($sm-up) {
    flex-direction: row;
    > * {
      margin: 0 rem(15);
    }
  }
}
.Cookie__buttons > div:nth-child(4) > button {
    margin: 0;
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