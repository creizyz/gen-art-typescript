import './App.css';
import Canvas from './Canvas';

function drawLine(ctx : CanvasRenderingContext2D, x0 : number, y0 : number, x1 : number, y1 : number) {
  ctx.beginPath()
  ctx.moveTo(x0, y0)
  ctx.lineTo(x1, y1)
  ctx.stroke()
}

function drawRandomLine(ctx : CanvasRenderingContext2D, xmin : number, ymin : number, xmax : number, ymax : number) {
  if (Math.random() > 0.5) {
    drawLine(ctx, xmin, ymin, xmax, ymax)
  } else {
    drawLine(ctx, xmin, ymax, xmax, ymin)
  }
}

function App() {
  const generativeArt = (ctx : CanvasRenderingContext2D, width : number, height : number) => {
    const step = 10;
    for (let x = 0; x < width / step; x++) { 
      for (let y = 0; y < height / step; y++) { 
        drawRandomLine(ctx, x * step, y * step, (x+1) * step, (y+1) * step)
      }  
    }
  }

  return (
    <div className="App">
      <Canvas width={400} height={400} drawer={generativeArt} />
    </div>
  );
}

export default App;
