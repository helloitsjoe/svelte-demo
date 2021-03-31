<script>
  let count = 0;
  let squared;
  $: doubled = count * 2;
  $: {
    squared = count * count;
    console.log('squared:', squared);
  }
  const handleClick = e => {
    count++;
  };
</script>

<div>
  <p>Count is: {count}</p>
  <p>2x count is: {doubled}</p>
  <p>Count squared is: {squared}, and I logged!</p>
  <button on:click={handleClick}>Increment</button>
</div>

<style>
  div {
    margin: auto;
    padding: 2em;
    border: 1px solid tomato;
    display: flex;
    flex-direction: column;
    max-width: 500px;
  }

  p {
    margin: 0;
  }
</style>
