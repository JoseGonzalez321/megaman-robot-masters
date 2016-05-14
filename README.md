# Robot Masters API for Megaman/Rockman series
Because robot masters rock! A super simple Node server listing robot masters from the Megaman/Rockman series.

Simplicity inspired by Ron Swanson quotes:
https://github.com/jamesseanwright/ron-swanson-quotes

## Production host
[https://megaman-robot-masters.herokuapp.com/](https://megaman-robot-masters.herokuapp.com/)

The `Access-Control-Allow-Origin` header is set to `*` so that you can make requests from any domain.

##Running Locally
* Make sure you have [Node.js](http://nodejs.org) installed.
* Clone repo

Run the following commands:

```sh
$ npm install
$ npm start
```

Your app should now be running on [localhost:9001](http://localhost:9001/).

## APIs

### `GET /`
Returns an array of all robot masters:
```json
[
  {
    "id": "009",
    "name": "Metal Man",
    "weapon": "Metal Blade",
    "avatar": "http://vignette1.wikia.nocookie.net/megaman/images/6/69/Metalmugshot.png",
    ...
  },
  {
    "id": "010",
    "name": "Air Man",
    "weapon": "Air Blade",
    "avatar": "http://vignette1.wikia.nocookie.net/megaman/images/a/af/Airmugshot.png",
    ...
  },
  {
    "id": "011",
    "name": "Bubble Man",
    "weapon": "Bubble Lead",
    "avatar": "http://vignette4.wikia.nocookie.net/megaman/images/5/53/Bubblemugshot.png",
    ...
  },
  ...
]
```
### `GET /fightRandom`
Returns a random robot master 
```json
{
  "id": "016",
  "name": "Wood Man",
  "weapon": "Left Shield",
  "avatar": "http://vignette1.wikia.nocookie.net/megaman/images/1/14/Woodmugshot.png",
  ...
}
```

### `GET /byId/<id>`
Returns a robot master by its `<id>` or Serial No. Leading `0` gets truncated. (e.g. `'014'` - becomes -> `14`)
```json
{
  "id": "014",
  "name": "Flash Man",
  "weapon": "Time Stopper",
  "avatar": "http://vignette2.wikia.nocookie.net/megaman/images/3/39/Flashmugshot.png",
  ...
}
    
```
### `GET /avatarOnly`
Returns robot masters with avatar (mugshot)
```json
[
  {
    "id": "009",
    "name": "Metal Man",
    "weapon": "Metal Blade",
    "avatar": "http://vignette1.wikia.nocookie.net/megaman/images/6/69/Metalmugshot.png",
    ...
  },
  {
    "id": "010",
    "name": "Air Man",
    "weapon": "Air Blade",
    "avatar": "http://vignette1.wikia.nocookie.net/megaman/images/a/af/Airmugshot.png",
    ...
  },
  ...
]
```