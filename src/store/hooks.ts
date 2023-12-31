import { useContext, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { CanvasContext } from "../Context";
import Canvas from "./canvas";
import { ICanvasInstance } from "./canvas";

export function useCanvas(canvas?: any) {
  const canvasRef = useRef<ICanvasInstance>(null);

  if (!canvasRef.current) {
    if (canvas) {
      canvasRef.current = canvas;
    } else {
      const canvas = new Canvas();
      canvasRef.current = canvas.getPublicCanvas();
    }
  }

  return canvasRef.current;
}

// 获取操作canvas数据的函数
export function useCanvasByContext() {
  const canvas = useContext(CanvasContext);

  return canvas;
}

// 获取的是画布数据，this.canvas
export function useCanvasData() {
  const canvas = useContext(CanvasContext);
  return canvas.getCanvas();
}

export function useCanvasCmps() {
  const canvas = useContext(CanvasContext);
  return canvas.getCanvasCmps();
}

export function useGetCanvas(canvas: ICanvasInstance) {
  const id = useCanvasId();

  useEffect(() => {
    if (id !== null) {
      // getCanvas(id, (res: any) => {
      //   if (res.content.length > 100) {
      //     canvas.setCanvas(JSON.parse(res.content), { title: res.title });
      //   }
      // });
    }
  }, [canvas, id]);
}

// 获取画布唯一标识id
export function useCanvasId(): number | null {
  const [params] = useSearchParams();
  let id: string | number | null = params.get("id");

  if (id === null) {
    return null;
  }

  id = parseInt(id || "");

  return id;
}
