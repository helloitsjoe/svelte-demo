<script>
  export let initial;
  export let idx;

  let current = initial;
</script>

<li>
  <span>{idx + 1}</span>
  <span style={`color: ${initial.color}`}>{initial.name}</span><span
    style={`color: ${current.color}`}>{current.name}</span
  >
</li>

<style>
  li {
    display: flex;
    justify-content: space-between;
  }

  span {
    /* align-self: flex-start; */
    flex: 0;
  }

  span::after {
    content: '';
    flex: auto;
  }
</style>
