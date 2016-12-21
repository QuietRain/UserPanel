class User {
	public static user: User;
	level: number;

	// pet: Pet;

	heroes: Hero[] = [];

	constructor(level:number) {
		this.level = level;
		if(!User.user){
			User.user = this;
		}
		return User.user;
	}



	//高阶属性写法

	get heroesInTeam() {
		return this.heroes.filter(hero => hero.isInTeam);//过滤器，过滤所有在队伍中的英雄isInteam
	}



	AddHero(hero: Hero) {
		this.heroes.push(hero);
	}

}
