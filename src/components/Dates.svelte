<script>
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

<button on:click={toggleDate}>
  {showDate ? 'Hide' : 'Show'} date
</button>
