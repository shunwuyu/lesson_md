function func() {
  console.log(this)
}

func.call(null);