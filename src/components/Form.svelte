<script>
  let name = '';
  let extra = false;
  let onSubmit = e => {
    // e.preventDefault();
    console.log('name', name);
    console.log('extra', extra);
  };
</script>

<form on:submit|preventDefault={onSubmit}>
  <label>
    Name:
    <input bind:value={name} />
  </label>
  <label>
    Extra!
    <input type="checkbox" bind:checked={extra} />
  </label>
  <button type="submit">Submit</button>
</form>
