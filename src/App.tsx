import { useCallback, useState } from 'react'
import './App.css'

function getNbNeighbors(lineIndex: number, colIndex: number, matrix: boolean[][]) {
  let cpt = 0
  
  if(lineIndex - 1 >= 0 && colIndex - 1 >= 0 && matrix[lineIndex - 1][colIndex - 1]) {
    cpt++
  }
  if(lineIndex - 1 >= 0 && matrix[lineIndex - 1][colIndex]) {
    cpt++
  }
  if(lineIndex - 1 >= 0 && colIndex + 1 < matrix[lineIndex].length && matrix[lineIndex - 1][colIndex + 1]) {
    cpt++
  }
  if(colIndex - 1 >= 0 && matrix[lineIndex][colIndex - 1]) {
    cpt++
  }
  if(colIndex + 1 < matrix[lineIndex].length && matrix[lineIndex][colIndex + 1]) {
    cpt++
  }
  if(lineIndex + 1 < matrix.length && colIndex - 1 >= 0 && matrix[lineIndex + 1][colIndex - 1]) {
    cpt++
  }
  if(lineIndex + 1 < matrix.length && matrix[lineIndex + 1][colIndex]) {
    cpt++
  }
  if(lineIndex + 1 < matrix.length && colIndex + 1 < matrix[lineIndex].length && matrix[lineIndex + 1][colIndex + 1]) {
    cpt++
  }
  return cpt
}

function getNbVoisinsVivants(ligne:number,colonne:number, matrice: boolean[][]):number {
    
  let res=0;
  if(ligne-1>=0&&colonne-1>=0&&matrice[ligne-1][colonne-1]){
    res++;
  }
  if(ligne-1>=0&&matrice[ligne-1][colonne]){
    res++;
  }
  if(ligne-1>=0&&colonne+1<=9&&matrice[ligne-1][colonne+1]){
    res++;
  }
  if(colonne-1>=0&&matrice[ligne][colonne-1]){
    res++;
  }
  if(colonne+1<=9&&matrice[ligne][colonne+1]){
    res++;
  }
  if(ligne+1<=9&&colonne-1>=0&&matrice[ligne+1][colonne-1]){
    res++;
  }
  if(ligne+1<=9&&matrice[ligne+1][colonne]){
    res++;
  }
  if(ligne+1<=9&&colonne+1<=9&&matrice[ligne+1][colonne+1]){
    res++;
  }
  return res;
}

function getNouvelleMatrice(matrice: boolean[][]){
  let tab = [...matrice];
  console.table(tab)
  matrice.forEach((ligne,i)=>{
    ligne.forEach((elt,j)=>{
      if (elt) {
        if(getNbNeighbors(i,j, matrice)===2||getNbNeighbors(i,j, matrice)===3) {
          tab[i][j]=true;
        }
        else {
          tab[i][j]=false;
        }
      }
      else {
        if(getNbNeighbors(i,j, matrice)===3) {
          tab[i][j]=true;
        }
        else {
          tab[i][j]=false;
        }
      }
    })
  })

  return tab
}

function App() {
  const [count, setCount] = useState(0)
  const [matrice, setMatrice] = useState(
    [[true,false,false,false,false,false,false,false,false,false],
    [false,false,true,true,false,false,false,false,false,false],
    [false,false,true,true,false,false,false,false,false,false],
    [false,false,false,true,false,false,true,false,false,false],
    [false,false,false,false,false,false,true,false,false,false],
    [false,false,false,false,false,false,true,false,false,false],
    [false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false]
  ])
  
  const generer=useCallback(()=>{ 
    const newMatrice = getNouvelleMatrice(matrice)
    setMatrice(newMatrice)
    setCount(count + 1);
  },[matrice, count])


  return (
    <>
      <div>
        <h1>Jeu de la vie</h1>
        <div className='compteur'>Le nombre de génération est : {count}</div>
        <div>
        
          {matrice.map((ligne)=> (
            <div>{ligne.map((element)=>(
              <span className='case'>{
                element?
                  <span> X </span>:
                  <span> O </span>
              }
              </span>
            ))
            }</div>
          ))
          }
        </div>
        <div className="card">
          <button onClick={generer}>
            prochaine génération
          </button>
        </div>
      </div>
    </>
  )
}

export default App


const tabTest = [
  [false, true, false],
  [false, true, false],
  [false, true, false],
]

console.table(tabTest)
console.log('test', getNbVoisinsVivants(1, 0, tabTest))

const tabCount = tabTest.map((line, i) => (
  line.map( (e, j) => getNbNeighbors(i, j, tabTest))
))

console.table(tabCount)