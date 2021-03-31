<script>
  import { Header, Wrapper, Count } from './components';
  import Form from './components/Form.svelte';
  export let date;
</script>

<main>
  <Header name="Svelte" {date} />
  <Wrapper><Form /><Count /></Wrapper>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
