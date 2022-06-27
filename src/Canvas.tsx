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

    useEffect(() => {
        const ctx = ref.current?.getContext("2d");
        if (ctx) {
            console.log("drawing generative art...");
            props.drawer(ctx, props.width, props.height);
        }
    })

    return (
        <canvas className="canvas" ref={ref} {...props} />
    )
}