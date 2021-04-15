<script>
  import { onMount } from 'svelte';

  const { component, fallback, ...props } = $$props;

  let Component;
  let showFallback = false;

  const showFallbackAfterTimeout = (ms = 200) => {
    setTimeout(() => {
      if (!Component) {
        showFallback = true;
      }
    }, ms);
  };

  onMount(() => {
    showFallbackAfterTimeout();

    // Artificial timeout to show lazy loading
    // sleep(0)
    //   .then(() => component())
    component().then(mod => {
      Component = mod.default;
    });
  });
</script>

{#if Component}
  <Component {...props} />
{:else if showFallback}
  {#if fallback}
    {@html fallback}
  {:else}
    <h2>Loading...</h2>
  {/if}
{/if}

<style>
  h2 {
    outline: none;
  }
</style>
