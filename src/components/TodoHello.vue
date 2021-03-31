<template>
  <div class="hello">
    <p class="hello__guide">
      <span class="hello__guide-text">Nice to meet you!</span>
      <span class="hello__guide-text">I’m going to remember your tasks.</span>
    </p>
    <p class="hello__ask">What is your name?</p>
    <label for="user-name">Name</label>
    <div class="main-input">
      <input
        class="hello__input"
        type="text"
        id="user-name"
        placeholder="Let me know your name"
        v-model="userName"
        v-on:keypress.enter="addUserName(userName)"
      />
      <button class="hello__button">
        <span class="blind">Enter</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      userName: ""
    };
  },
  methods: {
    ...mapMutations({
      addUserName: "setUserName"
    })
    // addUserName() {
    //   this.$store.commit("setUserName", this.userName);
    // }
  }
};
</script>

<style lang="scss">
.hello {
  max-width: $max-width;
  margin: 0 auto;
  letter-spacing: 0.03rem;
  color: #fff;

  label {
    display: none;
  }

  &__guide {
    padding-top: 2.4rem;
    margin-bottom: 6rem;
    font-size: 1.6rem;
    line-height: 1.75;
    letter-spacing: 0.03rem;
  }

  &__guide-text {
    display: block;
  }

  &__ask {
    font-size: 2.8rem;
    font-weight: bold;
    margin-bottom: 4rem;
  }
}

//애니메이션 관리
.hello {
  &__guide-text {
    @for $i from 1 through 2 {
      &:nth-child(#{$i}) {
        @include animation(fadeShow, 450ms, 1, #{$i * 200}ms);
      }
    }
  }
  &__ask {
    @include animation(fadeShow, 750ms, 1, 900ms);
  }
  .main-input {
    @include animation(fadeShow, 850ms, 1, 1100ms);
  }
}
</style>