(function(global, factory) {
  console.log(global, factory);
})(
  typeof window !== "underfined" ? window : this
)