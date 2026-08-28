import { Html, useProgress } from "@react-three/drei";

/* A small feed-forward network: signals travel left to right while the scene loads. */
const LAYERS = [
  { x: 16, ys: [26, 62, 98] },
  { x: 82, ys: [12, 45, 79, 112] },
  { x: 148, ys: [26, 62, 98] },
  { x: 204, ys: [62] },
];

const EDGES = LAYERS.slice(0, -1).flatMap((layer, i) =>
  layer.ys.flatMap((y1) =>
    LAYERS[i + 1].ys.map((y2) => ({ x1: layer.x, y1, x2: LAYERS[i + 1].x, y2 })),
  ),
);

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html as='div' center>
      <div className='nn-loader'>
        <svg className='nn-loader__net' viewBox='0 0 220 124' aria-hidden='true'>
          {EDGES.map((edge, index) => (
            <line key={`base-${index}`} {...edge} className='nn-loader__edge' />
          ))}

          {EDGES.map((edge, index) => (
            <line
              key={`pulse-${index}`}
              {...edge}
              className='nn-loader__pulse'
              style={{ animationDelay: `${(index % 12) * 0.16}s` }}
            />
          ))}

          {LAYERS.map((layer, layerIndex) =>
            layer.ys.map((y, nodeIndex) => (
              <circle
                key={`${layerIndex}-${nodeIndex}`}
                cx={layer.x}
                cy={y}
                r='5'
                className='nn-loader__node'
                style={{ animationDelay: `${layerIndex * 0.22 + nodeIndex * 0.1}s` }}
              />
            )),
          )}
        </svg>

        <div className='nn-loader__meter'>
          <span style={{ width: `${progress}%` }} />
        </div>

        <p className='nn-loader__label'>
          {progress < 100 ? "initializing 3d scene" : "scene ready"}
          <b>{progress.toFixed(0)}%</b>
        </p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
