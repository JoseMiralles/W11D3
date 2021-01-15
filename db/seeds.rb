# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create([
    {username: "JoseMiralles", password:"123456"},
    {username: "Luchentio", password:"123456"},
    {username: "Tester", password:"123456"},
]);

Bench.destroy_all
Bench.create([
    {description: "Nice, and warm spot.", seating: 2, lat: 37.560270718096135, lng: -77.47435531824333},
    {description: "Nice View!", seating: 4, lat: 37.55830278715352, lng: -77.47276612114392},
    {description: "Good food close-by.", seating: 3, lat: 37.55933613917545, lng: -77.4765104890244}
]);