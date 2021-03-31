<template>
  <footer class="footer">
    Made by
    <a href="https://github.com/ricklee1998/" target="_blank" rel="noopener" class="footer__link">Ricky</a>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  @include flexbox;
  @include justify-content(center);
  margin-top: 8rem;
  margin-bottom: 3px;
  font-size: 1.2rem;
  color: #bdbdbd;

  &__link {
    margin-left: 0.42rem;

    &:hover {
      color: #a7a7a7;
      text-decoration: underline;
    }
  }
}
</style>