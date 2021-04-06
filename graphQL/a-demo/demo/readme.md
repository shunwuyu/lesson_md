query {
  hero 
}

query {
  user {
    name
  }
}

query {
  user {
    name,
    age
  }
}

query {
	getHero(teamName:"复仇者联盟")
}

query {
	getSuperHero(heroName:"Iron man"){
    name,
    age,
    doSomething
  }
}