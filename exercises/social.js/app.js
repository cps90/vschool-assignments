var skier = {
  name: "Courtney",
  age: 28,
  favoriteResorts: ["Brighton", "Alta", "Snowbird"],
  skierFriends: [
    {
      name: "Carolyn",
      age: 28,
      yearsSkied: 4,
      numberOfYearsSkiing: function() {
        this.yearsSkied++;
      },
      favoriteResorts: [
        {
          resortName: "Brighton",
          numberOfLifts: 4,
          numberOfRuns: 40
        },
        {
          resortName: "Park City",
          numberOfLifts: 20,
          numberOfRuns: 100
        },
        {
          resortName: "Sundance",
          numberOfLifts: 10,
          numberOfRuns: 60
        }
      ]
    },
    {
      name: "Rebecca",
      age: 28,
      favoriteResorts: [
        {
          resortName: "Park City",
          numberOfLifts: 20,
          numberOfRuns: 100
        },
        {
          resortName: "Alta",
          numberOfLifts: 4,
          numberOfRuns: 30
        },
        {
          resortName: "Solitude",
          numberOfLifts: 6,
          numberOfRuns: 50
        }
      ]
    },
    {
      name: "Abby",
      age: 30,
      favoriteResorts: [
        {
          resortName: "Solitude",
          numberOfLifts: 6,
          numberOfRuns: 50
        },
        {
          resortName: "Brighton",
          numberOfLifts: 4,
          numberOfRuns: 40
        },
        {
          resortName: "Alta",
          numberOfLifts: 4,
          numberOfRuns: 30
        }
      ]
    }
  ]
}

skier.skierFriends[0].numberOfYearsSkiing()
skier.skierFriends[0].numberOfYearsSkiing()
skier.skierFriends[0].numberOfYearsSkiing()

console.log(skier.skierFriends[0].yearsSkied)
