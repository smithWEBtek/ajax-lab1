# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


articles = Post.create([
    { title: "Where did you go?", content: "I had to get a toothbrush."},
    { title: "Why I eat grapes", content: "They are very refreshing."},
    { title: "Sally meets Walter", content: "We had a nice lunch."},
    { title: "Mother commented", content: "He'll make a good first husband."},
    { title: "My New Bike", content: "It is a Red Sting Ray"}
  ]
)