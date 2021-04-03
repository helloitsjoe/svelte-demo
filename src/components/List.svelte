<script>
  const initialLanguages = [
    { name: 'JavaScript', color: 'red' },
    { name: 'Haskell', color: 'cornflowerblue' },
    { name: 'Elm', color: 'goldenrod' },
    { name: 'Python', color: 'magenta' },
    { name: 'Java', color: 'blueviolet' },
    { name: 'C++', color: 'lime' },
  ];

  let languages = [...initialLanguages];
  const removeFirst = () => {
    languages = languages.slice(1);
  };
  const reset = () => {
    languages = languages;
  };
</script>

<h2>Languages:</h2>
<ul>
  {#each languages as { name, color }, i}
    <li style="color: {color}">{i + 1}: {name}</li>
  {/each}
  <button on:click={removeFirst}>Remove first language</button>
  <button on:click={reset}>Reset</button>
</ul>

<style>
  ul {
    text-decoration: none;
  }
</style>
