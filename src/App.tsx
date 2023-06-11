import { useState } from 'react'
import './App.css'

function isBalancedParentheses(str: string): boolean {
  // Implementation of the balanced parentheses checker
  // (same code as provided in the previous answer)
  const stack: string[] = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0) {
        return false; // Unbalanced parentheses
      }
      stack.pop();
    }
  }

  return stack.length === 0; // Balanced parentheses if the stack is empty
}

function App() {
  const [input, setInput] = useState('');
  const [isBalanced, setIsBalanced] = useState(false);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/[^()]/g, ''); // Remove any characters other than parentheses
    setInput(value);
  };

  const checkBalancedParentheses = () => {
    const balanced = isBalancedParentheses(input);
    setIsBalanced(balanced);
  };

  return (
    <div className="container">
      <div className="center">
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="button" onClick={checkBalancedParentheses}>Check</button>
        <div>Result: {isBalanced ? 'True' : 'False'}</div>
      </div>
    </div>
  );
}

export default App
