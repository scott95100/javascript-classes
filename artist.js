class Artist {
    constructor(name, age, genre, label) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.label = label;
        this.albums = [];
        this.songs = [];
        this.image = ''
        this.instagram = null;
    }

    addAlbum(album) {
        this.albums.push(album);
        console.log(`this is another ${album} for ${this.name}`)
    }
    addSong(song) {
        this.songs.push(song);
        console.log(`this is another ${song} for ${this.name}`)
    }
    addImage(imageLink) {
        this.image = imageLink;
    }
    addIG(userName) {
        this.instagram = userName
    }

}
//this is an instance of the Artist class
const drake = new Artist('Drake', '33', 'hip hop', 'cash money recoreds')

//look up an artist
// find 2 albums and add those albums
// find 2 songs and add those songs
//find an image and copy the image url, add image
//find their IG username and add username

const dave = new Artist("Dave Matthews", '54', 'blues rock', 'RCA')

dave.addAlbum('crash')
dave.addAlbum('Under the Table and Dreaming')

dave.addSong('Everyday')
dave.addSong('Watch Tower')

dave.addImage('https://pyxis.nymag.com/v1/imgs/0a3/50b/a09fe23d1c207b16070f503e282b480cdf-2-dave.rsquare.w1200.jpg')

dave.addIG('@davematthewsband')
