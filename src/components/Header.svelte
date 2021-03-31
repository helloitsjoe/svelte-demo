<script>
  export let date;
  export let name;
  let showDate = true;
  const toggleDate = () => {
    showDate = !showDate;
  };
</script>

<h1>Hello {name}!</h1>
{#if showDate}
  <p>Today is {date.toLocaleDateString()}</p>
{:else}
  <p>Today is **/**/****</p>
{/if}
<button on:click={toggleDate}>
  {showDate ? 'Hide' : 'Show'} date
</button>

<style>
  h1 {
    color: tomato;
    font-size: 4em;
    font-weight: 100;
  }
</style>
