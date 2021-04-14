<script>
  import { onMount } from 'svelte';

  const { component, fallback, ...props } = $$props;

  let Component;

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  onMount(() => {
    // Artificial timeout to show lazy loading
    sleep(300)
      .then(() => component())
      .then(mod => {
        Component = mod.default;
      });
  });
</script>

{#if Component}
  <Component {...props} />
{:else if fallback}
  {@html fallback}
{:else}
  <h2>Loading...</h2>
{/if}

<style>
  h2 {
    outline: none;
  }
</style>
