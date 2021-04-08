<script>
  import { Button } from '.';

  // Just an example of props
  export let today;

  let showDate = true;
  const toggleDate = () => {
    showDate = !showDate;
  };
</script>

{#if showDate}
  <p>Today is {today.toLocaleDateString()}</p>
{:else}
  <p>Today is **/**/****</p>
{/if}

<Button on:click={toggleDate}>
  {showDate ? 'Hide' : 'Show'} date
</Button>
