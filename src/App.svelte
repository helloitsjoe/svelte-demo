<script>
  import { Router, link, Route } from 'svelte-routing';
  import { Header, Wrapper, Dates, Count, List, Form } from './components';

  export let today;
  export let isDev;

  const basepath = isDev ? '' : '/svelte-demo';
</script>

<main>
  <Header name="Svelte" />
  <Router {basepath}>
    <nav>
      <a use:link href={basepath || '/'}>Home</a>
      <a use:link href={`${basepath}/date`}>Dates</a>
      <a use:link href={`${basepath}/form`}>Form</a>
      <a use:link href={`${basepath}/count`}>Count</a>
      <a use:link href={`${basepath}/list`}>List</a>
    </nav>
    <Wrapper>
      <Route path="date"><Dates {today} /></Route>
      <Route path="form"><Form /></Route>
      <Route path="count"><Count /></Route>
      <Route path="list"><List /></Route>
    </Wrapper>
  </Router>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  nav {
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    margin: auto;
  }

  nav > a {
    flex: 1;
  }

  nav * + * {
    border-left: 1px solid lightgray;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
