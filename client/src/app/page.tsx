'use client'

export default function Home() {

  const pingBackend =async () =>{
    console.log('I should respond')
      const response = await fetch('http://46.202.162.85/api', {
        method: 'GET',
        headers: {"Content-Type": 'application/json'}
      })

      const result = await response.json()
      if(response.ok){
        console.log('Things went well', result)
      }
  }


  return (
    <div>
      <button onClick={() => {
    console.log("Button clicked!");
    pingBackend();
}}>GET STH</button>
      <button>Second BTN</button>
      <button className="what">what about now</button>
      <h3>This indeed appears there...</h3>
      <h2>Will this be there as well???</h2>
    </div>
  );
}
