import { useEffect, useRef } from "react";
import "./Canvas.css"

type CanvasDrawer = (ctx : CanvasRenderingContext2D, width : number, height : number) => void

interface CanvasProps {
    width: number;
    height: number;
    drawer: CanvasDrawer;
}

export default function Canvas(props : CanvasProps) {
    const ref = useRef<HTMLCanvasElement>(null);
    const draw = () => {
        const ctx = ref.current?.getContext("2d");
        if (ctx) {
            console.log("drawing generative art...");
            ctx.clearRect(0, 0, props.width, props.height);
            props.drawer(ctx, props.width, props.height);
        }
    }

    useEffect(draw)

    return (
        <div className="canvas-container">
            <canvas className="canvas" ref={ref} {...props} />
            <button className="canvas-button" onClick={draw}>redraw</button>
        </div>
    )
}