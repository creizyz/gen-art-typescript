import './App.css';
import Canvas from './Canvas';

function drawLine(ctx : CanvasRenderingContext2D, x0 : number, y0 : number, x1 : number, y1 : number) {
  ctx.beginPath()
  ctx.moveTo(x0, y0)
  ctx.lineTo(x1, y1)
  ctx.stroke()
}

function drawRandomLine(ctx : CanvasRenderingContext2D, xmin : number, ymin : number, xmax : number, ymax : number) {
  const r = Math.random()
  const x = [ xmin, xmin + (xmax - xmin) / 2, xmax ]
  const y = [ ymin, ymin + (ymax - ymin) / 2, ymax ]
  if (r > 0.75) {
    drawLine(ctx, x[0], y[0], x[2], y[2])
  } else if (r > 0.5) {
    drawLine(ctx, x[0], y[2], x[2], y[0])
  } else if (r > 0.25) {
    ctx.beginPath()
    ctx.arc(x[1], y[1], 1, 0, 2 * Math.PI, false);
    ctx.fill();
  } else {
    // empty
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
      <Canvas width={800} height={800} drawer={generativeArt} />
    </div>
  );
}

export default App;
