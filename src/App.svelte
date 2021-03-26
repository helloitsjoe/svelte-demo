<script>
  import { Header, Wrapper } from './components';
  const date = new Date().toDateString();
</script>

<main>
  <Header name="Svelte" {date} />
  <Wrapper>I fit in a slot</Wrapper>
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
