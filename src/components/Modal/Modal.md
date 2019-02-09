Modal generico

```jsx
 initialState = {show: false};
 <div>
  <button  onClick={() => setState({show: true})}> Show Modal </button>
  <Modal onClick={() => setState({show: false})} show={state.show}>
    Lo que quieras dentro Lo que quieras dentro Lo que quieras dentro Lo que quieras dentro Lo que quieras dentro
    <button className="close" onClick={() => setState({show: false})}>
      Close
    </button>
  </Modal>
</div>
```
