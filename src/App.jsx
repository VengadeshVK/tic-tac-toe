import React, { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(1);
  const [winner, setWinner] = useState('');
  const [char, setChar] = useState('X');
  const [matrix, setMatrix] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  const getBGClass = (value) => {
    if (value === 'X') return 'yellow';
    if (value === 'O') return 'orange';
    return ''
  }

  const checkWinner = () => {
    //Check row
    if (
      matrix[0][0] && 
      matrix[0][0] === matrix[0][1] && 
      matrix[0][1] === matrix[0][2]) {
      setWinner('Player ' + matrix[0][0] + ' is a winner')
      setCount(1)
    }
    if (matrix[1][0] && 
      matrix[1][0] === matrix[1][1] && 
      matrix[1][1] === matrix[1][2]) {
      setWinner('Player ' + matrix[1][0] + ' is a winner')
      setCount(1)
    }
    if (matrix[2][0]  && 
      matrix[2][0] === matrix[2][1] && 
      matrix[2][1] === matrix[2][2]) {
      setWinner('Player ' + matrix[2][0] + ' is a winner')
      setCount(1)
    }

    // Check column
    if (matrix[0][0] && 
      matrix[0][0] === matrix[1][0] && 
      matrix[1][0] === matrix[2][0]) {
      setWinner('Player ' + matrix[0][0] + ' is a winner')
      setCount(1)
    }
    if (matrix[0][1] && 
      matrix[0][1] === matrix[1][1] && 
      matrix[1][1] === matrix[2][1]) {
      setWinner('Player ' + matrix[0][1] + ' is a winner')
      setCount(1)
    }
    if (matrix[0][2] && 
      matrix[0][2] === matrix[1][2] && 
      matrix[1][2] === matrix[2][2]) {
      setWinner('Player ' + matrix[0][2] + ' is a winner')
      setCount(1)
    }

    //Check Diagonal
    if (matrix[0][0] && 
      matrix[0][0] === matrix[1][1] && 
      matrix[1][1] === matrix[2][2]) {
      setWinner('Player ' + matrix[2][2] + ' is a winner')
      setCount(1)
    }
    if (matrix[0][2] && 
      matrix[0][2] === matrix[1][1] && 
      matrix[1][1] === matrix[2][0]) {
      setWinner('Player ' + matrix[2][0] + ' is a winner')
      setCount(1)
    }
    if(count===9){
      setWinner("Match has been drawn");

      
    }
  }

  const handleClick = (r, c) => {
    if (matrix[r][c]) return;
    const tempMatrix = [...matrix]
    tempMatrix[r][c] = char;
    setMatrix(tempMatrix);
    setChar(char === 'X' ? 'O' : 'X');
    setCount(count+1)
    console.log(count)
    checkWinner();
  }

  return (
    <div className="App">
      <div className='header alignCenter ' >Tic Tac Toe</div>
      <div className='alignCenter board' >
        {!winner && <p>{char} turn now</p>}
        <div className='gameBoard' >
          {winner || 
            matrix.map((row, rIndex) => (
              <div className='row'>
                {
                  row.map((cell, cIndex) => (
                    <div
                      onClick={() => handleClick(rIndex, cIndex)}
                      className={`cell alignCenter ${getBGClass(matrix[rIndex][cIndex])}`
                      }>
                      {matrix[rIndex][cIndex]}
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
        <button onClick={() => {
          setWinner('');
          setMatrix([
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
          ])
          setChar('X')
        }}>Restart Game</button>
      </div>
    </div>
  )
}

export default App;
