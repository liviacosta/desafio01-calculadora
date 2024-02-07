import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Container, Content, Row } from "./styles";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }
  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }
  const handleSumNumbers = () => {
    setOperation('+');

    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
    }
  }
  const handleMinusNumbers = () => {
    setOperation('-');
    
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setFirstNumber('0');
    }
  }
  const handleMultiplyNumbers = () => {
    setOperation('*');
    
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setFirstNumber('0');
    }
  }
  const handleDivisorNumbers = () => {
    setOperation('/');
    
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
    } else {
      const result = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(result));
      setFirstNumber('0');
    }
  }

  const handleOnEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '*':
          handleMultiplyNumbers();
          break;
        case '/':
          handleDivisorNumbers();
          break;
        default:
          break;
      }
      setOperation('');
    }

  }
  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="C" onClick={handleOnClear}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="/" onClick={handleDivisorNumbers}/>
          <Button label="*" onClick={handleMultiplyNumbers}/>
          <Button label="=" onClick={handleOnEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
