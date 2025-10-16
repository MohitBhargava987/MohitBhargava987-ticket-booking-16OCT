**MOVIES ROUTES**

1. **Fetch all movies from DB**
  curl --location 'http://localhost:4040/api/movies/list'

2. **Add a new movie (title, genre, duration)**
  curl --location 'http://localhost:4040/api/movies/add_movie' \
--header 'Content-Type: application/json' \
--data '{
    "title": "Inception2.2",
    "genre": "Sci-Fi",
    "duration": 148
}'

**SHOWS ROUTES**

1. **Get all shows for a specific movie**
   curl --location 'http://localhost:4040/api/shows/1'

2. **Add a new show for a movie (movie_id, show_time)**
   curl --location 'http://localhost:4040/api/shows/add_show' \
--header 'Content-Type: application/json' \
--data '{
    "movie_id": 2,
    "show_time": "2025-10-16 19:30:00"
}'


**SEATS ROUTES**

1. **Get all seats for a show**
   curl --location 'http://localhost:4040/api/seats/1'

2. **Update seat status (available/booked)**
   curl --location --request PUT 'http://localhost:4040/api/seats/update_seat_status' \
--header 'Content-Type: application/json' \
--data '{
    "seat_id": 6,
    "status": "booked"
}'


**BOOKINGS ROUTES**

1. **Fetch all bookings (with movie, show, and seat info)**
   curl --location 'http://localhost:4040/api/bookings/'

2. **Create a booking and mark seat as booked**
   curl --location 'http://localhost:4040/api/bookings/create_booking' \
--header 'Content-Type: application/json' \
--data '{
    "user_name": "Mohit",
    "show_id": 1,
    "seat_id": 1
}'
