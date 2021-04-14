<script>
  import { onMount } from 'svelte';

  let Component;

  const { component, fallback, ...props } = $$props;

  onMount(() => {
    component().then(mod => {
      // Artificial timeout to show lazy loading
      setTimeout(() => {
        Component = mod.default;
      }, 1000);
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
