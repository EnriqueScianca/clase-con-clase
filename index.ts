class Album{
  title: string
  songs: string[]
  constructor(title, songs:string[]){
    this.title = title
    this.songs = songs
  }
}

class Banda {
  members:string[]
  albums: any[]

  constructor(members:string[], albums: Album[]){
    this.members = members
    this.albums = albums
  }
}

function main(){
  const unAlbum = new Album("TruenoTierra" , ["Oscuro Diamante"])  

  const unaBanda = new Banda(["Chizzo, Tete, Tanque, Manu"], [unAlbum])

  console.log("Yo soy unaBanda.members  " ,unaBanda.members) //Tira pinguino porque recibe members del constructor de banda
// recordemos que el new inicializa los valores del constructor que le asignamos a esa class

console.log("Yo soy unaBanda.albums    " ,unaBanda.albums) //Tira title y songs porque albums(parametro del constructor de la class Banda) hace referencia al constructor 
// de la class Album (Nosotros le pasamos como valor del parametro la clase Album... albums: Album[])
}

main()